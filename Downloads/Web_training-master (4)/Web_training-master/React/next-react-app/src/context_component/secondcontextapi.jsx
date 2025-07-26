import Thirdcontextapi from "./thirdcontextapi";
function secondcontextapi(props){
    return(
        <div>
            <h1>SECOND COMPONENT</h1>
            <Thirdcontextapi props={username} />
        </div>
    )
}
export default secondcontextapi;