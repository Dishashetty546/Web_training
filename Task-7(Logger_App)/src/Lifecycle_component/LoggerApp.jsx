import React, {Component} from 'react';
class LoggerApp extends Component{
    constructor(props)
    {
        super(props);
        console.log("Child Component: Constructor");
        this.state={
            count:0
        };
    }
 
    shouldComponentUpdate(nextprops, nextstate)
    {
        console.log("Child Component: Should Component Update");
        return this.state.count !== nextstate.count;
    }
    componentDidUpdate(prevprops, prevstate)
    {
        console.log("Child Component: Component Did update");
    }
    componentWillUnmount()
    {
        console.log(" Child Component: Component will unmount");
    }
    toggleTimer=()=>{
        this.setState({showChild: !this.state.showChild});
    }
    render(){
        return (
            <div>
                <h1>
                    React LifeCycle Demo
                </h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
            </div>

        )
    }


}
export default LoggerApp;