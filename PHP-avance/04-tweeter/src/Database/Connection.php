<?php

namespace Twitter\Database;

use PDO;

class Connection
{
    protected string $host;
    protected string $dbname;
    protected string $user;
    protected string $password;
    protected string $port;

    public function __construct(string $host, string $dbname, string $user, string $password, string $port)
    {
        $this->host = $host;
        $this->dbname = $dbname;
        $this->user = $user;
        $this->password = $password;
        $this->port = $port;
    }

    public function getPDO(): PDO
    {
        $pdo =  new PDO("mysql:host=$this->host;port=$this->port;dbname=$this->dbname;charset=utf8", $this->user, $this->password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);

        return $pdo;
    }

    public function execute(string $sql, array $params = [])
    {
        $pdo = $this->getPDO();

        $query = $pdo->prepare($sql);

        $query->execute($params);
    }

    public function query(string $sql, array $params = [])
    {
        $pdo = $this->getPDO();

        $query = $pdo->prepare($sql);

        $query->execute($params);

        return $query->fetch();
    }
}
