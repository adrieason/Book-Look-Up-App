

//Listening for a person to click button. Once it's clicked the text from the text box is input in the getText function 
document.querySelector('button').addEventListener('click', getText)



function getText (){ //this is the getText function that runs on click 

    let isbn = document.querySelector('input').value //isbn of book teacher is trying to

fetch(`https://openlibrary.org/isbn/${isbn}.json`) 

    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h3').innerText = data.title
      let author = data.authors[0].key
      console.log(author)
      document.querySelector('h2').innerHTML = `<img src="https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg">`

      fetch(`https://openlibrary.org${author}.json`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.name)
        document.querySelector('h4').innerText = data.name
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }



/*

  db.com/api/v2/json/[your key]/book/1931498717

  http://openlibrary.org/api/books?bibkeys=ISBN:1931498717&jscmd=details&format=json

  http://covers.openlibrary.org/b/isbn/1931498717-M.jpg
  */