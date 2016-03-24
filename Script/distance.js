//Analysis of Team Distance during Early period and Late period
//2015-12-17

w2 = 900, h2=620
var tier = ["Pro_Win","Pro_Lose","VeryHigh_Win","VeryHigh_Lose","High_Win","High_Lose","Normal_Win","Norml_Lose"]

var x_dd = d3.scale.linear()
             .domain([0,7000])
             .range([0,800])
var y_dd = d3.scale.linear()
             .domain([0,tier.length])
             .range([40,600])
var dis = d3.select("#DD").select("svg")
            .attr("width",1200)
            .attr("height",620)
            .append("g")

var xAxis_dd = d3.svg.axis();
xAxis_dd
                 .orient("bottom")
                 .scale(x_dd)
                 .tickSize(1)
var yAxis_dd = d3.svg.axis();
yAxis_dd
                 .orient("left")
                 .scale(y_dd)
                 .tickSize(1)
                 .tickFormat(function(d,i){return tier[i];})

var colors = ["purple","orchid","red","salmon","coral","gold","darkgreen","lightgreen"]
var colorScale = d3.scale.quantize()
                        .domain([0,tier.length])
                        .range(colors);
var order_early = [8,7,6,5,4,3,1,2]
var order_late = [1,8,5,7,3,6,4]

var y_xis = dis.append("g")
               .attr("transform","translate(270,0)")
               .attr("id","yaxis")
               .call(yAxis_dd)
var x_xis = dis.append("g")
               .attr("transform","translate(270,600)")
               .attr("id","xaxis")
               .call(xAxis_dd)

var grid = d3.range(25).map(function(i){
            return {'x1':0,'y1':25,'x2':0,'y2':590};
        });
var grids = dis.append('g')
                          .attr('id','grid')
                          .attr("transform","translate(270,"+pad+")")
                          .selectAll('line')
                          .data(grid)
                          .enter()
                          .append('line')
                          .attr({'x1':function(d,i){ return i*30; },
                                 'y1':function(d){ return d.y1; },
                                 'x2':function(d,i){ return i*30; },
                                 'y2':function(d){ return d.y2; },
                            })
                          .style({'stroke':'#adadad','stroke-width':'1px'});

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d,i) {return order_early[i];})

dis.call(tip);

d3.csv("Data/team_distance.csv",function(dollars){
    var chart = dis.append("g")
                   .attr("transform","translate(270,"+pad+")")
                   .attr('id','bars')
                   .selectAll('rect')
                            .data(dollars)
                            .enter()
                            .append('rect')
                            .attr('height',30)
                            .attr({'x':0,'y':function(d,i){ return y_dd(i); }})
                            .style('fill',function(d,i){ return colorScale(i); })
                            .attr("width", function(d) {return x_dd(d.Early_time);})  
})
  
  var period = function(){
    var selectedValue = d3.event.target.value;
    d3.csv("Data/team_distance.csv",function(dollars){
        if(selectedValue=="v1"){
            dis.selectAll("rect").remove()
            var chart = dis.append("g")
                           .attr("transform","translate(270,"+pad+")")
                           .attr('id','bars')
                           .selectAll('rect')
                            .data(dollars)
                            .enter()
                            .append('rect')
                            .attr('height',30)
                            .attr({'x':0,'y':function(d,i){ return y_dd(i); }})
                            .style('fill',function(d,i){ return colorScale(i); })
                            .attr("width", function(d) {return x_dd(d.Early_time); });
                        }
        else if(selectedValue=="v2"){
            dis.selectAll("rect").remove()
            var chart = dis.append("g")
                           .attr("transform","translate(270,"+pad+")")
                           .attr('id','bars')
                           .selectAll('rect')
                            .data(dollars)
                            .enter()
                            .append('rect')
                            .attr('height',30)
                            .attr({'x':0,'y':function(d,i){ return y_dd(i); }})
                            .style('fill',function(d,i){ return colorScale(i); })
                            .transition().duration(5000)
                            .attr("width", function(d) {return x_dd(d.Late_time); });
        }
                    })
}
  d3.select("#time").on("change",period);





