 //Death Heatmap
 //2015-12-17
        var w3 = 1200, h3 = 620 , pad3 = 20;
        var heat = d3.select("#heatmap").select("svg")                      
                     .attr("width",w3)
                     .attr("height",h3)
                     .append("g")


        var xs_he = d3.scale.linear()
                   .domain([0,123])
                   .range([0,600])

        var ys_he = d3.scale.linear()
        		   .domain([0,123])
        		   //.range([0,h-2*pad])
        		   .range([580,0])

        var xAxis_he = d3.svg.axis()
        				  .scale(xs_he)
        				  .orient("buttom")
        var yAxis_he = d3.svg.axis()
           				  .scale(ys_he)
           				  .orient("right")

        d3.csv("Data/label.csv",function(data){
        	heat.selectAll("circle")
        	   .data(data)
        	   .enter().append("circle")
        	   .attr("id","background")
               .attr("cx",function(d) {return xs_he(d.x);})
               .attr("cy",function(d) {return ys_he(d.y);})
        	   .attr("r",5)
        	   .style("opacity", 1) 
        	   .attr("transform","translate(270,"+pad+")")
        	   .attr("fill",function(d) {
        	   	if ((d["Section"]=="void dire")||(d["Section"]=="void radiant")){
                    return "silver"
                  }
        	   	else {
        	   		return "black"
        	   	}
             })
           })

var colors = ["aliceblue","red"];
var opas = [0.8,1]
var color = d3.scale.linear().range(colors)
var opa = d3.scale.linear().range(opas)


var defs = heat.append("defs")

var legendGradient = defs.append( "linearGradient" )
    .attr( "id", "legendGradient" )
    .attr( "x1", "0" )
    .attr( "x2", "0" )
    .attr( "y1", "1" )
    .attr( "y2", "0" );

legendGradient.append( "stop" )
    .attr( "id", "gradientStart" )
    .attr( "offset", "0%" )
    .style( "stop-opacity", 1);

legendGradient.append( "stop" )
    .attr( "id", "gradientStop" )
    .attr( "offset", "100%" )
    .style( "stop-opacity", 1);

heat.select("#gradientStart")
    .style("stop-color", colors[0]);
heat.select("#gradientStop")
    .style("stop-color", colors[1]);

var legend = heat.append("g")
      .attr("class", "legend");

var legend_normal = heat.append("g")
legend_normal.append("rect")
      .attr("x", 940)
      .attr("y",20)
      .attr("width", 30)
      .attr("height", 100)
      .style("fill", "url(#legendGradient)");
legend_normal.append("text")
             .attr("x",930)
             .attr("y",30)
             .attr("dy",".35em")
             .style("text-anchor", "end")
             .text("high");
legend_normal.append("text")
             .attr("x",930)
             .attr("y",110)
             .attr("dy",".35em")
             .style("text-anchor", "end")
             .text("low");

        d3.csv("Data/heatmap.csv",function(heatdata){
            var z = d3.extent(heatdata,function(d){return d.count;})
            color.domain(z)

            var o = d3.extent(heatdata,function(d){return d.count;})
            opa.domain(o)

                        show = heat.append("a")
                      .selectAll(".dot")
                      .data(heatdata)
                      .enter().append("circle")
                      .attr("r",3)
                      .attr("cx",function(d){return xs_he(d.x);})
                      .attr("cy",function(d){return ys_he(d.y);})
                      .attr("fill",function(d){return color(d.count);})
                      .attr("transform","translate(270,"+pad+")")
                      .attr('fill-opacity', function(d){return opa(d.count);})

        })


