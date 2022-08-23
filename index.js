const fetch = require("node-fetch");

const getPosts = async (page, username) => {
  const query = `
    query GetUserArticles($page: Int! , $username: String!) {
        user(username: $username) {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;
  const variables = { page: page, username: username };
  //const user = { username: "bawanthathilan" };
  const response = await fetch("https://api.hashnode.com", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  const ApiResponse = await response.json();

  return ApiResponse.data.user.publication.posts;
};

module.exports = { getPosts };
