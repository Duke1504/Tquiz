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
  const [theme, setTheme] = useState()

  useEffect(() => {
    const theme = localStorage.getItem('theme')

    if (theme) {
      setTheme(theme)
      return
    }

    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      setTheme('dark')
      return
    }

    setTheme('light')
  }, [])

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      return
    }

    if (theme === 'dark') {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
  }, [theme])



  return (
    <ThemeContext.Provider value={theme}>
      <nav style={{ display: 'flex', marginLeft: 'auto', width: '300px' }}>
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
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
