# Grid Assignment

This is an assignment to create an interface for an event scheduling application. The interface
should be a single page application that makes a REST request to the provided endpoint server,
processes the response and renders the result in a web page.

## Background

We want to display a cruise ship's event schedule for a given day. The ship has multiple venues, and
each of the events takes place in one of them at a concrete time. Both events and venues have a name
that describes them.

For this assignment, all the schedule information is provided by a single endpoint, which is also
included in this repository to be run locally.

## User Interface

The User Interface should be displayed as a web-based Single Page Application. In it, we want to see
a timetable of the events, similar to a calendar view. One possible solution is to display venues as
columns and times as rows, then position the events in the appropriate row / column based on when
and where they happen.

The user interface should load all the data from the REST endpoint when the webpage is first
loaded. There is no interactivity besides the loading step. Once the information is loaded, it
should be rendered in the screen.

Each of the events should include its name, start time and color (see the endpoint section for
information on parsing the REST data). Each of the venues should include its name.

## Schedules endpoint

The REST endpoint is included in this code, and is served at <SERVER_URL>/schedules (for example,
http://localhost:3000/schedules). See the "Running the code" section on how to start the server.

When sending a GET request to the `/schedules` endpoint, the server will return a unique JSON
response with an array of events.

```js
[
  {
    _id: <string>,
    startTime: { hour: <number>, minute: <number>},
    duration: <number>,
    name: <string>,
    color: <string>
    venue: {
      _id: <string>,
      name: <string>,
    },
  }
]
```

### Response description

Each of the elements in the array represents a separate event in the schedule. Their fields are
explained next:

 - _id: A unique event ID, as a string.
 - startTime: The time at which the event starts, in 24 hour format. For example, 1:15pm would be
   expressed as `{hour: 13, minute: 15}`.
 - duration: The event's duration in minutes.
 - name: The event's name.
 - color: The event's color, with the format `#RRGGBB`.
 - venue: The venue where the event is happening, with an _id and a name.

## Solution Requirements

Solutions for this assignment should follow these requirements:

 - Implement one or more React components with the required steps, and add them to the `<App />`
   component in `client/components/App.jsx`.
 - Consume the schedule information when the application loads by performing a REST request to the
   included server.
 - If necessary, additional libraries can be added to the project with `npm install`.
 - Solutions should not alter the server side of the code, only the client part.
 - We'll evaluate the solution based on:
   + Code readability and simplicity.
   + Knowledge of JavaScript, HTML, CSS and React.
   + The solution's UI design.

## Running the code

The code can be executed by cloning this repository, then executing `npm install` and `npm run
start`. This will launch both the server and a Webpack development server with the client
code. After running the start command, a new browser will be automatically opened and pointed to the
Webpack server address (by default `http://localhost:8080`)

The server will default to `http://localhost:3000` (used to send REST API requests). The
`/schedules` endpoint is configured with the header `Access-Control-Allow-Origin: *` so the client
can perform REST requests even if it's served from a different URL.
