import Image from "next/image";
import clsx from "clsx";
import { Row, Col } from "@/components/Grid";
import Input from "@/components/Input";
import Button from "@/components/Button";

import React, { useState } from "react";

import style from "./GetStarted.module.scss";

export const GetStarted = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section>
      <Row className={style.row}>
        <Col lg={12} md={6} sm={4} className={style.wrapper}>
          <Row className={style.content}>
            <Col lg={5} md={3} sm={4} className={style["wrapper-content"]}>
              <h2 className="bodyTitle">Get started today!</h2>
              <p className="bodyText">
                Learn more about how you can save our planet&apos;s nature. From
                smart consumption to switching to renewable energy, each of us
                can do our part to save the planet.{" "}
              </p>
            </Col>
            <Col lg={6} md={3} sm={4} className={style["wrapper-form"]}>
              <form className={style.form}>
                <h2 className={style["form-title"]}>Log in</h2>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  setValue={setName}
                  labelClassName={style.label}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  setValue={setEmail}
                  labelClassName={style.label}
                />
                <Button
                  type="submit"
                  onClick={(e: React.FormEvent) => e.preventDefault()}
                  isPink
                  className={style.button}
                >
                  Book a demo
                </Button>
                <Image
                  src="/assets/icons/leaf-pink.svg"
                  alt=""
                  width={83}
                  height={54}
                  className={clsx(style.leaf, style["leaf-pink"])}
                />
                <Image
                  src="/assets/icons/leaf-blue.svg"
                  alt=""
                  width={42}
                  height={22}
                  className={clsx(style.leaf, style["leaf-blue"])}
                />
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
