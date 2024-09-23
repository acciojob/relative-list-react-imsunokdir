import React from "react";

const relatives = ["Raj", "David", "Lily", "Edwar", "Rebecca"];

const App = () => {
  return (
    <div id="main">
      <ol key="relativeList">
        {relatives.map((relative, i) => {
          return <li key={`relativeListItem${i + 1}`}>{relative}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
