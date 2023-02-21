

class App extends React.Component {
    state = {
        products: [
            {id:1, name: "Tonkotsu Ramen", active: false},
            {id:2, name: "Chicken Curry", active: false},
            {id:3, name: "Vegetable Gyoza", active: false},
            {id:4, name: "Chili Udon", active: false},
            {id:5, name: "Tuna Tempura", active: true},

        ]
    }

    render(){
        return (
            <>
            <Header products={this.state.products}/>
            <ProcuctsList products={this.state.products}/>
            </>
        )
    }
}