import React from 'react'
import { useState } from 'react'
import emailjs from "@emailjs/browser"
import Alert from '../features/Alert'
import { Particles } from '../features/Particles'
const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });
    const [isLoading, setIsLoading] = useState(false);
    const[showAlert, setShowAlert] = useState(false);
    const[alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");
    const handleChange=(e)=> {
        setFormData({...formData, [e.target.name]:e.target.value})
    };
    const handleSubmit= async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            await emailjs.send("service_ghi86hr", "template_4d20g4r", {
                from_name: formData.name,
                to_name: "Jay V",
                from_email: formData.email,
                to_email: "vellankijay@gmail.com",
                message:formData.message,
            },
            "wLU6QRRO4gC4woyBR"
            );
            setIsLoading(false);
            // alert("Success!");
            setAlertType("Success");
            setAlertMessage("Your message has been sent!")
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
              }, 5000);
            setFormData({name:"", email:"", message:""});

        } catch (error) {
            setIsLoading(false);
            // console.log(error)
            setAlertType("danger");
            setAlertMessage("Your message has not been sent!")
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
              }, 5000);
            
        }
        //service_ghi86hr
        //template_4d20g4r
    };
  return (
    <div data-aos="zoom-in" id="contactMe" className='relative flex items-center min-h-screen mt-20 md:mt-30'>
        <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        {showAlert && <Alert type={alertType} text={alertMessage}/>}
        <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-black shadow-[0_0_20px_5px_#ff8000] transition-all duration-300'>
            <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <h2 className='text-heading'>Let's Connect</h2>
                <p className='font-normal text-neutral-400'>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Use the form below to send a message and I'll respond shortly.
                </p>
            </div>
        
        <form className='w-full' onSubmit={handleSubmit}>
            <div className='mb-5'>
            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70;">
              Full Name
            </label>
            <input
            id="name"
            name="name"
            type="text"
            className='w-full min-h-10 rounded-md px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-700 border border-white/10 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20'
            placeholder='Your Name'
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
            </div>

            <div className='mb-5'>
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70;">
              Your Email
            </label>
            <input
            id="email"
            name="email"
            type="email"
            className='w-full min-h-10 rounded-md px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-700 border border-white/10 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20'
            placeholder='vellankijay@gmail.com'
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
            </div>
            <div className='mb-5'>
            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70;">
              Message
            </label>
            <textarea
            id="message"
            name="message"
            type="text"
            rows="4"
            className='w-full min-h-10 rounded-md px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-700 border border-white/10 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20'
            placeholder='Share your thoughts...'
            autoComplete="message"
            value={formData.message}
            onChange={handleChange}
            required
            />
            </div>
            <button
            className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-800'
            type="submit"
            >
                {!isLoading?"Send":"Sending..."}
            </button>
        </form>
        </div>

    </div>
  )
}

export default Contact
