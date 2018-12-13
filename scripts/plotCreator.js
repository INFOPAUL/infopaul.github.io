function drawChart(id, url) {
 // Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 50, left: 70},
    width = 500 - margin.left - margin.right,
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
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.json(url)
  .then(function(data){
       data = d3.nest()
  				 .key(function(d) { 
  				 	return d.year;
  				 })
  				 .rollup(function(d) { 
  					return d3.sum(d, function(g) {
  							return g.ref; 
  						});
  				 })
  				 .entries(data);	

 		data.forEach(x => {
            x.key = +x.key;
        });
  	 // Set the ranges
		var maxKey = d3.max(data, function(d) { return d.key;} );
		var maxValue = d3.max(data, function(d) { return d.value;} );
		var minKey = d3.min(data, function(d) { return d.key;} );
		var minValue = d3.min(data, function(d) { return d.value;} );




		// Define the line
		var valueline = d3.line()
   		 .x(function(d) { 
    		return x(d.key); 
    	})
    		.y(function(d) { 
    		return y(d.value); 
    	})
        .curve(d3.curveMonotoneX);
      // Scale the range of the data
      x.domain([minKey, maxKey]);
      y.domain([minValue, maxValue]);	
      // Add the valueline path.
      svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("d", valueline);	
      // Add the scatterplot
      /*svg.selectAll("dot")
          .data(data)
        .enter().append("circle")
          .attr("r", 3.5)
          .attr("cx", function(d) { return x(d.date); })
          .attr("cy", function(d) { return y(d.close); });
  */
      // Add the X Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).tickFormat(function(d){
          	return d;
          }));	
      // Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y).tickFormat(function(d){
          	var res = Math.round(d/1000000) + " M";
          	return res;
          }));

         // Add the tooltip container to the vis container
              // it's invisible and its position/contents are defined during mouseover


		 

              // tooltip mouseover event handler
              var tipMouseover = function(d) {

				var xPosition = d3.event.pageX;
    		var yPosition = d3.event.pageY;


                  var html  = "Year: " + d.key + "<br/>" +
                              "Refugees: " + (d.value / 1000000).toFixed(2) + " M";

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
  .enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", function(d, i) { return x(d.key) })
    .attr("cy", function(d) { return y(d.value) })
    .attr("r", 5)
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout);
  	})	
  .catch(function(error) {
  	console.log(error);
  });

}
drawChart("UNRefugeePlot", "scripts/data/UNHCR_Statistic.json");



function drawTonesChart(id, url, yField, yLabel) {
 // Set the dimensions of the canvas / graph
var $container = $('#' + id);
var width = $container.width();

var margin = {top: 30, right: 20, bottom: 30, left: 70},
    height = 400 - margin.top - margin.bottom;
    width = width - margin.left - margin.right;

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

    var parseTime = d3.timeParse("%Y%m%d");

    var timeFormat = d3.timeFormat("%d.%m.%Y")

  	  data.forEach(function(d) {
      	d.year_date = parseTime(d.year_date);
  });
 
  	 // Set the ranges
		var maxValue = d3.max(data, function(d) { return d[yField];} );
		var minValue = d3.min(data, function(d) { return d[yField];} );




		// Define the line
		var valueline = d3.line()
   		 .x(function(d) { 
    		return x(d.year_date); 
    	})
    		.y(function(d) { 
    		return y(d[yField]); 
    	})
        .curve(d3.curveMonotoneX);
      // Scale the range of the data
      x.domain(d3.extent(data, function(d) { return d.year_date; }));
      y.domain([minValue, maxValue]);	
      // Add the valueline path.
      svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("d", valueline);	
      // Add the scatterplot
      /*svg.selectAll("dot")
          .data(data)
        .enter().append("circle")
          .attr("r", 3.5)
          .attr("cx", function(d) { return x(d.date); })
          .attr("cy", function(d) { return y(d.close); });
  */
      // Add the X Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).tickFormat(timeFormat));	

       // text label for the x axis
  	svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Date");


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
      .text(yLabel);      

         // Add the tooltip container to the vis container
              // it's invisible and its position/contents are defined during mouseover


		 

              // tooltip mouseover event handler
              var tipMouseover = function(d) {

				var xPosition = d3.event.pageX;
    		var yPosition = d3.event.pageY;

                  var html  = "Date: " + timeFormat(d.year_date) + "<br/>" +
                              yLabel + ": " + d[yField];

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
  .enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", function(d, i) { return x(d.year_date) })
    .attr("cy", function(d) { return y(d[yField]) })
    .attr("r", 5)
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout);
  	})	
  .catch(function(error) {
  	console.log(error);
  });

}

drawTonesChart("tonesEveryDayPlot", "scripts/data/tones_counts_2015.json","median_tone", "Tone")
drawTonesChart("countEveryDayPlot", "scripts/data/tones_counts_2015.json","number_of_article", "Number of articles")