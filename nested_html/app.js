/*
<div id="parent">
    <div id="child">
        <h1>Hi I'm H1 </h1>  
        <h2>Hi I'm H2 </h2>
    </div>
    <div id="child2">
        <h1>Hi I'm H1 </h1>  
        <h2>Hi I'm H2 </h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hi I'm H1"), React.createElement("h2", {}, "Hi I'm H2")]
    ), React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hi I'm H1"), React.createElement("h2", {}, "Hi I'm H2")]
    )]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

