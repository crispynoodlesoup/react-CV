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

function Education({ addInfo, applicantInfo }) {
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

function Experience({ addInfo, applicantInfo }) {
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

export { General, Education, Experience };