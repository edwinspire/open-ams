<div style="display: inline-block;">
    <select style=" width: auto;" data-dojo-type="dijit/form/FilteringSelect"  value="0" intermediateChanges="false" trim="false" uppercase="false" lowercase="false" propercase="false" required="true" invalidMessage="$_unset_$" pageSize="Infinity" searchDelay="200" data-dojo-attach-point="FS">
<?php
ini_set('display_errors', -1);
include "../uDC/pguDC.php";
echo pguDC::html_tag_option_values("SELECT ididtype as id, name FROM identification_types WHERE length(name) > 0  ORDER BY name;");
?>

    </select>
</div>