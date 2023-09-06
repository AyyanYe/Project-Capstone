import React from 'react';
import logo from '../images/Logo .svg';

function Footer() {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='Company Logo' />
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservation</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br /> 123 Towncity, USA</li>
                        <li>Phone: <br /> ++ 1123 476 543</li>
                        <li>Email: <br /> ayyanahmed@outlook.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Twitter</a></li>
                        <li><a href='/'>Instagram</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;