import React from 'react'
import banner from '../../assets/pictures/PizzaBanner.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <div className='banner'>
                    <img src={banner} alt='pizza-banner' />
                    <div>
                        <Link to="/sign_in"><span className="log">LogIn</span></Link>
                        <Link to="/sign-up"><span className="sign-up">Sign Up</span></Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
