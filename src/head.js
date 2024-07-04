import Links from "./link"
import logo from './assets/logo.png'

function Head(props){
    return(
    <div className="head">
        <div>
            <img src={logo} alt='logo of the company' />
            <h1>B Cube</h1>
        </div>
        <Links  Home={props.Home}
                About={props.About}
                Service={props.Service}
                />

    </div>)
}


export default Head