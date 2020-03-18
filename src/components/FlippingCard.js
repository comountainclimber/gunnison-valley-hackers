import React from "react";

import ruby from "../assets/week1/images/ruby.png";

export default () => (
  <div class="flip-container">
    <div class="flipper">
      <div class="front">
        <img src={ruby} />
      </div>
      <div class="back">
        <div id="card-title-row">
          <h3>Ruby</h3>
          <img src={ruby} />
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas
          orci placerat mauris tincidunt porttitor. Aenean ac nisl eget dui
          volutpat fringilla vitae non metus. Suspendisse potenti. Nam facilisis
          tortor odio, vel malesuada augue pretium sit amet. Phasellus vehicula,
          sem non auctor elementum, libero nulla hendrerit mauris, quis lobortis
          turpis justo nec ex. Nullam ut iaculis magna. Vestibulum a fermentum
          tellus. Sed velit nisl, gravida quis porttitor nec, luctus eget ante.
          In accumsan eros mattis accumsan posuere.
        </p>
      </div>
    </div>
  </div>
);
