import './HeaderStyle.css'
import { useState } from 'react'

function Header(){
    const [show, setShow] = useState(false);
    function hover1(){
        setShow(!show);
    }
    const [show1, setShow1] = useState(false);
    function hover(){
        setShow1(!show1);
    }
    const [category, setCategory] =useState(false);
    function categories(){
        setCategory(!category)
    }
    const [cart, setCart] = useState(false);
    function showCart(){
        setCart(!cart)
    }
    return(
        <>
            <div className='heading'>
                <div className='first-list'>
                    <div className='lists1'>
                        <p className='usd'>USD</p>
                        <img  src='/icons/drop-icon.JPG' onMouseOver={hover1} alt='' className='icon1'/>
                        <div>
                        {
                            show ? <div id='dropdown-menu1'>
                                <p className='dropmenu-list'>USD</p>
                                <p className='dropmenu-list'>EUR</p>
                                <p className='dropmenu-list'>NRA</p>
                            </div>
                            : <div></div>
                        }

                    </div>
                    </div>
                 
                    <div className='lists1'>
                        <p className='usd'>English</p>
                        <img  src='/icons/drop-icon.JPG' alt='' onMouseOver={hover} className='icon1'/>

                        <div>
                        {
                            show1 ? <div id='dropdown-menu2'>
                                <p className='dropmenu-list'>English</p>
                                <p className='dropmenu-list'>French</p>
                                <p className='dropmenu-list'>Yoruba</p>
                            </div>
                            : <div></div>
                        }

                    </div>
                    </div>
                    <div className='lists2'>
                        <img  src='/icons/account.JPG' alt='' className='icon31'/>
                        <p className='usd'>My Account</p>
                    </div>
                    <div className='verticalLine'></div> 
                    <div className='lists3'>
                        <img  src='/icons/Wishlist-icon.JPG' alt='' className='icon21'/>
                        <p className='usd'>Wishlist</p>
                    </div>  
                    <div className='verticalLine'></div> 
                    <div className='lists2'>
                        <img  src='/icons/cart1-icon.JPG' alt='' className='icon41'/>
                        <p className='usd'>Cart</p>
                    </div>  
                    <div className='verticalLine'></div>  
                    <div className='lists2'>
                        <img  src='/icons/check-icon.JPG' alt='' className='icon31'/>
                        <p className='usd'>Checkout</p>
                    </div>  
                    <div className='verticalLine'></div> 
                    <div className='lists1'>
                        <img  src='/icons/login-icon.JPG' alt='' className='icon41'/>
                        <p className='usd'>Login</p>
                    </div>                  
                </div>


                <div className='header-second-line'>
                    <div>
                        <img src='/images/logo.png' alt=''/>
                    </div>
                <div id="search4">
                    <div id="bug1">
                  <button  id="categories" >
                      Categories
                      <div className='drop-pic' ><img src='/icons/drop1-icon.JPG' onClick={categories} id='drop1' alt='' /></div>
                      <div>
                        {
                            category &&   <ul class="dropdown-menu" id="drop_down1">
                            <p className="drop_list"> Computer</p>
                            <li><a href="" className="drop_list">- Clothing</a></li>
                            <li><a href="" className="drop_list">- Electronics</a></li>
                            <li><a href="" className="drop_list">- Watches</a></li>
                            <li><a href="" className="drop_list">- Shoes</a></li>
                            
                         </ul>
                        }

                      </div>
                  </button>
              
               </div>
               <div class="search1">
                  <input type="text" name="" id="" placeholder="Search here..." className="search"/>
               </div>
               <div className="search_container">
                  <button className='search-box'><a href=""><img id='search-icon' src="icons/search_icon.JPG" alt=""/></a> </button>
               </div>
            </div>

            <div  id="third_box">
               <div className="box3">
                  <a href=""><img src="/icons/shoppingCart-icon.JPG" alt=""/><span  id="badge1">
                     2
                    </span>
                  </a>
               </div>
            </div>
               <div class="dropdown" id="drop_7">
                  <a  id="third_box1" href="#" role="button" data-bs-toggle="dropdown" onClick={showCart} aria-expanded="false">
                    CART - $600.00
                  </a>
                  <div>
                    {
                        cart &&  <ul className="dropdown-menu">
                        <div>
                           <div>
                                <li><a class="dropdown-item" href="#"><img src="images/banners/banner-side.png" class="drop_img" alt=""/></a></li>
                                <li><a class="dropdown-item" href="#" className="pro">Simple Product</a><span class="pro_price"><b>$500.00</b></span></li>
                           </div>
                           <li><hr class="dropdown-divider"/></li>
                           <li><a class="dropdown-item" href="#" className="sub">Sub Total<span class="pro_price"><b>$500.00</b></span></a></li>
                          <div class="check_button">
                            <button class="btn text-white btn-primary" id="checkout"> CHECK OUT</button>
                          </div>
                       </div>
                      </ul> 
                    }
                  </div>
                
                  
               </div>
            

        </div>

        


    </div>
        </>
    )
}
export default Header