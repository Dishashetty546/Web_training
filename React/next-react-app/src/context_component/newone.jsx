import { createContext, useState } from "react";

export const newone = createContext();

export function NewoneProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleKey = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <newone.Provider value={[theme, toggleKey]}>
            {children}
        </newone.Provider>
    );
}