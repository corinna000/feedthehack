<?php

namespace User\Entity;

use ZfcUser\Entity\User as ZfcUserEntity;

class User extends ZfcUserEntity
{
    /**
     * @var int
     */
    protected $credits;

    /**
     * @var array
     */
    protected $contacts;

    public function getCredits()
    {
        return $this->credits;
    }

    public function setCredits($credits)
    {
        $this->credits = (int) $credits;
        return $this;
    }

    public function getContacts()
    {
        return $this->contacts;
    }

    public function setContacts($contacts)
    {
        $this->contacts = $contacts;
        return $this;
    }
}
