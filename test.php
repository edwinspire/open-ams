<!DOCTYPE html>
<html >
<head>

	<link rel="stylesheet" href="../../_static/js/dojo/../dijit/themes/claro/claro.css">
	
        <?php include("header_dojo.php"); ?>

        <style>@import "themes/claro/document.css";@import "themes/claro/claro.css";@import "lib/dojo/gridx/resources/claro/Gridx.css";@import "oams_accounts.css";@import "oams.css";
        </style>
	
	<script>
var states = [
    {name:"Alabama", state:"AL"},
    {name:"Alaska", state:"AK"},
    {name:"American Samoa", state:"AS"},
    {name:"Arizona", state:"AZ"},
    {name:"Arkansas", state:"AR"},
    {name:"Armed Forces Europe", state:"AE"},
    {name:"Armed Forces Pacific", state:"AP"},
    {name:"Armed Forces the Americas", state:"AA"},
    {name:"California", state:"CA"},
    {name:"Colorado", state:"CO"},
    {name:"Connecticut", state:"CT"},
    {name:"Delaware", state:"DE"},
    {name:"District of Columbia", state:"DC"},
    {name:"Federated States of Micronesia", state:"FM"},
    {name:"Florida", state:"FL"},
    {name:"Georgia", state:"GA"},
    {name:"Guam", state:"GU"},
    {name:"Hawaii", state:"HI"},
    {name:"Idaho", state:"ID"},
    {name:"Illinois", state:"IL"},
    {name:"Indiana", state:"IN"},
    {name:"Iowa", state:"IA"},
    {name:"Kansas", state:"KS"},
    {name:"Kentucky", state:"KY"},
    {name:"Louisiana", state:"LA"},
    {name:"Maine", state:"ME"},
    {name:"Marshall Islands", state:"MH"},
    {name:"Maryland", state:"MD"},
    {name:"Massachusetts", state:"MA"},
    {name:"Michigan", state:"MI"},
    {name:"Minnesota", state:"MN"},
    {name:"Mississippi", state:"MS"},
    {name:"Missouri", state:"MO"},
    {name:"Montana", state:"MT"},
    {name:"Nebraska", state:"NE"},
    {name:"Nevada", state:"NV"},
    {name:"New Hampshire", state:"NH"},
    {name:"New Jersey", state:"NJ"},
    {name:"New Mexico", state:"NM"},
    {name:"New York", state:"NY"},
    {name:"North Carolina", state:"NC"},
    {name:"North Dakota", state:"ND"},
    {name:"Northern Mariana Islands", state:"MP"},
    {name:"Ohio", state:"OH"},
    {name:"Oklahoma", state:"OK"},
    {name:"Oregon", state:"OR"},
    {name:"Pennsylvania", state:"PA"},
    {name:"Puerto Rico", state:"PR"},
    {name:"Rhode Island", state:"RI"},
    {name:"South Carolina", state:"SC"},
    {name:"South Dakota", state:"SD"},
    {name:"Tennessee", state:"TN"},
    {name:"Texas", state:"TX"},
    {name:"Utah", state:"UT"},
    {name:"Vermont", state:"VT"},
    {name: "Virgin Islands, U.S.",state:"VI"},
    {name:"Virginia", state:"VA"},
    {name:"Washington", state:"WA"},
    {name:"West Virginia", state:"WV"},
    {name:"Wisconsin", state:"WI"},
    {name:"Wyoming", state:"WY"}
];

