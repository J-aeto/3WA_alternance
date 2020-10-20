<?php

class Flight
{
    private string $number;
    public array $listeners = [
        'takeOff' => [],
        'land' => []
    ];

    public function addEventListener(string $event, callable $callback) //design pattern observer
    {
        $this->listeners[$event][] = $callback;
    }
    protected function trigger($event)
    {
        foreach ($this->listeners[$event] as $callback) {

            $callback();
        }
    }
    public function fly()
    {
        $this->takeOff();

        var_dump("Je vole.");

        $this->land();
    }
    public function takeOff()
    {
        var_dump("Je décolle.");

        $this->trigger("takeOff");
    }
    public function land()
    {
        var_dump("J'atterris.");

        $this->trigger("land");
    }
}
