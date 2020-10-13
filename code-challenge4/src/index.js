const select = document.querySelector("select"),
  COUNTRY = "currentCountry";

function saveCountry() {
  localStorage.setItem(COUNTRY, select.value); //선택한값을 저장
}

function handleCountry(event) {
  select.addEventListener("change", saveCountry); // select의 change 이벤트를 감지해서 saveCountry로 값을 넘겨줌
}

function selectedCountry() {
  handleCountry();
  select.options[select.selectedOptions];
}

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY); //저장되어있는 값
  if (currentCountry === null) {
  } else {
    selectedCountry();
    select.options[currentCountry].selected = true;
  }
}
function init() {
  loadCountry();
}

init();
