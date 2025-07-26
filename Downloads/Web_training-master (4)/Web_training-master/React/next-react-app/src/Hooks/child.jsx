import { forwardRef} from "react";
// import {inputRef} from './Parent.jsx';
function child(props,ref){
    return(
        <div>
            <h1>Child component</h1>
            <input type="text"  ref={ref} />
        </div>
    )
}
export default forwardRef(child);