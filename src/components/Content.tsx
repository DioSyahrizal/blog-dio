import clsx from "clsx";
import React, { FC } from "react";

const Content: FC = ({ children }) => {
  return <div className={clsx("mx-auto w-6xl")}>{children}</div>;
};

export default Content;
