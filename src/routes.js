let posts = [
  {
    title: "Nirvan Node",
    contents: "Nirvan is learning node at 5am in morning",
  },
  {
    title: "Chalapati Node",
    contents: "Chalapati is learning node at 5am in morning but he comes late",
  },
  {
    title: "Umang Node",
    contents: "Umang was sleeping",
  },
];

const postRoutes = (server) => {
  server.get("/", (req, res) => {
    res.send(posts);
  });
  server.post("/post", (req, res) => {
    const { title, contents } = req.body;
    // validation that title and content are both there
    let currPost = { title, contents };
    if (!title || title.length == 0) {
      return res.status(400).json({ fail: "ek dum fail" });
    }
    if (!contents || contents.length == 0) {
      return res.status(400).json({ fail: "ek dum fail" });
    }
    posts.push(currPost);
    res.status(201).json({ success: true, postAdded: currPost });
  });

  server.get("/post", (req, res) => {
    let { term } = req.query;
    let filteredPosts = posts.filter((post) => {
      if (post.title.includes(term) || post.contents.includes(term)) {
        return true;
      }
    });
    res.status(200).json(filteredPosts);
  });
  server.delete("/post/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((post, idx) => id != idx);
    res.status(200).json(posts);
  });

  server.put("/post/:id", (req, res) => {
    let { id } = req.params;
    let { title, contents } = req.body;
    let postToEdit = posts[id];
    if (title) postToEdit.title = title;
    if (contents) postToEdit.contents = contents;
    res.status(202).json(posts);
  });
};

module.exports = postRoutes;
