var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var require = JSON.parse(xhttp.responseText);
      const listMark = document.querySelector('.selectMark');
      output = '';
      require.forEach(item=> {
        var storeItem = item.brand;

        output += `<li>
        <label class="m_li_item"><span class="m_li_item_text">${storeItem}</span>
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        </li>`
      })
      listMark.innerHTML += output;

      document.addEventListener('click', function(e){
        document.querySelectorAll('.selectMark li label input').forEach(li => {
          
          if(e.target == li){
            li.parentElement.parentElement.parentElement.parentElement.classList.add('showList');
          } 
          else {
            li.parentElement.parentElement.classList.remove('showList');
          }
        })


      })
      let counter = 0;
      document.querySelectorAll('.selectMark li label input').forEach((li, index )=> {
        li.addEventListener('change', function(){

          let spanTag = this.parentElement.parentElement
          .firstElementChild
          .firstElementChild
          .textContent;

          if(li.checked == true){
            counter++;
          }else {
            counter--;
          }
          let showMark = document.querySelector('.showMark');
          
          // if(counter == 1){
          //   showMark.innerHTML = `Selektovana 1 marka`
          // }
          // else if(counter <= 4){
          //   showMark.innerHTML = `Selektovane ${counter} marke`;
          // }else if(counter > 4){
          //   showMark.innerHTML = `Selektovano ${counter} marki`;
          // }
          let previewMark = document.querySelector('.markePreview');
          if(li.checked == true){
            previewMark.innerHTML +=`<li>${spanTag} </li>`;
          }else if(li.checked == false){
            previewMark.innerHTML =``;
          }

        })
      })
      
    }
};
xhttp.open("GET", "/json/car-info.json", true);
xhttp.send();


document.addEventListener('click', addOrRemove)

function addOrRemove(e){
  document.querySelectorAll('.choose__input__single').forEach(wrap => {
    if(e.target == wrap || e.target == wrap.firstChild || e.target == wrap.lastElementChild)wrap.parentElement.lastElementChild.classList.add('showList');
    else {
      wrap.parentElement.lastElementChild.classList.remove('showList');
    }
  })
}