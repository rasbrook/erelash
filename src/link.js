import { Link } from "react-router-dom"

function Links(props){
    
    return(
    <div className="linkss">
        <Link  to={props.Home}>Home</Link >
        <Link  to={props.About}>About</Link>
        <Link  to={props.Service}>Service</Link>
        

    </div>)

}



export default Links
    