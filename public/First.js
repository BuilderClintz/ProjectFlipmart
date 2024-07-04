import './First-styling.css'
import { useState } from 'react'
function First(){
   const [show, setShow] = useState(false)
   function shows(){
    setShow(!show)
   }
   const [show1, setShow1] = useState(false)
   function shows1(){
    setShow1(show1=== false)
   }
   const [show2, setShow2] = useState(false)
   function shows2(){
    setShow2(show2=== false)
   }
   const [show3, setShow3] = useState(false)
   function shows3(){
    setShow3(show3=== false)
   }
   const [show4, setShow4] = useState(false)
   function shows4(){
    setShow4(show4=== false)
   }

   const [carousel, setCarousel] = useState(false)
   function newCarousel(){
      setCarousel(!carousel)
   }

    return (
        <>
         <div  id="seft2">
         <div className="categories2">
         <div className="categories3">
            <div id='categories-container' >
               <div className="icon5"><img src="icons/categories_icon.JPG" class="cate_icon" alt=""/></div>
               <div className="categories4"><h2 class="cate"> <b>CATEGORIES</b></h2></div>
            </div>
         </div>
         <div >
           <div className='clothing5'>
               <div class="bag_icon"><img src="icons/bag_icon.JPG" alt=""/></div>
               <button type="but" class="" id="cloths">
                Clothing
               </button>
               <button type="button" id="drop">
              <span class="visually-hidden"onClick={shows} > <img  src='/icons/clothing-next-icon.JPG' alt=''/> </span>
            </button>
           </div>
            
            <div>
               {
                  show && <ul className="dropdown-menu">
                  {/* <!-- Dropdown menu links --> */}
                  <div  id="dropcont2" >
                   <div>
                      <ul className="drop_list2">
                         <li><a href="#">Dresses</a></li>
                         <li><a href="#">Shoes</a></li>
                         <li><a href="#">Jackets</a></li>
                         <li><a href="#">Sunglasses</a></li>
                         <li><a href="#">Sportwears </a></li>
                         <li><a href="#">Blazers</a></li>
                         <li><a href="#">Shorts</a></li>
                      </ul>
                   </div>
                   <div>
                      <ul className="drop_list2">
                         <li><a href="#">Handbags</a></li>
                         <li><a href="#">Jewellery</a></li>
                         <li><a href="#">Swimwear</a></li>
                         <li><a href="#">Tops</a></li>
                         <li><a href="#">Flats</a></li>
                         <li><a href="#">Shoes</a></li>
                         <li><a href="#">Winter Wear</a></li>
                      </ul>
                   </div>
                   <div>
                      <ul className="drop_list2">
                         <li><a href="#">Toys & Games</a></li>
                         <li><a href="#">Jeans</a></li>
                         <li><a href="#">Shorts</a></li>
                         <li><a href="#">Shoes</a></li>
                         <li><a href="#">School Bags</a></li>
                         <li><a href="#">Foot wear</a></li>
                         <li><a href="#">Lunch bags</a></li>
                      </ul>
                   </div>
                   <div>
                      <ul className="drop_list2">
                         <li><a href="#">Sandals</a></li>
                         <li><a href="#">Shorts</a></li>
                         <li><a href="#">Dresses</a></li>
                         <li><a href="#">Jewellery</a></li>
                         <li><a href="#">Bags</a></li>
                         <li><a href="#"> Swim wear</a></li>
                         <li><a href="#">Night dress</a></li>
                      </ul>
                   </div>
                  
                </div>
                </ul>
               }
            </div>
            
         </div>
         <hr className="line34"/>


         <div class="btn-group dropend" id="clothes">
               <div className='clothing5'>
               <div class="bag_icon"><img src="icons/electronics_icon.JPG" alt=""/></div>
                <button type="but" class="" id="cloths">
                  Electronics
                </button>
               <button type="button" id="drop1">
                  <span class="visually-hidden"onClick={shows1} > <img  src='/icons/clothing-next-icon.JPG' alt=''/> </span>
               </button>
               </div>
               <div>
                  {
                     show1 && <ul class="dropdown-menu">
                     {/* <!-- Dropdown menu links --> */}
                     <div id="dropcont2"  >
                         <div>
                            <ul class="drop_list2">
                               <li><a href="#">Gaming</a></li>
                               <li><a href="#">Apple</a></li>
                               <li><a href="#">Dell</a></li>
                               <li><a href="#">Lenovo</a></li>
                               <li><a href="#">Microsoft </a></li>
                               <li><a href="#">Asus</a></li>
                               <li><a href="#">Adapters</a></li>
                               <li><a href="#">Batteries</a></li>
                               <li><a href="#">Cooing Pads</a></li>
                            </ul>
                         </div>
                         <div>
                            <ul class="drop_list2">
                               <li><a href="#">Routers & modems</a></li>
                               <li><a href="#">CPUs, Processors</a></li>
                               <li><a href="#">PC Gaming store</a></li>
                               <li><a href="#">Components</a></li>
                               <li><a href="#">Webcam</a></li>
                               <li><a href="#">Memory (RAM)</a></li>
                               <li><a href="#">Motherboards</a></li>
                               <li><a href="#">Keyboards</a></li>
                               <li><a href="#">Haedphones</a></li>
                            </ul>
                         </div>
                         <div>
                            <ul class="drop_list2">
                               <li><a href="#">Accessories</a></li>
                               <li><a href="#">Binculars</a></li>
                               <li><a href="#">Telescopes</a></li>
                               <li><a href="#">Camcorders</a></li>
                               <li><a href="#">Digital</a></li>
                               <li><a href="#">Film Cameras</a></li>
                               <li><a href="#">Flashes</a></li>
                               <li><a href="#">Surveilance</a></li>
                               <li><a href="#">Tripods</a></li>
                            </ul>
                         </div>
                         <div>
                            <ul class="drop_list2">
                               <li><a href="#">Apple</a></li>
                               <li><a href="#">Samsung</a></li>
                               <li><a href="#">Lenovo</a></li>
                               <li><a href="#">Motorola</a></li>
                               <li><a href="#">LeEco</a></li>
                               <li><a href="#"> Asus</a></li>
                               <li><a href="#">Acer</a></li>
                               <li><a href="#">Tecno</a></li>
                               <li><a href="#">Infinix</a></li>
                            </ul>
                         </div>
                      </div>
                   </ul>
                  }

               </div>
         </div>
         <hr class="line36"/>

         

               
         <div class="btn-group dropend">
            <div className='clothing5'>
               <div class="bag_icon"><img src="icons/shoes_icon.JPG" alt=""/></div>
               <button type="but" class="" id="cloths">
                    Shoes
               </button>
               <button type="button" id="drop2">
                  <span class="visually-hidden"onClick={shows2} > <img  src='/icons/clothing-next-icon.JPG' alt=''/> </span>
               </button>
            </div>
            <div>
               {
                  show2 && <ul class="dropdown-menu">
                  {/* <!-- Dropdown menu links --> */}
                  <div  id="dropcont3" >
                     <div>
                        <ul class="drop_list2">
                           <li><a href="#">Dresses</a></li>
                           <li><a href="#">Shoes</a></li>
                           <li><a href="#">Jackets</a></li>
                           <li><a href="#">Sunglasses</a></li>
                           <li><a href="#">Sportwears </a></li>
                           <li><a href="#">Blazers</a></li>
                           <li><a href="#">Shorts</a></li>
                        </ul>
                     </div>
                     <div>
                        <ul class="drop_list2">
                           <li><a href="#">Handbags</a></li>
                           <li><a href="#">Jewellery</a></li>
                           <li><a href="#">Swimwear</a></li>
                           <li><a href="#">Tops</a></li>
                           <li><a href="#">Flats</a></li>
                           <li><a href="#">Shoes</a></li>
                           <li><a href="#">Winter Wear</a></li>
                        </ul>
                     </div>
                     <div>
                        <ul class="drop_list2">
                           <li><a href="#">Toys & Games</a></li>
                           <li><a href="#">Jeans</a></li>
                           <li><a href="#">Shorts</a></li>
                           <li><a href="#">Shoes</a></li>
                           <li><a href="#">School Bags</a></li>
                           <li><a href="#">Foot wear</a></li>
                           <li><a href="#">Lunch bags</a></li>
                        </ul>
                     </div>
                     <div>
                        <ul class="drop_list2">
                           <li><a href="#">Sandals</a></li>
                           <li><a href="#">Shorts</a></li>
                           <li><a href="#">Dresses</a></li>
                           <li><a href="#">Jewellery</a></li>
                           <li><a href="#">Bags</a></li>
                           <li><a href="#"> Swim wear</a></li>
                           <li><a href="#">Night dress</a></li>
                        </ul>
                     </div>
                  </div>
                  
               </ul>
               }
            </div>
            
         </div>
         <hr class="line34"/>


         <div class="btn-group dropend" id="clothes">
            <div className='clothing5'>
               <div class="bag_icon"><img src="icons/watch_icon.JPG" alt=""/></div>
               <button type="but" class="" id="cloths">
                  Watches
               </button>
               <button type="button" id="drop4">
                  <span class="visually-hidden"onClick={shows3} > <img  src='/icons/clothing-next-icon.JPG' alt=''/> </span>
               </button>
            </div>
            <div>
               {
               show3 && <ul class="dropdown-menu">
              {/* <!-- Dropdown menu links --> */}
              <div class="d-sm-flex" id="dropcont2" >
                  <div>
                     <ul class="drop_list2">
                        <li><a href="#">Gaming</a></li>
                        <li><a href="#">Apple</a></li>
                        <li><a href="#">Dell</a></li>
                        <li><a href="#">Lenovo</a></li>
                        <li><a href="#">Microsoft </a></li>
                        <li><a href="#">Asus</a></li>
                        <li><a href="#">Adapters</a></li>
                        <li><a href="#">Batteries</a></li>
                        <li><a href="#">Cooing Pads</a></li>
                     </ul>
                  </div>
                  <div>
                     <ul class="drop_list2">
                        <li><a href="#">Routers & modems</a></li>
                        <li><a href="#">CPUs, Processors</a></li>
                        <li><a href="#">PC Gaming store</a></li>
                        <li><a href="#">Components</a></li>
                        <li><a href="#">Webcam</a></li>
                        <li><a href="#">Memory (RAM)</a></li>
                        <li><a href="#">Motherboards</a></li>
                        <li><a href="#">Keyboards</a></li>
                        <li><a href="#">Haedphones</a></li>
                     </ul>
                  </div>
                  <div>
                     <img className='banner1' src='/images/banners/banner-side.png' alt=''/>
                  </div>
               </div>
            </ul>     
            }
            </div>        
         </div>   
         <hr className="line35"/>     
         
         <div class="btn-group dropend">
           <div className='clothing5'>
               <div class="bag_icon"><img src="icons/jewellery_icon.JPG" alt=""/></div>
               <button type="but" class="" id="cloths">
                  Jewellery
               </button>
               <button type="button" id="drop3">
                  <span class="visually-hidden"onClick={shows4} > <img  src='/icons/clothing-next-icon.JPG' alt=''/> </span>
               </button>
            
            </div> 
            <div>
               {
                  show4 && <ul class="dropdown-menu">
                  {/* <!-- Dropdown menu links --> */}
                  <div  id="dropcont3" >
                     <div>
                        <ul class="drop_list2">
                           <li><a href="#">Dresses</a></li>
                           <li><a href="#">Shoes</a></li>
                           <li><a href="#">Jackets</a></li>
                           <li><a href="#">Sunglasses</a></li>
                           <li><a href="#">Sportwears </a></li>
                           <li><a href="#">Blazers</a></li>
                           <li><a href="#">Shorts</a></li>
                        </ul>
                     </div>
                     <div>
                        <ul class="drop_list2">
                           <li><a href="#">Handbags</a></li>
                           <li><a href="#">Jewellery</a></li>
                           <li><a href="#">Swimwear</a></li>
                           <li><a href="#">Tops</a></li>
                           <li><a href="#">Flats</a></li>
                           <li><a href="#">Shoes</a></li>
                           <li><a href="#">Winter Wear</a></li>
                        </ul>
                     </div>
                     <div>
                        <ul class="drop_list2">
                           <li><a href="#">Toys & Games</a></li>
                           <li><a href="#">Jeans</a></li>
                           <li><a href="#">Shorts</a></li>
                           <li><a href="#">Shoes</a></li>
                           <li><a href="#">School Bags</a></li>
                           <li><a href="#">Foot wear</a></li>
                           <li><a href="#">Lunch bags</a></li>
                        </ul>
                     </div>
                     <div>
                        <ul class="drop_list2">
                           <li><a href="#">Sandals</a></li>
                           <li><a href="#">Shorts</a></li>
                           <li><a href="#">Dresses</a></li>
                           <li><a href="#">Jewellery</a></li>
                           <li><a href="#">Bags</a></li>
                           <li><a href="#"> Swim wear</a></li>
                           <li><a href="#">Night dress</a></li>
                        </ul>
                     </div>
                  </div>
                  
               </ul>
               }
            </div>
            
         </div>
         <hr class="line36"/>
         
         <div class="btn-group dropend">
           <div className='clothing5'>
               <div class="bag_icon"><img src="icons/shoes_icon.JPG" alt=""/></div>
               <button type="but" class="" id="cloths">
                 Health
               </button>
               <button type="button" id="drop2">
                  <span class="visually-hidden" > <img  src='/icons/clothing-next-icon.JPG' alt=''/> </span>
               </button>  
           </div>
         </div>
         <hr class="line34"/>

         <div class="btn-group dropend">
            <div className='clothing5'>
               <div class="bag_icon"><img src="icons/kids_icon.JPG" alt=""/></div>
               <button type="but" class="" id="cloths">
                 Kids
               </button>
               <button type="button" id="drop5">
                  <span class="visually-hidden" > <img  src='/icons/clothing-next-icon.JPG' alt=''/> </span>
               </button>
            </div>
         </div>
         <hr class="line36"/>

         <div class="btn-group dropend" id="sft">
            <div className='clothing5'>
               <div class="bag_icon"><img src="icons/sports_icon.JPG" alt=""/></div>
               <button type="but" class="" id="cloths">
                 Sports
               </button>
               <button type="button" id="drop2">
                  <span class="visually-hidden" > <img  src='/icons/clothing-next-icon.JPG' alt=''/> </span>
               </button>     
            </div>      
         </div>
         <hr class="line34"/>

         <div class="btn-group dropend" id="sft">
            <div className='clothing5'>
               <div class="bag_icon"><img src="icons/home_icon.JPG" alt=""/></div>
               <button type="but" class="" id="cloths2">
                 Gardens
               </button>
               <button type="button" id="drop2">
                  <span class="visually-hidden" > <img  src='/icons/clothing-next-icon.JPG' alt=''/> </span>
               </button>     
            </div>      
         </div>

         
      </div>

      <div id="carouselExampleInterval"  className="second-set" >
         {
            carousel ?
            <div class="carousel-item " id="slider1">
            <div  id="text_slide">
              <p className="spring"><b>TOP BRANDS</b></p>
              <h3 className="slide_text"><b>NEW <span class="imageslide_text">COLLECTION </span> </b></h3>
              <p className="slide_text2">Lorem ipsum dolor sit amet consectetur adipisicing elit.eius reiciend</p>
              <button  id="shop_btn">SHOP NOW</button>
            </div>
            </div> :

            <div class="carousel-item" id="slider2" >
               <div id="text_slide" >
                  <p class="spring"><b>SPRING 2024</b></p>
                  <h3 class="slide_text"><b>WOMEN <span class="imageslide_text">FASHION</span></b></h3>
                  <p class="slide_text2">Lorem ipsum dolor sit amet consectetur adipisicing elit.eius reiciend</p>
                  <button id="shop_btn">SHOP NOW</button>
                </div>
            </div>
            
         }
         
         {/* <button class="carousel-control-prev" type="button" onClick={newCarousel}>
           
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
           <span class="visually-hidden">Next</span>
         </button> */}

         <div className="carousel_card">
            <div className="first_text">
               <h3 className="money"><b>MONEY BACK</b></h3>
               <p className="money_back"><b>30 days money back guarantee</b></p>
            </div>
            <div className="first_text">
               <h3 className="money"><b>FREE SHIPPING</b></h3>
               <p className="money_back"><b>Shipping on orders over $99</b></p>
            </div>
            <div className="first_text">
               <h3 className="money"><b>SPECIAL SALE</b></h3>
               <p className="money_back"> <b>Extra $5 off on all items</b></p>
            </div>
         </div>
       </div>
   </div>
        
        </>
    )
}

 export default First