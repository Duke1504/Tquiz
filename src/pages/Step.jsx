import { Outlet, useLocation } from "react-router";

import { Progress } from "../components";
import { STEPS_AMOUNT } from "../constants";

export const Step = () => {

  let location = useLocation();
  const activeStep = location.pathname.split('/')[2]

  return (
    <div className="container">
      <div className="wrapper">
        <Progress steps={STEPS_AMOUNT} activeStep={activeStep} />
        <Outlet />
      </div>
    </div>
  );
};
