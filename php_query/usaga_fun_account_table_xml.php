<?php
ini_set('display_errors', 1);
include "../php/pg.php";

$pGdbconn = pg_connect($conn_string)  or die("Could not connect");
	$result = pg_query_params($pGdbconn, 'SELECT * FROM usaga.fun_account_table_xml($1::integer, $2::boolean, $3::text, $4::text, $5::integer, $6::integer, $7::integer, $8::integer, $9::text, $10::boolean);', array($_POST('idaccount'), $_POST('enable'), $_POST('account'), $_POST('name'), $_POST('idgroup'), $_POST('partition'), $_POST('type'), $_POST('idcontact'), $_POST('note'), true));
$val = pg_fetch_result($result, 0, 0);
echo $val;


/*<xsql>
	<uxsql_query driver='postgres' db_conexion_name='db1' native_xml='true'>SELECT * FROM usaga.fun_account_table_xml($1::integer, $2::boolean, $3::text, $4::text, $5::integer, $6::integer, $7::integer, $8::integer, $9::text, $10::boolean);</uxsql_query>
	<uxsql_parameter http_post='idaccount'>0</uxsql_parameter>
	<uxsql_parameter http_post='enable'>false</uxsql_parameter>
	<uxsql_parameter http_post='account'></uxsql_parameter>
	<uxsql_parameter http_post='name'></uxsql_parameter>
	<uxsql_parameter http_post='idgroup'>0</uxsql_parameter>
	<uxsql_parameter http_post='partition'>0</uxsql_parameter>
	<uxsql_parameter http_post='type'>0</uxsql_parameter>
		<uxsql_parameter http_post='idcontact'>0</uxsql_parameter>
	<uxsql_parameter http_post='note'></uxsql_parameter>
		<uxsql_parameter name='fields_as_base64'>true</uxsql_parameter>	
				
</xsql>*/

?>
