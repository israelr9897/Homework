// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "x-api-key": "reqres-free-v1",
//   },
//   body: JSON.stringify({
//     name: "israel",
//     job: "student",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// async function fetchData(url) {
//   const userRespons = await fetch(url + "/1").then(response => response.json());
//   const userId = await fetch(url + `users/${userRespons.userId}`).then(response => response.json());
//   console.log(userId);
// }
// fetchData("https://jsonplaceholder.typicode.com");

// GET /api/data – Default returns 1 item
// GET /api/data?limit=5 – Returns 5 items (max 10 without API key)
// GET /api/data?limit=50&api_key=xxx – Returns up to 100 with valid key
// GET /api/data?id=2 – Filters by ID
// POST /api/data – Add new item
// PUT /api/data/:id – Update item by ID
// DELETE /api/data/:id – Delete item
// POST /api/generate-key – Generate new API key

function ApiData() {
    fetch("https://api-kodkod.onrender.com/api/data?limit=500&api_key=xxx")
      .then((res) => res.json())
      .then((data) => console.log(data));
    fetch("https://api-kodkod.onrender.com/api/data?id=9897")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  for (let i = 0; i < 30; i++) {
    fetch("https://api-kodkod.onrender.com/api/data", {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            id : i,
            name : "lnandoooo"
        })
    })
    .then(res => res.json())
    .then(d => console.log(d))
  }
}
ApiData();
