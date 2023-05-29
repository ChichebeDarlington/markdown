import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("# Mazi markdown");

  const handleMarkdown = (event) => {
    setMarkdown(event.target.value);
  };
  return (
    <main>
      <section className="markdown">
        <textarea
          onChange={handleMarkdown}
          value={markdown}
          className="input"
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
