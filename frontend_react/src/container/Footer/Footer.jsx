import React , {useState} from 'react'
import { images } from '../../constants'
import { AppWrap , MotionWrap } from '../../warpper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '' , message: ''})
  const [isformSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name , email , message } = formData;

  const handleChangeInput = (e) => {
    const {name , value } = e.target

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact', 
      name:name, 
      email: email,
      message: message,
  
      
    }
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
    <h2 className="head-text">Take a coffe & chat with me</h2>
    <div className="app__footer-cards">
    <div className="app__footer-card">
     <img src={images.email} alt="email"/>
     <a href="mailto:Anasyousif182@gmail.com" className="p-text">Anasyousif182@gmail.com</a>
    </div>
    <div className="app__footer-card">
     <img src={images.mobile} alt="mobile"/>
     <a href="tel: + 1 (123) 465-789" className="p-text">+1 (571)397-8404</a>
    </div>
    </div>

    <div className="app__footer-form app__flex">
    <div className="app__flex">
     <input  className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}/>
    </div>
    <div className="app__flex">
     <input  className="p-text" type="email" placeholder="Your Email" name="name" value={email} onChange={handleChangeInput}/>
    </div>
    <div>
      <textarea 
       className="p-text"
       placeholder="Your Message"
       value={message}
       name="message"
       onChange={handleChangeInput}
      />
    </div>
    <button type="button" className="p-text" onClick={handleSubmit}>{ loading ? 'Sending' : 'Send Message'}</button>
    </div>

    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'),'contact', 'app__whitebg' )