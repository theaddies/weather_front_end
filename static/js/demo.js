var margin = {top: 20, right: 20, bottom: 20, left: 20},
    padding = {top: 60, right: 60, bottom: 60, left: 60},
    outerWidth = 960,
    outerHeight = 500,
    innerWidth = outerWidth - margin.left - margin.right,
    innerHeight = outerHeight - margin.top - margin.bottom,
    width = innerWidth - padding.left - padding.right,
    height = innerHeight - padding.top - padding.bottom;


var svg = d3.select(".nothing").append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var pi = Math.PI;
    
    var arc = d3.svg.arc()
        .innerRadius(50)
        .outerRadius(70)
        .startAngle(45 * (pi/180)) //converting from degs to radians
        .endAngle(3) //just radians
        
    svg.append("path")
        .attr("d", arc);