import React, { Component } from 'react'
import { connect } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem'
import './pizza-list.css'

export class PizaaList extends Component {

    render() {
        const {pizzas} = this.props;
        if(!pizzas) {
            return (
                <div>Loading</div>
            )
        } else {
            if (localStorage.getItem('cartStorage') === null) {
                localStorage.setItem('cartStorage', JSON.stringify(this.props.cart));
              } else if (this.props.cart.length > JSON.parse(localStorage.getItem('cartStorage')).length) {
                localStorage.setItem('cartStorage', JSON.stringify(this.props.cart))
              }
            return (
                <div className="pizza-list">
                    {pizzas.map(pizza => {
                        return <PizzaListItem key={pizza.id} pizza={pizza} />
                    })}
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({ pizzas: state.pizzas, cart: state.cart});

export default connect(mapStateToProps)(PizaaList);
