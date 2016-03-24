//Position at Initial Time and End Time
//2015-12-17

var initial_time = function(){
	var selectedValue = d3.event.target.value;

	d3.csv("Data/initial_position.csv",function(data){
		if(selectedValue=="v1"){
			start.selectAll("a").remove()
			show = start.append("a")
			          .selectAll(".dot")
			          .data(data)
			          .enter().append("circle")
			          .attr("transform","translate(270,"+pad+")")
			          .attr("r",5)
			          .attr("stroke","purple")
			          .attr("cx",function(d){
			          	if(d.Tier=="Pro"){
			          		return xs_po(d.x)
			          	}
			          })
			          .attr("cy",function(d){
			          	if(d.Tier=="Pro"){
			          		return ys_po(d.y)
			          	}
			          })
			          .attr("fill",function(d){
			          	if(d.WinLose==1){
			          		return "purple"
			          	}
			          	else{
			          		return "orchid"
			          	}
			          })
			          .on("mouseover",function(d,i){
			          	d3.select(this).transition()
			          				   .ease("cubic-out")
			          				   .duration("200")
			          				   .attr("r",10)
			          				   .attr("fill","blue")
			          })
			          .on("mouseout",function(d,i){
			          	d3.select(this).transition()
			          	               .ease("cubic-out")
			          	               .duration("200")
			          	               .attr("r",5)
			          	               .attr("fill",function(d){
			          	               	if(d.WinLose==1){
			          	               		return "purple"
			          	               	}
			          	               	else{
			          	               		return "orchid"
			          	               	}
			          	               })

			          })
		}
		
		if (selectedValue=="v2"){
			start.selectAll("a").remove()
		    show = start.append("a")
		              .selectAll(".dot")
		              .data(data)
		              .enter().append("circle")
		              .attr("transform","translate(270,"+pad+")")
			          .attr("r",5)
			          .attr("cx",function(d){
			          	if(d.Tier=="VeryHigh"){
			          		return xs_po(d.x)
			          	}
			          })
			          .attr("cy",function(d){
			          	if(d.Tier=="VeryHigh"){
			          		return ys_po(d.y)
			          	}
			          })
			          .attr("fill",function(d){
			          	if(d.WinLose==1){
			          		return "red"
			          	}
			          	else{
			          		return "salmon"
			          	}
			          })
			          .attr("stroke","crimson")
			          .on("mouseover",function(d,i){
			          	d3.select(this).transition()
			          				   .ease("cubic-out")
			          				   .duration("200")
			          				   .attr("r",10)
			          				   .attr("fill","blue")
			          })
			          .on("mouseout",function(d,i){
			          	d3.select(this).transition()
			          	               .ease("cubic-out")
			          	               .duration("200")
			          	               .attr("r",5)
			          	               .attr("fill",function(d){
			          	               	if(d.WinLose==1){
			          	               		return "red"
			          	               	}
			          	               	else{
			          	               		return "salmon"
			          	               	}
			          	               })

			          })			          
		}
		else if(selectedValue=="v3"){
			start.selectAll("a").remove()
		    show = start.append("a")
		              .selectAll(".dot")
		              .data(data)
		              .enter().append("circle")
		              .attr("transform","translate(270,"+pad+")")
			          .attr("r",5)
			          .attr("cx",function(d){
			          	if(d.Tier=="High"){
			          		return xs_po(d.x)
			          	}
			          })
			          .attr("cy",function(d){
			          	if(d.Tier=="High"){
			          		return ys_po(d.y)
			          	}
			          })
			          .attr("fill",function(d){
			          	if(d.WinLose==1){
			          		return "orangered"
			          	}
			          	else{
			          		return "gold"
			          	}
			          })
			          .attr("stroke","orangered")
			          .on("mouseover",function(d,i){
			          	d3.select(this).transition()
			          				   .ease("cubic-out")
			          				   .duration("200")
			          				   .attr("r",10)
			          				   .attr("fill","blue")
			          })
			          .on("mouseout",function(d,i){
			          	d3.select(this).transition()
			          	               .ease("cubic-out")
			          	               .duration("200")
			          	               .attr("r",5)
			          	               .attr("fill",function(d){
			          	               	if(d.WinLose==1){
			          	               		return "orangered"
			          	               	}
			          	               	else{
			          	               		return "gold"
			          	               	}
			          	               })

			          })
		}
		else if(selectedValue=="v4"){
			start.selectAll("a").remove()
			show = start.append("a")
			 		  .selectAll(".dot")
			 		  .data(data)
			 		  .enter().append("circle")
			 		  .attr("transform","translate(270,"+pad+")")
			 		  .attr("r",5)
			 		  .attr("stroke","darkgreen")
			 		  .attr("cx",function(d){
			 		  	if(d.Tier=="Normal"){
			 		  		return xs_po(d.x)
			 		  	}
			 		  })
			 		  .attr("cy",function(d){
			 		  	if(d.Tier=="Normal"){
			 		  		return ys_po(d.y)
			 		  	}
			 		  })
			 		  .attr("fill",function(d){
			 		  	if(d.WinLose==1){
			 		  		return "darkgreen"
			 		  	}
			 		  	else{
			 		  		return "lightgreen"
			 		  	}
			 		  })
			          .on("mouseover",function(d,i){
			          	d3.select(this).transition()
			          				   .ease("cubic-out")
			          				   .duration("200")
			          				   .attr("r",10)
			          				   .attr("fill","blue")
			          })
			          .on("mouseout",function(d,i){
			          	d3.select(this).transition()
			          	               .ease("cubic-out")
			          	               .duration("200")
			          	               .attr("r",5)
			          	               .attr("fill",function(d){
			          	               	if(d.WinLose==1){
			          	               		return "darkgreen"
			          	               	}
			          	               	else{
			          	               		return "lightgreen"
			          	               	}
			          	               })

			          })			 		  
		}
		else if(selectedValue=="v5"){
			start.selectAll("a").remove()
			show = start.append("a")
					  .selectAll(".dot")
					  .data(data)
					  .enter().append("circle")
					  .attr("r",5)
					  .attr("stroke","black")
					  .attr("transform","translate(270,"+pad+")")
					  .attr("fill",function(d){
					  	if(d.Tier=="Pro"){
					  		return "purple"
					  	}
					  	else if(d.Tier=="VeryHigh"){
					  		return "red"
					  	}
					  	else if(d.Tier=="High"){
					  		return "orange"
					  	}
					  	else if(d.Tier=="Normal"){
					  		return "green"
					  	}
					  })
					  .attr("cx",function(d){return xs_po(d.x);})
					  .attr("cy",function(d){return ys_po(d.y);})
					  .on("mouseover",function(d,i){
					  	d3.select(this).transition()
					  				   .ease("cubic-out")
					  				   .duration("200")
					  				   .attr("r",10)
					  				   .attr("fill","blue")				  				   
					  })
					  .on("mouseout",function(d,i){
					  	d3.select(this).transition()
					  				   .ease("cubic-out")
					  				   .duration("200")
					  				   .attr("r",5)
					  				   .attr("fill",function(d){
					  				   	if(d.Tier=="Pro"){
					  				   		return "purple"
					  				   	}
					  				   	else if(d.Tier=="VeryHigh"){
					  				   		return "red"
					  				   	}
					  				   	else if(d.Tier=="High"){
					  				   		return "orange"
					  				   	}
					  				   	else if(d.Tier=="Normal"){
					  				   		return "green"
					  				   	}
					  				   })
					  })

		}
	})

}
d3.select("#choose").on("change",initial_time);

