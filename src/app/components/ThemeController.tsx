"use client";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { themes } from "../../../themes";
import "../styles/scroll.css"

export default function ThemeController() {
  useEffect(() => {
    themeChange(false);
  }, []);

  const themeList = themes.map((themeName) => {
    return (
      <li key={themeName}>
        <input
          type="button"
          name="theme-dropdown"
          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label={themeName}
          data-set-theme={themeName}
          value={themeName}
        />
      </li>
    );
  });
  return (
    <div className="dropdown mb-72">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl scrollbar overflow-y-scroll h-56">
        {themeList}
      </ul>
    </div>
  );
}
