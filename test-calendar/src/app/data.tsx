import Timezone from 'timezone-enum';

export interface IBusinessOpeningHours {
    weeks: 'ALL' | 'EVEN' | 'ODD',
    day: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN',
    start: number, // minutes from midnight (TimeZone-independent)
    end: number, // minutes from midnight (TimeZone-independent)

    // --- Client-side only properties, do not exist on server side ---
    // Temporary id to uniquely identify opening hours that were not submitted to API yet
    idempotentId: string,
}
export const calendarSettings = {
    businessName: '',
    country: 'NL',
    countries: ['BE', 'DE', 'NL'],
    customerTypes: ['PRIVATE'],
    firstDayOfWeek: "MON",
    limitBookingTimeWindow: "NEVER",
    locale: "nl-NL",
    openingHours: [
        {
            "weeks": "ALL",
            "day": "MON",
            "start": 480,
            "end": 1020,
            "idempotentId": "5609a029-e22a-4253-b384-26f9c64ba4a8"
        },
        {
            "weeks": "ALL",
            "day": "TUE",
            "start": 480,
            "end": 1020,
            "idempotentId": "b3cdab6a-f813-466e-9510-19716c9a3045"
        },
        {
            "weeks": "ALL",
            "day": "WED",
            "start": 480,
            "end": 720,
            "idempotentId": "e26979d1-6503-4539-a05e-efd9dca9fd6e"
        },
        {
            "weeks": "ALL",
            "day": "THU",
            "start": 540,
            "end": 1020,
            "idempotentId": "a4f8487f-7483-4164-b057-8de255bc05fb"
        },
        {
            "weeks": "ALL",
            "day": "FRI",
            "start": 480,
            "end": 720,
            "idempotentId": "baa27933-f8d7-4bd2-aa51-431f30dde168"
        },
        {
            "weeks": "ALL",
            "day": "SAT",
            "start": 540,
            "end": 720,
            "idempotentId": "82577f05-b252-4b18-8fa8-2f850ab20eb3"
        }
    ] as IBusinessOpeningHours[],
    personnel: [],
    revenuePdfGeneration: "NONE",
    revenueVATPercentages: [null],
    showPrivateCustomerBirthDate: false,
    slotSize: 15,
    timeZone: Timezone["Europe/Amsterdam"]
}

export const calendarView = 'week';

export const selectedDate = new Date();

