// HCKME


function callerFunnyAvatar() {
    funnyAvatarDiv();
}

function funnyAvatarDiv() {
    var funnyAvatar = document.createElement('div');
    funnyAvatar.id = 'funnyAvatarId';
    document.querySelector("#postId11").appendChild(funnyAvatar);


    var funnyAvatarLabel = document.createElement('label');
    funnyAvatarLabel.id = 'infunnyAvatarLabelId';
    funnyAvatarLabel.innerHTML = 'ENTER YOUR NAME&nbsp;<sup>(.then click open)</sup><br>';
    document.querySelector("#funnyAvatarId").appendChild(funnyAvatarLabel);

    var funnyAvatarBox = document.createElement('input');
    funnyAvatarBox.id = 'userNameFunnyAvatarId';
    funnyAvatarBox.autofocus = true;
    funnyAvatarBox.placeholder = 'MINE IS HCKME';
    document.querySelector("#funnyAvatarId").appendChild(funnyAvatarBox);

    openButton();
}

function openButton() {

    var buttonOpenFunnyAvatar = document.createElement('button');
    buttonOpenFunnyAvatar.id = 'buttonOpenFunnyAvatarId';
    buttonOpenFunnyAvatar.innerHTML = 'Open';
    document.querySelector("#funnyAvatarId").appendChild(buttonOpenFunnyAvatar);
    buttonOpenFunnyAvatar.onclick = function() {
        openDiv();
    }
}

function closeDiv() {
    document.getElementById("inBodyFunnyAvatarId").remove();
    callerFunnyAvatar();
    document.querySelector('#funnyAvatarId').style.display = "block";
}


function openDiv() {

    var userName = document.getElementById("userNameFunnyAvatarId").value;
    var removeFunnyAvatar = document.getElementById("funnyAvatarId");
    removeFunnyAvatar.remove();
    var inBodyFunnyAvatar = document.createElement('div');
    inBodyFunnyAvatar.id = 'inBodyFunnyAvatarId';
    document.querySelector("#postId11").appendChild(inBodyFunnyAvatar);

    var hckmeAvatarScreenHeader = document.createElement('div');
    hckmeAvatarScreenHeader.id = 'hckmeAvatarScreenHeaderId';
    document.querySelector("#inBodyFunnyAvatarId").appendChild(hckmeAvatarScreenHeader);

    var funnyAvatarDiv1 = document.createElement('div');
    funnyAvatarDiv1.id = 'funnyAvatarDiv1Id';
    funnyAvatarDiv1.innerHTML = "<h1><center><b>HCKME<b><sub>Avatar</sub></center></h1>";
    document.querySelector("#hckmeAvatarScreenHeaderId").appendChild(funnyAvatarDiv1);

    var buttonCloseFunnyAvatar = document.createElement('button');
    buttonCloseFunnyAvatar.id = 'buttonCloseFunnyAvatarId';
    buttonCloseFunnyAvatar.innerHTML = '&#10006;';
    document.querySelector("#hckmeAvatarScreenHeaderId").appendChild(buttonCloseFunnyAvatar);
    buttonCloseFunnyAvatar.onclick = function() {
        closeDiv();
    }

    var funnyAvatarDiv2 = document.createElement('div');
    funnyAvatarDiv2.id = 'funnyAvatarDiv2Id';
    document.querySelector("#inBodyFunnyAvatarId").appendChild(funnyAvatarDiv2);
    funnyAvatarDiv2.innerHTML += `<center><div id="funnyAvatarBodyText">&nbsp;Hi&nbsp;
    ${userName}
    ,&nbsp;how's your day?<br>(Just right-click on your AVATAR to save it) </div><br> <img src="img.png" height="250px" width="250px" id="imgChange"></center>`;
    if (userName != "") {
        document.getElementById("imgChange").src = `https://avatars.dicebear.com/api/croodles/${userName}.svg`;
    }
}