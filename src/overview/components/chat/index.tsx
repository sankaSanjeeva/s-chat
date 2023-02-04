/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import "twin.macro";
import { ThemeContext } from "../../../theme";

export default function Chat() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div tw="flex-grow bg-secondary">
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        change theme
      </button>
    </div>
  );
}
