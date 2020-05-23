<?php

class IndexController extends ControllerBase
{
	public function indexAction()
	{
	}

	/**
	 * Action для отображения Not Found страницы
	 * @return view
	 */
	public function notfoundAction()
	{
		$this->response->setStatusCode(404, 'Not Found');
	}
}
