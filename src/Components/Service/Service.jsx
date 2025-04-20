import React from "react";

import "./Service.bundle.css";
import Image1 from "../../assets/service.jpeg";



import Service1 from "../../assets/service1.jpeg";
import Service2 from "../../assets/service2.jpeg";
import Service3 from "../../assets/service3.jpeg";
import Service4 from "../../assets/service4.jpeg";
import Service5 from "../../assets/service5.jpeg";
import Service6 from "../../assets/service6.jpeg";

import GoogleServiceImage from "../../assets/googleServiceImage.png";

function Service() {

  const services = [
          {
              id: 1,
              title: 'خدمة إصلاح الغسالات',
              description: 'هل تحتاج إلى إصلاح غسالتك بسرعة؟ نقدم خدمات فورية وآمنة لإصلاح جميع أنواع الغسالات.',
              image: Service1,
              price: '$250',
            },
            {
              id: 2,
              title: 'خدمة إصلاح التكييفات',
              description: 'فريقنا المتخصص يوفر لك أفضل حلول إصلاح التكييفات بسرعة وكفاءة عالية.',
              image: Service2,
              price: '$250',
            },
            {
              id: 3,
              title: 'خدمة إصلاح الثلاجات',
              description: 'نقدم خدمات إصلاح الثلاجات بجودة عالية تضمن راحة بالك وسلامة طعامك.',
              image: Service3,
              price: '$250',
            },
            {
              id: 4,
              title: 'خدمة إصلاح الليزر ميكر',
              description: 'إصلاح احترافي لجميع أجهزة الليزر ميكر لضمان الأداء الأمثل.',
              image: Service4,
              price: '$250',
            },
            {
              id: 5,
              title: 'خدمة إصلاح الليزر ميكر',
              description: 'إصلاح احترافي لجميع أجهزة الليزر ميكر لضمان الأداء الأمثل.',
              image: Service5,
              price: '$250',
            },
            {
              id: 6,
              title: 'خدمة إصلاح الليزر ميكر',
              description: 'إصلاح احترافي لجميع أجهزة الليزر ميكر لضمان الأداء الأمثل.',
              image: Service6,
              price: '$250',
            },
        ];





  return(
    <>
      <div className="position-relative text-white">
    {/* ************************************************************************/}
    <img src={Image1} alt="ServicePage" className="w-100 booking-bg" />

    {/* ************************************************************************/}
    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center px-3" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
      <h2 className="fw-bold">احجز خدمة الصيانة المنزلية في</h2>
      <h2 className="fw-bold mt-2">مصر ابتداءً من 225 جنيها مصريا</h2>
      <h2 className="fw-bold mt-2">فقط!</h2>
      <p className="mt-3">احصل على صيانة منزلية احترافية في مصر بضغطة زر.</p>
      <button className="btn btn-warning fw-bold px-4 py-2 mt-2 w-50">احجز الآن</button>
    </div>
    {/* ************************************************************************/}
    <div className="badge-discount position-absolute top-0 end-0 m-4 text-center text-white">
          <div className="badge-circle">
            <small>Click to get</small>
            <strong style={{ fontSize: "20px" }}>AED 50</strong>
            <small>OFF</small>
          </div>
        </div>
    {/* ************************************************************************/}
    <div className="info-bar d-flex flex-wrap justify-content-around align-items-center px-3 py-2">
      <div>150,000+ happy customers</div>
      <div>Over 15,000 reviews</div>
      <div>Rated 4.8 out of 5</div>
      <div>Trusted service professionals</div>
      <div>Live customer support</div>

    </div>
  </div>
  {/* ************************************************************************/}

  <div className="container m-5 p-5 position-relative">
  <h2>احجز زيارة اصلاح في منزلك في مصر.</h2>
    
      <ul className="mt-4">
        <li>فريق فنيين محترف ومعتمد لضمان أفضل أداء لتكييفات منزلك.</li>
        <li>خدمات الصيانة تشمل: إصلاح الأعطال، تنظيف وصيانة الفلاتر، تعبئة غاز الفريون، فحص وحدات التبريد، وصيانة المكيفات الدورية للحفاظ على كفاءتها لأطول فترة </li>
        <li>جاهزية تامة: يصل الفنيون إلى منزلك مجهزين بأحدث الأدوات والمعدات، مع الالتزام بأعلى معايير الجودة والسلامة.</li>
        <li>خدمات إضافية: نوفر أيضًا خدمات الصيانة المنزلية المتكاملة، المتاحة طوال أيام الأسبوع في جميع أنحاء مصر.</li>
        <li>احجز الآن! لا تنتظر حتى يتعطل مكيفك، اضغط على زر "احجز الآن" واستمتع بخدمة صيانة احترافية تضمن لك راحة دائمة في منزلك!</li>
      </ul>

   
      <p className="text-end mt-3 " style={{ cursor: "pointer" }}>
          عرض المزيد <span className="ms-1">⌄</span>
      </p>
      
  </div>
  {/* ************************************************************************/}
  
  {/* ************************************************************************/}

  <div className="services-section py-5 position-relative">
  <div className="container ">
    <h4 className="section-title mb-5  ">خدماتنا المتخصصة</h4>

    <div className="row g-4 justify-content-center">
      {services.slice(0, 6).map((service, index) => (
        <div key={index} className="col-12 col-md-4">
          <div className="card h-100  border-0 shadow-sm">
            
            <img
              src={service.image} 
              alt={service.title}
              className="card-img-top"
              style={{ height: '180px', objectFit: 'cover' }}
            />

            
            <div className="card-body">
              <h5 className="card-title">{service.title}</h5>

              
              <p className="card-text text-muted">{service.description}</p>
              {/* <button className="btn button-coloring mt-3">
                المزيد من التفاصيل
              </button> */}
              <div className="card-footer bg-transparent border-0 text-center">
                <button className="btn w-75" style={{backgroundColor:"#FB8F11"}}>المزيد من التفاصيل</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* ***************************************************************** */}

      {/* Start Two Photos */}
      <div className="two-photos text-center pt-5 pb-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 col-lg-6">
              <div className="google-part">
                <img className="img-fluid" src={GoogleServiceImage} alt="Google Service Image" />
                <p className="mt-5 mb-5 styling-google-paragraph">
                What do customers say about Service Market
                <br/>
                4.7/5.0

                <br/>
                10397 reviews as of March 2025
                </p>

              </div>

            </div>

          </div>

          <div className="div-button">
            <button className="btn button-two-photos-styling">قراءة جميع تقييمات العملاء</button>

          </div>

        </div>

      </div>








      {/* End Two Photos */}
      {/* ***************************************************************** */}

    </>
  )
};

export default Service;
