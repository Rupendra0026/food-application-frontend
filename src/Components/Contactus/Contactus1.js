import React, { useEffect,useState ,useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contactus.css';

import contactus1 from '../../Assets/contactus1.PNG';

import contpnt1 from '../../Assets/contpnt1.PNG';
import contpnt2 from '../../Assets/contpnt2.PNG';
import contpnt3 from '../../Assets/contpnt3.PNG';
import contpnt4 from '../../Assets/contpnt4.PNG';

import orbitcontact from '../../Assets/contactorbit.PNG';


import Footer from '../Footer/Footer';

function Contactus(){
    const form = useRef();

    const sendEmail=async(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_nc5giw6', 'template_owp29bq', form.current, '8O1SWpkKNMpxcNwa-')
        .then((result) => {
            alert("sent successfully");
              // console.log(result.text);
          }, (error) => {
            alert("Failed to send");
              // console.log(error.text);
          });
        
    }
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    },[]);
    return(
        <>
        <div className='contactus-first-div'>
        <h1>Contact Us</h1>
        </div>
        
        <div className='contactus-second-div'>
            {/* information about us */}
            <div className='contactus-informaion'>
            <h1>Information About us</h1>
            <p>We are a leading company committed to providing top-notch 
            products and services to our valued customers. With a strong 
            focus on quality, innovation, and customer satisfaction, we 
            have built a reputation for excellence in the market. Our 
            dedicated team of professionals works tirelessly to exceed 
            expectations and deliver memorable experiences, making us a 
            preferred choice for all your needs.</p>
            <img src={contactus1} alt="contactus1" className='contactus-img-first-div'/>
            </div>
            
            {/*contact way in contact us */}
            <div className='contact-way-contact-us'>
                <h1>Contact Way</h1>
                <div>
                <div className='contactus-contactway-div-part'>
                    <img src={contpnt1} alt='contpnt1' className='contact-way-img'/>
                    <div className='contactway-para-parts'>
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: foodie@gmail.com</p>
                    </div>
                
                </div>

                <div className='contactus-contactway-div-part'>
                    <img src={contpnt2} alt="contactpnt2" className='contact-way-img'/>
                    <div className='contactway-para-parts'>
                    <p>Support Forum</p>
                    <p>For over 24hr</p>
                    </div>
                </div>
                
                <div className='contactus-contactway-div-part'>
                    <img src={contpnt3} alt="contpnt3" className='contact-way-img'/>
                    <div className='contactway-para-parts'>
                    <p>20 Margaret st, London</p>
                    <p>Great britain, 3NM98-LK</p>
                    </div>
                </div>

                <div className='contactus-contactway-div-part'>
                    <img src={contpnt4} alt="contpnt4" className='contact-way-img'/>
                    <div className='contactway-para-parts'>
                    <p>Free standard shipping</p>
                    <p>on all orders.</p>
                    </div>
                </div>
                </div>

            </div>

        </div>
        {/* get in touch starts here */}
        <div className='get-in-touch-div'>
        <div className='get-in-touch-form'>
            <h1>Get In Touch</h1>
            <p>Feel free to get in touch with us using the form 
            below! We would love to hear from you and address any
             inquiries or feedback you may have. Our team is 
             ready to assist you and ensure a prompt and personalized 
             response to all your needs.</p>



            <form ref={form} onSubmit={sendEmail}>
            <div className='get-in-touch-form-part1'>
            <input placeholder='Name*' type="text"  name='user_name'  />
            <input placeholder='Email*' type='email'  name="user_email" />
            </div>
            
            <input placeholder='Subject*' type='text'  name="user_subject" />
            <textarea placeholder='description' name="user_desc" />
            <button type='submit' value="send">Send</button>
            </form>
            
        </div>
        <img src={orbitcontact} alt="orbitcontact" className='contactus-oribit-img'/>
        </div>
        {/* get in touch ends here */}
        <Footer/>

        </>
    );
}

export default Contactus;