import React from "react";
import Slider from "react-slick";

// Import Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.bundle.css";


import HomePage1 from "../../assets/home.png";
import HomePage2 from "../../assets/home.png";
import HomePage3 from "../../assets/home.png";

import MobileHomePageImage from "../../assets/MobileHomePage.png";
import AppstoreImage from "../../assets/AppStoreHome.png";
import GooglePlayImage from "../../assets/googleplayHome.png";

import Service1 from "../../assets/service1.jpeg";
import Service2 from "../../assets/service2.jpeg";
import Service3 from "../../assets/service3.jpeg";
import Service4 from "../../assets/service4.jpeg";
import Service5 from "../../assets/service5.jpeg";
import Service6 from "../../assets/service6.jpeg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Images = [HomePage1,HomePage2,HomePage3];

function Home(){

    const features = [
        {
          id: '01',
          title: 'أفضل الأسعار في كل مرة',
          desc: 'خدمة جديرة بالثقة - مبنية على الموثوقية والشفافية وراحة البال، يمكنك الاعتماد علينا في المعاملات ... اقرأ المزيد',
        },
        {
          id: '02',
          title: 'انخفاض التكاليف',
          desc: 'تحويلات فورية ووصول عالمي. توصلك عالميًا بمعاملات سلسة وموثوقة ... اقرأ المزيد',
        },
        {
          id: '03',
          title: 'خدمة جديرة بالثقة',
          desc: 'احصل على أفضل الأسعار في كل مرة، بغض النظر عن مكان وجودك أو الوقت الذي تحتاج إليه. مع التزامنا بالشفافية ... اقرأ المزيد',
        },
        {
          id: '04',
          title: 'دعم على مدار الساعة طوال أيام الأسبوع',
          desc: 'دعم على مدار الساعة طوال أيام الأسبوع – هنا في أي وقت! فريقنا جاهز على مدار الساعة لمساعدتك في أي أسئلة ... اقرأ المزيد',
        },
        {
          id: '05',
          title: 'المعاملات الآمنة',
          desc: 'أمنك هو أولويتنا. استمتع براحة البال مع كل معاملة. محمية بتقنيات متقدمة ... اقرأ المزيد',
        },
        {
          id: '06',
          title: 'تجربة سهلة الاستخدام',
          desc: 'نقل سهل وتصميم رائع. تم تصميم منصتنا مع وضعك في الاعتبار، مما يجعل كل خطوة ... اقرأ المزيد',
        },
      ];


    // ///////////////////////////////////////////////////////////
      


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




    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display three slides at once
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // At tablet size
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time on medium screens
                }
            },
            {
                breakpoint: 640, // At mobile size
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time on small screens
                }
            }
        ]
    };
    return(
        <>
        <div className="position-relative text-white">


        <Slider {...settings} >
            {Images.map((img, key) => (
            <div key={key} >
      
        
        <div>
        <img src={img} className=" w-100" alt="product" />
        </div>

       
        
          <h5 className=" fw-bold text-dark">Product Name</h5>
          <h6 className="text-muted mb-2">$24</h6>
          <p className="card-text small text-secondary">
            Abbreviate Description of Each Product
          </p>
          <button className="btn btn-success w-100 mt-2">
            See More Details
          </button>
       
      
    </div>
  ))}
</Slider>




        </div>

{/* <div className="container-fluid p-0">
      <Slider {...settings}>
        <div className="hero-slide" style={{ backgroundImage: 'url(/images/devices.jpg)' }}>
          <div className="overlay d-flex align-items-center justify-content-end text-end px-4 py-5">
            <div className="text-white" style={{ maxWidth: '500px' }}>
              <h3 className="fw-bold mb-3">صيانة فورية واحترافية لجميع أجهزتك الكهربائية - خدمة سريعة،</h3>
              <h4 className="mb-4">أسعار تنافسية، وضمان حقيقي</h4>
              <div className="d-flex justify-content-end flex-wrap gap-2">
                <button className="btn btn-warning fw-bold px-4">ابدأ تجربتك المجانية الآن</button>
                <button className="btn btn-outline-light px-4">طلب العرض التوضيحي</button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div> */}


        {/* ************************************************************************************** */}

        <div className="container my-5">
  <div className="row">
    {/* Text Section */}
    <div className="col-md-6  text-md-end">
      <h2 style={{color:"#253D4E"}}>اطلب خدمتك بشكل أسرع</h2>
      <h2 style={{color:"#253D4E"}}>مع تطبيق كويكلي</h2>
      <h6 className="p-3" style={{color:"#838383"}}>متاح لنظامي التشغيل IOS و Android</h6>
      {/* <div className="d-flex position-relative">
      <img src={GooglePlayImage} className="google-image-styling" />
      <img src={AppstoreImage} className="Appstore-image-styling"/>
      </div> */}
        <div className="d-flex align-items-center">
            <img src={GooglePlayImage} alt="Google Play" className="google-image-styling" />
            <img src={AppstoreImage} alt="App Store" className="Appstore-image-styling" />
        </div>
      
    </div>

    {/* Image Section */}
    <div className="col-md-6 text-center">
      <img
        src={MobileHomePageImage}
        alt="Mobile"
        className="img-fluid mobile-image"
        style={{ maxHeight: '600px' }}
      />
    </div>
  </div>
        </div>

        {/* ************************************************************************************** */}

        <div>
            <h2 className="m-5 text-center" style={{fontSize:"40px" , fontWeight:"700" , lineHeight:"100%"}}>لماذا تختارنا</h2>
            <h2 className="text-center" style={{color:"#141414" , fontWeight:"600" , fontSize:"48px" , lineHeight:"68px"}}>من خلال الانضمام إلى منصتنا، يمكنك</h2>
            <h2 className="text-center" style={{color:"#141414" , fontWeight:"600" , fontSize:"48px" , lineHeight:"68px"}}>الاستفادة بالكثير من الفوائد.</h2>
            <h5 className="text-center" style={{color:"#1E1E1E" , fontWeight:"400",fontSize:"16px" , lineHeight:"26px"}}>إليك السبب الذي جعل الآلاف يختاروننا</h5>
            <h5 className="text-center" style={{color:"#1E1E1E" , fontWeight:"400",fontSize:"16px" , lineHeight:"26px"}}>فريق الدعم لدينا موجود دائمًا لإرشادك، سواء كان الأمر يتعلق بالتحويلات الكبيرة أو التبادلات اليومية.</h5>
            <div className="container my-5">
            <div className="row g-4">
                {features.map((feature, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                    <div className={`p-4 rounded shadow-sm h-100 ${index % 2 === 0 ? 'coloring-bag-section' : 'bg-white'}`}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className=" fw-bold fs-5">{feature.id}</span>
                    </div>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p className="text-muted">{feature.desc}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* ************************************************************************************** */}

        {/* Start Service Characteristics */}
        <div className="container py-5">
            <div className="text-end mb-5">
                <h6 className="text-warning">خدمتنا</h6>
                <h2 className="fw-bold">الخدمات المنزية الشاملة لتلبية</h2>
                <h2 className="fw-bold">احتياجاتك</h2>

            </div>
            <div className="row">
            {services.map((service,index)=>(
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                    <div className="card h-100 shadow-sm">
                        <img
                        src={service.image}
                        className="card-img-top"
                        alt={service.title}
                        style={{height:"200px" ,objectFit:"cover"}}
                        />
                        <div className="card-body text-end">
                            <span className="badge bg-warning text-start text-dark mb-2">{service.price}</span>
                            <h5 className="card-title">{service.title}</h5>
                            <p className="card-text text-muted" style={{ fontSize: '14px' }}>
                            {service.description}
                            </p>
                        </div>
                        <div className="card-footer bg-transparent border-0 text-center">
                            <button className="btn w-75" style={{backgroundColor:"#FB8F11"}}>Services Detail</button>
                        </div>
                    </div>
                </div>

            ))}
            </div>

        </div>

        {/* End Service Characteristics */}


        {/* ********************************************************************************************* */}

        {/* Start Question and Answer */}

        <div className="question pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="question">
                  
                    <div className="question ">
                    <div className="d-flex main-title">
                      <FontAwesomeIcon icon="fa-solid fa-xmark" />
                      <h6 className="fw-bold">كيف أعرف أن جهازي بحاجة إلى صيانة؟</h6>
                    </div>
                      <p className="text-black-50">إذا لاحظت أعطالًا متكررة، أصواتًا غير طبيعية، ضعف الأداء، أو توقف الجهاز عن العمل تمامًا، فقد يكون الوقت قد حان للصيانة.</p>

                    </div>

                    <div className="question  ">
                    <div className=" main-title">
                      <FontAwesomeIcon icon="fa-solid fa-xmark" />
                      <h6 className="mt-2 fw-bold">هل من الممكن أن أقوم بإصلاح الأجهزة المنزلية</h6>
                      <h6 className="mt-2 fw-bold">بنفسي في حالة حدوث عطل بسيط، أم أن ذلك قد يؤدي</h6>
                      <h6 className="mt-2 fw-bold">إلى مشاكل أكبر؟</h6>

                    </div>
                     

                    </div>

                    <div className="question  ">
                    <div className=" main-title">
                      <FontAwesomeIcon icon="fa-solid fa-xmark" />
                      <h6 className="mt-2 fw-bold">كم مرة يجب أن أخضع الأجهزة المنزلية الخاصة بي</h6>
                      <h6 className="mt-2 fw-bold">للصيانة الدورية لضمان استمرار عملها بكفاءة لفترة </h6>
                      <h6 className="mt-2 fw-bold">طويلة؟</h6>

                    </div>
                     

                    </div>

                    <div className="question">
                      <div className="">
                      <h6 className="mt-2 fw-bold">عندما أرسل جهازي إلى مركز الصيانة، كم من الوقت</h6>
                      <h6 className="mt-2 fw-bold">سيستغرق إصلاحه</h6>

                      </div>

                    </div>

                    <div className="box">
                      <div className=" container text-center">
                        <div className="content">
                        <h2 className="text-white">هل تريد لمساعدة ؟</h2>
                        <p className="text-white-50">هل تريد مساعدة اضافية لا تتردد في مراسلتنا</p>
                        <button className="btn">تواصل معنا</button>

                        </div>

                      </div>

                    </div>
                  
                  
                  
                  
                </div>

              </div>

              <div className="col-md-12 col-lg-6">
                <div className="questions-answers">
                  <h6>Questions & Answers</h6>
                  <h2>الاسئلة الشائعة</h2>

                  <div className="image">
                      <img className="img-fluid" src="../../assets/helmet.jpeg" alt="Helmet" />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
        {/* End Question and Answer */}


        {/* ********************************************************************************************* */}



        </>


        
    );
}


export default Home;