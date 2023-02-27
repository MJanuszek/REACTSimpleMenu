const Product = (props) => {
    
    return (
        <>
        <li 
        style={props.active ? {fontWeight: "bold"}:{fontWeight: null}}
        // to select clicked element pass id:
        onClick={() => props.changeStatus(props.id)}
        >
            
            {props.name}</li>
        </>
        
    )
}