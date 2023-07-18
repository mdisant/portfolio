window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 200) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
});

var imageArray = ["images/carousel/group_grad.jpg", "images/carousel/cope.jpg", "images/carousel/dinner.jpg", "images/carousel/football.jpg", "images/carousel/vatican.jpg", "images/carousel/xmas.jpg", "images/carousel/castle.jpg", "images/carousel/golf.jpg", "images/carousel/yankee.jpg", "images/carousel/grad_photo.jpg"];
var currentIndex = 0;
var img = document.getElementById("carousel");

// Preload images
var images = [];
for (var i = 0; i < imageArray.length; i++) {
    images[i] = new Image();
    images[i].src = imageArray[i];
}

function changeImage() {
    currentIndex++;
    if (currentIndex >= imageArray.length) {
        currentIndex = 0;
    }
    img.style.opacity = 0; /* Set opacity to 0 to fade out */
    setTimeout(function () {
        img.src = imageArray[currentIndex];
        img.style.opacity = 1; /* Set opacity to 1 to fade in */
    }, 1000); /* Wait for 1 second before changing the image */
}

setInterval(changeImage, 5000); // Change image every 3 seconds


const typewriter = (text, delay) => {
    let i = 0;

    const type = () => {
        const currentText = text.substring(0, i++);
        document.querySelector("#my_description").innerHTML = currentText;
        if (i > text.length) {
            return;
        }
        setTimeout(type, delay);
    };

    setTimeout(type, delay);
};

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Start the typewriter effect
            typewriter("Welcome to my website! My name is Michael DiSanto, and I am a recent \
            graduate of the University of Michigan School of Information. I earned a \
            degree in Information Analysis with a minor in Business. I look forward to \
            applying my data science skills to practical situations as I begin my career.\
            <br><br>\
            Through this website, I hope to connect with like-minded individuals and contribute to a \
            community of data scientists. Here, you will find a selection of my personal and class projects. \
            <br><br>\
            Take a look and learn about some of these projects, and feel free to reach out if you have any questions \
            or just want to say hello!"
                , 15);

            // Stop observing once the section is in view
            observer.unobserve(entry.target);
        }
    });
}, options);

const section = document.querySelector("#about_content");
observer.observe(section);
