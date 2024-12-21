let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings : ['Frontend Developer', 'Web Developer'],
    typeSpeed: 50,
    backSpeed:80,
    backDelay:1000,
    loop:true
})


document.getElementById('downloadButton').addEventListener('click', function () {

    const resumeUrl = 'assets/Lohith.pdf';

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});
