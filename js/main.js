function getValues() {

  let deposit = parseInt(document.getElementById("money").value);
  let term = parseInt(document.getElementById("mounths").value);
  
  let radioBtns = document.getElementsByName("radio-buttons")
  for(let i = 0; i < radioBtns.length; i++){
    if(radioBtns[i].checked){
      checkBtn = radioBtns[i].value;
      document.getElementById("pers").innerHTML = checkBtn;
    }
  }
  
  document.getElementById("rangeMoney").innerHTML = deposit.toLocaleString();
  document.getElementById("rangeMonths").innerHTML = term;

  document.getElementById("modalSumma").innerHTML = deposit.toLocaleString();
  document.getElementById("modalTerm").innerHTML = term.toLocaleString();
  document.getElementById("modalPercent").innerHTML = checkBtn;

  let leftProfit = calcProfit(deposit, 6.5, term);
  let rightProfit = calcProfit(deposit, checkBtn, term);

  document.getElementById("left-profit").innerHTML = leftProfit.toLocaleString();
  document.getElementById("right-profit").innerHTML = rightProfit.toLocaleString();

  // получение столбцов
  let leftCylinder = document.getElementById("lc");
  let rightCylinder = document.getElementById("rc");

  let element = document.getElementById('lc'),
  style = window.getComputedStyle(element),
  max_height = style.getPropertyValue('max-height').slice(0,3);
  max_height = max_height - 42.5
  
  max_h_bottom = style.getPropertyValue('max-height').slice(0,2);

  let deltaProfit = (rightProfit - leftProfit) / rightProfit
  let leftCylinderHeight = max_height - ((max_height * deltaProfit))

  let deltaTerm = (60 - term) / 60
  leftCylinder.style.height = leftCylinderHeight - (leftCylinderHeight * deltaTerm) + 46  + 'px';
  leftCylinder.style.transitionDuration = "0.5s";

  rightCylinder.style.height = max_height - (max_height * deltaTerm) + 50 + 'px'
  rightCylinder.style.transitionDuration = "0.5s";

  let moneySlider = document.getElementById("money");
  moneySlider.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+moneySlider.value / 100000 +'%, #e6e6e6 ' + moneySlider.value / 100000 + '%, #e6e6e6 100%)'
  let mounthsSlider = document.getElementById("mounths");
  mounthsSlider.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+ mounthsSlider.value * 1.6 +'%, #e6e6e6 ' + mounthsSlider.value * 1.6 + '%, #e6e6e6 100%)'
};

function calcProfit (deposit, pers, term) {
  return Math.round(deposit * (1 + (pers / 100) / 12) ** term) - deposit
}

function popupShow() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function popupRemove(){
  var popup = document.getElementById("myPopup");
  popup.classList.remove("show")
}

getValues();
