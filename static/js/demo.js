// var margin = {top: 20, right: 20, bottom: 20, left: 20},
//     padding = {top: 60, right: 60, bottom: 60, left: 60},
//     outerWidth = 960,
//     outerHeight = 500,
//     innerWidth = outerWidth - margin.left - margin.right,
//     innerHeight = outerHeight - margin.top - margin.bottom,
//     width = innerWidth - padding.left - padding.right,
//     height = innerHeight - padding.top - padding.bottom;


// var svg = d3.select("#temp").append("svg")
//     .attr("width", outerWidth)
//     .attr("height", outerHeight)

// svg.append("path")
//     .attr("id", "wavy") //Unique id of the path
//     .attr("d", "M 10,90 Q 100,15 200,70 Q 340,140 400,30") //SVG path
//     .style("fill", "none")
//     .style("stroke", "#AAAAAA");

// //Create an SVG text element and append a textPath element
// svg.append("text")
//    .append("textPath") //append a textPath to the text element
//     .attr("xlink:href", "#wavy") //place the ID of the path here
//     .style("text-anchor","middle") //place the text halfway on the arc
//     .attr("startOffset", "50%")
//     .text("Yay, my text is on a wavy path");