export const events = [
    {
        "id": 407,
        "title": "An",
        "description": null,
        "eventType": "CUSTOMER_APPOINTMENT",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 697,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "An",
            "contactBirthDate": new Date("1986-05-15T00:00:00.000Z"),
            "email": "a.e.m.koenraadt@gmail.com",
            "phoneNumber": "+31612345678",
            "note": "",
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "BE",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": true,
            "noShowCount": 6,
            "lastNoShow": new Date("2024-07-02T11:30:00.000Z")
        },
        "start": new Date("2024-07-15T06:00:00.000Z"),
        "end": new Date("2024-07-15T07:30:00.000Z"),
        "bufferTimeInMinutes": 15,
        "services": [
            {
                "serviceId": 549,
                "quantity": 1,
                "title": "Gelaatsverzorging VIP",
                "categoryTitle": "Joep only",
                "sellingPricePerItem": 15.23,
                "durationInMinutes": 90,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 408,
        "title": "Kim",
        "description": null,
        "eventType": "CUSTOMER_APPOINTMENT",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 560,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Kim",
            "contactBirthDate": null,
            "email": null,
            "phoneNumber": null,
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-15T07:45:00.000Z"),
        "end": new Date("2024-07-15T08:00:00.000Z"),
        "bufferTimeInMinutes": 15,
        "services": [
            {
                "serviceId": 483,
                "quantity": 1,
                "title": "Massage",
                "categoryTitle": "All",
                "sellingPricePerItem": 50,
                "durationInMinutes": 15,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 409,
        "title": "Ettie",
        "description": null,
        "eventType": "CUSTOMER_APPOINTMENT",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 513,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Ettie",
            "contactBirthDate": null,
            "email": null,
            "phoneNumber": null,
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-15T08:30:00.000Z"),
        "end": new Date("2024-07-15T09:30:00.000Z"),
        "bufferTimeInMinutes": 15,
        "services": [
            {
                "serviceId": 516,
                "quantity": 1,
                "title": "Rug schouder nek massage",
                "categoryTitle": null,
                "sellingPricePerItem": 95,
                "durationInMinutes": 0,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 417,
        "title": "Diana Koenraadt",
        "description": "",
        "eventType": "CUSTOMER_APPOINTMENT",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 611,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Diana Koenraadt",
            "contactBirthDate": new Date("1984-11-06T00:00:00.000Z"),
            "email": "diana@jodibooks.com",
            "phoneNumber": "+31850608503",
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "BE",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-15T11:00:00.000Z"),
        "end": new Date("2024-07-15T12:30:00.000Z"),
        "bufferTimeInMinutes": 15,
        "confirmationSentDate": new Date("2024-07-11T07:02:08.768Z"),
        "services": [
            {
                "serviceId": 549,
                "quantity": 1,
                "title": "Gelaatsverzorging VIP",
                "categoryTitle": "Joep only",
                "sellingPricePerItem": 15.23,
                "durationInMinutes": 90,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 414,
        "title": "Sanne Verbeek",
        "description": "Vragen of ze ook upgrade wil",
        "eventType": "CUSTOMER_APPOINTMENT",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 472,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Sanne Verbeek",
            "contactBirthDate": null,
            "email": "sanneverbeek@hotmail.com",
            "phoneNumber": "+31612345678",
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-17T07:30:00.000Z"),
        "end": new Date("2024-07-17T09:00:00.000Z"),
        "bufferTimeInMinutes": 15,
        "confirmationSentDate": new Date("2024-07-11T07:03:11.136Z"),
        "services": [
            {
                "serviceId": 549,
                "quantity": 1,
                "title": "Gelaatsverzorging VIP",
                "categoryTitle": "Joep only",
                "sellingPricePerItem": 15.23,
                "durationInMinutes": 90,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 418,
        "title": "Andre",
        "description": null,
        "eventType": "CUSTOMER_APPOINTMENT",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 2,
            "name": "Ettie",
            "color": "#FA8072",
            "role": "EMPLOYEE"
        },
        "customer": {
            "id": 685,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Andre",
            "contactBirthDate": new Date("2011-11-11T00:00:00.000Z"),
            "email": "a.e.m.koenraadt+andre@gmail.com",
            "phoneNumber": "",
            "note": "Gewijzigd met tablet ",
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "BE",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-18T08:00:00.000Z"),
        "end": new Date("2024-07-18T09:00:00.000Z"),
        "bufferTimeInMinutes": 0,
        "confirmationSentDate": new Date("2024-07-11T07:17:25.104Z"),
        "services": [],
        "isNoShow": false,
        "committed": true,
        "resourceId": 2
    },
    {
        "id": 420,
        "title": "Nieuwe klant",
        "description": "",
        "eventType": "CUSTOMER_APPOINTMENT",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 2,
            "name": "Ettie",
            "color": "#FA8072",
            "role": "EMPLOYEE"
        },
        "customer": {
            "id": 722,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Nieuwe klant",
            "contactBirthDate": null,
            "email": "nieuweklant@jodibooks.com",
            "phoneNumber": "+31612345678",
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-18T11:00:00.000Z"),
        "end": new Date("2024-07-18T13:00:00.000Z"),
        "bufferTimeInMinutes": 15,
        "confirmationSentDate": new Date("2024-07-11T07:24:21.709Z"),
        "services": [
            {
                "serviceId": 567,
                "quantity": 1,
                "title": "Acné behandeling",
                "categoryTitle": "Gezichtsbehandelingen",
                "sellingPricePerItem": 99,
                "durationInMinutes": 120,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 2
    },
    {
        "id": 404,
        "title": "Sanne Verbeek",
        "description": null,
        "eventType": "CUSTOMER_APPOINTMENT",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 3,
            "name": "Diana",
            "color": "#8A2BE2",
            "role": "EMPLOYEE"
        },
        "customer": {
            "id": 472,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Sanne Verbeek",
            "contactBirthDate": null,
            "email": "sanneverbeek@hotmail.com",
            "phoneNumber": "+31612345678",
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-19T06:00:00.000Z"),
        "end": new Date("2024-07-19T06:30:00.000Z"),
        "bufferTimeInMinutes": 15,
        "services": [
            {
                "serviceId": 510,
                "quantity": 1,
                "title": "Knippen vrouw",
                "categoryTitle": "Diana only",
                "sellingPricePerItem": 27.75,
                "durationInMinutes": 0,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 3
    }
];

export const backgroundEvents = [
    {
        "id": 407,
        "title": "Uitlooptijd",
        "description": null,
        "eventType": "BUFFER_TIME",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 697,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "An",
            "contactBirthDate": new Date("1986-05-15T00:00:00.000Z"),
            "email": "a.e.m.koenraadt@gmail.com",
            "phoneNumber": "+31612345678",
            "note": "",
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "BE",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": true,
            "noShowCount": 6,
            "lastNoShow": new Date("2024-07-02T11:30:00.000Z")
        },
        "start": new Date("2024-07-15T06:00:00.000Z"),
        "end": new Date("2024-07-15T07:45:00.000Z"),
        "bufferTimeInMinutes": 0,
        "services": [
            {
                "serviceId": 549,
                "quantity": 1,
                "title": "Gelaatsverzorging VIP",
                "categoryTitle": "Joep only",
                "sellingPricePerItem": 15.23,
                "durationInMinutes": 90,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 408,
        "title": "Uitlooptijd",
        "description": null,
        "eventType": "BUFFER_TIME",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 560,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Kim",
            "contactBirthDate": null,
            "email": null,
            "phoneNumber": null,
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-15T07:45:00.000Z"),
        "end": new Date("2024-07-15T08:15:00.000Z"),
        "bufferTimeInMinutes": 0,
        "services": [
            {
                "serviceId": 483,
                "quantity": 1,
                "title": "Massage",
                "categoryTitle": "All",
                "sellingPricePerItem": 50,
                "durationInMinutes": 15,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 409,
        "title": "Uitlooptijd",
        "description": null,
        "eventType": "BUFFER_TIME",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 513,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Ettie",
            "contactBirthDate": null,
            "email": null,
            "phoneNumber": null,
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-15T08:30:00.000Z"),
        "end": new Date("2024-07-15T09:45:00.000Z"),
        "bufferTimeInMinutes": 0,
        "services": [
            {
                "serviceId": 516,
                "quantity": 1,
                "title": "Rug schouder nek massage",
                "categoryTitle": null,
                "sellingPricePerItem": 95,
                "durationInMinutes": 0,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 417,
        "title": "Uitlooptijd",
        "description": "",
        "eventType": "BUFFER_TIME",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 611,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Diana Koenraadt",
            "contactBirthDate": new Date("1984-11-06T00:00:00.000Z"),
            "email": "diana@jodibooks.com",
            "phoneNumber": "+31850608503",
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "BE",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-15T11:00:00.000Z"),
        "end": new Date("2024-07-15T12:45:00.000Z"),
        "bufferTimeInMinutes": 0,
        "confirmationSentDate": new Date("2024-07-11T07:02:08.768Z"),
        "services": [
            {
                "serviceId": 549,
                "quantity": 1,
                "title": "Gelaatsverzorging VIP",
                "categoryTitle": "Joep only",
                "sellingPricePerItem": 15.23,
                "durationInMinutes": 90,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 414,
        "title": "Uitlooptijd",
        "description": "Vragen of ze ook upgrade wil",
        "eventType": "BUFFER_TIME",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 1,
            "name": "Joep",
            "color": "#6BAED6",
            "role": "OWNER"
        },
        "customer": {
            "id": 472,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Sanne Verbeek",
            "contactBirthDate": null,
            "email": "sanneverbeek@hotmail.com",
            "phoneNumber": "+31612345678",
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-17T07:30:00.000Z"),
        "end": new Date("2024-07-17T09:15:00.000Z"),
        "bufferTimeInMinutes": 0,
        "confirmationSentDate": new Date("2024-07-11T07:03:11.136Z"),
        "services": [
            {
                "serviceId": 549,
                "quantity": 1,
                "title": "Gelaatsverzorging VIP",
                "categoryTitle": "Joep only",
                "sellingPricePerItem": 15.23,
                "durationInMinutes": 90,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 1
    },
    {
        "id": 420,
        "title": "Uitlooptijd",
        "description": "",
        "eventType": "BUFFER_TIME",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 2,
            "name": "Ettie",
            "color": "#FA8072",
            "role": "EMPLOYEE"
        },
        "customer": {
            "id": 722,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Nieuwe klant",
            "contactBirthDate": null,
            "email": "nieuweklant@jodibooks.com",
            "phoneNumber": "+31612345678",
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-18T11:00:00.000Z"),
        "end": new Date("2024-07-18T13:15:00.000Z"),
        "bufferTimeInMinutes": 0,
        "confirmationSentDate": new Date("2024-07-11T07:24:21.709Z"),
        "services": [
            {
                "serviceId": 567,
                "quantity": 1,
                "title": "Acné behandeling",
                "categoryTitle": "Gezichtsbehandelingen",
                "sellingPricePerItem": 99,
                "durationInMinutes": 120,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 2
    },
    {
        "id": 404,
        "title": "Uitlooptijd",
        "description": null,
        "eventType": "BUFFER_TIME",
        "blockedEventType": "",
        "invoiceId": null,
        "personnel": {
            "id": 3,
            "name": "Diana",
            "color": "#8A2BE2",
            "role": "EMPLOYEE"
        },
        "customer": {
            "id": 472,
            "customerType": "PRIVATE",
            "businessName": null,
            "vatIdNumber": null,
            "contactName": "Sanne Verbeek",
            "contactBirthDate": null,
            "email": "sanneverbeek@hotmail.com",
            "phoneNumber": "+31612345678",
            "note": null,
            "address": [
                "",
                "",
                "",
                ""
            ],
            "zipCode": null,
            "locality": null,
            "country": "NL",
            "created": new Date("0001-01-01T00:00:00.000Z"),
            "updated": new Date("0001-01-01T00:00:00.000Z"),
            "isNoShow": false,
            "noShowCount": 0,
            "lastNoShow": null
        },
        "start": new Date("2024-07-19T06:00:00.000Z"),
        "end": new Date("2024-07-19T06:45:00.000Z"),
        "bufferTimeInMinutes": 0,
        "services": [
            {
                "serviceId": 510,
                "quantity": 1,
                "title": "Knippen vrouw",
                "categoryTitle": "Diana only",
                "sellingPricePerItem": 27.75,
                "durationInMinutes": 0,
                "vatPercentage": 21
            }
        ],
        "isNoShow": false,
        "committed": true,
        "resourceId": 3
    }
]

export interface IOpeningHours {
    personnelId: number[],
    start: Date,
    end: Date
}

export const openingHours: IOpeningHours[] = [
    {
        "personnelId": [
            1
        ],
        "start": new Date("2024-07-15T06:00:00.000Z"),
        "end": new Date("2024-07-15T10:00:00.000Z")
    },
    {
        "personnelId": [
            1
        ],
        "start": new Date("2024-07-15T11:00:00.000Z"),
        "end": new Date("2024-07-15T15:00:00.000Z")
    },
    {
        "personnelId": [
            1
        ],
        "start": new Date("2024-07-16T06:00:00.000Z"),
        "end": new Date("2024-07-16T10:00:00.000Z")
    },
    {
        "personnelId": [
            1
        ],
        "start": new Date("2024-07-16T11:00:00.000Z"),
        "end": new Date("2024-07-16T15:00:00.000Z")
    },
    {
        "personnelId": [
            1
        ],
        "start": new Date("2024-07-17T06:00:00.000Z"),
        "end": new Date("2024-07-17T10:00:00.000Z")
    },
    {
        "personnelId": [
            2
        ],
        "start": new Date("2024-07-18T07:00:00.000Z"),
        "end": new Date("2024-07-18T10:00:00.000Z")
    },
    {
        "personnelId": [
            2
        ],
        "start": new Date("2024-07-18T11:00:00.000Z"),
        "end": new Date("2024-07-18T15:00:00.000Z")
    },
    {
        "personnelId": [
            3
        ],
        "start": new Date("2024-07-19T06:00:00.000Z"),
        "end": new Date("2024-07-19T10:00:00.000Z")
    },
    {
        "personnelId": [
            3
        ],
        "start": new Date("2024-07-20T07:00:00.000Z"),
        "end": new Date("2024-07-20T10:00:00.000Z")
    }
]

export const selectedPersonnel = [
    {
        "id": 1,
        "name": "Joep",
        "color": "#6BAED6",
        "role": "OWNER",
        "selected": true
    },
    {
        "id": 2,
        "name": "Ettie",
        "color": "#FA8072",
        "role": "EMPLOYEE",
        "selected": false
    },
    {
        "id": 3,
        "name": "Diana",
        "color": "#8A2BE2",
        "role": "EMPLOYEE",
        "selected": false
    }
]