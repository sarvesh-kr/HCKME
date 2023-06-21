window.onload = () => {

    Index();
}

let Index = () => {
    Container();
    logoTextLink();
    contentMenu();
    Post();
    postOpen();
}

let Container = () => {
    document.body.innerHTML = `
    <div id="containerId">
        <div id="headId">
            <div id="logoText">HCKME</div>
            <div id="headSearchInputDiv">
                <input type="text" placeholder="Search" id="headSearchInputId">&nbsp;<button type="submit" id="headSearchButtonId">&#128269</button>
            </div>
        </div>
        <div id="inBodyLeft" class="inBodyLeftClass" >
            
        </div>
        <div id="inBody" class="inBodyClass">
            
        </div>
        <div id="inBodyRight" class="inBodyRightClass" >
        
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
    postHeaderTextDiv.innerHTML = 'HCKME\'s&nbsp;<sup>Blog&nbsp;<img src="./img/supFace.png" height="25px" width="25px" alt="Hello"></sup>';

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

let contentMenu = () => {

    var inBLMI = document.createElement('div');
    inBLMI.id = 'inBLMId';
    document.querySelector('#inBodyLeft').appendChild(inBLMI);

    var inBCM1 = document.createElement('div');
    inBCM1.id = 'inBCM1Id';
    inBCM1.className = 'inBCM';
    inBCM1.innerHTML = `Menu`;
    document.querySelector('#inBLMId').appendChild(inBCM1);

    var inBCM2 = document.createElement('div');
    inBCM2.id = 'inBCM2Id';
    inBCM2.className = 'inBCM';
    inBCM2.innerHTML = `Program Source codes`;
    document.querySelector('#inBLMId').appendChild(inBCM2);

    var inBCM3 = document.createElement('div');
    inBCM3.id = 'inBCM3Id';
    inBCM3.className = 'inBCM';
    inBCM3.innerHTML = `Item -2`;
    document.querySelector('#inBLMId').appendChild(inBCM3);

    var inBCM4 = document.createElement('div');
    inBCM4.id = 'inBCM4Id';
    inBCM4.className = 'inBCM';
    inBCM4.innerHTML = `Item-1`;
    document.querySelector('#inBLMId').appendChild(inBCM4);

    var inBCM5 = document.createElement('div');
    inBCM5.id = 'inBCM5Id';
    inBCM5.className = 'inBCM';
    inBCM5.innerHTML = `Languages`;
    document.querySelector('#inBLMId').appendChild(inBCM5);

    var inBCM6 = document.createElement('div');
    inBCM6.id = 'inBCM6Id';
    inBCM6.className = 'inBCM';
    inBCM6.innerHTML = `About Us`;
    document.querySelector('#inBLMId').appendChild(inBCM6);
    inBCM6.addEventListener('click', event => {
        web = 'https://hckme.live/AboutUs';
        window.location.href = web;
        console.log(webLink);
    });

    var inBCM7 = document.createElement('div');
    inBCM7.id = 'inBCM7Id';
    inBCM7.className = 'inBCM';
    inBCM7.innerHTML = `Contact Us`;
    document.querySelector('#inBLMId').appendChild(inBCM7);
    inBCM7.addEventListener('click', event => {
        web = 'https://hckme.live/ContactUs';
        window.location.href = web;
        console.log(webLink);
    });

    var inBCM8 = document.createElement('div');
    inBCM8.id = 'inBCM8Id';
    inBCM8.className = 'inBCM';
    inBCM8.innerHTML = `Privacy Policy`;
    document.querySelector('#inBLMId').appendChild(inBCM8);
    inBCM8.addEventListener('click', event => {
        web = 'https://hckme.live/PrivacyPolicy';
        window.location.href = web;
        console.log(webLink);
    });

    var inBCM9 = document.createElement('div');
    inBCM9.id = 'inBCM9Id';
    inBCM9.className = 'inBCM';
    inBCM9.innerHTML = `DMCA`;
    document.querySelector('#inBLMId').appendChild(inBCM9);
    inBCM9.addEventListener('click', event => {
        web = 'https://hckme.live/DMCA';
        window.location.href = web;
        console.log(webLink);
    });
}

function myhref(webLink) {
    window.location.href = web;
    console.log(webLink);
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

    var postInternal1 = document.createElement("div");
    postInternal1.id = 'postInternalId1';
    postInternal1.className = 'postInternalClass';
    postInternal1.innerHTML = `
    
    <div id="content-1" class="content">
        <h2>Explanation: </h2>
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

    var postInternal2 = document.createElement("div");
    postInternal2.id = 'postInternalId2';
    postInternal2.className = 'postInternalClass';
    postInternal2.innerHTML = `
    
    <div id="content-1" class="content">
        <h2>Content: </h2>
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
    document.querySelector('#postId').style.backgroundImage = "url('./img/programmer.gif')";
    document.querySelector("#postId").appendChild(postInternal);
    document.querySelector("#postId").appendChild(postInternal1);
    document.querySelector("#postId").appendChild(postInternal2);
    //--end

    //--Start
    var post1 = document.createElement('div');
    post1.id = 'postId1';
    post1.className = 'postClass';
    // post1.innerHTML = `content-2`;
    document.querySelector('#inBody').appendChild(post1);
    document.querySelector('#postId1').style.backgroundImage = "url('./img/hckmeNews.gif')";
    //end--

    //--start
    var post2 = document.createElement('div');
    post2.id = 'postId2';
    post2.className = 'postClass';
    // post2.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post2);
    document.querySelector('#postId2').style.backgroundImage = "url('./img/history.png')";
    //end--

    var post3 = document.createElement('div');
    post3.id = 'postId3';
    post3.className = 'postClass';
    // post3.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post3);
    document.querySelector('#postId3').style.backgroundImage = "url('./img/diaries.png')";


    var post4 = document.createElement('div');
    post4.id = 'postId4';
    post4.className = 'postClass';
    // post4.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post4);
    document.querySelector('#postId4').style.backgroundImage = "url('./img/projects.png')";

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
    document.querySelector('#postId9').style.backgroundImage = "url('./img/cssDiv.png')";

    var post10 = document.createElement('div');
    post10.id = 'postId10';
    post10.className = 'postClass';
    // post10.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post10);
    document.querySelector('#postId10').style.backgroundImage = "url('./img/ttl.png')";

    var post11 = document.createElement('div');
    post11.id = 'postId11';
    post11.className = 'postClass';
    // post11.innerHTML = `content-3`;
    document.querySelector('#inBody').appendChild(post11);
    document.querySelector('#postId11').style.backgroundImage = "url('./img/nih.gif')";
}

let postOpen = () => {

    const boxes = [...document.querySelectorAll(".postClass")];
    for (const box of boxes) {
        box.addEventListener('click', event => {

            const postTrack = box.id;

            if (!box.classList.contains('postOpen')) {

                box.classList.add('postOpen');
                box.style.cursor = "default";
                box.style.opacity = "100%";
                box.style.background = 'none';
                document.querySelector('#postInternalId').style.opacity = '100%';
                document.querySelector('#postInternalId1').style.opacity = '100%';
                document.querySelector('#postInternalId2').style.opacity = '100%';
                PostHeader();

                document.body.appendChild(box);
                switch (postTrack) {
                    case 'postId':

                        break;
                    case 'postId1':

                        break;
                    case 'postId2':
                        historyDiv();
                        break;
                    case 'postId3':
                        diaryContainerCaller();
                        break;
                    case 'postId4':
                        projects();
                        break;
                    case 'postId5':

                        break;
                    case 'postId6':

                        break;
                    case 'postId7':

                        break;
                    case 'postId8':

                        break;
                    case 'postId9':
                        ballJumpCss();
                        break;
                    case 'postId10':
                        concentrationCaller();
                        break;
                    case 'postId11':
                        callerFunnyAvatar();
                        break;

                    default:
                        break;
                }
            }
        })
    }
}

let homeContentSearchFun = () => {

    //

}

let logoTextLink = () => {
    document.querySelector("#logoText").addEventListener('click', event => {
        window.location.href = 'https://hckme.live';
    })
}