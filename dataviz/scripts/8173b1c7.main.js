function arcGisCountries(a) {
	var b = "";
	$(a).each(function (a, c) {
		b = b + "iso3%3D%27" + c + "%27+OR+"
	}), b = b.slice(0, -4);
	return "https://geoservice.unhcr.org/arcgis/rest/services/wrl_services/wrl_polbnd_a_int_1m_unhcr/MapServer/0/query?where=" + b + "&text=&objectIds=&time=&geometry=&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=0.015&geometryPrecision=3&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=json"
}

function xlsReq(a, b) {
	var c = new XMLHttpRequest;
	c.open("GET", a, !0), c.responseType = "arraybuffer", c.onreadystatechange = function () {
		if (4 === c.readyState)
			if (c.status < 300) {
				for (var a = c.response, d = new Uint8Array(a), e = new Array, f = 0; f != d.length; ++f) e[f] = String.fromCharCode(d[f]);
				var g = e.join(""),
					h = XLS.read(g, {
						type: "binary",
						cellDates: !1
					});
				b(null, h)
			} else b(c.status)
	}, c.send(null)
}

function xlsxReq(a, b) {
	var c = new XMLHttpRequest;
	c.open("GET", a, !0), c.responseType = "arraybuffer", c.onreadystatechange = function () {
		if (4 === c.readyState)
			if (c.status < 300) {
				for (var a = c.response, d = new Uint8Array(a), e = new Array, f = 0; f != d.length; ++f) e[f] = String.fromCharCode(d[f]);
				var g = e.join(""),
					h = XLSX.read(g, {
						cellDates: !1,
						type: "binary"
					});
				b(null, h)
			} else b(c.status)
	}, c.send(null)
}

function getRange(a, b) {
	var c = b,
		d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	a = a.split(":");
	var e = a[0].match(/[a-zA-Z]+|[0-9]+/g),
		f = a[1].match(/[a-zA-Z]+|[0-9]+/g);
	if (e[0].length > 1) var g = e[0].split(""),
		h = d.indexOf(g[0]) + 1 * d.length,
		j = d.indexOf(g[1]),
		l = h + j;
	else var l = d.indexOf(e[0]);
	if (f[0].length > 1) var g = f[0].split(""),
		m = 26 * (d.indexOf(g[0]) + 1),
		n = d.indexOf(g[1]),
		o = m + n;
	else var o = d.indexOf(f[0]);
	var p = parseInt(e[1]),
		q = parseInt(f[1]),
		r = [],
		s = 0;
	for (k = p; k <= q; k++) {
		var t = k;
		for (r[s] = [], i = l; i <= o; i++) {
			if (i < 26) var u = d[i];
			else var v = Math.floor(i / 26),
				w = d[v - 1],
				x = d[i - 26 * v],
				u = w + x;
			var y = c[u + t];
			y ? r[s].push(y.v) : r[s].push(null)
		}
		s++
	}
	return r
}

function getRangeStr(a, b) {
	var c = b,
		d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	a = a.split(":");
	var e = a[0].match(/[a-zA-Z]+|[0-9]+/g),
		f = a[1].match(/[a-zA-Z]+|[0-9]+/g);
	if (e[0].length > 1) var g = e[0].split(""),
		h = d.indexOf(g[0]) + 1 * d.length,
		j = d.indexOf(g[1]),
		l = h + j;
	else var l = d.indexOf(e[0]);
	if (f[0].length > 1) var g = f[0].split(""),
		m = 26 * (d.indexOf(g[0]) + 1),
		n = d.indexOf(g[1]),
		o = m + n;
	else var o = d.indexOf(f[0]);
	var p = parseInt(e[1]),
		q = parseInt(f[1]),
		r = [],
		s = 0;
	for (k = p; k <= q; k++) {
		var t = k;
		for (r[s] = [], i = l; i <= o; i++) {
			if (i < 26) var u = d[i];
			else var v = Math.floor(i / 26),
				w = d[v - 1],
				x = d[i - 26 * v],
				u = w + x;
			var y = c[u + t];
			y ? r[s].push(y.w) : r[s].push(null)
		}
		s++
	}
	return r
}

function getRangeJsonWithHeaders(a, b, c, d) {
	c && (c = getRangeJsonWithHeaders(c, b));
	var e = b,
		f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	a = a.split(":");
	var g = a[0].match(/[a-zA-Z]+|[0-9]+/g),
		h = a[1].match(/[a-zA-Z]+|[0-9]+/g);
	if (g[0].length > 1) var j = g[0].split(""),
		l = f.indexOf(j[0]) + 1 * f.length,
		m = f.indexOf(j[1]),
		n = l + m;
	else var n = f.indexOf(g[0]);
	if (h[0].length > 1) var j = h[0].split(""),
		o = 26 * (f.indexOf(j[0]) + 1),
		p = f.indexOf(j[1]),
		q = o + p;
	else var q = f.indexOf(h[0]);
	var r = parseInt(g[1]),
		s = parseInt(h[1]),
		t = [],
		u = 0;
	if ("month" == d) var v = d3.time.format("%b-%y").parse;
	var w = {};
	for (i = n; i <= q; i++) {
		if (i < 26) var x = f[i];
		else var y = Math.floor(i / 26),
			z = f[y - 1],
			A = f[i - 26 * y],
			x = z + A;
		var B = e[x + r];
		w[i] = B ? c && "month" == d ? v(B.w.replace(/\s/g, "").toLowerCase()) : B.w.replace(/\s/g, "").toLowerCase() : null
	}
	var C = 0;
	for (k = r + 1; k <= s; k++) {
		var D = k;
		if (t[u] = {}, c) {
			t[u].values = [];
			var E = c[C];
			for (var F in E) E.hasOwnProperty(F) && (t[u][F] = E[F])
		}
		for (i = n; i <= q; i++) {
			if (i < 26) var x = f[i];
			else var y = Math.floor(i / 26),
				z = f[y - 1],
				A = f[i - 26 * y],
				x = z + A;
			var G = e[x + D];
			G ? c ? "month" !== d && w[i].indexOf("date") > -1 ? t[u].values.push({
				key: w[i],
				value: excelDate(G.v)
			}) : t[u].values.push({
				key: w[i],
				value: G.v
			}) : w[i].indexOf("date") > -1 ? t[u][w[i]] = excelDate(G.v) : t[u][w[i]] = G.v : c ? t[u].values[w[i]] = null : t[u][w[i]] = null
		}
		u++, C++
	}
	return t
}

function excelDate(a) {
	return new Date(86400 * (a - 25569) * 1e3)
}

function endAll(a, b) {
	var c;
	a.empty() ? b() : (c = a.size(), a.each("end", function () {
		0 === --c && b()
	}))
}

function glow(a) {
	function b() {
		this.append("defs").append("filter").attr("id", a).attr("x", "-20%").attr("y", "-20%").attr("width", "140%").attr("height", "140%").call(function () {
			this.append("feColorMatrix").attr("type", "matrix").attr("values", e), this.append("feGaussianBlur").attr("stdDeviation", c).attr("result", "coloredBlur")
		}).append("feMerge").call(function () {
			this.append("feMergeNode").attr("in", "coloredBlur"), this.append("feMergeNode").attr("in", "SourceGraphic")
		})
	}
	var c = 2,
		d = "#000",
		e = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0";
	return arguments.length || (a = "glow"), b.rgb = function (a) {
		return arguments.length ? (d = a, color = d3.rgb(a), e = "0 0 0 red 0 0 0 0 0 green 0 0 0 0 blue 0 0 0 1 0".replace("red", color.r).replace("green", color.g).replace("blue", color.b), b) : color
	}, b.stdDeviation = function (a) {
		return arguments.length ? (c = a, b) : c
	}, b
}

function toPercent(a) {
	return 0 == a ? "-" : (100 * a).toFixed(1) + "%"
}

function totalRound(a) {
	return a > 1e6 ? (a = (a / 1e6).toFixed(2), a % 1 == 0 && (a = Math.round(a)), a += " million") : a = addCommas(a), a
}

function addCommas(a) {
	if (0 == a) return "-";
	a += "", x = a.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
	for (var b = /(\d+)(\d{3})/; b.test(x1);) x1 = x1.replace(b, "$1,$2");
	return x1 + x2
}
var defaultOptions = {},
	defaultColors = ["#618784", "#00937F", "purple"],
	globalDefaults = {};
