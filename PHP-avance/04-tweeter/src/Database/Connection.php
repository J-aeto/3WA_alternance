<?php 

namespace Twitter\Database;

use PDO;


class Connection {

  protected string $host;
  protected string $dbname;
  protected string $user;
  protected string $password;
  protected int $port;
  protected PDO $pdo;

  public function __construct(string $host, string $dbname, string $user, string $password, int $port = 3306)
  {
    $this->host = $host;
    $this->dbname = $dbname;
    $this->user = $user;
    $this->password = $password;
    $this->port = $port;
  }
 /**
  * Retourne une instance de PDO en tenant compte de la configuration
  *
  * @return PDO
  */
  public function getPdo(): PDO 
  {
    if(empty($this->pdo)) {
      $this->pdo = new PDO("mysql:host=$this->host;port=$this->port;dbname=$this->dbname;charset=utf8", $this->user, $this->password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
      ]);
    }
    
    return $this->pdo;
  }

  public function execute(string $sql, array $params=[])
  {
    $pdo = $this->getPdo();

    $query = $pdo->prepare($sql);

    $query->execute($params);

    return $query;
  }
  
  public function getLastInsertId(): int
  {
    return $this->getPdo()->lastInsertId();
  }

  public function query(string $sql, array $params=[])
  {
    return $this->execute($sql, $params)->fetch();
  }

  public function queryAll(string $sql, array $params=[])
  {
    return $this->execute($sql, $params)->fetchAll();
  }

}