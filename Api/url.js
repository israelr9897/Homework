import {URL} from "url";

const myUrl = new URL("http://localhost:3000/search?term=nodejs&amp;limit=10");
console.log(myUrl.pathname); // "/search"
console.log(myUrl.searchParams.get("term")); // "nodejs"