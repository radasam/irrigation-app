(this["webpackJsonpwater-front-end"]=this["webpackJsonpwater-front-end"]||[]).push([[0],{42:function(e,t,a){},55:function(e,t,a){e.exports=a(82)},60:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),c=a.n(r),l=(a(60),a(61),a(15)),s=a(14),u=a(24),i=a(22),m=a(25),d=(a(42),a(40)),p=a(39),h=a(8),g=a.n(h),E=a(28),f=a(7),k=a(6),v=a(35),b=a(54),y=a(18),w=a(27),S=(o.a.Component,function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={showModal:!1,postPass:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggleModal",value:function(){this.state.showModal?this.setState({showModal:!1}):this.setState({showModal:!0})}},{key:"startpump",value:function(e){var t="https://58263d28.ngrok.io";localStorage.ngrok&&(t=localStorage.ngrok),console.log("starting pump");var a={pump:e,pass:document.getElementById("postpass").value};g.a.post(t+"/start",a,{crossdomain:!0}).then((function(e){console.log(e)}),(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.drawsensorcharts(),this.drawpumpcharts(),this.fetchstatus()}},{key:"burst",value:function(e,t){var a="https://58263d28.ngrok.io";localStorage.ngrok&&(a=localStorage.ngrok),console.log("starting pump");var n={pump:e,duration:t,pass:document.getElementById("postpass").value};g.a.post(a+"/burst",n,{crossdomain:!0}).then((function(e){console.log(e)}),(function(e){console.log(e)}))}},{key:"stoppump",value:function(e){var t="https://58263d28.ngrok.io";localStorage.ngrok&&(t=localStorage.ngrok),console.log("stopping pump");var a={pump:e,pass:document.getElementById("postpass").value};g.a.post(t+"/stop",a,{crossdomain:!0}).then((function(e){console.log(e)}),(function(e){console.log(e)}))}},{key:"readsensor",value:function(e){var t="https://58263d28.ngrok.io";localStorage.ngrok&&(t=localStorage.ngrok);var a={sensor:e,pass:document.getElementById("postpass").value};g.a.post(t+"/sensor",a,{crossdomain:!0}).then((function(e){console.log(e)}),(function(e){console.log(e)}))}},{key:"drawsensorcharts",value:function(){var e=this,t="https://58263d28.ngrok.io";localStorage.ngrok&&(t=localStorage.ngrok),g.a.post(t+"/fetchsensor",{sensorid:1},{crossdomain:!0}).then((function(t){var a=[["Time","Reading"]];t.data.records.forEach((function(e){return a.push([new Date(e.datetime),e.reading])})),e.drawchartsensor(a,1)}),(function(e){console.log(e)})).then(g.a.post(t+"/fetchsensor",{sensorid:2},{crossdomain:!0}).then((function(t){var a=[["Time","Reading"]];t.data.records.forEach((function(e){return a.push([new Date(e.datetime),e.reading])})),e.drawchartsensor(a,2)}),(function(e){console.log(e)})).then(g.a.post(t+"/fetchsensor",{sensorid:3},{crossdomain:!0}).then((function(t){var a=[["Time","Reading"]];t.data.records.forEach((function(e){return a.push([new Date(e.datetime),e.reading])})),e.drawchartsensor(a,3)}),(function(e){console.log(e)})).then(g.a.post(t+"/fetchsensor",{sensorid:4},{crossdomain:!0}).then((function(t){var a=[["Time","Reading"]];t.data.records.forEach((function(e){return a.push([new Date(e.datetime),e.reading])})),e.drawchartsensor(a,4)}),(function(e){console.log(e)})))))}},{key:"drawchartsensor",value:function(e,t){E.a.load((function(){var a=E.a.api.visualization.arrayToDataTable(e),n={title:"Pump "+t+" Moisture Reading",vAxis:{viewWindow:{max:15e3,min:8e3}}};new E.a.api.visualization.LineChart(document.getElementById("sensor"+t+"chart")).draw(a,n)}))}},{key:"drawpumpcharts",value:function(){var e=this,t="https://58263d28.ngrok.io";localStorage.ngrok&&(t=localStorage.ngrok),g.a.post(t+"/fetchpump",{pumpid:1},{crossdomain:!0}).then((function(t){var a=[["Time","ON/OFF"]];t.data.records.forEach((function(e){return a.push([new Date(e.datetime),e.value])})),e.drawchartpump(a,1),console.log(t.data.records)}),(function(e){console.log(e)})).then(g.a.post(t+"/fetchpump",{pumpid:2},{crossdomain:!0}).then((function(t){var a=[["Time","ON/OFF"]];t.data.records.forEach((function(e){return a.push([new Date(e.datetime),e.value])})),e.drawchartpump(a,2)}),(function(e){console.log(e)})).then(g.a.post(t+"/fetchpump",{pumpid:3},{crossdomain:!0}).then((function(t){var a=[["Time","ON/OFF"]];t.data.records.forEach((function(e){return a.push([new Date(e.datetime),e.value])})),e.drawchartpump(a,3)}),(function(e){console.log(e)})).then(g.a.post(t+"/fetchpump",{pumpid:4},{crossdomain:!0}).then((function(t){var a=[["Time","ON/OFF"]];t.data.records.forEach((function(e){return a.push([new Date(e.datetime),e.value])})),e.drawchartpump(a,4)}),(function(e){console.log(e)})))))}},{key:"drawchartpump",value:function(e,t){E.a.load((function(){var a=E.a.api.visualization.arrayToDataTable(e),n={title:"Pump "+t+" Activity",vAxis:{viewWindow:{max:2,min:-1}}};new E.a.api.visualization.LineChart(document.getElementById("pump"+t+"chart")).draw(a,n)}))}},{key:"fetchstatus",value:function(){var e="https://58263d28.ngrok.io";localStorage.ngrok&&(e=localStorage.ngrok),g.a.post(e+"/fetchstatus",{crossdomain:!0}).then((function(e){document.getElementById("checkbox-1").checked=e.data.records[0].status,document.getElementById("checkbox-2").checked=e.data.records[1].status,document.getElementById("checkbox-3").checked=e.data.records[2].status,document.getElementById("checkbox-4").checked=e.data.records[3].status}))}},{key:"updatestatus",value:function(e){var t="https://58263d28.ngrok.io";localStorage.ngrok&&(t=localStorage.ngrok);var a={pumpid:e,status:document.getElementById("checkbox-"+e).checked};g.a.post(t+"/updatestatus",a,{crossdomain:!0}).then((function(e){console.log(e.data)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"settings"},o.a.createElement(k.a,null,o.a.createElement(k.a.Group,{controlId:"postpass"},o.a.createElement(k.a.Label,null,"Post Password"),o.a.createElement(k.a.Control,{type:"text"})))),o.a.createElement("br",null),o.a.createElement("div",{className:"pumprow"},o.a.createElement("span",null,o.a.createElement("div",{className:"heading"},"Pump 1"),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{flex:"50%"},key:"default-checkbox",className:"mb-3",onClick:function(t){return e.updatestatus(1)}},o.a.createElement(k.a.Check,{type:"checkbox",id:"checkbox-1",label:"Auto Water"})),o.a.createElement("div",{style:{flex:"50%"}},o.a.createElement(k.a,null,o.a.createElement(k.a.Group,{as:b.a,controlId:"threshold1"},o.a.createElement(k.a.Label,{Column:!0,sm:2},"Water Threshold"),o.a.createElement(v.a,{sm:10},o.a.createElement(k.a.Control,{type:"number"}))))))),o.a.createElement("br",null),o.a.createElement("div",{id:"sensor1chart"}),o.a.createElement("div",{id:"pump1chart"}),o.a.createElement("br",null),o.a.createElement("div",{className:"buttonrow"},o.a.createElement(f.a,{onClick:function(t){return e.startpump(1)}},"Start"),o.a.createElement(f.a,{onClick:function(t){return e.burst(1,1)}},"Run 1 Seconds"),o.a.createElement(f.a,{onClick:function(t){return e.stoppump(1)}},"Stop"),o.a.createElement(f.a,{onClick:function(t){return e.readsensor(1)}},"Sensor"))),o.a.createElement("br",null),o.a.createElement("div",{className:"pumprow"},o.a.createElement("span",null,o.a.createElement("div",{className:"heading"},"Pump 2"),o.a.createElement("div",{key:"default-checkbox",className:"mb-3",onClick:function(t){return e.updatestatus(2)}},o.a.createElement(k.a.Check,{type:"checkbox",id:"checkbox-2",label:"Auto Water"}))),o.a.createElement("br",null),o.a.createElement("div",{id:"sensor2chart"}),o.a.createElement("div",{id:"pump2chart"}),o.a.createElement("br",null),o.a.createElement("div",{className:"buttonrow"},o.a.createElement(f.a,{onClick:function(t){return e.startpump(2)}},"Start"),o.a.createElement(f.a,{onClick:function(t){return e.burst(2,1)}},"Run 1 Seconds"),o.a.createElement(f.a,{onClick:function(t){return e.stoppump(2)}},"Stop"),o.a.createElement(f.a,{onClick:function(t){return e.readsensor(2)}},"Sensor"))),o.a.createElement("br",null),o.a.createElement("div",{className:"pumprow"},o.a.createElement("span",null,o.a.createElement("div",{className:"heading"},"Pump 3"),o.a.createElement("div",{key:"default-checkbox",className:"mb-3",onClick:function(t){return e.updatestatus(3)}},o.a.createElement(k.a.Check,{type:"checkbox",id:"checkbox-3",label:"Auto Water"}))),o.a.createElement("br",null),o.a.createElement("div",{id:"sensor3chart"}),o.a.createElement("div",{id:"pump3chart"}),o.a.createElement("br",null),o.a.createElement("div",{className:"buttonrow"},o.a.createElement(f.a,{onClick:function(t){return e.startpump(3)}},"Start"),o.a.createElement(f.a,{onClick:function(t){return e.burst(3,1)}},"Run 1 Seconds"),o.a.createElement(f.a,{onClick:function(t){return e.stoppump(3)}},"Stop"),o.a.createElement(f.a,{onClick:function(t){return e.readsensor(3)}},"Sensor"))),o.a.createElement("br",null),o.a.createElement("div",{className:"pumprow"},o.a.createElement("span",null,o.a.createElement("div",{className:"heading"},"Pump 4"),o.a.createElement("div",{key:"default-checkbox",className:"mb-3",onClick:function(t){return e.updatestatus(4)}},o.a.createElement(k.a.Check,{type:"checkbox",id:"checkbox-4",label:"Auto Water"}))),o.a.createElement("br",null),o.a.createElement("div",{id:"sensor4chart"}),o.a.createElement("div",{id:"pump4chart"}),o.a.createElement("br",null),o.a.createElement("div",{className:"buttonrow"},o.a.createElement(f.a,{onClick:function(t){return e.startpump(4)}},"Start"),o.a.createElement(f.a,{onClick:function(t){return e.burst(4,1)}},"Run 1 Seconds"),o.a.createElement(f.a,{onClick:function(t){return e.stoppump(4)}},"Stop"),o.a.createElement(f.a,{onClick:function(t){return e.readsensor(4)}},"Sensor"))))}}]),t}(o.a.Component)),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).updateNgrok=a.updateNgrok.bind(Object(y.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updateNgrok",value:function(){"orange1234"==document.getElementById("ngroksecret").value&&(localStorage.ngrok=document.getElementById("ngrokovrd").value)}},{key:"render",value:function(){return o.a.createElement("div",{className:"settings"},o.a.createElement(k.a,null,o.a.createElement(k.a.Group,{controlId:"ngroksecret"},o.a.createElement(k.a.Label,null,"Ngrok Secret"),o.a.createElement(k.a.Control,{type:"text"}))),o.a.createElement(k.a,null,o.a.createElement(k.a.Group,{controlId:"ngrokovrd"},o.a.createElement(k.a.Label,null,"Ngrok Override"),o.a.createElement(k.a.Control,{type:"text"}))),o.a.createElement(f.a,{onClick:this.updateNgrok},"Save"))}}]),t}(o.a.Component),N=function(e){function t(e){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"gotoMainPage",value:function(){c.a.render(o.a.createElement(S,null),document.getElementById("mainbody"))}},{key:"gotoSettings",value:function(){c.a.render(o.a.createElement(C,null),document.getElementById("mainbody"))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,{bg:"light"},o.a.createElement(d.a.Brand,{onClick:this.gotoMainPage},"Home"),o.a.createElement(p.a,{className:"mr-auto"},o.a.createElement(p.a.Link,{onClick:this.gotoSettings},"Settings"))),o.a.createElement("br",null),o.a.createElement("div",{id:"mainbody"}))}}]),t}(o.a.Component);c.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.5df905bb.chunk.js.map