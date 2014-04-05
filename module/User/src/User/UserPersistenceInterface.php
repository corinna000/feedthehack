<?php
namespace User;

interface UserPersistenceInterface
{
    public function save(\User\Entity\User $user);
    public function fetch($id);
    public function fetchAll();
}