const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-bar");
const video = document.querySelectorAll(".box .video video")
const main_video = document.querySelector(".main-vid");
const closeBtn = document.querySelector(".main-vid #close-vid");

menuBtn.onclick =()=>{
    navbar.classList.toggle("active");
}
window.onscroll  = () =>{
    navbar.classList.remove("active");
}
video.forEach(vid=>{
    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        main_video.classList.add("active");
        main_video.querySelector("video").src = src;
    }
});

closeBtn.onclick = () =>{
    main_video.classList.remove("active");
}