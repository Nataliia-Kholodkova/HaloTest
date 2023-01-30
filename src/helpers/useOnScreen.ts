import { useEffect, useState, MutableRefObject, useCallback } from "react";

const isInViewport = (element: HTMLDivElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) - 300
  );
}
export const useOnScreen = (ref: MutableRefObject<HTMLDivElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  const scrollAnimation = useCallback(() => {
    const animItem = ref.current;
    if (animItem && isInViewport(animItem) && !isIntersecting) {
      setIntersecting(true);
    }
  }, [isIntersecting, ref]);

  useEffect(() => {
    if (!ref.current) {
      return () => {};
    }
    if (!isIntersecting) {
      scrollAnimation();
    }
    window.addEventListener("scroll", scrollAnimation, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, [isIntersecting, ref, scrollAnimation]);
  return isIntersecting;
}
