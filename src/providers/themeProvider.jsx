import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./contexts/themeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem(`theme`) || `light`);

  useEffect(() => {
    document.body.setAttribute(`data-theme`, theme);
    localStorage.setItem(`theme`, theme);
  }, [theme]);

  const toogleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === `light` ? `dark` : `light`));
  }, []);

  return (
    <ThemeContext.Provider
      value={useMemo(() => ({ theme, toogleTheme }), [theme, toogleTheme])}
    >
      {children}
    </ThemeContext.Provider>
  );
}
