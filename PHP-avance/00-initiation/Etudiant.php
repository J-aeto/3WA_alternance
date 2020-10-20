<?php

use PHPUnit\Framework\TestCase;

class student {
    private string $firstName;
    private string $lastName;
    private int $age;

    public function __construct(string $newFirstName, string $newLastName, int $newAge)
    {
        $this->firstName = $newFirstName;
        $this->lastName = $newLastName;
        $this->age = $newAge;
    }

    public function getFirstName() : string
    {
        return $this->firstName;
    }
    public function getLastName() : string
    {
        return $this->lastName;
    }
    public function getAge() : string
    {
        return $this->age;
    }

    public function setAge(int $newAge)
    {
        if ($newAge < 18 || $newAge > 70)
        {
            throw new Exception("L'age de la personne n'est pas compris entre 18 et 70 ans");
        }
        $this->age = $newAge;
    }

    public function setFirstName(string $newFirstName)
    {
        $this->firstName = strtoupper($newFirstName);
    }
}


