const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Today I started React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);