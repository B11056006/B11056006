var counterContainer = document.querySelector("#num");
var resetButton = document.querySelector("#res");
var visitCount = localStorage.getItem("page");
if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page", 1);
}
counterContainer.innerHTML = "People：" + visitCount;

resetButton.addEventListener("click", () => {
    visitCount = 1;
    localStorage.setItem("page", 1);
    counterContainer.innerHTML = "People：" + visitCount;
});
start();
window.addEventListener('resize', start);

function start() {
    document.getElementById('width').innerText = "width：" + document.documentElement.clientWidth;
}