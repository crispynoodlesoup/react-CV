import { useState } from "react";

function General({ setApplicantInfo, applicantInfo }) {
  return (
    <div className="accordion-content">
      <p>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={applicantInfo.name}
          onChange={(e) =>
            setApplicantInfo({ ...applicantInfo, name: e.target.value })
          }
        />
      </p>
      <p>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="John@example.xyz"
          value={applicantInfo.email}
          onChange={(e) =>
            setApplicantInfo({ ...applicantInfo, email: e.target.value })
          }
        />
      </p>
      <p>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="555-555-5555"
          value={applicantInfo.phone}
          onChange={(e) =>
            setApplicantInfo({ ...applicantInfo, phone: e.target.value })
          }
        />
      </p>
    </div>
  );
}

function SchoolInputs({ setApplicantInfo, applicantInfo, schoolIndex }) {
  return (
    <div className="school-inputs">
      <p>
        <label htmlFor="school-name">School Name</label>
        <input
          id="school-name"
          type="text"
          placeholder="Midtown highschool"
          value={applicantInfo.education[schoolIndex].name}
          onChange={(e) => {
            const newEducation = applicantInfo.education;
            newEducation[schoolIndex].name = e.target.value;
            setApplicantInfo({ ...applicantInfo, education: newEducation });
          }}
        />
      </p>
      <p>
        <label htmlFor="study-title">Title of Study</label>
        <input
          id="study-title"
          type="text"
          placeholder="High School Diploma"
          value={applicantInfo.education[schoolIndex].degree}
          onChange={(e) => {
            const newEducation = applicantInfo.education;
            newEducation[schoolIndex].degree = e.target.value;
            setApplicantInfo({ ...applicantInfo, education: newEducation });
          }}
        />
      </p>
      <p>
        <label htmlFor="study-date">Date of Study</label>
        <input
          id="study-date"
          type="date"
          min="1924-01-01"
          max="2024-06-01"
          value={applicantInfo.education[schoolIndex].date}
          onChange={(e) => {
            const newEducation = applicantInfo.education;
            newEducation[schoolIndex].date = e.target.value;
            setApplicantInfo({ ...applicantInfo, education: newEducation });
          }}
        />
      </p>
    </div>
  );
}

function Education({ setApplicantInfo, applicantInfo }) {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="accordion-content">
      {applicantInfo.education.map((school, i) => {
        return (
          <div
            key={school.id}
            className={selected === school.id ? "selected-school" : ""}
          >
            <div
              className="school-header"
              onClick={() => {
                selected === school.id
                  ? setSelected(-1)
                  : setSelected(school.id);
              }}
            >
              <p>{school.name}</p>
              <img src="../public/close.svg" alt="" />
            </div>
            {selected === school.id ? (
              <SchoolInputs
                setApplicantInfo={setApplicantInfo}
                applicantInfo={applicantInfo}
                schoolIndex={i}
              ></SchoolInputs>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function Experience({ setApplicantInfo, applicantInfo }) {
  return (
    <div className="accordion-content">
      <p>
        <label htmlFor="organization-name">Organization Name</label>
        <input id="organization-name" type="text" placeholder="Oscorp" />
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

export { General, Education, Experience };
