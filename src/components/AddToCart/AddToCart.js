import React from 'react'
import { connect } from 'react-redux';
import {getNumberOfPizzas} from '../../actions/actions'


const AddToCart = (props) => {
    let count = 0;

    console.log(props);

    const getNumberOfItems = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        console.log(props.number);
    };


    const increase = (e) => {
        e.preventDefault()
        const cartItem = props.title;
        cartItem.number += 1
        props.getNumberOfPizzas(props.title)
    }

    return (
        <div>
            <form onSubmit={getNumberOfItems}>
                <span onChange={onChange}>{props.title.number}</span>
                <button onClick={increase}>+</button>
                <button>-</button>
                <input type='submit' value='Submit'></input>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({ number: state.number });

const mapDispatchToProps = dispatch => ({
  getNumberOfPizzas: value => dispatch(getNumberOfPizzas(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
