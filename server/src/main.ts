import * as T from '../../middle/types';

// Google apps script event object
// https://developers.google.com/apps-script/guides/web
type GoogleAppsScriptEvent = {
  queryString: string | null,
  parameter: object,
  parameters: object,
  contextPath: string,
  contentLength: number,
  postData: {
    length: number,
    type: string,
    contents: string,
    name: string
  }
}

const agentAttrs = [
  {
    "first_name": "Степан",
    "last_name": "Карачаев",
    "middle_name": "Иванович"
  },
  {
    "first_name": "Михаил",
    "last_name": "Иванов",
    "middle_name": "Демидович"
  },
  {
    "first_name": "Василий",
    "last_name": "Дроздов",
    "middle_name": "Михайлович"
  },
];

const streets = [
  'ул. Минская',
  'ул. Барабинская',
  'ул. Ленина',
];

const photos = [
  'https://lh3.googleusercontent.com/pw/ACtC-3dOdEEOOFU_ytiFcwFZjh8IhslGujN-j1N1cEax7jYO06-yvjEQpv3Mf_hD4AFcvcGtrmHyDjm5Mn6wqP86-vCoutsODSFNa8g9F7VN3gpcWFwnB_ZfMICnk-DoPtqFo68gDOeyx0nAhJT7hH3XIM8=w828-h546-no',
  'https://lh3.googleusercontent.com/pw/ACtC-3fCwaCrHPbTX50l7DIuX6DI1JlT8VXAn42LowPmg3ommBeoHBmMHb7KjQoYAYwB9V7T0-0OKVt3r4aKsxbQ78xtKfRQE0Oo3zrTtphJ1KSV5rDI8tAObFJD44xcRG8PbDC1DgM3hrr9pk3tFPUCQEw=w759-h500-no',
  'https://lh3.googleusercontent.com/pw/ACtC-3cWGSKv05JBtSUV6lPCxcRsks0YuVxtgkyvBTjUhpBt5Xcrd8a38vG6moWwyKVUVST_vLxxxYcuYo90xa6w6aJV7LL120TxEcV_sgTCfYCsG-4wFXYZoHXZXNz6NJ6MO6790xRwXuRcc6owBgbjpIo=w1016-h669-no',
]

// This function always returns a random number
// between min and max (both included)
function getRandomIntegerBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Server code
function doGet(event: GoogleAppsScriptEvent) {

  const data: T.Data = {

    response: new Array(20)
      .fill(null)
      .map(() => {
        const rooms = getRandomIntegerBetween(1, 5);
        const entity = {
          type: 'flat',
          id: Math.random(),
          attributes: {
            photo: photos[getRandomIntegerBetween(0, photos.length-1)],
            title: `Продам ${rooms}-комнатную квартиру`,
            rooms: rooms,
            address: {
              city: 'Тюмень',
              street: streets[getRandomIntegerBetween(0, streets.length-1)],
              house: getRandomIntegerBetween(1, 200),
              room: getRandomIntegerBetween(1, 10),
            },
            area: getRandomIntegerBetween(30, 250),
            unit: 'квм',
          },
          relationships: {
            type: 'agent',
            id: Math.random(),
            attributes: agentAttrs[getRandomIntegerBetween(0, agentAttrs.length-1)],
          }
        };

        return entity;
      })
  }

  return ContentService.createTextOutput(JSON.stringify(data));
}