import React from 'react';
import "./Drinks.css";
import Fade from 'react-reveal';
import { TfiArrowUp } from "react-icons/tfi"
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import drink from "./drink5.jpeg";
import { coca } from './Drinking';
import beer from "./dtequ.webp";
import beer2 from "./dtequ2.webp";
import beer3 from "./dtequ3.png";
import beer4 from "./dtequ4.png";
import beer5 from "./dtequ5.webp";
import beer6 from "./dtequ6.png";
import beer7 from "./drink8.webp";
import beer8 from "./drink12.jpg";
import { hDrink } from './Dhrink';
import beer9 from "./drink15.jpg";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";




const Drinks = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  function scrollUp() {
    setTimeout(()=>{
       window.scrollTo({
        top:0,
        behavior: "smooth"
       })
  },100) 
 }
 const [images1, setImages1] = useState([beer, beer2]);
 const [images2, setImages2] = useState([beer3, beer4]);
 const [images3, setImages3]  =  useState([beer5, beer6])
 const [selectedside, setSelectedSide] = useState(images1);
 const handleButton1Click = () => {
     setSelectedSide(images1);
   };
   
 const handleButton2Click = () => {
     setSelectedSide(images2);
   };
 
 const handleButton3Click = () => {
     setSelectedSide(images3);
   };








  return (
    <div>
<Fade bottom>
<h1 className="ck">TRY THE OUR DELICIOUS DRINKS</h1>
<img src={drink} alt="" className="dk1" />
</Fade>
<Fade bottom>
<h1 className="hm6">OUR DRINKS</h1>
</Fade>
<Fade bottom>
    <div className="h11">
<Slider {...settings}>
    {coca.map(item=>(
        <div className='h8'>
          <img className='dk3' src={item.image}/>
          <h1 className='h10'>{item.title}</h1>
          <h1 className='h12'>{item.price}</h1>
        </div> 
    ))}
</Slider>
</div>
</Fade>
<Fade bottom>
  <h1 className="dk5">OUR WHISKEYS</h1>
</Fade>
<Fade bottom>

<div className="dk16">
       <div className="dk13">
<img className='dk7' src={beer} alt="" />
<h1 className="dk14">PROPER WHISKEY $400</h1>
        </div>
       <div className="dk15">
<img className='dk8' src={beer2} alt="" />
<h1 className="dk17">TEREMANA TEQUILA $300</h1>
       </div>
 </div>




<div className="dk16">
       <div className="dk15">
<img className='dk9' src={beer3} alt="" />
<h1 className="dk17">PROPER WHISKEY $400</h1>
       </div>
       <div className="dk15">
<img className='dk10' src={beer4} alt="" />
<h1 className="dk17">TEREMANA TEQUILA $400</h1>
       </div>
</div>
<div className="dk16">
      <div className="dk15">
<img className='dk9' src={beer5} alt="" />
<h1 className="dk17">TEREMANA TEQUILA $350</h1>
      </div>
      <div className="dk15">
<img className='dk11' src={beer6} alt="" />
<h1 className="dk17">JACK DANIELS $200</h1>
      </div>
</div>
</Fade>
<Fade bottom>
  <h1 className="dk19">TRY THE NEW ZOA ENERGY DRINKS</h1>
<img src={beer7} alt="" className="dk18" />
</Fade>
<Fade bottom>
  <h1 className="dk20">HOT DRINKS</h1>
  <img src={beer8} alt="" className="dk21" />
</Fade>
<Fade bottom>
<div className="h11">
<Slider {...settings}>
    {hDrink.map(item=>(
        <div className='dk24'>
          <img className='dk22' src={item.image}/>
          <h1 className='h10'>{item.title}</h1>
          <h1 className='h12'>{item.price}</h1>
        </div> 
    ))}
</Slider>
</div>
</Fade>
<Fade bottom>
<h1 className="dk23">DISCOVER THE NEW DRINK "DELOLA"</h1> 
<img src={beer9} alt="" className="dk25" /> 
</Fade>
<Fade bottom>
  <h1 className="dk26">PLEASE GO ABOVE TO TRY<br/> AGAIN OUR DRINKS</h1>
</Fade>
<Fade bottom>
  <div className="dk27">
    <div className="dk28" onClick={scrollUp}>
      <div className="dk29"><TfiArrowUp/></div>
    </div>
  </div>
</Fade>
<div className="h26">
  <div className="h30">
      <div>    
  <h1 className="h27">OUR MEALS</h1>
     <div className="h29">
  <h2 className="h28">SALAD</h2>
  <h2 className="h28">HAMBURGER</h2>
  <h2 className="h28">PIZZA</h2>
  <h2 className="h28">PASTA</h2>
  <h2 className="h28">STEAK</h2>
  <h2 className="h28">OMLETTE</h2>
  <h2 className="h28">POTATO</h2>
  <h2 className="h28">CHICKEN</h2>
      </div>
</div>
<div>
<h1 className="h31">DRINKS</h1>
<h2 className="h32">COCA-COLA</h2>
<h2 className="h32">ORANGE JUICE</h2>
<h2 className="h32">DELOLA</h2>
<h2 className="h32">RED BULL</h2>
<h2 className="h32">ZOA</h2>
<h2 className="h32">TEREMANA TEQUILA</h2>
<h2 className="h32">PROPER WHISKEY</h2>
</div>
<div className='h33'>
<h2 className="h32">COCKTAIL</h2>
<h2 className="h32">LEMONADE</h2>
<h2 className="h32">TEA</h2>
<h2 className="h32">COFFEE</h2>
<h2 className="h32">WINE</h2>
<h2 className="h32">BEER</h2>
</div>

<div className="h35">
<h1 className="h34">SOCIAL MEDIA</h1>
     <div className="h38">
<div className='h37'><RiInstagramLine/></div>
<div className="h37"><RiTwitterLine/></div>
<div className="h37"><RiFacebookFill/></div>
       </div>

<h2 className="h39">Location: New York, Manhattan</h2>     
<h2 className="h39">Phone: +17775554433</h2>     
<h2 className="h39">Email: specrestaurant@gmail.com</h2>     
</div>
                 </div>
</div>



    </div>
  )
}

export default Drinks