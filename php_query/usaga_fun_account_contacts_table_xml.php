<?php
ini_set('display_errors', 1);
include "../php/pg.php";

$pGdbconn = pg_connect($conn_string)  or die("Could not connect");
	$result = pg_query_params($pGdbconn, 'SELECT * FROM usaga.fun_account_contacts_table_xml($1::integer, $2::integer, $3::integer, $4::boolean, $5::text, $6::text, $7::boolean);', array($_POST('idaccount'), $_POST('idcontact'), $_POST('priority'), $_POST('enable'), $_POST('appointment'), $_POST('note'), true));
$val = pg_fetch_result($result, 0, 0);
echo $val;


/*<xsql>
	<uxsql_query driver='postgres' db_conexion_name='db1' native_xml='true'>SELECT * FROM usaga.fun_account_contacts_table_xml($1::integer, $2::integer, $3::integer, $4::boolean, $5::text, $6::text, $7::boolean);</uxsql_query>
	<uxsql_parameter http_post='idaccount'>0</uxsql_parameter>
	<uxsql_parameter http_post='idcontact'>0</uxsql_parameter>
	<uxsql_parameter http_post='priority'>100</uxsql_parameter>
	<uxsql_parameter http_post='enable'>false</uxsql_parameter>
	<uxsql_parameter http_post='appointment'></uxsql_parameter>
		<uxsql_parameter http_post='note'></uxsql_parameter>
		<uxsql_parameter name='fields_as_base64'>true</uxsql_parameter>	
				
</xsql>*/

?>
