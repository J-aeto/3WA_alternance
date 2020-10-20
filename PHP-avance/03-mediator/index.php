<?php

use Symfony\Component\EventDispatcher\EventDispatcher;

require "vendor/autoload.php";
require "FlightBooking.php";

$mediator = new EventDispatcher;

$mediator->addListener('booking.before_insert', function () {
    var_dump("SMS de confirmation envoyé");
});

$mediator->addListener('booking.after_insert', function () {
    var_dump("Email de confirmation envoyé");
});

$booking = new FlightBooking($mediator);

$booking->book();
