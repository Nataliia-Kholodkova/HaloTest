import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Container, Row, Col } from "@/components/Grid";
import { Parrot } from "./Parrot";
import { Card } from "./Сard";
import { Headline } from "./Headline";

import Button from "@/components//Button";

import Input from "@/components/Input";

import style from "./Hero.module.scss";

export const Hero = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <section className={style.section}>
      <Container element="div" className={style.container}>
        <Row className={style.row}>
          <Col sm={4} md={6} lg={6} className={style.headlineBlock}>
            <Headline />
            <p className={clsx("bodyText", style["headlineBlock-text"])}>
              The scale of the challenges facing our planet can seem daunting,
              but we can all do something.
            </p>
            <Input
              type="search"
              placeholder="Find the place to help"
              value={searchValue}
              setValue={setSearchValue}
              labelClassName={style.label}
              inputClassName={style.input}
              icon={
                <Image
                  src="assets/icons/search.svg"
                  alt="search"
                  className={style.searchIcon}
                  width={14}
                  height={20}
                />
              }
            >
              <Button isPink onClick={() => {}} className={style.searchButton}>
                Search
              </Button>
            </Input>
          </Col>
          <Col sm={4} md={4} lg={5} className={style.parrotBlock}>
            <Parrot />
            <Card />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
