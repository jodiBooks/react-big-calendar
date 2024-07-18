'use client'

import { format, startOfWeek, getDay, addMinutes, startOfDay, parse } from 'date-fns';
import { nlBE, enUS, nl } from 'date-fns/locale';
import Timezone from 'timezone-enum';
import { toZonedTime } from 'date-fns-tz';
import { Calendar, dateFnsLocalizer } from '../../../src/index';
import withDragAndDrop from '../../../src/addons/dragAndDrop';
import { HTMLAttributes, useEffect, useState } from 'react';
import { backgroundEvents, calendarSettings, calendarView, events, IBusinessOpeningHours, openingHours, selectedDate, selectedPersonnel } from './data';

// run `yarn prepublishOnly` from react-big-calendar folder first
import "../../../lib/addons/dragAndDrop/styles.css";
import "../../../lib/css/react-big-calendar.css";
import Modal from './modal';

const locales = {
  'en-US': enUS,
  'nl-BE': nlBE,
  'nl-NL': nl // default
};

const localizer = dateFnsLocalizer({
  format,
  startOfWeek,
  getDay,
  locales
});
const DnDCalendar = withDragAndDrop(Calendar);

// Show current (now) in business time as current browser time.
function getZonedNow(timeZone: Timezone): Date {
  return toZonedTime(new Date(), timeZone);
}

function scrollToTime(openingHours: IBusinessOpeningHours[]): Date {
  if (!openingHours.length) {
    return startOfDay(new Date());
  }
  // We scroll to the same time every day. To determine that time, we take the earliest starting hour (minutes from midnight).
  const earliestOpening = Math.min.apply(null, openingHours.map(a => a.start));
  // Then we subtract an hour to show some margin (some people use this space in their agenda to put private reminders) and create a date object.
  return addMinutes(startOfDay(new Date()), earliestOpening - 60);
}

const returnedStyle = { style: { backgroundColor: '#ebebeb' } };
function slotPropGetter(date: Date /* in browserTimeZone */, resourceId: number | string | undefined | null, openHours: {
  personnelId: number[],
  start: Date,
  end: Date
}[]): HTMLAttributes<HTMLDivElement> {
  // react-big-calendar also sends the first column with times
  // This times column has resourceId is undefined
  // whereas the day columns have resourceId = null. We leave the background unchanged.
  if (resourceId === undefined) {
    // We leave the background unchanged.
    return {};
  }

  const slotStart = date;
  const slotEnd = addMinutes(date, 15);

  // check if the start of the given slot is within an open period
  // If the open hours are smaller than the slot, still mark it as OPEN for visibility
  if (openHours.find(open => (open.personnelId?.some(p => p === resourceId) && slotStart < open.end && slotEnd > open.start))) {
    // a. If true, the salon is open and we leave the background unchanged (white).
    return {};
  } else {
    // b. If false, the salon is closed and we change the background (mediumGray, as lightGray is used to highlight current day).
    return returnedStyle;
  }
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [counter, setcounter] = useState(1);
  console.log('render', counter);
  useEffect(() => {
    setcounter(counter + 1);
  },[]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <DnDCalendar
          culture={calendarSettings.locale}
          localizer={localizer}
          date={selectedDate}
          defaultDate={getZonedNow(calendarSettings.timeZone)}
          draggableAccessor={true}
          events={[...events]}
          backgroundEvents={backgroundEvents}
          getNow={(): Date => getZonedNow(calendarSettings.timeZone)}

          // onDrillDown={drillDown}
          //onEventDrop={resizeEvent}
          //onEventResize={resizeEvent}
          //onNavigate={onNavigate}
          onSelectEvent={() => setShowModal(true)}
          //onSelectSlot={onSelectSlot}
          //onView={(view): void => onNavigate(selectedDate, view)}

          //resources={getSelectedResources()}
          //resourceIdAccessor='resourceId'
          //resourceTitleAccessor='resourceTitle'

          //resizableAccessor={(event): boolean => isEventEditable(event, planEvent?.newEvent, isMobile)} // allow resizing if true
          scrollToTime={scrollToTime(calendarSettings.openingHours)}
          //scrollToTime={console.log(scrollToTime(calendarSettings.openingHours))}
          selectable
          showMultiDayTimes
          slotPropGetter={(date: Date, resourceId?: number | string): HTMLAttributes<HTMLDivElement> => {
            // Bug in React-Big-Calendar: In week-view you don't receive resourceId; it is "null".
            // So we have to pass that in ourselves, but only if it is not undefined, which is needed to indentify the times column:
            const buggyResourceId = calendarView == 'week' && resourceId !== undefined ? (selectedPersonnel.find(p => p.selected)?.id ?? null) : resourceId;
            return slotPropGetter(date, buggyResourceId, openingHours); // with browser timezone as origin
          }}
          step={calendarSettings.slotSize}
          style={{ height: "80vh" }}
          timeslots={30 / calendarSettings.slotSize}
          // tooltipAccessor={(e: ICalendarEvent): string => e.title || (e.customer && e.customer.businessName) || (e.customer && e.customer.contactName) || nl.Anonymous}

          view={calendarView} // JODI-1394: Appearance of keyboard on tablet/mobile triggers re-render and switches week-day view
          views={{ day: true, week: true, month: true /* The order matters! Change the order and the order in the vierswitcher changes. */ }}
        />
      </div>
    </main>
  );
}
