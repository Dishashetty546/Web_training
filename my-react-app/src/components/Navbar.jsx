import { BrowserRouter } from "react-router-dom";

function Navbar(){
    return(
        <BrowserRouter>
        <div>
          
            <li>
                <a href="/">Home</a></li>
               <li> <a href="/profile">Profile</a></li> 
            
        </div>


        </BrowserRouter>
    )
}