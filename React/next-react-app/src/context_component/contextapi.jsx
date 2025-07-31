import Secondcontextapi from "./secondcontextapi";
import { useContext } from "react";
import userContext from "./userContext.jsx";
function Contextapi(){
    const username= useContext(userContext);
    return (
        <div>
            <h1>FIRST COMPONENT</h1>
            <Secondcontextapi/>
        </div>
    )
}
export default Contextapi;