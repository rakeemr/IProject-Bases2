<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <meta name="Postgres Web Managament">
    <meta name="Andres Garcia Salas">
    <link rel="icon" href="IMAGES/ICONS/page_icon2.ico">

    <title>Sign In for Postgres Web Management</title>

    <!-- Bootstrap core -->
    <link rel="stylesheet" type="text/css" href="CSS/bootstrap.min.css">

    <link href="CSS/server_conn.css" rel="stylesheet">

    <script type="text/javascript" src="JS/angular.min.js"></script>
    <script type="text/javascript" src="JS/server_conn.js"></script>

  </head>

  <body>

    <div class="container" ng-app="server_connApp" ng-controller="server_connCtrl">

      <form class="form-signin">
        <h2 class="form-signin-heading">Server Connection</h2>

        <label for="inputHost" class="sr-only">Host</label> <!-- Code for Screen Readers XD -->
        <input type="text" ng-model="host" id="inputHost" class="form-control" placeholder="Localhost" required autofocus>

        <label for="inputPort" class="sr-only">Port</label>
        <input type="text" ng-model="port" id="inputPort" class="form-control" placeholder="5432" required>

        <br>

        <label for="inputDB" class="sr-only">Maintenance DB</label>
        <input type="text" ng-model="dbname" id="inputDB" class="form-control" placeholder="postgres or ur own" required>

        <br>

        <label for="inputUser" class="sr-only">User</label>
        <input type="text" ng-model="user" id="inputUser" class="form-control" placeholder="User" required>

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" ng-model="password" id="inputPassword" class="form-control" placeholder="Password" required>

        <button class="btn btn-lg btn-primary btn-block" ng-click="doConnection()">Sign in</button>
      </form>

    </div>

  </body>
</html>