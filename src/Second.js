import { useState } from "react";


function Second(){
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const second = new Date ().getSeconds()  
    
   const [pic, setPic] = useState(5);
   function newPic(){
      if (pic < 10){
      setPic(pic + 5);
   }
   }
    function previousPic(){
      if( pic > 5 ){
        setPic(pic - 5);
      }
    }  
    return(

    
    <>
           <div id="third_section" >
      <div>
         <div class="second_carousel">
            <div >
            
             <h3 className="deals"> <b>HOT DEALS</b> </h3>
             <div className="carousel-buttons">
                  <div><img src="/icons/previous-icon1.JPG" className="newpic5"  onClick={previousPic}  alt=""/></div>
                  <div><img src="/icons/next-icon1.JPG" className="newpic4" onClick={newPic}  alt=""/></div>
                </div>
             <hr/>
             <div  id="carouselExampleFade">
                <div className="hot-box12" ><p className="badge1-text2"><b>35% <br/> OFF</b></p></div>
               
                <img src={`/images/hot-deals/p${pic}.jpg`} className="hot-deals-pic" alt=""/>
               <div className="time">
                    <p className="dateTime"><span className="date"><b>120</b></span><br/> DAYS</p>
                    < p className="dateTime"><span className="date"><b>{hour}</b></span><br/>HRS</p>
                    <p className="dateTime"><span className="date"><b>{minute}</b></span><br/> MINS</p>
                    <p className="dateTime"><span className="date"><b>{second}</b></span><br/>SEC</p>
               </div>
            </div>
            <div className="firstcarousel-text">
                <a href="#" class="floral1">Floral Print Buttoned</a>
                <div className="carousel2-stars">
                    <div><img src="images/star-on.png" className="star"  alt=""/></div>
                    <div><img src="images/star-on.png" className="star"  alt=""/></div>
                    <div><img src="images/star-on.png" className="star"  alt=""/></div>
                    <div><img src="images/star-on.png" className="star"  alt=""/></div>
                    <div><img src="images/star-off.png" className="star"  alt=""/></div>
            </div>
            <p class="floral_amount"><b>$600.00</b> <span class="floral2">$800.00</span></p>
            <button class="add1">Add to cart</button>
            </div>
            
            </div>
          </div>
      </div>

      <div id="fourth_carousel1" className="second-set2" >
         <div class="container-sm">
            <div className="heading7" >
               <h3 class="deals"> <b>NEW PRODUCTS</b> </h3>
               <div className="carousel2-links">
                  <ul className="carousel2Unordered-list">
                     <li><a href="#" className="carousel2-link">All</a></li>
                     <li><a href="#" className="carousel2-link1">Clothing</a></li>
                     <li><a href="#" className="carousel2-link1">Eletronics</a></li>
                     <li><a href="#" className="carousel2-link1">Shoes</a></li>
                  </ul>
               </div>
            </div>
            <hr class="carousel2-line"/>

            <div >
               <div  className="overflow-hidden ">
                 <div>
                  <div  id="carousel2-pic">
                  <div className="hot-box1" ><p className="badge1-text">NEW</p></div>
                     <img src="images/products/p1.jpg" className="secondSet-pic"   alt=""/>
                     
                     <div class="carousel2-texts">
                        <a href="#" class="floral1">Floral Print Buttoned</a>
                        <div className="stars">
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png"  className="star" alt=""/></div>
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png"  className="star" alt=""/></div>
                        <div><img src="images/star-off.png" className="star"  alt=""/></div>
                        </div>
                        <p className="floral_amount45"><b>$445.99</b> <span class="floral2">$520.00</span></p>
                     </div>
                 
                  </div>
                 </div>
                 <div >
                   <div  id="carousel2-pic">
                   <div className="hot-box" ><p className="badge1-text">HOT</p></div>
                     <img src="images/products/p3.jpg"  className="secondSet-pic"   alt=""/>
                     <div class="carousel2-texts">
                        <a href="#" class="floral1">Floral Print Buttoned</a>
                        <div className="stars">
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-off.png" className="star"  alt=""/></div>
                        </div>
                        <p className="floral_amount45"><b>$450.00</b> <span class="floral2">$550.00</span></p>
                     </div>
                   </div>
                 </div>
                 <div >
                  <div  id="carousel2-pic">
                  <div className="sale-box" ><p className="badge1-text1"><b>SALE</b></p></div>
                     <img src="images/products/p7.jpg" className="secondSet-pic"  alt=""/>
                     <div class="carousel2-texts">
                        <a href="#" class="floral1">Floral Print Buttoned</a>
                        <div className="stars">
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png"  className="star" alt=""/></div>
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-off.png" className="star"  alt=""/></div>
                        </div>
                        <p className="floral_amount45"><b>$448.99</b> <span class="floral2">$480.00</span></p>
                     </div>
                  </div>
                </div>
                <div >
                  <div id="carousel2-pic">
                  <div className="sale-box" ><p className="badge1-text1"><b>SALE</b></p></div>
                     <img src="images/products/p8.jpg" className="secondSet-pic"  alt=""/>
                     <div class="carousel2-texts">
                        <a href="#" class="floral1">Floral Print Buttoned</a>
                        <div className="stars">
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-on.png" className="star"  alt=""/></div>
                        <div><img src="images/star-off.png" className="star"  alt=""/></div>
                        </div>
                        <p className="floral_amount45"><b>$449.99</b> <span class="floral2">$500.00</span></p>
                     </div>
                  </div>
                </div>
               </div>
             </div>
         </div>
      </div>
      <div className="home-design-pic">
      <div><img src="/images/banners/home-banner1.jpg" alt=""/></div>
      <div><img className="design-pic1" src="/images/banners/home-banner2.jpg" alt=""/></div>
      </div>
   </div>
    
    </>
    )
}

export default Second