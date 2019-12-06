/* jshint esversion: 6 */
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// function articleCard(object){
//
// const card = document.createElement("div"),
//   headline = document.createElement("div"),
//   author= document.createElement("div"),
//   imageContainer  = document.createElement("div"),
//   image = document.createElement("img"),
//   spanAuthor = document.createElement("span");
//
//   card.classList.add("card");
//   headline.classList.add("headline");
//   author.classList.add("author");
//   imageContainer.classList.add("img-container");
//
//   //content
//   headline.textContent = object.headline;
//   image.src = object.authorPhoto;
//   spanAuthor.textContent = object.authorName;
//
// card.appendChild(headline);
// card.appendChild(author);
// author.appendChild(imageContainer);
// author.appendChild(spanAuthor);
// imageContainer.appendChild(image);
//
// return card;
//
//
//
// }


const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    function articleCard(object){

    const card = document.createElement("div"),
      headline = document.createElement("div"),
      author= document.createElement("div"),
      imageContainer  = document.createElement("div"),
      image = document.createElement("img"),
      spanAuthor = document.createElement("span");

      card.classList.add("card");
      headline.classList.add("headline");
      author.classList.add("author");
      imageContainer.classList.add("img-container");

      //content
      headline.textContent = object.headline;
      image.src = object.authorPhoto;
      spanAuthor.textContent = object.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    author.appendChild(spanAuthor);
    imageContainer.appendChild(image);

    return card;

    }

    console.log(Object.values(response.data.articles));

    //bootstap
    articles = Object.values(response.data.articles.bootstrap);
    articles.forEach(item => {
        let newOne = articleCard(item);
        cardsContainer.appendChild(newOne);

    });

    //js
    articlesTwo = Object.values(response.data.articles.javascript);
    articlesTwo.forEach(item => {
        let newOne = articleCard(item);
        cardsContainer.appendChild(newOne);

    });

    //Tech
    articlesThree = Object.values(response.data.articles.technology);
    articlesThree.forEach(item => {
        let newOne = articleCard(item);
        cardsContainer.appendChild(newOne);

    });

    //jquery
    articlesFour = Object.values(response.data.articles.jquery);
    articlesFour.forEach(item => {
        let newOne = articleCard(item);
        cardsContainer.appendChild(newOne);

    });

    //node.js
    articlesFive = Object.values(response.data.articles.node);
    articlesFive.forEach(item => {
        let newOne = articleCard(item);
        cardsContainer.appendChild(newOne);

    });



  });
