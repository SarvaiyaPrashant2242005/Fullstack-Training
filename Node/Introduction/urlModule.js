// const myUrl = "https://www.youtube.com/search?q=marwadi&p=54321";

// const url = require('url');
// console.log(url.parse(myUrl));

const myUrl = new URL("https://www.youtube.com/search?q=marwadi&p=54321");

console.log(myUrl.hostname);