// Check that the file is connected
console.log("script.js is working");

// Dark mode button
var darkButton = document.getElementById("dark-btn");

darkButton.onclick = function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    darkButton.textContent = "Dark mode";
  } else {
    document.body.classList.add("dark");
    darkButton.textContent = "Light mode";
  }
};

// Skills list from an array
var skills = ["HTML", "CSS", "JavaScript", "Git and GitHub"];
var skillsList = document.querySelector(".skills");

if (skillsList) {
  for (var i = 0; i < skills.length; i++) {
    var item = document.createElement("li");
    item.textContent = skills[i];
    skillsList.appendChild(item);
  }
}

// Like buttons on the projects
var likeButtons = document.querySelectorAll(".like-btn");

for (var j = 0; j < likeButtons.length; j++) {
  likeButtons[j].onclick = function () {
    var counter = this.nextElementSibling;
    var number = Number(counter.textContent);
    counter.textContent = number + 1;
  };
}

// Add a task to the list
var addButton = document.getElementById("add-btn");

if (addButton) {
  var taskInput = document.getElementById("task-input");
  var taskList = document.getElementById("task-list");

  addButton.onclick = function () {
    var task = taskInput.value;

    if (task === "") {
      return;
    }

    var newItem = document.createElement("li");
    newItem.textContent = task;
    taskList.appendChild(newItem);
    taskInput.value = "";
  };
}

// Contact form
var contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.onsubmit = function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var output = document.getElementById("form-message");

    if (name === "") {
      output.textContent = "Please enter your name.";
      return;
    }

    if (email === "" || email.indexOf("@") === -1) {
      output.textContent = "Please enter a valid email.";
      return;
    }

    if (message === "") {
      output.textContent = "Please write a message.";
      return;
    }

    output.textContent = "Thank you! Your message was sent.";
    contactForm.reset();
  };
}
