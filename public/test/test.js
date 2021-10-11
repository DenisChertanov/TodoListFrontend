const loginPageButton = document.getElementById('loginPageButton');

loginPageButton.addEventListener('click', function () {
    console.log("Load login page!");
    self.location = "index.html";
});


const mainPageButton = document.getElementById('mainPageButton');

mainPageButton.addEventListener('click', function () {
    console.log("Load main page!");
    self.location = "dashboards.html";
});