function createMap(id, dataUrl)
{

// Margin Convention
var margin = {top: 20, right: 20, bottom: 20, left: 20},
		padding = {top: 50, right: 0, bottom: 50, left: 50}, //left padding for button, bottom padding for legend
		vizWidth = 500,
		vizHeight = 650,
		panelWidth = vizWidth - margin.left - margin.right,
		panelHeight = vizHeight - margin.top - margin.bottom - padding.top - padding.bottom;

var viz = d3.select("#" + id).append("svg")
						.attr("class", "viz")
    				.attr("width", vizWidth)
    				.attr("height", vizHeight);


var panel = viz.append("g")
		.attr("class","panel")
		.attr("width", panelWidth)
    	.attr("height", panelHeight)
    .attr("transform", "translate(" + margin.right + "," + (margin.top) + ")");

//button drawing
//the class of the button is the what happened to the animation after you
//press the button
var buttonHeight = 20, buttonWidth = padding.left;

var button = viz.append("g")
								.attr("id","button")
								.classed("play",true)
								.attr("transform", "translate(" + margin.left + "," +
											margin.top + ")");

button.append("rect")
			.attr("height",buttonHeight)
			.attr("width",buttonWidth)
			.attr("fill","white")
			//.on("mouseover",function(){d3.select(this).attr("fill","grey")})
			//.on("mouseout",function(){d3.select(this).attr("fill","white")})
			.style("stroke","black");


button.append("text")
			.attr("x",buttonWidth/2)
			.attr("y",buttonHeight/2)
			.attr("text-anchor","middle")
			.attr("alignment-baseline","central")
			.text("PLAY") //since the starting class is play

//show the year the choropleth correspond to
var currYear = viz.append("text")
										.attr("transform","translate("+margin.left+","
										+(margin.top+buttonHeight) + ")")
										.attr("x",buttonWidth/2)
										.attr("y",buttonHeight/2)
										.attr("text-anchor","middle")
										.attr("alignment-baseline","central")

//Tooltip drawing
function drawTooltip(d,currYear) {

var xPosition = d3.event.pageX;
    var yPosition = d3.event.pageY;

		d3.select("#tooltip")
			.classed("hidden",false)
			.style("left", xPosition + "px")
            .style("top", yPosition + "px")
			.html(d.properties.name + "<br>"+ d.properties[currYear]);
}

// Legend Drawing
var legendWidth = panelWidth, legendHeight = 10;

var legend = viz.append("g")
								.classed("legend",true)
								.attr("transform", "translate(" + margin.left
								+ "," + (margin.top+panelHeight) + ")")

legend.append("rect")
			.attr("width", legendWidth)
			.attr("height", legendHeight)
			.attr("fill","white")
			.style("stroke","black")

legend.append("image")
			.attr("transform", "translate(" + 0.5 +","+0.5+")")
			.attr("id","legendRect")
			.attr("xlink:href", "images/YlOrRd.png")
			.attr("preserveAspectRatio","none")
			.attr("width", legendWidth-1)
			.attr("height", legendHeight-1)


var files = [dataUrl, "scripts/data/eu.topojson"];

Promise.all(files.map(url => d3.json(url))).then(function(values) {

    var data = values[0];
    var eu = values[1];


    eu = topojson.feature(eu, eu.objects.europe);
    var dataByCountry = d3.nest()
		.key(function(d) { return d.ISO; })
		.map(data);

	eu.features.forEach(function(country) {	 
	     var mentions = dataByCountry.get(country.properties.iso_a3);
	     if(mentions)
	     {
	    		 mentions.forEach(function(mention) {
         				country.properties[mention.year] = mention.Number;
	     		});
		 }
	});

   	var years = data.map(x=>x.year).filter((v, i, a) => a.indexOf(v) === i); 
	var index = 0;

	currYear.text(years[index]);



	
		var numbers = data.map(x=>x.Number);
		var	maxPop = d3.max(numbers);
		var	minPop = d3.min(numbers);

	var mapToOne = d3.scaleLinear()
									.range([0,1])
									.domain([minPop,maxPop])

	var getColor  = d3.scaleSequential(d3.interpolateYlOrRd)
										.domain([minPop,maxPop]);

	var projection = d3.geoMercator().fitSize([panelWidth,panelHeight],eu),
			geoPath = d3.geoPath(projection);

	var areas = panel.selectAll("path")
										.data(eu.features)
										.enter()
										.append("path")
												.attr("d",geoPath)
												.classed("area",true)
												.style("fill",function(d){
													return getColor(d.properties[years[index]]);})
												.on('mouseover', function(d) {
													d3.select(this).classed("highlight",true);
													drawTooltip(d,years[index]);}) // call tooltip function
												.on('mouseout',function(){
													d3.select("#tooltip").classed("hidden", true);
													d3.select(this).classed("highlight",false);
												});

	var ticks = d3.axisBottom(d3.scaleLinear()
														.domain([minPop,maxPop])
														.range([0,legendWidth]));
	legend.append("g")
		.attr("transform","translate(" + 0 + "," + legendHeight + ")")
		.call(ticks);

	function updateColor(index){
		areas.transition()
				.style("fill",function(d){
					return getColor(d.properties[years[index]]);});
	}
	function updateButton(newClass){
		button.classed(newClass,true)
		d3.select("#" + id + " #button text")
			.transition()
			.text(newClass.toUpperCase())
	}
	function updateCurrYear(index){
		currYear.transition()
							.text(years[index])
	}

	console.log(years.length);

	/*function update(year){
		slider.property("value", year);
		d3.select(".year").text(year);
		countyShapes.style("fill", function(d) {
			return color(d.properties.years[year][0].rate)
		});
	}*/


        function tick(timer) {
			if(index < years.length){
					console.log(index);
					updateColor(index);
					updateButton("pause");
					updateCurrYear(index);
				} else{
					index -= 1; //hard coding for tooltips to make sense
					console.log(index);
					if(timer)
						timer.stop();
					updateButton("reset");
				}    
	}


	/*var slider = viz.append("g")
						.attr("class", "slider")
    					.attr("transform", "translate(" + (margin.left + buttonWidth) + "," + (margin.top) + ")")
					.append("input")
						.attr("width", panelWidth - buttonWidth)
    					.attr("height", buttonHeight)
						.attr("type", "range")
						.attr("min", 0)
						.attr("max", years.length - 1)
						.attr("step", 1)
						.on("input", function() {
							index = this.value;
							tick();
						});*/

	button.on("click",function(){
		if(button.classed("reset")){
			button.classed("reset",false);
			index = 0;
			console.log(index);//
			updateColor(index);
			updateButton("play");
			updateCurrYear(index);
		}else if(button.classed("play")){
			button.classed("play",false);
			timer = d3.interval(function(elapsed){
				console.log(elapsed);
				index +=1;
				tick(timer);
				},1000);
		}else if(button.classed("pause")){
			button.classed("pause",false);
			timer.stop();
			updateButton("play");
		}
	})
});
}