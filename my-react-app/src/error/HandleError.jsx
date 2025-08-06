function HandleError(props){
    try{
        throw new Error("Something brokw ");
    }
    catch(error)
    {
        return <p>Some Error occured in first compoent ....</p>
    }
    return(
        <div>
            <h2>This is first component from error folder
            </h2>
            <h3>{props.name}</h3>
        </div>
    )
}
export default HandleError;