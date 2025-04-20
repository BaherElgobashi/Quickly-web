import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import "./SocialLoginButtons.bundle.css";

function SocialLoginButtons  ()  {
  return (
    <div className="container custom-container d-flex justify-content-center align-items-center min-vh-5  0">
      <div className="row w-100">


        {/* Start Google Button */}
        <div className="col-md-6 mb-3 d-flex align-items-center div-google-icon">
          <button className="btn btn-google w-100 google-button-styling">
            
            تسجيل الدخول باستخدام جوجل

          <span className="icon-wrapper span-styling-gog">
              <FaGoogle />
          </span>
          </button>
          
        </div>
        {/* End Google Button */}
        {/* **************************************************************************************** */}
        {/* Start Facebook Button */}
        <div className="col-md-6 mb-3 d-flex align-items-center div-face-icon">
          <button className="btn btn-facebook w-100 face-button-styling">
            
            تسجيل الدخول باستخدام فيسبوك

            <span className="icon-wrapper span-styling-fb bg-light">
              <FaFacebookF className='icon-styling-fb' />
            </span>
          </button>
          
        </div>
        {/* End Facebook Button */}


        {/* ************************************************************************* */}

        
      </div>
    </div>
  );
};

export default SocialLoginButtons;