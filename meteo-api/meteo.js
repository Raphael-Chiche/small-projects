document.addEventListener('DOMContentLoaded', (event) => {
    buttonClickGET();
});
function buttonClickGET(ville) {
    // Si 'ville' est vide, définir une valeur par défaut
    if (!ville) {
        ville = 'Paris'; // Remplacez 'Paris' par la ville de votre choix
    }

    var url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        ville +
        "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";

    $.get(url, callBackGetSuccess)
        .done(function () {
            //alert( "second success" );
        })
        .fail(function () {
            alert("La ville n'existe pas");
        })
        .always(function () {
            //alert( "finished" );
        });

        document.getElementById('search-ville').value = '';
}

var callBackGetSuccess = function (data) {
  var temperature = document.getElementById("temperature");
  var ressentie = document.getElementById("ressenti");
  var temperatureMin = document.getElementById("temperatureMin");
  var temperatureMax = document.getElementById("temperatureMax");
  var humidite = document.getElementById("humidite");
  var ville = document.getElementById("ville");
 var imgTemp = document.getElementById("imgTemp");
  temperature.innerHTML = data.main.temp+ " °C";
  ressentie.innerHTML = "Ressenti : " + data.main.feels_like + " °C";

  // temperatureMin.innerHTML = "Min : " + data.main.temp_min + " °C";
  // temperatureMax.innerHTML = "Max : " + data.main.temp_max + " °C";

  temperatureMin.innerHTML = data.main.temp_min + " °C";
  temperatureMax.innerHTML = data.main.temp_max + " °C";

  humidite.innerHTML = "Humidité : " + data.main.humidity+ "%";
  ville.innerHTML =data.name;

  if (data.main.temp < 10) {
    imgTemp.src = "images/nuage.png";
  } else if (data.main.temp < 20) {
    imgTemp.src = "images/nuage.png";
  } else {
    imgTemp.src = "images/soleil.png";
  }
};

// -------------------------------
