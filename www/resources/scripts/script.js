"use strict";

const config = {
	LINK_MOCK: "https://636a4a55b10125b78fd69372.mockapi.io/version",
	CURRENT_VERSION_NAME: "0.0.1",
	CURRENT_VERSION: 1
}

async function initAction() {
	const urlParams = new URLSearchParams(window.location.search);
	const search = urlParams.get('s');
	const host = urlParams.get('h');

	var googleElement = document.getElementById("google");
	var hostnameElement = document.getElementById("hostname");
	if(googleElement && hostnameElement != null && host != null){
		google.href = "https://www.google.com.br/search?q="+search; 
		hostname.textContent = host;
	} else {
		var textTop = document.getElementById("text_top");
		if (textTop != null) { textTop.style.display = "none"; }
	}

	const $responsiveCarousel = document.querySelector(".js-carousel--simple");
	 
	if ($responsiveCarousel != null) {

		new Glider($responsiveCarousel, {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  draggable: true,
		  dots: ".js-carousel--simple-dots",
		  arrows: {
		    prev: ".js-carousel--simple-prev",
		    next: ".js-carousel--simple-next",
		  },
		  responsive: [
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      },
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      },
		    },
		  ],
		});

	}

}

window.onload=()=>{ 

	initAction();
	
	var openUrlIncognitoElement = document.getElementById("openUrlIncognito");
	if(openUrlIncognitoElement != null) {
		openUrlIncognitoElement.onclick = function() {
			const urlParams = new URLSearchParams(window.location.search);
			const url = urlParams.get('f');
			chrome.windows.create({"url": url, "incognito": true});
		};
	}

	var nameVersionElement = document.getElementById("nameVersion");
	if(nameVersionElement != null) {
		nameVersion.innerText = config.CURRENT_VERSION_NAME;
	}

}

$(document).ready( function () {

	function getLastVersion() {

		var nameVersionElement = document.getElementById("nameVersion");
		$.ajax({url: config.LINK_MOCK, success: function(result){
			if(parseInt(result.version) > parseInt(config.CURRENT_VERSION)) {
				alert("Existe uma versão atualizada, é altamente recomendado o update.");
				window.open(result.link, '_blank');
				if(nameVersionElement != null) {
					nameVersion.innerHTML = config.CURRENT_VERSION_NAME + " <span style='color:red'>está desatualizada!.</span>";
				}
			} else {
				if(nameVersionElement != null) {
					nameVersion.innerHTML = config.CURRENT_VERSION_NAME + " <span style='color:green'>está atualizado.</span>";
				}
			}
		}});

	}

	function listRecommended() {

		var iconNews = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16"><path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/><path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/></svg>';
		var iconPayment = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16"><path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/></svg>';
		var iconBlog = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
		var iconLoja = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/></svg>';

		$.getJSON("resources/json/recommended.json", 
			function (response) {

				var recommended = '';
				$.each(response.data, function (key, value) {

					recommended += '<tr>';

					var type = ""

					switch(value.type) {
					case "Notícias":
						type = iconNews + " " + value.type; 
						break;
					case "Meio de pagamento":
						type = iconPayment + " " + value.type;
						break;
					case "Blog":
						type = iconBlog + " " + value.type;
						break;
					case "Loja":
						type = iconLoja + " " + value.type;
						break;
					default:
						break;
					}

					recommended += '<td>' + type + '</td>';

					recommended += '<td><a target="_blank" href="'+value.title.link+'">'+value.title.title+'</a></td>';

					recommended += '<td>' + value.description + '</td>';

					recommended += '</tr>';
				});

				$('#listRecommended').append(recommended);
				$('#listRecommended').DataTable({
					"language": {
						"url": "resources/json/dataTable.pt-BR.json"
					}
				});
			}
		).fail(function(jqXHR, textStatus, errorThrown) {
			console.log("error " + textStatus);
		});
	}

	function listNotRecommended() {
		$.getJSON("resources/json/not_recommended.json", 
			function (response) {

				var recommended = '';
				$.each(response.data, function (key, value) {

					recommended += '<tr>';

					recommended += '<td>' + value.name + '</td>';

					recommended += '<td>' + value.resume + '</td>';

					recommended += '<td>';
					$.each(value.links, function (key, value_) {
						recommended += ' | <a target="_blank" href="'+value_.link+'">'+value_.titulo+'</a> |';
					});
					recommended += '</td>';

					recommended += '</tr>';
				});

				$('#notRecommended').append(recommended);
				$('#notRecommended').DataTable({
					"language": {
						"url": "resources/json/dataTable.pt-BR.json"
					}
				});
			}
		).fail(function(jqXHR, textStatus, errorThrown) {
			console.log("error " + textStatus);
		});
	}

	function listProfiles() {
		$.getJSON("resources/json/profiles.json", 
			function (response) {

				var recommended = '';
				$.each(response.data, function (key, value) {

					recommended += '<tr>';

					recommended += '<td>' + value.profile + '</td>';

					recommended += '<td>';
					$.each(value.links, function (key, value_) {
						recommended += ' | <a target="_blank" href="'+value_.link+'">'+value_.social+'</a> |';
					});
					recommended += '</td>';

					recommended += '<td>' + value.details + '</td>';

					recommended += '</tr>';
				});

				$('#profiles').append(recommended);
				$('#profiles').DataTable({
					"language": {
						"url": "resources/json/dataTable.pt-BR.json"
					}
				});
			}
		).fail(function(jqXHR, textStatus, errorThrown) {
			console.log("error " + textStatus);
		});
	}

	function listMap() {

		if(document.getElementById("map")) {
			let mapOptions = {
				center:[-13.583171, -52.036867],
				zoom:4
			}

			let map = new L.map('map' , mapOptions);
			map.locate({setView: true, maxZoom: 13});

			map.on('locationfound', function(e) {
				var radius = e.accuracy;

				L.marker(e.latlng).addTo(map)
				.bindPopup("Você está aqui (Eu acho)").openPopup();

				L.circle(e.latlng, radius).addTo(map);
			});

			map.on('locationerror', function() { console.log("Falha ao encontrar localização do usuário."); });

			let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
			map.addLayer(layer);

			$.getJSON("resources/json/stores.json", 
				function (response) {

					$.each(response.data, function (key, store) {

						let lat = store.lat;
						let long = store.long;

						let marker = new L.Marker([lat, long],{"title": store.hint});
						marker
						.addTo(map)
						.bindPopup(store.title+'<hr>'+store.description+'<br/><br/><a href="https://www.google.com/maps/@'+lat+','+long+',17z" target="_blank">Ver no Google Maps</a>');

						marker.on('click', function(e){
							map.setView(e.latlng, 17);
						});	


					});

				}
			).fail(function(jqXHR, textStatus, errorThrown) {
				console.log("jqXHR " + errorThrown);
				console.log("error " + textStatus);
			});

		}

	}



	listRecommended();
	listNotRecommended();		
	listProfiles();
	listMap();
	getLastVersion();
	setCountDown();

	$("#nav-placeholder").load("nav.html");
	//console.clear();
	console.log('%c Nosso código está no Github amigo ;) ', 'background: #222; color: #bada55');


});

