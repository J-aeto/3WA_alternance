<?php

use PHPUnit\Framework\TestCase;

require_once "Etudiant.php";

class EtudiantTest extends TestCase
{
    public function test_age_student()
    {
        $student = new student("boby", "jean", 60); 

        $student->setAge(30);

        $this->assertEquals(30, $student->getAge());
    }

    public function test_exception_si_age_invalide()
    {
        $student = new student("boby", "jean", 60);

        $this->expectException("Exception");

        $student->setAge(90);
    }

    public function test_name_is_uppercase()
    {
        $student = new student("boby", "jean", 60);

        $student->setFirstName("test");

        $this->assertEquals("TEST", $student->getFirstName());
    }
}