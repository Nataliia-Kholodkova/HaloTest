import Image from "next/image";
import clsx from "clsx";
import { useRef, MutableRefObject } from "react";
import { Container, Row, Col } from "@/components/Grid";

import { useOnScreen } from "@/helpers/useOnScreen";

import style from "./Team.module.scss";

export const Team = () => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const isOnScreen = useOnScreen(ref);

  return (
    <Container className={style.container} element="section">
      <Row className={style.heading}>
        <Col lg={4} md={5} sm={4} className={style.heading__title}>
          <h2 className="bodyTitle">Our top team</h2>
        </Col>
        <Col lg={4} md={5} sm={4} className={style.heading__text}>
          <p className="bodyText">
            Learn more about how you can save our planet&apos;s nature.{" "}
          </p>
        </Col>
      </Row>
      <Row className={clsx(style.team, isOnScreen && style.animated)} ref={ref}>
        <Col
          lg={4}
          md={6}
          sm={4}
          className={clsx(style["team-member"], style["team-member__1"])}
        >
          <Image
            src="/assets/images/team_1.png"
            alt="Team member"
            width={323}
            height={274}
            className={style["team-member__image"]}
          />
        </Col>
        <Col
          lg={4}
          md={6}
          sm={4}
          className={clsx(style["team-member"], style["team-member__2"])}
        >
          <Image
            src="/assets/images/team_2.png"
            alt="Team member"
            width={334}
            height={263}
            className={style["team-member__image"]}
          />
        </Col>
        <Col
          lg={4}
          md={6}
          sm={4}
          className={clsx(style["team-member"], style["team-member__3"])}
        >
          <Image
            src="/assets/images/team_3.png"
            alt="Team member"
            width={276}
            height={312}
            className={style["team-member__image"]}
          />
        </Col>
        <Image
          src="/assets/images/vector.svg"
          width={378}
          height={205}
          className={style["team-bg__1"]}
          alt=""
        />
        <Image
          src="/assets/images/vector-2.svg"
          width={378}
          height={205}
          className={style["team-bg__2"]}
          alt=""
        />
      </Row>
    </Container>
  );
};
