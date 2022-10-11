import React from "react";
import Tittle from "../../components/Tittle";
import Project3 from "../../images/Screenshot (48).png";
import Project4 from "../../images/Screenshot (49).png";
import Project5 from "../../images/Screenshot (50).png";
import Project1 from "../../images/Screenshot (81).png";
import Project2 from "../../images/Screenshot (82).png";
import "./Project.styles.css";

const Project = () => {
  const projectDetails = [
    {
      photo: Project1,
      live: "https://luxury-living-cde62.web.app/",
      client: "https://github.com/mehedi-hasan-anik/lockSmith-client",
      server: "https://github.com/mehedi-hasan-anik/lockSmith-server",
      details:
        "This is a very useful website. Users can get this service by card payment and also can give reviews very easily. In dashboard two kinds of access as user or admin. Admin can add new service, can update or delete services, and can update service order status.",
      name: "LockSmith",
    },
    {
      photo: Project2,
      live: "https://bookshop-7a3f4.web.app/",
      client: "https://github.com/mehedi-hasan-anik/bookShop-client",
      server: "https://github.com/mehedi-hasan-anik/bookShop-server",
      details:
        "This is a kind of ecommerce website. You can buy any kind of book together. As an admin you can add any type of book to this website and you can also delete it.",
      name: "BookShop",
    },
    {
      photo: Project3,
      live: "https://gallant-beaver-776ef3.netlify.app/",
      client: "https://github.com/mehedi-hasan-anik/easyRide",
      server: "",
      details:
        "People benefit through this website. You can use this website to go anywhere in Bangladesh very easily and at low cost.",
      name: "EasyRaide",
    },
    {
      photo: Project4,
      live: "https://youthful-snyder-bc2c33.netlify.app/",
      client: "https://github.com/mehedi-hasan-anik/premierLeague",
      server: "",
      details:
        "you can get all details of english premier league teams. And this is a single page application.",
      name: "PremierLeague",
    },
    {
      photo: Project5,
      live: "https://mehedi-hasan-anik.github.io/fancy-slider-main/",
      client: "https://github.com/mehedi-hasan-anik/fancy-slider-main",
      server: "",
      details:
        "This is a very beautiful website. You can search anything on this website. And you will see many pictures as per search. If you want, you can make slider by selecting some pictures",
      name: "Photo Gallery",
    },
  ];

  return (
    <div className="project_wrapper" id="project">
      <Tittle title="My Project" sub_title="who i am" color="white" />
      <div className="container">
        <div className="inner_project_wrapper">
          {projectDetails.map((event) => (
            <div className="card-area">
              <img src={event.photo} alt="" />
              <h3 className="mt-3">{event.name}</h3>
              <p>{event.details}</p>
              <ul>
                <li>
                  <a href={event.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </li>
                <li>
                  <a href={event.client} target="_blank" rel="noreferrer">
                    client
                  </a>
                </li>
                {event.server && (
                  <li>
                    <a href={event.server} target="_blank" rel="noreferrer">
                      server
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
