<?php
include_once "../lib/custom/uDC/pguDC.php";
set_time_limit(350);

header('Content-type: text/event-stream');
header('Cache-Control: no-cache');

$count_seconds = 0;
$last_ts = array();

    $db = new pguDC();
    $db->connect();

if($db->access_control(0)){

while ($count_seconds < 120) {

    $result = pg_query_params($db->connection, "SELECT table_name, ts FROM sys_table_ts;", array());
    if (!$result) {
        echo "An error occurred.\n";
    } else {

        while ($row = pg_fetch_assoc($result)) {
            $name = $row["table_name"];
            $ts = $row["ts"];

            if (isset($last_ts[$name])) {

                if ($last_ts[$name] != $ts) {
                    $last_ts[$name] = $ts;
                    SendMsg($name, $last_ts[$name]);
                }
            } else {
                $last_ts[$name] = $ts;
                SendMsg($name, $last_ts[$name]);
            }
        }
    }



    $count_seconds = $count_seconds + 5;
    sleep(4);
}

}else{
 SendMsg("unauthorized!", "Login required");
    sleep(15);
}

function SendMsg($table, $ts) {
    echo "data: {\"table_name\":\"" . $table . "\", \"ts\":\"" . $ts . "\"}" . PHP_EOL;
    echo PHP_EOL;
    ob_flush();
    flush();
}

?>
