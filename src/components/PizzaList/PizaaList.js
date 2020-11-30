import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getPizzas} from '../../actions/actions'

export class PizaaList extends Component {

    render() {
        const {pizzas} = this.props;
        if(!pizzas) {
            return (
                <div>Loading</div>
            )
        } else {
            return (
                <div>
                    {pizzas.map(pizza => {
                        return <div>{pizza.title}</div>
                    })}
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({ pizzas: state.pizzas});

export default connect(mapStateToProps)(PizaaList);
