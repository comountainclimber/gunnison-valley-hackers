import React from "react";

import MockUp from "../assets/week1/images/mock_up.jpg";
import citrine from "../assets/week1/images/citrine.png";
import ruby from "../assets/week1/images/ruby.png";
import ScreenShot from "../assets/week1/images/screen-shot-1.png";
import FlippingCard from "../components/FlippingCard";

export default () => (
  <>
    <h1 class="week-number"> Week 1 </h1>
    {/* <h3> Setting up your development environment: </h3> */}
    {/* <ol>
      <h4> The UNIX shell </h4>
      <li>
        First you need to become familiar with the very basics of operating a
        unix shell. Its the basis for many things we will be doing. On your mac
        use <code> cmnd + spacebar </code> and type in <code>terminal</code>.
      </li>
      <li>
        Follow along with this resource{" "}
        <a
          href="https://www.tjhsst.edu/~dhyatt/superap/unixcmd.html"
          target="blank"
        >
          https://www.tjhsst.edu/~dhyatt/superap/unixcmd.html{" "}
        </a>{" "}
        and become familiar with the basics of intercating with your computer
        via the command line - specifcally creating files and navigating through
        directories.
      </li>
      <li>
        Create a directory called <code>projects</code> somewhere near the root
        of your User directory. This is where you will keep all of your
        projects.
      </li>
      <li>
        Create a directory for your first assignment (which you will be posting
        to github).
      </li>
      <li>
        Within this directory create two files. index.html and styles.css{" "}
        <code> touch index.html styles.css </code>
      </li>
    </ol> */}
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
        can remember and easiy access:
        <img id="screen-shot" src={ScreenShot} />
      </li>
    </ol>
    <ul>
      <h4> The assignment: </h4>
      <div>
        As a professional developer you are frequently asked to develop what are
        known as <b>components</b>. Think about the layout of apps like Facebook
        and Instagram and you will quickly realize that the entire User
        Interface is comprised of small modular pieces. This week we will be
        building our very first component. A card that displays information
        about various precious gems 💎💎💎💎
      </div>
      <br />
      <div>
        Using HTML and CSS alone (links to the gem image files are included
        below simply right click and save image) you are going to reproduce this
        mock up. Its important to note that as developers there are many tools
        we can use to speed up our work flow. One amazing tool that you are
        going to want to use during this assignment (and future projects) are
        Chrome dev tools. To open right click in chrome and click "Inspect".
        Shifiting over to the elements page will allow you to edit the css of
        any website in real time (including this one).{" "}
        <a href="https://developer.chrome.com/devtools" target="blank">
          {" "}
          https://developer.chrome.com/devtools{" "}
        </a>
      </div>
      <br />
      <b> BONUS:</b> have the card flip like in the example below. A great write
      up of how to achieve this effect can be found here{" "}
      <a href="https://davidwalsh.name/css-flip">
        https://davidwalsh.name/css-flip
      </a>
      <br />
      <br />
      <div>
        <b>NOTE: This is meant to be very challenging!</b> It doesnt need to be
        absolutely perfect... If you are getting blocked or stuck post a message
        in the FB group or reach out and send me an email. Do the best you can
        and we will review the assignment during our next meeting.
      </div>
      <br />
      <FlippingCard />
      <img id="mock-up" src={MockUp} />
      <img className="gem-asset" src={citrine} />
      <img className="gem-asset" src={ruby} />
      {/* <li>
        {" "}
        The resources for these icons can be found in <code>
          {" "}
          /images{" "}
        </code>{" "}
      </li>
      <li>
        {" "}
        <a href="https://hipsum.co/"> https://hipsum.co/ </a> is a great
        resource for placeholder content{" "}
      </li>
      <li>
        {" "}
        Ultimately the goal is to have these cards flip in place (something
        similar to this){" "}
        <a href="https://davidwalsh.name/demo/css-flip.php" target="blank">
          https://davidwalsh.name/demo/css-flip.php
        </a>{" "}
        They can be stacked in a column or a row however you prefer.
      </li>
      <div>
        When you are finished you will create a github repo and upload your
        project. This will be the start of your awesome portfolio.
      </div> */}
    </ul>
  </>
);
