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
