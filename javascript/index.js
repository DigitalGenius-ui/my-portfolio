const toggle = document.querySelector(".bars");
const overFlow = document.querySelector(".overflow");
const nav = document.querySelector('nav');
const li = document.querySelectorAll("li");

let goDown = false;

toggle.addEventListener("click", ()=>{
    if(!goDown){
        toggle.classList.add("move");
        nav.classList.add("move")
        overFlow.classList.add("move")
        goDown = true;
    }else{
        toggle.classList.remove("move");
        nav.classList.remove("move")
        overFlow.classList.remove("move")
        goDown = false;
    }
})

overFlow.addEventListener("click", ()=>{
    toggle.classList.remove("move");
    nav.classList.remove("move")
    overFlow.classList.remove("move")
})

li.forEach((list)=>{
    list.addEventListener("click",()=>{
    toggle.classList.remove("move");
    nav.classList.remove("move")
    overFlow.classList.remove("move") 
    })
})
//when the projects are choosed.

let projects = [
    {
        img:"./image/landing1.jpg",
        text: "Health Landing Page",
        tag: "UX/UI Converted",
        category:"landing",
        html_link:'https://digitalgenius-ui.github.io/health-responsive/'
    },

    {
        img:"./image/bloger.jpg",
        text: "Blogr Landing Page",
        tag: "UX/UI Converted",
        category:"landing",
        html_link:'https://digitalgenius-ui.github.io/bloger/'
    },

    {
        img:"./image/manage.jpg",
        text: "Manage Landing Page",
        tag: "UX/UI Converted",
        category:"landing",
        html_link :'https://digitalgenius-ui.github.io/manage-landing-page/'
    },
    // {
    //     img:"./image/landing1.jpg",
    //     tag: "UX/UI Converted",
    //     text: "Health Landing Page",
    //     category:"wordpress",
    // },
    // {
    //     img:"./image/landing1.jpg",
    //     tag: "UX/UI Converted",
    //     text: "Health Landing page",
    //     // category:"ecommerce",
    // },
    // {
    //     img:"./image/landing1.jpg",
    //     tag: "UX/UI Converted",
    //     text: "Health Landing Page",
    //     // category:"portfolio",
    // }
]

const section = document.querySelector('#project-flex');

window.addEventListener('DOMContentLoaded',function(){
    showProjects(projects);
});

let options = document.querySelectorAll("#service");
options.forEach(function(option){
    option.addEventListener('click', function(e){
        const target = e.currentTarget.value;
        let filterMenue = projects.filter(function(item){
            if(item.category === target){
                return item
            }
        })
        if(target === "all"){
            return showProjects(projects)
        }else{
            return showProjects(filterMenue);
        }
    })
})


function showProjects(website){
    let items = website.map(function(item){
        return `<div class="projects">
            <a href="${item.html_link}"><img src="${item.img}" alt="landing page smaple"></a>
            <div class="health">${item.text}</div>
            <div class="pharagraph">${item.tag}</div>
            </div>`;
    })
    items = items.join('');
    section.innerHTML = items; 
}

// scrol animation

AOS.init();

// loading animation 

const loading = document.querySelector(".spinner");

window.addEventListener("load",()=>{
    loading.style.display = 'none';
})