globalDefaults.font = {
	family: "'Open Sans', sans-serif"
}, defaultOptions.subsvg = {
	appendTo: "svg",
	id: "subsvg",
	x: 20,
	y: 170,
	width: 1460,
	height: 525,
	frame: 1
}, defaultOptions.slider = {
	thisClass: "slider",
	id: "slider1",
	opacity: 1,
	x: 50,
	y: 0,
	fade: 0,
	delay: 0,
	height: 50,
	width: 500,
	labelPosition: "top",
	defaultValue: 2004,
	data: ["2001", "2002", "2003", "2004", "2005"],
	stroke: "#888888",
	handleStroke: "#999999",
	snap: !1
}, defaultOptions.pie = {
	id: "pie1",
	opacity: 1,
	x: 0,
	y: 0,
	fade: 0,
	delay: 0,
	data: [5, 3],
	innerRadius: .4,
	innerBorder: !0,
	enableText: !1,
	fontSize: "30px",
	titleFontSize: "30px",
	subtitleFontSize: "13px",
	radius: 150,
	color: defaultColors,
	width: 300,
	legend: {
		enabled: !0,
		position: "top"
	},
	seriesNames: ["series 1", "series 2"],
	units: "",
	title: "",
	subtitle: "",
	font: {
		title: {
			size: "20px",
			weight: "bold",
			family: globalDefaults.font.family
		},
		subtitle: {
			size: "12px",
			weight: "normal",
			family: globalDefaults.font.family
		},
		piePercent: {
			size: "20px",
			weight: "bold",
			family: globalDefaults.font.family
		}
	}
}, defaultOptions.map = {}, defaultOptions.map.addPies = {
	color: defaultColors
}, defaultOptions.columnChart = {
	appendTo: "svg",
	id: "columnChart1",
	opacity: 1,
	gutter: .3,
	x: 20,
	y: 735,
	width: 1460,
	height: 120,
	color: defaultColors,
	maxValue: "auto",
	paddingLeft: 0,
	dataLabels: {
		enabled: !0,
		font: {
			size: "12px",
			weight: "normal",
			family: "Lato",
			padding: 6
		}
	},
	yAxis: {
		enabled: !1,
		label: "",
		gridlines: {
			enabled: !0,
			stroke: "grey",
			strokeWidth: 1,
			opacity: .1
		},
		font: {
			values: {
				size: "12px",
				weight: "bold",
				family: "Lato",
				padding: 0
			},
			label: {
				size: "14px",
				weight: "bold",
				family: "Lato",
				padding: 10
			}
		}
	},
	xAxis: {
		enabled: !0,
		label: "Years",
		gridlines: {
			enabled: !0,
			color: "grey",
			opacity: 1
		},
		gridlines: {
			enabled: !0,
			stroke: "#000",
			strokeWidth: 1,
			opacity: .3
		},
		font: {
			values: {
				size: "16px",
				weight: "bold",
				family: "Lato"
			},
			label: {
				size: "14px",
				weight: "bold",
				family: "Lato"
			}
		}
	},
	font: {
		title: {
			size: "20px",
			weight: "bold"
		},
		subtitle: {
			size: "12px",
			weight: "normal"
		}
	},
	legend: {
		enabled: !0,
		position: "top"
	},
	data: [{
		series: "Cats",
		values: [150, 50, 50]
	}, {
		series: "Dogs",
		values: [1e3, 50]
	}, {
		series: "Mice",
		values: [50, 50]
	}, {
		series: "Lions",
		values: [20, 150]
	}, {
		series: "Dogs2",
		values: [100, 50]
	}, {
		series: "Mice3",
		values: [50, 50]
	}, {
		series: "Lions4",
		values: [20, 150, 40]
	}, {
		series: "Dogs5",
		values: [100, 50]
	}, {
		series: "Mice6",
		values: [50, 50]
	}, {
		series: "Lions7",
		values: [20, 150]
	}, {
		series: "Dogs11",
		values: [100, 50]
	}, {
		series: "Mice12",
		values: [50, 50]
	}, {
		series: "Lions13",
		values: [20, 150, 40]
	}, {
		series: "Dogs14",
		values: [100, 50]
	}, {
		series: "Mice15",
		values: [50, 50]
	}, {
		series: "Lions16",
		values: [20, 150]
	}],
	frame: [1]
};
var ie = function () {
	for (var a = 3, b = document.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];);
	return a > 4 ? a : void 0
}();
if (ie <= 9) throw document.getElementById("loaderContent0").style.display = "block", new Error("Visualisation does not support IE7/8/9");
document.getElementById("loaderContent1").style.display = "block";
var isMobile = !1;
(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0), $("#svgContainer").width() < 700 && (isMobile = !0);
var Vizlib = function (sources, callback) {
	function loadFrame(a, b) {
		activeFrame = a, d3.selectAll(".frame").transition().duration(b).style("opacity", 0).style("display", "none"), d3.selectAll(".frame" + a).transition().duration(b).style("opacity", 1).style("display", "block"), 1 == activeFrame ? $("#framePrev").prop("disabled", !0) : $("#framePrev").prop("disabled", !1), activeFrame == maxFrames ? ($("#frameNext").prop("disabled", !0), $("#rightButton").hide()) : $("#frameNext").prop("disabled", !1)
	}

	function initFrame() {
		loadFrame(activeFrame, 0)
	}

	function frameHandler(a, b) {
		var c = {};
		return c.frame = !0, $.isArray(a) ? a.forEach(function (a) {
			c["frame" + a] = !0
		}) : c["frame" + a] = !0, b.classed(c), b
	}

	function log(a, b) {
		logging && console.log(a + ": " + b)
	}

	function traverse(a, b, c) {
		if ("object" == typeof a)
			for (var d in a) "appendTo" != d && traverse(a[d], b[d], d)
	}

	function addCommas(a) {
		a += "", x = a.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
		for (var b = /(\d+)(\d{3})/; b.test(x1);) x1 = x1.replace(b, "$1,$2");
		return x1 + x2
	}

	function randomInt() {
		return Math.floor(Date.now() / 1e3)
	}

	function deepCopy(a, b) {
		var c, d, e, f = Object.prototype.toString;
		b || (e = "[object Array]" === f.call(a), e ? (b = [], b.length = a.length) : b = {});
		for (c in a) e && !a.hasOwnProperty(c) || (d = a[c], "object" == typeof d && "appendTo" != c && "data" != c && (d = deepCopy(d)), b[c] = d);
		return b
	}

	function parseOptions(a, b) {
		var c = a,
			d = deepCopy(b, c);
		if (d.attachTo) {
			var e = "#" + d.attachTo,
				f = $(e)[0].getBBox();
			d3.selectAll(e).attr("opacity", 0);
			d.x = f.x, d.y = f.y, d.width = f.width, d.height = f.height
		}
		return d
	}

	function chartHeader(a, b, c, d, e, f) {
		var g = a.append("g").attr("transform", "translate(0,0)");
		if ("" != f && (b = b + "§ - in " + f), "" != b) var h = g.append("text").attr("x", 0).attr("y", 0).style("font-family", "'Open Sans', sans-serif").style("font-weight", e.title.weight).style("font-size", e.title.size).call(wrap, d, b).selectAll("tspan").attr("dominant-baseline", "hanging");
		if ("" != c) {
			g.append("text").attr("id", "pieTitleSub").attr("x", 0).attr("y", function () {
				return h ? h.node().getBBox().height : 0
			}).style("font-family", "'Open Sans', sans-serif").style("font-weight", e.subtitle.weight).style("font-size", e.subtitle.size).call(wrap, d, c).selectAll("tspan").attr("dominant-baseline", "hanging")
		}
		var i = g.node().getBBox(),
			j = {};
		return j.yOffset = i.height + 4, j
	}

	function chartLegend(a, b, c, d, e, f) {
		var c = (c.position, a.append("g").attr("class", "legend"));
		c.selectAll(".legendItem").data(e).enter().append("g").attr("class", "legendItem").attr("transform", function (a, b) {
			return "translate(300," + 25 * b + ")"
		}).append("rect").attr("x", 0).attr("y", 0).attr("width", 20).attr("height", 10).attr("fill", function (a, b) {
			return f[b]
		}), c.selectAll(".legendItem").append("text").attr("x", 25).attr("y", 0).attr("dominant-baseline", "hanging").text(function (a, b) {
			return a
		})
	}

	function wrap(a, b, c) {
		a.each(function () {
			for (var a, d = d3.select(this), e = c.split(/\s+/).reverse(), f = [], g = 0, h = d.attr("x"), i = d.attr("y"), j = d.text(null).append("tspan").attr("x", h).attr("y", i).attr("dy", "0em"); a = e.pop();) f.push(a), j.text(f.join(" ")), j.node().getComputedTextLength() > b && (f.pop(), j.text(f.join(" ")), f = [a], j = d.append("tspan").attr("x", h).attr("y", i).attr("dy", 1.3 * ++g + 0 + "em").text(a))
		});
		var d = a.selectAll("tspan"),
			e = 0;
		d.each(function () {
			var a = d3.select(this);
			e > 0 && a.style("font-weight", "normal");
			var b = d3.select(this).text();
			if (b.indexOf("§") > -1) {
				var c = b.split("§")[0];
				a.text(c);
				var d = a.node().getComputedTextLength();
				d3.select(this.parentNode).append("tspan").text(b.split("§")[1]).style("font-weight", "normal").attr("dy", a.attr("dy")).attr("x", d).attr("y", a.attr("y")), e++
			}
		})
	}

	function wrapLabel(a, b) {
		a.each(function () {
			for (var a, c = d3.select(this), d = c.text().split(/\s+/).reverse(), e = [], f = 0, g = c.attr("y"), h = parseFloat(c.attr("dy")) || 0, i = c.text(null).append("tspan").attr("x", 0).attr("y", g).attr("dy", h + "em"); a = d.pop();) e.push(a), i.text(e.join(" ")), i.node().getComputedTextLength() > b && (e.pop(), i.text(e.join(" ")), e = [a], i = c.append("tspan").attr("x", 0).attr("y", g).attr("dy", 1.1 * ++f + h + "em").text(a))
		})
	}
	var svg, logging = !0,
		arrow = 0,
		patternId = 0,
		color = ["#618784", "#00937F", "purple"];
	if (2 == arguments.length) {
		var data = [],
			runstr = "queue()";
		sources.forEach(function (a, b) {
			var c = ""//"?_=" + (new Date).getTime();
			a.source.indexOf("arcgis/rest/services") > -1 && (c = ""), a.source.indexOf("popdata.unhcr.org") > -1 && (c = "");
			var d = "d3.json";
			a.source.indexOf(".json") > -1 && (d = "d3.json"), a.source.indexOf(".csv") > -1 && (d = "d3.csv"), a.source.indexOf(".svg") > -1 && (d = "d3.xml"), a.source.indexOf(".xls") > -1 && (d = "xlsReq"), a.source.indexOf(".xlsx") > -1 && (d = "xlsxReq"), sources.length - 1 != b ? runstr += ".defer(" + d + ', "' + a.source + c + '")' : runstr += ".defer(" + d + ', "' + a.source + c + '").await(function(){for (i = 1; i < arguments.length; i++) { data[sources[i-1].name] = arguments[i];}; callback(data); });'
		}), eval(runstr)
	}
	var activeFrame = 1,
		maxFrames = 4;
	this.maxFrames = function (a) {
		maxFrames = a
	}, this.gotoFrame = function (a, b) {
		loadFrame(a, b)
	}, this.nextFrame = function (a) {
		return activeFrame++, this.gotoFrame(activeFrame, a), activeFrame
	}, this.prevFrame = function (a) {
		return activeFrame -= 1, this.gotoFrame(activeFrame, a), activeFrame
	}, this.hide = function (a) {
		var b = 1e3,
			c = 0;
		if (a.fade && (b = a.fade), a.delay && (c = a.delay), a.destroy && a.destroy, void 0 == a.object || "" == a.object) return alert("hide: no object has been set - e.g. 'object': pie1"), !1;
		var d = a.object;
		d.transition().delay(c).duration(b).style("opacity", 0), 1 == a.destroy && d.remove()
	}, this.show = function (a) {
		var b = 1e3,
			c = 0,
			d = 1;
		if (a.fade && (b = a.fade), a.delay && (c = a.delay), a.opacity && (d = a.opacity), void 0 == a.object || "" == a.object) return alert("hide: no object has been set - e.g. 'object': pie1"), !1;
		a.object.transition().delay(c).duration(b).style("opacity", d)
	};
	var rounder = function (a) {
		var b = Math.abs(a);
		return b < 100 ? 10 * Math.ceil(a / 10) : b < 500 ? 50 * Math.ceil(a / 50) : b < 1e3 ? 100 * Math.ceil(a / 100) : b < 1e4 ? 1e3 * Math.ceil(a / 1e3) : b < 1e5 ? 1e4 * Math.ceil(a / 1e4) : b < 1e6 ? 1e5 * Math.ceil(a / 1e5) : b < 1e7 ? 1e6 * Math.ceil(a / 1e6) : b < 1e8 ? 1e7 * Math.ceil(a / 1e7) : void 0
	};
	this.createSvg = function (a) {
		var b = "svg",
			c = 1500,
			d = 1500,
			e = "auto",
			f = !1;
		if (void 0 == a.div || "" == a.div) return alert("createSvg: no div has been set - e.g. 'div': '#box1'"), !1;
		if (void 0 == a.id || "" == a.id) return alert("createSvg: no id has been set for the svg - e.g. 'id': 'svg1'"), !1;
		a.id && (id = a.id), a.class && (b = a.class), a.div && (div = a.div), a.aspectRatio && (e = a.aspectRatio), a.viewBoxWidth && (c = a.viewBoxWidth), a.viewBoxHeight && (d = a.viewBoxHeight), void 0 != a.downloadButton && a.downloadButton, void 0 != a.scrollable && (f = a.scrollable);
		var g = div,
			h = "divcontainer_" + Math.floor(1e4 * Math.random());
		$(g).append('<div id="' + h + '"></div>'), div = "#" + h, $(div).css("margin", "auto"), e = c / d, $(div).addClass("vizlibResponsiveDiv"), $(div).attr("data-aspectRatio", e), $(div).css("overflow", "hidden");
		window.onresize = function () {
			setTimeout(i, 10)
		};
		var i = function () {
			if ($(div).hasClass("vizlibResponsiveDiv")) {
				$(div).width("100%");
				var b = $(div).attr("data-aspectRatio"),
					c = $(div).width(),
					d = $(div).height();
				if ($(div).height(c / e), 0 == f) $(div).height("100%"), c = $(div).width(), d = $(div).height(), c / e > d ? $(div).width($(div).height() * e) : ($(div).width("100%"), $(div).height($(div).width() / b));
				else {
					$(div).width("100%");
					var c = $(div).width(),
						d = $(div).height();
					c / b > d && $(div).height($(div).width() / b)
				}
				if (a.isMobile) {
					var c = $(div).width(),
						d = $(div).height();
					$(div).width("100%"), $(div).height(c / e)
				}
			}
		};
		return $(document).ready(function () {
			$(window).trigger("resize")
		}), this.svg = d3.select(div).append("svg").attr("id", id).attr("class", b).attr("height", "100%").attr("width", "100%").attr("viewBox", "0 0 " + c + " " + (d - 0)).attr("preserveAspectRatio", "xMinYMin slice").style("-moz-user-select", "none").style("-khtml-user-select", "none").style("-webkit-user-select", "none").style("-ms-user-select", "none").style("user-select", "none").style("cursor", "default"), void 0 != a.frame && (vector = frameHandler(a.frame, this.svg)), this.svg
	}, this.createSubSvg = function (a) {
		return a = parseOptions(defaultOptions.subsvg, a), void 0 == a.id || "" == a.id ? (alert("createSvg: no id has been set for the svg - e.g. 'id': 'svg1'"), !1) : (this.svg = a.appendTo.append("g").attr("transform", "translate(" + a.x + "," + a.y + ")").append("svg").attr("id", a.id).attr("class", a.classed).attr("height", a.height + "px").attr("width", a.width + "px").attr("viewBox", "0 0 " + a.width + " " + a.height), void 0 != a.frame && (this.svg = frameHandler(a.frame, this.svg)), this.svg)
	}, this.svgImport = function (a) {
		var b = "./images/MyLayer.svg",
			c = "MyLayer";
		if (a.source && (b = a.source), a.layerId && (c = a.layerId), a.opacity && a.opacity, a.fade && a.fade, a.delay && a.delay, void 0 == a.appendTo || "" == a.appendTo) return alert("svgImport: no appendTo object has been set - e.g. 'appendTo': svg1"), !1;
		var d = a.appendTo,
			e = d3.select(b).select("g").attr("transform", null).node(),
			f = d3.select(b).select("defs").node();
		d.node().appendChild(e), f && d.node().appendChild(f), d3.selectAll("#" + c).attr("transform", "translate(0,0)scale(1)"), $("tspan").each(function () {
			var b = $(this).attr("font-family");
			b == a.fontFamily + "-Bold" && $(this).attr("font-family", "'" + a.fontFamily + "', sans-serif;").css("font-weight", "700"), b == a.fontFamily + "-Italic" && $(this).attr("font-family", "'" + a.fontFamily + "', sans-serif;").css("font-style", "italic"), b == a.fontFamily + "-Regular" && $(this).attr("font-family", "'" + a.fontFamily + "', sans-serif;"), b == a.fontFamily + "MT" && $(this).attr("font-family", "'" + a.fontFamily + "', sans-serif;"), b == a.fontFamily + "-BoldMT" && $(this).attr("font-family", "'" + a.fontFamily + "', sans-serif;").css("font-weight", "700")
		})
	}, this.rect = function (a) {
		var b = "green",
			c = 50,
			d = 50,
			e = 2,
			f = "darkgreen",
			g = 1,
			h = 0,
			i = 0;
		if (a.fill && (b = a.fill), a.width && (c = a.width), a.height && (d = a.height), a.strokeWidth && (e = a.strokeWidth), a.strokeColor && (f = a.strokeColor), a.opacity && (g = a.opacity), a.thisClass && a.thisClass, a.x && (h = a.x), a.y && (i = a.y), a.fade && a.fade, a.delay && a.delay, void 0 == a.appendTo || "" == a.appendTo) return alert("rect: no appendTo object has been set - e.g. 'appendTo': svg1"), !1;
		var j = a.appendTo,
			k = j.append("rect").attr("x", h).attr("y", i).attr("width", c).attr("height", d).style("fill", b).style("stroke", f).style("stroke-width", e).style("opacity", g);
		return void 0 != a.frame && (k = frameHandler(a.frame, k)), k
	}, this.slider = function (a) {
		function b() {
			if ("time" == a.scale) {
				var b = d3.time.day.round(new Date(f.extent()[0]));
				d3.event.sourceEvent ? (b = d3.time.day.round(new Date(e.invert(d3.mouse(this)[0]))), b.getTime() != o.getTime() && (f.extent([b, b]), c(b), j.selectAll(".tick").select("text").attr("fill", function (a, c) {
					return a == b ? "#000" : "#999999"
				}))) : j.selectAll(".tick").select("text").attr("fill", function (a, c) {
					return a == b ? "#000" : "#999999"
				}), n.attr("x", e(d3.time.day.round(new Date(b))) - m / 2), d3.select("#sliderLine").attr("x1", e(d3.time.day.round(new Date(b)))).attr("x2", e(d3.time.day.round(new Date(b)))), o = d3.time.day.round(new Date(b))
			} else {
				var b = f.extent()[0];
				d3.event.sourceEvent ? (b = e.invert(d3.mouse(this)[0]), 1 == a.snap ? (b = Math.round(b)) != o && (f.extent([b, b]), c(b), j.selectAll(".tick").select("text").attr("fill", function (a, c) {
					return a == b ? "#000" : "#999999"
				})) : (f.extent([b, b]), c(b))) : j.selectAll(".tick").select("text").attr("fill", function (a, c) {
					return a == b ? "#000" : "#999999"
				}), n.attr("x", e(b) - m / 2), o = Math.round(b)
			}
		}

		function c(b) {
			a.action(b)
		}
		if (a = parseOptions(defaultOptions.slider, a), textYOffset = 12, "bottom" == a.labelPosition && (textYOffset = -20, a.y = a.y - 24), void 0 == a.appendTo || "" == a.appendTo) return alert("pie: no appendTo object has been set - e.g. 'appendTo': svg1"), !1;
		if (void 0 == a.id || "" == a.id) return alert("pie: no id has been set - e.g. 'id': svg1"), !1;
		if (1 == a.barPadding) {
			var d = a.width / a.data.length;
			a.width = a.width - d, a.x = a.x + d / 2
		}
		if (a.width = a.width - a.paddingLeft, a.x = a.x + a.paddingLeft, "time" == a.scale) var e = d3.time.scale().domain([d3.min(a.data), d3.max(a.data)]).range([0, a.width]).clamp(!0);
		else var e = d3.scale.linear().domain([d3.min(a.data), d3.max(a.data)]).range([0, a.width]).clamp(!0);
		var f = d3.svg.brush().x(e).extent([0, 0]).on("brush", b),
			g = a.appendTo.append("g").attr("class", "slider").style("cursor", "pointer").attr("transform", "translate(" + a.x + "," + (a.y + a.height) + ")");
		if ("time" == a.scale) var h = g.append("g").attr("class", "sliderAxisMinor").style("cursor", "pointer").attr("transform", "translate(0,-4)").call(d3.svg.axis().tickFormat(function (a) {
			return ""
		}).scale(e).orient("bottom").tickPadding(15).tickSize(8).ticks(d3.time.days, 1));
		else var h = g.append("g").attr("class", "sliderAxisMinor").style("cursor", "pointer").attr("transform", "translate(0,-4)").call(d3.svg.axis().tickFormat(function (a) {
			return ""
		}).scale(e).orient("bottom").tickPadding(15).tickSize(5).ticks(a.data.length));
		if ("time" == a.scale) var i = d3.time.format("%B"),
			j = g.append("g").attr("class", "sliderText").attr("transform", "translate(0,0)").call(d3.svg.axis().scale(e).orient("top").tickFormat(function (a) {
				return i(a)
			}).tickPadding(textYOffset).tickSize(0).ticks(d3.time.months, 1));
		else var j = g.append("g").attr("class", "sliderText").attr("transform", "translate(0,0)").call(d3.svg.axis().scale(e).orient("top").tickFormat(function (a) {
			return a
		}).tickPadding(textYOffset).tickSize(0).ticks(10));
		if ("time" == a.scale) var k = g.append("g").attr("class", "sliderAxis").style("cursor", "pointer").attr("transform", "translate(0,-7)").call(d3.svg.axis().tickFormat(function (a) {
			return ""
		}).scale(e).orient("bottom").tickPadding(15).tickSize(14).ticks(d3.time.months, 1));
		else var k = g.append("g").attr("class", "sliderAxis").style("cursor", "pointer").attr("transform", "translate(0,-7)").call(d3.svg.axis().tickFormat(function (a) {
			return ""
		}).scale(e).orient("bottom").tickPadding(15).tickSize(15).ticks(10));
		k.selectAll("line").attr("fill", "none").style("cursor", "pointer").attr("stroke", a.stroke).style("stroke-width", a.strokeWidth), h.selectAll("line").attr("fill", "none").style("cursor", "pointer").attr("stroke", "#BFBFBF").style("stroke-width", a.minorStrokeWidth), j.selectAll("path").attr("fill", "none").style("cursor", "pointer").attr("stroke", a.stroke).style("stroke-width", 3), k.selectAll("path").attr("fill", "none").style("cursor", "pointer").attr("stroke", a.stroke).style("stroke-width", 0), h.selectAll("path").attr("fill", "none").style("cursor", "pointer").attr("stroke", a.stroke).style("stroke-width", 0);
		var l = g.append("g").attr("class", "slider").call(f);
		l.selectAll(".extent,.resize").remove(), l.select(".background").attr("height", 1.5 * a.height).attr("y", -10).style("cursor", "pointer");
		var m = 11,
			n = l.append("rect").attr("height", 20).attr("width", m).attr("x", 0).attr("y", -9).attr("rx", 3).attr("ry", 3).attr("class", "handle").attr("transform", "translate(0,0)").attr("fill", "#FFF").attr("fill-opacity", 1).style("stroke", a.handleStroke).style("stroke-width", 2).on("mouseover", function (a) {
				d3.select(this).attr("fill", "#F4F4F4")
			}).on("mouseout", function (a) {
				d3.select(this).attr("fill", "#FFF")
			});
		1 == a.handleLine && l.append("line").attr("id", "sliderLine").attr("x1", 1).attr("x2", 1).attr("y1", -9).attr("y2", -126).style("stroke", "#0077C0").style("stroke-width", 1), "time" == a.scale ? l.call(f.event).transition().duration(0).call(f.extent([d3.max(a.data), d3.max(a.data)])).call(f.event) : l.call(f.event).transition().duration(0).call(f.extent([a.defaultValue, a.defaultValue])).call(f.event);
		var o = 0;
		return void 0 != a.frame && (g = frameHandler(a.frame, g)), l.update = a.action, l.setVal = function (a) {
			l.call(f.extent([a, a])).call(f.event)
		}, l
	}, this.tableBar = function (a) {
		var b = "tablebar",
			c = "tableBar1",
			d = 0,
			e = 0,
			f = 5,
			g = 1,
			h = 300,
			i = 300;
		if (a.thisClass && (b = a.thisClass), a.opacity && a.opacity, a.xOffset && (d = a.xOffset), a.yOffset && (e = a.yOffset), a.fade && a.fade, a.delay && a.delay, a.source && (k = a.source), a.innerRadius && (innerRadius = a.innerRadius), void 0 !== a.innerBorder && (innerBorder = a.innerBorder), void 0 !== a.enableText && (enableText = a.enableText), a.fontSize && (fontSize = a.fontSize), a.padding && a.padding, a.height && (h = a.height), a.width && (i = a.width), a.title && a.title, a.limit && (f = a.limit), a.valueField && (valueField = a.valueField), a.nameField && (nameField = a.nameField), a.class && (b = a.thisClass), a.id && (c = a.id), a.fill && a.fill, a.fillOpacity && (g = a.fillOpacity), void 0 == a.appendTo || "" == a.appendTo) return alert("pie: no appendTo object has been set - e.g. 'appendTo': svg1"), !1;
		var j = a.appendTo;
		k.sort(function (a, b) {
			return +b.values.total - +a.values.total
		});
		var k = k.filter(function (a) {
				return "undefined" !== a.key && "TBD" !== a.key
			}),
			l = d3.max(k, function (a) {
				return a.values.total
			}),
			m = d3.scale.linear().range([0, i - 50]).domain([0, l]),
			n = j.append("g").attr("id", c).attr("transform", "translate(" + d + "," + e + ")"),
			o = n.selectAll("." + b).data(k.filter(function (a, b) {
				return b < f
			})).enter().append("g").attr("class", b).attr("transform", function (a, b) {
				return "translate(0," + (b * (h / f) + 5) + ")"
			}),
			p = ["#00669E", "#9CBED0"];
		o.selectAll(".rowBar").data(function (a, b) {
			return a.values.bars
		}).enter().append("rect").attr("class", "rowBar").attr("width", function (a) {
			return m(a)
		}).style("fill", function (a, b) {
			return p[b]
		}).style("fill-opacity", g).attr("height", h / f - 5).attr("y", 0).attr("x", function (a, b) {
			var c;
			return c = b > 0 ? d3.select(this.parentNode).datum().values.bars[b - 1] : 0, m(c)
		}).style("stroke", "#FFF").style("stroke-opacity", .5), o.append("text").style("text-anchor", "end").attr("y", 11).attr("x", -5).style("font-size", "10px").text(function (a) {
			return a[nameField]
		});
		o.append("text").attr("y", 12).attr("x", function (a) {
			return m(a.values.total) + 3
		}).style("font-size", "11px").attr("fill", function (a, b) {
			return p[0]
		}).style("font-weight", "bold").text(function (a) {
			return addCommas(a.values.bars[0])
		}).attr("class", function (a) {
			return a.bWidth = d3.select(this).node().getBBox().width, "t1"
		});
		t2Divider = o.append("text").attr("y", 12).attr("x", function (a) {
			return m(a.values.total) + a.bWidth + 4
		}).attr("fill", "#B5B5B5").style("font-size", "11px").style("font-weight", "bold").text(function (a) {
			return "|"
		}), t2 = o.append("text").attr("fill", function (a, b) {
			return p[1]
		}).attr("y", 12).attr("x", function (a) {
			return m(a.values.total) + a.bWidth + 10
		}).style("font-size", "11px").style("font-weight", "bold").text(function (a) {
			return addCommas(a.values.bars[1])
		});
		n.node().getBBox();
		void 0 != a.frame && (n = frameHandler(a.frame, n))
	}, this.barChart = function (a) {
		if (a = parseOptions(defaultOptions.barChart, a), a.data.sort(function (a, b) {
				return +b.values.total - +a.values.total
			}), a.width = a.width + 50, a.customSort) {
			var b;
			a.data.forEach(function (c, d) {
				"Others" == c.key && (b = a.data[d], a.data.splice(d, 1))
			}), b && a.data.push(b)
		}
		var c = a.data.filter(function (a) {
				return "undefined" !== a.key && "TBD" !== a.key
			}),
			d = d3.max(c, function (a) {
				return a.values.total
			}),
			e = d3.scale.linear().range([0, a.width - a.yAxis.axisPadding]).domain([0, d]),
			f = a.appendTo.append("g").attr("id", id).attr("transform", "translate(" + a.x + "," + a.y + ")"),
			g = a.height / a.limit;
		c.length < a.limit && (a.height = g * c.length), f.append("line").attr("x1", a.yAxis.axisPadding).attr("x2", a.yAxis.axisPadding).attr("y1", 0).attr("y2", a.height).style("stroke", "grey").style("stroke-width", 1);
		var h = f.selectAll("." + a.thisClass).data(c.filter(function (b, c) {
				return c < a.limit
			})).enter().append("g").attr("class", a.thisClass).attr("transform", function (b, c) {
				return "translate(" + a.yAxis.axisPadding + "," + c * g + ")"
			}),
			i = h.append("rect").attr("class", "rowBar").attr("width", function (a) {
				return e(a.values.total)
			}).style("fill", function (b, c) {
				return a.fill
			}).style("fill-opacity", a.fillOpacity).attr("height", g * (1 - a.gutter)).attr("y", function (b, c) {
				return (g - g * (1 - a.gutter)) / 2
			}).attr("x", 0).style("stroke", "#FFF").style("stroke-opacity", .5).on("mouseover", function () {
				d3.select(this).style("fill-opacity", a.fillOpacity - .05)
			}).on("mouseout", function () {
				d3.select(this).style("fill-opacity", a.fillOpacity)
			}),
			j = h.append("g").attr("transform", function (a) {
				return "translate(-5,0)"
			});
		j.append("text").style("dominant-baseline", "middle").style("text-anchor", "end").attr("dy", 0).attr("x", 0).attr("fill", "#6C6C6C").style("font-size", "10px").text(function (a) {
			return a.key
		}).call(wrapLabel, a.yAxis.axisPadding), j.style("dominant-baseline", "middle").attr("transform", function (b, c) {
			var d = d3.select(this).node().getBBox(),
				e = g * (1 - a.gutter) - d.height / 2;
			return "translate(-5," + (e += (g - g * (1 - a.gutter)) / 2) + ")"
		});
		h.append("text").style("dominant-baseline", "middle").attr("y", g / 2 + 1).attr("x", function (a) {
			return e(a.values.total) + 3
		}).style("font-size", "11px").attr("fill", "#424242").style("font-weight", "normal").text(function (a) {
			return addCommas(a.values.total) + "%"
		}).attr("class", function (a) {
			return a.bWidth = d3.select(this).node().getBBox().width, "t1"
		}), f.node().getBBox();
		return void 0 != a.frame && (f = frameHandler(a.frame, f)), i
	}, this.pie = function (a) {
		if (a = parseOptions(defaultOptions.pie, a), void 0 == a.appendTo || "" == a.appendTo) return alert("pie: no appendTo object has been set - e.g. 'appendTo': svg1"), !1;
		if (void 0 == a.id || "" == a.id) return alert("pie: no id has been set - e.g. 'id': svg1"), !1;
		var b = a.data,
			c = d3.svg.arc().outerRadius(a.radius - 0).innerRadius(a.radius - a.radius * a.innerRadius),
			d = d3.layout.pie().sort(null).value(function (a) {
				return a
			}),
			e = a.appendTo.append("g").attr("id", a.id).style("opacity", a.opacity).attr("transform", "translate(" + parseInt(a.x) + "," + parseInt(a.y) + ")"),
			f = chartHeader(e, a.title, a.subtitle, a.width, a.font, a.units);
		a.legend && a.legend.enabled && chartLegend(e, a.width, a.legend, f, a.seriesNames, a.color);
		var g = e.selectAll(".arc").data(d(b)).enter().append("g").attr("class", "arc"),
			g = e.selectAll("path").data(d(b)).enter().append("path").attr("d", c).attr("transform", function () {
				return "translate(" + a.radius + "," + (a.radius + f.yOffset) + ")"
			}).style("stroke", "#FFF").style("stroke-width", 1).style("stroke-opacity", .3).style("fill", function (b, c) {
				return a.color[c]
			}).each(function (a) {
				this._current = a
			});
		if (1 == a.enableText) {
			var h = e.append("g");
			h.append("text").attr("class", "piePercent").style("font-size", a.font.piePercent.size).style("font-weight", a.font.piePercent.weight).style("font-family", a.font.piePercent.family).style("text-anchor", "middle").attr("dominant-baseline", "middle").text(function (a) {
				var c = b[0] / (b[0] + b[1]) * 100;
				return Math.round(c) + "%"
			}).attr("y", function () {
				return a.radius + f.yOffset
			}).attr("x", function () {
				return a.radius
			}).style("opacity", 1)
		}
		return this.innerRing && e.append("circle").attr("r", function () {
			return a.radius - a.radius * a.innerRadius - 2
		}).attr("cx", 0).attr("cy", 0).style("fill", "transparent").style("stroke", "#bfbfbf").style("stroke-width", 1), g.update = function (a) {
			function b(a) {
				var b = d3.interpolate(this._current, a);
				return this._current = b(0),
					function (a) {
						return c(b(a))
					}
			}

			function e(a) {
				var b = d3.interpolate(this._current, {
					startAngle: 2 * Math.PI,
					endAngle: 2 * Math.PI,
					value: 0
				});
				return this._current = b(0),
					function (a) {
						return c(b(a))
					}
			}
			var f = 1e3;
			if (a.transition && (f = a.transition), void 0 == a.data || "" == a.data) return alert("pie.update: no data has been set - e.g. 'data': [1,2,3]"), !1;
			var g = a.data;
			if (void 0 == a.id || "" == a.id) return alert("pie.update: no id has been set - e.g. 'id': '#pie1'"), !1;
			var h = a.id,
				i = {
					startAngle: 2 * Math.PI,
					endAngle: 2 * Math.PI
				},
				j = d3.sum(g),
				k = d3.select(h),
				l = k.selectAll("path").data(d(g));
			return l.enter().append("path").style("fill", function (a, b) {
				return color[b]
			}).attr("d", c(i)).each(function (a) {
				this._current = {
					data: a.data,
					value: a.value,
					startAngle: i.startAngle,
					endAngle: i.endAngle
				}
			}), l.exit().transition().duration(f).attrTween("d", e).remove(), l.transition().duration(f).attrTween("d", b), k.select(".piePercent").text(function (a) {
				var b = g[0] / (g[0] + g[1]) * 100;
				return Math.round(b) + "%"
			}), k.selectAll("path").on("mouseover", function (a, b) {
				var c = a.value / j * 100;
				d3.select(".piePercent").text(Math.round(c) + "%").transition().duration(250).style("opacity", 1)
			}).on("mouseout", function (a) {
				d3.select(".piePercent").transition().duration(250).style("opacity", 0)
			})
		}, void 0 != a.frame && (e = frameHandler(a.frame, e)), g
	}, this.lineChart = function (a) {
		if (a = parseOptions(defaultOptions.lineChart, a), void 0 == a.appendTo || "" == a.appendTo) return alert("columnChart: no appendTo object has been set - e.g. 'appendTo': svg1"), !1;
		if (void 0 == a.id || "" == a.id) return alert("pie: no id has been set - e.g. 'id': svg1"), !1;
		var b = {
			top: 38,
			right: 15,
			bottom: 25,
			left: 40
		};
		0 == this.yAxisEnabled && (b.left = b.right);
		var c = a.data,
			d = a.color,
			e = 0;
		c.forEach(function (b) {
			1 == a.cumulative ? (e += b[a.dataValues], b.value = e) : b.value = +b.value
		});
		var f = a.width / c.length;
		if (a.xAxis.ticks > 0) var g = a.xAxis.ticks;
		else var g = c.length;
		var h = c[0].series,
			i = c[c.length - 1].series,
			j = d3.time.scale().range([0, a.width - f]).domain([h, i]).nice(2008),
			k = d3.max(c, function (b) {
				return b[a.dataValues]
			}),
			l = d3.scale.linear().range([a.height, 0]).domain([0, rounder(k)]),
			m = d3.svg.axis().scale(j).tickSize(0, 5, 0).tickFormat(a.xAxis.format).orient("bottom").ticks(g).tickPadding(7),
			n = d3.svg.axis().scale(l).orient(a.yAxis.orient).ticks(a.yAxis.ticks).tickPadding(a.width);
		if (0 == a.area) var o = d3.svg.line().x(function (b) {
			return j(b[a.dataKey]) + f / 2
		}).y(function (b) {
			return l(b[a.dataValues])
		});
		else var o = d3.svg.area().x(function (b) {
			return j(b[a.dataKey]) + f / 2
		}).y0(a.height).y1(function (b) {
			return l(b[a.dataValues])
		});
		1 == a.spline && o.interpolate("monotone");
		var p = a.appendTo.append("g").attr("id", a.id).attr("class", "lineChart").attr("transform", "translate(" + a.x + "," + a.y + ")"),
			q = p.append("g"),
			r = p.append("g");
		r.append("rect").attr("x", 0).attr("y", 0).attr("width", a.width).attr("height", a.height).attr("opacity", 0);
		if (1 == a.yAxis.enabled && q.append("g").attr("class", "yAxis axis").call(n).append("text").attr("class", "axisLabel").attr("transform", "rotate(-90)").attr("y", -36).attr("dy", ".71em").attr("x", -a.height / 2 + 25).style("text-anchor", "end"), 1 == a.yAxis.gridlines.enabled) {
			var s = n.tickSize(a.width, 0).tickFormat("").orient("right");
			q.append("g").classed("y", !0).classed("grid", !0).call(s)
		}
		q.append("g").attr("class", "xAxis axis").attr("transform", "translate(0," + a.height + ")").call(m).selectAll(".lineChart .tick text").style("text-anchor", "middle").style("fill", a.xAxis.font.values.color).style("font-size", a.xAxis.font.values.size).style("font-family", a.xAxis.font.values.family).style("font-weight", a.xAxis.font.values.weight).attr("x", f / 2).attr("y", 8), q.select(".xAxis path").style("display", "none");
		var o = r.append("path").datum(c).attr("class", "line").attr("d", o).style("stroke", a.color).style("fill", "none").style("stroke-width", a.strokeWidth);
		if (1 == this.area && o.style("fill", color[0]), a.tooltip.enabled) {
			var t = r.append("g").attr("class", "hoverLine").attr("opacity", 1).attr("transform", "translate(0,0)");
			t.append("line").attr("x1", 0).attr("x2", 0).attr("y1", 0).attr("y2", a.height).style("stroke-width", 1).style("stroke", "#D8D8D8").style("fill", "none").style("fill-opacity", 0)
		}
		if (1 == a.symbolPoints.enabled) var u = r.append("g").attr("class", "sp").selectAll(a.class + " .symbolPoints").data(c).enter().append("rect").attr("width", a.symbolPoints.size).attr("height", a.symbolPoints.size).attr("x", function (b, c) {
			return c * f + f / 2 - a.symbolPoints.size / 2
		}).attr("y", function (b, c) {
			return l(b[a.dataValues]) - a.symbolPoints.size / 2
		}).attr("fill", d).style("stroke", d).style("stroke-width", 2);
		if (a.tooltip.enabled) {
			var v = r.append("g").attr("class", "hoverTooltip").attr("opacity", 1).attr("transform", "translate(0,0)"),
				w = v.append("rect").attr("x", 5).attr("y", -9).attr("width", 50).attr("height", 40).style("opacity", 1).style("fill", "#FFF"),
				x = v.append("g"),
				y = x.append("text").attr("x", 12).attr("y", 7).style("font-size", 10).style("font-weight", "bold").text(2014),
				z = x.append("text").attr("x", 12).attr("y", 22).style("font-size", 13).style("font-weight", "normal").style("fill", d).text("200,000");
			t.style("display", "none"), v.style("display", "none"), r.on("mouseover", function () {
				t.style("display", "block"), v.style("display", "block")
			}).on("mousemove", function () {
				var a = d3.mouse(this),
					b = a[0],
					c = a[1],
					e = j.invert(b),
					f = c - 25,
					g = e.getFullYear(),
					h = new Date(g, 6, 1);
				t.attr("opacity", 1).attr("transform", function () {
					return "translate(" + j(h) + ",0)"
				}), v.attr("opacity", 1).attr("transform", function () {
					return "translate(" + j(h) + "," + f + ")"
				});
				var i = 0,
					k = 0;
				u.attr("fill", function (a, b) {
					return a.series.getFullYear() == g ? (i = a.values, k = a.series.getFullYear(), "#FFF") : d
				});
				var l = x.node().getBBox().width;
				w.attr("width", l + 15), z.text(addCommas(i)), y.text(k)
			}).on("mouseout", function () {
				t.style("display", "none"), v.style("display", "none"), u.attr("fill", d)
			})
		}
		return void 0 != a.frame && (q = frameHandler(a.frame, q)), p.update = function (b) {
			var c = b.data;
			if (b.duration) var d = b.duration;
			else var d = 0;
			var e = 0;
			c.forEach(function (b) {
				1 == a.cumulative ? (e += b[a.dataValues], b.value = e) : b.value = +b.value
			});
			var f = a.width / c.length;
			if (a.xAxis.ticks > 0) var g = a.xAxis.ticks;
			else var g = c.length;
			var h = d3.time.scale().range([0, a.width - f]).domain(d3.extent(c, function (b) {
					return b[a.dataKey]
				})),
				i = d3.max(c, function (b) {
					return b[a.dataValues]
				});
			b.maxValue && (i = b.maxValue);
			var j = d3.scale.linear().range([a.height, 0]).domain([0, rounder(i)]),
				k = d3.svg.axis().scale(h).tickSize(0, 5, 0).tickFormat(a.xAxis.format).orient("bottom").ticks(g).tickPadding(7);
			p.selectAll(".xAxis.axis").transition().delay(0).duration(d).call(k).selectAll(".lineChart .tick text").style("text-anchor", "middle").style("fill", a.xAxis.font.values.color).style("font-size", a.xAxis.font.values.size).style("font-family", a.xAxis.font.values.family).style("font-weight", a.xAxis.font.values.weight).attr("x", f / 2).attr("y", 8);
			var l = d3.svg.axis().scale(j).orient(a.yAxis.orient).ticks(a.yAxis.ticks).tickPadding(a.width);
			if (q.selectAll(".yAxis.axis").transition().delay(0).duration(d).call(l), 1 == a.yAxis.gridlines.enabled) {
				var m = l.tickSize(a.width, 0).tickFormat("").orient("right");
				q.selectAll(".grid").transition().delay(0).duration(d).call(m)
			}
			if (0 == a.area) var n = d3.svg.line().x(function (b) {
				return h(b[a.dataKey]) + f / 2
			}).y(function (b) {
				return j(b[a.dataValues])
			});
			else var n = d3.svg.area().x(function (b) {
				return h(b[a.dataKey]) + f / 2
			}).y0(a.height).y1(function (b) {
				return j(b[a.dataValues])
			});
			1 == a.spline && n.interpolate("monotone");
			var o = r.select(".line").datum(c).transition().duration(d).attr("d", n);
			1 == a.area && o.style("fill", a.color).style("fill-opacity", .1), 1 == a.symbolPoints.enabled && (u.remove(), u = r.append("g").attr("class", "sp").selectAll(a.class + " .symbolPoints").data(c).enter().append("rect").attr("width", a.symbolPoints.size).attr("height", a.symbolPoints.size).attr("x", function (b, c) {
				return c * f + f / 2 - a.symbolPoints.size / 2
			}).attr("y", function (b, c) {
				return j(b[a.dataValues]) - a.symbolPoints.size / 2
			}).attr("fill", a.color))
		}, p.removeMarkers = function () {
			p.selectAll(".timeline_marker").remove()
		}, p.addMarkers = function (b) {
			var c = d3.time.format("%d %b %Y"),
				d = p.selectAll(".timeline_marker").data(b.data).enter().append("g").attr("opacity", 0).attr("class", "timeline_marker").attr("transform", function (a) {
					return "translate(" + (j(d3.time.day.round(new Date(a.date))) + f / 2) + ",0)"
				});
			d.append("line").attr("x1", 0).attr("x2", 0).attr("y1", 3).attr("y2", a.height + 15).style("stroke", "#7F7F7F").style("stroke-width", 1), d.append("circle").attr("r", 5).attr("cx", 0).attr("cy", 0).style("fill", "#0077c0").style("stroke", "#FFF").style("stroke-width", 1), d.append("rect").attr("class", "lineTooltipHandle").attr("x", -4).attr("y", 0).attr("width", 8).attr("height", a.height).style("fill", "transparent").style("cursor", "pointer");
			var e = d.append("g").attr("class", "lineTooltip").attr("opacity", 0).attr("transform", "translate(9,9)");
			e.append("rect").attr("class", "lineTooltipBg").attr("x", 4).attr("y", 0).attr("width", 185).attr("height", 50).style("fill", "#FFF").style("stroke", "#F6F6F6").style("stroke-width", 1), e.append("text").attr("x", 9).attr("y", 15).text(function (a) {
				return c(a.date)
			}).style("font-weight", "bold").style("font-size", "12px"), e.append("g").attr("transform", "translate(9,4)").append("text").attr("class", "lineTooltipText").attr("x", 0).attr("y", 25).text(function (a) {
				return a.text
			}).style("font-weight", "normal").style("font-size", "12px"), e.selectAll(".lineTooltipText").call(wrapLabel, 170), d.selectAll(".lineTooltipHandle").on("mouseover", function (a) {
				var b = d3.select(this.parentNode),
					c = b.select(".lineTooltipText").node().getBBox();
				b.select(".lineTooltipBg").attr("height", c.height + 25).attr("width", c.width + 14), b.selectAll("line").style("stroke", "#000"), b.selectAll("circle").style("fill", "#004B87"), b.select(".lineTooltip").transition().duration(500).attr("opacity", 1)
			}).on("mouseout", function (a) {
				var b = d3.select(this.parentNode);
				b.selectAll("line").style("stroke", "#7F7F7F"), b.selectAll("circle").style("fill", "#0077c0"), b.select(".lineTooltip").transition().duration(500).attr("opacity", 0)
			}), d.transition().delay(300).duration(1e3).attr("opacity", 1)
		}, p
	}, this.columnChart = function (a) {
		if (a = parseOptions(defaultOptions.columnChart, a), void 0 == a.appendTo || "" == a.appendTo) return alert("columnChart: no appendTo object has been set - e.g. 'appendTo': svg1"), !1;
		if (void 0 == a.id || "" == a.id) return alert("pie: no id has been set - e.g. 'id': svg1"), !1;
		var b = a.appendTo;
		a.height = a.height - 5, a.height = a.height - a.paddingTop;
		var c = a.data,
			d = b.append("svg").attr("id", a.id).attr("class", "columnChart").style("opacity", a.opacity).attr("x", a.x).attr("y", a.y).attr("width", a.width + 90).attr("height", a.height + 30).append("g").attr("transform", "translate(" + a.paddingLeft + "," + (parseInt(4) + parseInt(a.paddingTop)) + ")"),
			e = d.append("g");
		e.append("rect").attr("x", 0).attr("y", 0).attr("width", a.width - a.paddingLeft).attr("height", a.height).attr("opacity", 0);
		var f = d.append("g").attr("class", "chartarea"),
			g = d.append("g").attr("class", "svgtooltip");
		a.width = a.width - a.paddingLeft;
		var h = a.color;
		c.forEach(function (a, b) {
			a.barValues = []
		}), c.forEach(function (b, c) {
			var d = b.barValues;
			b[a.dataValues].length > 1 ? b[a.dataValues].forEach(function (b, c) {
				var e = 0;
				c >= 1 && (e = d[c - 1]), a.grouped ? d[c] = b : d[c] = b + e
			}) : d[0] = b[a.dataValues]
		});
		var i = d3.max(c, function (b) {
			return b.barValues.length > 1 ? d3.sum(b[a.dataValues]) : b[a.dataValues]
		});
		a.maxValue && a.maxValue;
		var j = d3.scale.ordinal().rangeBands([0, a.width], 0).domain(c.map(function (b) {
				return b[a.dataKey]
			})),
			k = d3.svg.axis().scale(j).orient("bottom").tickSize(0).tickPadding(7),
			l = d3.scale.linear().range([a.height, 0]).domain([0, i]);
		if ("round" == a.maxValue) var l = d3.scale.linear().range([a.height, 0]).domain([0, rounder(i)]);
		var m = d3.svg.axis().scale(l).orient("left").ticks(5).tickPadding(0);
		if (1 == a.yAxis.enabled) {
			var n = e.append("g").attr("class", "yAxis axis colchart").call(m).style("font-size", a.yAxis.font.values.size);
			a.yAxis.label && "" != a.yAxis.label && n.append("text").attr("class", "axisLabel").attr("transform", "rotate(-90)").attr("y", -30 - a.yAxis.font.label.padding).attr("dy", ".71em").attr("x", -height / 2 + 25).style("text-anchor", "end").style("font-weight", a.yAxis.font.label.weight).style("font-size", a.yAxis.font.label.size).text(a.yAxis.label)
		}
		if (1 == a.yAxis.gridlines.enabled) {
			var o = m.tickSize(a.width, 0).tickFormat("").orient("right");
			Math.floor(1e4 * Math.random());
			e.append("g").classed({
				rid: !0,
				colChartGrid: !0
			}).call(o), d3.selectAll(".colChartGrid line").style("stroke", a.yAxis.gridlines.stroke).style("stroke-opacity", a.yAxis.gridlines.opacity).style("stroke-width", a.yAxis.gridlines.strokeWidth).style("stroke-dasharray", "2,2")
		}
		if (1 == a.xAxis.enabled) {
			e.append("g").attr("class", "xAxis axis").attr("transform", "translate(0," + a.height + ")").call(k).style("font-size", a.xAxis.font.values.size).style("font-family", a.xAxis.font.values.family).style("font-weight", a.xAxis.font.values.weight).style("fill", a.xAxis.font.values.color).selectAll("path, line").style("opacity", a.xAxis.gridlines.opacity).style("stroke", a.xAxis.gridlines.stroke).style("stroke-width", a.xAxis.gridlines.strokeWidth)
		}
		1 == a.xAxis.gridlines.enabled && e.append("line").attr("class", "xAxisHorizontalLine").attr("x1", 0).attr("x2", a.width).attr("y1", a.height).attr("y2", a.height).style("opacity", a.xAxis.gridlines.opacity).style("stroke", a.xAxis.gridlines.stroke).style("stroke-width", a.xAxis.gridlines.strokeWidth);
		var p = f.selectAll(".barGroup").data(c).enter().append("g").attr("class", "barGroup").attr("transform", function (b) {
			return "translate(" + j(b[a.dataKey]) + ",0)"
		});
		p.selectAll(".bar").data(function (a, b) {
			return a.barValues
		}).enter().append("rect").attr("class", "bar").attr("x", function (b, c) {
			return a.grouped ? 0 == c ? j.rangeBand() / 2 * a.gutter : j.rangeBand() / 2 * c + 1 : j.rangeBand() * a.gutter / 2
		}).attr("width", function (b, c) {
			return a.grouped ? (j.rangeBand() - j.rangeBand() * a.gutter) / 2 : j.rangeBand() - j.rangeBand() * a.gutter
		}).attr("y", function (a, b) {
			if (b >= 0) var c = a;
			else var c = a[b];
			return l(c)
		}).attr("height", function (b, c) {
			var d = 0;
			return c > 0 && (a.grouped || (d = d3.select(this.parentNode).datum().barValues[c - 1])), a.height - l(b - d)
		}).style("fill", function (a, b) {
			return h.length > 1 ? h[b] : h[0]
		}).on("mouseover", function () {
			d3.select(this).style("fill-opacity", a.fillOpacity - .05)
		}).on("mouseout", function () {
			d3.select(this).style("fill-opacity", a.fillOpacity)
		});
		if (1 == a.dataLabels.enabled && p.append("svg:text").attr("class", "dataLabel").attr("x", function (a) {
				return j.rangeBand() / 2
			}).attr("y", function (b) {
				return l(b.total) - a.dataLabels.font.padding
			}).style("text-anchor", "middle").style("font-size", a.dataLabels.font.size).style("font-weight", a.dataLabels.font.weight).style("font-family", a.dataLabels.font.family).text(function (a) {
				return addCommas(a.total)
			}), void 0 != a.frame && (d = frameHandler(a.frame, d)), a.tooltip && a.tooltip.enabled) {
			var q = e.append("g").attr("class", "hoverLine").attr("opacity", 1).attr("transform", "translate(0,0)");
			q.append("line").attr("x1", 0).attr("x2", 0).attr("y1", 25).attr("y2", a.height).style("stroke-width", 1).style("stroke", "#D8D8D8"), q.append("line").attr("x1", j.rangeBand()).attr("x2", j.rangeBand()).attr("y1", 25).attr("y2", a.height).style("stroke-width", 1).style("stroke", "#D8D8D8");
			var r = g.append("g").attr("class", "hoverTooltip").attr("opacity", 1).attr("transform", "translate(0,0)"),
				s = r.append("rect").attr("x", 3).attr("y", -9).attr("width", 59).attr("height", 76).style("opacity", 1).style("fill", "#FFF"),
				t = r.append("g"),
				u = t.append("text").attr("x", 10).attr("y", 7).style("font-size", 10).style("font-weight", "bold").text("Jan 2014"),
				v = t.append("text").attr("x", 10).attr("y", 24).style("font-size", 14).style("font-weight", "normal").style("fill", "grey").text("200,000"),
				w = t.append("text").attr("x", 10).attr("y", 42).style("font-size", 10).style("font-weight", "bold").text("Jan 2015"),
				x = t.append("text").attr("x", 10).attr("y", 59).style("font-size", 14).style("font-weight", "normal").style("fill", h[1]).text("200,000");
			q.style("display", "none"), r.style("display", "none"), g.append("rect").attr("x", 0).attr("y", 50).attr("width", a.width).attr("height", a.height - 50).attr("opacity", 0);
			var y = !1;
			g.on("mouseover", function () {
				y = !0, r.style("display", "block")
			}), g.on("mousemove", function () {
				if (1 == y) {
					var a, b = j.range(),
						d = j.rangeBand(),
						e = d3.mouse(this),
						f = e[0],
						g = e[1];
					for (a = 0; f > b[a] + d; a++);
					var h = j(j.domain()[a]),
						i = f + 15;
					if (c[a]) {
						var k = c[a].values;
						u.text(c[a].series + " " + c[a].years[0]), w.text(c[a].series + " " + c[a].years[1]);
						var l = g - 25;
						q.attr("opacity", 1).attr("transform", function () {
							return "translate(" + h + ",0)"
						}), r.attr("opacity", 1).attr("transform", function () {
							return "translate(" + i + "," + l + ")"
						});
						var m = t.node().getBBox().width;
						s.attr("width", m + 17), 0 == k[0] && (k[0] = "-"), 0 == k[1] && (k[1] = "-"), v.text(addCommas(k[0])), x.text(addCommas(k[1])), p.attr("opacity", function (b, c) {
							return c == a ? 1 : .4
						})
					}
				}
			}), g.on("mouseout", function () {
				y = !1, p.attr("opacity", 1), q.style("display", "none"), r.style("display", "none")
			})
		}
		return p.update = function (b) {
			b.duration;
			b.data.forEach(function (a, b) {
				a.barValues = []
			}), b.data.forEach(function (b, c) {
				var d = b.barValues;
				b[a.dataValues].length > 1 ? b[a.dataValues].forEach(function (b, c) {
					var e = 0;
					c >= 1 && (e = d[c - 1]), a.grouped ? d[c] = b : d[c] = b + e
				}) : d[0] = b[a.dataValues]
			});
			var c = d3.max(b.data, function (b) {
				return b[a.dataValues]
			});
			if (b.maxValue && (c = b.maxValue), b.minValue) var d = b.minValue;
			else var d = 0;
			var e = d3.scale.linear().range([a.height, 0]).domain([d, rounder(c)]),
				f = d3.svg.axis().scale(e).orient("left").ticks(5).tickPadding(0);
			d3.selectAll(".yAxis.axis.colchart").transition().delay(100).duration(500).call(f);
			var g = f.tickSize(a.width, 0).tickFormat("").orient("right");
			d3.selectAll(".colChartGrid").transition().delay(100).duration(500).call(g), d3.selectAll(".colChartGrid line").style("stroke", a.yAxis.gridlines.stroke).style("stroke-opacity", a.yAxis.gridlines.opacity).style("stroke-width", a.yAxis.gridlines.strokeWidth).style("stroke-dasharray", "2,2"), p.data(b.data).selectAll(".bar").data(function (a, b) {
				return a.barValues
			}).transition().delay(100).duration(500).attr("y", function (a, b) {
				if (b >= 0) var c = a;
				else var c = 0;
				return e(c)
			}).attr("height", function (b) {
				return a.height - e(b)
			})
		}, p
	}, this.yearButtons = function (a) {
		if (a = parseOptions(defaultOptions.yearButtons, a), void 0 == a.appendTo || "" == a.appendTo) return alert("columnChart: no appendTo object has been set - e.g. 'appendTo': svg1"), !1;
		if (void 0 == a.id || "" == a.id) return alert("pie: no id has been set - e.g. 'id': svg1"), !1;
		var b = a.appendTo,
			c = a.width,
			d = a.height,
			e = a.data,
			f = d3.scale.ordinal().rangeRoundBands([0, c], 0).domain(e.map(function (a) {
				return a
			})),
			g = (d3.svg.axis().scale(f).orient("bottom").tickSize(0).tickPadding(7), b.append("g").attr("class", "yearButtons").style("opacity", a.opacity).attr("transform", "translate(" + a.x + "," + a.y + ")")),
			h = g.selectAll(".yearButton").data(e).enter().append("g").attr("class", "yearButton").attr("transform", function (a) {
				return "translate(" + f(a) + ",0)"
			}).style("cursor", "pointer").on("click", function (b) {
				d3.selectAll(".yearButton").selectAll("rect").attr("fill", a.fill), d3.selectAll(".yearButton").selectAll("text").attr("fill", a.fontColor), d3.select(this).selectAll("rect").attr("fill", a.fillSelected), d3.select(this).selectAll("text").attr("fill", a.fontColorSelected)
			});
		return h.append("rect").attr("x", 0).attr("y", 0).attr("width", function (a, b) {
			return f.rangeBand()
		}).attr("height", a.height).attr("fill", function (b) {
			return b == a.defaultSelected ? a.fillSelected : a.fill
		}).style("stroke", "#D8D8D8"), h.append("text").attr("class", "yearButtonTextLabel").attr("x", function (a) {
			return f.rangeBand() / 2
		}).attr("y", function (a) {
			return d / 2
		}).style("text-anchor", "middle").style("font-size", a.font.size).style("font-weight", a.font.weight).style("font-family", a.font.family).style("alignment-baseline", "central").attr("fill", function (b) {
			return b == a.defaultSelected ? a.fontColorSelected : a.fontColor
		}).text(function (a) {
			return a
		}), h
	}, this.bubbleChart = function (a) {
		var b = 0,
			c = 0;
		if (a.fill && a.fill, a.width && (width = a.width), a.height && (height = a.height), a.strokeWidth && a.strokeWidth, a.strokeColor && a.strokeColor, a.opacity && a.opacity, a.thisClass && a.thisClass, a.xOffset && (b = a.xOffset), a.yOffset && (c = a.yOffset), a.fade && a.fade, a.delay && a.delay, a.source && (source = a.source), void 0 == a.appendTo || "" == a.appendTo) return alert("rect: no appendTo object has been set - e.g. 'appendTo': svg1"), !1;
		var d = a.appendTo;
		this.barSpace = .43, this.yAxisEnabled = !0, this.dataLabelsEnabled = !0, this.yAxisGrid = !0;
		var e = {
			top: 28,
			right: 25,
			bottom: 25,
			left: 35
		};
		0 == this.yAxisEnabled && (e.left = e.right);
		var f = a.source.features,
			g = d3.time.scale().range([0, width]).domain(d3.extent(f, function (a) {
				return a.properties.time
			})),
			h = g.domain()[0];
		h.setDate(h.getDate() - 1), h.setHours(23), h.setMinutes(59), h.setSeconds(0), g.domain([h, g.domain()[1]])[0];
		var i = d3.max(f, function (a) {
				return a.properties.mag
			}),
			j = d3.min(f, function (a) {
				return a.properties.mag
			}),
			k = d3.scale.linear().range([height, 0]).domain([j, Math.ceil(i)]),
			l = d3.scale.linear().domain([j, i]).range([0, 30]),
			m = d3.scale.sqrt().domain([j, i]).range([.1, .5]),
			n = d3.scale.linear().domain([j, i]).range([.1, 3]),
			o = d3.svg.axis().scale(g).orient("bottom").tickSize(0).ticks(4).tickPadding(5).tickFormat(d3.time.format("%d April")),
			p = d3.svg.axis().scale(k).orient("left").ticks(4).tickPadding(0),
			q = d.append("g").attr("class", "bubbleChart").attr("transform", "translate(" + b + "," + c + ")");
		if (q.append("text").attr("x", -30).attr("y", -45).style("font-family", "'Open Sans', sans-serif").style("font-weight", "bold").style("font-size", "16px").text("Earthquakes and aftershocks"), q.append("text").attr("x", -29).attr("y", -25).style("font-family", "Arial").style("font-weight", "bold").style("font-size", "12px").text("Source:"), q.append("text").attr("x", 18).attr("y", -25).style("font-family", "arial").style("font-weight", "normal").style("font-size", "12px").text("USGS"), 1 == this.yAxisEnabled && q.append("g").attr("class", "yAxis axis").call(p).append("text").attr("class", "axisLabel").attr("transform", "rotate(-90)").attr("y", -28).attr("dy", ".71em").attr("x", -height / 2 + 25).style("text-anchor", "end").style("font-weight", "bold").text("Magnitude"), 1 == this.yAxisGrid) {
			var r = p.tickSize(width, 0).tickFormat("").tickPadding(30).orient("right");
			q.append("g").classed("y", !0).classed("grid", !0).call(r)
		}
		q.append("g").attr("class", "xAxis axis").attr("transform", "translate(0," + height + ")").call(o);
		var s = o.tickSize(height, 0).tickFormat("").tickPadding(0).orient("bottom");
		return q.append("g").classed("x", !0).classed("xgrid", !0).call(s), q.selectAll(".bubble").data(f).enter().append("g").attr("class", "bubble").append("circle").attr("cx", function (a, b) {
			var c = new Date(a.properties.time),
				d = (c.getDate(), c.getMonth());
			c.getFullYear();
			return monthNames[d], g(a.properties.time)
		}).attr("cy", function (a) {
			return k(a.properties.mag)
		}).attr("r", function (a) {
			return l(a.properties.mag)
		}).style("fill-opacity", function (a) {
			return m(a.properties.mag)
		}).style("stroke-opacity", function (a) {
			return m(a.properties.mag)
		}).attr("id", function (a) {
			return "chart" + a.id
		}).attr("class", "chartbubble").style("stroke", "#570809").style("stroke-width", function (a) {
			return n(a.properties.mag)
		}).style("fill", "darkred").on("mouseover", function (a, b) {
			d3.select(this).style("stroke-opacity", 1);
			var c = new Date(a.properties.time),
				d = c.toTimeString().substring(0, 5),
				c = c.getDate() + " " + monthNames[c.getMonth()] + " " + c.getFullYear() + " - " + d;
			d3.select(".mTitle").text("M" + a.properties.mag), d3.select(".mSubTitle1").text(c), d3.select("#dM2").style("opacity", 1);
			var e = a.id;
			d3.selectAll(".mapbubble").style("opacity", function (a) {
				return a.id == e ? 1 : .2
			}).style("stroke-opacity", function (a) {
				return a.id == e ? 1 : .2
			})
		}).on("mouseout", function (a, b) {
			d3.selectAll(".mapbubble").style("opacity", 1).style("stroke-opacity", function (a) {
				return m(a.properties.mag)
			}), d3.select(this).style("stroke-opacity", function (a) {
				return m(a.properties.mag)
			}), d3.select("#dM2").style("opacity", 0).attr("transform", "translate(-100,-100)")
		}).on("mousemove", function (a, d) {
			var e = d3.transform(d3.select(this).attr("transform")),
				f = e.translate[0],
				g = e.translate[1];
			coordinates = d3.mouse(this);
			var h = coordinates[0] + f + b,
				i = coordinates[1] + g + c;
			d3.select("#dM2").attr("transform", "translate(" + (h + 13) + "," + (i + 5) + ")")
		}), void 0 != a.frame && (q = frameHandler(a.frame, q)), q
	}, this.map = function (a) {
		function b() {
			if (F.scale(O.scale() / 2 / Math.PI).translate(O.translate()), J.selectAll(".geopoly path").attr("d", H), J.selectAll(".vector").attr("transform", function (a) {
					return "translate(" + F([a.lon, a.lat]) + ")"
				}), J.selectAll(".mapPie").attr("transform", function (a) {
					return "translate(" + F([a.lon, a.lat]) + ")scale(" + a.scale + ")"
				}), N.attr("transform", function (a) {
					return "translate(" + F([a.lon, a.lat]) + ")"
				}), d3.selectAll("#centerAnchor").node()) {
				var a = d3.transform(N.attr("transform")).translate;
				d3.selectAll(".import").each(function (b) {
					var c = d3.select(this).select("#anchor");
					if (c.node()) {
						var d = c.node().getBBox(),
							e = a[0] - (d.x + d.width / 2),
							f = a[1] - (d.y + d.height / 2);
						d3.select(this).attr("transform", "translate(" + e + "," + f + ")")
					}
				})
			}
			J.selectAll(".symbolPoint").attr("transform", function (a) {
				return "translate(" + F([a.lon, a.lat]) + ")"
			}), J.selectAll(".textLabel").attr("transform", function (a) {
				return "translate(" + F([a.lon, a.lat]) + ")"
			}), J.selectAll(".districtLabels").attr("transform", function (a) {
				return "translate(" + F([a.centroid_x, a.centroid_y]) + ")"
			}), J.selectAll(".styledLabel").attr("transform", function (a) {
				return "translate(" + F([a.lon, a.lat]) + ")"
			});
			var b = d3.svg.line().x(function (a) {
				return e = F([a.lon, a.lat]), e[0]
			}).y(function (a) {
				return e = F([a.lon, a.lat]), e[1]
			}).interpolate("basis");
			J.selectAll(".arrow").attr("d", b);
			if (1 == f) {
				var c = E.scale(O.scale()).translate(O.translate())(),
					g = I.attr("transform", "scale(" + c.scale + ")translate(" + c.translate + ")").selectAll("image").data(c, function (a) {
						return a
					});
				g.exit().remove(), g.enter().append("image").attr("xlink:href", function (a) {
					return "http://" + ["a", "b", "c", "d"][4 * Math.random() | 0] + ".tiles.mapbox.com/v3/" + d + "/" + a[2] + "/" + a[0] + "/" + a[1] + ".png"
				}).attr("width", 1).attr("height", 1).style("opacity", 1).attr("class", "imgtile").attr("x", function (a) {
					return a[0]
				}).attr("y", function (a) {
					return a[1]
				})
			}
		}
		var c = [44, 33],
			d = "matthewsmawfield.31370f48",
			f = !0,
			g = !0,
			h = "topright",
			i = !0,
			j = !0,
			k = 1,
			l = 14,
			m = 3,
			n = 3,
			o = 1.5,
			p = !0,
			q = !0,
			r = 0,
			s = 0,
			t = !0;
		a.center && (c = a.center), a.xOffset && (r = a.xOffset), a.yOffset && (s = a.yOffset), a.zoomInit && (l = a.zoomInit), a.mapbox && (d = a.mapbox), void 0 != a.enableRaster && (f = a.enableRaster), void 0 != a.enablePan && (j = a.enablePan), void 0 != a.enableZoomButtons && (g = a.enableZoomButtons), void 0 != a.enableZoomMouseScroll && (i = a.enableZoomMouseScroll), a.zoomInSteps && (m = a.zoomInSteps), a.zoomOutSteps && (n = a.zoomOutSteps), a.zoomFactor && (o = a.zoomFactor), a.zoomBtnPos && (h = a.zoomBtnPos), a.zoomTweak && (k = a.zoomTweak), void 0 != a.coordinatesTooltip && (p = a.coordinatesTooltip), void 0 != a.coordinatesToClipboard && (q = a.coordinatesToClipboard), void 0 != a.enableDownload && a.enableDownload, void 0 != a.mapBg && (t = a.mapBg);
		var u = a.appendTo,
			v = u.attr("viewBox").split(" "),
			w = v[2],
			z = v[3],
			A = w,
			B = z / w,
			C = w * B,
			D = u.append("g").attr("id", "mapsvgcontainer");
		if (1 == t && D.append("rect").attr("x", 0).attr("y", 0).attr("id", "mapbg").attr("width", A).attr("height", C).style("fill", "#FFF").attr("opacity", 0), 1 == f) var E = d3.geo.tile().size([A, C]);
		var F = d3.geo.mercator().scale((1 << l) / 2 / Math.PI).translate([0, 0]),
			G = F([c[0], c[1]]),
			H = d3.geo.path().projection(F),
			I = D.append("g").attr("id", "raster"),
			J = D.append("g").attr("id", "vector"),
			K = D.append("g").attr("id", "maskLayer"),
			L = u.append("g").attr("id", "customLayer"),
			M = [{
				lat: c[1],
				lon: c[0]
			}],
			N = L.selectAll("#centerAnchor").data(M).enter().append("g").attr("id", "centerAnchor").attr("transform", function (a) {
				return "translate(" + F([a.lon, a.lat]) + ")"
			}).style("opacity", 0);
		N.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 0).attr("id", "anchor").style("fill-opacity", 0).style("stroke-opacity", 0).style("stroke", "blue"), zooming = !1;
		var O = d3.behavior.zoom().scale(2 * F.scale() * Math.PI).translate([A / 2 - G[0] + r, C / 2 - G[1] + s]).on("zoom", function () {
				zooming = !0, b()
			}).on("zoomend", function () {
				setTimeout(function () {
					zooming = !1
				}, 100)
			}),
			P = O.scale(),
			Q = O.translate(),
			R = [A / 2, C / 2];
		O.scale(P * k).translate([R[0] + (Q[0] - R[0]) / P * P * k, R[1] + (Q[1] - R[1]) / P * P * k]), D.call(O);
		O.translate(), O.scale();
		b();
		var S = u.attr("id") + "coordinatesTooltip";
		if (D.on("mousemove", function () {
				if (1 == p) {
					var a = F.invert(d3.mouse(this));
					$("#" + S + " #lon").text(a[0].toFixed(6)), $("#" + S + " #lat").text(a[1].toFixed(6))
				}
			}).on("dblclick", function () {
				if (1 == q) {
					var a = F.invert(d3.mouse(this)),
						b = "{name: 'name', lat: " + a[1].toFixed(6) + ", lon: " + a[0].toFixed(6) + "},";
					window.prompt("Copy to clipboard: Ctrl+C, Enter", b)
				}
			}), 1 == p) var T = $(D[0]).parent("svg").parent("div"),
			u = $(D[0]).parent("svg"),
			U = u.attr("class"),
			R = $(T).append('<div id="' + S + '" class="coordinatesTooltip ' + U + '"><i class="fa fa-crosshairs"></i> Latitude: <span id="lat">34.123</span> | Longitude: <span id="lon">43.12</span></div>');
		if (0 == i && D.on("mousewheel.zoom", null).on("dblclick.zoom", null).on("DOMMouseScroll.zoom", null).on("wheel.zoom", null), 0 == j && D.on("mousedown.zoom", null).on("touchstart.zoom", null).on("touchmove.zoom", null).on("touchend.zoom", null), 1 == g) {
			var V = {};
			V.topright = [A - 93, 0], V.bottomright = [A - 93, C - 55], V.bottomleft = [0, C - 55], V.topleft = [0, 0];
			var h = V[h];
			d3.xml("./images/svg/zoom.svg", function (a, c) {
				var d = ($(D[0]).parent("svg").attr("id"), c.getElementById("zoombtnsvg"));
				L.node().appendChild(d);
				var e = (L.select("#zoombtnsvg").style("opacity", 1).attr("class", "import").attr("transform", "translate(" + h[0] + "," + h[1] + ")"), $("#zoominbg").attr("opacity"));
				$("#zoomin").css("cursor", "pointer"), $("#zoomout").css("cursor", "pointer");
				var f = $("#zoomin").hover(function () {
						$("#zoominbg").attr("opacity", .1)
					}, function () {
						$("#zoominbg").attr("opacity", e)
					}),
					g = $("#zoomout").hover(function () {
						$("#zoomoutbg").attr("opacity", .1)
					}, function () {
						$("#zoomoutbg").attr("opacity", e)
					});
				n <= 0 && g.select("#zoomouticon").attr("opacity", .3), f.on("click", function () {
					if (O.scale() < (1 << l) * Math.pow(o, m)) {
						var a = O.scale(),
							c = (O.scaleExtent(), a * o),
							d = O.translate(),
							e = [A / 2, C / 2];
						O.scale(c).translate([e[0] + (d[0] - e[0]) / a * c, e[1] + (d[1] - e[1]) / a * c]), b(), O.scale() < (1 << l) * Math.pow(o, m) ? (g.select("#zoomouticon").attr("opacity", 1), f.select("#zoominicon").attr("opacity", 1)) : (f.select("#zoominicon").attr("opacity", .3), g.select("#zoomouticon").attr("opacity", 1))
					}
				}), g.on("click", function () {
					if (O.scale() > (1 << l) / Math.pow(o, n)) {
						var a = O.scale(),
							c = (O.scaleExtent(), a / o),
							d = O.translate(),
							e = [A / 2, C / 2];
						O.scale(c).translate([e[0] + (d[0] - e[0]) / a * c, e[1] + (d[1] - e[1]) / a * c]), b(), O.scale() > (1 << l) / Math.pow(o, n) ? (g.select("#zoomouticon").attr("opacity", 1), f.select("#zoominicon").attr("opacity", 1)) : (f.select("#zoominicon").attr("opacity", 1), g.select("#zoomouticon").attr("opacity", .3))
					}
				})
			})
		}
		return D.downloader = function () {
			var a = ($(D[0]).parent("svg").attr("id"), $(D[0]).parent("svg").parent("div")),
				b = document.getElementById(id);
			d3.select("#" + a.attr("id")).append("a").attr("href", "#").text("download").style({
				position: "absolute",
				top: "20px",
				left: "10px"
			}).attr("download", "download.svg").on("click", function () {
				var a = u.attr("width"),
					c = u.attr("height");
				u.attr("height", 1e3).attr("width", 1e3);
				var d = new XMLSerializer,
					e = d.serializeToString(b);
				d3.select(this).attr("href", "data:Application/octet-stream;filename=download.svg," + encodeURIComponent(e)), u.attr("height", c).attr("width", a)
			})
		}, D.addVectorPolygon = function (a) {
			var b, c = "polygon",
				d = 2,
				e = "blue",
				f = .1,
				g = "cyan",
				h = 1,
				c = "polygonPatternFill",
				i = !1;
			a.strokeWidth && (d = a.strokeWidth), a.strokeColor && (e = a.strokeColor), void 0 != a.strokeOpacity && (f = a.strokeOpacity), void 0 != a.strokeDotted && (i = a.strokeDotted), a.fill && (g = a.fill), void 0 != a.fillOpacity && (h = a.fillOpacity), a.opacity && a.opacity, a.class && (c = a.class), a.fade && a.fade, a.delay && a.delay;
			var j;
			return "Topology" == a.source.type && (j = topojson.feature(a.source, a.source.objects[Object.keys(a.source.objects)[0]]).features), a.source.hasOwnProperty("geometryType") && (j = esriConverter().toGeoJson(a.source), j = j.features), b = J.selectAll("." + c).data(j).enter().append("g").attr("class", "geopoly"), void 0 != a.frame && (b = frameHandler(a.frame, b)), b = b.append("path").attr("class", c).attr("d", H).attr("id", function (a) {
				return a.id
			}).style("fill", function (a) {
				return g
			}).style("fill-opacity", h).style("stroke", e).style("stroke-width", d).style("stroke-opacity", f).on("mouseover", function (a) {}).on("mouseout", function (a) {}), i && b.style("stroke-dasharray", "2,2"), b
		}, D.addVectorPolygonPatternFill = function (a) {
			var b = 1,
				c = 2,
				d = "blue",
				e = "polygonPatternFill",
				f = 1,
				g = 0,
				h = 0;
			a.lineSpace && (b = a.lineSpace), a.strokeWidth && (c = a.strokeWidth), a.strokeColor && (d = a.strokeColor), a.opacity && (f = a.opacity), a.class && (e = a.class), a.source && (source = a.source), a.fade && (g = a.fade), a.delay && (h = a.delay);
			var i = topojson.feature(a.source, a.source.objects[Object.keys(a.source.objects)[0]]).features;
			patternId += 1;
			var j = (D.append("defs").append("pattern").attr("id", "pattern" + patternId).attr("patternUnits", "userSpaceOnUse").attr("width", 4 + b).attr("height", 4 + b).append("path").attr("d", "M-1,1 l" + (2 + b) + ",-" + (2 + b) + " M0," + (4 + b) + " l" + (4 + b) + ",-" + (4 + b) + " M" + (3 + b) + "," + (5 + b) + " l" + (2 + b) + ",-" + (2 + b)).style("stroke", d).style("stroke-width", c), J.selectAll("." + e).data(i).enter().append("g").attr("class", "geopoly").style("opacity", 1));
			return j.append("path").attr("class", e).attr("d", H).attr("id", function (a) {
				return a.id
			}).style("fill", "url(#pattern" + patternId + ")").style("opacity", 0).on("mouseover", function (a) {}).on("mouseout", function (a) {}).transition().delay(h).duration(g).style("opacity", f), void 0 != a.frame && (j = frameHandler(a.frame, j)), j
		}, D.addVectorPoints = function (a) {
			var b = a.source,
				c = d3.max(b, function (a) {
					return +a.idps
				}),
				d = (d3.scale.sqrt().domain([0, c]).range([0, 40]), d3.scale.sqrt().domain([0, c]).range([.6, .75])),
				e = d3.scale.sqrt().domain([0, c]).range([.7, 1.6]);
			vectorGroup = J.selectAll("." + a.class).data(b).enter().append("g").attr("class", "vector").style("opacity", 1).attr("transform", function (a) {
				return "translate(" + F([a.lon, a.lat]) + ")"
			});
			vectorGroup.append("circle").attr("class", a.class).attr("cx", 0).attr("cy", 0).attr("r", "2px").style("stroke", "black").style("stroke-width", 1).style("fill", "red"), vectorGroup.append("text").attr("y", -5).style("text-anchor", "middle").style("fill", "#575757").style("opacity", 0).style("font-family", "'Open Sans', sans-serif").style("font-size", function (a) {
				return d(a.idps).toFixed(2) + "em"
			}).style("font-weight", "normal").text(function (a) {
				return a.name
			}).transition().duration(2500).delay(1e3).style("opacity", 1), vectorGroup.append("text").style("text-anchor", "middle").style("fill", "#0a4623").style("fill-opacity", 0).style("font-family", "'Open Sans', sans-serif").style("font-size", function (a) {
				return e(a.idps).toFixed(2) + "em"
			}).style("font-weight", "bold").text(function (a) {
				return addCommas(a.idps)
			}).attr("y", function () {
				return d3.select(this).node().getBBox().height / 2
			}).transition().duration(2500).delay(1e3).style("fill-opacity", .7);
			return void 0 != a.frame && (vectorGroup = frameHandler(a.frame, vectorGroup)), vectorGroup
		}, D.addEarthquake = function (a) {
			var b = a.source.features,
				c = (a.size, 9);
			b.sort(function (a, b) {
				return +b.properties.mag - +a.properties.mag
			});
			var c = d3.max(b, function (a) {
					return a.properties.mag
				}),
				d = d3.min(b, function (a) {
					return a.properties.mag
				}),
				e = d3.scale.linear().domain([d, c]).range([0, 30]),
				f = d3.scale.sqrt().domain([d, c]).range([.1, .5]),
				g = d3.scale.linear().domain([d, c]).range([.1, 2]);
			d3.scale.sqrt().domain([d, c]).range([.6, .85]), d3.scale.linear().domain([d, c]).range([0, 2.5]);
			return vectorGroup = J.selectAll("." + a.class).data(b).enter().append("g").attr("class", "vector").attr("transform", function (a) {
				return "translate(" + F([a.geometry.coordinates[0], a.geometry.coordinates[1]]) + ")"
			}).on("mousemove", function (a, b) {
				var c = d3.transform(d3.select(this).attr("transform")),
					d = c.translate[0],
					e = c.translate[1];
				coordinates = d3.mouse(this);
				var f = coordinates[0] + d,
					g = coordinates[1] + e;
				d3.select("#dM2").attr("transform", "translate(" + (f + 13) + "," + (g + 5) + ")")
			}).on("mouseout", function (a, b) {
				d3.select("#dM2").attr("transform", "translate(-100,-100)")
			}), vectorGroup.append("circle").attr("class", a.class).attr("cx", 0).attr("cy", 0).attr("r", function (a) {
				return e(a.properties.mag)
			}).style("fill-opacity", function (a) {
				return f(a.properties.mag)
			}).style("stroke-opacity", function (a) {
				return f(a.properties.mag)
			}).attr("id", function (a) {
				return "map" + a.id
			}).attr("class", "mapbubble").style("stroke", "#570809").style("stroke-width", function (a) {
				return g(a.properties.mag)
			}).style("fill", "darkred").on("mouseover", function (a, b) {
				var c = new Date(a.properties.time),
					d = c.toTimeString().substring(0, 5),
					c = c.getDate() + " " + monthNames[c.getMonth()] + " " + c.getFullYear() + " - " + d;
				d3.select(".mTitle").text("M" + a.properties.mag), d3.select(".mSubTitle1").text(c), d3.select("#dM2").style("opacity", 1), d3.select(this).style("stroke-opacity", 1);
				var e = a.id;
				d3.selectAll(".chartbubble").style("opacity", function (a) {
					return a.id == e ? 1 : .2
				}).style("stroke-opacity", function (a) {
					return a.id == e ? 1 : .2
				})
			}).on("mouseout", function (a, b) {
				d3.select("#dM2").style("opacity", 0);
				d3.selectAll(".chartbubble").style("opacity", 1).style("stroke-opacity", function (a) {
					return f(a.properties.mag)
				});
				d3.select(this).style("stroke-opacity", function (a) {
					return f(a.properties.mag)
				})
			}), void 0 != a.frame && (vectorGroup = frameHandler(a.frame, vectorGroup)), vectorGroup
		}, D.addProportionalCircles = function (a) {
			a = parseOptions(defaultOptions.map.addProportionalCircles, a);
			var b = a.source,
				c = d3.max(b, function (b) {
					return +b[a.dataVariable]
				}),
				d = d3.scale.sqrt().domain([0, c]).range([0, a.maxRadius]),
				e = d3.scale.sqrt().domain([0, c]).range([1, 1.1]),
				f = d3.scale.sqrt().domain([0, c]).range([1.2, 1.6]);
			(vectorGroup = J.selectAll("." + a.class).data(b).enter().append("g").classed({
				vector: !0
			}).style("opacity", a.opacity).attr("transform", function (a) {
				return "translate(" + F([a.lon, a.lat]) + ")"
			}), vectorGroup.append("circle").attr("class", a.class).attr("cx", 0).attr("cy", 0).attr("r", 0).style("stroke", a.color).style("stroke-width", a.strokeWidth).style("stroke-opacity", 1).style("fill", a.color).style("fill-opacity", .5).style("opacity", 0).transition().duration(a.fade).delay(a.delay / 2).attr("r", function (b, c) {
				return d(b[a.dataVariable])
			}).style("opacity", a.circleOpacity), 1 == a.showTextLabel) && (vectorGroup.append("text").attr("class", "textName").attr("y", -5).style("text-anchor", "middle").style("fill", "#000").style("opacity", 0).style("font-family", "'Open Sans', sans-serif").style("font-size", function (b) {
				return e(b[a.dataVariable]).toFixed(2) + "em"
			}).style("font-weight", "normal").text(function (b) {
				return 1 == a.labelCaps ? b[a.textVariable].toUpperCase() : b[a.textVariable]
			}).transition().duration(a.fade).delay(a.delay).style("opacity", 1), vectorGroup.append("text").attr("class", "textFigure").style("text-anchor", "middle").style("fill", "#17395E").style("fill-opacity", 0).style("font-family", "'Open Sans', sans-serif").style("font-size", function (b) {
				return f(b[a.dataVariable]).toFixed(2) + "em"
			}).style("font-weight", "bold").text(function (b) {
				return addCommas(b[a.dataVariable])
			}).attr("y", function () {
				return d3.select(this).node().getBBox().height / 2 + 2
			}).transition().duration(a.fade).delay(a.delay).style("fill-opacity", 1));
			return vectorGroup.update = function (a) {
				var b = a.dataVariable,
					c = a.duration,
					g = a.color;
				this.selectAll("circle").transition().duration(c).style("fill", g).style("stroke", g).attr("r", function (a, c) {
					return d(a[b])
				}), this.selectAll(".textName").transition().duration(c).style("font-size", function (a) {
					return e(a[b]).toFixed(2) + "em"
				}).text(function (a) {
					return a[textVariable]
				}), this.selectAll(".textFigure").transition().duration(c).style("fill", g).style("font-size", function (a) {
					return f(a[b]).toFixed(2) + "em"
				}).attr("y", function (a) {
					return 6 * f(a[b]) + 3
				}).tween("text", function (a) {
					var c = d3.interpolate(this.textContent.replace(/\,/g, ""), a[b]),
						d = (a[b] + "").split("."),
						e = d.length > 1 ? Math.pow(10, d[1].length) : 1;
					return function (a) {
						this.textContent = addCommas(Math.round(c(a) * e) / e)
					}
				})
			}, void 0 != a.frame && (vectorGroup = frameHandler(a.frame, vectorGroup)), vectorGroup
		}, D.addSymbolPoints = function (a) {
			var b = 12,
				c = "normal",
				d = "#000",
				e = "'Open Sans', sans-serif",
				f = "normal",
				g = 1,
				h = "symbol",
				i = 12,
				j = 12,
				k = "./images/mapicons/Admin1Capital.svg",
				l = 0,
				m = 0,
				n = [{
					name: "Zero1",
					lat: 2,
					lon: 0
				}],
				o = 0,
				p = 0,
				q = 0,
				r = "right";
			if (void 0 != a.frame) var q = a.frame;
			a.source && (n = a.source), a.fade && (o = a.fade), a.delay && (p = a.delay), a.class && (h = a.class), a.orientation && (r = a.orientation), a.hasOwnProperty("template") && (a = symbolTemplate[a.template]), a.fontSize && (b = a.fontSize), a.fontWeight && (c = a.fontWeight), a.fontFamily && (e = a.fontFamily), a.fontStyle && (f = a.fontStyle), a.icon && (k = a.icon), a.opacity && (g = a.opacity), a.fontColor && (d = a.fontColor), a.textAnchor && (textAnchor = a.textAnchor), a.width && (i = a.width), a.height && (j = a.height), a.xOffset && (l = a.xOffset), a.yOffset && (m = a.yOffset);
			var s = J,
				t = s.selectAll(".symbolPoint ." + h).data(n).enter().append("g").style("opacity", 1).attr("class", "symbolPoint " + h).attr("transform", function (a) {
					return "translate(" + F([a.lon, a.lat]) + ")"
				}),
				u = t.append("text").text(function (a) {
					return a.name
				}).style("font-family", e).style("font-style", f).style("fill", d).style("font-size", b).style("font-weight", c).attr("y", 4);
			return "right" == r && u.attr("x", 8), "left" == r && u.attr("x", function () {
				return -this.getBBox().width - 7
			}), t.append("svg:image").attr("xlink:href", k).attr("width", i).attr("height", j).attr("x", -j / 2 - l).attr("y", -i / 2 - m).append("text").text(function (a) {
				return a.name
			}), t.transition().delay(p).duration(o).style("opacity", g), 0 != q && (t = frameHandler(q, t)), t
		}, D.addPies = function (a) {
			L.append("canvas").attr("x", 0).attr("y", 0).attr("width", 300).attr("height", 500).style("background-color", "green"), a = parseOptions(defaultOptions.map.addPies, a);
			var b = J,
				c = d3.layout.pie();
			c.sort(null);
			var d = d3.svg.arc().innerRadius(20),
				e = d3.scale.sqrt().domain([0, a.max]).range([0, 1]),
				f = b.append("g").attr("id", "pies_container"),
				g = f.selectAll(".pies").data(a.data).enter().append("g").classed({
					mapPie: !0
				}).attr("opacity", a.opacity).attr("transform", function (a) {
					if (a.lat && a.lon) return a.scale = e(a.values.total), "translate(" + F([a.lon, a.lat]) + ")scale(" + e(a.values.total) + ")"
				}).on("mouseover", a.mouseover).on("mouseout", a.mouseout).on("click", a.click);
			g.append("circle").attr("fill", "none").attr("class", "pieborder").attr("stroke", "#FFF").attr("stroke-width", 5).attr("r", a.maxRadius).on("mouseover", function (a) {}).on("mouseout", function (a) {});
			var d = d3.svg.arc().outerRadius(a.maxRadius).innerRadius(0),
				c = d3.layout.pie().sort(null).value(function (a) {
					return a
				});
			g.selectAll(".arc").data(function (a, b) {
				var d = a.values.piedata;
				return c(d)
			}).enter().append("g").attr("class", "arc").append("path").attr("d", d).style("stroke", "#FFF").style("stroke-width", 1).style("stroke-opacity", 0).style("fill", function (b, c) {
				return a.color[c]
			}).each(function (a) {
				this._current = a
			});
			return g.update = function (b) {
				var d = d3.svg.arc().outerRadius(a.maxRadius).innerRadius(0);
				this.data(b.data).attr("transform", function (a) {
					if (a.lat && a.lon) return a.scale = e(a.values.total), "translate(" + F([a.lon, a.lat]) + ")scale(" + e(a.values.total) + ")"
				}).selectAll("path").data(function (a, b) {
					var d = a.values.piedata;
					return c(d)
				}).attr("d", d).exit().remove()
			}, g
		}, D.addStyledLabels = function (a) {
			var b = "#000",
				c = 1,
				d = 25,
				e = "./images/labels/label1.svg",
				f = [{
					name: "Zero1",
					lat: 2,
					lon: 0
				}],
				g = 0,
				h = 0;
			a.source && (f = a.source), a.fade && (g = a.fade), a.delay && (h = a.delay), a.class && (symbolClass = a.class), a.fontStyle && (fontStyle = a.fontStyle), a.labelSource && (e = a.labelSource), a.opacity && (c = a.opacity), a.color && (b = a.color), a.textAnchor && (textAnchor = a.textAnchor), a.size && (d = a.size), a.xOffset && a.xOffset, a.yOffset && a.yOffset;
			var i;
			d3.xml(e, "image/svg+xml", function (e) {
				var j = document.importNode(e.documentElement, !0);
				i = D.selectAll(".styledLabel").data(f).enter().append("g").style("opacity", 1).attr("class", "styledLabel styledLabel1").attr("transform", function (a) {
					return "translate(" + F([a.lon, a.lat]) + ")"
				}).each(function (a, e) {
					var f = a.name,
						i = this.appendChild(j.cloneNode(!0)),
						i = d3.select(i),
						k = i.attr("height", d).select("text"),
						l = (k.select("tspan").text(f), d3.select("body").append("svg")),
						m = l.append("text").text(f).style("font-size", function () {
							return k.style("font-size")
						}),
						n = l.node().getBBox();
					l.remove(), m.remove(), i.style("opacity", 0).select("rect").attr("width", parseInt(n.width) + 27).style("fill", b), i.select("path").style("fill", b), i.attr("width", parseInt(n.width) + 66), i.attr("preserveAspectRatio", "xMinYMin").attr("y", -d / 2), i.transition().delay(h).duration(g).style("opacity", c)
				}), void 0 != a.frame && (i = frameHandler(a.frame, i)), initFrame()
			})
		}, D.addCustomLabels = function (a) {
			var b = J.selectAll(".labelPoint .districtLabels").data(a.filter(function (a) {
				return "undefined" !== a.key
			})).enter().append("g").style("opacity", .8).attr("class", "districtLabels frame frame1").attr("transform", function (a) {
				return "translate(" + F([a.centroid_x, a.centroid_y]) + ")"
			});
			b.append("text").text(function (a) {
				return a.name
			}).attr("x", 0).attr("y", -1).style("font-family", "'Open Sans', sans-serif").style("font-size", 8).style("font-weight", "bold").style("font-style", "normal").style("fill", "#000").style("fill-opacity", .8).style("text-anchor", "middle").style("letter-spacing", .6).style("paint-order", "stroke").style("stroke-linecap", "butt").style("stroke-linejoin", "miter").style("stroke", "#fff").style("stroke-opacity", .5).style("stroke-width", 1), b.append("text").text(function (a) {
				return addCommas(a.values.total)
			}).attr("x", 0).attr("y", 11).style("font-family", "'Open Sans', sans-serif").style("font-size", 11).style("font-weight", "bold").style("font-style", "normal").style("fill", "#003857").style("text-anchor", "middle").style("letter-spacing", .6).style("paint-order", "stroke").style("stroke-linecap", "butt").style("stroke-linejoin", "miter").style("stroke", "#fff").style("stroke-opacity", .5).style("stroke-width", 1)
		}, D.addTextLabels = function (a) {
			var b = 12,
				c = "normal",
				d = "#000",
				e = "'Open Sans', sans-serif",
				f = "normal",
				g = 1,
				h = "middle",
				i = "label",
				j = 8,
				k = 4,
				l = [{
					name: "Zero",
					lat: 0,
					lon: 0
				}],
				m = 0,
				n = 0;
			a.fontSize && (b = a.fontSize), a.fontWeight && (c = a.fontWeight), a.fontFamily && (e = a.fontFamily), a.fontStyle && (f = a.fontStyle), a.opacity && (g = a.opacity), a.fontColor && (d = a.fontColor), a.textAnchor && (h = a.textAnchor), a.class && (i = a.class), a.xOffset && (j = a.xOffset), a.yOffset && (k = a.yOffset), a.source && (l = a.source), a.fade && (m = a.fade), a.delay && (n = a.delay);
			var o = J,
				p = o.selectAll(".labelPoint ." + i).data(l).enter().append("g").style("opacity", 1).attr("class", "textLabel " + i).attr("transform", function (a) {
					return "translate(" + F([a.lon, a.lat]) + ")"
				});
			return p.append("text").text(function (a) {
				return a.name
			}).attr("x", j).attr("y", k).style("font-family", e).style("font-size", b).style("font-weight", c).style("font-style", f).style("fill", d).style("text-anchor", h).style("letter-spacing", .6), p.transition().delay(n).duration(m).style("opacity", g), void 0 != a.frame && (p = frameHandler(a.frame, p)), p
		}, D.zoomToBounds = function (a) {
			dx = a[1][0] - a[0][0], dy = a[1][1] - a[0][1], x = (a[0][0] + a[1][0]) / 2, y = (a[0][1] + a[1][1]) / 2, scale = .9 / Math.max(dx / A, dy / C), translate = [A / 2 - scale * x, C / 2 - scale * y], b()
		}, D.addMask = function (a) {
			var b = [{
					name: "name",
					lat: 3.024,
					lon: 3.022
				}, {
					name: "name",
					lat: 5.916,
					lon: 1.505
				}, {
					name: "name",
					lat: 10.006,
					lon: 1.132
				}, {
					name: "name",
					lat: 15.532,
					lon: 2.89
				}, {
					name: "name",
					lat: 16.714,
					lon: 6.493
				}, {
					name: "name",
					lat: 16.187,
					lon: 16.161
				}, {
					name: "name",
					lat: 2.673,
					lon: 14.733
				}, {
					name: "name",
					lat: 1.773,
					lon: 8.207
				}],
				c = !1,
				d = "mask";
			a.outline && (c = a.outline), a.class && (d = a.class), a.path && (b = a.path);
			var f = d3.svg.line().x(function (a) {
				return e = F([a.lon, a.lat]), e[0]
			}).y(function (a) {
				return e = F([a.lon, a.lat]), e[1]
			}).interpolate("cardinal-closed");
			$("body").append('<span id="svgFiltersTmp"></span>');
			$("#svgFiltersTmp").load("./images/filters.svg", null, function () {
				var e = $("#svgFiltersTmp svg defs");
				$(u).append(e);
				var g = K.append("g").attr("class", d).attr("fill-rule", "evenodd").attr("x", 0).attr("y", 0).attr("transform", function (a) {}),
					g = g.selectAll("#maskOutline").data([b]).enter().append("path").attr("id", "maskOutline").attr("d", function (a) {
						return f(a)
					}).style("stroke", "black").style("fill-opacity", 0).style("fill", "white");
				0 == c && g.style("fill-opacity", 1).style("stroke", "#FFF").style("filter", "url(#blur111)");
				var h = g.attr("d");
				h = "M-500,-500 L2000,0 L2000,2000 L0,2000 L-500,-500 Z " + h + " Z ", g.attr("d", h), void 0 != a.frame && (g = frameHandler(a.frame, g))
			})
		}, D.addLine = function (a) {
			return J.append("path").datum({
				type: "LineString",
				coordinates: [a[0], a[1]]
			}).attr("class", "route").attr("d", H).style("stroke", "red").style("stroke-width", 2)
		}, D.addArrow = function (a) {
			var b = "#FFF",
				c = 2,
				d = [{
					lat: 44.42,
					lon: 33.32
				}, {
					lat: 43,
					lon: 29
				}, {
					lat: 43,
					lon: 28
				}],
				f = 1,
				g = 0,
				h = 0;
			a.color && (b = a.color), a.strokeWidth && (c = a.strokeWidth), a.source && (d = a.source), a.opacity && (f = a.opacity), a.fade && (g = a.fade), a.delay && (h = a.delay), arrow += 1, D.append("defs").append("marker").attr("id", "arrowhead" + arrow).attr("refX", 1).attr("refY", 2).attr("markerWidth", 3 * c).attr("markerHeight", 2 * c).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z").style("fill", b);
			var i = d3.svg.line().x(function (a) {
					return e = F([a.lon, a.lat]), e[0]
				}).y(function (a) {
					return e = F([a.lon, a.lat]), e[1]
				}).interpolate("basis"),
				j = J.selectAll(".path").data([d]);
			return j.enter().append("path"), j.attr("class", "arrow").attr("d", function (a) {
				return i(a)
			}).style("stroke", b).style("stroke-width", c).style("opacity", 0).style("fill", "none").attr("marker-end", "url(#arrowhead" + arrow + ")").style("stroke-linecap", "round"), j.transition().delay(h).duration(g).style("opacity", f), void 0 != a.frame && (j = frameHandler(a.frame, j)), j
		}, D.svgImport = function (a) {
			var b = "./images/MyLayer.svg",
				c = "MyLayer",
				d = 1,
				e = 0,
				f = 0;
			a.source && (b = a.source), a.layerId && (c = a.layerId), a.opacity && (d = a.opacity), a.fade && (e = a.fade), a.delay && (f = a.delay), d3.xml(b, function (b, g) {
				var h = ($(D[0]).parent("svg").attr("id"), g.getElementById(c));
				J.node().appendChild(h);
				var i = d3.select("#" + c).style("opacity", 0).attr("class", "import");
				if (d3.selectAll("#centerAnchor").node()) {
					var j = d3.transform(N.attr("transform")).translate;
					d3.selectAll(".import").each(function (a) {
						var b = d3.select(this).select("#anchor");
						if (b.node()) {
							var c = b.node().getBBox(),
								d = j[0] - (c.x + c.width / 2),
								e = j[1] - (c.y + c.height / 2);
							d3.select(this).attr("transform", "translate(" + d + "," + e + ")")
						}
					})
				}
				d3.selectAll("#anchor").style("stroke-opacity", 0), void 0 != a.frame && (i = frameHandler(a.frame, i)), i.transition().delay(f).duration(e).style("opacity", d), initFrame()
			})
		}, D.hexbin = function (a) {
			var c = "./images/MyLayer.svg",
				d = "hex",
				e = .5,
				f = "#bbbbbb",
				g = .5,
				h = "red",
				i = 15,
				j = ["#F0B800", "#DD0000"],
				k = "auto";
			a.source && (c = a.source), a.layerId && (d = a.layerId), void 0 != a.opacity && a.opacity, void 0 != a.hexStrokeOpacity && (g = a.hexStrokeOpacity), void 0 != a.meshStrokeOpacity && (e = a.meshStrokeOpacity), a.meshStrokeColor && (f = a.meshStrokeColor), a.hexStrokeColor && (h = a.hexStrokeColor), a.fade && a.fade, a.radius && (i = a.radius), a.delay && a.delay, a.colorRange && (j = a.colorRange), a.max && (k = a.max);
			var l = d3.hexbin().size([A, C]).radius(i).x(function (a) {
					return F([a.lon, a.lat])[0]
				}).y(function (a) {
					return F([a.lon, a.lat])[1]
				}),
				m = J.append("g").attr("id", d + "_mesh").attr("d", H);
			m.append("clipPath").attr("id", "clip").append("rect").attr("d", H).attr("class", d + "_mesh").attr("width", A).attr("height", C), m.append("svg:path").attr("clip-path", "url(#clip)").attr("d", l.mesh()).style("stroke-width", .5).style("stroke", f).style("stroke-opacity", e).style("fill", "none");
			var n = l(c),
				o = J.append("g").attr("d", H).attr("id", d),
				p = 0;
			"auto" != k ? p = a.max : $(n).each(function () {
				this.length > p && (p = this.length)
			}), d3.select("#maxIntensity").text(p);
			var q = d3.scale.sqrt().domain([1, p]).range([.2, 1]),
				r = d3.scale.linear().domain([1, p]).range([j[0], j[1]]).interpolate(d3.interpolateLab),
				s = o.selectAll(".hexagon").data(n).enter().append("path").attr("class", "hexagon").attr("d", function (a) {
					return l.hexagon()
				}).attr("transform", function (a) {
					return "translate(" + a.x + "," + a.y + ")"
				}).style("fill", function (a) {
					return r(a.length)
				}).style("fill-opacity", function (a) {
					return q(a.length)
				}).style("stroke-width", .5).style("stroke", h).style("stroke-opacity", g);
			void 0 != a.frame && (o = frameHandler(a.frame, o), m = frameHandler(a.frame, m));
			var t = function () {
				m.remove(), d3.selectAll("#" + d).remove(), m = J.append("g").attr("id", d + "_mesh").attr("d", H), m.append("clipPath").attr("id", "clip").append("rect").attr("d", H).attr("class", d + "_mesh").attr("width", A).attr("height", C), m.append("svg:path").attr("clip-path", "url(#clip)").attr("d", l.mesh()).style("stroke-width", .5).style("stroke", f).style("stroke-opacity", e).style("fill", "none"), n = l(c), o = J.append("g").attr("d", H).attr("id", d), n = l(c), p = 0, "auto" != k ? p = a.max : $(n).each(function () {
					this.length > p && (p = this.length)
				}), r = d3.scale.linear().domain([1, p]).range([j[0], j[1]]).interpolate(d3.interpolateLab), s = o.selectAll(".hexagon").data(n).enter().append("path").attr("class", "hexagon").attr("d", function (a) {
					return l.hexagon()
				}).attr("transform", function (a) {
					return "translate(" + a.x + "," + a.y + ")"
				}).style("fill", function (a) {
					return r(a.length)
				}).style("fill-opacity", function (a) {
					return q(a.length)
				}).style("stroke-width", .5).style("stroke", h).style("stroke-opacity", g), void 0 != a.frame && (o = frameHandler(a.frame, o), m = frameHandler(a.frame, m))
			};
			O.on("zoom", function () {
				b(), n = l(c);
				var a = 0;
				$(n).each(function () {
					this.length > a && (a = this.length)
				});
				var d = d3.scale.linear().domain([1, a]).range(["#F0B800", "#DD3728"]).interpolate(d3.interpolateLab);
				o.selectAll(".hexagon").data(n).attr("d", function (a) {
					return l.hexagon()
				}).attr("transform", function (a) {
					return "translate(" + a.x + "," + a.y + ")"
				}).style("fill", function (a) {
					return d(a.length)
				}).style("stroke-width", .5).style("stroke", "#FFF").style("stroke-opacity", .6)
			}), $("#zoomin, #zoomout").on("click", function () {
				t()
			}), void 0 != a.frame && (o = frameHandler(a.frame, o), m = frameHandler(a.frame, m))
		}, D
	}
};
d3.selection.prototype.moveToFront = function () {
	return this.each(function () {
		d3.select("svg").node().appendChild(this)
	})
}, d3.selection.prototype.moveToSvg = function (a) {
	return this.each(function () {
		a.node().appendChild(this)
	})
};
var QueryString = function () {
		for (var a = {}, b = window.location.search.substring(1), c = b.split("&"), d = 0; d < c.length; d++) {
			var e = c[d].split("=");
			if (void 0 === a[e[0]]) a[e[0]] = decodeURIComponent(e[1]);
			else if ("string" == typeof a[e[0]]) {
				var f = [a[e[0]], decodeURIComponent(e[1])];
				a[e[0]] = f
			} else a[e[0]].push(decodeURIComponent(e[1]))
		}
		return a
	}(),
	symbolTemplate = {
		countrycapital: {
			fontSize: 12,
			fontWeight: "bold",
			fontColor: "#000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "camps",
			width: 11,
			height: 11,
			icon: "./images/mapicons/CountryCapital.svg",
			xOffset: 0,
			yOffset: 0
		},
		admin1capital: {
			fontSize: 12,
			fontWeight: "normal",
			fontColor: "#000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "camps",
			width: 10,
			height: 10,
			icon: "./images/mapicons/Admin1Capital.svg",
			xOffset: 0,
			yOffset: 0
		},
		admin2capital: {
			fontSize: 11,
			fontWeight: "normal",
			fontColor: "#000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "camps",
			width: 10,
			height: 10,
			icon: "./images/mapicons/Admin2Capital.svg",
			xOffset: -1,
			yOffset: -.5
		},
		city: {
			fontSize: 11,
			fontWeight: "normal",
			fontColor: "#333333",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "camps",
			width: 6,
			height: 6,
			icon: "./images/mapicons/City.svg",
			xOffset: -2,
			yOffset: -.5
		},
		poi: {
			fontSize: 11,
			fontWeight: "bold",
			fontColor: "#333333",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "poi",
			width: 6,
			height: 6,
			icon: "./images/mapicons/POI.svg",
			xOffset: -2,
			yOffset: -.5
		},
		epicentre: {
			fontSize: 12,
			fontWeight: "bold",
			fontColor: "#7D0302",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "epicentre",
			width: 14,
			height: 14,
			icon: "./images/mapicons/epicentre.svg",
			xOffset: 0,
			yOffset: 0
		},
		office0: {
			fontSize: 12,
			fontWeight: "bold",
			fontColor: "#000000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "office0",
			width: 20,
			height: 20,
			icon: "./images/mapicons/UNOffice.svg",
			xOffset: 4,
			yOffset: 0
		},
		office1: {
			fontSize: 11,
			fontWeight: "bold",
			fontColor: "#000000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "office1",
			width: 17,
			height: 17,
			icon: "./images/mapicons/Office1.svg",
			xOffset: 2,
			yOffset: 0
		},
		office2: {
			fontSize: 11,
			fontWeight: "bold",
			fontColor: "#000000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "office2",
			width: 15,
			height: 15,
			icon: "./images/mapicons/Office2.svg",
			xOffset: 2,
			yOffset: 0
		},
		office3: {
			fontSize: 11,
			fontWeight: "bold",
			fontColor: "#000000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "office3",
			width: 15,
			height: 15,
			icon: "./images/mapicons/Office3.svg",
			xOffset: 2,
			yOffset: 0
		},
		office4: {
			fontSize: 11,
			fontWeight: "bold",
			fontColor: "#000000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "office4",
			width: 12,
			height: 12,
			icon: "./images/mapicons/Office4.svg",
			xOffset: 0,
			yOffset: 0
		},
		office5: {
			fontSize: 11,
			fontWeight: "bold",
			fontColor: "#000000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "office5",
			width: 12,
			height: 12,
			icon: "./images/mapicons/Office5.svg",
			xOffset: 0,
			yOffset: 0
		},
		camp: {
			fontSize: 11,
			fontWeight: "bold",
			fontColor: "#000000",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "camp",
			width: 13,
			height: 13,
			icon: "./images/mapicons/Camps.svg",
			xOffset: 0,
			yOffset: 0
		},
		location: {
			fontSize: 10,
			fontWeight: "bold",
			fontColor: "#555555",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "location",
			width: 13,
			height: 13,
			icon: "./images/mapicons/UrbanLocation.svg",
			xOffset: 0,
			yOffset: -2
		},
		radio: {
			fontSize: 10,
			fontWeight: "bold",
			fontColor: "#555555",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "location",
			width: 13,
			height: 13,
			icon: "./images/mapicons/radio.svg",
			xOffset: 0,
			yOffset: -2
		},
		totalpop: {
			fontSize: 10,
			fontWeight: "bold",
			fontColor: "#555555",
			fontFamily: "'Open Sans', sans-serif",
			fontStyle: "normal",
			opacity: 1,
			symbolClass: "location",
			width: 13,
			height: 13,
			icon: "./images/mapicons/totalpop.svg",
			xOffset: 0,
			yOffset: -2
		}
	},
	populationTypes = [{
		"Refugees, including persons in a refugee-like situation": "ref+roc"
	}, {
		"Asylum-seekers (pending cases)": "asy"
	}, {
		"IDPs protected/assisted by UNHCR, including persons in an IDP-like situation": "idp+ioc"
	}, {
		"Returned refugees, returned IDPs": "ret+rdp"
	}, {
		"Persons under UNHCR’s statelessness mandate": "sta"
	}, {
		"Others of concern to UNHCR": "ooc"
	}],
	popTypeColors = ["#ff9191", "#3c5a7d", "#64CFBC", "#acacac", "#769a8f", "#ad7e7a"],
	popTypeColors2 = ["#ffc8c8", "#697f9b", "#A7E8E0", "#cccccc", "#adc2bc", "#ceb2af"],
	popTypeColorKey = {
		REF: ["#ff9191", "#ffc8c8"],
		ASY: ["#3c5a7d", "#697f9b"],
		IDP: ["#64CFBC", "#A7E8E0"],
		RET: ["#acacac", "#cccccc"],
		STA: ["#769a8f", "#adc2bc"],
		OTH: ["#ad7e7a", "#ceb2af"]
	},
	popTypes = ["REF", "ASY", "IDP", "RET", "STA", "OTH"],
	popSelected = ["REF", "ASY", "IDP", "RET", "STA", "OTH"],
	selectedCountry = null,
	totalToggle = !0,
	pieOpacity = {};
