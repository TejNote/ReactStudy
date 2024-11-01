import { useState } from "react";

export function State1() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      {showHint ? (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      ) : (
        ""
      )}
      <Form />
      <button
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        Hide hint
      </button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}

export function State2Mine() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <FieldMine
          label="Last name"
          text={lastName}
          onChange={handleLastNameChange}
        />
        <FieldMine
          label="First name"
          text={firstName}
          onChange={handleFirstNameChange}
        />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <FieldMine
          label="First name"
          text={firstName}
          onChange={handleFirstNameChange}
        />
        <FieldMine
          label="Last name"
          text={lastName}
          onChange={handleLastNameChange}
        />
        {checkbox}
      </>
    );
  }
}

function FieldMine({ label, text, onChange }) {
  return (
    <label>
      {label}:{" "}
      <input type="text" value={text} placeholder={label} onChange={onChange} />
    </label>
  );
}

export function State2Answer() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <FieldAnswer key="lastName" label="Last name" />
        <FieldAnswer key="firstName" label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <FieldAnswer key="firstName" label="First name" />
        <FieldAnswer key="lastName" label="Last name" />
        {checkbox}
      </>
    );
  }
}

function FieldAnswer({ label }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
