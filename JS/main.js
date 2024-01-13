let nav = document.querySelector('.js-nav');
let container = document.querySelector('.js-container');
let footer = document.querySelector('.js-footer');
const anchorNameArray = ["home", "shop", "about", "contact"];
const homeH1Text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati quis ab? Nesciunt repellendus dolorum modi, rem tempore similique consequuntur inventore eligendi optio? Cum necessitatibus quae ducimus ea mollitia tempora minus veniam non quibusdam fuga.";
const homeH2TextArray = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, autem. Quisquam nemo minus nesciunt quia vel voluptatibus ullam explicabo adipisci quos, earum, incidunt corporis magnam ipsum quibusdam velit animi. Beatae minus eos animi temporibus at possimus repudiandae quos asperiores mollitia.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex eligendi eum at eaque labore consectetur assumenda velit, incidunt quisquam quas reprehenderit accusamus non similique."];
const shopH2TextArray = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam laborum deleniti natus esse ipsum! Quis.", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae accusantium aperiam ipsam, praesentium libero adipisci quasi deleniti quae inventore, hic doloremque similique dolorum. Repellendus, eius? Amet voluptate suscipit facere exercitationem doloremque ipsa eveniet quia sit, voluptates minima quod expedita beatae aliquam corrupti.", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sequi iure corrupti mollitia debitis possimus maxime laborum obcaecati quisquam harum, dolore omnis minus eligendi alias sapiente, similique temporibus maiores tempore, quasi rem optio."];
const aboutH2TextArray = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas consectetur ducimus laudantium sint cumque ipsam! Molestiae, odio quisquam doloribus sint maiores porro aperiam a excepturi iste esse fugit! Voluptatem assumenda totam commodi laudantium?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora minus nostrum.", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat aliquid provident error, quo nam ullam perspiciatis deserunt accusamus, adipisci rem quia necessitatibus rerum et.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quod corporis soluta. Nihil fugit eius cumque vitae!"];
const contactNameArray = ["name", "email", "subject", "message", "button"];
const footerNameArray = ["Hibabejelentő", "Médiaajánlat", "Feltételek", "Adatvédelem", "Süti szabályzat", "Süti beállítások", "Gy.I.K."];
const sendText = ["Név: ", "E-mail: ", "Tárgy: ", "Üzenet: "];

const navDisplay = () => {
    let string = "";
    anchorNameArray.forEach(name => {
        string += `<li><a href="#${name}">${name.slice(0,1).toUpperCase() + name.slice(1, name.length)}</a></li>`;
    });
    return `<ul>${string}</ul>`;
}

const containerDisplay = () => {
    let string = "";
    anchorNameArray.forEach(name => {
        string += `<section id="${name}" class="js-${name}">${name} teszt</section>`;
    });
    return string;
}

const homeDisplay = () => {
    let string = "";
    homeH2TextArray.forEach(name => {
        string += `<article>${name}</article>`;
    });
    return `
    <article class="article-heading"><h1>Home</h1></article>
    <article class="home-h1-text">${homeH1Text}</article>
    <article class="article-heading"><h2>Heading 2</h2></article>
    <article class="home-h2-text">${string}</article>
    `;
}

const shopDisplay = () => {
    let string = "";
    shopH2TextArray.forEach(name => {
        string += `<article>${name}</article>`;
    });
    return `
    <article class="article-heading"><h2>Shop</h2></article>
    <article class="shop-h2-text">${string}</article>
    `;
}

const aboutDisplay = () => {
    let string = "";
    aboutH2TextArray.forEach(name => {
        string += `<article>${name}</article>`;
    });
    return `
    <article class="article-heading"><h2>About</h2></article>
    <article class="about-h2-text">${string}</article>
    `;
}

const contactDisplay = () => {
    let string = "";
    contactNameArray.forEach(name => {
        if(name === "message") {
            let message = "Üzenet";
            string += `<div><label for="${name}">${message}</label><textarea name="${name}" id="${name}" class="input-area message-area js-input-area"></textarea></div>`;
        }
        else if(name === "button") {
            string += `<div><button type="submit" name="send_message" id="js-btn-send" class="contact-btn">Küldés</button></div>`;
        }
        else if(name === "email") {
            let email = "E-mail";
            string += `<div><label for="${name}">${email}</label><input type="email" name="${name}" id="${name}" class="input-area js-input-area"></div>`;
        }
        else {
            if(name === "name") {
                let formName = "Név";
                string += `<div><label for="${name}">${formName}</label><input type="text" name="${name}" id="${name}" class="input-area js-input-area"></div>`;
            }
            if(name === "subject") {
                let subject = "Tárgy";
                string += `<div><label for="${name}">${subject}</label><input type="text" name="${name}" id="${name}" class="input-area js-input-area"></div>`;
            }
        }
    });
    return `
    <article class="article-heading"><h2>Contact</h2></article>
    <article class="contact-h2-text"><form class="contact-form-text js-contact-form-text" method="post">${string}</form></article>
    `;
}

const footerDisplay = () => {
    let string = "";
    footerNameArray.forEach(name => {
        string += `
            <li><a href="#">${name}</a></li>
        `;
    });
    return `<ul>${string}</ul><div class="copyright">Copyright © 2024 cégnév</div>`;
}

const handleSubmit = (e) => {
    e.preventDefault();
}

const handleClick = (e) => {
    let input = document.querySelectorAll('.js-input-area');
    input.forEach( (elem, i) => {
        // alert( sendText[i] + elem.value );
        console.log( sendText[i] + elem.value );
    })
}

const render = () => {
    nav.innerHTML = navDisplay();
    container.innerHTML = containerDisplay();
    document.querySelector('.js-home').innerHTML = homeDisplay();
    document.querySelector('.js-shop').innerHTML = shopDisplay();
    document.querySelector('.js-about').innerHTML = aboutDisplay();
    document.querySelector('.js-contact').innerHTML = contactDisplay();
    footer.innerHTML = footerDisplay();
    document.querySelector('.js-contact-form-text').addEventListener("submit", handleSubmit);
    document.querySelector('#js-btn-send').addEventListener("click", handleClick);
}

render();