'use strict';

app.factory('Post', function ($resource) {
	return $resource('https://flippinout.firebaseio.com/posts/:id.json');
});