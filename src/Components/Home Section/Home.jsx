// import React from "react";
// import "../../styles/css/home.css";
// import { AiFillGithub } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";
// import { BsInstagram } from "react-icons/bs";
// import { TbArrowBigRightLine } from "react-icons/tb";
// import { TbChevronsDown } from "react-icons/tb";

// function Home() {
//   return (
//     <section id="home" className="home section">
//       <div className="leftIcons">
//         <div className="socials grid">
//           <a href="https://github.com/yogendra-joshi" target="_blank">
//             <AiFillGithub className="icon" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/yogendra-joshi-2bb65a154/"
//             target="_blank"
//           >
//             <AiFillLinkedin className="icon" />
//           </a>
//           <a href="https://www.instagram.com/yogii_004/" target="_blank">
//             <BsInstagram className="icon" />
//           </a>
//           <div className="line"></div>
//         </div>
//       </div>

//       <div className="container homeContainer">
//         <span className="introText">Hi my name is,</span>
//         <h1 className="title">Arya Parashar</h1>
//         <span className="subTitle">
//           I develope scalable web based applications and software.
//         </span>
//         <p className="homeParagraph">
//           I code within required coding standards and styles to serve the exact
//           need.
//         </p>

//         <div className="lowerHomeSection">
//           <button className="contactBtn">
//             <a href="#contact" className="flex">
//               Contact Me <TbArrowBigRightLine className="icon" />
//             </a>
//           </button>

//           <div className="scrollDiv">
//             <a href="#about" className="flex">
//               <h6 className="scroll">Scroll Down</h6>
//               <TbChevronsDown className="icon" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="rightEmail">
//         <div>
//           <div className="emailAddress">
//             <a href="https://mailto:aryaparashar2001@gmail.com" target="_blank">
//               yogendrajoshi004@gmail.com
//             </a>
//           </div>
//           <div className="line"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;
import React from "react";
import "../../styles/css/home.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { TbArrowBigRightLine } from "react-icons/tb";
import { TbChevronsDown } from "react-icons/tb";

function Home() {
  return (
    <section id="home" className="home section">
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://www.instagram.com/eventplanningservice" target="_blank">
            <AiFillInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/eventplanningservice" target="_blank">
            <AiFillFacebook className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/eventplanningservice" target="_blank">
            <AiFillLinkedin className="icon" />
          </a>
          <div className="line"></div>
        </div>
      </div>

      <div className="container homeContainer">
        <span className="introText">Welcome to</span>
        <h1 className="title">Event Planning Service</h1>
        <span className="subTitle">
          We create memorable events for every occasion.
        </span>
        <p className="homeParagraph">
          From weddings to corporate gatherings, our team handles all the details to ensure your event is a success.
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Get in Touch <TbArrowBigRightLine className="icon" />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#services" className="flex">
              <h6 className="scroll">Explore Services</h6>
              <TbChevronsDown className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="mailto:eventplanningservice@example.com" target="_blank">
              eventplanningservice@example.com
            </a>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
