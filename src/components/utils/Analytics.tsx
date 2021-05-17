import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ReactGA from 'react-ga';

export default function Analytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    ReactGA.pageview(pathname);
  }, [pathname]);

  return null;
}
