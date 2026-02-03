import React from "react";
import footer1 from "../assets/footer1.png";
export default function Footer() {
  return (
    <footer className="footer text-white text-xs pt-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="mb-8 leading-loose">
            <a className="fw-bold d-flex align-items-center mb-8" href="#">
              <img src={footer1} alt="logo" className="h-12 w-auto mb-2" />
            </a>

            <p className="text-xs text-left mb-4">
              Electrom Communications has successfully participated in
              development of many advanced projects all over the world and has
              received awards and distinctions for its great solutions.
            </p>

            <div className="social-icons flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/p/Electrom-Communications-100072271241383/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition text-lg"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://x.com/electromcomms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition text-lg"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://in.linkedin.com/company/electrom-communications"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition text-lg"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition text-lg"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="info mb-6 leading-loose">
            <h6 className="text-xl font-semibold mb-2">Registered Office</h6>

            <p>
              <i
                className="bi bi-geo-alt-fill"
                style={{ color: "#ff6600" }}
              ></i>
              &nbsp;
              <a
                href="https://maps.google.com/?q=405,+Devika+Tower,+Nehru+Place,+New+Delhi-110019"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                405, Devika Tower, Nehru Place, New Delhi-110019
              </a>
            </p>

            <p>
              <i className="bi bi-telephone" style={{ color: "#ff6600" }}></i>
              &nbsp;
              <a
                href="tel:01203221368"
                className="hover:text-orange-400 transition"
              >
                0120 3221368
              </a>
            </p>

            <p>
              <i className="bi bi-envelope" style={{ color: "#ff6600" }}></i>
              &nbsp;
              <a
                href="mailto:electromcomm@gmail.com"
                className="hover:text-orange-400 transition"
              >
                electromcomm@gmail.com
              </a>
            </p>
          </div>

          <div className="info1 mb-8 leading-loose">
            <h6 className="text-xl font-semibold mb-2">Corporate Office</h6>

            <p>
              <i
                className="bi bi-geo-alt-fill"
                style={{ color: "#ff6600" }}
              ></i>
              &nbsp;
              <a
                href="https://maps.google.com/?q=Tower-B,+Noida+One,+819,+Industrial+Area,+Sector+62,+Noida,+Uttar+Pradesh+201309"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                Tower-B, Noida One, 819, Industrial Area, Sector 62, Noida,<br></br>
                Uttar Pradesh 201309
              </a>
            </p>

            <p>
              <i className="bi bi-telephone" style={{ color: "#ff6600" }}></i>
              &nbsp;
              <a
                href="tel:01203221368"
                className="hover:text-orange-400 transition"
              >
                0120 3221368
              </a>
            </p>

            <p>
              <i className="bi bi-envelope" style={{ color: "#ff6600" }}></i>
              &nbsp;
              <a
                href="mailto:electromcomm@gmail.com"
                className="hover:text-orange-400 transition"
              >
                electromcomm@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center mt-2 py-6 border-t border-gray-600">
        <p className="mb-0 text-[10px] sm:text-xs md:text-xs px-2">
          © 2025 All Rights Reserved. ELECTROM COMMUNICATIONS PRIVATE LIMITED
        </p>
      </div>
    </footer>
  );
}
