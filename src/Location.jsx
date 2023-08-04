import React from 'react';
import "./Location.css";
import Fade from 'react-reveal';
import { TfiArrowUp } from "react-icons/tfi"
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import lc from "./lc.jpeg";
import { RiInstagramLine } from "react-icons/ri";
import {RiTwitterLine} from "react-icons/ri";
import {RiFacebookFill} from "react-icons/ri";

const Location = () => {
const [lc1, setLc1]=useState(true);
const [lc2, setLc2]=useState(false);
const [lc3, setLc3]=useState(false);
const [lc4, setLc4]=useState(false);
const [lc5, setLc5]=useState(false);
const cl1ick=()=>{
  if (!lc1) {
    setLc1(true);
    setLc2("");
    setLc3("");
    setLc4("");
    setLc5("");
    scrollDown();
  }
}
const cl2ick=()=>{
  if (!lc2) {
    setLc2(true);
    setLc1("");
    setLc3("");
    setLc4("");
    setLc5("");
    scrollDown();
  }
}
const cl3ick=()=>{
  if (!lc3) {
    setLc3(true);
    setLc1("");
    setLc2("");
    setLc4("");
    setLc5("");
    scrollDown();
  }
}
const cl4ick=()=>{
  if (!lc4) {
    setLc4(true);
    setLc1("");
    setLc2("");
    setLc3("");
    setLc5("");
    scrollDown();
  }
}
const cl5ick=()=>{
  if (!lc5) {
    setLc5(true);
    setLc1("");
    setLc2("");
    setLc3("");
    setLc4("");
    scrollDown();
  }
}
const scrollDown = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 1.220,
      behavior: "smooth"
    });
  }, 200);
}




  return (
    <div>
<Fade bottom>
  <h1 className="lc">FIND THE OUR LOCATIONS</h1>
  <img src={lc} alt="" className="lc1" />
</Fade>
<Fade bottom>
  <div className="lc2">
    <button className="lc3" onClick={cl1ick}>NEW YORK</button>
    <button className="lc3" onClick={cl2ick}>LAS VEGAS</button>
    <button className="lc3" onClick={cl3ick}>LONDON</button>
    <button className="lc3" onClick={cl4ick}>FRANCE</button>
    <button className="lc3" onClick={cl5ick}>GERMANY</button>
  </div>
</Fade>
{
  lc1 && <div>
    <h1 className="lc4">NEW YORK</h1>
    <div className="lc5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48343.952678865484!2d-73.98165195136724!3d40.7730857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f6f5b0d0f0f%3A0x474263db3a1427f1!2sVictory%20Sweet%20Shop%2FVictory%20Garden%20Cafe!5e0!3m2!1sen!2saz!4v1691056328687!5m2!1sen!2saz" width="93.4%" height="397" frameBorder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  <h1 className="lc6">Address: 21-69 Steinway St, Queens, NY 11105, United States</h1>
  <h1 className="lc7">Phone: +17026987990</h1>
  </div>
}
{
  lc2 && <div>
     <h1 className="lc4">LAS VEGAS</h1>
     <div className="lc5">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51539.74174524773!2d-115.25719086390203!3d36.16086344339339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c37597507bb5%3A0xb52ef0e92b55e80d!2sCarson%20Kitchen!5e0!3m2!1sen!2saz!4v1691056697053!5m2!1sen!2saz" width="93.4%" height="397" frameBorder="0"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<h1 className="lc6">Address: 124 S 6th St #100, Las Vegas, NV 89101, United States</h1>
<h1 className="lc7">Phone: +17024739523</h1>
  </div>
}
{
  lc3 && <div>
       <h1 className="lc4">LONDON</h1>
       <div className="lc5">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39723.72735231171!2d-0.2419935513672481!3d51.518115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab598773367%3A0xa7aca0158085ae4e!2sLord%20Wargrave!5e0!3m2!1sen!2saz!4v1691056415558!5m2!1sen!2saz" width="93.4%" height="397" frameBorder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
       </div>
<h1 className="lc6">Address: 40-42 Brendon St, London W1H 5HE, United Kingdom</h1>
<h1 className="lc7">Phone: +442077230559</h1>
  </div>
}
{
  lc4 && <div>
        <h1 className="lc4">FRANCE</h1>
<div className="lc5">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758608.5959967636!2d-0.36997502462449583!3d47.52976426458119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fe1f2e9fe97%3A0xb320f5fd1146968f!2sJules%20Verne!5e0!3m2!1sen!2saz!4v1691056545685!5m2!1sen!2saz" width="93.4%" height="397" frameBorder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<h1 className="lc6">Address: Av. Gustave Eiffel, 75007 Paris, France</h1>
<h1 className="lc7">Phone: +33183773434</h1>
  </div>
}
{
  lc5 && <div>
         <h1 className="lc4">GERMANY</h1>
         <div className="lc5">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11143012.851106534!2d-8.292080579881171!3d47.01153339313308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75e5cbc8ff45%3A0xff72ff3b15a14662!2sSteinheil%2016!5e0!3m2!1sen!2saz!4v1691056615941!5m2!1sen!2saz" width="93.4%" height="397" frameBorder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
<h1 className="lc6">Address: Steinheilstraße 16, 80333 München, Germany</h1>
<h1 className="lc7">Phone: +4989527488</h1>
  </div>
}
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

export default Location