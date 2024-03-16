export default function goods() {
  function insertBooks(books) {
    let str = `<div class="wrap">`;
    for (let i = 0; i < books.length; i++) {
      str += `<div class="bookWrap">`;
      str += `<div class="image"><img src="${books[i].imageCover}" /></div>`;
      str += `<h2>${books[i].title}</h2>`;
      str += `<p>${books[i].author}</p>`;
      str += `</div>`;
    }
    str += `</div>`;
    document.getElementById("books").innerHTML = str;
  }
  async function loadBooks() {
    let url = "books.json";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    insertBooks(data);
  }
  //loadBooks();
  document.getElementById("load").addEventListener("click", loadBooks);
}