var end_time = function(){
	var selectedValue = d3.event.target.value;
	d3.csv("Data/end_position.csv",function(end){
		end.forEach(function(a){
			a.x = +a.x;
		    a.y = +a.y
		})
		
		if(selectedValue=="v5"){
			start.selectAll("a").remove()
			show = start.append("a")
			            .selectAll(".dot")
			            .data(end)
			            .enter().append("circle")
			            .attr("r",5)
			            .attr("stroke","black")
			            .attr("transform","translate(270,"+pad+")")
			            .attr("cx",function(d){return xs_po(d.x);})
			            .attr("cy",function(d){return ys_po(d.y);})
			            .attr("fill",function(d){
					  	if(d.team=="radiant"){
					  		return "snow"
					  	}
					  	else if(d.team=="dire"){
					  		return "black"
					  	}
					  })
		}
        if(selectedValue=="v1"){
			start.selectAll("a").remove()
			show = start.append("a")
			          .selectAll(".dot")
			          .data(end)
			          .enter().append("circle")
			          .attr("r",5)
			          .attr("transform","translate(270,"+pad+")")
			          .attr("cx",function(d){
			          	if(d.tier=="Pro"){
			          		return xs_po(d.x)
			          	}
			          })
			          .attr("cy",function(d){
			          	if(d.tier=="Pro"){
			          		return ys_po(d.y)
			          	}
			          })
			          .attr("stroke","black")
			          .attr("fill",function(d){
			          	if(d.team=="radiant"){
			          		return "snow"
			          	}
			          	else{
			          		return "black"
			          	}
			          })
		}
		
		if (selectedValue=="v2"){
			start.selectAll("a").remove()
		    show = start.append("a")
		              .selectAll(".dot")
		              .data(end)
		              .enter().append("circle")
		              .attr("transform","translate(270,"+pad+")")
			          .attr("r",5)
			          .attr("cx",function(d){
			          	if(d.tier=="VeryHigh"){
			          		return xs_po(d.x)
			          	}
			          })
			          .attr("cy",function(d){
			          	if(d.tier=="VeryHigh"){
			          		return ys_po(d.y)
			          	}
			          })
			          .attr("fill",function(d){
			          	if(d.team=="radiant"){
			          		return "snow"
			          	}
			          	else{
			          		return "black"
			          	}
			          })
			          .attr("stroke","black")	          
		}
		else if(selectedValue=="v3"){
			start.selectAll("a").remove()
		    show = start.append("a")
		              .selectAll(".dot")
		              .data(end)
		              .enter().append("circle")
		              .attr("transform","translate(270,"+pad+")")
			          .attr("r",5)
			          .attr("cx",function(d){
			          	if(d.tier=="High"){
			          		return xs_po(d.x)
			          	}
			          })
			          .attr("cy",function(d){
			          	if(d.tier=="High"){
			          		return ys_po(d.y)
			          	}
			          })
			          .attr("fill",function(d){
			          	if(d.team=="radiant"){
			          		return "snow"
			          	}
			          	else{
			          		return "black"
			          	}
			          })
			          .attr("stroke","black")
		}
		else if(selectedValue=="v4"){
			start.selectAll("a").remove()
			show = start.append("a")
			 		  .selectAll(".dot")
			 		  .data(end)
			 		  .enter().append("circle")
			 		  .attr("transform","translate(270,"+pad+")")
			 		  .attr("r",5)
			 		  .attr("stroke","black")
			 		  .attr("cx",function(d){
			 		  	if(d.tier=="Normal"){
			 		  		return xs_po(d.x)
			 		  	}
			 		  })
			 		  .attr("cy",function(d){
			 		  	if(d.tier=="Normal"){
			 		  		return ys_po(d.y)
			 		  	}
			 		  })
			 		  .attr("fill",function(d){
			 		  	if(d.team=="radiant"){
			 		  		return "snow"
			 		  	}
			 		  	else{
			 		  		return "black"
			 		  	}
			 		  })		 		  
		}
	})
}

