Feed The Squirrel
=================

Installation
------------

Clone the repository and install dependencies using composer:

    ./composer.phar self-update
    ./composer.phar install

(The`self-update`directive is to ensure you have an up-to-date`composer.phar`
available.)

Web Server Setup
----------------

### PHP CLI Server

The simplest way to get started if you are using PHP 5.4 or above is to start the internal PHP cli-server in the root directory:

    php -S 0.0.0.0:8080 -t public/ public/index.php

This will start the cli-server on port 8080, and bind it to all network
interfaces.

**Note: ** The built-in CLI server is *for development only*.

### Apache Setup

To setup apache, setup a virtual host to point to the public/ directory of the
project and you should be ready to go! It should look something like below:

    <VirtualHost *:80>
        ServerName feed-the-squirrel.localhost
        DocumentRoot /path/to/feed-the-squirrel/public
        SetEnv APPLICATION_ENV "development"
        <Directory /path/to/feed-the-squirrel/public>
            DirectoryIndex index.php
            AllowOverride All
            Order allow,deny
            Allow from all
        </Directory>
    </VirtualHost>
