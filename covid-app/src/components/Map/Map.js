import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow.js";
import am4themes_animated from '@amcharts/amcharts4/themes/animated.js'

import { useHistory } from 'react-router-dom'
import './MapCss.css'

function Map (props){

// Setting useHistory to a variable history. Use to push to component state-page
const history = useHistory()

useEffect(()=>{
  
// Themes begin
am4core.useTheme(am4themes_animated);


// Create map instance
let chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_usaLow;

// Set projection
chart.projection = new am4maps.projections.AlbersUsa();

// Create map polygon series
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  // min: chart.colors.getIndex(1).brighten(1),
  // max: chart.colors.getIndex(1).brighten(-0.3)
  min: chart.colors.getIndex(8).brighten(3),
  max: chart.colors.getIndex(8).brighten(-0.3)
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state
polygonSeries.data = props.currentstateInfNums

// Set up heat legend
let heatLegend = chart.createChild(am4maps.HeatLegend);
heatLegend.id = "heatLegend";
heatLegend.series = polygonSeries;
heatLegend.align = "right";
heatLegend.valign = "bottom";
heatLegend.width = am4core.percent(35);
heatLegend.marginRight = am4core.percent(4);
heatLegend.background.fill = am4core.color("#000");
heatLegend.background.fillOpacity = 0.05;
heatLegend.padding(5, 5, 5, 5);

// Set up custom heat map legend labels using axis ranges
let minRange = heatLegend.valueAxis.axisRanges.create();
minRange.label.horizontalCenter = "left";

let maxRange = heatLegend.valueAxis.axisRanges.create();
maxRange.label.horizontalCenter = "right";

// Blank out internal heat legend value axis labels
heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
  return "";
});

// Update heat legend value labels
polygonSeries.events.on("datavalidated", function(ev) {
  let heatLegend = ev.target.map.getKey("heatLegend");
  let min = heatLegend.series.dataItem.values.value.low;
  let minRange = heatLegend.valueAxis.axisRanges.getIndex(0);
  minRange.value = min;
  minRange.label.text = "" + heatLegend.numberFormatter.format(min);

  let max = heatLegend.series.dataItem.values.value.high;
  let maxRange = heatLegend.valueAxis.axisRanges.getIndex(1);
  maxRange.value = max;
  maxRange.label.text = "" + heatLegend.numberFormatter.format(max);
});

// Configure series tooltip

//Tooltip Choices
// "deaths"
// "hospitalizedCurrently"
// "hospitalizedCumulative"
// "totalTests"
// "positiveIncrease"
// "deathIncrease"
// "hospitalizedIncrease"
// "totalTestResultsIncrease"
let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}\n\nCases: {value} +{positiveIncrease}\nDeaths: {deaths} +{deathIncrease}\nHospitalized: {hospitalizedCurrently} +{hospitalizedIncrease}\nTests: {totalTests} +{totalTestResultsIncrease}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#3c5bdc");

// Function that fires when a State is clicked on
const onStateClick=(sName)=>{
  props.setSName(sName)
  history.push('/state-page')
  sessionStorage.setItem('stateName', sName);

  // Save data to sessionStorage
  let stateName = sessionStorage.getItem('stateName')
}

// Created clickable States
polygonTemplate.events.on("hit", function(ev){
  // Create function calls that will fire when a State is clicked
  onStateClick(ev.target.dataItem.dataContext.name)
})
},[props,history])



  return(
    <div id="chartdiv"></div>
  )
}

export default Map