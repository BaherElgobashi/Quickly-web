import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa'; 
import "./QuicklyNavbar.bundle.css"

function QuicklyNavbar ()  {
  return (
    <>
    
      

      {/* Start Yellow Bar */}
      
       <div className="yellow-bar bg-warning d-flex justify-content-between align-items-center px-3 py-2 text-dark">
      <div className="col-4">
        <span className="number">تواصل معنا: +20164949498</span>
      </div>
      <div className="col-4 text-center">
        <a className="center-styling" href='#'> حمل التطبيق</a>
        <span></span>
        <span> الان مجانا لمحتوي ممتع و مفيد</span>
      </div>
      <div className="col-4 text-start">
        <FaWhatsapp className="ms-2" />
        <FaTelegramPlane className="ms-2" />
        <FaInstagram className="ms-2" />
        <FaFacebookF className="ms-2" />
        
      </div>
      
      </div> 
        
       
      {/* End Yellow Bar */}


      {/* ****************************************************************************************** */}
      

      {/* Navigation Bar */}
      <nav  className="navbar navbar-expand-lg bg-light border-bottom">
        <div className="container-fluid px-3">
          {/* Logo */}
          <a className="navbar-brand ms-3" href="#">
              <span className="fw-bold">Quickly</span>
            </a>
          

          {/* Navbar Toggle for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#quickly-nav"
            aria-controls="quickly-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links and Logo */}
          <div className="collapse navbar-collapse" id="quickly-nav">
            <ul className="navbar-nav m-auto d-flex align-items-center unorder-styling">


              <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-warning"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      الرئيسية
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="/">تواصل معنا</a></li>
                      <li><a className="dropdown-item" href="/">الاشعارات</a></li>
                      <li ><a className="dropdown-item" href="/">الرسائل</a></li>
                      <li><a className="dropdown-item" href="/">طلب تسعر</a></li>
                      <li><a className="dropdown-item" href="/">شرح التطبيق</a></li>
                      <li><a className="dropdown-item" href="/">عنا</a></li>
                      <li><a className="dropdown-item" href="/">الشروط و الاحكام</a></li>
                      <li><a className="dropdown-item" href="/">الاخبار</a></li>
                      <li><a className="dropdown-item" href="/">محفظتي </a></li>
                      <li><a className="dropdown-item" href="/">الوظائف</a></li>
                      <li><a className="dropdown-item" href="/">الأجهزة المنقولة</a></li>
                      <li><a className="dropdown-item" href="/">بطاقة الائتمان</a></li>
                      <li><a className="dropdown-item" href="/">الدعم الفني</a></li>
                    </ul>
              </li>

              {/* ********************************************************************** */}
              <li className="nav-item">
                <a className="nav-link" href="#">الأخبار</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">اطلب الان</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ماذا عنا</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">تواصل معنا</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">الرسانل</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">المهندسين</a>
              </li>
              <li className="nav-item drop-down">
              <a className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      الطلبات
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">تواصل معنا</a></li>
                      <li><a className="dropdown-item" href="#">الاشعارات</a></li>
                      <li ><a className="dropdown-item" href="#">الرسائل</a></li>
                      <li><a className="dropdown-item" href="#">طلب تسعر</a></li>
                      <li><a className="dropdown-item" href="#">شرح التطبيق</a></li>
                      <li><a className="dropdown-item" href="#">عنا</a></li>
                      <li><a className="dropdown-item" href="#">الشروط و الاحكام</a></li>
                      <li><a className="dropdown-item" href="#">الاخبار</a></li>
                      <li><a className="dropdown-item" href="#">محفظتي </a></li>
                      <li><a className="dropdown-item" href="#">الوظائف</a></li>
                      <li><a className="dropdown-item" href="#">الأجهزة المنقولة</a></li>
                      <li><a className="dropdown-item" href="#">بطاقة الائتمان</a></li>
                      <li><a className="dropdown-item" href="#">الدعم الفني</a></li>
                    </ul>
              </li>
            </ul>
            
            
          </div>
          
          <div className='d-flex'>
          <span className='m-3' >العربية</span>
          <button
              className="btn btn-signin dropdown-toggle d-flex align-items-center"
              type="button"
              
            >
              <span className="me-2">أحمد المنفي</span>
              
            </button>
          </div>
        </div>
      </nav>
    
    
    
    </>
  )
};

export default QuicklyNavbar;