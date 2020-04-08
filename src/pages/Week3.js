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
    <h1 class="week-number"> Week 3 </h1>

    <ul>
      <h4>Resources:</h4>
      <li>Week 3 lecture on youtube: (coming soon)</li>
      <li>
        <a
          href="https://docs.google.com/presentation/d/1-Zg8LloqT3Kpb3zZP5h0AGyvbpJw1wRjnLukqJwvBpg/edit?usp=sharing"
          target="_blank"
        >
          Week 3 slides
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"
          target="_blank"
        >
          The script tag
        </a>
      </li>
      <li>
        <a href="https://javascript.info/intro" target="_blank">
          Intro to JavaScript
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
          target="_blank"
        >
          JavaScript basics
        </a>
      </li>
    </ul>

    <ul>
      <h4> The assignment: </h4>
      <div>
        This week we will be focusing exclusively on JS exercises to reinforce
        the concepts of the slides and lecture from this week. There will be
        little if any HTML and CSS involved. Please please reach out on the FB
        group if there is any issues or if anything is blocking you.
      </div>

      <li>
        <a
          href="https://www.codecademy.com/learn/introduction-to-javascript"
          target="_blank"
        >
          Codeacademy's introduction to Javascript
        </a>{" "}
        Please attempt to complete sections 1-5 (including section 5 on Arrays)
      </li>

      <li>
        <a href="https://the-winter.github.io/codingjs/" target="_blank">
          "Codingbat" problems
        </a>{" "}
        These exercises have been created to solidify your understanding of how
        JavaScript works and will seriously strenghten your chops. Please
        attempt to complete at least 10 problems for the first section{" "}
        <b>Warmup-1</b> as well as a few from <b> Warmup-2</b>
      </li>
    </ul>
  </>
);
