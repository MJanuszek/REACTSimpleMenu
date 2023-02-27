const Header = (props) => {
    let activeProducts = props.products.filter(item => {
        
        return item.active === true})




        console.log(activeProducts)
    return(
        <h2>Dodaj do zamówienia: {activeProducts.length}</h2>

    )
    
}   