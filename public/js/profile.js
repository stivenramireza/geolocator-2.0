$(document).ready(function () {

    $("#alert1").hide();
    $("#alert2").hide();

    $("#containerCrearRuta").hide();
    $("#containerMisRutas").hide();

    var stopGps;
    var arrayPuntos;

    $("#btnLogout").click(function () {
        Cookies.remove('token');
        Cookies.remove('userId');
        Cookies.remove('userName');
        Cookies.remove('userEmail');

        window.location.replace('/signin');
    });

    $("cuenta").click(function () {
        $("#containerCrearRuta").hide();
        $("#containerMisRutas").hide();
        $("#containerCuenta").show();

    });

    ///////////////////////////////////////////////////
    //Jquery de Crear una ruta//

    $("#misRutas").click(function () {
        $("#containerCrearRuta").hide();
        $("#containerCuenta").hide();
        $("#containerMisRutas").show();


        getRoutes();



    });

    function getRoutes() {
        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "/api/route/" + Cookies.get('userId'),
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "authorization": Cookies.get('token'),
                "cache-control": "no-cache"
            },
            "processData": false
        }
        $.ajax(settings).done(function (response) {
            if (response.routes.length != 0) {
                createCards(response.routes);
                queryGetPoints(response.routes);
            } else {
                console.log("no tienes rutas almacenadas");
            }



        }).fail(function (err) {
            console.log(err);
        });
    }

    function createCards(routes) {

        var numRows = Math.ceil((routes.length / 3));
        var i;
        for (i = 0; i < numRows; i++) {
            var idGroupCards = "idGroupCards" + i;
            $("#containerMisRutas").append("<div class='card-deck' id='" + idGroupCards + "'></div>");
        }

        var controllerRow = -1;
        for (i = 0; i < routes.length; i++) {
            if ((i % 3) == 0) {
                controllerRow = controllerRow + 1;
            }

            var idGroupCards = "idGroupCards" + controllerRow;
            var idCard = "idCard" + i;
            var idCardBody = "idCardBody" + i;

            $("#" + idGroupCards).append("<div class='card' id='" + idCard + "'></div>");
            $("#" + idCard).append("<div id='map" + i + "' style='padding: 100px'></div>");
            $("#" + idCard).append("<div class='card-body' id='" + idCardBody + "'></div>");
            $("#" + idCardBody).append("<h5 class='card-title'>" + routes[i].name + "</h5>");
            $("#" + idCardBody).append("<p class='card-text'>" + routes[i].description + "</p>");
        }

    }



    function initMap(points, idMap) {

        console.log("estoy en initMap");
        console.log("me llego de puntos", points);
        console.log("me llego de id", idMap);


        var map = new google.maps.Map(document.getElementById(idMap), {
            zoom: 15,
            center: { lat: points[0].lat, lng: points[0].lng },
            mapTypeId: 'terrain'
        });

        var flightPlanCoordinates = points;

        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        flightPath.setMap(map);
    }

    function queryGetPoints(routes) {
        for (let i = 0; i < routes.length; i++) {
            var arrayPuntos = [];

            for (let j = 0; j < routes[i].points.length; j++) {
                var idPointThisRoute = routes[i].points[j];
                var settings = {
                    "async": false,
                    "crossDomain": true,
                    "url": "/api/point/" + idPointThisRoute,
                    "method": "GET",
                    "headers": {
                        "content-type": "application/json",
                        "authorization": Cookies.get('token'),
                        "cache-control": "no-cache"
                    },
                    "processData": false
                }

                $.ajax(settings).done(function (response) {
                    var objectSpecificPoint = {
                        lat: response.point.latitud,
                        lng: response.point.longitud
                    }
                    arrayPuntos.push(objectSpecificPoint);
                }).fail(function (err) {
                    console.log(err);
                });
            }
            initMap(arrayPuntos, "map" + i);
        }
    }



    ///////////////////////////////////////////////////
    //Jquery de Crear una ruta//

    $("#crearRuta").click(function () {
        $("#containerMisRutas").hide();
        $("#containerCuenta").hide();
        $("#containerCrearRuta").show();

        $("#btnStop").hide();
        $("#formSalvarRuta").hide();

        $("#btnStart").click(function () {
            console.log("presione el boton start");
            if ("geolocation" in navigator) {
                $("#btnStart").hide();
                $("#btnStop").show();
                arrayPuntos = [];

                stopGps = setInterval(function () {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        point = {
                            lati: position.coords.latitude,
                            long: position.coords.longitude
                        }
                        var d = new Date($.now());
                        point.date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                        arrayPuntos.push(point);
                        console.log("agregado");
                    });
                }, 5000);

            } else {
                return { message: "Tu browser no tiene habilidado la geolocalizacion" };
            }
        });
    });

    function querySavePoints(arrayPuntos) {

        var arrayIdsPoints = [];
        arrayPuntos.forEach(element => {
            var settings = {
                "async": false,
                "crossDomain": true,
                "url": "/api/point",
                "method": "POST",
                "headers": {
                    "authorization": Cookies.get('token'),
                    "cache-control": "no-cache",
                    "content-type": "application/json"
                },
                "data": JSON.stringify({
                    "latitud": element.lati,
                    "longitud": element.long,
                    "date": element.date
                })
            }

            $.ajax(settings).done(function (response) {
                arrayIdsPoints.push(response.id);

            }).fail(function (err) {
                $("#textAlert2").html("Problemas almacenando los puntos.");
                $('#alert2').show();

                console.log(err.responseJSON.message);
            });

        });

        return arrayIdsPoints;
    }

    function querySaveRoute(name, description, points) {


        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/route",
            "method": "POST",
            "headers": {
                "authorization": Cookies.get('token'),
                "cache-control": "no-cache",
                "content-type": "application/json",
            },
            "data": JSON.stringify({
                "userId": Cookies.get('userId'),
                "name": name,
                "points": points,
                "description": description
            })
        }

        $.ajax(settings).done(function (response) {
            $("#textAlert1").html("Ruta guardada con éxito!");
            $('#alert1').show();
            console.log("ruta almacenada");
            $("#formSalvarRuta").hide();
            $("#btnStart").show();


        }).fail(function (err) {
            console.log(err.responseJSON.message);
            $("#textAlert2").html("Problemas guardando la ruta.");
            $('#alert2').show();
        });
    }

    $("#btnStop").click(function () {
        clearInterval(stopGps);
        $("#btnStop").hide();
        $("#formSalvarRuta").show();
    });

    $("#btnSaveRoute").click(function () {
        var nameRoute = $("#inputNameRoute").val();
        var descriptionRoute = $("#inputDescriptionRoute").val();
        if (arrayPuntos.length <= 1 || nameRoute.length == 0) {
            $("#textAlert2").html("No se puede salvar esta ruta: Complete el nombre de la ruta || Como mínimo debe almacenar dos puntos");
            $('alert2').show();
            $("#btnStart").show();
        } else {
            var arrayIdsPoints = querySavePoints(arrayPuntos);
            querySaveRoute(nameRoute, descriptionRoute, arrayIdsPoints);
        }

    });

    //////////////////////////////////////////////////////

});




