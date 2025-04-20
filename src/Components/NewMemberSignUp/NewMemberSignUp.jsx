import React from 'react';

function NewMemberSignup() {
  return (
    <div className="min-vh-100 bg-light d-flex flex-column align-items-center justify-content-center p-3" dir="rtl">
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <h1 className="fs-3 fw-bold text-end mb-4">عضو جديد</h1>

        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <button
              className="btn w-100 py-3 fs-5 rounded-pill"
              style={{
                borderColor: "#f59e0b",
                color: "#fb8f11",
                borderWidth: "2px",
                backgroundColor: "transparent",
              }}
            >
              إنشاء حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewMemberSignup;

