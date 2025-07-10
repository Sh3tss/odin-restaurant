function createComplaints() {
    const complaintsContainer = document.createElement("div");
    complaintsContainer.classList.add("complaints-container");

    const formTitle = document.createElement("h2");
    formTitle.textContent = "Here you can make your Complaint";
    formTitle.classList.add("form-title");

    //that's the form to make the complaint about the restaurant
    const form = document.createElement("form");
    form.classList.add("form");
    form.action = "#";
    form.method = "GET";

    //here will be the label and input fields
    const enterContainer = document.createElement("div");
    enterContainer.classList.add("form-group");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Your Name:";
    nameLabel.htmlFor = "complaintName";
    
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "complaintName";
    nameInput.name = "name";
    nameInput.placeholder = "Karen BlaBlaBla";
    nameInput.required = true;
    
    //text area
    const textContainer = document.createElement("div");
    textContainer.classList.add("form-group");

    const textAreaLabel = document.createElement("label");
    textAreaLabel.textContent = "Your Complaint:";
    textAreaLabel.htmlFor = "complaintMessage";

    const textArea = document.createElement("textarea");
    textArea.id = "complaintMessage";
    textArea.name = "message";
    textArea.rows = 5;
    textArea.placeholder = "Here you can Cry a lot! No one cares.";
    textArea.maxLength = 200;
    textArea.required = true;
    
    //submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "I cried! Please Hear me out :(";
    submitButton.classList.add("submit-btn");

    //alert message when submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Do you really think we care about your complaint. Oh god please!");
        form.reset();
    });

    //others containers
    enterContainer.appendChild(nameLabel); //label of the form
    enterContainer.appendChild(nameInput); //input of the form
    form.appendChild(enterContainer);  //container of the form
    textContainer.appendChild(textAreaLabel);
    textContainer.appendChild(textArea);
    form.appendChild(textContainer);
    form.appendChild(submitButton);

    //main containter
    complaintsContainer.appendChild(formTitle);
    complaintsContainer.appendChild(form);


    return complaintsContainer;
}
export {createComplaints};