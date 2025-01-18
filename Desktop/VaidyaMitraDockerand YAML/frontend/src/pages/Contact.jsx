import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="Contact our office"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <address className="not-italic text-gray-500">
            VP Software <br />
            Bengaluru
          </address>
          <p className="text-gray-500">
            Tel: 080-23123 <br />
            Email: <a href="mailto:vpsoftwarelimited@gmail.com">vpsoftwarelimited@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

