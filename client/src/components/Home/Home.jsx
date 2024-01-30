import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      <div className="container-container">
        <Slider {...slickSettings} className="status-container">
          {userStatus.map((user, index) => (
            <div key={index} className="user-status">
              <img src={user.userProfileLink} alt={user.username} width={25} height={25}/>
              <p>{user.username}</p>
            </div>
          ))}
        </Slider>
        <div>Home</div>
      </div>
      <div className="suggestion-container">
        <div>Suggestions</div>
      </div>
    </div>
  );
}

export default Home;