function createHomePage() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = "Welcome to Our Maybe Not That Good Restaurant";
    homeTitle.classList.add('home-title');

    const description = document.createElement('p');
    description.textContent = "Here you can find some food, it didn't said GOOD food, it's just food so do your choice and please don't call our manager! (PS: he wants to find another job so he doesn't care about your complainments";
    description.classList.add('home-description');

    const hours = document.createElement('h2');
    hours.textContent = "Our Hours:";
    hours.classList.add('home-hours');

    const hoursLegend = document.createElement('p');
    hoursLegend.textContent = "If our restaurant is still operating or opened";
    hoursLegend.classList.add('hours-legend');

    const location = document.createElement('h2');
    location.textContent = "Location:";
    location.classList.add('home-location');

    const locationDescription = document.createElement('p');
    locationDescription.textContent = "Your DON'T want to come here to eat. Please GO AWAY";
    locationDescription.classList.add('location-description');

    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(description);
    homeContainer.appendChild(hours);
    homeContainer.appendChild(hoursLegend);
    homeContainer.appendChild(location);
    homeContainer.appendChild(locationDescription);

    return homeContainer;
}
export {createHomePage};