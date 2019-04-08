var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var output = '';

      for(var i = 0; i < response.length; i++){
        output += `<li class="dropList__item">${response[i].brand}</li>`
      }
      // SELECT WHERE TO PUT BRAND

      var brand = document.querySelector('.odaberiteMarku');
      brand.innerHTML = output;
      // CHOOSE MODEL BASED ON BRAND

      var models = document.querySelectorAll('.odaberiteMarku li');
      models.forEach(model=> {
        model.addEventListener('click', function(e){
          e.preventDefault();
          var outputModel = '';
          function runOver(){
            let auto = model.textContent;
            
            let result = response.find(car => car.brand === auto);
            for(let i = 0; i < result.models.length; i++){
              outputModel +=  `<li class="dropList__item">${result.models[i]}</li>`;
            }
            
            return outputModel;
          }
          runOver();
          const whereToStore = document.querySelector('.odaberiteModel');
  
          whereToStore.innerHTML = outputModel;
        })
      })

    }
};
xhttp.open("GET", "../json/car-info.json", true);
xhttp.send();