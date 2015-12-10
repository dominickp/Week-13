angular.module('resthitter')
    .controller('DetailController', ['People', '$routeParams', function(People, $routeParams){
  var dc = this;
  //dc.person = {id: 1, name: "Placeholder", twitter: "@placeholder"};

    // $routeParams
    var id = $routeParams.id;

    dc.person = People.get({id:id});

}]);
