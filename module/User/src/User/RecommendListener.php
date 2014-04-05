<?php
<?php
namespace User;

use PhlyRestfully\Exception\CreationException;
use PhlyRestfully\Exception\DomainException;
use PhlyRestfully\ResourceEvent;
use Zend\EventManager\AbstractListenerAggregate;
use Zend\EventManager\EventManagerInterface;
use Zend\Authentication\AuthenticationService;

class RecommendListener extends AbstractListenerAggregate
{
    protected $suggestions = array(
        array(
            'identifier' => 298009570,
            'name'       => 'TheNYslice',
        ),
        array(
            'identifier' => 567338384,
            'name'       => 'HashTruckIndy',
        ),
        array(
            'identifier' => 148798681,
            'name'       => 'FlynCupcake',
        ),
        array(
            'identifier' => 366314590,
            'name'       => 'SpiceBoxIndy',
        ),
    );
    /**
     * @var AuthenticationService
     */
    protected $authService;

    /**
     * @var \Hybrid_Auth
     */
    protected $hybridAuth;

    public function __construct(AuthenticationService $authService, \Hybrid_Auth $hybridAuth)
    {
        $this->authService = $authService;
        $this->hybridAuth = $hybridAuth;
    }

    public function attach(EventManagerInterface $events)
    {
        $this->listeners[] = $events->attach('fetchAll', array($this, 'onFetchAll'));
    }

    public function onFetchAll(ResourceEvent $e)
    {
        $user = $this->authService->getIdentity();
        if (!$user) {
            throw new DomainException('Not found', 404);
        }
        $twitter = $this->hybridAuth->authenticate('Twitter');
        $contacts = array();
        foreach ($twitter->getUserContacts() as $contact) {
            $contacts[] = $contact->identifier;
        }

        $recommend = array();
        foreach ($this->suggestions as $suggest) {
            if (!in_array($suggest['identifier'], $contacts)) {
                $recommend[] = $suggest;
            }
        }

        return $recommend;
    }
}