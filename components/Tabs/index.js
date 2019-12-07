/* jshint esversion: 6*/

// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
// function topicCard(){
//   const topicDiv = document.createElement("div");
//   topicDiv.classList.add("tab");
//   topicDiv.textContent = item;
//
//   return topicDiv;
//
//
// }


const topicsClass = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response.data.topics);
    const object = response.data.topics;


    response.data.topics.forEach(item => {
      function topicCard(){
        const topicDiv = document.createElement("div");
        topicDiv.classList.add("tab");
        topicDiv.textContent = item;

        return topicDiv;


      }
      let newCard = topicCard(item);
      topicsClass.appendChild(newCard);
    });

});
