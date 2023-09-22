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

function SchoolInputs() {
  return (
    <>
      <p>
        <label htmlFor="school-name">School Name</label>
        <input id="school-name" type="text" placeholder="Garvey High" />
      </p>
      <p>
        <label htmlFor="study-title">Title of Study</label>
        <input
          id="study-title"
          type="text"
          placeholder="BS in Forensic Analysis"
        />
      </p>
      <p>
        <label htmlFor="study-date">Date of Study</label>
        <input id="study-date" type="date" min="1924-01-01" max="2024-06-01" />
      </p>
    </>
  );
}

function Education({ setApplicantInfo, applicantInfo }) {
  return (
    <div className="accordion-content">
      {applicantInfo.education.map((school) => {
        console.log("wtf");
        return <div key={school.id}>{school.name}</div>;
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
