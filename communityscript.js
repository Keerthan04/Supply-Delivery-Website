function changecolor() {
    var likeIcon = document.getElementById('like');
    var isLiked = likeIcon.classList.contains('liked');

    if (isLiked) {
      likeIcon.classList.remove('liked');
    } else {
      likeIcon.classList.add('liked');
    }
  }
