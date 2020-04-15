import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

import ScreenShot2 from "../assets/week1/Desktop.png";
import helloWorld from "../assets/week1/hello_world.png";

export default () => (
  <>
    <h1 class="week-number"> Week 1 </h1>
    <ol>
      <h4> Setting up your development environment: </h4>
      <li>
        To write code you will need what is known as a text editor. I highly
        reccomend using VSCode and its what I will be using throughout the
        course however feel free to use any editor.{" "}
        <a href="https://code.visualstudio.com/" target="blank">
          https://code.visualstudio.com/
        </a>
      </li>
      <li>
        Open a new window in VSCode. Go to File -> Save As and name the file{" "}
        <code>index.html</code> be sure to save the file in a directory that you
        can remember and easiy access.
      </li>
      <li>
        Following the simple and short steps in this video download the "open in
        browser" extension so that you can right click and open your new file in
        your browser
        <br />
        <br />
        <YouTube videoId="T8DrI6K8ArE" />
      </li>
      <li>
        Edit <code>index.html</code> by adding the words "Hello world" to the
        file and open it in the browser. You should see what you just typed in
        chrome and are now ready to get started on the homework assignment!
        <br />
        <br />
        <img id="screen-shot" src={helloWorld} />
      </li>
    </ol>

    <ul>
      <h4>Resources:</h4>
      <li>
        Week 1 lecture on youtube:
        <YouTube videoId="vA5aNUaIyhc" />
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          target="_blank"
        >
          Getting started with HTML
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"
          target="_blank"
        >
          Getting started with CSS
        </a>
      </li>

      <li>
        <a href="http://flexboxfroggy.com/" target="_blank">
          Flexbox froggy
        </a>{" "}
        a game designed to help players learn CSS flexbox
      </li>

      <li>
        <Link to="/week-1-solution">The solutions</Link>{" "}
        <b> only check this if you are truly stuck</b>
      </li>
    </ul>

    <ul>
      <h4> The assignment: </h4>
      <div>
        For the first week's assignment we will be combining our knowledge of
        HTML5 and CSS to recreate the shapes and layout combinations found in
        the image below. Remember that this is meant to be very challenging and
        that its ok if you can only get some of these. Use the our facebook
        group for help on any of the sections and checkout the resources section
        above for tips and guidance.
      </div>
      <br />
      <div>
        Remember that you can use the colorpicker in chrome dev tools to find
        out the exact color of any and all of the shapes / borders.
      </div>
      <img id="screen-shot" src={ScreenShot2} />
    </ul>
  </>
);
