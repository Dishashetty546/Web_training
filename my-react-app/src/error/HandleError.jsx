function HandleError(props) {
    // Simulating an error
    throw new Error("Something broke");
 
    return (
        <div>
            <h2>This is first component from error folder</h2>
            <h3>{props.name}</h3>
        </div>
    );
}

export default HandleError;
