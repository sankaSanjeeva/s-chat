import React from "react";

interface Theme {
  theme: string;
  setTheme: (theme: string) => void;
}

interface ThemeProviderProps {
  // eslint-disable-next-line react/require-default-props
  initialTheme?: string;
  children: React.ReactNode;
}

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "dark";
};

const ThemeContext = React.createContext<Theme>({
  theme: "",
  setTheme: () => {},
});

function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (tm: string) => {
    const root = window.document.documentElement;
    const isDark = tm === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(tm);

    localStorage.setItem("color-theme", tm);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
