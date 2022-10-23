let graph = () => { 
let dataset = allAnswers

const w = 500;
const h = 200;

const svg = d3.select("#graphic")
              .append("svg")
              .attr("width", w)
              .attr("height", h);
console.log(svg)
svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 40 * d)
   .attr("width", 25)
   .attr("height", (d, i) => d * 40)
   .attr("fill", "navy");

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text((d) => d)
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - (3 * d) - 3)
}