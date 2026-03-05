function getPostsFromAPI() {
  // Replace this with the URL of the JSON API that returns an array of image URLs
  const url = 'https://automatic-winner-q79x7v5v76x5fx6vp-3000.app.github.dev/posts.json';
  if (url == 'YOUR_URL_GOES_HERE') {
    alert('Error: Replace url value in tacostagram.js')
  }

  // Make a GET request to the API
  fetch(url)
    .then(response => response.json()) // Parse the response as JSON
    .then(posts => {
      // Loop through the array of posts and build html for each
      for (let post of posts) {
        // Log post data to browser console
        console.log(post);

        let html = `
          <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <div class="card h-100">
              <img src="${post.image}" class="card-img-top" alt="Taco image">
              <div class="card-body">
                <p class="card-text">${post.body}</p>
                <small class="text-muted">Posted: ${new Date(post.created_at).toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        `;

        const postsDiv = document.querySelector('#posts');
        postsDiv.innerHTML += html
      };
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}

const getPostsButton = document.querySelector('#get-posts-button');
getPostsButton.addEventListener('click', getPostsFromAPI);
