import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="border-b-2 border-gray-200">
      <div className="mx-auto max-w-6xl py-5 flex content-center justify-center items-center">
        <div className="flex-auto">
          <Link href="/" passHref>
            <h2 className="font-semibold text-xl">Dio&apos;s Blog</h2>
          </Link>
        </div>
        <div className="mr-4 hover:text-gray-500 cursor-pointer">
          <Link href="/dev" passHref>
            <span>Dev</span>
          </Link>
        </div>
        <div className="hover:text-gray-500 cursor-pointer">
          <Link href="/personal" passHref>
            <span>Personal</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
