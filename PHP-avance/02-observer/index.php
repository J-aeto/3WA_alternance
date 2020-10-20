<?php

require "Flight.php";

$flight = new Flight;

//design pattern observer
$flight->addEventListener('takeOff', function () {
    var_dump("Email de décollage");
    var_dump("SMS de décollage");
});
$flight->addEventListener('land', function () {
    var_dump("Email d'atterrissage");
    var_dump("SMS d'atterrissage");
});
$flight->fly();
