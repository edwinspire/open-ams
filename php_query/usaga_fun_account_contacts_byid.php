<?php
ini_set('display_errors', 1);
include "../php/pg.php";

$pGdbconn = pg_connect($conn_string)  or die("Could not connect");
	$result = pg_query_params($pGdbconn, 'SELECT * FROM usaga.fun_account_users_table_xml($1::integer, $2::integer, $3::text, $4::boolean, $5::integer, $6::text, $7::text, $8::text, $9::boolean);', array($_POST('idport'), $_POST('idport'), $_POST('idport'), $_POST('idport'), $_POST('idport'), $_POST('idport'), $_POST('idport'), $_POST('idport'), true));
$val = pg_fetch_result($result, 0, 0);
echo $val;


/*<xsql>
	<uxsql_query driver='postgres' db_conexion_name='db1' native_xml='true'>SELECT * FROM usaga.fun_account_users_table_xml($1::integer, $2::integer, $3::text, $4::boolean, $5::integer, $6::text, $7::text, $8::text, $9::boolean);</uxsql_query>
	<uxsql_parameter http_get='idaccount'>0</uxsql_parameter>
	<uxsql_parameter http_get='idcontact'>0</uxsql_parameter>
		<uxsql_parameter name='fields_as_base64'>true</uxsql_parameter>	
				
</xsql>*/

?>
