import Home from '../assets/icons/home.svg';
import Wallpaper from "../assets/icons/wallpaper.svg"
import People from "../assets/icons/people.svg";
import Bookmark from "../assets/icons/bookmark.svg"
import Create from "../assets/icons/gallery-add.svg"

export const sidebarLinks = [
    {
      imgURL: Home,
      route: "/",
      label: "Home",
    },
    {
      imgURL: Wallpaper,
      route: "/explore",
      label: "Explore",
    },
    {
      imgURL: People,
      route: "/all-users",
      label: "People",
    },
    {
      imgURL: Bookmark,
      route: "/saved",
      label: "Saved",
    },
    {
      imgURL: Create,
      route: "/create-post",
      label: "Create Post",
    },
  ];
  
  export const bottombarLinks = [
    {
      imgURL: Home,
      route: "/",
      label: "Home",
    },
    {
      imgURL: Wallpaper,
      route: "/explore",
      label: "Explore",
    },
    {
      imgURL: Bookmark,
      route: "/saved",
      label: "Saved",
    },
    {
      imgURL: Create,
      route: "/create-post",
      label: "Create",
    },
  ];