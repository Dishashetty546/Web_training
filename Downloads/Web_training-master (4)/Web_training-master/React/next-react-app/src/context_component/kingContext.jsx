import { useContext } from "react";
import { newone } from "./newone";

function KingContext() {
    const [theme, toggleKey] = useContext(newone);

    const style = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        textAlign: "center",
        minHeight: "100px"
    };

    return (
        <div>
            <h1>King component</h1>
            <h1 style={style}>Theme is {theme}</h1>
            <button onClick={toggleKey}>Toggle Button</button>
        </div>
    );
}

export default KingContext;