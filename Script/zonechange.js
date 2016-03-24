  //Zone Change
  //2015-12-17

  var zone = d3.select("#ZC").select("svg")
            .attr("width",1200)
            .attr("height",620)

            .append("g")
            .attr("transform","translate(50,0)")
  
  var data2 = data;
  var visualization = d3plus.viz()
    .container(zone)
    .data(data)
    .type("box")
    .id("ID")
    .x("Tier")
    .y("AverageChange")
    .draw()