db.movies.updateOne(
  { title: "Batman" },
  {
    $pop: {
      category: {
        $in : ["action"]
      }
    }
  }
);
