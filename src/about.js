function createAbout() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About Our Restaurant and Services";
    aboutTitle.classList.add('about-title');

    const aboutDescription = document.createElement('p');
    aboutDescription.textContent = "In our restaurant no one have rights, here the waiter can be rude with you and you can't complaim about it, but you can't be rude with our team, we work too much to serve you the worst service and the worst food you can find in this country. So just ask for your plate eat, or not, and go away, we don't like you. Our slogan is: Never come back after the first time!"
    aboutDescription.classList.add('about-description');

    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutDescription);

    return aboutContainer;
}
export {createAbout};