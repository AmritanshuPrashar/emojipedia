import React from "react";
import data from '../emoji_data'
import Entry from "./Entry";
import Footer from "./Footer.jsx";
function getEnty(e) {
  return (
    <Entry
      key={e.id}
      name={e.name}
      emoji={e.emoji}
      content={"Tags : " + e.tags[0] + " " + e.tags[1]}
      category={"Category : " + e.category}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{data.map(getEnty)}</dl>
      <Footer />
      </div>
  );
}

export default App;
