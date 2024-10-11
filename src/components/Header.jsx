
import { Link } from "react-router-dom";
const Header =() => {
    return (
        <header  className="header">
            <nav>
                
             <Link to = "/">Home</Link>
                   
             <Link to = "/music">Music</Link>
                  
             <Link to = "/signup">Sign Up</Link>
                 
            </nav>
        </header>
        
    );
    
};
export default Header;