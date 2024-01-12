const object = {
  "data": {
      "coord": {
          "lon": -0.1257,
          "lat": 51.5085
      },
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "base": "stations",
      "main": {
          "temp": 5.22,
          "feels_like": 3.1,
          "temp_min": 4.36,
          "temp_max": 6.11,
          "pressure": 1033,
          "humidity": 85
      },
      "visibility": 10000,
      "wind": {
          "speed": 2.57,
          "deg": 10
      },
      "clouds": {
          "all": 100
      },
      "dt": 1705075078,
      "sys": {
          "type": 2,
          "id": 2075535,
          "country": "GB",
          "sunrise": 1705046526,
          "sunset": 1705076074
      },
      "timezone": 0,
      "id": 2643743,
      "name": "London",
      "cod": 200
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
      "content-length": "466",
      "content-type": "application/json; charset=utf-8"
  },
  "config": {
      "transitional": {
          "silentJSONParsing": true,
          "forcedJSONParsing": true,
          "clarifyTimeoutError": false
      },
      "adapter": [
          "xhr",
          "http"
      ],
      "transformRequest": [
          null
      ],
      "transformResponse": [
          null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
          "Accept": "application/json, text/plain, */*"
      },
      "url": "https://api.openweathermap.org/data/2.5/weather?q=London&appid=691bd0077813775638e00b909e6b2157&units=metric",
      "method": "get"
  },
  "request": {}
}