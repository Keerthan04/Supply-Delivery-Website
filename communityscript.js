function changecolor() {
    var likeIcon = document.getElementById('like');
    var isLiked = likeIcon.classList.contains('liked');

    if (isLiked) {
      likeIcon.classList.remove('liked');
    } else {
      likeIcon.classList.add('liked');
    }
  }

const postsContainer = document.querySelector(".forum-section");

document.addEventListener('DOMContentLoaded', () => {
  for (const key in localStorage) {
    if (key.startsWith('forumPost_')) {
      const postDetails = JSON.parse(localStorage.getItem(key));
      
      if (postDetails.stored === 1) {
        const postElement = document.createElement('div');
        postElement.className = 'forum-post';
        postElement.innerHTML = `
          <div class="title">
              <div class="title-left">
                  <span class="user-icon"><i class="fa-solid fa-user-tie"></i></span>
              </div>
              <div class="title-right">
                <h3>${postDetails.title}</h3>
                <span>Posted by ${localStorage.getItem('username')} on ${new Date().toLocaleDateString()}</span>
              </div>
              </div>
          </div>
          <div class="forum-content">
            <p>${postDetails.content}</p>
          </div>
          <div class="forum-button">
              <button id="rs"><i class="fa-solid fa-reply" title="reply"></i></button>
              <button id="like" onclick="changecolor()"  title="Like"><i class="fa-regular fa-heart" title="Like"></i></button>
              <button id="rs" ><i class="fa-solid fa-share" title="share"></i></button>
          </div>
        `;
        postsContainer.appendChild(postElement);
      }
    }
  }
});

function add(){
  window.location.href="add.html";
}



