import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
  <footer className="bg-gradient-to-b from-[#3A0202] via-[#8B1E24] to-[#210033] text-[#FDE68A] py-6 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

    {/* About Section */}
    <div>
      <h3 className="text-2xl font-bold text-[#FFD95A]">Maa Pitambara</h3>
      <p className="mt-4 leading-relaxed">
        Maa Pitambara Mandir, Nalkheda is a sacred seat of divine Shakti. Guided by
        authentic Vedic rituals, thousands visit seeking blessings for protection,
        prosperity, and spiritual awakening.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-5 mt-6 text-[#FDE68A]">
        <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://www.facebook.com/profile.php?id=61584669398940"><i className="fab fa-facebook text-2xl"></i></a>
        <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://www.instagram.com/pitabmera/"><i className="fab fa-instagram text-2xl"></i></a>
        <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://x.com/Maa_Pitambara03"><i className="fab fa-twitter text-2xl"></i></a>
        <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://www.youtube.com/channel/UCJM7Vtl9N_ynJQTO2GjjBbw" ><i className="fab fa-youtube text-2xl"></i></a>
        <a className="hover:text-[#FFEEA9] cursor-pointer" target="_blank" href="https://wa.me/918871101043" ><i className="fab fa-whatsapp text-2xl"></i></a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold text-[#FFD95A]">Quick Links</h3>
      <ul className="mt-4 space-y-2">
        <li><a className="hover:text-[#FFEEA9]">Home</a></li>
        <li><a className="hover:text-[#FFEEA9]">About</a></li>
        <li><a className="hover:text-[#FFEEA9]">Pujan</a></li>
        <li><a className="hover:text-[#FFEEA9]">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-xl font-semibold text-[#FFD95A]">Our Services</h3>
      <ul className="mt-4 space-y-2">
        <li className="hover:text-[#FFEEA9] cursor-pointer">Puja Booking</li>
        <li className="hover:text-[#FFEEA9] cursor-pointer">Vastu Shastra</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-xl font-semibold text-[#FFD95A]">Contact Us</h3>
      <ul className="mt-4 space-y-3">
        <li className="flex items-center space-x-3">
          <span>📞</span>
          <a href="tel:+918871101043" className="hover:text-[#FFEEA9]">+91 887 110 1043</a>
        </li>

        <li className="flex items-center space-x-3">
          <span>📧</span>
          <a href="mailto:info.maapitamera@gmail.com" className="hover:text-[#FFEEA9]">
            info.maapitamera@gmail.com
          </a>
        </li>

        <li className="flex items-center space-x-3">
          <span>📍</span>
          <p>
            Nalkheda, District Agar Malwa,<br />
            Madhya Pradesh – 465441, India
          </p>
        </li>
      </ul>
    </div>
  </div>

  <div className="text-center text-[#FFD95A]  border-t border-yellow-700/20">
    © {new Date().getFullYear()} Maa Pitambara Mandir — All Rights Reserved.
  </div>
</footer>
  );
}