function setCountDown() {
	
	if(document.getElementById("countdown")) {
	  // Define a data final da contagem regressiva
      var endDate = moment("2026-01-01T00:00:00");
      
      // Atualiza o contador a cada segundo
      setInterval(function() {
        // Obtém a data atual
        var currentDate = moment();
        
        // Calcula a diferença entre a data final e a data atual
        var diff = endDate.diff(currentDate);
        var diffDays = endDate.diff(currentDate, "days");
        
        // Calcula o número de anos, meses, dias, horas, minutos e segundos restantes
        var years = Math.floor(diffDays / 365);
        var months = moment.duration(diff).months();
        var days = moment.duration(diff).days();
        var hours = moment.duration(diff).hours();
        var minutes = moment.duration(diff).minutes();
        var seconds = moment.duration(diff).seconds();
        
        // Atualiza os valores dos elementos HTML
        document.getElementById("years").innerHTML = years + " Anos";
        document.getElementById("months").innerHTML = months + " Meses";
        document.getElementById("days").innerHTML = days + " Dias";
        document.getElementById("hours").innerHTML = hours + " Horas";
        document.getElementById("minutes").innerHTML = minutes + " Minutos";
        document.getElementById("seconds").innerHTML = seconds + " Segundos";
      }, 1000);
	}

}

function listTimeline() {
	if(document.getElementById("timeline")) {
		$.getJSON("resources/json/timeline.json", 
			function (response) {
				var periods = '';
				var articles = '';
				$.each(response.data, function (key, value) {

					var periodId = key + 1;

					periods += '<section class="period-single" period="period'+periodId+'">';
					periods += '<h4 class="year">'+value.year+'</h4>';
					periods += '<h2 class="title">'+value.title+'</h2>';
					periods += value.description;
					periods += '</section>';

					$.each(value.articles, function (akey, article) {

						articles += '<section class="card-single'+(periodId == 1 && akey == 0 ? ' active' : '')+'" period="period'+periodId+'">';
						articles += '<h4 class="year">'+article.date+'</h4>';
						articles += '<h2 class="title">'+article.title+'</h2>';
						articles += '<div class="content">';
						articles += '<p>'+article.content+'</p>';
						if(article.img != "") {
							articles += '<img src="'+article.img+'"/>';
						}
						if(article.link != "") {
							articles += '<a href="'+article.link+'" target="_blank">Fonte</a>';
						}
						articles += '</div>';
						articles += '</section>';

					});
					
				});

				$('.periods-container').append(periods);
				$('.cards-container').append(articles);
				
			}
		).fail(function(jqXHR, textStatus, errorThrown) {
			console.log("error " + textStatus);
		});
	}
}
listTimeline();

