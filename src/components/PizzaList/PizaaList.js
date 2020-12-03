import React, { Component } from 'react'
import { connect } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem'
import './pizza-list.css'
import {Card, CardDeck} from 'react-bootstrap'

export class PizaaList extends Component {

    render() {
        const {pizzas} = this.props;
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
