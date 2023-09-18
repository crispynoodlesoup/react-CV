import { useState } from "react";
import "../style/app.css";

function General() {
  return <>General</>;
}

function Educational() {
  return <>Educational</>;
}

function Practical() {
  return <>Practical</>;
}

function Accordion({ children }) {
  return (
    <section>
      <div className="accordion-switch">hide content</div>
      {children}
    </section>
  );
}

function CV() {
  return (
    <form className="application">
      <Accordion>
        <General></General>
      </Accordion>
      <Accordion>
        <Educational></Educational>
      </Accordion>
      <Accordion>
        <Practical></Practical>
      </Accordion>
      <button type="button">Submit</button>
    </form>
  );
}

function App() {
  return (
    <>
      <CV></CV>
    </>
  );
}

export default App;
