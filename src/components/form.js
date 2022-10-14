import React, { useState } from "react";

export default function form(props) {
  const toUpperCase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const toLowerCase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg);
  };
  const toCap = () => {
    const word = Text;
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    setText(capitalized);
  };
  const clear = () => {
    setText("");
  };
  const hoc = (event) => {
    setText(event.target.value);
  };

  const calculateWords = () => {
    let numOfWords = 0;
    let words = Text.split(" ");
    let length = words.length;
    numOfWords =
      words[length - 1] === "" || words[length - 1] === " "
        ? length - 1
        : length;
    console.log(words);
    return numOfWords;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3 mt">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={Text}
            onChange={hoc}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-success m mt"
          onClick={toUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-success  m mt"
          onClick={toLowerCase}
        >
          Convert to Lowercase
        </button>
        <button type="button" className="btn btn-success  m mt" onClick={toCap}>
          Capitalize your text
        </button>
        <button type="submit" className="btn btn-success  m mt" onClick={speak}>
          Read the text
        </button>
        <button type="button" className="btn btn-success  m mt" onClick={clear}>
          Clear all
        </button>
        <h2 className="mt">Your text summary</h2>
        <p>
          {" "}
          {calculateWords()} words and {Text.length} character{" "}
        </p>
        <p>
          This will take {calculateWords() * 0.008} Minutes to read if we
          calculate by the number words{" "}
        </p>

        <h2 className="mt">Preview</h2>
        <p className="mt">{Text}</p>
      </div>
    </>
  );
}
