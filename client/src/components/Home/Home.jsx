import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Suggestions from "./Suggestions";

function Home() {
  const userStatus = [
    {
      username: "raobaba",
      userProfileLink: "https://avatars.githubusercontent.com/u/99542983?v=4",
    },
    {
      username: "raobaba",
      userProfileLink: "https://avatars.githubusercontent.com/u/99542983?v=4",
    },
    {
      username: "raobaba",
      userProfileLink: "https://avatars.githubusercontent.com/u/99542983?v=4",
    },
    {
      username: "raobaba",
      userProfileLink: "https://avatars.githubusercontent.com/u/99542983?v=4",
    },
    {
      username: "raobaba",
      userProfileLink: "https://avatars.githubusercontent.com/u/99542983?v=4",
    },
    {
      username: "raobaba",
      userProfileLink: "https://avatars.githubusercontent.com/u/99542983?v=4",
    },
    {
      username: "raobaba",
      userProfileLink: "https://avatars.githubusercontent.com/u/99542983?v=4",
    },
    {
      username: "raobaba",
      userProfileLink: "https://avatars.githubusercontent.com/u/99542983?v=4",
    },
    {
      username: "raobaba",
      userProfileLink: "https://avatars.githubusercontent.com/u/99542983?v=4",
    },
  ];

  const slickSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      <div className="container-container">
        <div className="status-item">
          <Slider {...slickSettings} className="status-container">
            {userStatus.map((user, index) => (
              <div key={index} className="user-status">
                <img
                  src={user.userProfileLink}
                  alt={user.username}
                  width={25}
                  height={25}
                />
                <p>{user.username}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="home-item">HomeRa</div>
      </div>
      <div className="suggestion-container">
        <div><Suggestions/></div>
      </div>
    </div>
  );
}

export default Home;