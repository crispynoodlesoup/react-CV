import { useState } from "react";
import Accordion from "./Accordion.jsx";
import { General, Education, Experience } from "./Inputs.jsx";
import "../style/app.css";

function SideBar({ setApplicantInfo, applicantInfo }) {
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
          <General
            setApplicantInfo={setApplicantInfo}
            applicantInfo={applicantInfo}
          ></General>
        </Accordion>
        <Accordion
          accordionId={"Education"}
          selected={selected}
          onSelect={select}
        >
          <Education
            setApplicantInfo={setApplicantInfo}
            applicantInfo={applicantInfo}
          ></Education>
        </Accordion>
        <Accordion
          accordionId={"Experience"}
          selected={selected}
          onSelect={select}
        >
          <Experience
            setApplicantInfo={setApplicantInfo}
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
        <div>
          <section className="cv-section">
            <h3>Education</h3>
            <div className="schools-list">
              {applicantInfo.education.map((school) => {
                return (
                  <div key={school.id} className="school">
                    <p className="school-date">{school.date}</p>
                    <div>
                      <p className="school-name">{school.name}</p>
                      <p className="school-degree">{school.degree}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="cv-section">
            <h3>Experience</h3>
          </section>
        </div>
      </div>
    </main>
  );
}

const baseInfo = {
  name: "Rafael P.",
  email: "rafaelgpadilla42@gmail.com",
  phone: "6829705807",
  education: [
    {
      name: "Harmony School of Innovation",
      degree: "High School Diploma",
      date: "2022-05",
      id: 0,
    },
    {
      name: "Example College",
      degree: "Bachelors in Computer Science",
      date: "2026-05",
      id: 1,
    },
  ],
  experience: [
    {
      organizationName: "Faith2Fight",
      position: "Front-end Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dignissimos. Molestias eum eius veniam porro aperiam esse quo velit! Est, aliquid? Consequatur, est laboriosam consequuntur reiciendis dignissimos voluptates voluptatibus quis?",
    },
  ],
};

function App() {
  const [applicantInfo, setApplicantInfo] = useState(baseInfo);

  return (
    <>
      <SideBar
        setApplicantInfo={setApplicantInfo}
        applicantInfo={applicantInfo}
      ></SideBar>
      <CV applicantInfo={applicantInfo}></CV>
    </>
  );
}

export default App;
