
const getWords = async () => {
    // let uri = `http://localhost:3000/words?_sort=word&_order=asc`;
    let uri = 'https://wordslistapp.herokuapp.com/words/?_sort=name&_order=asc';
    const res = await fetch(uri);
    const words = await res.json();

    // console.log(words);
    
    
    words.forEach(i => {
        var link = document.getElementById('links');
        let template = `
            <div class="fixed-content card " data-aos="fade-up">
                <h2>${i.word}</h2>
                <p>${i.meaning} </p>
            </div>
        `;

        // link.innerHTML = template;
        link.insertAdjacentHTML('beforeend', template);
    });

}

window.addEventListener('DOMContentLoaded', () => getWords());

// getWords();
