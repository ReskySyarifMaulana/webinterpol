const form = document.querySelector("form");
const thankYouBox = document.getElementById("thankYouBox");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    thankYouBox.style.display = "block";
    form.style.display = "none";
});
function refreshPage() {
    location.reload();
}