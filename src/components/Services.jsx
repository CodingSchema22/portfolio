// imfort 
// const Projects = ()=>{
//     return (
//             <div className="cont-2">
//         <h1>
//             My Projects
//         </h1>
//         <div className="inner-cont">
//             <div className="pro-1"></div>
//             <div className="pro-1"></div>
//             <div className="pro-1"></div>
//             <div className="pro-1"></div>
//             <div className="pro-1"></div>
//             <div className="pro-1"></div>
//         </div>
//     </div>
//     )
// }
// export default Projects




// const services = [
//   {
//     icon: "fa-brands fa-react",
//     title: "MERN Stack Development",
//     desc: "Full-stack web apps using MongoDB, Express, React, and Node.js."
//   },
//   {
//     icon: "fa-solid fa-mobile-screen",
//     title: "Responsive Website",
//     desc: "Mobile-first responsive websites for all devices."
//   },
//   {
//     icon: "fa-solid fa-code",
//     title: "Frontend Development",
//     desc: "Modern UI using HTML, CSS, JavaScript, and React."
//   },
//   {
//     icon: "fa-solid fa-screwdriver-wrench",
//     title: "Website Maintenance",
//     desc: "Bug fixes, performance optimization, and updates."
//   }
// ];

// const Services = () => {
//   return (
//     <>
//     <section id="services">
    // <div className="services">
    //   <h2>My Services</h2>

    //   <div className="services-grid">
    //     {services.map((service, index) => (
    //       <div className="service-card" key={index}>
    //         <div className="service-info">
    //         <i className={service.icon}></i>
    //         <h3>{service.title}</h3>
    //         <p>{service.desc}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   </div>
//     </section>
//     </>
//   );
// };

// export default Services;






























import React from "react";
import { motion } from "framer-motion";
// import "../styles.css";



const services = [
  {
    icon: "fa-brands fa-react",
    title: "MERN Stack Development",
    desc: "Full-stack web apps using MongoDB, Express, React, and Node.js."
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Responsive Website",
    desc: "Mobile-first responsive websites for all devices."
  },
  {
    icon: "fa-solid fa-code",
    title: "Frontend Development",
    desc: "Modern UI using HTML, CSS, JavaScript, and React."
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
    
        <div className="services">
      <h2>My Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
                    <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
          <div className="service-crd" key={index}>
            <div className="service-info">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            </div>
          </div>
          </motion.div>
        ))}
      </div>
      </div>
      {/* <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <i>{service.icon}</i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div> */}
    </section>
  );
};

export default Services;
