import ApiCalendar from 'react-google-calendar-api'

const config = {
  clientId: '800800416255-9vr6m774d2a3253s31q996ta0okvc7df.apps.googleusercontent.com',
  apiKey: 'AIzaSyAyAXmOLakwXi6U5L09XBm0yLINvvY7yic',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
}

export const apiCalendar = new ApiCalendar(config)
