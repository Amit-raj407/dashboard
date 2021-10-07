var xValues =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
new Chart("myChart_1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: "2019", 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478, 2500, 2400],
      borderColor: "red",
      fill: false
    }, {
      label: "2020", 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000, 6500, 6300],
      borderColor: "green",
      fill: false
    }, { 
      label: "2021",
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100, 300, 700],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: true}
  }
});


///////////////////////////////////////////////////////////////

var xValues = ["Coding", "Documentation", "Self-Learning", "Meetings", "Extra-Curricular"];
var yValues = [2, 1, 2, 3, 1];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];


new Chart("myChart_2", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    
  }
});



///////////////////////////////////////////////////////////////

var xValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var yValues = [6, 7, 8, 5, 9];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart_3", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: "Weekly Working hours"
    },
    responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
  }
});

//////////////////////////////////////////////////////////////////////


var xValues = ["Maintenance", "Deployment", "Testing", "Documentation", "Coding"];
var yValues = [3, 1, 2, 4, 3];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];


new Chart("myChart_4", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    
  }
});
