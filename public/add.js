const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    word: form.name.value,
    meaning: form.about.value,
  }

  
  await fetch(`http://localhost:3000/words/`, {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('./index.html')
}

form.addEventListener('submit', createPost);