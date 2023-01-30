import Button from "@/components/Button";
import { Container, Row, Col } from "@/components/Grid";
import Accordion from "@/components/Accordion";

import React from "react";

import style from "./GetStartedReady.module.scss";

export const GetStartedReady = () => (
  <Container element="section" className={style.section}>
    <Row className={style.row}>
      <Col lg={6} md={3} sm={4} className={style["wrapper-content"]}>
        <h2 className="bodyTitle">Ready to Get started?</h2>
        <p className="bodyText">
          When pattern is mentioned in interior design, it is easy to asso-
          ciate it with a geometric patterned wallpaper or colourful prints on
          interior fabrics.
        </p>
        <Button isPink onClick={() => {}} className={style.button}>
          Contact us
        </Button>
      </Col>
      <Col lg={6} md={3} sm={4} className={style["wrapper-accordeon"]}>
        <Accordion />
      </Col>
    </Row>
  </Container>
);
