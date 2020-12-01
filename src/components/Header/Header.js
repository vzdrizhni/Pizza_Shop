import React from 'react'
import banner from '../../assets/pictures/PizzaBanner.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './header.css'

const Header = (props) => {
    return (
        <div>
            <header>
                <div className='banner'>
                    <Link path to='/'>
                        <img src={banner} alt='pizza-banner' />
                    </Link>
                    <div>
                        <ul>
                            <li><Link to="/sign_in" className='round green'>LogIn<span class="round">That is, if you already have an account.</span></Link></li>
                            <li><Link to="/sign-up" className='round red'>Sign Up<span class="round">But only if you really, really want to. </span></Link></li>
                        </ul>
                    </div>
                    <Link path to='/cart' className='icon-link'>
                        <div className='cart-wrapper'>
                            <FontAwesomeIcon icon={faShoppingCart} id='icon' />
                            <span>{props.cart.length}</span>
                        </div>
                    </Link>
                </div>
            </header>
        </div>
    )
}

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps)(Header);

