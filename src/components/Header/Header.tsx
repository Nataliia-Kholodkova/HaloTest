import { useState, useCallback } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import { links } from "@/helpers/links";

import { Container } from "@/components/Grid";
import { Logo, IconClose, IconUnion } from "@/components/icons";
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
      <Container element="div">
        <nav className={style.nav}>
          <Link href="/" className={style.logo}>
            <Logo />
          </Link>
          {isMobile && (
            <Button
              onClick={mobileMenuOpenHandler}
              className={style.menuButton}
            >
              {mobileIsOpen ? <IconClose /> : <IconUnion />}
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
