import angular from 'angular';

const dependencies = [
];

angular.module('testApp', dependencies)
	.service('testService', TestService);

function TestService() {
	let testLog = log => {
		console.log(log);
	}
	return {
		testLog: testLog
	};
};