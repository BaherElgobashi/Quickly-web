import React from "react";

function ResetPassword(){
    return(
        <>
            <div className="container-fluid min-vh-100 bg-light d-flex justify-content-center align-items-center py-5">
      
    
                <div className="card border-0 shadow-sm col-md-6 col-lg-5" style={{ borderRadius: '12px' }}>
      
                    <div className="card-body p-4 p-md-5">
        
          
                    <h2 className="text-center m-4" >اعادة تعيين كلمة المرور</h2>
                    <h6 className="text-center m-4 h6-and-inputfield-styling">قم بانشاء كلمة المرور الجديدة الخاص بك</h6>
                    

                    <form>
                        {/* Email Field */}
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label text-secondary fw-medium change-size">
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
                        {/* ************************************************************************* */}

                        {/* Start New Password */}
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label text-secondary fw-medium change-size">
                            كلمة المرور الجديدة
                        </label>
                        <input 
                            type="email" 
                            className="form-control border-secondary py-2 px-3 .change-color-of-inputfield" 
                            id="email" 
                            placeholder="كلمة المرور الجديدة"
                            style={{ borderRadius: '8px' }}
                        />
                        </div>
                        {/* End New Password */}
                        {/* ************************************************************************* */}
                        {/* Start Confirm New Password */}

                        <div className="mb-3">
                        <label htmlFor="email" className="form-label text-secondary fw-medium change-size">
                            تأكيد كلمة المرور الجديدة
                        </label>
                        <input 
                            type="email" 
                            className="form-control border-secondary py-2 px-3 .change-color-of-inputfield" 
                            id="email" 
                            placeholder="تأكيد كلمة المرور الجديدة"
                            style={{ borderRadius: '8px' }}
                        />
                        </div>


                        {/* End Confirm New Password */}



                        {/* ************************************************************************* */}



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
                                اعادة تعيين كلمة المرور
                        
                            </button>
            {/* ************************************************* */}
                    </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetPassword;