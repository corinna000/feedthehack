<?php
namespace User;

use ZfcUser\Mapper\UserInterface;

class UserPersistence implements UserPersistenceInterface
{
    /**
     * @var \ZfcUser\Mapper\User
     */
    protected $mapper;

    public function __construct(UserInterface $mapper)
    {
        $this->mapper = $mapper;
    }

    public function save(\User\Entity\User $user)
    {
        $this->mapper->update($user);
        return $user;
    }

    public function fetch($id)
    {
        $user = $this->mapper->findById($id);
        return $user;
    }

    public function fetchAll()
    {
        return array();
    }
}