(function(){

	'use strict'

	angular.module('webAdminApp')
	.controller('LogInController', ['$http', function($http){

		this.host = '';
		this.port = '';
		this.dbname = '';
		this.user = '';
		this.password = '';

		this.doConnection = function()
		{
			url = 'PHP/server_conn.php?opType=1';
			url += '&host='+ this.host;
			url += '&port='+ this.port;
			url += '&dbname='+ this.dbname;
			url += '&user='+ this.user;
			url += '&pw='+ this.password;

			$http.get(url).success(function(response){
				if (response.data.estado === 1)
				{
					console.log("Connection Succesfull.");
				}
				else
				{
					console.log("Connection fail!");
				}

			});

		};

	}]);
})();