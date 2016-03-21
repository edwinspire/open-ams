<?php

//ini_set('display_errors', 0);
include "../oams_php_script_private/pg_conn_string.php";
include "../common_php_script/pg_result_to_json.php";

header('Content-type: application/json');
$pGdbconn = pg_connect($conn_string) or die("Could not connect");

$result = false;
if (isset($_GET["name"])) {
    $result = pg_query_params($pGdbconn, "SELECT idprovider, provider as name FROM providers WHERE provider ILIKE $1::text ORDER BY provider;", array(str_replace("*", "%", utf8_encode($_GET["name"]))));
}
echo pg_result_to_json($result);
?>