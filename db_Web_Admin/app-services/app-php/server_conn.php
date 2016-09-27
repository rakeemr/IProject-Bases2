<?php
	error_reporting(0);

	include 'constants.php';
    
	/* pgsql_config

		$host = "";	  // Host where is the DB
		$port = "5432";
		$dbname = "";   // Maintenance DB 
		$user = "";     // DBO user "admin" 
		$password = ""; // Non Default password
	*/
	// end pgsql_config

    $opType = $_REQUEST["opType"];

    if ($opType == DO_CONNECTION)
    {
    	if (isset($_REQUEST["host"], $_REQUEST["port"], $_REQUEST["dbname"], $_REQUEST["user"], $_REQUEST["pw"]))
    	{
			$host = $_REQUEST["host"];		  	// Host where is the DB
			$port = $_REQUEST["port"];
			$dbname = $_REQUEST["dbname"];  		// Maintenance DB 
			$user = $_REQUEST["user"];     		// DBO user "admin" 
			$password = $_REQUEST["pw"]; 	// Non Default password
			    		
			$strconn = "host=$host port=$port dbname=$dbname user=$user password=$password";

			$conn = pg_connect($strconn) or die('{"estado":0}');
			
			echo '{"estado":1}';

    		pg_close($conn);

		}else
		{
			echo "Invalid Request";
		}

    }

?>