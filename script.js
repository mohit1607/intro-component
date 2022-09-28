const menuButton = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebarRight");
const overlay = document.querySelector(".overlay");
const cross = document.querySelector(".crossIcon");
const featureButton = document.querySelector(".featureBtn");
const featureImage = document.querySelector(".featureImage");
const companyBtn = document.querySelector(".companyBtn");
const companyImage = document.querySelector(".companyImage");
const features = document.querySelector(".features");
const company = document.querySelector(".company");

const handleClick = () => {
  sideBar.style.width = "65vw";
  overlay.style.display = "block";
  sideBar.style.padding = "1.5rem";
  cross.style.display = "block";
};
const closeBar = () => {
  sideBar.style.width = "0";
  overlay.style.display = "none";
  sideBar.style.padding = "0";
  cross.style.display = "none";
};

//onclick listeners
menuButton.addEventListener("click", handleClick);
overlay.addEventListener("click", closeBar);
cross.addEventListener("click", closeBar);
featureButton.addEventListener("click", () => {
  if (features.style.height === "0px") {
    featureImage.src = "./images/icon-arrow-up.svg";
    features.style.height = "auto";
    document.querySelector(".features ul li").style.marginTop = "1rem";
  } else {
    featureImage.src = "./images/icon-arrow-down.svg";
    features.style.height = "0px";
    document.querySelector(".company ul li").style.marginTop = "0rem";
  }
});

companyBtn.addEventListener("click", () => {
  if (company.style.height === "0px") {
    companyImage.src = "./images/icon-arrow-up.svg";
    company.style.height = "auto";
    document.querySelector('.company ul li').style.marginTop = '1rem'
  } else {
    companyImage.src = "./images/icon-arrow-down.svg";
    company.style.height = "0px";
    document.querySelector(".company ul li").style.marginTop = "0rem";
  }
});
