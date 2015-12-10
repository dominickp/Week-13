angular.module('resthitter')
    .controller('DetailController', ['People', '$routeParams', function(People, $routeParams){
  var dc = this;
  //dc.person = {id: 1, name: "Placeholder", twitter: "@placeholder"};

    // $routeParams
    var id = $routeParams.id;

    dc.person = People.get({id:id});

    dc.save = function(){
        // People.save({}, dc.person, function(){})
        dc.person.$save().then(function(){
            console.log("Success");
        });
        // POST .../people
    }

}]);

