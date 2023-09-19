import { useState } from "react";
import "../style/app.css";

function General() {
  return <div className="accordion-content">General</div>;
}

function Educational() {
  return <div className="accordion-content">Educational</div>;
}

function Practical() {
  return <div className="accordion-content">Practical</div>;
}

function Accordion({ children, accordionId, selected, onSelect }) {
  return (
    <section className="accordion">
      <div className="accordion-switch" onClick={() => {onSelect(accordionId)}}>{accordionId}</div>
      {selected === accordionId ? children : null}
    </section>
  );
}

function CV() {
  const [selected, setSelected] = useState("General");

  function select(accordionId) {
    setSelected(accordionId);
  }

  return (
    <form className="cv-form">
      <Accordion accordionId={"General"} selected={selected} onSelect={select}>
        <General></General>
      </Accordion>
      <Accordion accordionId={"Educational"} selected={selected} onSelect={select}>
        <Educational></Educational>
      </Accordion>
      <Accordion accordionId={"Practical"} selected={selected} onSelect={select}>
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
