import { useState } from "react";
import "../style/app.css";

function General({ addInfo, applicantInfo }) {
  return (
    <div className="accordion-content">
      <p>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={applicantInfo.name}
          onChange={(e) => addInfo({ name: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="John@example.xyz"
          value={applicantInfo.email}
          onChange={(e) => addInfo({ email: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="555-555-5555"
          value={applicantInfo.phone}
          onChange={(e) => addInfo({ phone: e.target.value })}
        />
      </p>
    </div>
  );
}

function Educational({ addInfo, applicantInfo }) {
  return (
    <div className="accordion-content">
      <p>
        <label htmlFor="school-name">School Name</label>
        <input
          id="school-name"
          type="text"
          placeholder="Garvey High"
          value={applicantInfo.schoolName}
          onChange={(e) => addInfo({ schoolName: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="study-title">Title of Study</label>
        <input
          id="study-title"
          type="text"
          placeholder="Forensic Analyst"
          value={applicantInfo.studyTitle}
          onChange={(e) => addInfo({ studyTitle: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="study-date">Date of Study</label>
        <input
          id="study-date"
          type="date"
          min="1924-01-01"
          max="2024-06-01"
          value={applicantInfo.date}
          onChange={(e) => addInfo({ date: e.target.value })}
        />
      </p>
    </div>
  );
}

function Practical({ addInfo, applicantInfo }) {
  return (
    <div className="accordion-content">
      <p>
        <label htmlFor="organization-name">Organization Name</label>
        <input
          id="organization-name"
          type="text"
          placeholder="Oscorp"
          value={applicantInfo.organizationName}
          onChange={(e) => addInfo({ organizationName: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="position">Position Title</label>
        <input
          id="position"
          type="text"
          placeholder="CEO"
          value={applicantInfo.position}
          onChange={(e) => addInfo({ position: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="job-description">Job Description:</label>
        <textarea
          id="job-description"
          cols="30"
          rows="10"
          value={applicantInfo.description}
          onChange={(e) => addInfo({ description: e.target.value })}
        ></textarea>
      </p>
    </div>
  );
}

function Accordion({ children, accordionId, selected, onSelect }) {
  return (
    <section
      className={selected === accordionId ? "accordion selected" : "accordion"}
    >
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

function SideBar({ addInfo, applicantInfo }) {
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
          <General addInfo={addInfo} applicantInfo={applicantInfo}></General>
        </Accordion>
        <Accordion
          accordionId={"Education"}
          selected={selected}
          onSelect={select}
        >
          <Educational
            addInfo={addInfo}
            applicantInfo={applicantInfo}
          ></Educational>
        </Accordion>
        <Accordion
          accordionId={"Experience"}
          selected={selected}
          onSelect={select}
        >
          <Practical
            addInfo={addInfo}
            applicantInfo={applicantInfo}
          ></Practical>
        </Accordion>
      </form>
    </aside>
  );
}

function CV({ applicantInfo }) {
  return (
    <main>
      <div className="cv-page">
        {Object.keys(applicantInfo).map((key) => `${key}: ${applicantInfo[key]} | `)}
      </div>
    </main>
  );
}

const baseInfo = {
  name: "Rafael P.",
  email: "rafaelgpadilla42@gmail.com",
  phone: "6829705807",
  schoolName: "",
  studyTitle: "",
  date: "",
  organizationName: "",
  position: "",
  description: "",
};

function App() {
  const [applicantInfo, setApplicantInfo] = useState(baseInfo);

  function addInfo(property) {
    const newInfo = Object.assign({}, applicantInfo, property);
    setApplicantInfo(newInfo);
  }

  return (
    <>
      <SideBar addInfo={addInfo} applicantInfo={applicantInfo}></SideBar>
      <CV applicantInfo={applicantInfo}></CV>
    </>
  );
}

export default App;
