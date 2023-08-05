import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import portrait from '../assets/portrait.png'


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError) {
      alert('Please fix the errors in the form before submitting.');
    } else {
      // send form data to server or perform other actions
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="flex flex-row flex-wrap justify-evenly">
        <div className="flex flex-col items-center w-[50%]">

        <Image src={portrait} alt="Portrait of me" className="w-[auto] max-h-[200px] pt-5 md:pt-1 pointer-events-none" />

        <h2 className="pt-2 text-xl font-semibold">About Me</h2>
        <p className="pt-1 text-center">Hi! I'm Sam. I'm a photographer, web designer, and snowboard coach. I've always been passionate about photography, but in 2016 I took a big leap and invested in some professional gear so that
          the images of the places and moments I experienced could be stored in better quality. Since then, I went on to purchase a drone and even more professional grade equipment to turn my passion into something more. I hope you enjoy the images I've produced, please feel free to get in touch using my contact form, or follow me on Instagram, <a className="underline" href="https://www.instagram.com/windsywinds/" target="_blank" rel="noopener noreferrer">@windsywinds.</a>
        </p>
        <p className="pt-2 pb-9">You can also check out my web portfolio, <a className="underline" href="https://windsywinds.github.io">here.</a></p>
        
      </div>
      <div className="flex justify-center items-center md:pl-3">

                <form 
                    action="https://getform.io/f/e2059994-fbac-4aba-b565-63d41527e0a8"
                    method="POST"
                    className="flex flex-col w-full "
                    >
                       
                    <input 
                        type="type"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none w-96"
                        required
                    ></input>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Your@Email.com"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        required
                    ></input>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="10"
                        className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"                        
                        ></textarea>
                        <button 
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-sky-400 to-blue-500 drop-shadow-md hover:stroke-white"
                        required
                        >Send!</button>
                </form>

            </div>
      
    </div>
  );
}
