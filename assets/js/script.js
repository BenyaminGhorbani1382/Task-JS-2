function Slider() {
  let boxImgSlider = document.getElementById("flexImgSlider");
  let radioSlider1 = document.getElementById("radio1");
  let radioSlider2 = document.getElementById("radio2");
  let radioSlider3 = document.getElementById("radio3");
  let radioSlider4 = document.getElementById("radio4");
  let radioSlider5 = document.getElementById("radio5");
  let radioSlider6 = document.getElementById("radio6");
  let radioSlider7 = document.getElementById("radio7");
  let radioSlider8 = document.getElementById("radio8");
  let radioSlider9 = document.getElementById("radio9");
  let i = 0;

  radioSlider1.onclick = () => {
    i = 0;
    boxImgSlider.style.left = i + "%";
  };

  radioSlider2.onclick = () => {
    i = 100;
    boxImgSlider.style.left = i + "%";
  };
  radioSlider3.onclick = () => {
    i = 200;
    boxImgSlider.style.left = i + "%";
  };
  radioSlider4.onclick = () => {
    i = 300;
    boxImgSlider.style.left = i + "%";
  };
  radioSlider5.onclick = () => {
    i = 400;
    boxImgSlider.style.left = i + "%";
  };
  radioSlider6.onclick = () => {
    i = 500;
    boxImgSlider.style.left = i + "%";
  };
  radioSlider7.onclick = () => {
    i = 600;
    boxImgSlider.style.left = i + "%";
  };
  radioSlider8.onclick = () => {
    i = 700;
    boxImgSlider.style.left = i + "%";
  };
  radioSlider9.onclick = () => {
    i = 800;
    boxImgSlider.style.left = i + "%";
  };
}
Slider();

function Slider2() {
  let boxMenuSlider = document.getElementById("sliderMenu2");
  let boxArrowsLeftSlider = document.getElementById("arrowsLeftSlider2");
  let boxArrowsRightSlider = document.getElementById("arrowsRightSlider2");

  i = 0;
  boxArrowsLeftSlider.onclick = rowLeft;
  function rowLeft() {
    if (i == 20) {
      i = 0;
      boxMenuSlider.style.left = i + "%";
    } else {
      i = 20;
      boxMenuSlider.style.left = i + "%";
    }
  }

  boxArrowsRightSlider.onclick = () => {
    if (i == 0) {
      i = 20;
      boxMenuSlider.style.left = i + "%";
    } else {
      i = 0;
      boxMenuSlider.style.left = i + "%";
    }
  };
}

Slider2();

function boxSliderBanking() {
  let sliderBanking = document.getElementById("sliderBanking");
  let arrowLeftBanking = document.getElementById("leftSliderBanking");
  let arrowsRightBanking = document.getElementById("rightSliderBanking");
  i = 0;
  arrowLeftBanking.onclick = get_right;
  function get_right() {
    if (i == 231) {
      i = 10;
      sliderBanking.style.left = i + "%";
    } else if (i <= 231) {
      i = i + 10;
      sliderBanking.style.left = i + "%";
    }
  }
  let r;

  function play() {
    r = setInterval(get_right, 500);
  }
  play();

  function stop() {
    clearInterval(r);
  }

  sliderBanking.onmouseover = stop;
  sliderBanking.onmouseout = play;

  arrowsRightBanking.onclick = () => {
    if (i == 0) {
      i = 10;
      sliderBanking.style.left = i + "%";
    } else {
      i = i + -10;
      sliderBanking.style.left = i + "%";
    }
  };
}
boxSliderBanking();

let iconMenuHeaderResponsive = document.getElementById(
  "boxIconMenuHeaderResponsive"
);
let menuHeaderResponsive = document.getElementById("boxMenuHeaderResponsive");

iconMenuHeaderResponsive.onclick = () => {
  menuHeaderResponsive.style.width = "25rem";
  menuHeaderResponsive.style.transition = "0.5s";
  menuHeaderResponsive.style.boxShadow = "0px 0px 57px 30px";
};

let multipliedHeader = document.getElementById("boxMultipliedHeader");

multipliedHeader.onclick = () => {
  menuHeaderResponsive.style.width = "0";
  menuHeaderResponsive.style.transition = "0.2s";
  menuHeaderResponsive.style.boxShadow = "0px 0px 0px 0px";
}