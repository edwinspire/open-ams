<?php
ini_set('display_errors', 1);
include "../php/pg.php";

$pGdbconn = pg_connect($conn_string)  or die("Could not connect");
	$result = pg_query_params($pGdbconn, 'SELECT * FROM fun_view_outgoing_view_filter_xml($1::timestamp without time zone, $2::timestamp without time zone, $3::integer,  $4::boolean);', array($_GET('fstart'), $_GET('fend'), $_GET('nrows'), true));
$val = pg_fetch_result($result, 0, 0);
echo $val;


/*<xsql>
	<uxsql_query driver='postgres' db_conexion_name='db1' native_xml='true'>SELECT * FROM fun_view_outgoing_view_filter_xml($1::timestamp without time zone, $2::timestamp without time zone, $3::integer,  $4::boolean);</uxsql_query>
		<uxsql_parameter http_get='fstart'></uxsql_parameter>
		<uxsql_parameter http_get='fend'></uxsql_parameter>
		<uxsql_parameter http_get='nrows'></uxsql_parameter>
</xsql>*/

?>
