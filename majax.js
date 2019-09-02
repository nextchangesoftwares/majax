function getData(){
  var text = '{"
  employees":[' +
'{"firstName":"Sarath",
  "lastName":"Shyamson" },' +
'{"firstName":"Fredy",
  "lastName":"John" },' +
'{"firstName":"Evans",
  "lastName":"Thomas" },' +
'{"firstName":"Lewellyn",
"lastName":"Monsingh" },' +
'{"firstName":"Clemant",
"lastName":"Jebakumar" }]}';

obj = JSON.parse(text);
document.write(obj.employees[1].firstName + " " + obj.employees[1].lastName);
}
function getDate(){
var output = new Date();
document.write(output);
}

function doMultiply(p1, p2) {
  var output=1;
  output = p1 * p2;  
  document.write(output);// The function returns the product of p1 and p2
}

function createTable()
    {
      var j=1;
      var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
      for(i=1;i<=10;i++)
      {
    	output = output + "<tr>";
        while(j<=10)
        {
  		  output = output + "<td>" + i*j + "</td>";
   		  j = j+1;
   		}
   		 output = output + "</tr>";
   		 j = 1;
    }
    output = output + "</table>";
    document.write(output);
    }
  
