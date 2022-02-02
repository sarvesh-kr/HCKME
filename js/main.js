
window.onload = () => {
    Index();
    contentJsCaller();
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
        <div id="inBodyRight" class="inBodyRightClass" '>
            <p id="ad" ><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8895032743556528"
            crossorigin="anonymous"></script>
       <!-- Test ad Unit -->
       <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-8895032743556528"
            data-ad-slot="9746343569"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
       <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
       </script></p>
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
    postHeaderTextDiv.innerHTML = 'HCKME\'s&nbsp;<sup>Blog&nbsp;<img src="./img/supFace.png" height="100%" width="7%" alt="Hello"></sup>';

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
    // post1.innerHTML = `content-2`;
    document.querySelector('#inBody').appendChild(post1);
    document.querySelector('#postId1').style.backgroundImage = "url('../img/hckmeNews.png')";

    var post2 = document.createElement('div');
    post2.id = 'postId2';
    post2.className = 'postClass';
    // post2.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post2);

    var post3 = document.createElement('div');
    post3.id = 'postId3';
    post3.className = 'postClass';
    // post3.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post3);

    var post4 = document.createElement('div');
    post4.id = 'postId4';
    post4.className = 'postClass';
    // post4.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post4);

    var post5 = document.createElement('div');
    post5.id = 'postId5';
    post5.className = 'postClass';
    // post5.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post5);

    var post6 = document.createElement('div');
    post6.id = 'postId6';
    post6.className = 'postClass';
    // post6.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post6);

    var post7 = document.createElement('div');
    post7.id = 'postId7';
    post7.className = 'postClass';
    // post7.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post7);

    var post8 = document.createElement('div');
    post8.id = 'postId8';
    post8.className = 'postClass';
    // post8.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post8);

    var post9 = document.createElement('div');
    post9.id = 'postId9';
    post9.className = 'postClass';
    // post9.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post9);

    var post10 = document.createElement('div');
    post10.id = 'postId10';
    post10.className = 'postClass';
    // post10.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post10);

    var post11 = document.createElement('div');
    post11.id = 'postId11';
    post11.className = 'postClass';
    // post11.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post11);

    var post12 = document.createElement('div');
    post12.id = 'postId12';
    post12.className = 'postClass';
    // post12.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post12);

    var post13 = document.createElement('div');
    post13.id = 'postId13';
    post13.className = 'postClass';
    // post13.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post13);

    var post14 = document.createElement('div');
    post14.id = 'postId14';
    post14.className = 'postClass';
    // post14.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post14);

    var post15 = document.createElement('div');
    post15.id = 'postId15';
    post15.className = 'postClass';
    // post15.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post15);

    var post16 = document.createElement('div');
    post16.id = 'postId16';
    post16.className = 'postClass';
    // post16.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post16);

    var post17 = document.createElement('div');
    post17.id = 'postId17';
    post17.className = 'postClass';
    // post17.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post17);

    var post18 = document.createElement('div');
    post18.id = 'postId18';
    post18.className = 'postClass';
    // post18.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post18);

    var post19 = document.createElement('div');
    post19.id = 'postId19';
    post19.className = 'postClass';
    // post19.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post19);
}

let postOpen = () => {

    const boxes = [...document.querySelectorAll(".postClass")];
    for (const box of boxes) {
        box.addEventListener('click', event => {
            box.style.background = 'none';
            box.style.backgroundColor = 'rgb(102, 150, 210)';
            document.querySelector('#postInternalId').style.opacity = '100%';
            box.classList.add('postOpen');
            PostHeader();
            document.body.appendChild(box);
        })
    }
    for (const box of boxes) {
        box.removeEventListener('click', event);
    }
}


let FunZone = () => {
    var funZone = document.createElement('div');
    funZone.id = 'funZoneId';
    funZone.class = 'funZoneClass';
    document.querySelector('#inBody').appendChild(funZone);
}

let contentJsCaller = () => {
    var script = document.createElement('script');
    script.src = "./js/content.js";
    document.head.appendChild(script);
}
