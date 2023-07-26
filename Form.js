import React, { useState } from "react";

function ControlledForm() {
  const [firstName, setFirstName] = useState("Stephan");
  const [lastName, setLastName] = useState("Mkadinali");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={handleFirstNameChange}
          value={firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={handleLastNameChange}
          value={lastName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;

