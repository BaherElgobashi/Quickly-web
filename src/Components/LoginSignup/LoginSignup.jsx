import "bootstrap/dist/css/bootstrap.min.css"
import "./LoginSignup.bundle.css";




function LoginSignup() {
  return (
    <>
  



    {/* // /////////////////////////////////////////////////////////////////////////////////////////// */}
    <div className="auth-container" >
      <div className="container">
        <div className="row justify-content-center">
          
          {/* Login Members Section  */}
          <div className="col-md-5 order-md-1">
            <div className="registered-members-section">
              <h2 className="section-title">الاعضاء المسجلين</h2>
              <div className="white-card">  
                <div className="card-body p-4">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        البريد الالكتروني
                      </label>
                      <input type="email" className="form-control" id="email" placeholder="ادخل بريدك الالكتروني" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        كلمة المرور
                      </label>
                      <input type="password" className="form-control" id="password" placeholder="ادخل كلمة المرور" />
                    </div>

                    <div className="account-links">
                      <a href="#" className="orange-link">
                        هل نسيت كلمة المرور؟
                      </a>
                      <div>
                        
                        <span> 
                          ليس لديك حساب؟
                          <span> </span>
                          <a href="#" className="orange-link">
                        انشاء حساب
                      
                      </a>
                          </span>
                      </div>
                      
                    </div>

                    <button type="submit" className="login-button">
                      تسجيل الدخول الآن
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Space between sections */}
          <div className="col-md-1 order-md-2"></div>

          {/* New Member Section - Now Second in DOM Order */}
          <div className="col-md-5 order-md-3">
            <div className="new-member-section">
              <h2 className="section-title">عضو جديد</h2>
              <div className="white-card">
                <div className="card-body d-flex align-items-center justify-content-center p-4">
                  <button className="create-account-button">إنشاء حساب</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    </>
  )
}

export default LoginSignup;

