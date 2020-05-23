<?php

return new \Phalcon\Config([
	'database' => [
		'adapter'     => 'Mysql',
		'host'        => 'localhost',
		'username'    => '<user>',
		'password'    => '<password>',
		'dbname'      => '<dbname>',
	],
	'application' => [
		'appDir'         => ROOT . '/app/',
		'controllersDir' => ROOT . '/app/controllers/',
		'modelsDir'      => ROOT . '/app/models/',
		'viewsDir'       => ROOT . '/app/views/',
		'pluginsDir'     => ROOT . '/app/plugins/',
		'libraryDir'     => ROOT . '/app/library/',
		'cacheDir'       => ROOT . '/app/cache/',
		'configDir'      => ROOT . '/app/config/',
		'baseUri'        => '/',
	]
]);
