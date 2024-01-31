
const ratings = document.querySelectorAll('.option');
const submit = document.querySelector('.orange-btn');

for (rating of ratings) {
    rating.addEventListener('click', function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
};

submit.addEventListener('click', function() {
    let thankYouCard = document.querySelector(".hide");
    thankYouCard.classList.toggle("hide");

    let ratingSelectionCard = document.querySelector(".rating-selection-container");
    ratingSelectionCard.classList.toggle("hide");

    var score = document.querySelector(".selected-rating");
    score.innerText = document.querySelector(".active").id;
})