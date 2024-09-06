// import React from "react";
// import "../../styles/css/about.css";
// import { TbCloudDownload } from "react-icons/tb";
// import img from "../../Assets/about-img.png";

// function About() {
//   return (
//     <section id="about" className="about section container">
//       <div className="sectionTitle">
//         <span className="titleNumber">01.</span>
//         <h5 className="titleText">
//           About Me
//           <div className="underline">
//             <span></span>
//           </div>
//         </h5>
//       </div>

//       <div className="sectionContent grid">
//         <div className="textSection">
//           <h4>
//             I'm a success-driven, determined Web developer. I have experience
//             using HTML Sass Javascript and PHP to build accessible
//             component-based web pages and systems. <br /> Ability to deliver
//             quality results while collaborating in rapidly changing work
//             environments and team compositions. <br /> A passionate person
//             willing to learn more technologies to become a better developer than
//             i was yesterday. So determined and result orietend.
//           </h4>
//           <div className="aboutBtn">
//             <a
//               href="Yogendra Resume.pdf"
//               download="Yogendra Joshi.pdf"
//               className="flex"
//             >
//               Download CV <TbCloudDownload className="icon" />
//             </a>
//           </div>
//         </div>

//         <div className="aboutImgDiv">
//           <img src={img} alt="Yogendra Joshi" className="aboutImg" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
import React from "react";
import "../../styles/css/about.css";
import { TbCloudDownload } from "react-icons/tb";
import img from "../../Assets/about-img.png"; // Replace this with a relevant image for event planning

function About() {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          About Us
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            At Event Planning Service, we specialize in organizing and managing
            various events to create unforgettable experiences. Whether it's a
            corporate conference, wedding, birthday celebration, or community
            gathering, our team handles every detail with precision and care.
            <br /> We assist with venue selection, budget management, vendor
            coordination, guest invitations, entertainment, and overall event
            design. Our goal is to alleviate stress for our clients and deliver
            seamless, enjoyable events for attendees.
            <br /> Let us bring your vision to life and ensure your event is a
            memorable success.
          </h4>
          <div className="aboutBtn">
            <a
              href="Event_Planning_Service_Brochure.pdf"
              download="Event_Planning_Service_Brochure.pdf"
              className="flex"
            >
              Download Brochure <TbCloudDownload className="icon" />
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={img} alt="Event Planning" className="aboutImg" />
        </div>
      </div>
    </section>
  );
}

export default About;
