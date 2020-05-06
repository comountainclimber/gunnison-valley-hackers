import React from "react";
import YouTube from "react-youtube";

import mock from "../assets/week4/TODO_LIST.png";

export default () => (
  <>
    <h1 class="week-number"> Week 6 </h1>

    <ul>
      <h4>Resources:</h4>
      <li>
        Week 6 lecture on youtube: <YouTube videoId="Ao7VmAjA5vQ" />
      </li>
      <li>
        <a
          href="https://docs.google.com/presentation/d/1uoIx14DNQGWU73Z78S69-7AWGNVeksrw9Yx8s5qZp_I/edit?usp=sharing"
          target="_blank"
        >
          Week 6 slides
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
          target="_blank"
        >
          HTTP
        </a>{" "}
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          target="_blank"
        >
          Fetch
        </a>{" "}
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
          target="_blank"
        >
          Using Fetch
        </a>{" "}
      </li>
      <li>
        <a
          href="https://medium.com/better-programming/an-introduction-to-promises-in-javascript-a29bfdad4643"
          target="_blank"
        >
          Introduction to promises
        </a>{" "}
      </li>
      <li>
        <a href="https://github.com/public-apis/public-apis" target="_blank">
          List of public APIs
        </a>{" "}
      </li>
      <li>
        <a
          href="https://www.weather.gov/documentation/services-web-api"
          target="_blank"
        >
          Weather.gov public API
        </a>{" "}
      </li>
    </ul>

    <h4> The FINAL assignment (for now): </h4>
    <div>
      Building from everything we have covered over the past several weeks we
      are going to implement one of the two following options:
      <ol>
        <li>
          A weather app that fetches data from the weather.gov (or any weather)
          API and renders that data to the DOM
        </li>
        <li>
          An application that fetches data from any one of the "List of public
          APIs" above in order to dynamically fetch data and render it to the
          screen
        </li>
      </ol>
      Plan ahead before creating your applicaton - think project structure,
      wireframe the UI elements etc. Be sure to keep your UI code maintainable
      by referencing a single state object (as we have covered a few times)
      Lastly please reach out via email or the facebook group if you encounter
      any blockers or issues. Be creative, good luck and have fun!
    </div>
  </>
);
