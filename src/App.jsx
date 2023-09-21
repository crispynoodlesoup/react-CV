import { useState } from "react";
import "../style/app.css";

function General() {
  return (
    <div className="accordion-content">
      <p>
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" placeholder="John Doe" />
      </p>
      <p>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" placeholder="John@example.xyz" />
      </p>
      <p>
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" placeholder="555-555-5555" />
      </p>
    </div>
  );
}

function Educational() {
  return (
    <div className="accordion-content">
      <p>
        <label htmlFor="school-name">School Name</label>
        <input id="school-name" type="text" placeholder="Garvey High" />
      </p>
      <p>
        <label htmlFor="study-title">Title of Study</label>
        <input id="study-title" type="text" placeholder="Forensic Analyst" />
      </p>
      <p>
        <label htmlFor="study-date">Date of Study</label>
        <input id="study-date" type="date" min="1924-01-01" max="2024-06-01" />
      </p>
    </div>
  );
}

function Practical() {
  return (
    <div className="accordion-content">
      <p>
        <label htmlFor="org-name">Organization Name</label>
        <input id="org-name" type="text" placeholder="Oscorp" />
      </p>
      <p>
        <label htmlFor="position">Position Title</label>
        <input id="position" type="text" placeholder="CEO" />
      </p>
      <p>
        <label htmlFor="job-description">Job Description:</label>
        <textarea id="job-description" cols="30" rows="10"></textarea>
      </p>
    </div>
  );
}

function Accordion({ children, accordionId, selected, onSelect }) {
  return (
    <section className={selected === accordionId ? "accordion selected" : "accordion"}>
      <div
        className="accordion-switch"
        onClick={() => {
          onSelect(accordionId);
        }}
      >
        <p>{accordionId}</p>
        <img src="../public/square-edit-outline.svg" alt="" />
      </div>
      {children}
    </section>
  );
}

function SideBar() {
  const [selected, setSelected] = useState("General");

  function select(accordionId) {
    setSelected(accordionId);
  }

  return (
    <aside>
      <h1>CV form Generator!</h1>
      <form className="cv-form" onSubmit={(e) => e.preventDefault()}>
        <Accordion
          accordionId={"General"}
          selected={selected}
          onSelect={select}
        >
          <General></General>
        </Accordion>
        <Accordion
          accordionId={"Educational"}
          selected={selected}
          onSelect={select}
        >
          <Educational></Educational>
        </Accordion>
        <Accordion
          accordionId={"Practical"}
          selected={selected}
          onSelect={select}
        >
          <Practical></Practical>
        </Accordion>
      </form>
    </aside>
  );
}

function CV() {
  return (
    <main>
      <div className="cv-page"></div>
    </main>
  );
}

function App() {
  return (
    <>
      <SideBar></SideBar>
      <CV></CV>
    </>
  );
}

export default App;
