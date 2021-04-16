const axios = require("axios");
const filesystem = require("fs");

// Make request using to the api using axios,
//you can replace 4 with another number to get another post
axios
  .get("http://jsonplaceholder.typicode.com/posts/5")
  .then((response) => {
    // console.log(response.data);
    filesystem.writeFile(
      "./result/post.json",
      JSON.stringify(response.data, null, 2),
      function (err) {
        console.log(err);
      }
    );
  })
  .catch((err) => {
    console.log(err);
  });
