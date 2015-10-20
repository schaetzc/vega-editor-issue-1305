var VL_SPECS = {
  'Basic': [
    {
      "name": "bar",
      "desc": "A simple bar chart with embedded data."
    },
    {"name": "agg_bar"},
    {"name": "grouped_bar","desc": "Grouped bar chart."},
    {
      "name": "scatter",
      "desc": "Horse power and miles per gallon of cars."
    },
    {"name": "binned_scatter"},
    {
      "name": "horsepower",
      "desc": "Line chart of horsepower over time"
    },
    {"name": "histogram"},
    {
      "name": "stacked_histogram",
      "desc": "Simple histogram with bars broken down by the number of cylinders. Also has a legend."
    },
    {"name": "area"},
    {"name": "stacked_area"},
    {"name": "stacked_bar"},
    {"name": "1d_bar"}
  ],
  'Demos': [
    {
      "name": "barley",
      "desc": "Classic Barley Example. Trellis Plot, sorted by mean yield."
    }
  ],
  'Other': [
    {
      "name": "filtered_bar",
      "desc": "A simple bar chart with embedded data and uses a filter and formulas."
    },
    {
      "name": "movie_ratings",
      "desc": "Scatter plot with ordinal on top"
    },
    {"name": "trellis_area"},
    {"name": "trellis_stacked_bar"},
    {"name": "trellis_scatter"},
    {
      "name": "heatmap",
      "desc": "Text Heatmap with overencoded data."
    }
  ]
};

var VG_SPECS = {
  'Static': [
    { "name": "arc" },
    { "name": "area" },
    { "name": "bar" },
    {
      "name": "barley",
      "desc": "Based on the <a href='http://www.jstor.org/pss/1390777'>Trellis Display</a> by Becker et al."
    },
    { "name": "choropleth" },
    {
      "name": "driving",
      "desc": "Based on <a href='http://www.nytimes.com/imagepages/2010/05/02/business/02metrics.html'>Driving Shifts Into Reverse</a> by Hannah Fairfield. <em>The New York Times</em> (May 2, 2010)."
    },
    { "name": "error" },
    { "name": "force" },
    { "name": "grouped_bar" },
    { "name": "heatmap" },
    { "name": "image" },
    { "name": "jobs" },
    { "name": "lifelines" },
    { "name": "map" },
    { "name": "parallel_coords" },
    { "name": "playfair" },
    { "name": "population" },
    { "name": "treemap" },
    { "name": "scatter_matrix" },
    { "name": "stacked_area" },
    { "name": "stacked_bar" },
    { "name": "stocks" },
    { "name": "weather" },
    { "name": "wordcloud" }
  ],
  'Interactive': [
    {
      "name": "airports",
      "desc": "Based on <a href='https://mbostock.github.io/d3/talk/20111116/airports.html'>U.S. Airports, 2008</a> by Mike Bostock."
    },
    { "name": "brush" },
    {
      "name": "budget_forecasts",
      "desc": "Based on <a href='http://www.nytimes.com/interactive/2010/02/02/us/politics/20100201-budget-porcupine-graphic.html'>Budget Forecasts, Compared With Reality</a> by Amanda Cox. <em>The New York Times</em> (February 2, 2010)."
    },
    {
      "name": "crossfilter",
      "desc": "Based on <a href='http://square.github.io/crossfilter/'>Crossfilter.js</a> by Mike Bostock. <em>Square Inc</em>."
    },
    {
      "name": "dimpvis",
      "desc": "Based on <a href='http://vialab.science.uoit.ca/portfolio/dimpvis'>DimpVis</a> by Brittany Kondo and Christopher Collins. <em>University of Ontario Institute of Technology</em> (2014)."
    },
    { "name": "horizon",
      "desc": "<a href='http://idl.cs.washington.edu/papers/horizon/'>Horizon graph</a> example. Click to change the number of layers."
    },
    { "name": "index_chart" },
    {
      "name": "force_drag",
      "desc": "Drag nodes to reposition them. Double-click nodes to fix them in place."
    },
    { "name": "linking" },
    {
      "name": "overview+detail",
      "desc": "Based on <a href='http://bl.ocks.org/mbostock/1667367'>Focus+Context with Brushing</a> by Mike Bostock."
    },
    { "name": "panzoom_points" },
    { "name": "reorder_matrix" },
    { "name": "shiftclick_select" },
    { "name": "tooltip" }
  ],
  'Parameterized': [
    {
      "name": "airports-params",
      "desc": "Uses <a href='http://github.com/vega/vega-embed'>vega-embed</a> to parameterize the visualization."
    },
    {
      "name": "force-params",
      "desc": "Uses <a href='http://github.com/vega/vega-embed'>vega-embed</a> to parameterize the visualization."
    },
    {
      "name": "jobs-params",
      "desc": "Uses <a href='http://github.com/vega/vega-embed'>vega-embed</a> to parameterize the visualization."
    },
    {
      "name": "map-params",
      "desc": "Uses <a href='http://github.com/vega/vega-embed'>vega-embed</a> to parameterize the visualization."
    }
  ]
};
