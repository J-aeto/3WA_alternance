<?php

namespace Tests\Factory;

use Twitter\Database\Connection;

class ConnectionFactory
{
    static protected Connection $connection;

    static public function getConnection(): Connection
    {
        if (empty(self::$connection)) {
            self::$connection = new Connection("localhost", "twitter_test", "root", "");
        }

        return self::$connection;
    }
}
