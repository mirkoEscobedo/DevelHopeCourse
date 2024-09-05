async function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: 1, name: 'John' };
      if (userData) {
        resolve(userData);
      } else {
        reject('no data found');
      }
    }, 2000);
  });
}

async function init() {
  try {
    const result = await fetchUserData();
    console.log(result);
  } catch {}
}
init();

function fetchUserPosts(userId, userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userPost = ['Post 1', 'Post 2', 'Post 3'];
      if (userPost) {
        resolve({ name: userName, id: userId, posts: userPost });
      } else {
        reject(`${userName} has no post found`);
      }
    }, 1000);
  });
}

fetchUserData()
  .then((result) => {
    console.log(result);
    fetchUserPosts(result.id, result.name).then((userPost) => {
      console.log(userPost);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.race([fetchUserData(), fetchUserPosts(1, 'john')])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then(() => {
//     console.log('qyu');
//   })
//   .then(() => {
//     console.log('qyu');
//   })
//   .then(() => {
//     console.log('qyu');
//   })
//   .finally(() => {
//     console.log('2');
//   })
//   .then(() => {
//     console.log('qyu');
//   });
