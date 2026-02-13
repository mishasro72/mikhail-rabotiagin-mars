// **
// *Add footer
// *****************************************************
const today = new Date();
const thisYear = today.getFullYear();

const parent = document.querySelector("body");

const footer = document.createElement("footer");
footer.classList.add("footer");

const footerString = document.createElement("p");
footerString.innerHTML = `&copy; Mikhail Rabotiagin ${thisYear}`;

const footerEnvelope = document.createElement("a");
footerEnvelope.href = "mailto:mishasro72@gmail.com";
footerEnvelope.setAttribute("aria-label", "Send a message");

const svgNS = "http://www.w3.org/2000/svg";
const envelopeSvg = document.createElementNS(svgNS, "svg");
envelopeSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
envelopeSvg.setAttribute("viewBox", "0 0 640 640");
envelopeSvg.classList.add("icon");

const envelopeSvgTitle = document.createElementNS(svgNS, "title");
envelopeSvgTitle.textContent = "Send a message";

const envelopeSvgPath = document.createElementNS(svgNS, "path");
envelopeSvgPath.setAttribute(
  "d",
  "M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z",
);

envelopeSvg.append(envelopeSvgTitle, envelopeSvgPath);
footerEnvelope.append(envelopeSvg);

footer.append(footerString, footerEnvelope);
parent.append(footer);

// **
// *Add skills section
// *****************************************************

const skills = [
  "Python",
  "Java Script",
  "SQL",
  "HTML",
  "CSS",
  "Playwright",
  "Selenium Webdriver",
  "Postman",
  "Pytest",
  "Git/GitHub",
  "Linux CLI",
  "Jira",
  "TestRail",
  "Allure",
  "Swagger",
  "MySQL",
  "JMeter",
];

const skillsSection = document.querySelector('section#skills');
const skillsList = skillsSection.querySelector('ul');
skillsList.classList.add('skills-list')

for(i = 0; i < skills.length; i++) {
    let skill  = document.createElement('li');
    skill.setAttribute('tabindex', '0');
    skill.textContent = `${skills[i]}`;
    skillsList.append(skill);
}



