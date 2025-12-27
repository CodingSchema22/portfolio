// const About = ()=>{
// return (
//     <>
//     {/* <section id="about">
//     <div className="cont cont1">
//         <div className="image">
//         <img src="/img1.jpg">
//             </img>
//     </div>
//     <div className="text">
//         <div className="tet">
//             <div className="intro">
//     <h3><i>Who I am</i></h3>
//     </div>
//     <h2>Architecto, quod? Quaerat ut eligendi, commodi sequi quam rerum nesciunt?</h2>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident atque cupiditate porro est eveniet neque sequi aut voluptatibus ad, minus ea ut asperiores.
//          Provident atque cupiditate porro est eveniet neque sequi aut voluptatibus ad, minus ea ut asperiores.
//     </p>
//     <hr></hr>
//     <div className="basic-intro">
//         <div className="in">
//         <p id="bold">Name</p>
//         <p> Fatima</p>
//         </div>
//          <div className="in">
//         <p id="bold">From</p>
//         <p>Lahore</p>
//         </div>
//                  <div className="in">
//         <p id="bold">Age</p>
//         <p className="age">20</p>
//         </div>
//                     <div className="in">
//         <p id="bold" className="bolde">Email</p>
//         <p>fatima@gmail.com</p>
//         </div>

//     </div>
//         <div className="btn bt2">
//         <button>Download Resume</button>
//     </div>
//     </div>
//     </div>

//     </div>
//     </section> */}



//    <section id="about">
//       <div className="cont" id="cont-2">
//              <div className="image">
//             <img src="/img1.jpg" />
//         </div>
// <div className="main-div" id="main-div1">
// <div className="heading" id="head-2">
// <h3>
//   <i>
//     Who I am
//   </i>
// </h3>
// <h1>
//   <i>I am a Frontend Web Developer </i></h1>
// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur libero voluptatibus voluptate accusantium pariatur doloribus quos! Consequatur, provident nulla? Provident earum veniam, numquam temporibus dolor atque nostrum consequatur explicabo! Porro?</p>
// <hr></hr>
// </div>

// <div className="info" id="reminders">
// <div className="email">
//   <h3>Email</h3>
//   <p>fahadjutt109</p>
// </div>
// <div className="email" id="emails">
//   <h3>Phone</h3>
//   <p>123-4567-890</p>
// </div>
// <div className="email" id="emails">
//   <h3>Location</h3>
//   <p>Lahore</p>
// </div>
// {/* <div className="email" id="emails">
//   <h3>Age</h3>
//   <p>20</p>
// </div> */}
// </div>
// <div className="btn" id="button">
//     <button>Download Cv</button>
// </div>
// </div>
//       </div>
//       </section>
//     </>
// )
// }
// export default About

































import { motion } from "framer-motion";
// import "../styles.css";

const About = () => {
  return (
//     <section id="about">
//       <motion.div
//         id="cont-2"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >



//       <div className="cont" id="cont-2">
//              {/* <div className="image" id="img">
//             <img src="/img1.jpg" />
//         </div> */}


//               <motion.div
//                 className="image" id="img"
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <img src="img1.jpg" alt="Hero" />
//               </motion.div>
// <div className="main-div" id="main-div1">
// <div className="heading" id="head-2">
// <h3>
//   <i>
//     Who I am
//   </i>
// </h3>
// <h1>
//   <i>I am a Frontend Web Developer </i></h1>
// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur libero voluptatibus voluptate accusantium pariatur doloribus quos! Consequatur, provident nulla? Provident earum veniam, numquam temporibus dolor atque nostrum consequatur explicabo! Porro?</p>
// <hr></hr>
// </div>

// <div className="info" id="reminders">
// <div className="email" id="emails">
//   <h3>Email</h3>
//   <p>fahadjutt109</p>
// </div>
// <div className="email" id="emails">
//   <h3>Phone</h3>
//   <p>123-4567-890</p>
// </div>
// <div className="email" id="emails">
//   <h3>Location</h3>
//   <p>Lahore</p>
// </div>
// {/* <div className="email" id="emails">
//   <h3>Age</h3>
//   <p>20</p>
// </div> */}
// </div>
// <div className="btn" id="button">
//     <button>Download Cv</button>
// </div>
//     {/* </motion.div> */}
// </div>
//       </div>

//     </motion.div>
//     </section>
   <section id="hero" className="cont" >
      <div className="main-cont">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="total">
<div className="heading" id="head-2">
  <h3>
 <i>
   Who I am
 </i>
</h3>
 <h1>
  <i>I am a Frontend Web Developer </i></h1>
<p id="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur libero voluptatibus voluptate accusantium pariatur doloribus quos! Consequatur, provident nulla? Provident earum veniam, numquam temporibus dolor atque nostrum consequatur explicabo! Porro?</p>
<hr></hr>

{/* <h1>
  <i>I am a Frontend Web Developer </i></h1>
<p>I make complex designs easily</p> */}
<div className="btn">
    <button>Download Resume</button>
</div>
</div>
<div className="info">
  <div className="bo-1">Name <br></br>Fatima</div>
  <div className="bo-1">Location <br></br>Lahore</div>
  <div className="bo-1">Email <br></br>fahadjutt109</div>
</div>
</div>
    
</motion.div>

      <motion.div
        className="image" id="imge"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="img2.jpg" alt="Hero" />

      </motion.div>
      </div>
    </section>
);
};

export default About;
