import React from 'react'
import { connect } from 'react-redux';
import {getNumberOfPizzas, addToCartAction, clearField} from '../../actions/actions'
import Button from 'react-bootstrap/Button'
import './addToCart.css'



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
        <div className='buttons-wrapper'>
            <form onSubmit={getNumberOfItems}>
                <div className='dec-inc'>
                    <Button variant="dark" onClick={increase} size="sm">+</Button >
                    <span>{props.title.number}</span>
                    <Button variant="dark" onClick={decrease} disabled={disabled} size="sm">-</Button >
                </div>
                <Button variant="dark" type='submit' className='add-to' disabled={disabled} size="sm">Add to cart...</Button>
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
