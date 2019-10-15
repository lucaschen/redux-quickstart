import React from "react";

import Actions from "./Actions";
import LoginStatus from "./LoginStatus";

const Root = () => {
  return (
    <div>
      <LoginStatus />
      <Actions />
    </div>
  );
};

export default Root;
