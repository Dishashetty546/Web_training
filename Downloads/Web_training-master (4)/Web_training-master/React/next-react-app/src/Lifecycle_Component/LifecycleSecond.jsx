import React, {Component} from 'react';

class LifeCycleSecond extends Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        };
        console.log("Constructor called.....")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateProps() method called ....");
        return null;

    }
    shouldComponentUpdate(nextprops,nextstate)
    {
        console.log("ShouldComponentUpdate() is called");
        return true;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("getSnapSgotBeforeUpdate() called.....");
        return null;
    }
    componentDidUpdate(prevprops,prevstate,snapshot)
    {
        console.log("ComponentDidUpdate() called.......");
    }
    componentDideMount(){
        console.log("ComponentDidMount() called....");
    }
    render(){
        return(
            <div>
                <h1>Updating Phase</h1>
                <h1>Value:{this.state.value}</h1>
                <button onClick={()=>this.setState({value: this.state.value+1})}>Increment</button>
            </div>
        )
    }
    
}
export default LifeCycleSecond;