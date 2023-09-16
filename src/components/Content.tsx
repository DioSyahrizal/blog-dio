import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <div className={clsx("mx-auto w-6xl")}>{children}</div>;
};

export default Content;
