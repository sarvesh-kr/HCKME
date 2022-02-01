var script = document.createElement('script');
script.src = "./js/content.js";
document.head.appendChild(script)


window.onload = () => {
    Index();
}

let Index = () => {
    Container();
    Post();
    postOpen();
}

let Container = () => {
    document.body.innerHTML = `
    <div id="containerId">
        <div id="headId">
            <div id="logoText">HCKME</div>
        </div>
        <div id="inBody" class="inBodyClass">
            
        </div>
        <div id="footerId">
            <p>&copy;Copyright: HCKME</p>
        </div>
    </div>`;
}

let PostHeader = () => {

    var postHeaderDiv = document.createElement('div');
    postHeaderDiv.id = 'postHeaderId';
    postHeaderDiv.className = 'closeButtonClass';
    document.querySelector('body').appendChild(postHeaderDiv);

    var postHeaderTextDiv = document.createElement('div');
    postHeaderTextDiv.id = 'postHeaderTextDivId';
    postHeaderTextDiv.innerHTML = 'HCKME\'s&nbsp;<sup>Blog</sup>';

    closeButton = document.createElement('button');
    closeButton.id = 'closeButtonId';
    closeButton.innerHTML = '&#10006;';
    closeButton.addEventListener('click', event0 => {
        Index();
    })
    document.querySelector('#postHeaderId').appendChild(postHeaderTextDiv);
    document.querySelector('#postHeaderId').appendChild(closeButton);
    var reset = document.getElementById("containerId");
    reset.remove();
}

let Post = () => {
    //--Start
    var post = document.createElement('div');
    post.id = 'postId';
    post.className = 'postClass';
    var postInternal = document.createElement("div");
    postInternal.id = 'postInternalId';
    postInternal.className = 'postInternalClass';
    postInternal.innerHTML = `
    
    <div id="content-1" class="content">
        <h2>"Hello World" Program in Java, C, C++, Python</h2>
        <p class="p1">
            <b>HelloWorld.java</b>
            <pre><code>
            class HelloWorld {
                public static void main(String[] args) { 
                    System.out.println("Hello, World"); <br>
                }
            }
            </code></pre>
        </p>
        <p class="p1">
            <b>HelloWorld.c</b>
            <pre><code>
            #include <stdio.h>

            int main() {
                printf("Hello, World");
                return 0;
            }
            </code></pre>
        </p>
        <p class="p1">
            <b>HelloWorld.cpp</b>
            <pre><code>
            #include <iostream>
            using namespace std;

            //Creating Class with method HelloWorld()
            class demo
            {
                public:
                void HelloWorld() {
                    cout << "Hello, World";
                }
            };
            //Driver code
            int main() {
                //Creating class object
                demo demo;

                //Calling HelloWorld() method from demo class
                demo.HelloWorld();
            }
            </code></pre>
        </p>
        <p class="p1">
            <b>HelloWorld.py</b>
            <pre><code>
            print("Hello World");
            </code></pre>
        </p>
    </div>
    
    `;
    document.querySelector('#inBody').appendChild(post);
    document.querySelector('#postId').style.backgroundImage = "url('../img/programmer.png')";
    document.querySelector("#postId").appendChild(postInternal);
    //--end

    var post1 = document.createElement('div');
    post1.id = 'postId1';
    post1.className = 'postClass';
    post1.innerHTML = `content-2`;
    document.querySelector('#inBody').appendChild(post1);

    var post2 = document.createElement('div');
    post2.id = 'postId2';
    post2.className = 'postClass';
    post2.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post2);

    var post3 = document.createElement('div');
    post3.id = 'postId3';
    post3.className = 'postClass';
    post3.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post3);

    var post4 = document.createElement('div');
    post4.id = 'postId4';
    post4.className = 'postClass';
    post4.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post4);

    var post5 = document.createElement('div');
    post5.id = 'postId5';
    post5.className = 'postClass';
    post5.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post5);

    var post6 = document.createElement('div');
    post6.id = 'postId6';
    post6.className = 'postClass';
    post6.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post6);

    var post7 = document.createElement('div');
    post7.id = 'postId7';
    post7.className = 'postClass';
    post7.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post7);

    var post8 = document.createElement('div');
    post8.id = 'postId8';
    post8.className = 'postClass';
    post8.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post8);

    var post9 = document.createElement('div');
    post9.id = 'postId9';
    post9.className = 'postClass';
    post9.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post9);
}

let postOpen = () => {

    const boxes = [...document.querySelectorAll(".postClass")];
    for (const box of boxes) {
        box.addEventListener('click', event => {
            // if (box.target != 'postInternalClass') {
                box.style.background = 'none';
                box.style.backgroundColor = 'rgb(102, 150, 210)';
                document.querySelector('#postInternalId').style.opacity = '100%';
                box.classList.add('postOpen');
                PostHeader();
                document.body.appendChild(box);
            // }
        })
    }
}

let FunZone = () => {
    var funZone = document.createElement('div');
    funZone.id = 'funZoneId';
    funZone.class = 'funZoneClass';
    document.querySelector('#inBody').appendChild(funZone);
}
