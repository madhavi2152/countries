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
console.log("hi sai");
const button = document.querySelector(".btn");
const menu = document.querySelector(".menu");
button.addEventListener("click", () => {
  if (menu.classList.contains("visible")) {
    menu.classList.remove("visible");
  } else {
    menu.classList.add("visible");
  }
});

const listItems = document.querySelectorAll(".menu ul li");
listItems.forEach((listelement) => {
  listelement.addEventListener("click", () => {
    menu.classList.remove("visible");
    let region = listelement.innerHTML;
    console.log(region);
    console.log(region);
    const outer = document.querySelector(".outer");
    const section = outer.childNodes;
    section.forEach((element) => {
      let reg = element.querySelector(".region");
      reg = reg.outerText;
      reg = reg.split(" ");
      reg = reg[1];
      if (reg === region) element.style.display = "block";
      if (reg !== region) {
        element.style.display = "none";
      }
    });
  });
});
const inputcountry = document.querySelector("#countryinput");
inputcountry.addEventListener("keyup", (param) => {
  let value = param.target.value;
  const outer = document.querySelector(".outer");
  const section = outer.childNodes;
  section.forEach((element) => {
    let country = element.querySelector(".name");
    country = country.textContent;
    if (country.includes(value)) {
      element.style.display = "block";
    }
    if (!country.includes(value)) {
      element.style.display = "none";
    }
  });
});
