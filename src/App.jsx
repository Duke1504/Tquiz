import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import {
  Welcome,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  Step,
  Thanks,
} from "./pages";

import "./App.css";
import "./styles/main.css";
import { ThemeContext } from "./context/ThemeContext";

export const App = () => {
  const [theme, setTheme] = useState();

  // Инициализация темы при загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }

    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  // Сохранение и применение темы
  useEffect(() => {
    if (!theme) return;

    document.body.classList.add(theme);
    document.body.classList.remove(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Функция переключения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <nav style={{ display: "flex", marginLeft: "auto", width: "300px" }}>
        <button onClick={toggleTheme}>
           {theme === "dark" ? "Light" : "Dark"} Theme
        </button>
      </nav>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/step" element={<Step />}>
          <Route index path="1" element={<StepOne />} />
          <Route path="2" element={<StepTwo />} />
          <Route path="3" element={<StepThree />} />
          <Route path="4" element={<StepFour />} />
        </Route>
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </ThemeContext.Provider>
  );
};
