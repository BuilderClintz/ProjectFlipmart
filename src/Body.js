import First from "./First"
import Second from "./Second"
import Third from "./Third"
import Fourth from "./Fourth"
import Fifth from "./Fifth"
import Sixth from "./Sixth"


function Body (){
    return(
        <>
        
        <div className="mainBody">
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            <Fifth/>
            <Sixth/>
            <div  id="brands">
                <div><a href="index.html"><img src="images/brands/brand1.png" className="brand1" alt=""/></a></div>
                <div><a href="index.html"><img src="images/brands/brand2.png" className="brand1"  alt=""/></a></div>
                <div><a href="index.html"><img src="images/brands/brand3.png" className="brand1"  alt=""/></a></div>
                <div><a href="index.html"><img src="images/brands/brand4.png" className="brand1"  alt=""/></a></div>
                <div><a href="index.html"><img src="images/brands/brand5.png" className="brand1"  alt=""/></a></div>
                <div><a href="index.html"><img src="images/brands/brand6.png" className="brand1"  alt=""/></a></div>
                <div><a href="index.html"><img src="images/brands/brand4.png" alt=""/></a></div>
      </div>
   </div>
        </>
    )
}
export default Body