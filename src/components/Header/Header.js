import React from 'react'
import banner from '../../assets/pictures/PizzaBanner.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './header.css'
import {useAuth0} from '@auth0/auth0-react'

const Header = (props) => {
    const {loginWithRedirect, user, logout} = useAuth0();
    console.log(user);
    return (
        <div>
            <header>
                <div className='banner'>
                    <Link path to='/'>
                        <img src={banner} alt='pizza-banner' />
                    </Link>
                    <div>
                        <ul>
                            <li onClick={() => loginWithRedirect()}><Link className='round green'>LogIn<span class="round">That is, if you already have an account.</span></Link></li>
                            <li onClick={() => logout()}><Link className='round red'>Sign Up<span class="round">But only if you really, really want to. </span></Link></li>
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

