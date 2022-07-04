
const changeThemeBtn = document.querySelector("#change-theme");

//Toggle dark mode
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

// Load Light or Dark mode
function loadTheme(){
    const darkMode = localStorage.getItem("dark");
    if(darkMode){
        toggleDarkMode();
    } 
}
loadTheme();
changeThemeBtn.addEventListener("change",function(){
    // chamando a troca de tema
    toggleDarkMode();
    //salvando sua ultima preferencia
    localStorage.removeItem("dark")
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark",1);
    }
    console.log(localStorage.getItem('dark'));
});