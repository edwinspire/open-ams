<?php

//ini_set('display_errors', 0);
//include "../oams_php_script_private/pg_conn_string.php";
//include "../common_php_script/pg_result_to_json.php";
include "../oams_php_script_private/oams_db.php";

header('Content-type: application/json');

    $db = new oamsDB();
    $db->connect();
echo $db->query_params_result_as_json("SELECT ididtype as id, name FROM identification_types  ORDER BY name", array());



/*
$pGdbconn = pg_connect($conn_string) or die("Could not connect");

$result = false;
//if(isset($_GET["name"])){
$result = pg_query_params($pGdbconn, "SELECT ididtype as id, name FROM identification_types  ORDER BY name;", array());
//}
echo pg_result_to_json($result);*/
?>
