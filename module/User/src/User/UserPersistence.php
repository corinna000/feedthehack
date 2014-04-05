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

    public function save(array $data)
    {
        // noop
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