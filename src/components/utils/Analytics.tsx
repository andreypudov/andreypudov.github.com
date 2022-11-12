import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ReactGA from 'react-ga4';

export default function Analytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [pathname]);

  return null;
}
