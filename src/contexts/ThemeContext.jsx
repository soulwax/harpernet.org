// File: src/contexts/ThemeContext.jsx

import { createContext, createSignal, onMount, useContext } from "solid-js";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = (props) => {
    // Get initial theme from localStorage or system preference
    const getInitialTheme = () => {
        if (typeof window === "undefined") return "light";

        const stored = localStorage.getItem("theme");
        if (stored && (stored === "light" || stored === "dark")) {
            return stored;
        }

        // Check system preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = createSignal(getInitialTheme());

    // Apply theme to document
    const applyTheme = (newTheme) => {
        if (typeof window === "undefined") return;

        document.documentElement.setAttribute("data-theme", newTheme);
        document.documentElement.className = newTheme;
        localStorage.setItem("theme", newTheme);
    };

    // Toggle between light and dark
    const toggleTheme = () => {
        const newTheme = theme() === "light" ? "dark" : "light";
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    // Set specific theme
    const setSpecificTheme = (newTheme) => {
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    // Apply theme on mount and when theme changes
    onMount(() => {
        applyTheme(theme());

        // Listen for system theme changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
            if (!localStorage.getItem("theme")) {
                const systemTheme = e.matches ? "dark" : "light";
                setTheme(systemTheme);
                applyTheme(systemTheme);
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    });

    const value = {
        theme,
        toggleTheme,
        setTheme: setSpecificTheme,
        isDark: () => theme() === "dark",
        isLight: () => theme() === "light"
    };

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
};