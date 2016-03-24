//Show Dota2 Map
//2015-12-17
        var w = 1200, h = 600 , pad = 20;
        var map = d3.select("#map").select("svg")
                    .attr("width",w)
                    .attr("height",h)
                    .append("g")

        var xs = d3.scale.linear()
                   .domain([0,123])
                   .range([0,600])

        var ys = d3.scale.linear()
        		   .domain([0,123])
        		   .range([600,0])

        var xAxis = d3.svg.axis()
        				  .scale(xs)
        				  .orient("buttom")
        var yAxis = d3.svg.axis()
           				  .scale(ys)
           				  .orient("right")

        d3.csv("Data/label.csv",function(data){
        	map.selectAll("circle")
        	   .data(data)
        	   .enter().append("circle")
        	   .attr("class","circle")
               .attr("cx",function(d) {return xs(d.x);})
               .attr("cy",function(d) {return ys(d.y);})
        	   .attr("r",3)
               .attr("transform","translate(270,"+pad+")")
        	   .attr("fill",function(d) {
        	   	if (d["Section"]=="base1 radiant"){
        	   		return "ghostwhite"
        	   	}
        	   	else if (d["Section"]=="base2 dire"){
        	   		return "black"
        	   	}
        	   	else if (d["Section"]=="bottomlane dire"){
        	   		return "gold"
        	   	}
        	   	else if (d["Section"]=="bottomlane radiant"){
        	   		return "gold"
        	   	}
        	   	else if (d["Section"]=="jungle dire"){
        	   		return "greenyellow"
        	   	}
        	   	else if (d["Section"]=="jungle radiant"){
        	   		return "greenyellow"
        	   	}
        	   	else if (d["Section"]=="midlane dire"){
        	   		return "cyan"
        	   	}
        	   	else if (d["Section"]=="midlane radiant"){
        	   		return "cyan"
        	   	}
        	   	else if (d["Section"]=="pit dire"){
        	   		return "red"
        	   	}
        	   	else if (d["Section"]=="river"){
        	   		return "darkblue"
        	   	}
        	   	else if (d["Section"]=="toplane dire"){
        	   		return "maroon"
        	   	}
        	   	else if (d["Section"]=="toplane radiant"){
        	   		return "maroon"
        	   	}
        	   	else if (d["Section"]=="void dire"){
        	   		return "peru"
        	   	}
        	   	else if (d["Section"]=="void radiant"){
        	   		return "peru"
        	   	}
                else if ((d["Section"]=="laneshop radiant")||(d["Section"]=="laneshop dire")){
                    return "teal"  
                }
                else if ((d["Section"]=="secretshop radiant")||(d["Section"]=="secretshop dire")){
                    return "slateblue"
                }
        	   })

              var legenddata = [{name:"base1 radiant",color:"ghostwhite"},{name:"base2 dire",color:"black"},{name:"bottomlane",color:"gold"},
                          {name:"jungle",color:"greenyellow"},{name:"laneshop",color:"teal"},{name:"midlane",color:"cyan"},{name:"pit",color:"red"},
                          {name:"river",color:"darkblue"},{name:"secretshop",color:"slateblue"},{name:"toplane",color:"maroon"},{name:"void",color:"peru"}]

              var legend = d3.select("svg")
                             .append("g").selectAll("g")
                             .data(legenddata).enter()
              legend.append("rect")
                    .attr("x",function(d){return w-300})
                    .attr("y",function(d,i){return pad+35*i})
                    .attr("width",20)
                    .attr("height",20)
                    .attr("fill",function(d){return d.color})
                    //.attr("fill","red")
              legend.append("text")
                    .attr("x",function(d){return w-260})
                    .attr("y",function(d,i){return pad+35*i})
                    .attr("dy","0.9em")
                    .text(function(d,i){return d.name})
                    .style("font-family","fantasy")
                    .style("font-size",20)
        })



   
