"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { useState } from "react";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";

// "use client"
export default function VigenerePage() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState('112233');
  const [codeWord,setCodeWord] = useState('BACKGROUND');
  let [result,setResult] = useState('');

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
