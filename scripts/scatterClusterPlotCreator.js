function drawClusterScatterPlot(id, url, fieldX, fieldY, labelX, labelY) {
 // Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 70},
    width = 370 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


		var x = d3.scaleLinear().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);
    
    var color = d3.scaleOrdinal(d3.schemeCategory10);

// Adds the svg canvas
var svg = d3.select("#" + id)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.json(url)
  .then(function(data){
     	

  	 // Set the ranges
		var maxKey = d3.max(data, function(d) { return d[fieldX];} );
		var maxValue = d3.max(data, function(d) { return d[fieldY];} );
		var minKey = d3.min(data, function(d) { return d[fieldX];} );
		var minValue = d3.min(data, function(d) { return d[fieldY];} );

      x.domain([minKey, maxKey]);
      y.domain([minValue, maxValue]);	

// Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y).tickFormat(function(d){
            return d;
          }));



          // text label for the y axis
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text(labelY);  

 svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).tickFormat(function(d){
            return d;
          }));

                 // text label for the x axis
      svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text(labelX);



       var tipMouseover = function(d) {

        var xPosition = d3.event.pageX;
        var yPosition = d3.event.pageY;


                  var html  = labelX + ": " + d[fieldX] + "<br/>" +
                              labelY + ": " + d[fieldY] + "<br/>" +
                              "Country Name: " + d.Name;

                   d3.select("#tooltip")
          .classed("hidden",false)
          .html(html)
                      .style("left", (xPosition + 15) + "px")
                      .style("top", (yPosition - 15) + "px")

              };
              // tooltip mouseout event handler
              var tipMouseout = function(d) {
                  d3.select("#tooltip")
                  .classed("hidden", true)
              };

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 5)
      .attr("cx", function(d) { return x(d[fieldX]); })
      .attr("cy", function(d) { return y(d[fieldY]); })
      .style("fill", function(d) { return color(d.clusters); })
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout);

  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });



     
	       

  	})	
  .catch(function(error) {
  	console.log(error);
  });

}
drawClusterScatterPlot("toneCountCluster", "scripts/data/tone_count_clusters.json", "count", "AvgTone", "Number of events", "Average Tone");
drawClusterScatterPlot("toneGDPCluster", "scripts/data/tone_gdp_clusters.json", "GDP", "AvgTone", "GDP", "Average Tone");
drawClusterScatterPlot("clustering_tones_2015_2016", "scripts/data/clustering_tones_2015_2016.json", "tones_2016", "tones_2017", "Tone 2016", "Tone 2017");











function drawScatterPlot(id, url, fieldX, fieldY, labelX, labelY) {
 // Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 70},
    width = 370 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    

// Adds the svg canvas
var svg = d3.select("#" + id)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + 0 + ")");

// Get the data
d3.json(url)
  .then(function(data){
      

     // Set the ranges
    var maxKey = d3.max(data, function(d) { return d[fieldX];} );
    var maxValue = d3.max(data, function(d) { return d[fieldY];} );
    var minKey = d3.min(data, function(d) { return d[fieldX];} );
    var minValue = d3.min(data, function(d) { return d[fieldY];} );

      x.domain([minKey, maxKey]);
      y.domain([minValue, maxValue]); 

// Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y).tickFormat(function(d){
            return d;
          }));



          // text label for the y axis
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text(labelY);  

 svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).tickFormat(function(d){
            return d;
          }));

                 // text label for the x axis
      svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text(labelX);



       var tipMouseover = function(d) {

        var xPosition = d3.event.pageX;
        var yPosition = d3.event.pageY;


                  var html  = labelX + ": " + d[fieldX] + "<br/>" +
                              labelY + ": " + d[fieldY] + "<br/>" +
                              "Country Name: " + d.countries;

                   d3.select("#tooltip")
          .classed("hidden",false)
          .html(html)
                      .style("left", (xPosition + 15) + "px")
                      .style("top", (yPosition - 15) + "px")

              };
              // tooltip mouseout event handler
              var tipMouseout = function(d) {
                  d3.select("#tooltip")
                  .classed("hidden", true)
              };

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 5)
      .attr("cx", function(d) { return x(d[fieldX]); })
      .attr("cy", function(d) { return y(d[fieldY]); })
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout);



     
         

    })  
  .catch(function(error) {
    console.log(error);
  });

}

drawScatterPlot("GiniTonesScatter2015", "scripts/data/gini_tones_2015.json", "gini coefiificent", "average tones", "Gini coefficient", "Average Tone")
drawScatterPlot("GiniTonesScatter2016", "scripts/data/gini_tones_2016.json", "gini coefiificent", "average tones", "Gini coefficient", "Average Tone")
drawScatterPlot("GiniTonesScatter2017", "scripts/data/gini_tones_2017.json", "gini coefiificent", "average tones", "Gini coefficient", "Average Tone")
