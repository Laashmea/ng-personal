import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  constructor(){}

  ngOnInit() {
  }

}

// var pieData = {
//   labels: [FINANCE, COMPSCI],
//   datasets: [{
//      data: [50, 50],
//      value: ["test1", "test2"],
//      backgroundColor:["#ffaa00", "#ff00cc"]
//   }]};


//   var pieOptions = {
  //    segmentShowStroke : true,
  //    animateScale : true,
  //    responsiveAnimationDuration: 500,
  //    title: {
  //       display: true,
  //       text: "Computing and Financial Management",
  //       fontSize: 12,
  //       fontFamily: "'Open Sans','sans serif'",
  //       fontColor: 'white'
  //    },
  //    labels: {
  //       fontSize: 10,
  //       fontFamily: "'Open Sans','sans serif'"
  //    },
  //    legend: {
  //       display: true,
  //       reverse: true,
  //       onClick: null,
  //       labels:{fontColor:'white'}
  //    },
  //    tooltips: {
  //     enabled: false
  //    },
  //    animation: {
  //       duration: 2000,
  //       easing: "easeOutBounce",
  //       animateRotate: true,
  //       animateScale: true
  //    },
  //    tooltops:
  //    {
  //       enabled: false
  //    }
  // };

  // var pchart = $("#programChart");
  // // var pchart = document.getElementById("programChart").getContext('2d');
  // var program = new Chart(pchart,
  //       {
  //          type: 'doughnut',
  //          data: pieData,
  //          options: pieOptions
  //       });


  // // var program = null;

  

  // document.getElementById('programChart').onclick = function(evt) {
  //    if (program === null) { return; }

  //    var activePoints = program.getElementsAtEvent(evt);
  //    //alert(activeElement);
  //    //var activePoint = activeElement[0];

  //    if(activePoints.length > 0)
  //    {
  //       //get the internal index of slice in pie chart
  //       var clickedElementindex = activePoints[0]["_index"];

  //       //get specific label by index 
  //       var pieLabel = program.data.labels[clickedElementindex];

  //       var finPElement = $("#aboutFinance");
  //       var csPElement = $("#aboutComsci");
  //       var genPElement = $("#aboutGeneral");
  //       var finType = finPElement.css('display');
  //       var csType = csPElement.css('display');
  //       var genType = genPElement.css('display');

  //       if (pieLabel === FINANCE && finType === 'none') {
  //          csPElement.hide(500);
  //          finPElement.show(500);

  //       }
  //       else if (pieLabel === FINANCE) {
  //          csPElement.hide(500);
  //          finPElement.hide(500);
  //       }
  //       else if (pieLabel === COMPSCI && csType === 'none') {
  //          finPElement.hide(500);
  //          csPElement.show(500);
  //       }
  //       else if (pieLabel === COMPSCI) {
  //          finPElement.hide(500);
  //          csPElement.hide(500);
  //       }
  //       else {
  //          alert("ERROR: " + pieLabel);
  //       }
  //    }
  // };

  // function background_show_animation() {
  //    var aboutDiv = $("#about");
  //    var mainNav = $("#main-nav");
  //    pchart = document.getElementById("programChart").getContext("2d");

  //    if ((document.body.scrollTop >= ($(".jumbotron").height())/4) && program === null) {
  //       // aboutDiv.addClass('linen');
  //       aboutDiv.animate({ opacity: 1 }, 1000);

  //       // program = new Chart(pchart,
  //       // {
  //       //    type: 'doughnut',
  //       //    data: pieData,
  //       //    options: pieOptions
  //       // });
  //       // mainNav.animate({backgroundColor: 'rgba(115,111,110,0.9)'}, 300);
  //       $( ".trans-gray-navbar" ).switchClass( "trans-gray-navbar", "gray-navbar", 1000 );
  //       window.onscroll = function () { background_hide_animation() };
  //    }
  // }

  // function background_hide_animation() {
  //    var aboutDiv = $("#about");
  //    var mainNav = $("#main-nav");
  //    if (document.body.scrollTop === 0) {
  //       aboutDiv.removeClass('linen');
  //       aboutDiv.animate({ opacity: 0 }, 300);
  //       // document.getElementById('main-nav').eq(1).animate( {backgroundColor: 'rgba(115,111,110, 0.7)'}, 300); 
  //       //document.getElementById('main-nav').style.animate( {backgroundColor: 'rgba(115,111,110, 0.7)'}, 300);
  //      // window.onscroll = function () { background_hide_animation() };
  //      //document.body.style.backgroundColor
  //       // mainNav.animate({backgroundColor: 'rgba(115,111,110,0)'}, 300);
  //       $( ".gray-navbar" ).switchClass( "gray-navbar", "trans-gray-navbar", 1000 );
  //       program = null;
  //       window.onscroll = function () { background_show_animation() };
  //    }
  // }
