import { useEffect, useState } from "react";
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileWidth = () => {
      if (window.innerWidth <= 767) {
        setIsMobile(true);
        return;
      }
      setIsMobile(false);
    };
    isMobileWidth();
    window.addEventListener("resize", isMobileWidth);
    return () => window.removeEventListener("resize", isMobileWidth);
  }, []);
  return isMobile;
};
