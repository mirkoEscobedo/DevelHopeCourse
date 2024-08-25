function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: 1, name: 'John' };
      if (userData) {
        resolve(userData);
      } else {
        reject('no data found');
      }
    }, 2000);
  }).then((userData) => {
    return fetchUserPosts(userData.id, userData.name);
  });
}

function fetchUserPosts(userId, userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userPost = ['Post 1', 'Post 2', 'Post 3'];
      if (userPost) {
        resolve({ name: userName, id: userId, posts: userPost });
      } else {
        reject(`${userName} has no post found`);
      }
    }, 2000);
  });
}

fetchUserData()
  .then((result) => {
    console.log(result.id, result.name, result.posts);
  })
  .catch((error) => {
    console.log(error);
  });
