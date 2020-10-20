<?php

use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\EventDispatcher\GenericEvent;

class FlightBooking
{
    protected EventDispatcher $dispatcher;

    public function __construct(EventDispatcher $dispatcher)
    {
        $this->dispatcher = $dispatcher;
    }

    public function book()
    {
        var_dump("Réservation du vol");

        $this->dispatcher->dispatch(new GenericEvent(), 'booking.before_insert');
        var_dump("Insertion de la réservation en base de données");

        $this->dispatcher->dispatch(new GenericEvent(), 'booking.after_insert');
    }
}
