import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [mainLetters, setMainLatters] = useState(letters);

  function handleToggle(toggledId) {
    setMainLatters((latters) => {
      return latters.map((latter) => {
        if (latter.id === toggledId) {
          return { ...latter, isStarred: !latter.isStarred };
        } else {
          return latter;
        }
      });
    });
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {mainLetters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              letter.isStarred
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected{" "}
            {mainLetters.filter((letter) => letter.isStarred).length} letters
          </b>
        </p>
      </ul>
    </>
  );
}
