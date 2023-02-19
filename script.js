// Load the page content when the page is ready
document.addEventListener('DOMContentLoaded', function() {
  loadContent();
});

// Load the page content from a JSON file
function loadContent() {
  var request = new XMLHttpRequest();
  request.open('GET', 'content.json');
  request.responseType = 'json';
  request.onload = function() {
    var content = request.response;
    populateHeader(content);
    populateMain(content);
    populateFooter(content);
  };
  request.send();
}

// Populate the header section with data
function populateHeader(content) {
  var header = document.querySelector('header');
  var title = document.createElement('h1');
  title.textContent = content.header.title;
  header.appendChild(title);
  var nav = document.createElement('nav');
  var ul = document.createElement('ul');
  content.header.nav.forEach(function(item) {
    var li = document.createElement('li');
    var link = document.createElement('a');
    link.textContent = item.label;
    link.href = item.url;
    li.appendChild(link);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  header.appendChild(nav);
}

// Populate the main section with data
function populateMain(content) {
  var main = document.querySelector('main');
  content.main.sections.forEach(function(sectionData) {
    var section = document.createElement('section');
    var title = document.createElement('h2');
    title.textContent = sectionData.title;
    section.appendChild(title);
    if (sectionData.description) {
      var description = document.createElement('p');
      description.textContent = sectionData.description;
      section.appendChild(description);
    }
    if (sectionData.items) {
      var ul = document.createElement('ul');
      sectionData.items.forEach(function(item) {
        var li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
      });
      section.appendChild(ul);
    }
    main.appendChild(section);
  });
  var form = document.createElement('form');
  var nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Your name');
  form.appendChild(nameInput);
  var emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('placeholder', 'Your email');
  form.appendChild(emailInput);
  var messageInput = document.createElement('textarea');
  messageInput.setAttribute('placeholder', 'Your message');
  form.appendChild(messageInput);
  var submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Send message');
  form.appendChild(submitButton);
  main.appendChild(form);
}

// Populate the footer section with data
function populateFooter(content) {
  var footer = document.querySelector('footer');
  var text = document.createElement('p');
  text.innerHTML = content.footer.text;
  footer.appendChild(text);
}
