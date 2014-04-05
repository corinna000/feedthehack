<?php

return array(
    'router' => array('routes' => array(
        'user' => array(
            'type' => 'Literal',
            'options' => array(
                'route' => '/user',
                'defaults' => array(
                    'controller' => 'User\UserController', // for the web UI
                ),
            ),
            'may_terminate' => true,
            'child_routes' => array(
                'api' => array(
                    'type' => 'Segment',
                    'options' => array(
                        'route'      => '/api/users[/:id]',
                        'defaults' => array(
                            'controller' => 'User\ApiController',
                        ),
                    ),
                ),
                'recommend' => array(
                    'type' => 'Segment',
                    'options' => array(
                        'route'      => '/api/recommend',
                        'defaults' => array(
                            'controller' => 'User\RecommendController',
                        ),
                    ),
                ),
            ),
        ),
    )),
    'view_manager' => array(
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
    ),
    'phlyrestfully' => array(
        'resources' => array(
            'User\ApiController' => array(
                'identifier'              => 'Users',
                'listener'                => 'User\UserResourceListener',
                'resource_identifiers'    => array('UserResource'),
                'collection_http_options' => array(),
                'collection_name'         => 'users',
                'page_size'               => 10,
                'resource_http_options'   => array('get'),
                'route_name'              => 'user/api',
            ),
            'User\RecommendController' => array(
                'identifier'              => 'Recommends',
                'listener'                => 'User\RecommendListener',
                'resource_identifiers'    => array('RecommendResource'),
                'collection_http_options' => array('get'),
                'collection_name'         => 'recommends',
                'page_size'               => 10,
                'resource_http_options'   => array(),
                'route_name'              => 'user/recommend',
            ),
        ),
        'renderer' => array(
            'default_hydrator' => 'ClassMethods',
            'hydrators' => array(
                '\User\Entity\User' => 'ClassMethods',
            ),
        ),
    ),
);
