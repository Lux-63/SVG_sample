/* 
stroke="#6bdba7" зеленый 
stroke="#e0e0e0" серый
#e0e0e0
rgb(24, 194, 58)
rgb(0, 0, 255) синий
rgb(203, 10, 10)
rgb(226, 186, 53)
#1941d2


вставить галочку

document.querySelector(".js-load-progress").insertAdjacentHTML('afterbegin', '<svg class="js-load-complete" y="0px" style="enable-background:new 0 0 512.003 512.003;" xml:space="preserve" x="0px" viewBox="-400 100 1212.003 512.003"><g><g><path style="fill:rgb(28, 233, 17)" d="M507.291,57.14c-5.605-4.851-14.094-4.204-18.998,1.455L174.383,424.81l-151.39-151.39 c-5.255-5.255-13.797-5.255-19.052,0c-5.255,5.255-5.255,13.797,0,19.052l161.684,161.684c2.533,2.506,5.982,3.934,9.539,3.934 c0.162,0,0.35,0,0.539,0.027c3.746-0.162,7.276-1.886,9.701-4.716L508.773,76.138C513.597,70.479,512.95,61.99,507.291,57.14z"></path></g></g></svg>')

удалить
document.querySelector(".js-load-complete").remove

доступ и смена цвета
document.querySelector(".js-load-bar").style.stroke="#6bdba7"
если необходимо изменить атрибут, то
circleBar.setAttribute("r", "108")
Формула смены анимации, что бы в случае изменения параметров было проще редактировать.


крестик
<svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>
  

*/
let circleBar = document.querySelector(".js-load-bar");
let wiewStatusLoad = document.querySelector(".js-load-progress");
let wiewPrecentLoad = document.querySelector(".js-precent-load");
let infoPosition = document.querySelector(".info-position");
let radiusCircle = Number(circleBar.getAttribute("r"));
let circumference = 2 * 3.14 * radiusCircle;
let colorBar = "#00cc00";
let progressLoad = 0;
let progressBarLoad = 678;
let StartLoading = 0;
let startInterval = null;
let mistakeLoad = false;


// let galka = <svg y="0px" style="enable-background:new 0 0 512.003 512.003;" xml:space="preserve" x="0px" viewBox="-400 100 1212.003 512.003"><g><g><path style="fill:#10af3d;" d="M507.291,57.14c-5.605-4.851-14.094-4.204-18.998,1.455L174.383,424.81l-151.39-151.39 c-5.255-5.255-13.797-5.255-19.052,0c-5.255,5.255-5.255,13.797,0,19.052l161.684,161.684c2.533,2.506,5.982,3.934,9.539,3.934 c0.162,0,0.35,0,0.539,0.027c3.746-0.162,7.276-1.886,9.701-4.716L508.773,76.138C513.597,70.479,512.95,61.99,507.291,57.14z"></path></g></g></svg>;


function checkButton() {
    colorBar = "#cb0a0a";
    progressBarLoad = circumference * ((100 - progressLoad) / 100)
    wiewPrecentLoad.innerHTML = Math.round(progressLoad);
    // circleBar.style.stroke = colorBar
    console.log(progressLoad);
};

function drawColorBar(){
    if(Math.round(progressLoad) >= 20 && progressLoad < 25) {
        //colorBar = "#cb0a0a";
        circleBar.classList.add("dots-one");
        circleBar.style.stroke = "rgb(240, 115, 12)";
        colorBar = "rgb(240, 115, 12)";
    } else if(Math.round(progressLoad) >= 45 && progressLoad < 50) {

        circleBar.style.stroke = "rgb(240, 115, 12)";
        circleBar.classList.remove("dots-one");
        circleBar.classList.add("dots-two");
        circleBar.style.stroke = "rgb(233, 161, 17)";
        colorBar = "rgb(233, 161, 17)";
    } else if(Math.round(progressLoad) >=70 && progressLoad < 75) {
        circleBar.style.stroke = "rgb(233, 161, 17)";
        circleBar.classList.remove("dots-two");
        circleBar.classList.add("dots-three");
        circleBar.style.stroke = "rgb(17, 150, 233)";
        colorBar = "rgb(17, 150, 233)";
    } else if(Math.round(progressLoad) >=85 && progressLoad < 100) {
        circleBar.style.stroke = "rgb(17, 150, 233)";
        circleBar.classList.remove("dots-three");
        circleBar.classList.add("dots-four");
        circleBar.style.stroke = "rgb(17, 42, 233)";
        colorBar = "rgb(17, 42, 233)";
    } else if(Math.round(progressLoad) == 100) {
        circleBar.style.stroke = "rgb(17, 42, 233)";
        circleBar.classList.remove("dots-four");
        circleBar.classList.add("dots-five");
        circleBar.style.stroke = "rgb(28, 233, 17)";
        colorBar = "rgb(28, 233, 17)";
        wiewPrecentLoad.className += "dots-clear"
        infoPosition += "dots-clear";
        wiewStatusLoad.insertAdjacentHTML('afterbegin', '<svg class="js-load-complete dots-complette" y="0px" style="enable-background:new 0 0 512.003 512.003;" xml:space="preserve" x="0px" viewBox="-400 100 1212.003 512.003"><g><g><path style="fill:rgb(28, 233, 17)" d="M507.291,57.14c-5.605-4.851-14.094-4.204-18.998,1.455L174.383,424.81l-151.39-151.39 c-5.255-5.255-13.797-5.255-19.052,0c-5.255,5.255-5.255,13.797,0,19.052l161.684,161.684c2.533,2.506,5.982,3.934,9.539,3.934 c0.162,0,0.35,0,0.539,0.027c3.746-0.162,7.276-1.886,9.701-4.716L508.773,76.138C513.597,70.479,512.95,61.99,507.291,57.14z"></path></g></g></svg>')
        
    }
    // circleBar.style.stroke = colorBar;
    // circleBar.style.stroke = "rgb(17, 42, 233)";
    circleBar.style.strokeDashoffset = `${progressBarLoad}`
    console.log(radiusCircle, circumference, progressLoad, progressBarLoad)
};

function stepPerogress() {
    console.log(mistakeLoad)
    if(StartLoading == 0){
        circleBar.style.stroke = "rgb(255, 0, 0)";
    }
    StartLoading = 1;
    if (progressLoad <= 100  && mistakeLoad === false) {
        // progressLoad += 0.03;
        progressLoad += 0.2
        progressBarLoad = circumference * ((100 - progressLoad) / 100)
        wiewPrecentLoad.innerHTML = Math.round(progressLoad);
        drawColorBar();
        console.log(progressLoad);
    } else {
        stopAutoLoadBar();
        console.log("loading stopped")
    }
};
function startAutoLoadBar() {
    startInterval = setInterval(() => {
        // circleBar.style.stroke = "rgb(255, 0, 0)";
    stepPerogress()
    }, 10);
};

function stopAutoLoadBar() {
    setTimeout(clearInterval(startInterval));
};

function runWarning(){
    setTimeout(clearInterval(startInterval));
    wiewPrecentLoad.innerHTML = "warning"
    mistakeLoad = true;
    // circleBar.classList.remove("dots-three");
    circleBar.classList.add("dots-warning");
    setTimeout(() => {
        circleBar.style.stroke = "rgb(233, 175, 17)";
    }, 3000);

};
function runEror(){
    setTimeout(clearInterval(startInterval));
    wiewPrecentLoad.innerHTML = "error"
    mistakeLoad = true;
    circleBar.classList.add("dots-error");
    setTimeout(() => {
        circleBar.style.stroke = "rgb(233, 17, 17)";
    }, 3000);
};