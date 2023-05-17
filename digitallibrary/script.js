const books = [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "Animal Farm",
    "The Catcher in the Rye",
    "Brave New World",
    "Lord of the Flies",
    "Of Mice and Men",
    "The Grapes of Wrath",
  ];
  
  const library = {
    "The Great Gatsby": true,
    "To Kill a Mockingbird": true,
    "1984": true,
    "Pride and Prejudice": true,
    "Animal Farm": true,
    "The Catcher in the Rye": false,
    "Brave New World": true,
    "Lord of the Flies": true,
    "Of Mice and Men": true,
    "The Grapes of Wrath": false,
  };
  
  const searchInput = document.getElementById('search-input');
  const resultList = document.getElementById('result-list');
  
  function showSuggestions() {
    const userInput = searchInput.value.toLowerCase();
    const suggestions = books.filter(book => book.toLowerCase().includes(userInput));
    resultList.innerHTML = "";
    suggestions.forEach(book => {
      const li = document.createElement('li');
      li.innerText = book;
      if (library[book]) {
        li.classList.add('present');
        li.innerText += ' - Present';
      } else {
        li.classList.add('not-present');
        li.innerText += ' - Not Present';
      }
      resultList.appendChild(li);
    });
  }
  
  searchInput.addEventListener('input', showSuggestions);
  