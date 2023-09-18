import { useTheme } from "next-themes";
import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="border-b-2 dark:border-gray-700 border-gray-200">
      <div className="mx-auto w-[1200px] py-5 flex content-center justify-center items-center">
        <div className="flex-auto">
          <div className="cursor-pointer">
            <Link href="/" passHref>
              <h2 className="font-semibold text-xl">Dio&apos;s Blog</h2>
            </Link>
          </div>
        </div>
        <div className="mr-4 hover:text-gray-500 cursor-pointer">
          <Link href="/dev" passHref>
            <span>Dev</span>
          </Link>
        </div>
        <div className="hover:text-gray-500 cursor-pointer mr-4">
          <Link href="/personal" passHref>
            <span>Personal</span>
          </Link>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toogle
        </div>
      </div>
    </header>
  );
};

export default Header;
