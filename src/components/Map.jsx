import React from "react";

function Map() {
  google.load("visualization", "1", { packages: ["geochart"] });
  google.setOnLoadCallback(drawVisualization);

  function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
      ["State Code", "State", "Population"],
      ["IN-UT", "Uttarakhand", 10116752],
    ]);

    var opts = {
      region: "IN",
      displayMode: "regions",
      resolution: "provinces",
      width: 640,
      height: 480,
    };
    var geochart = new google.visualization.GeoChart(
      document.getElementById("visualization")
    );
    geochart.draw(data, opts);
  }

  return (
    <div id="visualization" style="margin: 1em">
    </div>
  );
}

export default Map;
