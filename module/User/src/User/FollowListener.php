<?php
namespace User;

use PhlyRestfully\Exception\CreationException;
use PhlyRestfully\Exception\DomainException;
use PhlyRestfully\ResourceEvent;
use Zend\EventManager\AbstractListenerAggregate;
use Zend\EventManager\EventManagerInterface;
use Zend\Authentication\AuthenticationService;

class FollowListener extends AbstractListenerAggregate
{
    protected $persistence;

    /**
     * @var AuthenticationService
     */
    protected $authService;

    /**
     * @var \Hybrid_Auth
     */
    protected $hybridAuth;

    public function __construct(UserPersistenceInterface $persistence, AuthenticationService $authService, \Hybrid_Auth $hybridAuth)
    {
        $this->persistence = $persistence;
        $this->authService = $authService;
        $this->hybridAuth = $hybridAuth;
    }

    public function attach(EventManagerInterface $events)
    {
        $this->listeners[] = $events->attach('create', array($this, 'onCreate'));
    }

    public function onCreate(ResourceEvent $e)
    {
        $data  = $e->getParam('data');
        $user = $this->authService->getIdentity();
        if (!$user) {
            throw new DomainException('Not found', 404);
        }
        $twitter = $this->hybridAuth->authenticate('Twitter');
        $response = $twitter->api()->api('friendships/create.json', 'post', array(
            'user_id' => $data['id'],
            'follow'  => 'true',
        ));
        
        error_log(var_export($response, true));
        return $user;

        $user = $this->persistence->save($data);
        if (!$user) {
            throw new CreationException();
        }
        return $user;
    }
}