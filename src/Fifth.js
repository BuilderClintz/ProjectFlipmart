function Fifth(){
    return(
        <>
        
        <div id="sixth-section" >
        <div>
         <div className="second_carousel">
            <div>
             <h3 class="deals"> <b>NEWSLETTERS</b> </h3>
             <hr/>
             <p class="sixth-section-text">Sign Up For Our Newsletters!</p>
             <input type="text" className="sixth-section-inputbar" placeholder="Subscribe to our newsletter"/>
             <button class="btn bg-primary" id="sixth-sec-butt"><a href="start.html" class="sixth-section-button"> Subscribe</a></button>
            </div>
           </div>
          <div className="fifth_carousel">
            <div>
               <div className="member1">
                  <img src="images/testimonials/member1.png" id="testimonial1" alt="..."/>
               </div>
             <p className="sixth-section-text2" id="box_text_one">My experience with the Flipmart company has been very amazing, and still plan on using the app for the purchase for my groceries. </p>
             <p className="sixth-section-text3" id="box_text_two"><b>Iremide Adewale</b> <br/> CEO</p>
             <p className="sixth-section-text4" id="box_text_three">Zatek Company</p>
             <div id="sixth-boxes">
               <div className="sixth-section-boxes1" id="boxone" onClick={"firstImage()"}></div>
               <div className="sixth-section-boxes" id="boxtwo" onClick={"secondImage()"}></div>
               <div className="sixth-section-boxes" id="boxthree" onClick={"thirdImage()"}></div>
             </div>

            </div>
        </div>
      </div>
        <div class="random_carousel" className="random-set" >
         <div>
            <div className="heading7" >
               <h3 class="deals"> <b>LATEST FORM BLOG </b></h3>
            </div>
         </div>
         <hr class="fourth_carousel_line"/>
         <div >
            <div className="mainCardContainer">
               <div className="card1">
                 <div className="card" id="card1">
                   <img src="images/blog-post/blog_big_01.jpg" className="card-pic1" alt="..."/>
                   <div >
                     <h5 id="card1-title"><b>Reiciendis tempora Suscipit quolamener</b> </h5>
                     <p class="card1-text">By Iremide Adewale: 18th March 2023</p>
                     <p class="card1-text1">Consectetur adipisicing elit. Commodi doloremque facere voluptatem doloribus perferendis minus consequatur Kofun</p>
                     <button  id="sixth-sec-butt1"><a href="#" class="sixth-section-button">Read more</a></button>
                   </div>
                 </div>
               </div>
               <div className="card2">
                 <div className="card" id="card1">
                   <img src="images/blog-post/blog_big_02.jpg" className="card-pic1" alt="..."/>
                   <div class="card-body">
                     <h5 id="card1-title"><b>Reiciendis tempora Suscipit quolamener</b> </h5>
                     <p class="card1-text">By Nifemi Idowu : 2nd February 2023</p>
                     <p class="card1-text1">Consectetur adipisicing elit. Commodi doloremque facere voluptatem doloribus perferendis minus consequatur Tamacti jun </p>
                     <button id="sixth-sec-butt1"><a href="#" class="sixth-section-button">Read more</a></button>
                   </div>
                 </div>
               </div>              
             </div>
         </div>
         </div>
   </div>
        </>
    )
}
export default Fifth