var cities =  [
    { name:"Albany", state:"NY" },
    { name:"Albuquerque", state:"NM" },
    { name:"Alexandria", state:"VA" },
    { name:"Amarillo", state:"TX" },
    { name:"Amherst", state:"MA" },
    { name:"Anaheim", state:"CA" },
    { name:"Anchorage", state:"AK" },
    { name:"Ann Arbor", state:"MI" },
    { name:"Annapolis", state:"MD" },
    { name:"Ashland", state:"OR" },
    { name:"Aspen", state:"CO" },
    { name:"Athens", state:"GA" },
    { name:"Atlanta", state:"GA" },
    { name:"Auburn", state:"AL" },
    { name:"Augusta", state:"GA" },
    { name:"Austin", state:"TX" },
    { name:"Baltimore", state:"MD" },
    { name:"Bangor", state:"ME" },
    { name:"Baton Rouge", state:"LA" },
    { name:"Bethlehem", state:"PA" },
    { name:"Beverly Hills", state:"CA" },
    { name:"Billings", state:"MT" },
    { name:"Biloxi", state:"MS" },
    { name:"Birmingham", state:"AL" },
    { name:"Bloomington", state:"IN" },
    { name:"Boca Raton", state:"FL" },
    { name:"Boise", state:"ID" },
    { name:"Boston", state:"MA" },
    { name:"Boulder", state:"CO" },
    { name:"Branson", state:"MO" },
    { name:"Buffalo", state:"NY" },
    { name:"Burbank", state:"CA" },
    { name:"Burlington", state:"VT" },
    { name:"Butte", state:"MT" },
    { name:"Cambridge", state:"MA" },
    { name:"Carmel", state:"CA" },
    { name:"Cedar Rapids", state:"IA" },
    { name:"Champaign-Urbana", state:"IL" },
    { name:"Chapel Hill", state:"NC" },
    { name:"Charleston", state:"SC" },
    { name:"Charleston", state:"WV" },
    { name:"Charlotte", state:"NC" },
    { name:"Chattanooga", state:"TN" },
    { name:"Chicago", state:"IL" },
    { name:"Cincinnati", state:"OH" },
    { name:"Clearwater Beach", state:"FL" },
    { name:"Cleveland", state:"OH" },
    { name:"Cody", state:"WY" },
    { name:"College Station", state:"TX" },
    { name:"Colorado Springs", state:"CO" },
    { name:"Columbia", state:"SC" },
    { name:"Columbus", state:"GA" },
    { name:"Columbus", state:"OH" },
    { name:"Concord", state:"NH" },
    { name:"Corpus Christi", state:"TX" },
    { name:"Dallas", state:"TX" },
    { name:"Dayton", state:"OH" },
    { name:"Daytona Beach", state:"FL" },
    { name:"Denver", state:"CO" },
    { name:"Des Moines", state:"IA" },
    { name:"Destin", state:"FL" },
    { name:"Detroit", state:"MI" },
    { name:"Dover", state:"DE" },
    { name:"Duluth", state:"MN" },
    { name:"Durham", state:"NC" },
    { name:"El Paso", state:"TX" },
    { name:"Erie", state:"PA" },
    { name:"Eugene", state:"OR" },
    { name:"Evansville", state:"IN" },
    { name:"Fairbanks", state:"AK" },
    { name:"Fargo", state:"ND" },
    { name:"Fayetteville", state:"NC" },
    { name:"Flagstaff", state:"AZ" },
    { name:"Fort Lauderdale", state:"FL" },
    { name:"Fort Wayne", state:"IN" },
    { name:"Fresno", state:"CA" },
    { name:"Ft. Worth", state:"TX" },
    { name:"Galveston", state:"TX" },
    { name:"Gatlinburg", state:"TN" },
    { name:"Grand Forks", state:"ND" },
    { name:"Greensboro", state:"NC" },
    { name:"Greenville", state:"SC" },
    { name:"Gulf Shores", state:"AL" },
    { name:"Hanover", state:"NH" },
    { name:"Harrisburg", state:"PA" },
    { name:"Hartford", state:"CT" },
    { name:"Hershey", state:"PA" },
    { name:"Hollywood", state:"CA" },
    { name:"Hot Springs", state:"AR" },
    { name:"Houston", state:"TX" },
    { name:"Huntsville", state:"AL" },
    { name:"Indianapolis", state:"IN" },
    { name:"Iowa City", state:"IA" },
    { name:"Ithaca", state:"NY" },
    { name:"Jackson", state:"MS" },
    { name:"Jacksonville", state:"FL" },
    { name:"Juneau", state:"AK" },
    { name:"Kalamazoo", state:"MI" },
    { name:"Kansas City", state:"KS" },
    { name:"Kansas City", state:"MO" },
    { name:"Kennebunkport", state:"ME" },
    { name:"Key West", state:"FL" },
    { name:"Knoxville", state:"TN" },
    { name:"Kodiak", state:"AK" },
    { name:"Laguna Beach", state:"CA" },
    { name:"Lansing", state:"MI" },
    { name:"Las Cruces", state:"NM" },
    { name:"Las Vegas", state:"NV" },
    { name:"Lexington", state:"KY" },
    { name:"Lincoln", state:"NE" },
    { name:"Little Rock", state:"AR" },
    { name:"Los Alamos", state:"NM" },
    { name:"Los Angeles", state:"CA" },
    { name:"Louisville", state:"KY" },
    { name:"Lynchburg", state:"VA" },
    { name:"Macon", state:"GA" },
    { name:"Madison", state:"WI" },
    { name:"Manchester", state:"NH" },
    { name:"Mankato", state:"MN" },
    { name:"Memphis", state:"TN" },
    { name:"Miami", state:"FL" },
    { name:"Milwaukee", state:"WI" },
    { name:"Minneapolis", state:"MN" },
    { name:"Mobile", state:"AL" },
    { name:"Moline", state:"IL" },
    { name:"Monterey", state:"CA" },
    { name:"Montgomery", state:"AL" },
    { name:"Montpelier", state:"VT" },
    { name:"Morgantown", state:"WV" },
    { name:"Myrtle Beach", state:"SC" },
    { name:"Naples", state:"FL" },
    { name:"Nashville", state:"TN" },
    { name:"New Haven", state:"CT" },
    { name:"New Orleans", state:"LA" },
    { name:"New York City", state:"NY" },
    { name:"Newark", state:"NJ" },
    { name:"Newport Beach", state:"CA" },
    { name:"Niagara Falls", state:"NY" },
    { name:"Norfolk", state:"VA" },
    { name:"Oakland", state:"CA" },
    { name:"Ogden", state:"UT" },
    { name:"Oklahoma City", state:"OK" },
    { name:"Olympia", state:"WA" },
    { name:"Omaha", state:"NE" },
    { name:"Orlando", state:"FL" },
    { name:"Palm Beach", state:"FL" },
    { name:"Palm Springs", state:"CA" },
    { name:"Palo Alto", state:"CA" },
    { name:"Panama City Beach", state:"FL" },
    { name:"Pasadena", state:"CA" },
    { name:"Pensacola", state:"FL" },
    { name:"Peoria", state:"IL" },
    { name:"Philadelphia", state:"PA" },
    { name:"Phoenix", state:"AZ" },
    { name:"Pierre", state:"SD" },
    { name:"Pigeon Forge", state:"TN" },
    { name:"Pittsburgh", state:"PA" },
    { name:"Pocatello", state:"ID" },
    { name:"Portland", state:"ME" },
    { name:"Portland", state:"OR" },
    { name:"Portsouth", state:"NH" },
    { name:"Princeton", state:"NJ" },
    { name:"Providence", state:"RI" },
    { name:"Raleigh", state:"NC" },
    { name:"Redondo Beach", state:"CA" },
    { name:"Reno", state:"NV" },
    { name:"Richmond", state:"VA" },
    { name:"Rochester", state:"MN" },
    { name:"Rochester", state:"NY" },
    { name:"Rockford", state:"IL" },
    { name:"Sacramento", state:"CA" },
    { name:"Salem", state:"OR" },
    { name:"Salt Lake City", state:"UT" },
    { name:"San Antonio", state:"TX" },
    { name:"San Diego", state:"CA" },
    { name:"San Francisco", state:"CA" },
    { name:"San Jose", state:"CA" },
    { name:"Santa Barbara", state:"CA" },
    { name:"Santa Cruz", state:"CA" },
    { name:"Santa Fe", state:"NM" },
    { name:"Santa Monica", state:"CA" },
    { name:"Sarasota", state:"FL" },
    { name:"Savannah", state:"GA" },
    { name:"Scottsdale", state:"AZ" },
    { name:"Scranton", state:"PA" },
    { name:"Seattle", state:"WA" },
    { name:"Shreveport", state:"LA" },
    { name:"Sioux Falls", state:"SD" },
    { name:"South Bend", state:"IN" },
    { name:"Spokane", state:"WA" },
    { name:"Springfield", state:"MA" },
    { name:"St. Louis", state:"MO" },
    { name:"St. Paul", state:"MN" },
    { name:"St. Petersburg", state:"FL" },
    { name:"State College", state:"PA" },
    { name:"Sun Valley", state:"ID" },
    { name:"Syracuse", state:"NY" },
    { name:"Tacoma", state:"WA" },
    { name:"Tallahassee", state:"FL" },
    { name:"Tampa", state:"FL" },
    { name:"Telluride", state:"CO" },
    { name:"Tempe", state:"AZ" },
    { name:"Terre Haute", state:"IN" },
    { name:"Toledo", state:"OH" },
    { name:"Topeka", state:"KS" },
    { name:"Traverse City", state:"MI" },
    { name:"Trenton", state:"NJ" },
    { name:"Tucson", state:"AZ" },
    { name:"Tulsa", state:"OK" },
    { name:"Vail", state:"CO" },
    { name:"Virginia Beach", state:"VA" },
    { name:"Washington", state:"DC" },
    { name:"Wheeling", state:"WV" },
    { name:"Wichita", state:"KS" },
    { name:"Williamsburg", state:"VA" },
    { name:"Wilmington", state:"DE" },
    { name:"Winston-Salem", state:"NC" },
    { name:"Worcester", state:"MA" },
    { name:"Yellowstone", state:"WY" },
    { name:"York", state:"PA" }
];

require([
    "dojo/store/Memory",
    "dijit/form/ComboBox", "dijit/form/FilteringSelect",
    "dojo/domReady!"
], function(Memory, ComboBox, FilteringSelect){

    new dijit.form.ComboBox({
        id: "city",
        store: new Memory({ data: cities }),
        autoComplete: true,
        query: {state: /.*/},
        style: "width: 150px;",
        required: true,
        searchAttr: "name",
        onChange: function(city){
            console.log("combobox onchange ", city, this.item);
            dijit.byId('state').set('value', this.item ? this.item.state : null);
        }
    }, "city").startup();

    new dijit.form.FilteringSelect({
        id: "state",
        store: new Memory({ idProperty: "state", data: states }),
        autoComplete: true,
        style: "width: 150px;",
        onChange: function(state){
            dijit.byId('city').query.state = this.item.state || /.*/;
        }
    }, "state").startup();
});
	</script>
</head>
<body class="claro">
    <label for="city">City:</label>
<input id="city" />
<label for="state">State:</label>
<input id="state" />
</body>
</html>
