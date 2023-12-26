"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { useState } from "react";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";

// "use client"
export default function Home() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState('112233');
  const [codeWord,setCodeWord] = useState('BACKGROUND');
  let [result,setResult] = useState('');

function encode(){
  result='';
  Array.from(word).forEach((digit) => {
    result += codeWord[Number(digit)];
  });
  setResult(result);
}

function decode(){
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
          value={word}
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
          value={result}
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
