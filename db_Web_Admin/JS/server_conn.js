app = angular.module('server_connApp', []);

app.controller('server_connCtrl', function($scope, $http)
{
	$scope.host = '';
	$scope.port = '';
	$scope.dbname = '';
	$scope.user = '';
	$scope.password = '';

	$scope.doConnection = function()
	{
		url = 'PHP/server_conn.php?opType=1';
		url += '&host='+$scope.host;
		url += '&port='+$scope.port;
		url += '&dbname='+$scope.dbname;
		url += '&user='+$scope.user;
		url += '&pw='+$scope.password;

		$http({method: 'GET', url: url}).then
		(
			function(response) 
            {             
            	console.log (url);
                console.log (response.data);
                if (response.data.estado === 1)
                {
                    console.log("Connection Succesfull.");
                }
                else
                {
                    console.log("Connection fail!");
                }
            }, 
            function() 
            {
                console.log ("Error!");
            }
		);
	};	

});
