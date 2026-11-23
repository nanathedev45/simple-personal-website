// Feature 1: remember the chosen theme
const themeButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.dataset.theme = 'dark';
  if (themeButton) themeButton.textContent = 'Light mode';
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    if (isDark) {
      delete document.documentElement.dataset.theme;
      localStorage.setItem('theme', 'light');
      themeButton.textContent = 'Dark mode';
    } else {
      document.documentElement.dataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
      themeButton.textContent = 'Light mode';
    }
  });
}

// Feature 2: notes that stay saved in this browser
const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const notesList = document.getElementById('notes-list');
const notesEmpty = document.getElementById('notes-empty');

if (noteForm && notesList) {
  let notes = [];
  try {
    notes = JSON.parse(localStorage.getItem('notes')) || [];
  } catch (error) {
    notes = [];
  }

  function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  function renderNotes() {
    notesList.textContent = '';
    notes.forEach((note, index) => {
      const item = document.createElement('li');

      const text = document.createElement('span');
      text.textContent = note;

      const remove = document.createElement('button');
      remove.type = 'button';
      remove.textContent = 'Remove';
      remove.setAttribute('aria-label', 'Remove note: ' + note);
      remove.addEventListener('click', () => {
        notes.splice(index, 1);
        saveNotes();
        renderNotes();
      });

      item.append(text, remove);
      notesList.append(item);
    });

    notesEmpty.hidden = notes.length > 0;
  }

  noteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = noteInput.value.trim();
    if (!value) return;
    notes.push(value);
    noteInput.value = '';
    saveNotes();
    renderNotes();
  });

  renderNotes();
}

// Small extra: show a message instead of reloading the contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('contact-status').textContent = 'Thanks! This demo form does not send real email.';
    contactForm.reset();
  });
}
