angular.module('todoapp').filter('todofilter', todoFilter);

function todoFilter() {
    return function (input, done) {
        var donetask = [];
        var pending = [];
        for (var i = 0; i < input.length; i++) {
            if(input[i].done) donetask.push(input[i]);
            if(!input[i].done) pending.push(input[i]);
        }
        if (done) {
            return donetask;
        }
        return pending;
    }
}