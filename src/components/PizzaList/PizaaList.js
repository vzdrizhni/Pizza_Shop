import React, {Component} from 'react'
import {connect} from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem'
import './pizza-list.css'
import {addToCartAction} from '../../actions/actions'

export class PizaaList extends Component {

  render() {
    const {pizzas} = this.props;
    if (!pizzas) {
      return (
        <div>Loading</div>
      )
    } else {
      if (localStorage.getItem('cartStorage') === null) {
        localStorage.setItem('cartStorage', JSON.stringify(this.props.cart));
      } else if (this.props.cart.length > JSON.parse(localStorage.getItem('cartStorage')).length) {
        localStorage.setItem('cartStorage', JSON.stringify(this.props.cart))
      } else if (this.props.cart.length < JSON.parse(localStorage.getItem('cartStorage')).length) {
        JSON.parse(localStorage.getItem('cartStorage')).map(element => {
            return this.props.addToCartAction(element)
        });
      }
      return (
        <div className="pizza-list">
          {pizzas.map(pizza => {
            return <PizzaListItem key={pizza.id} pizza={pizza}/>
          })}
        </div>
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
    addToCartAction: value => dispatch(addToCartAction(value)),
});

const mapStateToProps = state => ({pizzas: state.pizzas, cart: state.cart});

export default connect(mapStateToProps, mapDispatchToProps)(PizaaList);
