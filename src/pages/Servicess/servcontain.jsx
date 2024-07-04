function ServContain(props){
    return(<div className="service-contain">
        <h2>{props.head}</h2>
        <div className="service-contain-2">
            <p>{props.containt}</p>
            <img src={props.sorce} alt={props.imgdis}/>


        </div>



    </div>)
}

export default ServContain
