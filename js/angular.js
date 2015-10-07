
  inFeed = angular.module('ToDo',[]);
	inFeed.controller('todoController', ['$scope', function($scope) {
	  $scope.search;
  
    var tag = $scope.search;
    $scope.todos = [
			{'title':'Awesome!'}
		];

		$scope.addTodo = function(){
			$scope.todos = [{'title':$scope.newtodo}];
      $scope.newtodo = ''
		}


//    console.log($scope.todos[0].title);
//    console.log($scope.todo);
    function loadInstagram(tagName){
      var feed = new Instafeed({
                get: 'tagged',
                tagName: tagName,
                clientId: '3d04fe8482234785a7f777522d578f39',
//                target: 'instafeed',
                sortBy: 'most-recent',
                limit: 36,
                
      }).run();
  };

  
  loadInstagram("Awesome");


  function clearFeed(){
    document.getElementById('instafeed').innerHTML = "";
  }
    $scope.searchTag = function(){
      clearFeed();
      tag = $scope.newtodo;
      loadInstagram(tag);
  };

    $scope.clearCompleted = function(){
      clearFeed();
    }

	}]);



		


