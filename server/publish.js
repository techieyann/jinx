Meteor.publish('interests', function () {
	return Interests.find();
});

Meteor.publish('queueing', function () {
	return Queueing.find();
});
