import clsx from "clsx";
import React, { FC } from "react";

const Content: FC = ({ children }) => {
  return <div className={clsx("mx-auto w-[1200px]")}>{children}</div>;
};

export default Content;
