<?php
ini_set('display_errors', 1);
include "../php/pg.php";

$pGdbconn = pg_connect($conn_string)  or die("Could not connect");
	$result = pg_query_params($pGdbconn, 'SELECT * FROM usaga.fun_account_notifications_applyselected_xml($1::integer, $2::integer[], $3::boolean, $4::boolean, $5::text, $6::boolean);', array($_POST('idaccount'), $_POST('idphones'), $_POST('call'), $_POST('sms'), $_POST('msg'), true));
$val = pg_fetch_result($result, 0, 0);
echo $val;


/*<xsql>
	<uxsql_query driver='postgres' db_conexion_name='db1' native_xml='true'>SELECT * FROM usaga.fun_account_notifications_applyselected_xml($1::integer, $2::integer[], $3::boolean, $4::boolean, $5::text, $6::boolean);</uxsql_query>
	<uxsql_parameter http_post='idaccount'>0</uxsql_parameter>
	<uxsql_parameter http_post='idphones'>{}</uxsql_parameter>
	<uxsql_parameter http_post='call'>false</uxsql_parameter>
	<uxsql_parameter http_post='sms'>false</uxsql_parameter>
	<uxsql_parameter http_post='msg'></uxsql_parameter>
		<uxsql_parameter name='fields_as_base64'>true</uxsql_parameter>	
				
</xsql>*/

?>
