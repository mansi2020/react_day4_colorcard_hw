
const Colorcard = (props)=>{
    return(
        <div className="colorcard_container" style={{border:`4px solid ${props.color}`}}>
            <div style={{
                width:"200px",
                height:"220px",
                backgroundColor:props.color,
                boxShadow:`2px 2px 20px ${props.color}`,
                
            }}></div>
            <h2>{props.color}</h2>
            <span style={{color:props.color}}>{props.colorName}</span>
        </div>
    );
};

export default Colorcard;