
import React from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import "./QuicklyFooter.bundle.css";

function QuicklyFooter() {
  return (
    <footer className=" py-5 footer-color">
      <div className="container">
        <div className="row text-end">
          {/* Social Media and Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-4">تواصل معنا</h5>
            <p className="mb-2">+201649897792</p>
            <p className="mb-4">Jaxonreed@emapie</p>
            

            
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-4">الخدمات</h5>
            <ul className="list-unstyled">
              <li className="mb-2">اصلاح السيارات</li>
              <li className="mb-2">اصلاح التكييفات</li>
              <li className="mb-2">المنتجات</li>
              <li className="mb-2">اصلاح الليس بكر</li>
              <li className="mb-2">اصلاح التكييفات</li>
              <li className="mb-2">الاخبار</li>
            </ul>
          </div>

          {/* Menu */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-4">القائمة</h5>
            <ul className="list-unstyled">
              <li className="mb-2">عنا</li>
              <li className="mb-2">الخصوصية</li>
              <li className="mb-2">الشروط والاحكام</li>
              <li className="mb-2">اتصل بنا</li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center justify-content-end mb-4">
              <img src="/logo.png" alt="Quickly Logo" style={{ width: '50px' }} className="me-2" />
              <h2 className="m-0">Quickly</h2>
            </div>



            <div className="bg-dark  text-white  rounded-1 d-flex div-input-styling">
            <input  
                type="email" 
                className="bg-dark text-white border-0  w-100 " 
                placeholder="أدخل عنوان بريدك الإلكتروني" 
                style={{ direction: 'rtl' }}
            />
            <button className="btn btn-light p-6 button-styling" >إرسال</button>
        </div>
          </div>
        </div>

        {/* Copyright */}

        <div className="d-flex justify-content-between align-items-center pt-4 mt-4 w-100 flex-wrap">
          

          <div className="d-flex align-items-center gap-3">
    <span className="fw-bold me-2">تابعنا على</span>

    <a href="#" className="text-dark"><FaFacebookF size={20} /></a>
    <a href="#" className="text-dark"><FaXTwitter size={20} /></a>
    <a href="#" className="text-dark"><FaLinkedinIn size={20} /></a>
          </div>
          <p className="m-0">© 2025</p>
</div>

      </div>
    </footer>
  );
}

export default QuicklyFooter;
