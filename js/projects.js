let projects = () => {
    var project1 = document.createElement('div');
    project1.className = 'projectClass';
    project1.id = 'project1Id';
    project1.innerHTML = `<b>Login Logout example using php session</b><br>`;
    document.querySelector("#postId4").appendChild(project1);

    var project1Button = document.createElement('a');
    project1Button.className = 'project1ButtonClass';
    project1Button.href = "https://hckme.tech/loginSession/index.html";
    project1Button.innerHTML = `Click here to see the project`;
    document.querySelector("#project1Id").appendChild(project1Button);

    var project1img = document.createElement('img');
    project1img.className = 'projectsImgClass';
    project1img.src =
        '../img/lilo.jpg';
    document.querySelector("#project1Id").appendChild(project1img);
    img.innerHTML = 'Added';
}