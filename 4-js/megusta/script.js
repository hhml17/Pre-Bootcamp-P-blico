function likePost(id) {
    const likeElement = document.getElementById(id);
    let likes = parseInt(likeElement.textContent);
    likes += 1;
    likeElement.textContent = `${likes} like(s)`;
  }
  