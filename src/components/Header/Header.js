import React, {useState, useEffect} from 'react'
import banner from '../../assets/pictures/PizzaBanner.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './header.css'
import {useAuth0} from '@auth0/auth0-react'
import CurrencyOption from '../CurrencyOption/CurrencyOption'

const Header = (props) => {
    const {loginWithRedirect, user, logout} = useAuth0();
    const [itemLength, setItemLength] = useState(0);

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('cartStorage'))) {
            setItemLength(0)
        } else {
            setItemLength(JSON.parse(localStorage.getItem('cartStorage')).length)
        }
    }, [[...props.cart]])

    return (
        <div>
            <header>
                <div className='banner'>
                    <Link to='/'>
                        <img src={banner} alt='pizza-banner' />
                    </Link>
                    <div>
                        <ul>
                            {user ? (
                                <li onClick={() => logout()}><a href='#' className='round red'>LogOut<span className="round">But only if you really, really want to. </span></a></li>
                             ) : (
                                <li onClick={() => loginWithRedirect()}><a href='#' className='round green'>LogIn<span className="round">Create an account or Log in if you have an account.</span></a></li>
                            )}
                        </ul>
                    </div>
                    <Link to='/cart' className='icon-link'>
                        <div className='cart-wrapper'>
                            <FontAwesomeIcon icon={faShoppingCart} id='icon' />
                            <span style={{backgroundColor: itemLength > 0 ? '#c71105' : '#bbb' }}>{itemLength}</span>
                        </div>
                    </Link>
                </div>
                <CurrencyOption />
            </header>
        </div>
    )
}

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps)(Header);

