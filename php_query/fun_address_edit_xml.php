<?php
ini_set('display_errors', 1);
include "../php/pg.php";

$pGdbconn = pg_connect($conn_string)  or die("Could not connect");
	$result = pg_query_params($pGdbconn, 'SELECT * FROM fun_address_edit_xml($1::integer, $2::integer, $3::double precision, $4::double precision, $5::text, $6::text,  $7::text, $8::text, $9::text, $10::text, $11::text, $12::text, $13::text, $14::text, $15::timestamp without time zone, $16::boolean);', array($_POST['idaddress'], $_POST['idlocation'], $_POST['geox'], $_POST['geoy'], $_POST['f1'], $_POST['f2'], $_POST['f3'], $_POST['f4'], $_POST['f5'], $_POST['f6'], $_POST['f7'], $_POST['f8'], $_POST['f9'], $_POST['f10'], $_POST['ts'], true));
$val = pg_fetch_result($result, 0, 0);
echo $val;


/*<xsql>
	<uxsql_query driver='postgres' db_conexion_name='db1' native_xml='true'>SELECT * FROM fun_address_edit_xml($1::integer, $2::integer, $3::double precision, $4::double precision, $5::text, $6::text,  $7::text, $8::text, $9::text, $10::text, $11::text, $12::text, $13::text, $14::text, $15::timestamp without time zone, $16::boolean);</uxsql_query>

		<uxsql_parameter http_post='idaddress'>0</uxsql_parameter>
		<uxsql_parameter http_post='idlocation'>0</uxsql_parameter>
		<uxsql_parameter http_post='geox'></uxsql_parameter>
		<uxsql_parameter http_post='geoy'></uxsql_parameter>
		<uxsql_parameter http_post='f1'></uxsql_parameter>
		<uxsql_parameter http_post='f2'></uxsql_parameter>
		<uxsql_parameter http_post='f3'></uxsql_parameter>
		<uxsql_parameter http_post='f4'></uxsql_parameter>
		<uxsql_parameter http_post='f5'></uxsql_parameter>
		<uxsql_parameter http_post='f6'></uxsql_parameter>
		<uxsql_parameter http_post='f7'></uxsql_parameter>
		<uxsql_parameter http_post='f8'></uxsql_parameter>
		<uxsql_parameter http_post='f9'></uxsql_parameter>
		<uxsql_parameter http_post='f10'></uxsql_parameter>
		<uxsql_parameter http_post='ts'></uxsql_parameter>
		<uxsql_parameter name='fields_as_base64'>true</uxsql_parameter>	
		
		
</xsql>*/

?>
