Router.configure({
	layoutTemplate: 'index',
	notFoundTemplate: 'error404',
	loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');

Router.map(function () {
	this.route('default', {
		path: '/'
	});
});
