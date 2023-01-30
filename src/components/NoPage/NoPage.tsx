import { Container, Col, Row } from "@/components/Grid";
import { Parrot } from "@/components/Hero/Parrot";

import style from "./NoPage.module.scss";

export const NoPage = () => (
  <Container element="section" className={style.section}>
    <Row className={style.row}>
      <Col sm={4} md={3} lg={5}>
        <h1 className="bodyTitle">Oooops... Cannot find this page</h1>
      </Col>
      <Col sm={4} md={2} lg={5} className={style.parrot}>
        <Parrot />
      </Col>
    </Row>
  </Container>
);
