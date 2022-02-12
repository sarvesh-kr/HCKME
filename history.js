let historyDiv = () => {

    var historyStory1 = document.createElement('div');
    historyStory1.id = 'historyStory1Id';
    historyStory1.className = 'historyStoryClass';
    historyStory1.innerHTML = 'story-1';
    document.querySelector('#postId2').appendChild(historyStory1);

    var historyStory2 = document.createElement('div');
    historyStory2.id = 'historyStory2Id';
    historyStory2.className = 'historyStoryClass';
    historyStory2.innerHTML = 'story-2';
    document.querySelector('#postId2').appendChild(historyStory2);

    const boxes = [...document.querySelectorAll(".historyStoryClass")];
    for (const box of boxes) {
        box.addEventListener('click', event => {

            if (!box.classList.contains('historyStoryClassOpen')) {
                document.querySelector('.postClass').remove();
                box.classList.add('historyStoryClassOpen');
                box.style.cursor = "default";
                box.style.opacity = "100%";
                box.style.background = 'none';
                box.style.backgroundColor = 'rgb(102, 150, 210)';
                box.classList.add('postOpen');
                document.body.appendChild(box);
            }
        })
    }

}