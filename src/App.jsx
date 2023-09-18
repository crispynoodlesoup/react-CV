import { useState } from "react";
import "../style/app.css";

function General() {
  return <div>General</div>;
}

function Educational() {
  return <div>Educational</div>;
}

function Practical() {
  return <div>Practical</div>;
}

function Accordion({ children, accordionId, selected, onSelect }) {
  return (
    <section>
      <div className="accordion-switch" onClick={() => {onSelect(accordionId)}}>{selected === accordionId ? "Editing" : "Edit" }</div>
      {selected === accordionId ? children : null}
    </section>
  );
}

function CV() {
  const [selected, setSelected] = useState(0);

  function select(accordionId) {
    setSelected(accordionId);
  }

  return (
    <form className="application">
      <Accordion accordionId={0} selected={selected} onSelect={select}>
        <General></General>
      </Accordion>
      <Accordion accordionId={1} selected={selected} onSelect={select}>
        <Educational></Educational>
      </Accordion>
      <Accordion accordionId={2} selected={selected} onSelect={select}>
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
