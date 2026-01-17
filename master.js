import ObjectScaler from './module.js';

fetch("./views/header.html")
.then(response => response.text())
.then(data => document.getElementById("header").innerHTML = data)
.then(() => document.getElementById('burger').addEventListener('click', toggleNav));

fetch("./views/footer.html")
.then(response => response.text())
.then(data => document.getElementById("footer").innerHTML = data);

function toggleNav(event) {
    const customNav = document.querySelector('.custom-nav');
    const burgerLine1 = document.querySelector('.burger-line-1');
    const burgerLine2 = document.querySelector('.burger-line-2');
    const burgerLine3 = document.querySelector('.burger-line-3');

    customNav.classList.toggle('open');
    burgerLine1.classList.toggle('active-line-1');
    burgerLine2.classList.toggle('active-line-2');
    burgerLine3.classList.toggle('active-line-3');
}

    const projects = [
    {
        title: "Birds Unfiltered",
        description: "A Philadelphia Eagles sports blog with a legacy design.",
        image: "./assets/birds-unfiltered-thumbnail.png",
        url: "https://birdsunfiltered.com"
    },
    {
        title: "Product Pricing Page",
        description: "A design I created to display pricing packages.",
        image: "./assets/product-pricing-page.png",
        url: "https://op3n-signal.github.io/table/"
    }
    ];

    async function createProjectCard(title, description, image, onClick, count) {
        const res = await fetch("/views/project-card.html");
        const html = await res.text();

        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const card = wrapper.firstElementChild;
        card.classList.add(`animated-element-${count}`);

        wrapper.querySelector(".card-title").textContent = title;
        wrapper.querySelector(".card-description").textContent = description;
        const img = card.querySelector(".card-image");
        img.src = image;
        img.alt = "project";

        const button = card.querySelector(".card-button");
        button.addEventListener("click", onClick);

        return wrapper.firstElementChild;
    }
    async function init() {
        const container = document.querySelector("#project-section");
        let i = 1;
        let classNames = [];

        for (const project of projects) {
            const card = await createProjectCard(
                project.title,
                project.description,
                project.image,
                () => window.open(project.url, "_blank"),
                i
            );

            container.appendChild(card);

            classNames.push(`animated-element-${i}`);

            i++;
        }

        const animator = new ObjectScaler(classNames);
        animator.run();
    }

    init();