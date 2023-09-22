import { useState } from "react";
import Accordion from "./Accordion.jsx";
import { General, Education, Experience } from "./Inputs.jsx";
import "../style/app.css";

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
          <Education
            addInfo={addInfo}
            applicantInfo={applicantInfo}
          ></Education>
        </Accordion>
        <Accordion
          accordionId={"Experience"}
          selected={selected}
          onSelect={select}
        >
          <Experience
            addInfo={addInfo}
            applicantInfo={applicantInfo}
          ></Experience>
        </Accordion>
      </form>
    </aside>
  );
}

function CV({ applicantInfo }) {
  return (
    <main>
      <div className="cv-page">
        <header>
          <h2>{applicantInfo.name}</h2>
          <p>email: {applicantInfo.email}</p>
          <p>tel: {applicantInfo.phone}</p>
        </header>
        <section>
          <h3>Education</h3>
          <h3>Experience</h3>
        </section>
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
