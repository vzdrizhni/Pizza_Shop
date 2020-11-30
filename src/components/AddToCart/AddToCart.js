import React from 'react'
import { connect } from 'react-redux';
import {getNumberOfPizzas, addToCartAction, clearField} from '../../actions/actions'


const AddToCart = (props) => {

    let disabled = '';

    if (props.title.number <= 0) {
        disabled = 'disabled'
    } else {
        disabled = ''
    }

    const getNumberOfItems = (e) => {
        e.preventDefault();
        props.addToCartAction(props.number);
        props.title.number = 0;
        props.clearField(props.title)
    }

    const increase = (e) => {
        e.preventDefault()
        props.title.number += 1;
        props.getNumberOfPizzas(props.title)
    }

    const decrease = (e) => {
        console.log(disabled);
        e.preventDefault();
        props.title.number -= 1;
        props.getNumberOfPizzas(props.title)
    }

    return (
        <div>
            <form onSubmit={getNumberOfItems}>
                <span>{props.title.number}</span>
                <button onClick={increase}>+</button>
                <button onClick={decrease} disabled={disabled}>-</button>
                <input type='submit' value='Add to cart...' disabled={disabled}></input>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({ number: state.number, clearField: state.clearField });

const mapDispatchToProps = dispatch => ({
  getNumberOfPizzas: value => dispatch(getNumberOfPizzas(value)),
  addToCartAction: value => dispatch(addToCartAction(value)),
  clearField: value => dispatch(clearField(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
