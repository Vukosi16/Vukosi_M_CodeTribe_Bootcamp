const firstName = "Vukosi";
const surname =  "Mohlabini";
const fullName = "Vukosi Mohlabini"
const bio = "Meet Vukosi - A tech junkie, part time model (for Xross Drop only) and programmer extrodinare (wannabe) with a interesting passion for astronomy. When he's not coding up a storm, you'll catch him stargazing and pondering the wonders of the universe. But Vuks' not all about tech and stars; he's also a sports fanatic.\n Whether he's rooting for the Texas Longhorns on the gridiron (College Football), cheering on Manchester United in soccer, or getting his adrenaline fix with Formula 1 racing, he's always in the game. And amidst all his interests, Vukosi's got one big dream: to visit the CERN Hadron Collider and unlock the mysteries of the cosmos firsthand. With his blend of geekiness and sportsmanship, Vukosi's one fascinating guy."
const phoneNumber = "0672575232";
const email = "vukosimohlabini16@gmail.com";
const address = {standNo: 1100, 
    streetName: "Pretorius St", 
    suburb: "Hatfield", 
    code: "0083"
};

const streetNumber = document.querySelector('.streetNumber');
streetNumber.textContent = address["standNo"];

const streetName = document.querySelector('.streetName');
streetName.textContent = address["streetName"];

const  suburb = document.querySelector(".suburb");
suburb.textContent = address["suburb"];

const code = document.querySelector(".areaCode");
code.textContent = address["code"];

const contactNumber = document.querySelector('.contactNumber');
contactNumber.textContent = phoneNumber;

const emailHtml = document.querySelector('.contactEmail');
emailHtml.textContent = email;



const nameHeading = document.querySelector('.nameHeading');
nameHeading.textContent =   `${fullName}`;

const indexPageDescription = document.querySelector('.description');
indexPageDescription.textContent = `${bio}`;














const button = document.querySelector("#arrow");

button.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
});

function scrollDown() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'});
}