pieOpacity.normal = .7, pieOpacity.normalHover = .9, pieOpacity.selected = 1, pieOpacity.selectedHover = 1, pieOpacity.unselected = .2, pieOpacity.unselectedHover = .4;
var country = {};
country.normal = "#DDDDDD", country.normalHover = "#D3D3D3", country.selected = "#C1C1C1";
var dataSources = [{
		name: "world",
		source: "scripts/geo/topojson/worldhistory.json"
	}, {
		name: "centroid",
		source: "scripts/geo/topojson/centroid.csv"
	}, {
		name: "disputed_boundaries",
		source: "scripts/geo/topojson/disputed_boundaries.json"
	}, {
		name: "disputed_boundaries_polygons",
		source: "scripts/geo/topojson/disputed_boundaries_polygons.json"
	}, {
		name: "poc",
		source: "scripts/geo/data/data.json"
	}, {
		name: "layout",
		source: "images/svg/layout.svg"
	}],
	viz = new Vizlib(dataSources, function (a) {
		function b() {
			return selectedCountry ? v[selectedCountry][S] : s[S]
		}

		function c() {
			return selectedCountry ? (w[selectedCountry].forEach(function (a, b) {
				var c = 0; - 1 !== $.inArray("REF", popSelected) && (c += a.piedata[0]), -1 !== $.inArray("ASY", popSelected) && (c += a.piedata[1]), -1 !== $.inArray("IDP", popSelected) && (c += a.piedata[2]), -1 !== $.inArray("RET", popSelected) && (c += a.piedata[3]), -1 !== $.inArray("STA", popSelected) && (c += a.piedata[4]), -1 !== $.inArray("OTH", popSelected) && (c += a.piedata[5]), a.barValues = [], a.barValues[0] = 0, a.barValues[1] = c, a.totals = c
			}), w[selectedCountry]) : (t.forEach(function (a, b) {
				var c = 0; - 1 !== $.inArray("REF", popSelected) && (c += a.piedata[0]), -1 !== $.inArray("ASY", popSelected) && (c += a.piedata[1]), -1 !== $.inArray("IDP", popSelected) && (c += a.piedata[2]), -1 !== $.inArray("RET", popSelected) && (c += a.piedata[3]), -1 !== $.inArray("STA", popSelected) && (c += a.piedata[4]), -1 !== $.inArray("OTH", popSelected) && (c += a.piedata[5]), a.barValues = [], a.barValues[0] = 0, a.barValues[1] = c, a.totals = c
			}), t)
		}

		function d(b) {
			var c = C,
				d = c.filter(function (a, c) {
					return a.year === b
				}),
				e = d3.nest().key(function (a) {
					return a.country_iso
				}).rollup(function (a) {
					return {
						piedata: [d3.sum(a, function (a) {
							return -1 !== $.inArray("REF", popSelected) ? 1 + a.ref : 1
						}), d3.sum(a, function (a) {
							return -1 !== $.inArray("ASY", popSelected) ? 1 + a.asy : 1
						}), d3.sum(a, function (a) {
							return -1 !== $.inArray("IDP", popSelected) ? 1 + a.idp : 1
						}), d3.sum(a, function (a) {
							return -1 !== $.inArray("RET", popSelected) ? 1 + a.ret : 1
						}), d3.sum(a, function (a) {
							return -1 !== $.inArray("STA", popSelected) ? 1 + a.sta : 1
						}), d3.sum(a, function (a) {
							return -1 !== $.inArray("OTH", popSelected) ? 1 + a.ooc : 1
						})]
					}
				}).entries(d);
			return e = e.filter(function (a) {
				return "EST" != a.key
			}), e = e.filter(function (a) {
				return "LVA" != a.key
			}), e.sort(function (a, b) {
				return d3.descending(d3.sum(a.values.piedata), d3.sum(b.values.piedata))
			}), e.forEach(function (b) {
				b.values.total = d3.sum(b.values.piedata), a.centroid.forEach(function (a) {
					b.key === a.iso3 && (b.lat = parseFloat(a.centroid_lat), b.lon = parseFloat(a.centroid_lon))
				})
			}), e
		}

		function e(a) {
			k(a), g(a), F.attr("opacity", function (b, c) {
				return selectedCountry ? b.key == selectedCountry ? pieOpacity.selectedHover : b.key == a ? .4 : pieOpacity.unselected : a == b.key ? pieOpacity.normalHover : pieOpacity.normal
			}), E.style("fill", function (b) {
				return selectedCountry && b.id == selectedCountry ? country.selected : b.id == a ? country.normalHover : country.normal
			})
		}

		function f() {
			l(), F.attr("opacity", function (a, b) {
				return a.key == selectedCountry ? pieOpacity.selected : selectedCountry ? pieOpacity.unselected : pieOpacity.normal
			}), E.style("fill", function (a) {
				return a.id == selectedCountry ? country.selected : country.normal
			})
		}

		function g(b) {
			d = 0;
			var c = a.poc.filter(function (a, b) {
				return a.year == S
			}).filter(function (a, c) {
				return a.country_iso == b
			});
			if (c[0]) var d = c[0].total;
			else var d = 0;
			d3.select("#tooltipVal").text(addCommas(d));
			var e = d3.select("#tooltipVal").node().getBBox().width,
				f = P - e;
			isNaN(f) || d3.select("#tooltipPoc").attr("x", function (a, b) {
				return Q - f
			});
			var g = (d3.select("#tooltipName").node().getBBox().width, d3.selectAll("#tooltipVal,#tooltipPoc").node().getBBox().width, M.node().getBBox().width + 20);
			H.attr("width", function () {
				return g
			})
		}

		function h() {
			var a = b();
			if (a) var c = a.piedata,
				d = a.totals;
			else var c = [0, 0, 0, 0, 0, 0],
				d = 0;
			if (1 == totalToggle ? (d3.select("#refval text").attr("text-anchor", "end").text(addCommas(c[0])), d3.select("#asyval text").attr("text-anchor", "end").text(addCommas(c[1])), d3.select("#idpval text").attr("text-anchor", "end").text(addCommas(c[2])), d3.select("#retval text").attr("text-anchor", "end").text(addCommas(c[3])), d3.select("#staval text").attr("text-anchor", "end").text(addCommas(c[4])), d3.select("#othval text").attr("text-anchor", "end").text(addCommas(c[5]))) : (d3.select("#refval text").attr("text-anchor", "end").text(toPercent(c[0] / a.totals)), d3.select("#asyval text").attr("text-anchor", "end").text(toPercent(c[1] / a.totals)), d3.select("#idpval text").attr("text-anchor", "end").text(toPercent(c[2] / a.totals)), d3.select("#retval text").attr("text-anchor", "end").text(toPercent(c[3] / a.totals)), d3.select("#staval text").attr("text-anchor", "end").text(toPercent(c[4] / a.totals)), d3.select("#othval text").attr("text-anchor", "end").text(toPercent(c[5] / a.totals))), d3.select("#totaltop text").text(totalRound(d)), selectedCountry) {
				d3.select("#total").style("opacity", 1);
				var e = x.filter(function (a, b) {
						return a.id == selectedCountry
					}),
					f = 2012;
				if (f = S > 2012 ? 2012 : S, e = e.filter(function (a) {
						return f >= a.properties.startyear && f <= a.properties.endyear
					}), 0 == e.length) return d3.select("#total").style("opacity", .3), d3.select("#totalsub text").text("end of " + S), !1;
				var g = e[0].properties.name;
				d3.select("#totalsub text").text("in " + g + " - end of " + S)
			} else d3.select("#totalsub text").text("globally - end of " + S);
			var h = document.getElementById("totaltop").getBBox().width;
			d3.select("#totaltoppoc text:last-child").attr("x", function (a, b) {
				return h - 160
			});
			var i = (document.getElementById("totalsub").getBBox().width, document.getElementById("totaltext").getBBox().width);
			U && U.attr("width", i + 23)
		}

		function i(a) {
			if (d3.select("#mapbg").style("cursor", "pointer"), 0 == zooming) {
				if (selectedCountry == a) return j(), !1;
				selectedCountry = a, T.update(S), R.update({
					data: c()
				})
			}
		}

		function j() {
			d3.select("#mapbg").style("cursor", "default"), d3.select("#total").style("opacity", 1), 0 == zooming && (selectedCountry = null, T.update(S), R.update({
				data: c()
			}), f())
		}

		function k(a) {
			if ("" != a) {
				var b = x.filter(function (b, c) {
						return b.id == a
					}),
					c = S;
				S > 2012 && (c = 2012);
				var b = b.filter(function (a) {
						return c >= a.properties.startyear && c <= a.properties.endyear
					}),
					d = b[0].properties.name;
				d3.select("#tooltipName").text(d)
			}
			d3.select("#tooltip").style("display", "block")
		}

		function l() {
			d3.select("#tooltip").style("display", "none"), E.style("fill", country.normal)
		}

		function m(a) {
			var b = $("#selectFrameDiv li:nth-child(" + a + ")").text();
			$("#selectFrame .textlabel").text(b)
		}
		var n = glow("myGlow").rgb("#FFF").stdDeviation(4),
			o = viz.createSvg({
				div: "#svgContainer",
				id: "mapsvg",
				viewBoxWidth: 1500,
				viewBoxHeight: 1060,
				scrollable: !1,
				downloadButton: !1
			});
		o.call(n);
		var p = (viz.svgImport({
			appendTo: o,
			source: a.layout,
			id: "layout",
			layerId: "Layout"
		}), viz.createSubSvg({
			appendTo: o,
			attachTo: "mapcontainer",
			id: "subsvg",
			x: 20,
			y: 200,
			width: 1460,
			height: 525
		}));
		d3.select("#frame2").style("opacity", 0).style("display", "none"), d3.select("#frame0").style("opacity", 1).style("cursor", "pointer").on("click", function () {
			d3.select(this).transition().duration(1e3).style("opacity", 0).each("end", function () {
				d3.select("#frame0").style("display", "none")
			})
		}), d3.select("#help").style("cursor", "pointer").attr("opacity", .6).on("mouseover", function () {
			d3.select(this).style("opacity", 1)
		}).on("mouseout", function () {
			d3.select(this).style("opacity", .6)
		}).on("click", function () {
			d3.select("#frame0").style("display", "block").transition().duration(1e3).style("opacity", 1)
		}), d3.selectAll("#reftab,#poctab,#asytab").style("cursor", "pointer"), d3.selectAll("#poctext tspan").attr("fill", "#000"), d3.select("#poctab").on("click", function () {
			d3.selectAll("#poctext tspan").transition().duration(1e3).attr("fill", "#000"), d3.selectAll("#reftext tspan,#asytext tspan").attr("fill", "#666666"), d3.selectAll("#asytabline,#reftabline").transition().duration(250).style("opacity", .25), d3.select("#poctabline").transition().delay(250).duration(250).style("opacity", 1), d3.selectAll("#frame2").transition().duration(700).style("opacity", 0).each("end", function () {
				d3.selectAll("#frame2").style("display", "none")
			}), d3.selectAll("#frame1,.frame1").style("display", "block").transition().delay(700).duration(700).style("opacity", 1)
		}), d3.select("#reftab").on("click", function () {
			d3.selectAll("#reftext tspan").attr("fill", "#000"), d3.selectAll("#poctext tspan,#asytext tspan").attr("fill", "#666666"), d3.selectAll("#asytabline,#poctabline").transition().duration(250).style("opacity", .25), d3.select("#reftabline").transition().delay(250).duration(250).style("opacity", 1), d3.selectAll("#frame1,.frame1").transition().duration(700).style("opacity", 0).each("end", function () {
				d3.selectAll("#frame1,.frame1").style("display", "none")
			}), d3.select("#frame2").style("display", "block").transition().delay(700).duration(700).style("opacity", 1)
		}), d3.select("#asytab").on("click", function () {
			d3.selectAll("#asytext tspan").attr("fill", "#000"), d3.selectAll("#poctext tspan,#reftext tspan").attr("fill", "#666666"), d3.selectAll("#reftabline,#poctabline").transition().duration(250).style("opacity", .25), d3.select("#asytabline").transition().delay(250).duration(250).style("opacity", 1), d3.selectAll("#frame1,.frame1").transition().duration(700).style("opacity", 0).each("end", function () {
				d3.selectAll("#frame1,.frame1").style("display", "none")
			}), d3.select("#frame2").style("display", "block").transition().delay(700).duration(700).style("opacity", 1)
		}), $(a.poc).each(function (a, b) {
			b.ref || (b.ref = 0), b.roc || (b.roc = 0), b.asy || (b.asy = 0), b.idp || (b.idp = 0), b.ret || (b.ret = 0), b.ioc || (b.ioc = 0), b.rdp || (b.rdp = 0), b.sta || (b.sta = 0);
			for (var c in this) "*" == this[c] && (this[c] = null);
			b.ref = b.ref + b.roc, b.idp = b.idp + b.ioc, b.ret = b.ret + b.rdp, delete b.ioc, delete b.rdp, delete b.roc
		});
		var q = d3.nest().key(function (a) {
				return a.year
			}).rollup(function (a) {
				return {
					piedata: [d3.sum(a, function (a) {
						return a.ref
					}), d3.sum(a, function (a) {
						return a.asy
					}), d3.sum(a, function (a) {
						return a.idp
					}), d3.sum(a, function (a) {
						return a.ret
					}), d3.sum(a, function (a) {
						return a.sta
					}), d3.sum(a, function (a) {
						return a.ooc
					})],
					totals: d3.sum(a, function (a) {
						return a.total
					})
				}
			}).entries(a.poc),
			r = [],
			s = {},
			t = [];
		q.forEach(function (a, b) {
			s[a.key] = [], s[a.key].piedata = a.values.piedata, s[a.key].totals = a.values.totals, s[a.key].barValues = [0, a.values.totals], t[b] = {
				year: parseInt(a.key),
				series: parseInt(a.key),
				piedata: a.values.piedata,
				totals: a.values.totals
			}, r.push(a.key)
		});
		var u = d3.nest().key(function (a) {
				return a.country_iso
			}).key(function (a) {
				return a.year
			}).rollup(function (a) {
				return {
					piedata: [d3.sum(a, function (a) {
						return a.ref
					}), d3.sum(a, function (a) {
						return a.asy
					}), d3.sum(a, function (a) {
						return a.idp
					}), d3.sum(a, function (a) {
						return a.ret
					}), d3.sum(a, function (a) {
						return a.sta
					}), d3.sum(a, function (a) {
						return a.ooc
					})],
					totals: d3.sum(a, function (a) {
						return a.total
					})
				}
			}).entries(a.poc),
			v = {},
			w = {};
		u.forEach(function (a, b) {
			v[a.key] = [], w[a.key] = [];
			for (var c = (d3.min(a.values, function (a) {
					return a.key
				}), d3.max(a.values, function (a) {
					return a.key
				}), 1951); c <= 2017; c++) {
				var d = 0;
				a.values.forEach(function (a, b) {
					a.key = parseInt(a.key), a.key == c && (d = 1)
				}), 0 == d && a.values.push({
					key: c,
					values: {
						piedata: [0, 0, 0, 0, 0, 0],
						totals: 0
					}
				})
			}
			a.values.sort(function (a, b) {
				return a.key - b.key
			}).forEach(function (b, c) {
				v[a.key][b.key] = [], v[a.key][b.key].piedata = b.values.piedata, v[a.key][b.key].totals = b.values.totals, w[a.key][c] = {
					year: parseInt(b.key),
					series: parseInt(b.key),
					piedata: b.values.piedata,
					totals: b.values.totals,
					barValues: [0, b.values.totals]
				}
			})
		});
		var x = a.world.objects.cshapes2.geometries,
			y = a.poc,
			z = [];
		y.forEach(function (a, b) {
			(z[a.country_iso] < a.total || !z[a.country_iso]) && (z[a.country_iso] = a.total)
		});
		var A = [];
		for (var B in z) z[B] > 2e3 && A.push(B);
		var C = a.poc.filter(function (a, b) {
				return A.indexOf(a.country_iso) > -1 && "VAR" != a.country_code && "LVA" != a.country_code && "EST" != a.country_code
			}),
			D = (d3.max(a.poc, function (a) {
				return a.total
			}), viz.map({
				appendTo: p,
				enableRaster: !1,
				center: [15, 38],/*15, 38*/
				xOffset: 33,
				yOffset: -110,
				zoomInit: 11,/*11*/
				mapbox: "matthewsmawfield.31370f48",
				enableZoomButtons: !0,
				zoomBtnPos: "topright",
				enableZoomMouseScroll: !1,
				enablePan: !0,
				zoomButtonsHtml: '<div class="zoomBox"><div class="zoom zoomIn"></div><div class="zoom zoomOut"></div></div>',
				zoomInSteps: 1,
				zoomOutSteps: -.1,
				zoomFactor: 2,
				zoomTweak: .75,
				coordinatesTooltip: !1,
				coordinatesToClipboard: !1,
				frame: [1]
			}));
		p.on("mousemove", function () {
			var a = d3.event.pageY,
				b = d3.event.pageX,
				c = d3.mouse(this),
				b = c[0] + 50,
				a = c[1] + 35,
				d = M.node().getBBox().width + 13;
			K.attr("transform", "translate(" + d + ",0)"), L.attr("x", d - 16), b >= 1280 ? (b = b - d - 70, I.attr("opacity", 0), J.attr("opacity", 0), K.attr("opacity", 1), L.attr("opacity", 1)) : (I.attr("opacity", 1), J.attr("opacity", 1), K.attr("opacity", 0), L.attr("opacity", 0)), d3.select("#tooltip").attr("transform", function () {
				return "translate(" + b + "," + a + ")"
			})
		});
		var E = (D.addVectorPolygon({
			source: a.world,
			class: "countryBg",
			fillOpacity: 1,
			fill: "#EEEEEE",
			strokeOpacity: 1,
			strokeWidth: 1,
			strokeColor: "none"
		}), D.addVectorPolygon({
			source: a.world,
			class: "country",
			fillOpacity: 1,
			fill: country.normal,
			strokeOpacity: 1,
			strokeWidth: 1,
			strokeColor: "#F3F3F3"
		}));
		E.style("cursor", "pointer").on("mouseover", function (a) {
			e(a.id)
		}).on("mouseout", function () {
			f()
		}).on("click", function (a) {
			i(a.id), e(a.id)
		});
		var F = (D.addVectorPolygon({
			source: a.disputed_boundaries_polygons,
			class: "boundarypolygons",
			fillOpacity: 1,
			fill: country.normal,
			strokeOpacity: 1,
			strokeWidth: 1,
			strokeColor: "#FFFFFF",
			strokeDotted: !0
		}), D.addVectorPolygon({
			source: a.disputed_boundaries,
			class: "boundary1",
			fillOpacity: 0,
			fill: country.normal,
			strokeOpacity: 1,
			strokeWidth: 2,
			strokeColor: "#DDDDDD",
			strokeDotted: !1
		}), D.addVectorPolygon({
			source: a.disputed_boundaries,
			class: "boundary2",
			fillOpacity: 0,
			fill: country.normal,
			strokeOpacity: 1,
			strokeWidth: 1,
			strokeColor: "#FFFFFF",
			strokeDotted: !0
		}), D.addPies({
			data: function () {
				var b = C,
					c = d3.nest().key(function (a) {
						return a.country_iso
					}).rollup(function (a) {
						return {
							total: 6,
							piedata: [1, 1, 1, 1, 1, 1]
						}
					}).entries(b);
				return c.forEach(function (b) {
					a.centroid.forEach(function (a) {
						b.key == a.iso3 && (b.lat = parseFloat(a.centroid_lat), b.lon = parseFloat(a.centroid_lon))
					})
				}), c
			}(),
			max: 1e7,
			maxRadius: 50,
			color: popTypeColors,
			opacity: pieOpacity.normal,
			frame: 1,
			mouseover: function (a) {
				e(a.key)
			},
			mouseout: function () {
				f()
			},
			click: function (a) {
				i(a.key), e(a.key)
			}
		}));
		F.style("cursor", "pointer");
		var G = D.append("g").attr("id", "tooltip").attr("transform", "translate(300,300)").style("display", "block"),
			H = G.append("rect").attr("x", 0).attr("y", 0).attr("width", 180).attr("height", 45).attr("rx", 5).attr("ry", 5).style("fill", "#FFF").style("stroke", "#ACACAC").style("stroke-width", 2.5),
			I = G.append("path").attr("d", " M 3 12  L -15 22.5  L 3 33 L 3 12").style("fill", "#FFF").style("stroke", "#ACACAC").style("stroke-width", 2.5).attr("transform", "translate(0,0)"),
			J = G.append("rect").attr("x", 3).attr("y", 10).attr("width", 20).attr("height", 25).style("fill", "#FFF").style("stroke", "#FFF").style("stroke-width", 3),
			K = G.append("path").attr("d", " M 3 12  L 18 22.5  L 3 33 L 3 12").style("fill", "#FFF").style("stroke", "#ACACAC").style("stroke-width", 2.5).attr("transform", "translate(195,0)"),
			L = G.append("rect").attr("x", 185).attr("y", 10).attr("width", 20).attr("height", 25).style("fill", "#FFF").style("stroke", "#FFF").style("stroke-width", 3),
			M = G.append("g"),
			N = (M.append("text").attr("id", "tooltipName").attr("x", 8).attr("y", 17).style("font-family", "Proxima Nova").style("font-size", "12px").style("font-weight", "bold").text("Country Name"), M.append("text").attr("id", "tooltipVal").attr("x", 8).attr("y", 36).style("font-family", "Proxima Nova").style("font-weight", "bold").style("font-size", "14px").style("fill", "#0077C0").text("12,000,000")),
			O = M.append("text").attr("id", "tooltipPoC").attr("x", 85).attr("y", 35).style("font-family", "Proxima Nova").style("font-weight", "normal").style("font-size", "12px").style("fill", "grey").text("persons of concern"),
			P = N.node().getBBox().width,
			Q = O.attr("x");
		G.node().getBBox().width;
		G.style("display", "none");
		var R = viz.columnChart({
			appendTo: o,
			id: "columnChart1",
			attachTo: "timelinecontainer",
			opacity: 1,
			gutter: .05,
			x: 40,
			y: 735,
			width: 1460,
			height: 120,
			color: ["#0B63AF"],
			maxValue: "round",
			paddingLeft: 63,
			paddingTop: 2,
			dataLabels: {
				enabled: !1,
				font: {
					size: "12px",
					weight: "normal",
					family: "Proxima Nova",
					padding: 6
				}
			},
			yAxis: {
				enabled: !0,
				label: "",
				gridlines: {
					enabled: !0,
					stroke: "#A7A7A7",
					strokeWidth: 1,
					opacity: 1,
					dotted: !0
				},
				font: {
					values: {
						size: "11px",
						weight: "bold",
						family: "Proxima Nova",
						padding: 0
					},
					label: {
						size: "14px",
						weight: "bold",
						family: "Proxima Nova",
						padding: 10
					}
				}
			},
			xAxis: {
				enabled: !1,
				label: "Years",
				gridlines: {
					enabled: !0,
					stroke: "grey",
					strokeWidth: 1,
					opacity: 1
				},
				font: {
					values: {
						size: "14px",
						weight: "bold",
						family: "Proxima Nova"
					},
					label: {
						size: "14px",
						weight: "bold",
						family: "Proxima Nova"
					}
				}
			},
			font: {
				title: {
					size: "20px",
					weight: "bold"
				},
				subtitle: {
					size: "12px",
					weight: "normal"
				}
			},
			legend: {
				enabled: !0,
				position: "top"
			},
			data: c(),
			dataValues: "totals",
			dataKey: "year",
			frame: [1]
		});
		d3.selectAll("#columnChart1").style("background-color", "#FFF !important"), R.style("cursor", "pointer").on("mouseover", function (a) {
			d3.select(this).attr("opacity", .9)
		}).on("mouseout", function (a) {
			d3.select(this).attr("opacity", 1)
		}).on("click", function (a) {
			T.update(a.year), T.setVal(a.year)
		});
		var S = 2017,
			T = viz.slider({
				appendTo: o,
				id: "yearButtons",
				attachTo: "yearbuttoncontainer",
				thisClass: "slider",
				opacity: 1,
				labelPosition: "bottom",
				barPadding: !0,
				paddingLeft: 60,
				frame: 1,
				x: 50,
				y: 0,
				fade: 0,
				delay: 0,
				height: 50,
				width: 500,
				data: r,
				stroke: "#444444",
				handleStroke: "#999999",
				defaultValue: S,
				snap: !0,
				action: function (a) {
					S = a, d3.select("#columnChart1").selectAll(".bar").style("fill", function (b, c) {
						var d = d3.select(this.parentNode).datum().series;
						return 1 == popSelected.length ? d == a ? popTypeColorKey[popSelected[0]][0] : popTypeColorKey[popSelected[0]][1] : d == a ? "#0B63AF" : "#84B1D7"
					}), F.update({
						data: d(a)
					}), h(), selectedCountry && F.attr("opacity", function (a, b) {
						return a.key == selectedCountry ? pieOpacity.selected : pieOpacity.unselected
					});
					var b = a;
					a > 2012 && (b = 2012), d3.selectAll(".country").style("display", "block").filter(function (a) {
						return a.properties.startyear > b || a.properties.endyear + 1 <= b
					}).style("display", "none"), d3.selectAll(".boundary1").style("display", "block").filter(function (a) {
						return parseInt(a.properties.startyear - 1) >= b
					}).style("display", "none"), d3.selectAll(".boundary2").style("display", "block").filter(function (a) {
						return parseInt(a.properties.startyear - 1) >= b
					}).style("display", "none"), d3.selectAll(".boundarypolygons").style("display", "block").filter(function (a) {
						return parseInt(a.properties.startyear - 1) >= b
					}).style("display", "none")
				}
			});
		T.update(S), d3.select("#togglehelper").attr("opacity", 0), d3.select("#togglemask").on("mouseover", function () {
			d3.select("#togglebg #oval").style("fill", "#F3F3F3"), d3.select("#togglehelper").transition().delay(500).duration(1500).attr("opacity", 1)
		}).on("mouseout", function () {
			d3.select("#togglehelper").transition().duration(300).attr("opacity", 0), d3.select("#togglebg #oval").style("fill", "#FFF")
		}), d3.select("#toggle").style("cursor", "pointer").classed({
			frame1: !0
		}).on("click", function () {
			1 == totalToggle ? (d3.select("#pertoggle").style("fill", "#FFF"), d3.select("#indtoggle").style("fill", "#666666"), d3.select("#circletoggle").transition().duration(50).attr("transform", "translate(22,0)"), totalToggle = !1) : (d3.select("#pertoggle").style("fill", "#666666"), d3.select("#indtoggle").style("fill", "#FFF"), d3.select("#circletoggle").transition().duration(50).attr("transform", "translate(0,0)"), totalToggle = !0), h()
		}), d3.selectAll("#toggle").moveToFront(), d3.selectAll("#selectall").moveToFront(), d3.selectAll("#total").moveToFront(), d3.selectAll("#totaltext").moveToFront(), d3.selectAll("#disclaimer").moveToFront(), d3.selectAll("#filtertitle").moveToFront(), d3.selectAll("#tooltip").moveToFront(), d3.selectAll("#maplegend").moveToFront(), d3.selectAll("#embedframe").moveToFront(), d3.selectAll("#poptooltip").moveToFront(), d3.selectAll("#colchartbg").moveToFront(), d3.selectAll("#poptypefilters").moveToFront(), d3.selectAll("#columnChart1").moveToFront(), d3.selectAll("#frame0").moveToFront(), d3.select("#total").classed({
			frame1: !0
		}), d3.select("#disclaimer").classed({
			frame1: !0
		});
		var U = (document.getElementById("totaltop").getBBox().width, d3.select("#total").insert("rect", ":first-child").attr("id", "#totalBg").attr("x", 45).attr("y", 75).attr("rx", 8).attr("ry", 8).attr("width", 351).attr("height", 78).attr("fill", "#FFF").attr("opacity", .8)),
			V = document.getElementById("totaltop").getBBox().width;
		d3.select("#totaltoppoc text:last-child").attr("x", function (a, b) {
			return V - 160
		}), d3.select("#mapbg").on("click", function (a, b) {
			j()
		}), $(popTypes).each(function (a, b) {
			var c = "#" + b.toLowerCase() + "_tooltip";
			d3.select(c).attr("opacity", 0).attr("filter", "url(#myGlow)");
			d3.select("#poptooltip").attr("transform", "translate(0,140)")
		}), d3.select("#selectall").style("display", "none").style("cursor", "pointer").on("mouseover", function () {
			d3.selectAll("#selectallbg path:first-child").style("fill", "#f3f3f3")
		}).on("mouseout", function () {
			d3.selectAll("#selectallbg path:first-child").style("fill", "#FFF")
		}).on("click", function () {
			d3.select("#selectall").style("display", "none"), popSelected = ["REF", "ASY", "IDP", "RET", "STA", "OTH"], T.update(S), R.update({
				data: c()
			}), d3.selectAll(".filterBtn").transition().duration(500).attr("opacity", 0)
		}), d3.selectAll("#ref,#asy,#idp,#ret,#sta,#oth").attr("class", "filterBtn").style("fill-opacity", 1).attr("opacity", 0).style("cursor", "pointer"), d3.selectAll("#ref,#asy,#idp,#ret,#sta,#oth").on("click", function () {
			d3.select("#selectall").style("display", "none");
			var a = this.id.toUpperCase();
			if (6 == popSelected.length) d3.selectAll(".filterBtn:not(#" + a + ")").transition().duration(500).attr("opacity", .6), d3.select("#" + a).attr("opacity", 0), popSelected = [a], T.update(S);
			else if (-1 == $.inArray(a, popSelected)) popSelected.push(a), d3.select("#" + a).attr("opacity", 0), T.update(S);
			else {
				var b = popSelected.indexOf(a);
				b > -1 && popSelected.splice(b, 1), d3.select("#" + a).transition().duration(500).attr("opacity", .6), 0 == popSelected.length && (popSelected = ["REF", "ASY", "IDP", "RET", "STA", "OTH"], d3.selectAll(".filterBtn").transition().duration(500).attr("opacity", 0)), T.update(S)
			}
			popSelected.length < 6 && d3.select("#selectall").style("display", "block"), R.update({
				data: c()
			})
		}).on("mouseover", function () {
			d3.select("#" + this.id + "hover path").style("stroke", "#C0C0C0").style("stroke-width", 1), d3.select("#" + this.id + "group path:first-child").style("stroke-width", 2), d3.select("#poptooltip").transition().delay(200).duration(1100).attr("transform", "translate(0,-2)"), d3.select("#" + this.id.toLowerCase() + "_tooltip").transition().delay(200).duration(400).attr("opacity", 1)
		}).on("mouseout", function () {
			d3.select("#" + this.id + "hover path").style("stroke", "#E0E0E0"), d3.select("#" + this.id + "group path:first-child").style("stroke-width", 1), d3.select("#" + this.id.toLowerCase() + "_tooltip").transition().delay(0).duration(400).attr("opacity", 0), d3.select("#poptooltip").transition().delay(1).duration(1).attr("transform", "translate(0,140)")
		});
		var W = o.append("filter").attr("id", "drop-shadow").attr("height", "130%");
		W.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 5).attr("result", "blur"), W.append("feOffset").attr("in", "blur").attr("dx", 0).attr("dy", 0).attr("result", "offsetBlur");
		var X = W.append("feMerge");
		X.append("feMergeNode").attr("in", "offsetBlur"), X.append("feMergeNode").attr("in", "SourceGraphic");
		var Y = "http://bit.ly/1Pp7NTw";
		d3.selectAll("#socialmedia > g").style("cursor", "pointer").on("mouseover", function () {
			d3.select(this).select("g:first-child path").style("fill", "#414141")
		}).on("mouseout", function () {
			d3.select(this).select("g:first-child path").style("fill", "rgb(150, 150, 150)")
		}), d3.select("#socialmedia #facebook").on("click", function () {
			window.open("https://www.facebook.com/dialog/feed?app_id=694165360698061&link=http%3A%2F%2Fpopstats.unhcr.org&picture=http%3A%2F%2Fpopstats.unhcr.org%2Fdataviz%2Fimages%2Fthumbnail.jpg&name=UNHCR%20Statistics%20-%20The%20World%20in%20Numbers&caption=%20&description=Interactive%20data%20visualisation&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F", "_blank")
		}), d3.select("#socialmedia #twitter").on("click", function () {
			window.open("https://twitter.com/intent/tweet?url=" + Y + "&text=UNHCR%20Statistics%20-%20The%20World%20in%20Numbers%20@Refugees%20%23dataviz", "_blank")
		}), d3.select("#socialmedia #pinterest").on("click", function () {
			window.open("http://pinterest.com/pin/create/button/?url=" + Y + "&media=http://popstats.unhcr.org/dataviz/images/thumbnail.jpg", "_blank")
		}), d3.select("#socialmedia #googleplus").on("click", function () {
			window.open("https://plus.google.com/share?&hl=en&url=" + Y, "_blank")
		}), d3.select("#socialmedia #embed").on("click", function () {
			d3.select("#embedframe").attr("transform", "translate(0,200)")
		}), d3.select("#embedclose").style("cursor", "pointer").on("click", function () {
			d3.select("#embedframe").attr("transform", "translate(0,-600)")
		}), d3.select("#embedframe").attr("transform", "translate(0,-600)"), $("#framePrev, #leftButton").click(function () {
			var a = viz.prevFrame(1e3);
			$("#lContent").scrollTop(0), m(a), $("#activeFrame").text(a)
		}), $("#frameNext, #rightButton").click(function () {
			var a = viz.nextFrame(1e3);
			$("#lContent").scrollTop(0), m(a), $("#activeFrame").text(a)
		}), $(".selectFrame").on("click", function () {
			var a = $(this).attr("id"),
				b = $(this).text();
			viz.gotoFrame(a, 1e3), $("#selectFrame .textlabel").text(b), $("#activeFrame").text(a)
		}), viz.maxFrames(5), viz.gotoFrame(1, 1), $(document).ready(function () {
			$("#loader").hide();
			var a = (new Date).getFullYear();
			d3.select("#copyrightYear text").text(a), $(window).trigger("resize")
		})
	});