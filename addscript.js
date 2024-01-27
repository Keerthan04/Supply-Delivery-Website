const username=localStorage.getItem("username");
document.getElementById("user").innerText=`${username}`;

function submit(){
    const postTitle = document.querySelector('[name="topic"]').value.trim();
    const postContent = document.querySelector('textarea').value.trim();
    const storageKey = 'forumPost_' + Date.now();

    if (postTitle && postContent) {
      const postDetails = {
        title: postTitle,
        content: postContent,
        stored: 1
      };

      localStorage.setItem(storageKey, JSON.stringify(postDetails));
      alert('Your post has been submitted! thank you');
      setInterval(
        ()=>{
            back();
      },100);
    } else {
      alert('Please fill in the post title and content before submitting.');
      localStorage.setItem(storageKey, JSON.stringify({ stored: 0 }));
    }
}

function back(){
    window.location.href="community.html";
}
