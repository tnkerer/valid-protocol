import { NextPage } from 'next';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!process.env.SERVICE_ID || !process.env.TEMPLATE_ID || !process.env.PUBLIC_KEY) {
      alert('One or more EmailJS environment variables are missing');
      return;
    }

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      company: formData.companyName,
      message: formData.message
    }

    emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      templateParams,
      process.env.PUBLIC_KEY
    )
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        alert('Email sent successfully!');
        window.location.reload();
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Error sending email, please try again later. If the problem persists, please contact us at contact@xdcs.io.');
      })
      .catch((error) => {
        console.error('Error in emailjs.send:', error);
        alert('Error sending email, please try again later. If the problem persists, please contact us at contact@xdcs.io.');
      });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light">
      {/* Same background circles as on main page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <Navbar activeSection="" />

      <main className="pt-40 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Align columns at the top */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT COLUMN: Aligned to top */}
            <div>
              <h1 className="text-8xl font-normal mb-4 text-[#0052FF]">Contact Us</h1>
              <p className="text-lg text-gray-600 font-light mb-8">
                Email or complete the form to contact us.
                Whether you have inquiries or are ready to collaborate,
                our team is here to assist you.
              </p>
            </div>

            {/* RIGHT COLUMN: "Get in Touch" form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-normal mb-6">Get in Touch</h2>
              <p className="text-gray-600 font-light mb-6">
                Reach out, and we&lsquo;ll be happy to assist you
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: First Name, Last Name */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm text-gray-500 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Enter First Name"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="lastName"
                      className="block text-sm text-gray-500 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Company Name (optional) */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm text-gray-500 mb-1"
                  >
                    Company Name (optional)
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter Company Name"
                  />
                </div>

                {/* Row 3: Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-500 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter Email"
                    required
                  />
                </div>

                {/* Row 4: Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-gray-500 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter Phone Number"
                  />
                </div>

                {/* Row 5: Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-500 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter Message"
                  />
                </div>

                {/* Submit */}
                <div>
                  <Button type="submit" variant="blue" className="w-full justify-center">
                    Submit
                  </Button>
                </div>
              </form>
              <p className="text-sm text-gray-400 font-light mt-4 text-center">
                By contacting us, you agree to our{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  <Link href="policy">
                  Privacy Policy
                  </Link>
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
