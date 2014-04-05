<?php
namespace User;

interface UserPersistenceInterface
{
    public function save($data);
    public function fetch($id);
    public function fetchAll();
}