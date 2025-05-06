/* 

-> .parcel-cache: A cache directory used by Parcel to store intermediate build artifacts and dependency graphs. Helps speed up rebuilds by not redoing work it already did (like transforming JS/JSX, compiling CSS, etc.).
-> dist: final output of our build


Parcel does a lot of things for us:
>> Hot Module Replacement
>> File watcher algorithm 
>> It bundles the code and give us the minified version of it
>> parcel in cleaning the code
>> Does the Image optimization
>> Fast build algorithm for subsequent builds
>> caching while development
>> does the compression
>> HTTPS on dev
>> use Hashing to bundling


>> Transitive Dependencies (package use depen. which are dependend on other depen.)


*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { className: "heading", style: { backgroundColor: "red" } },
  "Hello There!!"
);
const paragraph = React.createElement("p", null, "this is a paragraph");
const container = React.createElement("div", null, [heading1, paragraph]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
