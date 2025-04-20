import React from "react";
import "./ForgetPassword.bundle.css"



function ForgetPassword(){

    return(
    
        <>
        <div className="container-fluid min-vh-100 bg-light d-flex justify-content-center align-items-center py-5">
      
    
      <div className="card border-0 shadow-sm col-md-6 col-lg-5" style={{ borderRadius: '12px' }}>
      
        <div className="card-body p-4 p-md-5">
        
          
        <h2 className="text-center m-4" >هل نسيت كلمة المرور</h2>
        <h6 className="text-center m-4 h6-and-inputfield-styling">الرجاء تحديد خيار ارسال رابط اعادة تعيين كلمة المرور</h6>
          <form className="m-6">
            {/* Email Field */}
            <div className="container ">
            <div className=" w-100 mb-3 styling-div p-20">
            <i className="fa-light fa-envelope"></i>
              <label htmlFor="email" className="form-label text-secondary fw-medium text-center">
                    اعادة التعيين عبر البريد الالكتروني
              </label>
              <h6 className="text-center h6-styling mb-6">سوف نرسل لك رابطا لاعادة تعيين كلمة المرور الخاصة بك</h6>
              <input 
                type="email" 
                className="change-color-of-inputfield form-control border-secondary py-2 px-3" 
                id="email" 
                placeholder="عنوان البريد الالكتروني"
                
              />
            </div>

            </div>
            
            {/* Phone Field */}
            <div className="container ">
            <div className=" w-100 mb-3 styling-another-div p-20">
            <i class="fa-light fa-envelope"></i>
              <label htmlFor="email" className="form-label text-secondary fw-medium text-center">
                    اعادة التعيين عبر الولتساب
              </label>
              <h6 className="text-center h6-and-inputfield-styling mb-6">سوف نرسل لك رابطالاعادة ضبط الهاتف</h6>
              <input 
                type="email" 
                className="change-color-of-inputfield form-control border-secondary py-2 px-3" 
                id="email" 
                placeholder="01061498977"
                
              />
            </div>

            </div>
            
            
            
            
           
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-100 py-2 fw-medium text-white"
              style={{ 
                borderRadius: '8px',
                backgroundColor: '#FB8F11',
                border: "none",
                
              }}
            >
                ارسال رابط تعيين كلمة المرور
        
            </button>
            {/* ************************************************* */}
            
            
            
          </form>
        </div>
      </div>
    </div>
        </>
        
    );
    
}


export default ForgetPassword;




