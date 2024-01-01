"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";

// "use client"
export default function Home() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("112233");
  const [codeWord, setCodeWord] = useState("BACKGROUND");
  let [result, setResult] = useState("");

  return (
      <Container fluid>
        <Row>
          <Col>
            <Button variant="light">1</Button>{" "}
          </Col>
          <Col>
            <Button variant="light">2</Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light">3</Button>{" "}
          </Col>
          <Col>
            <Button variant="light">4</Button>{" "}
          </Col>
        </Row>
      </Container>
  );
}
