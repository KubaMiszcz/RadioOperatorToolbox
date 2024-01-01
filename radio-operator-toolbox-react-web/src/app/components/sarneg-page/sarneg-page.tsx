import Image from "next/image";
import { useState } from "react";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";

export default function SarnegPage() {
  const [inputWord, setInputWord] = useState("112233");
  const [codeWord, setCodeWord] = useState("BACKGROUND");
  let [outputWord, setOutputWord] = useState("");

  function encode() {
    outputWord = '';
    Array.from(inputWord).forEach((digit) => {
      outputWord += codeWord[Number(digit)];
    });
    setOutputWord(outputWord);
  }

  function decode() {
    // result='';
    // Array.from(word).forEach((digit) => {
    //   result += codeWord[Number(digit)];
    // });
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">word</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={inputWord}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={encode}>
          ENCODE
        </Button>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">word</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={codeWord}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">word</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={outputWord}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={decode}>
          DECODE
        </Button>
      </InputGroup>

      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
    </div>
  );
}
