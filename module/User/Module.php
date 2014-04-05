<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace User;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;

class Module
{
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }

    public function getServiceConfig()
    {
        return array(
            'factories' => array(
                'User\UserResourceListener' => function ($services) {
                    $persistence = $services->get('User\PersistenceInterface');
                    $authService = $services->get('zfcuser_auth_service');
                    return new UserResourceListener($persistence, $authService);
                },
                'User\PersistenceInterface' => function ($services) {
                    $mapper = $services->get('zfcuser_user_mapper');
                    return new UserPersistence($mapper);
                }
            )
        );
    }
}
