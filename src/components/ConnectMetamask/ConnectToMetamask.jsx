import React, { useEffect, useState, useRef } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

import axios from 'axios';
import * as d3 from 'd3';

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');



  return (
    <div className="container" >
      <div className="jumbotron custom-jumbotron">
      <h1 className="display-5 text-center">
  Donald Trump Beach Club
  <hr className="my-4" />
      <button
        onClick={connectToMetamask}
        className="btn btn-primary d-flex align-items-center"
        style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
      >
        Mint
      </button>
        </h1>

        <h1 className="mt-5">About Donald Trump Beach Club</h1>

        <p>Welcome to the epitome of luxury and elegance at the Donald Trump Beach Club. Nestled along the pristine shores of [Location], our beach club offers an unparalleled experience that combines world-class service, stunning natural beauty, and the unmistakable touch of excellence associated with the name Donald J. Trump.</p>

        <h2>Our Vision</h2>

        <p>At the Donald Trump Beach Club, our vision is to provide a haven of opulence and relaxation, where every moment is steeped in sophistication. Our founder, Donald J. Trump, has long been a symbol of success, and he has extended that vision to create a beachfront paradise that reflects his commitment to excellence, innovation, and service.</p>

        <h2>Unmatched Luxury</h2>

        <p>We take pride in offering an exclusive, private beachfront experience like no other. Our property boasts a breathtaking coastline, where the golden sands meet the crystal-clear waters of the [Ocean/Sea]. Guests can indulge in luxurious amenities, from world-class dining to upscale accommodations, all designed to elevate your stay to a new level of comfort and style.</p>

        <h2>World-Class Service</h2>

        <p>At the heart of our club is an unwavering dedication to service. Our staff is committed to exceeding your expectations, ensuring that your every need is met with a smile and a genuine desire to make your experience unforgettable. From our concierge services to our attentive waitstaff, you'll find the service at Donald Trump Beach Club to be second to none.</p>

        <h2>Exquisite Dining</h2>

        <p>Indulge your taste buds at our exquisite dining establishments, each offering a culinary journey that showcases the finest ingredients and flavors. Our skilled chefs create dishes that are as extraordinary as the setting itself. From sunrise breakfasts to romantic dinners by the sea, our dining experiences are designed to delight and impress.</p>

        <h2>Events and Celebrations</h2>

        <p>Donald Trump Beach Club is not just a destination; it's a place for memorable moments and celebrations. We cater to a variety of events, from weddings and corporate gatherings to intimate family getaways. Our event planning team will work with you to ensure your special occasion is nothing short of perfection.</p>

        <h2>Come Join Us</h2>

        <p>Experience the unparalleled luxury, elegance, and service that make the Donald Trump Beach Club a world-class destination. Whether you seek a tranquil escape, a stunning wedding venue, or a unique setting for your next event, we invite you to join us in creating cherished memories on the shores of [Location].</p>

        <h2>Contact Us</h2>

        <p>To learn more about the Donald Trump Beach Club or to make a reservation, please contact us at [Contact Information].</p>

        <p>Discover your slice of paradise with us at the Donald Trump Beach Club. We look forward to welcoming you with open arms and ensuring that your time with us is truly exceptional.</p>

        <img src="images/dtbc.club.gif" width="100%" />

        <h2 className="mt-5">Exclusive NFT Membership</h2>

        <p>As a testament to our commitment to innovation and exclusivity, the Donald Trump Beach Club offers a cutting-edge NFT (Non-Fungible Token) collection that serves as a unique identifier for our esteemed members. These digital tokens grant you access to a world of privileges and experiences that are second to none.</p>

        <p>Each NFT in our collection represents an exclusive membership tier, and owning one signifies your status as a distinguished member of our community. Your NFT is your digital key to unlocking a realm of exceptional benefits.</p>

        <h3>Benefits of NFT Membership:</h3>
        <ul>
            <li>Priority access to our world-class facilities and services.</li>
            <li>Invitations to members-only events and gatherings.</li>
            <li>Discounts and special offers at our fine dining establishments and luxury accommodations.</li>
            <li>Personalized concierge service for an unparalleled experience.</li>
            <li>Access to our private beachfront areas and facilities.</li>
        </ul>

        <p>Each NFT is a unique piece of digital art, reflecting the elegance and prestige of the Donald Trump Beach Club. They are securely stored in your digital wallet, ensuring your exclusive access to our beach club and its amenities.</p>

        <p>For more information on our NFT membership collection and how to acquire your digital membership token, please contact our membership services team at [Membership Contact Information]. Become part of an elite community that celebrates luxury, exclusivity, and the finest experiences.</p>


        <img src="images/dtbc.gif" width="100%" />







        <hr className="my-2" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
