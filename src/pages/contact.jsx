import React, { useState } from 'react';


const Contact = () => {
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
        <img src="/portrait.jpg" alt="Portrait of me" className="w-8 h-auto mb-[20px]" />
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae magna non elit viverra malesuada eu vel elit. Proin euismod mollis malesuada.</p>
        <a href="https://www.instagram.com/windsywinds/" target="_blank" rel="noopener noreferrer">@windsywinds on Instagram</a>
      </div>
      <div className="flex justify-center items-center pt-12 md:pt-0">

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
};

export default Contact;
