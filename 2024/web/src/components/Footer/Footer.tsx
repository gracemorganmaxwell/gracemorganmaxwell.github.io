import React, { useState } from 'react'

import gitHubIcon from 'web/public/images/5.svg'
import XIcon from 'web/public/images/6.svg'
import emailIcon from 'web/public/images/7.svg'
import linkinedIcon from 'web/public/images/8.svg'

import LineSeparatorComponent from '../LineSeparatorComponent/LineSeparatorComponent'

import PopupMessage from 'src/components/PopupMessageComponent/PopupMessageComponent'

const Footer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxDuo51ZgF08cXFe_m58fEBU-NeUlxnGpRUzo4KMdAYiKWJBKplm5Bi5i8qIE7s1MsWMQ/exec',
        {
          method: 'POST',
          body: new FormData(e.target),
        }
      )

      if (response.ok) {
        setMessage('Thank you for subscribing!')
        setName('')
        setEmail('')
        setShowPopup(true)
      } else {
        setMessage('Oops! Something went wrong. Please try again.')
        setShowPopup(true)
      }
    } catch (error) {
      setMessage('Oops! Something went wrong. Please try again.')
      setShowPopup(true)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <footer className="bg-gradient-to-t from-[#202020] to-[#303c50] px-4 py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Line Separator */}
        <LineSeparatorComponent />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact Buttons */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold text-blueGrey">Connect</h3>
            <div className="mt-2 flex justify-center space-x-4 lg:justify-start">
              <a
                href="mailto:gracemorganmaxwell@gmail.com"
                className="h-18 w-18 block rounded-lg bg-white p-2 shadow-lg transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="h-[40px] w-[40px] object-contain"
                />
              </a>
              <a
                href="https://github.com/gracemorganmaxwell"
                target="_blank"
                rel="noreferrer"
                className="h-18 w-18 block rounded-lg bg-white p-2 shadow-lg transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={gitHubIcon}
                  alt="Github Icon"
                  className="h-[40px] w-[40px] object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/grace-morgan-maxwell/"
                target="_blank"
                rel="noreferrer"
                className="h-18 w-18 block rounded-lg bg-white p-2 shadow-lg transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={linkinedIcon}
                  alt="Linkedin Icon"
                  className="h-[40px] w-[40px] object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/bluerose_nailsandbeauty/"
                target="_blank"
                rel="noreferrer"
                className="h-18 w-18 block rounded-lg bg-white p-2 shadow-lg transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={XIcon}
                  alt="Twitter Icon"
                  className="h-[40px] w-[40px] object-contain"
                />
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="text-center lg:text-left">
            <h3 className="mb-2 text-lg font-bold text-blueGrey">Location</h3>
            <p className="text-lg text-blueGrey">Christchurch, New Zealand</p>
            <p className="mt-2 text-lg text-greyViolet">By appointment only.</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11568.744884407015!2d172.5726796!3d-43.540159949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1722501766898!5m2!1sen!2snz"
                width="400"
                height="300"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <LineSeparatorComponent />

        {/* Subscribe Section */}
        <div className="mt-8 text-center">
          <h3 className="mb-2 text-lg font-bold text-blueGrey">Subscribe</h3>
          <p className="mb-4 text-lg text-blueGrey">
            Get access to subscriber exclusive deals.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center sm:flex-row sm:justify-center"
          >
            <input
              name="Name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white focus:outline-none sm:mb-0 sm:mr-2 sm:w-auto"
              required
            />
            <input
              name="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white focus:outline-none sm:mb-0 sm:mr-2 sm:w-auto"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-6 py-2 text-lg font-semibold text-darkBlue transition duration-200 hover:bg-greyViolet focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>

        {showPopup && <PopupMessage message={message} onClose={closePopup} />}

        <LineSeparatorComponent />

        {/* Business Information */}
        <div className="mt-8 text-center">
          <h2 className="mb-4 text-xl font-bold text-greyViolet">
            Blue Rose Nails and Beauty Therapy
          </h2>
          <p className="mb-4 text-lg text-blueGrey">Copyright 2024</p>
          <div className="my-6 mt-2 flex justify-center">
            <div className="w-[90vw] border-t border-white"></div>
          </div>
          <p className="text-lg text-blueGrey">Made with 💛 by Gracie</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
