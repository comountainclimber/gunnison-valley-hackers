import React from "react";
import YouTube from "react-youtube";

import mock from "../assets/week4/TODO_LIST.png";

export default () => (
  <>
    <h1 class="week-number"> Week 4 </h1>

    <ul>
      <h4>Resources:</h4>
      <li>Week 4 lecture on youtube: (coming soon)</li>
      <li>
        <a
          href="https://docs.google.com/presentation/d/14PHXMSjBxVpa9DVNkNFbYiNt3mMc2K288q4HhlNLupw/edit?usp=sharing"
          target="_blank"
        >
          Week 4 slides
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form"
          target="_blank"
        >
          Your first form!
        </a>{" "}
        (do not worry about "Sending form data to your web server" and after
        unless interested)
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById"
          target="_blank"
        >
          Document.getElementById()
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"
          target="_blank"
        >
          Element.innerHTML
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML"
          target="_blank"
        >
          Element.insertAdjacentHTML()
        </a>
      </li>
    </ul>

    <ul>
      <h4> The assignment: </h4>
      <div>
        This week we will be combining everything we have learned to create a
        "todo" app. I created the foundation and boilerplate for you to get
        started here:{" "}
        <a href="https://jsfiddle.net/za5e78x6/1/" target="_blank">
          https://jsfiddle.net/za5e78x6/1/
        </a>
        <br />
        Please use this as your foundation to implement the following mock up:
        <br />
        <br />
        Note that this mock up is using "Poppins" font which is available for
        free via google fonts. <b>BONUS:</b> Clicking a task dynamically adds
        "strikethrough" to the text
        <br />
        <br />
        <img src={mock} />
      </div>
    </ul>
  </>
);
