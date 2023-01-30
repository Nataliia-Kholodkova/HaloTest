import style from "./Footer.module.scss";
import clsx from "clsx";
import { Container, Row, Col } from "@/components/Grid";
import Link from "next/link";

import { Facebook } from "./Facebook";
import { Twitter } from "./Twitter";
import { LinkedIn } from "./LinkedIn";

export const Footer = () => (
    <section className={style.section}>
      <Container element="div">
        <Row>
          <Col sm={4} md={2} lg={4} className={style.rights}>
            <h2 className={clsx(style.title, style["title-large"])}>
              Contacts
            </h2>
            <p className={style.text}>
              2019 Rootz Foundation.
              <br />
              All rights reserved
            </p>
          </Col>
          <Col sm={2} md={2} lg={4} className={style.contacts}>
            <h2 className={style.title}>Headquarters</h2>
            <p className={style.text}>
              1234 Taliban
              <br />
              Los Angeles, La 1234567
              <br />
              (123) 456-7890
            </p>
          </Col>
          <Col sm={2} md={2} lg={4} className={style.media}>
            <h2 className={style.title}>Social media</h2>
            <ul className={style["media-list"]}>
              <li className={style["media-item"]}>
                <Link href="#" className={style["media-link"]}>
                  <Twitter />
                </Link>
              </li>
              <li className={style["media-item"]}>
                <Link href="#" className={style["media-link"]}>
                  <Facebook />
                </Link>
              </li>
              <li className={style["media-item"]}>
                <Link href="#" className={style["media-link"]}>
                  <LinkedIn />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
