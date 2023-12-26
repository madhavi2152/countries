async function main() {
  const countries = await fetch("https://restcountries.com/v3.1/all");
  const op = await countries.json();
  op.forEach((element) => {
    const flag = element.flags.png === undefined ? "N/A" : element.flags.png;
    const name =
      element.name.common === undefined ? "N/A" : element.name.common;
    const capital =
      element.capital && element.capital[0] !== undefined
        ? element.capital[0]
        : "N/A";
    const region = element.region === undefined ? "N/A" : element.region;
    const population =
      element.population === undefined ? "N/A" : element.population;
    const spancapital = document.createElement("span");
    const spanregion = document.createElement("span");
    const spanpopulation = document.createElement("span");
    spancapital.className = "spancapital";
    spanregion.className = "spanregion";
    spanpopulation.className = "spanpopulation";

    const textnodespan_capital = document.createTextNode("Capital: ");
    const textnodespan_region = document.createTextNode("Region: ");
    const textnodespan_population = document.createTextNode("Population: ");
    spancapital.appendChild(textnodespan_capital);
    spanregion.appendChild(textnodespan_region);
    spanpopulation.appendChild(textnodespan_population);
    const temp_img = document.createElement("div");
    temp_img.className = "image";
    const img = document.createElement("img");
    img.src = flag;
    img.alt = "flag";
    img.style.height = "150px";
    img.style.width = "300px";
    temp_img.appendChild(img);
    const temp_name = document.createElement("div");
    temp_name.className = "name";
    const nametextnode = document.createTextNode(`${name}`);
    temp_name.appendChild(nametextnode);
    const temp_population = document.createElement("div");
    temp_population.className = "population";
    const populationtextnode = document.createTextNode(`${population}`);
    temp_population.appendChild(spanpopulation);
    temp_population.appendChild(populationtextnode);
    const temp_region = document.createElement("div");
    temp_region.className = "region";
    const regiontextnode = document.createTextNode(`${region}`);
    temp_region.appendChild(spanregion);
    temp_region.appendChild(regiontextnode);
    const temp_capital = document.createElement("div");
    temp_capital.className = "capital";
    const capitaltextnode = document.createTextNode(`${capital}`);
    temp_capital.appendChild(spancapital);
    temp_capital.appendChild(capitaltextnode);
    const outerclass = document.querySelector(".outer");
    const section = document.createElement("div");
    section.className = "section";
    section.appendChild(temp_img);
    section.appendChild(temp_name);
    section.appendChild(temp_population);
    section.appendChild(temp_region);
    section.appendChild(temp_capital);
    outerclass.appendChild(section);
  });
}

window.onload = main();
const button = document.querySelector(".btn");
const menu = document.querySelector(".menu");
button.addEventListener("click", () => {
  if (menu.classList.contains("visible")) {
    menu.classList.remove("visible");
  } else {
    const outer = document.querySelector(".outer");
    const elements = outer.childNodes;
    elements.forEach((element) => {
      element.style.display = "block";
    });
    menu.classList.add("visible");
  }
});

const listItems = document.querySelectorAll(".menu ul li");
listItems.forEach((listelement) => {
  listelement.addEventListener("click", () => {
    menu.classList.remove("visible");
    let region = listelement.innerHTML;
    // console.log(region);
    // console.log(region);
    const outer = document.querySelector(".outer");
    const section = outer.childNodes;
    section.forEach((element) => {
      let reg = element.querySelector(".region");
      reg = reg.outerText;
      reg = reg.split(" ");
      reg = reg[1];
      if (reg.toLowerCase() === region.toLowerCase())
        element.style.display = "block";
      if (reg.toLowerCase() !== region.toLowerCase()) {
        element.style.display = "none";
      }
    });
  });
});
const outer = document.querySelector(".outer");
const inputcountry = document.querySelector("#countryinput");
inputcountry.addEventListener("keyup", (param) => {
  let value = param.target.value;
  const section = outer.childNodes;
  section.forEach((element) => {
    let country = element.querySelector(".name");
    country = country.textContent;
    if (country.toLowerCase().includes(value.toLowerCase())) {
      element.style.display = "block";
    }
    if (!country.toLowerCase().includes(value.toLowerCase())) {
      element.style.display = "none";
    }
  });
});

let isDarkMode = false; // Variable to track dark mode state

function toggleDarkMode() {
  const body = document.body;
  const search = document.querySelector(".search");
  const countryInput = document.querySelector("#countryinput");
  const regionSearch = document.querySelector(".btn");
  const header = document.getElementsByTagName("header")[0];
  const darkModeButton = document.querySelector(".darkmode");
  const menu = document.querySelector(".menu");
  const ul = menu.childNodes[1]; // Assuming the ul is the second child node

  if (isDarkMode) {
    // Switch to light mode
    body.style.backgroundColor = "hsl(0, 0%, 98%)";
    body.style.color = " hsl(200, 15%, 8%)";
    search.style.backgroundColor = "hsl(0, 0%, 100%)";
    countryInput.style.backgroundColor = "hsl(0, 0%, 100%)";
    countryInput.style.border = "";
    countryInput.style.boxShadow = "5px 5px 15px gray";
    regionSearch.style.backgroundColor = "hsl(0, 0%, 100%)";
    regionSearch.style.boxShadow = "5px 5px 15px gray";
    regionSearch.style.color = "hsl(200, 15%, 8%)";
    regionSearch.style.border = "";
    header.style.border = "";
    header.style.boxShadow = "5px 5px 15px gray";
    darkModeButton.style.color = " hsl(200, 15%, 8%)";

    ul.style.backgroundColor = "hsl(0, 0%, 100%)";
    ul.style.color = " hsl(200, 15%, 8%)";

    menu.style.backgroundColor = "hsl(0, 0%, 100%)";
    outer.style.backgroundColor = "hsl(0, 0%, 98%)";
    outer.childNodes.forEach((element) => {
      element.style.backgroundColor = "hsl(0, 0%, 100%)";
      element.style.color = "hsl(200, 15%, 8%)";
    });
  } else {
    // Switch to dark mode
    body.style.backgroundColor = "hsl(207, 26%, 17%)";
    body.style.color = "hsl(0,0%,100%)";
    search.style.backgroundColor = "hsl(207, 26%, 17%)";
    countryInput.style.backgroundColor = "hsl(209, 23%, 22%)";
    countryInput.style.border = "0";
    countryInput.style.boxShadow = "5px 5px 15px black";
    regionSearch.style.backgroundColor = "hsl(209, 23%, 22%)";
    regionSearch.style.boxShadow = "5px 5px 15px black";
    regionSearch.style.border = "0";
    regionSearch.style.color = "hsl(0, 0%, 100%)";
    header.style.border = "0";
    header.style.boxShadow = "5px 5px 15px black";
    darkModeButton.style.color = "hsl(0,0%,100%)";

    ul.style.backgroundColor = "hsl(209, 23%, 22%)";
    ul.style.color = "hsl(0, 0%, 100%)";

    menu.style.backgroundColor = "hsl(209, 23%, 22%)";
    outer.style.backgroundColor = "hsl(207, 26%, 17%)";
    outer.childNodes.forEach((element) => {
      element.style.backgroundColor = "hsl(209, 23%, 22%)";
      element.style.color = "hsl(0, 0%, 100%)";
    });
  }

  // Toggle the dark mode state
  isDarkMode = !isDarkMode;
}

const darkModeButton = document.querySelector(".darkmode");
darkModeButton.addEventListener("click", toggleDarkMode);
