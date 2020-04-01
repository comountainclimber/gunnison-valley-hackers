import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

import MockUp from "../assets/week1/images/mock_up.jpg";
import citrine from "../assets/week1/images/citrine.png";
import ruby from "../assets/week1/images/ruby.png";
import ScreenShot from "../assets/week1/images/screen-shot-1.png";
import ScreenShot2 from "../assets/week1/images/Desktop.png";
import FlippingCard from "../components/FlippingCard";
import helloWorld from "../assets/week1/images/hello_world.png";

import ScreenShot3 from "../assets/week2/Artboard.png";

export default () => (
  <>
    <h1 class="week-number"> Week 2 </h1>
    <ol>
      <h4> Setting up your development environment: </h4>
      <li>
        Open a new window in VSCode. Go to File -> "Add Folder to Workspace..."
        name the folder <code>GVH-week-2</code>
      </li>
      <li>
        Click the "add file" button in VSCode and add <code>index.html</code>{" "}
        and <code>styles.css</code>
      </li>
      <li>
        Link the html document to the stylesheet as explained in the lecture.
        More info{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"
          target="_blank"
        >
          can be found here{" "}
        </a>
      </li>
    </ol>

    <ul>
      <h4>Resources:</h4>
      <li>Week 2 lecture on youtube: (coming soon)</li>
      <li>
        <a
          href="https://docs.google.com/presentation/d/1xqyC4w5hPjs64ODSAtMtomimrrqaX0SVW_upCe8Uez4/edit?usp=sharing"
          target="_blank"
        >
          Week 2 slides
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
          target="_blank"
        >
          What’s in the head? Metadata in HTML
        </a>
      </li>

      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate"
          target="_blank"
        >
          HTML VSCode Boilerplate Extension
        </a>
      </li>

      <li>
        <a href="https://baconipsum.com/" target="_blank">
          Bacon ipsum 🥓🥓🥓
        </a>
      </li>

      <li>
        <a href="https://hipsum.co/" target="_blank">
          Hipster ipsum
        </a>
      </li>

      <li>
        <a href="https://www.lipsum.com/" target="_blank">
          Lorem ipsum
        </a>
      </li>

      <li>
        <a href="https://placeholder.com/" target="_blank">
          Image placeholder generator
        </a>
      </li>

      <li>
        <a href="http://flexboxfroggy.com/" target="_blank">
          Flexbox froggy
        </a>{" "}
        a game designed to help players learn CSS flexbox
      </li>
    </ul>

    <ul>
      <h4> The assignment: </h4>
      <div>
        This week we are putting everything we have learned together to create a
        blog for writing up articles on programming. Congrats on getting this
        far... No solution will be provided this week so do your best and have
        fun!
      </div>
      <br />
      <img id="screen-shot-3" src={ScreenShot3} />
    </ul>
  </>
);
