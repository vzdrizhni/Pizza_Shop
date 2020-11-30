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
                        <Link to="/sign_in"><span className="log">LogIn</span></Link>
                        <Link to="/sign-up"><span className="sign-up">Sign Up</span></Link>
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

