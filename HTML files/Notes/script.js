let notes = [];

document.getElementById('toggleTheme').onclick = () => {
  document.body.classList.toggle('dark');
};

document.getElementById('search').addEventListener('input', e => {
  renderNotes(e.target.value.toLowerCase());
});

function saveNote() {
  const title = document.getElementById('noteTitle').value.trim();
  const body = document.getElementById('noteBody').innerHTML.trim();
  const imageInput = document.getElementById('imageInput');
  let image = '';

  if (imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function () {
      image = reader.result;
      notes.push({ title, body, image });
      renderNotes();
      resetForm();
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    notes.push({ title, body, image });
    renderNotes();
    resetForm();
  }
}

function renderNotes(filter = '') {
  const container = document.getElementById('notesContainer');
  container.innerHTML = '';

  notes.filter(n => n.title.toLowerCase().includes(filter) || n.body.toLowerCase().includes(filter)).forEach((note, index) => {
    const div = document.createElement('div');
    div.className = 'note';
    div.innerHTML = `
      <h3>${note.title}</h3>
      <div>${note.body}</div>
      ${note.image ? `<img src="${note.image}" />` : ''}
      <button onclick="editNote(${index})">Edit</button>
      <button onclick="deleteNote(${index})">Delete</button>
      <button onclick="exportText(${index})">Export TXT</button>
      <button onclick="exportPDF(${index})">Export PDF</button>
    `;
    container.appendChild(div);
  });
}

function resetForm() {
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteBody').innerHTML = '';
  document.getElementById('imageInput').value = '';
}

function editNote(index) {
  const note = notes[index];
  document.getElementById('noteTitle').value = note.title;
  document.getElementById('noteBody').innerHTML = note.body;
  deleteNote(index);
}

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

function exportText(index) {
  const note = notes[index];
  const blob = new Blob([note.title + "\n" + note.body], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = note.title + '.txt';
  link.click();
}

function exportPDF(index) {
  const { jsPDF } = window.jspdf;
  const note = notes[index];
  const doc = new jsPDF();
  doc.text(note.title, 10, 10);
  doc.fromHTML(note.body, 10, 20);
  doc.save(note.title + '.pdf');
}
