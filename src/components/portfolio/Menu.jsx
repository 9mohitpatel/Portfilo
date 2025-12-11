//src/components/Portfolio/Menu.js

import Work1 from "../../assets/ridesahr.png";
import Work2 from "../../assets/e learning.png";
import Work3 from "../../assets/flower.png";

const Menu = [
  {
    id: 1,
    image: Work1,
    title: "RideShare – Real-Time Ride Booking System",
    category: ["Frontend", "Backend", "React"],
    url: "https://your-rideshare-demo-link.com",  // optional deployed link
    repositoryUrl: "https://github.com/9mohitpatel/RideShare"
  },
  {
    id: 2,
   image: Work2,
    title: "E-Learning Platform",
    category: ["Backend", "Java", "Servlets"],
    url: "https://your-elearning-demo-link.com",
    repositoryUrl: "https://github.com/9mohitpatel/E-Learning-Platform"
  },
  {
    id: 3,
   image: Work3,
    title: "Event Management System",
    category: ["Backend", "Spring Boot"],
    url: "https://your-event-demo-link.com",
    repositoryUrl: "https://github.com/9mohitpatel/Event-Management-System"
  }
];

export default Menu;
