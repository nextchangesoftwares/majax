function intiMajaxinBody()
{
document.write("<center><h1>Majax framework initialized</h1></center>");
document.write("<center><img src='images/logo.png'></center>");
var str = "a";
if (str.length == 0) {
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.write(this.responseText);
      }
    };
    xmlhttp.open("GET", "http://wwww.nellaianantharagam/gethint.php?q=" + str, true);
    xmlhttp.send();
  }
}
