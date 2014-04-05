<?php
namespace User;

use PhlyRestfully\Exception\CreationException;
use PhlyRestfully\Exception\DomainException;
use PhlyRestfully\ResourceEvent;
use Zend\EventManager\AbstractListenerAggregate;
use Zend\EventManager\EventManagerInterface;
use Zend\Authentication\AuthenticationService;

class UserResourceListener extends AbstractListenerAggregate
{
    protected $persistence;
    /**
     * @var AuthenticationService
     */
    protected $authService;

    public function __construct(UserPersistenceInterface $persistence, AuthenticationService $authService)
    {
        $this->persistence = $persistence;
        $this->$authService = $authService;
    }

    public function attach(EventManagerInterface $events)
    {
        //$this->listeners[] = $events->attach('create', array($this, 'onCreate'));
        $this->listeners[] = $events->attach('fetch', array($this, 'onFetch'));
        //$this->listeners[] = $events->attach('fetchAll', array($this, 'onFetchAll'));
    }

    public function onCreate(ResourceEvent $e)
    {
        $data  = $e->getParam('data');
        $user = $this->persistence->save($data);
        if (!$user) {
            throw new CreationException();
        }
        return $user;
    }

    public function onFetch(ResourceEvent $e)
    {
        $id = $e->getParam('id');
        if ($id == 'current') {
            $user = $this->$authService->getIdentity();
        }
        else {
            $user = $this->persistence->fetch($id);
        }
        if (!$user) {
            throw new DomainException('User not found', 404);
        }
        return $user;
    }

    public function onFetchAll(ResourceEvent $e)
    {
        return $this->persistence->fetchAll();
    }
}