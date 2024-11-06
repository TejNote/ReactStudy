import { useState, useRef } from "react";

export default function CatFriends({ catList }) {
  const refMap = useRef(new Map());
  const [index, setIndex] = useState(0);

  function scrollToCat(cat) {
    const map = refMap.current;
    const node = map.get(cat.id);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button
          onClick={() => {
            const tempIndex = index < catList.length - 1 ? index + 1 : 0;
            setIndex(tempIndex);
            scrollToCat(catList[index]);
            console.log(index);
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul
          style={{
            overflow: "scroll",
            whiteSpace: "nowrap",
          }}
        >
          {catList.map((cat, i) => (
            <li
              style={{
                display: "inline-block",
              }}
              key={cat.id}
              ref={(node) => {
                if (node) {
                  refMap.current.set(cat.id, node);
                } else {
                  refMap.current.delete(cat.id);
                }
              }}
            >
              <span>TEST</span>
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
