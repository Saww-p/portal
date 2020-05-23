<?php
$router = new \Phalcon\Mvc\Router();

// Use $_SERVER['REQUEST_URI']
$router->setUriSource(
    \Phalcon\Mvc\Router::URI_SOURCE_SERVER_REQUEST_URI
);

$router->add(
	"/notfound/", [
		"controller" => 'index',
		"action"     => 'notfound'
	]
);

$router->handle();
return $router;

?>