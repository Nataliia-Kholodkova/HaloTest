import { useState, useCallback } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { links } from "@/helpers/links";

import { Container } from "@/components/Grid";
import Button from "../Button";

import { useIsMobile } from "@/helpers/useIsMobile";

import style from "./Header.module.scss";

export const Header = () => {
  const { asPath } = useRouter();
  const isMobile = useIsMobile();

  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  const mobileMenuOpenHandler = useCallback(
    () => setMobileIsOpen((prevState) => !prevState),
    [setMobileIsOpen]
  );

  return (
    <header className={style.header}>
      <Container element="div" className={style.wrapper}>
        <nav className={style.nav}>
          <Link href="/" className={style.logo}>
            <Image
              src="assets/icons/logo.svg"
              alt="logo"
              width={111}
              height={37}
            />
          </Link>
          {isMobile && (
            <Button
              onClick={mobileMenuOpenHandler}
              className={style.menuButton}
            >
              {mobileIsOpen ? (
                <Image
                  src="assets/icons/iconClose.svg"
                  alt="close"
                  width={16}
                  height={16}
                />
              ) : (
                <Image
                  src="assets/icons/iconUnion.svg"
                  alt="open"
                  width={22}
                  height={17}
                />
              )}
            </Button>
          )}
          <div
            className={clsx(
              style["nav-wrapper"],
              mobileIsOpen
                ? style["nav-wrapper__opened"]
                : style["nav-wrapper__closed"]
            )}
          >
            <ul className={style["nav-list"]}>
              {links.map((link) => (
                <li className={style["nav-list__item"]} key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      style["nav-list__link"],
                      asPath === link.href ? style.active : ""
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button onClick={() => {}} isWhite>
              Apply
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
