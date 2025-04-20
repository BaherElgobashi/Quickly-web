import React from "react";


import ImageOne from "../../../public/assets/one.png";
import ImageTwo from "../../../public/assets/two.png";
import ImageThree from "../../../public/assets/three.png";

const testimonials = [
  {
    img: ImageOne,
    text: 'الموقع رائع وسهل الاستخدام جداً! تمكنت من إدارة حساباتي ومتابعة التقارير المالية بكل سهولة. أحببت التصميم البسيط والتنظيم الواضح للمعلومات، بالتأكيد سأوصي به لأصدقائي!',
    company: "ABC Company",
    name: "John Smith, CEO",
  },
  {
    img: ImageTwo,
    text: 'الموقع رائع وسهل الاستخدام جداً! تمكنت من إدارة حساباتي ومتابعة التقارير المالية بكل سهولة. أحببت التصميم البسيط والتنظيم الواضح للمعلومات، بالتأكيد سأوصي به لأصدقائي!',
    company: "ABC Company",
    name: "John Smith, CEO",
  },
  {
    img: ImageThree,
    text: 'الموقع رائع وسهل الاستخدام جداً! تمكنت من إدارة حساباتي ومتابعة التقارير المالية بكل سهولة. أحببت التصميم البسيط والتنظيم الواضح للمعلومات، بالتأكيد سأوصي به لأصدقائي!',
    company: "ABC Company",
    name: "John Smith, CEO",
  },
];

const Testimonials = () => {
  return (
    <div className="container py-5 text-end">
      <h2 className="fw-bold mb-5 text-center">ماذا يقول العملاء عنا</h2>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className="btn btn-light rounded-circle">
          <i className="bi bi-arrow-left"></i>
        </button>
        <button className="btn btn-warning text-white rounded-circle">
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      <div className="row">
        {testimonials.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <img
                  src={item.img}
                  alt="avatar"
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <p className="card-text">{item.text}</p>
                <p className="text-muted fw-bold mt-3">{item.company}</p>
                <p className="fw-bold">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
