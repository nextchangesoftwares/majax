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
  
