import React from 'react';
import "./Hamburger.css";
import Fade from 'react-reveal';
import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi"
import { BsFillCheckCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { burger } from './Hamb';
import hamb from "./hamb9.jpg";
import hamb2 from "./hamb10.jpg";
import { hburger } from './hamburg';
import { useState } from 'react';
import hamb3 from "./hamb11.png";
import hamb4 from "./hamb12.png";
import hamb5 from "./hamb13.png";
import hamb6 from "./hamb14.png";
import hamb7 from "./hamb15.png";
import hamb8 from "./hamb16.png";
import hamb9 from "./hamb17.png";
import hamb10 from "./hamb18.png";
import hamb11 from "./hamb19.png";
import hamb12 from "./hamb20.png";
import hamb13 from "./hamb21.jpg";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";


const Hamburger = () => {
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
      top: window.innerHeight * 1.1,
      behavior: "smooth"
    });
  }, 200);
}
const scroll2Down = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 3.17,
      behavior: "smooth"
    });
  }, 200);
}




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
  var setttings = {
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


const [ing, setIng]=useState(false);
const hIng=()=>{
  setIng(!ing);
  scroll2Down()
}
const [text, setText] = useState('ORDER NOW');
const handleClick = () => {
  setText('ORDERED');
  handle2Click()
  handle3Click()
};
const [color, setColor] = useState('black');
const handle2Click = () => {
   setColor("rgb(97, 5, 87)")
};
const [showIcon, setShowIcon] = useState(false);
const handle3Click = () => {
  setShowIcon(true);
};




  return (
    <div>
      <div className="hm1">
      <Fade bottom>
<h1 className="hm2">try the delicious hamburgers</h1>
<Fade bottom>
<h1 className="hm3">
  <h1 className="hm4" onClick={scrollDown}>
    <h1 className="hm5"><TfiArrowDown/></h1>
  </h1>
</h1>
</Fade>
      </Fade>
    </div>
<Fade bottom>
<h1 className="hm6">OUR MENU</h1>
</Fade>
<Fade bottom>
    <div className="h11">
<Slider {...settings}>
    {burger.map(item=>(
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
  <h1 className="hm8">DISCOVER THE OUR NEW HAMBURGER</h1>
  <Fade bottom>
    <div className="h11">
<Slider {...setttings}>
    {hburger.map(item=>(
        <div className='h8'>
          <img className='hm10' src={item.image}/>
        </div> 
    ))}
</Slider>
</div>
  </Fade>
</Fade>
     <Fade bottom>
<div className="hm13">
<button className='hm12' onClick={hIng}>ingredients</button>
</div>
     </Fade>
{ing && 
<div className='hm14'>
<div className='hm15'>
  <h1 className="hm16">INGREDIENTS</h1>
  <div className='hm23'>
<div className='hm18'>
  <img src={hamb3} alt="" className="hm17" />
  <img src={hamb4} alt="" className="hm19" />
  <img src={hamb5} alt="" className="hm20" />
  <img src={hamb6} alt="" className="hm21" />
  <img src={hamb7} alt="" className="hm22" />
    </div>
    <div className='hm25'>
<img src={hamb8} alt="" className="hm24" />
<img src={hamb9} alt="" className="hm24" />
<img src={hamb10} alt="" className="hm26" />
<img src={hamb11} alt="" className="hm26" />
<img src={hamb12} alt="" className="hm26" />
         </div>
      </div>
  </div>
</div>}

<Fade bottom>
  <h1 className="hm27">let's take a look at the<br/> our special menu</h1>
</Fade>
<Fade bottom>
  <div className="hm29">
  <img src={hamb13} alt="" className="hm28" />
     <div className='hm32'>
  <h1 className='hm30'>750GR STEAK</h1>
  <h1 className='hm30'>MORE BIG BREAD</h1>
  <h1 className='hm30'>MORE CHEESE</h1>
  <h1 className='hm30'>MORE PEPPER</h1>
  <h1 className='hm30'>MORE POTATO</h1>
  <h1 className='hm30'>TOTAL HAMBURGER WEIGHT: 1250GR</h1>
  <h1 className='hm31'>JUST $37</h1>
<button className="hm33" onClick={handleClick} style={{ backgroundColor: color }}>
{text}{showIcon && <span className='hm34'><BsFillCheckCircleFill /></span>}</button>
      </div>
  </div>
</Fade>
<Fade bottom>
<h1 className="hm35">please go above to try again<br/> our hamburgers</h1>
</Fade>
<Fade bottom>
<h1 className="hm36">
  <h1 className="hm37" onClick={scrollUp}>
    <h1 className="hm38"><TfiArrowUp/></h1>
  </h1>
</h1>
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

export default Hamburger