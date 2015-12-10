angular.module('resthitter')
    .controller('DetailController', ['People', '$routeParams', '$location', function(People, $routeParams, $location){
  var dc = this;
  //dc.person = {id: 1, name: "Placeholder", twitter: "@placeholder"};

    // $routeParams
    if($routeParams.id !== undefined){
        var id = $routeParams.id;

        dc.person = People.get({id:id});
    } else {
        dc.person = new People();
    }

    dc.save = function(){
        // People.save({}, dc.person, function(){})
        dc.person.$save().then(function(){
            $location.path('/');
        });
        // POST .../people
    }

}]);

