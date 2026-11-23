// Button for dark mode
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

// Contact form message
var contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.onsubmit = function (event) {
    event.preventDefault();
    document.getElementById("form-message").textContent = "Thank you! I will reply soon.";
  };
}
