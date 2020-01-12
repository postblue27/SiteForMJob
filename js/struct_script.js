/*maps*/
var iframe = document.getElementById("map_frame_id");
var link_1 = document.getElementById("table1_link_1");
var shadow = document.getElementById("back_shadow_div");
var close_div = document.getElementsByClassName("map_close_div")[0];
link_1.onclick = function(){
	iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.5661464451105!2d36.388591209451846!3d49.944481528603234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270b8beaec8541%3A0xeb3d4b573ca794c!2z0YPQuy4gMTIt0LPQviDQkNC_0YDQtdC70Y8sIDQsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1540315771068";
	show_map();
}
function show_map(){
	iframe.style.visibility = "visible";
	close_div.style.visibility = "visible";
	shadow.style.visibility = "visible";
}
close_div.onmouseover = function(){
	close_div.style.opacity = "0.75";
}
close_div.onmouseout = function(){ 
	close_div.style.opacity = "0.5"; 
}
close_div.onclick = function(){
	iframe.style.visibility = "hidden";
	close_div.style.visibility = "hidden";
	shadow.style.visibility = "hidden";
}
/*all_map*/
var map_frame = document.getElementsByClassName("all_map_iframe")[0];
map_frame.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d41183.471481965425!2d23.99588594158982!3d49.82428603706585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LDQv9GC0LXQutCw!5e0!3m2!1sru!2sua!4v1540756000256";
/*table navigation*/
var table_1 = document.getElementById("1th_table_link");
var table_2 = document.getElementById("2th_table_link");
var table_3 = document.getElementById("3th_table_link");
//var table_4 = document.getElementById("4th_table_link");
var table1 = document.getElementById("1th_table");
var table2 = document.getElementById("2th_table");
var table3 = document.getElementById("3th_table");
var table4 = document.getElementById("4th_table");
table_1.onclick = function(){
	table_1.className = "active";
	table_2.className = "";
	table_3.className = "";
	//table_4.className = "";
	
	table1.style.display = "table";
	table2.style.display = "none";
	table3.style.display = "none";
	//table4.style.display = "none";
}
table_2.onclick = function(){
	table_1.className = "";
	table_2.className = "active";
	table_3.className = "";
	//table_4.className = "";
	
	table1.style.display = "none";
	table2.style.display = "table";
	table3.style.display = "none";
	//table4.style.display = "none";
}
table_3.onclick = function(){
	table_1.className = "";
	table_2.className = "";
	table_3.className = "active";
	//table_4.className = "";
	
	table1.style.display = "none";
	table2.style.display = "none";
	table3.style.display = "table";
	//table4.style.display = "none";
}
/*table_4.onclick = function(){
	table_1.className = "";
	table_2.className = "";
	table_3.className = "";
	table_4.className = "active";
	
	table1.style.display = "none";
	table2.style.display = "none";
	table3.style.display = "none";
	table4.style.display = "table";
}*/
/*tables*/













































