<?php
ini_set('display_errors', 1);
include "../php/pg.php";

$pGdbconn = pg_connect($conn_string)  or die("Could not connect");
	$result = pg_query_params($pGdbconn, 'SELECT * FROM usaga.fun_view_events_xml($1::integer[], $2::timestamp without time zone, $3::timestamp without time zone, $4::integer, $5::integer, $6::integer[], $7::integer[], $8::integer, $9::integer,  $10::boolean);', array($_GET('idaccounts'), $_GET('start'), $_GET('end'), $_GET('f'), $_GET('rows'), $_GET('ideventtypes'), $_GET('status'), $_GET('prioritymin'), $_GET('prioritymax'), true));
$val = pg_fetch_result($result, 0, 0);
echo $val;


/*<xsql>
	<uxsql_query driver='postgres' db_conexion_name='db1' native_xml='true'>SELECT * FROM usaga.fun_view_events_xml($1::integer[], $2::timestamp without time zone, $3::timestamp without time zone, $4::integer, $5::integer, $6::integer[], $7::integer[], $8::integer, $9::integer,  $10::boolean);</uxsql_query>
		<uxsql_parameter http_get='idaccounts'>{}</uxsql_parameter>
		<uxsql_parameter http_get='start'>2000-01-01 00:00</uxsql_parameter>		
		<uxsql_parameter http_get='end'>2050-01-01 00:00</uxsql_parameter>		
		<uxsql_parameter http_get='f'>0</uxsql_parameter>		
		<uxsql_parameter http_get='rows'>100</uxsql_parameter>		
		<uxsql_parameter http_get='ideventtypes'>{}</uxsql_parameter>		
		<uxsql_parameter http_get='status'>{}</uxsql_parameter>		
		<uxsql_parameter http_get='prioritymin'>0</uxsql_parameter>		
		<uxsql_parameter http_get='prioritymax'>100</uxsql_parameter>			
		<uxsql_parameter name='fields_as_base64'>true</uxsql_parameter>	
				
</xsql>*/

?>
