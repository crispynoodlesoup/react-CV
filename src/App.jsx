import "../style/app.css";

function Accordion() {
  return (
    <section>
      <div className="accordion-switch">hide content</div>
      <div className="accordion-content">content</div>
    </section>
  );
}

function CV() {
  return (
    <form className="application">
      <Accordion></Accordion>
      <Accordion></Accordion>
      <Accordion></Accordion>
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
