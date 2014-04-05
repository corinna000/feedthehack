<?php

namespace Application\Entity;

use ZfcUser\Entity\User as ZfcUserEntity;

class User extends ZfcUserEntity
{
    /**
     * @var int
     */
    protected $credits;

    public function getCredits()
    {
        return $this->credits;
    }

    public function setCredits($credits)
    {
        $this->credits = (int) $credits;
        return $this;
    }
}
