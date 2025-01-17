// import React from "react";
// import "../../styles/css/projects.css";
// import { AiFillYoutube } from "react-icons/ai";
// import { FiGithub } from "react-icons/fi";
// import img6 from "../../Assets/img6.png";

// const data = [
//   {
//     id: 1,
//     image: img6,
//     demo: "",
//     liveLink: "https://main--benevolent-licorice-43e33e.netlify.app/",
//     github: "https://github.com/yogendra-joshi/VanLife",
//     title: "VanLife",
//     desc: "Rent the perfect van to make your perfect road trip.",
//     tech1: "Html",
//     tech2: "CSS",
//     tech3: "JavaScript",
//     tech4: "React",
//   },
// ];

// export default function Project() {
//   return (
//     <section id="projects" className="projects container section">
//       <div className="sectionTitle">
//         <span className="titleNumber">03.</span>
//         <h5 className="titleText">
//           Porjects
//           <div className="underline">
//             <span></span>
//           </div>
//         </h5>
//       </div>

//       <div className="projectContainer grid">
//         {data.map(
//           ({
//             id,
//             github,
//             image,
//             liveLink,
//             title,
//             desc,
//             demo,
//             tech1,
//             tech2,
//             tech3,
//             tech4,
//           }) => {
//             return (
//               <div key={id} className="singleProject">
//                 <div className="externalLinks flex">
//                   <div className="youtubeIcon">
//                     <a href={demo} target="_blank">
//                       <AiFillYoutube className="icon" />
//                     </a>
//                   </div>
//                   <div className="githubIcon">
//                     <a href={github} target="_blank">
//                       <FiGithub className="icon" />
//                     </a>
//                   </div>
//                 </div>

//                 <div className="imgDiv">
//                   <a href={liveLink} target="_blank">
//                     <img src={image} alt={title} />
//                   </a>
//                 </div>

//                 <div className="projectTitle">
//                   <h3>{title}</h3>
//                 </div>

//                 <div className="desc">{desc}</div>

//                 <div className="technologies flex">
//                   <small>{tech1}</small>
//                   <small>{tech2}</small>
//                   <small>{tech3}</small>
//                   <small>{tech4}</small>
//                 </div>
//               </div>
//             );
//           }
//         )}
//       </div>
//     </section>
//   );
// }

import React from "react";
import "../../styles/css/projects.css";
import { AiFillYoutube } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import img6 from "../../Assets/img6.png"; // This can be changed to relevant images of your events

const data = [
  {
    id: 1,
    image: img6,
    demo: "", // Use this if you have video content; otherwise, you can remove this section
    liveLink: "https://example.com/event1", // Update to a link showcasing the event
    github: "", // Can be removed if not applicable
    title: "Corporate Conference",
    desc: "A high-profile corporate conference with key industry leaders.",
    tech1: "Event Management",
    tech2: "Logistics",
    tech3: "Coordination",
    tech4: "Design",
  },
  {
    id: 2,
    image: img6,
    demo: "", // Use this if you have video content; otherwise, you can remove this section
    liveLink: "https://example.com/event2", // Update to a link showcasing the event
    github: "", // Can be removed if not applicable
    title: "Wedding Celebration",
    desc: "A beautifully organized wedding that catered to every detail.",
    tech1: "Event Planning",
    tech2: "Vendor Coordination",
    tech3: "Guest Management",
    tech4: "Theming",
  },
  // Add more events or services as needed
];

export default function Project() {
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Our Events
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            github,
            image,
            liveLink,
            title,
            desc,
            demo,
            tech1,
            tech2,
            tech3,
            tech4,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  {demo && (
                    <div className="youtubeIcon">
                      <a href={demo} target="_blank" rel="noopener noreferrer">
                        <AiFillYoutube className="icon" />
                      </a>
                    </div>
                  )}
                  {github && (
                    <div className="githubIcon">
                      <a href={github} target="_blank" rel="noopener noreferrer">
                        <FiGithub className="icon" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">{desc}</div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
