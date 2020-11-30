import React, { Component } from 'react'
import { connect } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem'
import './pizza-list.css'

export class PizaaList extends Component {

    render() {
        const {pizzas} = this.props;
        console.log(pizzas);
        if(!pizzas) {
            return (
                <div>Loading</div>
            )
        } else {
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

const mapStateToProps = state => ({ pizzas: state.pizzas});

export default connect(mapStateToProps)(PizaaList);
