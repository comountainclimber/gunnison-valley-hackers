import React from "react";
import YouTube from "react-youtube";

import mock from "../assets/week4/TODO_LIST.png";

export default () => (
  <>
    <h1 class="week-number"> Week 5 </h1>

    <ul>
      <h4>Resources:</h4>
      <li>
        Week 5 lecture on youtube: <YouTube videoId="V258UTWVyAw" />
      </li>
      <li>
        <a
          href="https://docs.google.com/presentation/d/1NAt2RKCQwJimsicm3PglahbkowmSfiIkYoZW0Mmqq5c/edit?usp=sharing"
          target="_blank"
        >
          Week 5 slides
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
          target="_blank"
        >
          Local storage
        </a>{" "}
      </li>
    </ul>

    <ul>
      <h4> The assignment: </h4>
      <div>
        Building off of the work from week 4 the goal is to convert our TODO app
        to reference a single state object (as explained in the video) and to
        save the state to local storage so that our todos can "show up" even
        after the tab is closed.
      </div>
    </ul>
  </>
);
