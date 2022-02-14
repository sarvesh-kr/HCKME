let diaryContainerCaller = () => { diaryContainer(); }

let diaryContainer = () => {
    var diarySt1 = document.createElement('div');
    diarySt1.className = 'diarySt1Class';
    diarySt1.innerHTML = `... Wanna read me?`;
    document.querySelector('#postId3').appendChild(diarySt1);
}