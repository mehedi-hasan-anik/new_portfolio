import React from "react";
import Tittle from "../../components/Tittle";
import Project4 from "../../images/1st.png";
import Project5 from "../../images/2nd.png";
import Project1 from "../../images/3rd.png";
import Project2 from "../../images/4th.png";
import Project3 from "../../images/5th.png";
import Project6 from "../../images/Screenshot (49).png";
import "./Project.styles.css";

const Project = () => {
  const projectDetails = [
    {
      photo: Project1,
      live: "https://bus365demo.bdtask-demo.com/",
      details: `To have an opportunity to purchase bus tickets on this website for passengers. Using this
        website, they will be able to buy tickets by paying online or offline very easily. passengers will
        get a chance to back the ticket bought within a certain time also`,
      name: "Bus365",
    },
    {
      photo: Project2,
      live: "https://foodcorner-7fde5.web.app/",
      client: "https://github.com/mehedi-hasan-anik/food-recipes",
      details: `food corner is a recipe exploring website with a clean, simple, and user-friendly UI. At home
        page, it has a simple introduction and exploring option. visitors can simply change its theme
        color And can get all the recipe information by clicking the view recipe button. In the top chief
        section, we can browse all the top chief and their recipe`,
      name: "FoodCorner",
    },
    {
      photo: Project3,
      live: "https://restaurant-18eb6.web.app/",
      client: "https://github.com/mehedi-hasan-anik/restaurant",
      details: `It's a website based on restaurants. Know about our restaurants. Where you can book a table,
        order a special menu. Users can create an account via login/registration method`,
      name: "Gericht",
    },

    {
      photo: Project4,
      live: "https://luxury-living-cde62.web.app/",
      client: "https://github.com/mehedi-hasan-anik/lockSmith-client",
      server: "https://github.com/mehedi-hasan-anik/lockSmith-server",
      details:
        "This is a very useful website. Users can get this service by card payment and also can give reviews very easily. In dashboard two kinds of access as user or admin. Admin can add new service, can update or delete services, and can update service order status.",
      name: "LockSmith",
    },
    {
      photo: Project5,
      live: "https://bookshop-7a3f4.web.app/",
      client: "https://github.com/mehedi-hasan-anik/bookShop-client",
      server: "https://github.com/mehedi-hasan-anik/bookShop-server",
      details:
        "This is a kind of ecommerce website. You can buy any kind of book together. As an admin you can add any type of book to this website and you can also delete it.",
      name: "BookShop",
    },

    {
      photo: Project6,
      live: "https://youthful-snyder-bc2c33.netlify.app/",
      client: "https://github.com/mehedi-hasan-anik/premierLeague",
      server: "",
      details:
        "you can get all details of english premier league teams. And this is a single page application.",
      name: "PremierLeague",
    },
  ];

  return (
    <div className="project_wrapper" id="project">
      <Tittle title="My Project" sub_title="who i am" color="white" />
      <div className="container">
        <div className="inner_project_wrapper">
          {projectDetails.map((event) => (
            <div className="card-area">
              <img src={event?.photo} alt="" />
              <h3 className="mt-3">{event?.name}</h3>
              <p>{event.details}</p>
              <ul>
                <li>
                  <a href={event?.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </li>
                {event?.client && (
                  <li>
                    <a href={event?.client} target="_blank" rel="noreferrer">
                      client
                    </a>
                  </li>
                )}

                {event?.server && (
                  <li>
                    <a href={event?.server} target="_blank" rel="noreferrer">
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
