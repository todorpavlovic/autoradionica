document.querySelectorAll('.choose__input__single').forEach(wrap => {
  wrap.addEventListener('click', function(e){
    wrap.parentElement.lastElementChild.classList.toggle('showList');
    wrap.parentElement.querySelectorAll('ul li').forEach(li => {
      li.addEventListener('click', function(){
        wrap.firstChild.innerHTML = li.textContent;

        wrap.lastElementChild.innerHTML = `<svg>
        <use xlink:href="../img/sprite.svg#icon-x"></use>
      </svg>`
      wrap.lastElementChild.classList.add('svg');
        wrap.parentElement.lastElementChild.classList.remove('showList');
      })
    })
  })
});

document.addEventListener('click', addOrRemove)

function addOrRemove(e){
  document.querySelectorAll('.choose__input__single').forEach(wrap => {
    if(e.target == wrap || e.target == wrap.firstChild || e.target == wrap.lastElementChild)return;
    else {
      wrap.parentElement.lastElementChild.classList.remove('showList');
    }
  })
}


var yearList = document.querySelector('.yearList');
var outputYears = '';
var theMonths = new Array("Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Octobar", "Novembar", "Decembar");
var today = new Date();
var year = today.getUTCFullYear();
var aMonth = today.getMonth();
var i;
for (i=0; i<12; i++) {
outputYears += `<li class="dropList__item">${theMonths[aMonth]} ${year}</li>`;
aMonth++;
if (aMonth > 11) {
aMonth = 0;
year++;
}
}

yearList.innerHTML = outputYears;


