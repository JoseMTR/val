const pages = document.querySelectorAll(".page");

function showPage(id) {
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function openLetter() {
    showPage("envelopePage");
}

function showLetter() {
    showPage("letterPage");
}

function finish() {
    showPage("finalPage");

    for (let i = 0; i < 120; i++) {
        setTimeout(createHeart, i * 70);
    }
}

function createStars() {

    const stars = document.getElementById("stars");

    for (let i = 0; i < 180; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        star.style.animationDelay = Math.random() * 2 + "s";

        stars.appendChild(star);

    }

}

function createHeart() {

    const hearts = document.getElementById("hearts");

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 500);

createStars();