const heading1 = React.createElement(
  "h1",
  { className: "heading", style: { backgroundColor: "red" } },
  "Hello There!!"
);
const paragraph = React.createElement("p", null, "this is a paragraph");
const container = React.createElement("div", null, [heading1, paragraph]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
