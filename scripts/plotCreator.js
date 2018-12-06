function drawChart() {
 // Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;


    
// Adds the svg canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.json("scripts/geo/data/UNHCR_Statistic.json")
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


  	 // Set the ranges
		var maxKey = d3.max(data, function(d) { return +d.key;} );
		var maxValue = d3.max(data, function(d) { return d.value;} );
		var minKey = d3.max(data, function(d) { return +d.key;} );
		var minValue = d3.max(data, function(d) { return d.value;} );


		var x = d3.scaleLinear().range([minKey, maxKey]);
		var y = d3.scaleLinear().range([minValue, maxValue]);


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
      x.domain(d3.extent(data, function(d) { return d.key; }));
      y.domain([0, d3.max(data, function(d) { return d.value; })]);	
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
          .call(d3.axisBottom(x));	
      // Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y));	
  	})	
  .catch(function(error) {
  	console.log(error);
  });

}
drawChart();