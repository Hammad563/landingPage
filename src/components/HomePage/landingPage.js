import React from 'react';
import './landing.css';
import picture1 from '../../img/Image.png';
import macbook from '../../img/Macbook.png'
import logo from '../../img/logo.png';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import ellipse1 from '../../img/ellipse1.png';
import ellipse2 from '../../img/ellipse2.png';
import ellipse3 from '../../img/ellipse3.png';
import test1 from '../../img/Test1.png';
import test2 from '../../img/test2.png';
import test3 from '../../img/test3.png';
import quote from '../../img/quote.png';

const Landing = () => {
    return (
        <div className='mainContainer'>

            <div className='circle_green'>
                
            </div>   
            <div className='blue_green'>
                <h1></h1>
            </div>    
            <div className='circle_orange'>
                <h1></h1>
            </div>      
             <div className='NavItems'>
                <div className='logo'>
                    <img src='' alt="" />
                </div>
                <div className='button'>
                    <a href="#">Shop Now</a>
                </div>
            </div>

            <div className='container1'>
                <div className='titleText'>
                 <h1>Start</h1>
                 <h1>Shopping With</h1>
                 <h1>MyStore</h1>
                </div>

                <div className='text'>
                    <p>Hate being blind-sighted by hidden fees? Want to stay up to date with your orders? Need help finding the right product? We got you covered. Introducing MyStore, helping you get what you need and providing that great online shopping experience you have been missing.</p>
                </div>

                <div className='button1'>
                    <a href="#">Shop Now</a>
                </div>
                <div className='picture1'>
                    <img className='picture1s' src={picture1} alt="" />
                </div>
            </div>

            <div className='container2'>

                <div className='title2'>
                   <h2>An Online Store Created With</h2>
                   <h2>You In Mind</h2>
                </div>

                
                <div className='icon'><img className='icon1' src={icon1} alt="" /></div>
                <div className='items1_container2'>
                    <div className='Title_T_container2'>
                        <h3> No More Hidden Fees
                        </h3>
                    </div>
                    <div className='text_container2'>
                        <p>Get to know all the details of the product you are interested in, including costs associated. We will let you know from the start.</p>
                    </div>
                </div>
                <div className='icon'><img className='icon1' src={icon2} alt="" /></div>
                <div className='items1_container2'>
                    <div className='Title_T_container2'>
                        <h3>Track Your Order</h3>
                    </div>
                    <div className='text_container2'>
                        <p>After you order from the MyStore website, you can track your items and stay up to date on where your purchase(s) is and when it should arrive.</p>
                    </div>
                </div>
                <div className='icon'><img className='icon1' src={icon1} alt="" /></div>
                <div className='items1_container2'>
                    <div className='Title_T_container2'>
                        <h3>Shop Faster</h3>
                    </div>
                    <div className='text_container2'>
                        <p>Enhanced searchability, so you can find exactly the item you are looking for in not time at all. No sign up neccessary.</p>
                    </div>
                </div>
                <div className='icon'><img className='icon1' src={icon2} alt="" /></div>
                <div className='items1_container2'>
                    <div className='Title_T_container2'>
                        <h3>Better Recommendations</h3>
                    </div>
                    <div className='text_container2'>
                        <p>Get product recommendations that is catered to you and your interests.</p>
                    </div>
                </div>

                <div className='macbook'>
                    <img className='macbooks' src={macbook} alt="" />
                </div>
                <div className='screen'>
                    <img src={logo} alt="" />
                </div>


            </div>

            <div className='container3'>
                <div className='quote'> <img src={quote} alt="" /></div>
                <div className='container3_title'>
                  <h2>What Shoppers</h2>
                  <h2>Say</h2>
                  <p>Hear what other shoppers say about using MyStore to shop online.</p>
                </div>
                <div className='test1'>
                    <div className='ellipse'>
                        <img src={ellipse1} alt="" />
                    </div>
                    <img src={test1} alt="" />
                </div>

                <div className='test2'>
                    <div className='ellipse'>
                        <img src={ellipse2} alt="" />
                    </div>
                    <img src={test2} alt="" />
                </div>

                <div className='test3'>
                   
                    <img className='test3_img' src={test3} alt="" />
                </div>
            </div>

            <div className='container4'>
            <div className='item1_container4'>
                    <div className='line'></div>
                     <div className='text_container4'>
                        <h4>3000+</h4>
                        <p>Happy Shoppers</p>
                    </div>
            </div>

            <div className='item2_container4'>
                    <div className='line'></div>
                     <div className='text_container4'>
                        <h4>20, 000+</h4>
                        <p>Products Sold</p>
                    </div>
            </div>

            <div className='item3_container4'>
                    <div className='line'></div>
                     <div className='text_container4'>
                        <h4>8+</h4>
                        <p>Awards Won</p>
                    </div>
            </div>

            <div className='item4_container4'>
                    <div className='line'></div>
                     <div className='text_container4'>
                        <h4>2000+</h4>
                        <p>Active Members</p>
                    </div>
            </div>

            </div>

            <div className='container5'>
                <div className='item1_container5'>
                    <div className='text1_container5'>
                        <p>Find the item you want to purchase and know what is happening with your order, from start to delivery. No more guessing about your order total before checkout because we will tell you upfront. A shopping experience catered to you. 
                        </p>
                        <p>Start shopping now with MyStore!</p>
                        <div className='button_container5'>
                            <a href="#">Shop Now</a>
                                </div>
                    </div>
                   
                </div>

            </div>

           
        </div>
    )
}
export default Landing;
