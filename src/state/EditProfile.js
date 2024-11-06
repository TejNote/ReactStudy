import { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({
    isEdit: false,
    firstName: "Jane",
    lastName: "Jacobs",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.id]: e.target.value,
    });
  };

  const textStyle = profile.isEdit ? { display: "none" } : {};
  const inputStyle = profile.isEdit ? {} : { display: "none" };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setProfile({
          ...profile,
          isEdit: !profile.isEdit,
        });
      }}
    >
      <label
        style={{
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        First name: <b style={textStyle}>{profile.firstName}</b>
        <input
          value={profile.firstName}
          id="firstName"
          onChange={handleChange}
          style={inputStyle}
        />
      </label>
      <label>
        Last name: <b style={textStyle}>{profile.lastName}</b>
        <input
          value={profile.lastName}
          id="lastName"
          onChange={handleChange}
          style={inputStyle}
        />
      </label>
      <button type="submit">Edit Profile</button>
      <p>
        <i>
          Hello, {profile.firstName} {profile.lastName}!
        </i>
      </p>
    </form>
  );
}
