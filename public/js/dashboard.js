$(document).ready(function () {

    // DOM Variables
    const addPost = $('#button');
    const submitBtnEl = $('#beHeard');
    const newpostsDivEl = $('#newposts');
    const oldpostsDivEl = $('#oldposts');
    const newTitleEl = $('#newTitle');
    const newContentEl = $('#newContent');
    const newPost = `<form class="mx-auto col-md-6 mt-5"><div class="mb-3"><label for="newTitle" class="form-label">Title</label><input type="text" class="form-control" id="newTitle"></div><div class="mb-3"><label for="newContent" class="form-label">Content</label><textarea type="text" class="form-control" id="newContent" rows="4"></textarea></div><button id="beHeard" type="submit" class="btn btn-dark">Be Heard!</button></form>`;

    // functions
    async function submitPost(post) {
        try {
            console.log(post);
            const result = await $.ajax({
              url: '/api/post',
              data: post,
              method: 'POST',
            });

            console.log(result);
      
            if (result.message === 'Post Successful!') {
              renderPost(post);
            } else {
              alert(`Uh oh, that shouldn't have happened`);
            }
      
          } catch (err) {
            console.log(err);
          }
    };

    function renderPost(post) {
        const oldPost = `<div class="card mx-auto col-md-6 mt-5 bg-dark"><div class="card-body"><h5 class="mb-3 card-title text-light">${post.title}</h5><p class="mb-3 card-text text-white">${post.content}</p></div></div>`
        
        oldpostsDivEl.append(oldPost);
    }

    // click events
    addPost.on('click', (e) => {
        e.preventDefault();
        addPost.addClass('disabled');
        newpostsDivEl.append(newPost);
    });

    submitBtnEl.on('click', (e) => {
        e.preventDefault();
        addPost.removeClass('disabled');
        const post = {
            title: newTitleEl.val(),
            content: newContentEl.val(),
        };
        submitPost(post);
    });

});