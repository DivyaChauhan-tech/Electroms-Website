import React from "react";
export default function MapSection() {
  return (
    <section className="w-full">
      <div className="w-full h-[500px]">
        <iframe
          title="Electrom Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.835434059387!2d77.3210!3d28.5723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5c76a85bbff%3A0x6b8d83fcd955b1b5!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696789999999!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
