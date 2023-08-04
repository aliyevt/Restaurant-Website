import React from 'react';
import "./Home.css";
import Fade from 'react-reveal';
import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi"
import { SldType } from './Salades';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DrinkType } from './Wdrink';
import { MealType } from './Allmeals';
import rest from "./restaurant.jpg";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";

const Home = () => {
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

      var seettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
     const scrollDown = () => {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 1.2,
          behavior: "smooth"
        });
      }, 200);
    }






  return (
    <div>
<div className="h1">
<Fade bottom>
<h1 className="h2">discover the tastly meals</h1>
<h1 className="h3">All our meals special for the opening<br/> are 20% off</h1>

<div className="h4">
    <div className="h5" onClick={scrollDown}>
        <div className="h6"><TfiArrowDown/></div>
    </div>
</div>
</Fade>
</div>
<Fade bottom>
    <h1 className="h7">Let's take a look at the<br/> our tasty salads</h1>
</Fade>
<Fade bottom>
    <div className="h11">
<Slider {...settings}>
    {SldType.map(item=>(
        <div className='h8'>
          <img className='h9' src={item.image}/>
          <h1 className='h10'>{item.title}</h1>
          <h1 className='h12'>{item.price}</h1>
        </div> 
    ))}
</Slider>
</div>
</Fade>
<Fade bottom>
<Fade bottom>
    <h1 className="h13">Let's take a look at the<br/> our tasty drinks</h1>
</Fade>

<Fade bottom>
    <div className="h11">
<Slider {...settings}>
    {DrinkType.map(item=>(
        <div className='h8'>
          <img className='h9' src={item.image}/>
          <h1 className='h10'>{item.title}</h1>
          <h1 className='h12'>{item.price}</h1>
        </div> 
    ))}
</Slider>
</div>
</Fade>

<Fade bottom>
  <h1 className='h13'>Let's take a look at the our <br/>delicious all foods</h1>
</Fade>

<Fade bottom>
    <div className="h11">
<Slider {...seettings}>
    {MealType.map(item=>(
        <div className='h8'>
          <img className='h14' src={item.image}/>
          <h1 className='h15'>{item.title}</h1>
        </div> 
    ))}
</Slider>
</div>
</Fade>
<Fade bottom>
  <h1 className="h16">OUR NEW LOCATION</h1>
  <img src={rest} alt="" className="h17" />
</Fade>
<Fade bottom>
       <div className="h21">
  <h1 className="h18">ADDRESS: LOS ANGELES, WEST BEVERLY HILLS</h1>
  <h1 className="h19">PHONE: +17775554433</h1>
  <h1 className="h20">EMAIL: specialrestaurant@gmail.com</h1>
      </div>
</Fade>
<Fade bottom>
  <h1 className="h22">please go above for again<br/> review our meals</h1>
  <div className="h23">
    <div className="h24" onClick={scrollUp}>
      <div className="h25"><TfiArrowUp/></div>
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

export default Home