let darkTheme = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".theme");

const enableDarkMode = () =>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode','enabled');
}

const disableDarkMode = () =>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode',null);
}

if(darkTheme === 'enabled'){
    enableDarkMode();
}


darkModeToggle.addEventListener("click",() =>{
    darkTheme = localStorage.getItem("darkMode");
if(darkTheme !== "enabled"){
    enableDarkMode();
}else{
    disableDarkMode();
}
});