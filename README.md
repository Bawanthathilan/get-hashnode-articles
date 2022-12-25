[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/bawanthathilan)
![get-hashnode-articles](https://socialify.git.ci/Bawanthathilan/get-hashnode-articles/image?description=1&language=1&name=1&owner=1&stargazers=1&theme=Light)
# Fetching Your Hashnode Articles

Node.js library to fetch your Hashnode articles.

## Installation

```
npm install fetching-hashnode-posts
```

## Prerequits

- Hashnode personal access token - You can get your PAT (personal access token) from the developer settings.

## Usage

--

```
// require library
const { getPosts } = require('fetching-hashnode-posts');

//Parameters
getPosts(<Page Number> , <Your Hashnode Username>)

// get your articles
getPosts(0, "bawanthathilan").then((posts) => {
  console.log(posts);
});

```
