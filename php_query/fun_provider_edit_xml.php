<?php
ini_set('display_errors', 1);
include "../php/pg.php";

$pGdbconn = pg_connect($conn_string)  or die("Could not connect");
	$result = pg_query_params($pGdbconn, 'SELECT * FROM fun_provider_edit_xml($1::integer, $2::boolean, $3::text, $4::text, $5::timestamp without time zone, $6::boolean);', array($_POST['idprovider'], $_POST['enable'], $_POST['name'], $_POST['note'], $_POST['ts'], true));
$val = pg_fetch_result($result, 0, 0);
echo $val;


/*<xsql>
	<uxsql_query driver='postgres' db_conexion_name='db1' native_xml='true'>SELECT * FROM fun_provider_edit_xml($1::integer, $2::boolean, $3::text, $4::text, $5::timestamp without time zone, $6::boolean);</uxsql_query>
		<uxsql_parameter http_post='idprovider'>0</uxsql_parameter>
		<uxsql_parameter http_post='enable'></uxsql_parameter>
		<uxsql_parameter http_post='name'></uxsql_parameter>
		<uxsql_parameter http_post='note'></uxsql_parameter>		
		<uxsql_parameter http_post='ts'>2000-01-01 12:00:00.000000</uxsql_parameter>		
		<uxsql_parameter name='fields_as_base64'>true</uxsql_parameter>	
		
</xsql>*/

?>