d3.select("#endtime").on("change",end_time);

        var w1 = 1200, h1 = 600 , pad1 = 0;
        var start = d3.select("#location").select("svg")                      
                     .attr("width",w1)
                     .attr("height",h1)
                     .append("g")

        var xs_po = d3.scale.linear()
                   .domain([0,123])
                   .range([0,600])

        var ys_po = d3.scale.linear()
        		   .domain([0,123])
        		   .range([600,0])

        var xAxis_po = d3.svg.axis()
        				  .scale(xs_po)
        				  .orient("buttom")
        var yAxis_po = d3.svg.axis()
           				  .scale(ys_po)
           				  .orient("right")

        d3.csv("Data/label.csv",function(data){
        	start.selectAll("circle")
        	   .data(data)
        	   .enter().append("circle")
        	   .attr("id","background")
               .attr("cx",function(d) {return xs_po(d.x);})
               .attr("cy",function(d) {return ys_po(d.y);})
        	   .attr("r",5)
        	   .style("opacity", .2) 
        	   .attr("transform","translate(270,"+pad+")")
        	   .attr("fill",function(d) {
        	   	if (d["Section"]=="base1 radiant"){
        	   		return "white"
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
        	   })

        })

        var legend_pro_win = start.append("g")
        legend_pro_win.append("rect").attr("x",w1-300).attr("y",pad+40).attr("width",20).attr("height",20).style("fill","purple")
        legend_pro_win.append("text").attr("x",w1-260).attr("y",pad+40).attr("dy","0.9em").style("font-size",20).text("Pro Win").style("font-family","fantasy")

        var legend_pro_lose = start.append("g")
        legend_pro_lose.append("rect").attr("x",w1-300).attr("y",pad+75).attr("width",20).attr("height",20).style("fill","orchid")
        legend_pro_lose.append("text").attr("x",w1-260).attr("y",pad+75).attr("dy","0.9em").style("font-size",20).text("Pro Lose").style("font-family","fantasy")

        var legend_veryhigh_win = start.append("g")
        legend_veryhigh_win.append("rect").attr("x",w1-300).attr("y",pad+110).attr("width",20).attr("height",20).style("fill","red")
        legend_veryhigh_win.append("text").attr("x",w1-260).attr("y",pad+110).attr("dy","0.9em").style("font-size",20).text("VeryHigh Win").style("font-family","fantasy")

        var legend_veryhigh_lose = start.append("g")
        legend_veryhigh_lose.append("rect").attr("x",w1-300).attr("y",pad+145).attr("width",20).attr("height",20).style("fill","salmon")
        legend_veryhigh_lose.append("text").attr("x",w1-260).attr("y",pad+145).attr("dy","0.9em").style("font-size",20).text("VeryHigh Lose").style("font-family","fantasy")

        var legend_high_win = start.append("g")
        legend_high_win.append("rect").attr("x",w1-300).attr("y",pad+180).attr("width",20).attr("height",20).style("fill","orangered")
        legend_high_win.append("text").attr("x",w1-260).attr("y",pad+180).attr("dy","0.9em").style("font-size",20).text("High Win").style("font-family","fantasy")

        var legend_high_lose = start.append("g")
        legend_veryhigh_lose.append("rect").attr("x",w1-300).attr("y",pad+215).attr("width",20).attr("height",20).style("fill","gold")
        legend_veryhigh_lose.append("text").attr("x",w1-260).attr("y",pad+215).attr("dy","0.9em").style("font-size",20).text("High Lose").style("font-family","fantasy")

        var legend_normal_win = start.append("g")
        legend_normal_win.append("rect").attr("x",w1-300).attr("y",pad+250).attr("width",20).attr("height",20).style("fill","darkgreen")
        legend_normal_win.append("text").attr("x",w1-260).attr("y",pad+250).attr("dy","0.9em").style("font-size",20).text("Normal Win").style("font-family","fantasy")

        var legend_normal_lose = start.append("g")
        legend_normal_lose.append("rect").attr("x",w1-300).attr("y",pad+285).attr("width",20).attr("height",20).style("fill","lightgreen")
        legend_normal_lose.append("text").attr("x",w1-260).attr("y",pad+285).attr("dy","0.9em").style("font-size",20).text("Normal Lose").style("font-family","fantasy")

        var radiant = start.append("g")
        radiant.append("rect").attr("x",w1-300).attr("y",pad+350).attr("width",20).attr("height",20).style("fill","snow")
        radiant.append("text").attr("x",w1-260).attr("y",pad+350).attr("dy","0.9em").style("font-size",20).text("Radiant").style("font-family","fantasy")

        var dire = start.append("g")
        dire.append("rect").attr("x",w1-300).attr("y",pad+385).attr("width",20).attr("height",20).style("fill","black")
        dire.append("text").attr("x",w1-260).attr("y",pad+385).attr("dy","0.9em").style("font-size",20).text("Dire").style("font-family","fantasy")








