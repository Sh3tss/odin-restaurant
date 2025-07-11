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
    function loadAndDsiplayContent(pageCreatorFunction, activeButton) {
        const allNavButtons = document.querySelectorAll("nav button");
        allNavButtons.forEach(button => {
            button.classList.remove("active");
        });
        
        contentDiv.innerHTML = "";
        contentDiv.appendChild(pageCreatorFunction());

        if (activeButton) {
            activeButton.classList.add("active");
        }
    }

    //load the home page everytime the page get reloaded or opened
    loadAndDsiplayContent(createHomePage, homeButton);

    //event listeners to each button
    homeButton.addEventListener('click', () =>  {
        loadAndDsiplayContent(createHomePage, homeButton);
    });
    menuButton.addEventListener('click', () => {
        loadAndDsiplayContent(createMenu, menuButton);
    });
    aboutButton.addEventListener('click', () => {
        loadAndDsiplayContent(createAbout, aboutButton);
    });
    complaintsButton.addEventListener('click', () => {
        loadAndDsiplayContent(createComplaints, complaintsButton);
    });
});