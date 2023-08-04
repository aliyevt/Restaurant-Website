import React from 'react';
import "./Cakes.css";
import Fade from 'react-reveal';
import { TfiArrowUp } from "react-icons/tfi"
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cake from "./cake4.jpg";
import { candy } from './Cook';
import { cookI } from './CookIce';
import { Dessert } from './CakeD';
import cake2 from "./cake18.jpg";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";











const Cakes = () => {
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








  return (
    <div>
<Fade bottom>
  <h1 className="ck">try our delicious cakes<br/> and chocolate</h1>
  <img src={cake} alt="" className="ck1" />
</Fade>
<Fade bottom>
<h1 className="hm6">OUR MENU</h1>
</Fade>
<Fade bottom>
<Fade bottom>
    <div className="h11">
<Slider {...settings}>
    {candy.map(item=>(
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
  <h1 className="ck4">OUR ICE CREAM MENU</h1>
</Fade>
<Fade bottom>
    <div className="h11">
<Slider {...settings}>
    {cookI.map(item=>(
        <div className='h8'>
          <img className='ck5' src={item.image}/>
          <h1 className='h10'>{item.title}</h1>
          <h1 className='h12'>{item.price}</h1>
        </div> 
    ))}
</Slider>
</div>
</Fade>
<h1 className="ck4">OUR DESSERT MENU</h1>
<Fade bottom>
    <div className="h11">
<Slider {...settings}>
    {Dessert.map(item=>(
        <div className='h8'>
          <img className='ck7' src={item.image}/>
          <h1 className='h10'>{item.title}</h1>
          <h1 className='h12'>{item.price}</h1>
        </div> 
    ))}
</Slider>
</div>
</Fade>
<Fade bottom>
  <h1 className="ck8">TRY THE OUR NEW ICE CREAM</h1>
</Fade>
<img src={cake2} alt="" className="ck9" />
<Fade bottom>
  <h1 className="ml12">PLEASE GO ABOVE TO TRY AGAIN<br/> OUR ICE CREAM</h1>
<div className="ck11">
  <div className="ck12" onClick={scrollUp}>
    <div className="ck13"><TfiArrowUp/></div>
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

export default Cakes