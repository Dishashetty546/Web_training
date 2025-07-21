import { useState } from "react";

function Paragraph() {
  const [Visible, setVisible] = useState(false);

  function tParagraph() {
    setVisible(prev => !prev);
  }

  return (
    <div>
      {Visible && <p>Hello Im Disha, from Udupi</p>}
      <button onClick={tParagraph}>
        {Visible ? "Hide it" : "Show this"}
      </button>
    </div>
  );
}

export default Paragraph;
