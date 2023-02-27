

class App extends React.Component {
    state = {
        products: [
            {id:1, name: "Tonkotsu Ramen", active: true},
            {id:2, name: "Chicken Curry", active: false},
            {id:3, name: "Vegetable Gyoza", active: false},
            {id:4, name: "Chili Udon", active: false},
            {id:5, name: "Tuna Tempura", active: true},

        ]
    }
    // handle----------------

    handleChangeActive = (id) => {
    //  console.log(id)
        const products = this.state.products.map(item => {
            if(id === item.id){
                item.active = !item.active
        }
        // after change (!item.active) return new element
        return item
    })

    this.setState({
        products: products
    })
    }

    // render---------------
    render(){
        return (
            <>
            <Header products={this.state.products}/>
            <ProcuctsList 
            productsList={this.state.products}
            changeActive={this.handleChangeActive}
            />
            </>
        )
    }
}