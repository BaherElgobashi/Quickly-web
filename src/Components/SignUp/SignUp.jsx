import React from 'react';

import "./SignUp.bundle.css"

function SignUpForm (){
  return (
    <>
    
    <div className="container-fluid min-vh-100 bg-light d-flex justify-content-center align-items-center py-5">
      
    
      <div className="card border-0 shadow-sm col-md-6 col-lg-5" style={{ borderRadius: '12px' }}>
      
        <div className="card-body p-4 p-md-5">
        
          
        <h2 >إنشاء حساب</h2>
          <form>
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-secondary fw-medium">
                البريد الإلكتروني
              </label>
              <input 
                type="email" 
                className="form-control border-secondary py-2 px-3 .change-color-of-inputfield" 
                id="email" 
                placeholder="أدخل بريدك الإلكتروني"
                style={{ borderRadius: '8px' }}
              />
            </div>
            
            {/* Phone Field */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label text-secondary fw-medium">
                رقم الهاتف
              </label>
              <input 
                type="tel" 
                className="form-control border-secondary py-2 px-3 h6-and-inputfield-styling" 
                id="phone" 
                placeholder="أدخل رقم هاتفك"
                style={{ borderRadius: '8px' }}
              />
            </div>
            
            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-secondary fw-medium">
                كلمة المرور
              </label>
              <input 
                type="password" 
                className="form-control border-secondary py-2 px-3 h6-and-inputfield-styling" 
                id="password" 
                placeholder="أدخل كلمة المرور"
                style={{ borderRadius: '8px' }}
              />
            </div>
            
            {/* Confirm Password Field */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label text-secondary fw-medium">
                تأكيد كلمة المرور
              </label>
              <input 
                type="password" 
                className="form-control border-secondary py-2 px-3 .change-color-of-inputfield" 
                id="confirmPassword" 
                placeholder="أكد كلمة المرور"
                style={{ borderRadius: '8px' }}
              />
            </div>
            {/* Start Already have account */}
            <div className="text-end mt-3">
              <p className="text-muted">
                لديك حساب بالفعل؟{' '}
                <a 
                  href="#" 
                  className="text-decoration-none"
                  style={{ color: '#f59e0b' }}
                >
                  سجل الدخول
                </a>
              </p>
            </div>

            {/* End Already have account */}
            {/* ************************************************* */}
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-100 py-2 fw-medium text-white"
              style={{ 
                borderRadius: '8px',
                backgroundColor: '#f59e0b',
                border: "none",
              }}
            >
              إنشاء حساب
            </button>
            {/* ************************************************* */}
            
            
            
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUpForm;