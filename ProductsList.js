const ProcuctsList = (props) => {
    let allProductsList = props.productsList.map(item => (
        // retrun domyślne, składnia bez {}
        <Product
        // key is not forwarded to props
        key={item.id}
        id={item.id}
        name={item.name}
        active={item.active}
        changeStatus={props.changeActive}
        
        />
    ))

    return(
        <>
         <h3>Dostępne menu:</h3>
        <ul>
          {allProductsList}
        </ul>
        </>
       
    )
    
}