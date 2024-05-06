import React, { useEffect, ReactNode } from "react";
import { useLocation } from "react-router";

interface ScrollToTopProps {
  children: ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const location = useLocation();

  const thisRoute = location.pathname.split('/')[1];

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  }, [thisRoute]);
  

  return <>{children}</>;
};

export default ScrollToTop;
