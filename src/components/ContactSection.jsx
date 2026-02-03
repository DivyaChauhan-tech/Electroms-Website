import React from 'react';
import { useState } from "react";
import footerBg from "../assets/footer.png";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    country: "",
    category: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    if (name === "contact") {
      value = value.replace(/[^0-9]/g, "");
      if (value.length > 10) {
        value = value.slice(0, 10);
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be exactly 10 digits";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.contact)) {
      newErrors.contact = "First digit must be 6, 7, 8, or 9";
    } else if (/^[0-9]\1{9}$/.test(formData.contact)) {
      newErrors.contact = "Contact number cannot have all same digits";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validate()) return;
  
    setLoading(true);
    setSuccessMessage("");
  
    try {
      const response = await fetch("https://formspree.io/f/xpqqldvl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSuccessMessage("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          country: "",
          category: "",
          message: "",
        });
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setErrors({ submit: result.error || "Failed to send message" });
        setTimeout(() => setErrors({}), 5000);
      }
    } catch (error) {
      setErrors({ submit: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section 
      className="w-full bg-[#051A53] py-28 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="w-full max-w-sm bg-white/10 backdrop-blur-xs p-4 sm:p-7 shadow-lg">

          <h3 className="text-white text-xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-left">
            Get in Touch
          </h3>

          {successMessage && (
            <div className="bg-green-500 text-white p-3 rounded-sm mb-4">
              {successMessage}
            </div>
          )}

          {errors.submit && (
            <div className="bg-red-500 text-white p-3 rounded-sm mb-4">
              {errors.submit}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-sm outline-none bg-white placeholder-gray-400 text-black text-sm sm:text-base"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-sm outline-none bg-white placeholder-gray-400 text-black text-sm sm:text-base"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-3">
              <div>
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  maxLength="10"
                  inputMode="numeric"
                  className="w-full p-2 rounded-sm outline-none bg-white placeholder-gray-400 text-black text-sm sm:text-base"
                />
                {errors.contact && (
                  <p className="text-red-400 text-xs">{errors.contact}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 rounded-sm outline-none bg-white placeholder-gray-400 text-black text-sm sm:text-base"
                />
                {errors.country && (
                  <p className="text-red-400 text-xs">{errors.country}</p>
                )}
              </div>
            </div>

            <div className="pb-3">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 rounded-sm outline-none bg-white placeholder-gray-400 text-black text-sm sm:text-base"
                >
                 <option value="">Select a category</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Business">Business</option>
              </select>
              {errors.category && (
                <p className="text-red-400 text-xs">{errors.category}</p>
              )}
            </div>

            <div className="pb-2">
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded-sm outline-none bg-white placeholder-gray-400 text-black text-sm sm:text-base"
                ></textarea>
              {errors.message && (
                <p className="text-red-400 text-xs">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF5E14] text-white py-2 hover:opacity-90 transition rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      
    </section>
  );
}
