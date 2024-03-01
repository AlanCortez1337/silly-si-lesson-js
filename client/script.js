document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = formData.get('inputData');
  
    // Make GET request to Express.js endpoint
    fetch('http://localhost:3000/lib')
      .then(response => response.json())
      .then(async data => {
          
          const books = await data;
          
            let html = '<h3> BOOKS </h3>';

          books.map((book) => {
            html += `<p><b>ISBN:</b> ${book.ISBN} <b>Name:</b>${book.bookname} <b>Price:</b> ${book.price} <b>genre:</b> ${book.genre}</p>`
        })
        document.getElementById('response').innerHTML = html;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  