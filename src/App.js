import React, { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [sectionShown, setSectionShown] = useState("");
  return (
    <div className="App">
      <HomePage sectionShown={sectionShown} setSectionShown={setSectionShown} />
    </div>
  );
}

export default App;
