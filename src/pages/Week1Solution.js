import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const example1 = `
<div id="example-1"></div>

<style>
#example-1 {
  height: 100px;
  width: 100px;
  background: #ffffff;
  border: 1px solid #979797;
}
</style>
`;

const example2 = `
<div id="example-2"></div>

<style>
#example-2 {
  background: #3be82b;
  border: 1px solid #3be82b;
  border-radius: 4px;
  height: 100px;
  width: 100px;
}
</style>
`;

const example3 = `
<div id="example-3"></div>

<style>
#example-3 {
  background: #272343;
  border-radius: 50px;
  height: 100px;
  width: 100px;
}
</style>
`;

const example4 = `
<div id="example-4"></div>

<style>
#example-4 {
  background: #F925FF;
  height: 100px;
  width: 242px;
}
</style>
`;

const example5 = `
<div id="example-5-container">
  <div class="example-5-square"></div>
  <div class="example-5-square"></div>
  <div class="example-5-square"></div>
  <div class="example-5-square"></div>
</div>

<style>
#example-5-container {
  display: flex;
}

.example-5-square {
  margin: 0 6px;
  height: 100px;
  width: 100px;
  background: #ffffff;
  border: 1px solid #979797;
}

.example-5-square:nth-child(1) {
  margin: 0 6px 0 0;
}

.example-5-square:last-child {
  margin: 0 0 0 6px;
}
</style>
`;

const example6 = `
<div id="example-6-container">
  <div class="example-6-square"></div>
  <div class="example-6-square"></div>
  <div class="example-6-square"></div>
  <div class="example-6-square"></div>
</div>

<style>
#example-6-container {
  display: flex;
  flex-direction: column;
}

.example-6-square {
  margin: 0 6px;
  height: 100px;
  width: 100px;
  background: #ffffff;
  border: 1px solid #979797;
}

.example-6-square:nth-child(1) {
  margin: 0 0 6px 0;
}

.example-6-square:last-child {
  margin: 6px 0 6px 0;
}
</style>
`;

const example7 = `
<div id="example-7"></div>

<style>
#example-7 {
  background: #dfdfdf;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  width: 400px;
  height: 150px;
}
</style>
`;

const example8 = `
<div id="example-8"></div>

<style>
#example-8 {
  background: #DFDFDF;
  box-shadow: 0 7px 16px 0 rgba(0,0,0,0.50);
  width: 400px;
  height: 150px;
}
</style>
`;

const example9 = `
<div id="example-9-container">
  <div class="example-9-square"></div>
  <div class="example-9-square"></div>
  <div class="example-9-square"></div>
</div>

<style>
#example-9-container {
  display: flex;
}

.example-9-circle {
  margin: 0 200px;
  height: 165px;
  width: 135px;
  background: #ffffff;
  border: 1px solid #979797;
  border-radius: 100%;
}

.example-9-circle:nth-child(1) {
  margin: 0;
}

.example-9-circle:last-child {
  margin: 0;
}
</style>
`;

const example10 = `
<div id="example-10">
Gunnison <b>valley</b> hackers
</div>

<style>
#example-10 {
  font-family: "Times New Roman", Times, serif;
  font-size: 48px;
}
</style>
`;

const example11 = `
<div id="example-11">
Gunnison valley hackers
</div>

<style>
#example-11 {
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 48px;
}
</style>
`;

const example12 = `
<div id="example-12">
Gunnison valley hackers
</div>

<style>
#example-12 {
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 48px;
  background: #272343;
  border: 1px solid #979797;
  border-radius: 18px;
  color: #ffffff;
  width: 582px;
  height: 178px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
`;

const example13 = `
<div id="example-13">
⛰
</div>

<style>
#example-13 {
  font-size: 300px;
}
</style>
`;

export default () => {
  return (
    <>
      <div id="example-1" />
      <SyntaxHighlighter language="html" style={docco}>
        {example1}
      </SyntaxHighlighter>
      <br />

      <div id="example-2" />
      <SyntaxHighlighter language="html" style={docco}>
        {example2}
      </SyntaxHighlighter>
      <br />

      <div id="example-3" />
      <SyntaxHighlighter language="html" style={docco}>
        {example3}
      </SyntaxHighlighter>
      <br />

      <div id="example-4" />
      <SyntaxHighlighter language="html" style={docco}>
        {example4}
      </SyntaxHighlighter>
      <br />

      <div id="example-5-container">
        <div className="example-5-square" />
        <div className="example-5-square" />
        <div className="example-5-square" />
        <div className="example-5-square" />
      </div>
      <SyntaxHighlighter language="html" style={docco}>
        {example5}
      </SyntaxHighlighter>
      <br />

      <div id="example-6-container">
        <div className="example-6-square" />
        <div className="example-6-square" />
        <div className="example-6-square" />
        <div className="example-6-square" />
      </div>
      <SyntaxHighlighter language="html" style={docco}>
        {example6}
      </SyntaxHighlighter>
      <br />

      <div id="example-7"></div>
      <SyntaxHighlighter language="html" style={docco}>
        {example7}
      </SyntaxHighlighter>
      <br />

      <div id="example-8"></div>
      <SyntaxHighlighter language="html" style={docco}>
        {example8}
      </SyntaxHighlighter>
      <br />

      <div id="example-9-container">
        <div className="example-9-circle" />
        <div className="example-9-circle" />
        <div className="example-9-circle" />
      </div>
      <SyntaxHighlighter language="html" style={docco}>
        {example9}
      </SyntaxHighlighter>
      <br />

      <div id="example-10">
        Gunnison <b>valley</b> hackers
      </div>
      <SyntaxHighlighter language="html" style={docco}>
        {example10}
      </SyntaxHighlighter>
      <br />

      <div id="example-11">Gunnison valley hackers</div>
      <SyntaxHighlighter language="html" style={docco}>
        {example11}
      </SyntaxHighlighter>
      <br />

      <div id="example-12">Gunnison valley hackers</div>
      <SyntaxHighlighter language="html" style={docco}>
        {example12}
      </SyntaxHighlighter>
      <br />

      <div id="example-13">⛰</div>
      <SyntaxHighlighter language="html" style={docco}>
        {example13}
      </SyntaxHighlighter>
    </>
  );
};
