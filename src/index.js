import { createHomePage } from "./home";
import { createMenu } from "./menu";
import { createAbout } from "./about";
import { createComplaints } from "./complaints";
import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById("content");
    const homeButton = document.getElementById("homebtn");
    const menuButton = document.getElementById("menubtn");
    const aboutButton = document.getElementById("aboutbtn");
    const complaintsButton = document.getElementById("complaintsbtn");

    //function to help clean the content and reaload
    function loadAndDsiplayContent(pageCreatorFunction) {
        contentDiv.innerHTML = "";
        contentDiv.appendChild(pageCreatorFunction());
    }

    //load the home page everytime the page get reloaded or opened
    loadAndDsiplayContent(createHomePage);

    //event listeners to each button
    homeButton.addEventListener('click', () =>  {
        loadAndDsiplayContent(createHomePage);
    });
    menuButton.addEventListener('click', () => {
        loadAndDsiplayContent(createMenu);
    });
    aboutButton.addEventListener('click', () => {
        loadAndDsiplayContent(createAbout);
    });
    complaintsButton.addEventListener('click', () => {
        loadAndDsiplayContent(createComplaints);
    });
});