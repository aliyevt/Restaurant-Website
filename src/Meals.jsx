import React from 'react';
import "./Meals.css";
import meal from "./meals2.webp";
import Fade from 'react-reveal';
import { TfiArrowUp } from "react-icons/tfi"
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { food } from './Mealas';
import meal2 from "./meals11.jpg";
import meal3 from "./meals12.jpg";
import meal4 from "./meals13.jpg";
import { fish } from './Mfish';
import meal5 from "./meals18.jpg";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";
const Meals = () => {
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
const [image, setImage]=useState(meal2);
const click=()=>{
  setImage(meal2);
}
const click2=()=>{
  setImage(meal3);
}
const click3=()=>{
  setImage(meal4);
}
function scrollUp() {
  setTimeout(()=>{
     window.scrollTo({
      top:0,
      behavior: "smooth"
     })
},100) 
}



  return (
    <div>
      <Fade bottom>
<h1 className="ml">our delicious meals</h1>
</Fade>
<Fade bottom>
<img src={meal} alt="" className="ml2" />
</Fade>
<Fade bottom>
<Fade bottom>
  <h1 className="ml3">OUR MENU</h1>
</Fade>
<Fade bottom>
    <div className="h11">
<Slider {...settings}>
    {food.map(item=>(
        <div className='h8'>
          <img className='hm7' src={item.image}/>
          <h1 className='h10'>{item.title}</h1>
          <h1 className='h12'>{item.price}</h1>
        </div> 
    ))}
</Slider>
</div>
</Fade>
<Fade bottom>
<div className="ml5">
  <button className="ml4" onClick={click}>BREAKFAST</button>
  <button className="ml4" onClick={click2}>AFTERNOON</button>
  <button className="ml4" onClick={click3}>DINNER</button>
</div>  
{image && <div className='ml8'><img className='ml7' src={image} alt=''/></div>}
</Fade>
<Fade bottom>
  <h1 className="ml9">OUR FISH MEALS</h1>
</Fade>
<Fade bottom>
    <div className="h11">
<Slider {...settings}>
    {fish.map(item=>(
        <div className='h8'>
          <img className='hm7' src={item.image}/>
          <h1 className='h10'>{item.title}</h1>
          <h1 className='h12'>{item.price}</h1>
        </div> 
    ))}
</Slider>
</div>
</Fade>
<Fade bottom>
  <h1 className="ml11">YOU SHOULD TRY THIS SUSHI</h1>
  <img src={meal5} alt="" className="ml10" />
</Fade>
<Fade bottom>
  <h1 className="ml12">PLEASE GO ABOVE TO TRY<br/> AGAIN OUR MEALS</h1>
  <div className="ml13">
    <div className="ml14" onClick={scrollUp}>
      <div className="ml15"><TfiArrowUp/></div>
    </div>
  </div>
  </Fade>
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

export default Meals