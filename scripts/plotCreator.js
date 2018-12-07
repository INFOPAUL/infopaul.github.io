function drawChart() {
 // Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 20},
    width = 450 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


		var x = d3.scaleLinear().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);
    
// Adds the svg canvas
var svg = d3.select("#UNRefugeePlot")
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
          .call(d3.axisBottom(x));	
      // Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y).tickFormat(function(d){return d/1000000 + " M"}));



      svg.selectAll(".dot")
    .data(data)
  .enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", function(d, i) { return x(d.key) })
    .attr("cy", function(d) { return y(d.value) })
    .attr("r", 5)
      .on("mouseover", function(a, b, c) { 
  			console.log(a) 
        this.attr('class', 'focus')
		})
      .on("mouseout", function() {  })
//      .on("mousemove", mousemove);
//
//  var focus = svg.append("g")
//      .attr("class", "focus")
//      .style("display", "none");
//
//  focus.append("circle")
//      .attr("r", 4.5);
//
//  focus.append("text")
//      .attr("x", 9)
//      .attr("dy", ".35em");
//
//  svg.append("rect")
//      .attr("class", "overlay")
//      .attr("width", width)
//      .attr("height", height)
//      .on("mouseover", function() { focus.style("display", null); })
//      .on("mouseout", function() { focus.style("display", "none"); })
//      .on("mousemove", mousemove);
//
//  function mousemove() {
//    var x0 = x.invert(d3.mouse(this)[0]),
//        i = bisectDate(data, x0, 1),
//        d0 = data[i - 1],
//        d1 = data[i],
//        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
//    focus.attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")");
//    focus.select("text").text(d);
//  }
  	})	
  .catch(function(error) {
  	console.log(error);
  });

}
drawChart();