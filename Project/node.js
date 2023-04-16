const http = require("http");
const reviews = [];
const users = [
  {
    _id: "634b869a4c258ebcdd8a8af7",
    name: "Ned Stark",
    email: "sean_bean@gameofthron.es",
    password: "$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1Vu",
    __v: 0,
  },
  {
    _id: "634ba6b6044fe324bada04a7",
    name: "Tywin Lannister",
    email: "charles_dance@gameofthron.es",
    password: "$2b$12$/i04T5yEJvmsBhF0Jd.kJOk3ZhRzezbTU7ASEM5o43Xxsa4o6IgEy",
    __v: 0,
  },
  {
    _id: "634ba6d5044fe324bada04aa",
    name: "Tyrion Lannister",
    email: "peter_dinklage@gameofthron.es",
    password: "$2b$12$xtHwQNXYlQzP2REobUDlzuQimjzBlXrTx1GnwP.xkfULeuuUpRxa2",
    __v: 0,
  },
];

const server = http.createServer(function (req, res) {
  if (req.url === "/reviews" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(JSON.stringify(reviews));
    res.end();
  } else if (req.url === "/reviews" && req.method === "POST") {
    const newReview = {
      user_id: "user_id",
      review: "reviews",
      movie_id: "movie_id",
    };
    reviews.push(newReview);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(JSON.stringify(reviews));
    res.end();
  } else res.end("Invalid");
});
server.listen(8060, () => {
  console.log("server running");
});
app.get("/v1/reviews", (req, res) => {
  res.send(reviews);
});
app.post("/v1/review", (req, res) => {
  const newReview = {
    user_id: "user_id",
    review: "review",
    movie_id: "movie_id",
  };
  reviews.push(newReview);
  res.send(reviews);
});
app.get("/v1/movies", (req, res) => {
  res.send(movies);
});
app.post("/v1/movies", (req, res) => {
  console.log(req.body);
  const newMovie = {
    _id: randomUUID(),
    plot: req.body.plot,
    poster: req.body.poster,
    title: req.body.title,
    rated: req.body.rated,
  };
  movies.push(newMovie);
  res.send(newMovie);
});
//find all  rate = TV-G rated movies
app.get("/v1/movies/classification", (req, res) => {
  const rated = req.query.rated;
  const ratedMovies = movies.filter((movie) => movie.rated == rated);
  res.status(200).send(ratedMovies);
});
app.listen(8061, () => {
  console.log("Sever running on http://localhost:8061/reviews");
});
