<?php
namespace User;

interface UserPersistenceInterface
{
    public function save(array $data);
    public function fetch($id);
    public function fetchAll();
}