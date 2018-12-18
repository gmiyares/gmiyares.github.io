//all unchanging parts of d3 setup (code folded)
// setting map dimensions/margins
var margin = { top: 10, left: 10, right: 10, bottom: 10},
    height = 670 - margin.top - margin.bottom,
    width = 1050 - margin.left - margin.right;

// setting up the background + margins
var svg = d3.select('body')
            .append("svg")
            .attr("height", height + margin.top + margin.bottom)
            .attr("width", width + margin.left + margin.right)
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//setting up the map
var g = svg.append('g');

var projection = d3.geoMercator()
                   .scale(390)
                   .rotate([0, 0])
                   .center([15, 27])
                   .translate([width/2, height/2]);

// This moves the black squares over the black dots,
// they were offset before
var squareProjection = d3.geoMercator()
                   .scale(390)
                   .rotate([0, 0])
                   .center([15, 27])
                   .translate([(width/2) - 1.5, (height/2) - 1.5]);

var geoPath = d3.geoPath()
                .projection(projection)
                .pointRadius(2.5);

g.selectAll('path')
  .data(worldmap_json.features)
  .enter()
  .append('path')
  //fill color for countries
  .attr('fill', '#cee4d4')
  .attr('stroke', '#ffffff')
  .attr('stroke-width', .5)
  .attr('d', geoPath);

// tooltip
var originTooltip = d3.select("body").append("div")
                      .attr("class", "tooltip")
                      .style('opacity', 0)
                      .style('position', 'absolute')
                      .style('padding', '0 10px');

var endTooltip = d3.select("body").append("div")
                      .attr("class", "tooltip")
                      .style('opacity', 0)
                      .style('position', 'absolute')
                      .style('padding', '0 10px');

// data93 array (code folded)
var data93 = [
  {
    origCountry:"Yugoslavia",dead:"1",origLat:"44.816667",origLong:"20.45",endCity:"unknown",endCountry:"German-Austrian-Czech border",endLat:"48.771516",endLong:"13.839493",cause:"an unknown cause"},{origCountry:"Iran",dead:"1",origLat:"32.9407495",origLong:"52.9471344",endCity:"Tehran",endCountry:"Iran",endLat:"35.700618",endLong:"51.401379",cause:"an unknown cause"},{origCountry:"Mozambique",dead:"1",origLat:"-19.302233",origLong:"34.9144977",endCity:"Dresden",endCountry:"Germany",endLat:"51.0493286",endLong:"13.7381437",cause:"a fire"},{origCountry:"unknown",dead:"2",origLat:"0",origLong:"0",endCity:"Biberach",endCountry:"Germany",endLat:"48.6070436",endLong:"8.2104482",cause:"a jump"},{origCountry:"Turkey",dead:"1",origLat:"38.9597594",origLong:"34.9249653",endCity:"Kaltenkirchen",endCountry:"Germany",endLat:"53.8371714",endLong:"9.9614889",cause:"a fire"},{origCountry:"Sudan",dead:"1",origLat:"14.5844444",origLong:"29.4917691",endCity:"Herne",endCountry:"Germany",endLat:"51.5380394",endLong:"7.219985",cause:"suicide"},{origCountry:"Lebanon",dead:"1",origLat:"33.8750629",origLong:"35.843409",endCity:"Emstek",endCountry:"Germany",endLat:"52.8339613",endLong:"8.1549499",cause:"a fire"},{origCountry:"Romania",dead:"2",origLat:"45.9852129",origLong:"24.6859225",endCity:"Baden Wurttemberg",endCountry:"Germany",endLat:"48.6296972",endLong:"9.1949534",cause:"a fire"},{origCountry:"Kenya",dead:"1",origLat:"-0.8999695",origLong:"11.6899699",endCity:"Munich",endCountry:"Germany",endLat:"48.1371079",endLong:"11.5753822",cause:"hit by a vehicle"},{origCountry:"Gabon",dead:"1",origLat:"1.4419683",origLong:"38.4313975",endCity:"Bois d'Arcy",endCountry:"France",endLat:"48.799856",endLong:"2.023607",cause:"medical neglect"},{origCountry:"Eritrea",dead:"3",origLat:"15.9500319",origLong:"37.9999668",endCity:"Hesse",endCountry:"Germany",endLat:"50.6118537",endLong:"9.1909725",cause:"a fire"},{origCountry:"Jamaica",dead:"1",origLat:"18.1850507",origLong:"-77.3947693",endCity:"London",endCountry:"England",endLat:"51.5073219",endLong:"-0.1276474",cause:"a beating"},{origCountry:"Liberia",dead:"1",origLat:"5.7499721",origLong:"-9.3658524",endCity:"Feldkirch",endCountry:"Austria",endLat:"47.2375671",endLong:"9.5981724",cause:"hypothermia"},{origCountry:"Yugoslavia",dead:"1",origLat:"44.816667",origLong:"20.45",endCity:"Bad Waldsee",endCountry:"Germany",endLat:"47.9209556",endLong:"9.7542772",cause:"asphyxiation"},{origCountry:"Albania",dead:"11",origLat:"41.000028",origLong:"19.9999619",endCity:"the Strait of Otranto",endCountry:"Italy",endLat:"40.2406193",endLong:"18.9637757",cause:"drowning"},{origCountry:"Ethiopia",dead:"1",origLat:"10.2116702",origLong:"38.6521203",endCity:"Berlin",endCountry:"Germany",endLat:"52.5170365",endLong:"13.3888599",cause:"suicide"},{origCountry:"Angola",dead:"1",origLat:"-11.8775768",origLong:"17.5691241",endCity:"Paris",endCountry:"France",endLat:"48.8566101",endLong:"2.3514992",cause:"drowning"},{origCountry:"unknown",dead:"3",origLat:"0",origLong:"0",endCity:"the Oder River",endCountry:"Polish-German border",endLat:"52.338041",endLong:"14.563058",cause:"drowning"},{origCountry:"Macedonia",dead:"1",origLat:"41.6171214",origLong:"21.7168387",endCity:"Rhine.River",endCountry:"Austrian-Swiss border",endLat:"47.454965",endLong:"9.666184",cause:"drowning"},{origCountry:"Zaire",dead:"1",origLat:"-6.6925131",origLong:"13.5293029",endCity:"Paris",endCountry:"France",endLat:"48.8566101",endLong:"2.3514992",cause:"drowning"},{origCountry:"Romania",dead:"1",origLat:"45.9852129",origLong:"24.6859225",endCity:"Schwandorf",endCountry:"Germany",endLat:"49.3261854",endLong:"12.1092708",cause:"hypothermia"},{origCountry:"Albania",dead:"2",origLat:"41.000028",origLong:"19.9999619",endCity:"Balerna",endCountry:"Switzerland",endLat:"45.8491908",endLong:"9.0070811",cause:"hit by a vehicle"},{origCountry:"Albania",dead:"1",origLat:"33.7680065",origLong:"66.2385139",endCity:"Coldrerio",endCountry:"Switzerland",endLat:"45.8538378",endLong:"8.9871005",cause:"hit by a vehicle"},{origCountry:"Afghanistan",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"unknown",endCountry:"Turkey",endLat:"38.9597594",endLong:"34.9249653",cause:"a jump"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"unknown",endCountry:"Turkey",endLat:"38.9597594",endLong:"34.9249653",cause:"an unknown cause"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"unknown",endCountry:"Turkey",endLat:"38.9597594",endLong:"34.9249653",cause:"a shooting"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"Dulmen",endCountry:"Germany",endLat:"51.8283677",endLong:"7.2791406",cause:"a shooting"},{origCountry:"Romania",dead:"1",origLat:"45.9852129",origLong:"24.6859225",endCity:"Saxony-Anhalt",endCountry:"Germany",endLat:"51.908526",endLong:"11.4939134",cause:"a shooting"},{origCountry:"Zaire",dead:"1",origLat:"-6.6925131",origLong:"13.5293029",endCity:"Paris",endCountry:"France",endLat:"48.8566101",endLong:"2.3514992",cause:"a shooting"},{origCountry:"Poland",dead:"1",origLat:"52.0977181",origLong:"19.0258159",endCity:"Frankfurt",endCountry:"Germany",endLat:"50.1106444",endLong:"8.6820917",cause:"suffocation"},{origCountry:"Sri Lanka",dead:"5",origLat:"7.878",origLong:"80.70382459",endCity:"Vienna",endCountry:"Austria",endLat:"48.2083537",endLong:"16.3725042",cause:"suffocation"},{origCountry:"Turkey",dead:"1",origLat:"38.9597594",origLong:"34.9249653",endCity:"Dinslaken",endCountry:"Germany",endLat:"51.5623618",endLong:"6.7345106",cause:"suicide"},{origCountry:"Yugoslavia",dead:"1",origLat:"44.816667",origLong:"20.45",endCity:"Hellevoetsluis",endCountry:"Netherlands",endLat:"51.8433469",endLong:"4.121302772",cause:"suicide"},{origCountry:"Zaire",dead:"1",origLat:"-6.6925131",origLong:"13.5293029",endCity:"Harmondsworth",endCountry:"England",endLat:"51.4889317",endLong:"-0.4755435",cause:"suicide"},{origCountry:"Liberia",dead:"1",origLat:"5.7499721",origLong:"-9.3658524",endCity:"Regensburg",endCountry:"Germany",endLat:"49.0195333",endLong:"12.0974869",cause:"suicide"},{origCountry:"Angola",dead:"1",origLat:"-11.8775768",origLong:"17.5691241",endCity:"Trier",endCountry:"Germany",endLat:"49.7596208",endLong:"6.6441878",cause:"suicide"},{origCountry:"Senegal",dead:"1",origLat:"14.4750607",origLong:"-14.4529612",endCity:"EislIngen",endCountry:"Germany",endLat:"48.71357955",endLong:"9.731589402",cause:"suicide"},{origCountry:"Ethiopia",dead:"1",origLat:"10.2116702",origLong:"38.6521203",endCity:"Diedersdorf",endCountry:"Germany",endLat:"52.34634765",endLong:"13.36008071",cause:"suicide"},{origCountry:"Ghana",dead:"1",origLat:"8.0300284",origLong:"-1.0800271",endCity:"Munich",endCountry:"Germany",endLat:"48.1371079",endLong:"11.5753822",cause:"suicide"},{origCountry:"Palestine",dead:"1",origLat:"31.9522",origLong:"35.2332",endCity:"Berlin",endCountry:"Germany",endLat:"52.5170365",endLong:"13.3888599",cause:"suicide"},{origCountry:"Turkey",dead:"1",origLat:"38.9597594",origLong:"34.9249653",endCity:"Croyden",endCountry:"England",endLat:"50.8658648",endLong:"-4.269484",cause:"suicide"
  }
];

// data94 array (code folded)
var data94 = [
  {
    origCountry:"Kosovo",dead:"1",origLat:"42.5869578",origLong:"20.9021231",endCity:"Bad Endorf",endCountry:"Germany",endLat:"47.906411",endLong:"12.3013697",cause:"a shooting"},{origCountry:"Romania",dead:"1",origLat:"45.9852129",origLong:"24.6859225",endCity:"Niesky",endCountry:"Germany",endLat:"51.2930459",endLong:"14.8229926",cause:"hit by a vehicle"},{origCountry:"Nigeria",dead:"1",origLat:"9.6000359",origLong:"7.9999721",endCity:"London",endCountry:"England",endLat:"51.5073219",endLong:"-0.1276474",cause:"a fall"},{origCountry:"Nigeria",dead:"1",origLat:"9.6000359",origLong:"7.9999721",endCity:"Frankfurt",endCountry:"Germany",endLat:"50.1106444",endLong:"8.6820917",cause:"an unknown cause"},{origCountry:"Bosnia and Herzegovina",dead:"2",origLat:"44.3053476",origLong:"17.5961467",endCity:"Humboldt-Gremberg",endCountry:"Germany",endLat:"50.92560365",endLong:"7.007675868",cause:"a fire"},{origCountry:"Iraq",dead:"1",origLat:"33.0955793",origLong:"44.1749775",endCity:"Gotland Island",endCountry:"Sweden",endLat:"57.6783173",endLong:"18.63846359",cause:"an unknown cause"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Bochum",endCountry:"Germany",endLat:"51.4818111",endLong:"7.2196635",cause:"a fire"},{origCountry:"Kosovo",dead:"2",origLat:"42.5869578",origLong:"20.9021231",endCity:"Herford",endCountry:"Germany",endLat:"52.1152245",endLong:"8.6711118",cause:"a fire"},{origCountry:"Albania",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"Gieboldehausen",endCountry:"Germany",endLat:"51.61002",endLong:"10.2153775",cause:"a fire"},{origCountry:"Angola",dead:"1",origLat:"-11.8775768",origLong:"17.5691241",endCity:"Cierna nad Tisou",endCountry:"Slovakia",endLat:"48.4166409",endLong:"22.0887368",cause:"a jump"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"Dresden",endCountry:"Germany",endLat:"51.0493286",endLong:"13.7381437",cause:"suicide"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Gotland  ",endCountry:"Sweden",endLat:"57.6783173",endLong:"18.63846359",cause:"an unknown cause"},{origCountry:"Albania",dead:"2",origLat:"41.000028",origLong:"19.9999619",endCity:"Strait of Otranto",endCountry:"Italy",endLat:"40.2406193",endLong:"18.9637757",cause:"drowning"},{origCountry:"Rwanda",dead:"9",origLat:"-1.9646631",origLong:"30.0644358",endCity:"Pserimos",endCountry:"Greece",endLat:"36.9396047",endLong:"27.14008648",cause:"drowning"},{origCountry:"Albania",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"unknown",endCountry:"Adriatic Sea",endLat:"43.7021514",endLong:"14.6679465",cause:"drowning"},{origCountry:"unknown",dead:"7",origLat:"",origLong:"",endCity:"Ceuta",endCountry:"Spain",endLat:"35.888361",endLong:"-5.304138",cause:"drowning"},{origCountry:"unknown",dead:"4",origLat:"",origLong:"",endCity:"Danube River",endCountry:"Hungarian-Austrian border",endLat:"48.02185",endLong:"17.254422",cause:"drowning"},{origCountry:"Morocco",dead:"2",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Pantelleria",endCountry:"Italy ",endLat:"36.8279195",endLong:"11.9424297",cause:"drowning"},{origCountry:"Nepal",dead:"1",origLat:"28.1083929",origLong:"84.0917139",endCity:"Forst",endCountry:"Germany",endLat:"51.7438586",endLong:"14.6455395",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Görlitz",endCountry:"Germany",endLat:"51.1563185",endLong:"14.991018",cause:"drowning"},{origCountry:"Sri Lanka",dead:"1",origLat:"7.878",origLong:"80.70382459",endCity:"Gross Gastrose",endCountry:"Germany",endLat:"51.8859326",endLong:"14.6524466",cause:"drowning"},{origCountry:"Algeria",dead:"3",origLat:"28.0000272",origLong:"2.9999825",endCity:"Guben",endCountry:"Germany",endLat:"51.9503235",endLong:"14.7153567",cause:"drowning"},{origCountry:"Romania",dead:"1",origLat:"45.9852129",origLong:"24.6859225",endCity:"Rothenburg",endCountry:"Germany",endLat:"49.3771899",endLong:"10.1788809",cause:"drowning"},{origCountry:"Sri Lanka",dead:"6",origLat:"7.878",origLong:"80.70382459",endCity:"Zasieki",endCountry:"Poland",endLat:"51.7337766",endLong:"14.6685826",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Zittau",endCountry:"Germany",endLat:"50.8959142",endLong:"14.8064417",cause:"drowning"},{origCountry:"Romania",dead:"2",origLat:"45.9852129",origLong:"24.6859225",endCity:"Fort Walem",endCountry:"Belgium",endLat:"51.0610344",endLong:"4.4622315",cause:"drowning"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"unknown",endCountry:"Strait of Gibraltar",endLat:"35.789956",endLong:"-5.799956",cause:"drowning"},{origCountry:"Zimbabwe",dead:"1",origLat:"-18.4554963",origLong:"29.7468414",endCity:"London",endCountry:"England",endLat:"51.5073219",endLong:"-0.1276474",cause:"a fall"},{origCountry:"Bosnia and Herzegovina",dead:"2",origLat:"44.3053476",origLong:"17.5961467",endCity:"Hessen",endCountry:"Germany",endLat:"47.9087024",endLong:"10.3002934",cause:"a fall"},{origCountry:"Kurdistan",dead:"2",origLat:"35.672803",origLong:"47.0124376",endCity:"Strait of Otranto",endCountry:"Italy",endLat:"40.2406193",endLong:"18.9637757",cause:"drowning"},{origCountry:"Turkey",dead:"1",origLat:"38.9597594",origLong:"34.9249653",endCity:"Hengelo",endCountry:"Netherlands",endLat:"52.2523195",endLong:"6.795525591",cause:"suicide"},{origCountry:"Kosovo",dead:"2",origLat:"42.5869578",origLong:"20.9021231",endCity:"unknown",endCountry:"Sweden",endLat:"59.8686211",endLong:"18.0701865",cause:"hypothermia"},{origCountry:"Peru",dead:"1",origLat:"-6.8699697",origLong:"-75.0458515",endCity:"Freiburg",endCountry:"Germany",endLat:"47.9960901",endLong:"7.8494005",cause:"a jump"},{origCountry:"Angola",dead:"1",origLat:"-11.8775768",origLong:"17.5691241",endCity:"Berlin",endCountry:"Germany",endLat:"52.5170365",endLong:"13.3888599",cause:"suicide"},{origCountry:"India",dead:"1",origLat:"22.3511148",origLong:"78.6677428",endCity:"New Delhi",endCountry:"India",endLat:"28.6141793",endLong:"77.2022662",cause:"a shooting"},{origCountry:"Albania",dead:"10",origLat:"41.000028",origLong:"19.9999619",endCity:"Strait of Otranto",endCountry:"Italy",endLat:"40.2406193",endLong:"18.9637757",cause:"drowning"},{origCountry:"Morocco",dead:"2",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Pantelleria",endCountry:"Italy",endLat:"36.8279195",endLong:"11.9424297",cause:"drowning"},{origCountry:"Kurdistan",dead:"5",origLat:"35.672803",origLong:"47.0124376",endCity:"unknown",endCountry:"Mediterranean Sea",endLat:"35.0000035",endLong:"19.9999957",cause:"drowning"},{origCountry:"Sri Lanka",dead:"2",origLat:"7.878",origLong:"80.70382459",endCity:"Zasieki",endCountry:"Poland",endLat:"51.7337766",endLong:"14.6685826",cause:"drowning"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"unknown",endCountry:"Algeria",endLat:"28.0000272",endLong:"2.9999825",cause:"an unknown cause"},{origCountry:"Albania",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"Strait of Otranto",endCountry:"Italy",endLat:"40.2406193",endLong:"18.9637757",cause:"drowning"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"Otranto",endCountry:"Italy",endLat:"40.147825",endLong:"18.485933",cause:"hit by a vehicle"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"Hannover",endCountry:"Germany",endLat:"52.3744779",endLong:"9.7385532",cause:"a shooting"},{origCountry:"Romania",dead:"1",origLat:"45.9852129",origLong:"24.6859225",endCity:"Trebnitz",endCountry:"Germany",endLat:"51.1535588",endLong:"12.2427728",cause:"a shooting"},{origCountry:"Romania",dead:"1",origLat:"45.9852129",origLong:"24.6859225",endCity:"Kyritz",endCountry:"Germany",endLat:"52.9430648",endLong:"12.3966896",cause:"a shooting"},{origCountry:"Ghana",dead:"1",origLat:"8.0300284",origLong:"-1.0800271",endCity:"unknown",endCountry:"Ghana ",endLat:"4.741715",endLong:"-0.621172",cause:"a beating"},{origCountry:"Guinea",dead:"1",origLat:"10.7226226",origLong:"-10.7083587",endCity:"Santurtzi",endCountry:"Spain",endLat:"43.3287527",endLong:"-3.0318766",cause:"an unknown cause"},{origCountry:"Nigeria",dead:"1",origLat:"9.6000359",origLong:"7.9999721",endCity:"Tangier",endCountry:"Morocco",endLat:"35.777103",endLong:"-5.803792",cause:"an unknown cause"},{origCountry:"Zaire",dead:"1",origLat:"4.0383",origLong:"21.7587",endCity:"unknown",endCountry:"unknown",endLat:"-5.898776",endLong:"11.647685",cause:"drowning"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Antwerp",endCountry:"Belgium",endLat:"51.2211097",endLong:"4.3997081",cause:"drowning"},{origCountry:"Rwanda",dead:"2",origLat:"-1.9646631",origLong:"30.0644358",endCity:"unknown",endCountry:"Mediterranean Sea",endLat:"35.0000035",endLong:"19.9999957",cause:"drowning"},{origCountry:"Algeria",dead:"4",origLat:"28.0000272",origLong:"2.9999825",endCity:"Le Havre",endCountry:"France",endLat:"49.4938975",endLong:"0.1079732",cause:"drowning"},{origCountry:"Romania",dead:"4",origLat:"45.9852129",origLong:"24.6859225",endCity:"Felixstowe",endCountry:"England",endLat:"51.9639098",endLong:"1.3515106",cause:"suffocation"},{origCountry:"Nigeria",dead:"1",origLat:"9.6000359",origLong:"7.9999721",endCity:"London",endCountry:"England",endLat:"51.5073219",endLong:"-0.1276474",cause:"suffocation"},{origCountry:"Syria",dead:"1",origLat:"34.6401861",origLong:"39.0494106",endCity:"unknown",endCountry:"Norway",endLat:"64.5731537",endLong:"11.52803644",cause:"suicide"},{origCountry:"Iran",dead:"1",origLat:"32.9407495",origLong:"52.9471344",endCity:"Mecklenburg-Vorpommern",endCountry:"Germany",endLat:"53.7735234",endLong:"12.5755746",cause:"suicide"},{origCountry:"Yugoslavia",dead:"1",origLat:"44.816667",origLong:"20.45",endCity:"Wasserburg am Inn",endCountry:"Germany",endLat:"48.0539248",endLong:"12.22396704",cause:"suicide"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"Vechta",endCountry:"Germany",endLat:"52.7310691",endLong:"8.2873162",cause:"suicide"},{origCountry:"Sri Lanka",dead:"1",origLat:"7.878",origLong:"80.70382459",endCity:"Hattorf",endCountry:"Germany",endLat:"52.3600784",endLong:"10.7463328",cause:"suicide"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Ludwigsburg",endCountry:"Germany",endLat:"48.8956194",endLong:"9.1895147",cause:"suicide"},{origCountry:"Ghana",dead:"1",origLat:"8.0300284",origLong:"-1.0800271",endCity:"Munich",endCountry:"Germany",endLat:"48.1371079",endLong:"11.5753822",cause:"suicide"},{origCountry:"Dominican Republic",dead:"1",origLat:"18.7357",origLong:"70.1627",endCity:"Bilbao",endCountry:"Spain",endLat:"43.2629489",endLong:"-2.9349459",cause:"suicide"},{origCountry:"Bosnia and Herzegovina",dead:"1",origLat:"44.3053476",origLong:"17.5961467",endCity:"Birmingham",endCountry:"England",endLat:"52.4775396",endLong:"-1.894053",cause:"suicide"},{origCountry:"Bosnia and Herzegovina",dead:"1",origLat:"44.3053476",origLong:"17.5961467",endCity:"Gelsenkirchen",endCountry:"Germany",endLat:"51.5110321",endLong:"7.0960124",cause:"suicide"},{origCountry:"Croatia",dead:"1",origLat:"45.5643442",origLong:"17.0118954",endCity:"Bayern",endCountry:"Germany",endLat:"48",endLong:"11.9",cause:"suicide"},{origCountry:"Sri Lanka",dead:"1",origLat:"7.878",origLong:"80.70382459",endCity:"St. Gallen",endCountry:"Switzerland",endLat:"47.4250593",endLong:"9.3765878",cause:"suicide"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Türingen",endCountry:"Germany",endLat:"50.7333163",endLong:"11.0747905",cause:"suicide"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"Homberg",endCountry:"Germany",endLat:"51.00471745",endLong:"9.401492361",cause:"suicide"},{origCountry:"Vietnam",dead:"1",origLat:"13.2904027",origLong:"108.4265113",endCity:"Munich",endCountry:"Germany",endLat:"48.1371079",endLong:"11.5753822",cause:"suicide"},{origCountry:"China",dead:"1",origLat:"25.4915799",origLong:"-98.9811115",endCity:"Volkstedt",endCountry:"Germany",endLat:"51.5615059",endLong:"11.5551317",cause:"suicide"},{origCountry:"Macedonia",dead:"1",origLat:"41.6171214",origLong:"21.7168387",endCity:"unknown",endCountry:"Macedonia",endLat:"41.6171214",endLong:"21.7168387",cause:"a beating"
  }
];

// data95 array (code folded)
var data95 = [
  {
    origCountry:"Africa",dead:"2",origLat:"2.0000003",origLong:"15.9999997",endCity:"",endCountry:"Gibraltar",endLat:"36.140807",endLong:"-5.3541295",cause:"drowning"},{origCountry:"Liberia",dead:"1",origLat:"5.7499721",origLong:"-9.3658524",endCity:"Munich",endCountry:"Germany",endLat:"48.1371079",endLong:"11.5753822",cause:"a beating"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"Amersfoort",endCountry:"Netherlands",endLat:"52.1637739",endLong:"5.396587949",cause:"a beating"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"",endCountry:"England",endLat:"52.7954791",endLong:"-0.540240287",cause:"starvation"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Rome",endCountry:"Italy",endLat:"41.894802",endLong:"12.4853384",cause:"medical neglect"},{origCountry:"Tunisia",dead:"1",origLat:"33.8439408",origLong:"9.400138",endCity:"Ragusa",endCountry:"Italy",endLat:"36.9219828",endLong:"14.7213455",cause:"a beating"},{origCountry:"Sri Lanka",dead:"1",origLat:"7.878",origLong:"80.70382459",endCity:"Palermo",endCountry:"Italy",endLat:"38.1112268",endLong:"13.3524434",cause:"a beating"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"Celle",endCountry:"Germany",endLat:"52.624056",endLong:"10.081052",cause:"medical neglect"},{origCountry:"Lebanon",dead:"1",origLat:"33.8750629",origLong:"35.843409",endCity:"Bochum",endCountry:"Germany",endLat:"51.4818111",endLong:"7.2196635",cause:"asphyxiation"},{origCountry:"Kosovo",dead:"2",origLat:"42.5869578",origLong:"20.9021231",endCity:"Zell im Wiesental",endCountry:"Germany",endLat:"47.7054471",endLong:"7.8476208",cause:"a fire"},{origCountry:"Serbia",dead:"4",origLat:"44.1534121",origLong:"20.55144",endCity:"Mellendorf",endCountry:"Germany",endLat:"52.5470675",endLong:"9.7299326",cause:"a fire"},{origCountry:"Ghana and Chad",dead:"2",origLat:"8.0300284",origLong:"-1.0800271",endCity:"Ulm",endCountry:"Germany",endLat:"48.3973944",endLong:"9.9932755",cause:"a fire"},{origCountry:"Mongolia",dead:"1",origLat:"46.8250388",origLong:"103.8499736",endCity:"Upplands Väsby",endCountry:"Sweden",endLat:"59.517164",endLong:"17.9164192",cause:"medical neglect"},{origCountry:"Zaire",dead:"1",origLat:"4.0383",origLong:"21.7587",endCity:"Caserta",endCountry:"Italy",endLat:"41.0820827",endLong:"14.334708",cause:"medical neglect"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Castres",endCountry:"France",endLat:"43.6036776",endLong:"2.2417954",cause:"dehydration"},{origCountry:"Vietnam",dead:"1",origLat:"13.2904027",origLong:"108.4265113",endCity:"Berlin",endCountry:"Germany",endLat:"52.5170365",endLong:"13.3888599",cause:"an unknown cause"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Marbella",endCountry:"Spain",endLat:"36.508976",endLong:"-4.88562",cause:"drowning"},{origCountry:"Albania",dead:"2",origLat:"41.000028",origLong:"19.9999619",endCity:"Santa Cesarea Terme",endCountry:"Italy",endLat:"40.036323",endLong:"18.456834",cause:"drowning"},{origCountry:"Morocco",dead:"2",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Tarifa",endCountry:"Spain",endLat:"36.0127749",endLong:"-5.6048873",cause:"drowning"},{origCountry:"Albania",dead:"3",origLat:"41.000028",origLong:"19.9999619",endCity:"Strait of Otranto",endCountry:"Italy",endLat:"40.2406193",endLong:"18.9637757",cause:"drowning"},{origCountry:"Albania",dead:"19",origLat:"41.000028",origLong:"19.9999619",endCity:"Strait of Otranto",endCountry:"Italy",endLat:"40.2406193",endLong:"18.9637757",cause:"drowning"},{origCountry:"unknown",dead:"3",origLat:"",origLong:"",endCity:"La Spezia",endCountry:"Italy",endLat:"44.091524",endLong:"9.842312",cause:"drowning"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"",endCountry:"Spain",endLat:"40.0028028",endLong:"-4.003104",cause:"drowning"},{origCountry:"Ethiopia",dead:"1",origLat:"10.2116702",origLong:"38.6521203",endCity:"Bamberg",endCountry:"Germany",endLat:"49.8926723",endLong:"10.8876149",cause:"suicide"},{origCountry:"Africa",dead:"1",origLat:"2.0000003",origLong:"15.9999997",endCity:"Paris",endCountry:"France",endLat:"48.8566101",endLong:"2.3514992",cause:"drowning"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Murazzi River",endCountry:"Italy",endLat:"45.0616681",endLong:"7.6938581",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Görlitz",endCountry:"Germany",endLat:"51.1563185",endLong:"14.991018",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Hohenwutzen",endCountry:"Germany",endLat:"52.84053465",endLong:"14.10723642",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Lodenau",endCountry:"Germany",endLat:"51.3812112",endLong:"14.9588407",cause:"drowning"},{origCountry:"Pakistan",dead:"1",origLat:"30.3308401",origLong:"71.247499",endCity:"Podrosche",endCountry:"Germany",endLat:"51.4694003",endLong:"14.9455374",cause:"drowning"},{origCountry:"Pakistan",dead:"4",origLat:"30.3308401",origLong:"71.247499",endCity:"",endCountry:"unknown",endLat:"50.8959142",endLong:"14.8064417",cause:"drowning"},{origCountry:"Pakistan",dead:"1",origLat:"30.3308401",origLong:"71.247499",endCity:"Bahren-Zelz",endCountry:"Germany",endLat:"51.6394391",endLong:"14.7501047",cause:"drowning"},{origCountry:"Romania",dead:"1",origLat:"45.9852129",origLong:"24.6859225",endCity:"",endCountry:"unknown",endLat:"50.8959142",endLong:"14.8064417",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Aurith",endCountry:"Germany",endLat:"52.2411592",endLong:"14.701352",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Brieskow-Finkenheerd",endCountry:"Germany",endLat:"52.256642",endLong:"14.5783041",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Brieskow-Finkenheerd",endCountry:"Germany",endLat:"52.256642",endLong:"14.5783041",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Eisenhüttenstadt",endCountry:"Germany",endLat:"52.1448863",endLong:"14.6294413",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"",endCountry:"unknown",endLat:"52.256642",endLong:"14.5783041",cause:"drowning"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Paris",endCountry:"France",endLat:"48.8566101",endLong:"2.3514992",cause:"drowning"},{origCountry:"Africa",dead:"1",origLat:"2.0000003",origLong:"15.9999997",endCity:"Ceuta",endCountry:"Spain",endLat:"35.888361",endLong:"-5.304138",cause:"drowning"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"Angulo",endCountry:"Spain",endLat:"43.0374939",endLong:"-3.1701112",cause:"drowning"},{origCountry:"New Zealand",dead:"1",origLat:"-41.5000831",origLong:"172.8344077",endCity:"Harwich",endCountry:"England",endLat:"51.9445801",endLong:"1.2898522",cause:"suicide"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"Paris",endCountry:"France",endLat:"48.8566101",endLong:"2.3514992",cause:"a fall"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Monte Caprino",endCountry:"Switzerland",endLat:"45.98048",endLong:"8.994842",cause:"an unknown cause"},{origCountry:"Benin",dead:"2",origLat:"9.5293472",origLong:"2.2584408",endCity:"Antwerp",endCountry:"Belgium",endLat:"51.2211097",endLong:"4.3997081",cause:"an unknown cause"},{origCountry:"Turkey",dead:"1",origLat:"38.9597594",origLong:"34.9249653",endCity:"Rehefeld/Erzgebirge",endCountry:"Germany",endLat:"50.7309626",endLong:"13.6747982",cause:"hypothermia"},{origCountry:"Bangladesh",dead:"1",origLat:"24.4768783",origLong:"90.2932426",endCity:"Regensburg",endCountry:"Germany",endLat:"49.0195333",endLong:"12.0974869",cause:"hit by a vehicle"},{origCountry:"Peru",dead:"1",origLat:"-6.8699697",origLong:"-75.0458515",endCity:"Menton",endCountry:"France",endLat:"43.7751405",endLong:"7.4966252",cause:"hit by a vehicle"},{origCountry:"Zaire",dead:"1",origLat:"4.0383",origLong:"21.7587",endCity:"unknown",endCountry:"Netherlands",endLat:"51.3481463",endLong:"5.9622405",cause:"a jump"},{origCountry:"Iran",dead:"2",origLat:"32.9407495",origLong:"52.9471344",endCity:"unknown",endCountry:"Iran",endLat:"32.9407495",endLong:"52.9471344",cause:"a shooting"},{origCountry:"Pakistan",dead:"4",origLat:"30.3308401",origLong:"71.247499",endCity:"Kastanies",endCountry:"Greece",endLat:"41.6459374",endLong:"26.4746169",cause:"a mine blast"},{origCountry:"Albania",dead:"17",origLat:"41.000028",origLong:"19.9999619",endCity:"Santa Cesarea Terme",endCountry:"Italy",endLat:"40.036323",endLong:"18.456834",cause:"drowning"},{origCountry:"Afghanistan",dead:"1",origLat:"33.7680065",origLong:"66.2385139",endCity:"Munich",endCountry:"Germany",endLat:"48.1371079",endLong:"11.5753822",cause:"suicide"},{origCountry:"Albania",dead:"12",origLat:"41.000028",origLong:"19.9999619",endCity:"Strait of Otranto",endCountry:"Italy",endLat:"40.2406193",endLong:"18.9637757",cause:"drowning"},{origCountry:"Yugoslavia (Roma)",dead:"1",origLat:"44.816667",origLong:"20.45",endCity:"unknown",endCountry:"French-German border",endLat:"43.881925",endLong:"7.509987",cause:"a shooting"},{origCountry:"Albania",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"Florina",endCountry:"Greece",endLat:"40.7828829",endLong:"21.4145565",cause:"a shooting"},{origCountry:"Albania",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"unknown",endCountry:"Greek-Albanian border",endLat:"39.911339",endLong:"20.363945",cause:"a shooting"},{origCountry:"Gambia",dead:"1",origLat:"13.470062",origLong:"-15.4900464",endCity:"Hamburg",endCountry:"Germany",endLat:"53.550341",endLong:"10.000654",cause:"a stabbing"},{origCountry:"Ivory Coast",dead:"1",origLat:"25.2149241",origLong:"55.17136121",endCity:"Le Havre",endCountry:"France",endLat:"49.4938975",endLong:"0.1079732",cause:"drowning"},{origCountry:"Iraq",dead:"2",origLat:"33.0955793",origLong:"44.1749775",endCity:"unknown",endCountry:"Spain (coast)",endLat:"39.448823",endLong:"-0.225505",cause:"drowning"},{origCountry:"Liberia",dead:"3",origLat:"5.7499721",origLong:"-9.3658524",endCity:"Valencia",endCountry:"Spain",endLat:"39.4699014",endLong:"-0.3759513",cause:"suffocation"},{origCountry:"unknown",dead:"2",origLat:"",origLong:"",endCity:"Amsterdam",endCountry:"Netherlands",endLat:"52.3745403",endLong:"4.897975506",cause:"an unknown cause"},{origCountry:"Africa",dead:"2",origLat:"2.0000003",origLong:"15.9999997",endCity:"Antwerp",endCountry:"Belgium",endLat:"51.2211097",endLong:"4.3997081",cause:"an unknown cause"},{origCountry:"Ghana",dead:"2",origLat:"8.0300284",origLong:"-1.0800271",endCity:"St. Malo",endCountry:"France",endLat:"48.6454528",endLong:"-2.015418",cause:"poisoning"},{origCountry:"Sri Lanka",dead:"1",origLat:"7.878",origLong:"80.70382459",endCity:"Madrid",endCountry:"Spain",endLat:"40.4167047",endLong:"-3.7035825",cause:"suffocation"},{origCountry:"Sri Lanka",dead:"18",origLat:"7.878",origLong:"80.70382459",endCity:"Györ",endCountry:"Hungary",endLat:"47.687609",endLong:"17.6346815",cause:"suffocation"},{origCountry:"Zaire",dead:"1",origLat:"4.0383",origLong:"21.7587",endCity:"Den Helder",endCountry:"Netherlands",endLat:"52.9529894",endLong:"4.826759199",cause:"suicide"},{origCountry:"Iran",dead:"1",origLat:"32.9407495",origLong:"52.9471344",endCity:"Haarlem",endCountry:"Netherlands",endLat:"52.38370575",endLong:"4.643559697",cause:"suicide"},{origCountry:"Bosnia and Herzegovina",dead:"1",origLat:"44.3053476",origLong:"17.5961467",endCity:"Berlin",endCountry:"Germany",endLat:"52.5170365",endLong:"13.3888599",cause:"suicide"},{origCountry:"Sri Lanka",dead:"1",origLat:"7.878",origLong:"80.70382459",endCity:"Görisried",endCountry:"Germany",endLat:"47.7071157",endLong:"10.5088462",cause:"suicide"},{origCountry:"Poland",dead:"1",origLat:"52.0977181",origLong:"19.0258159",endCity:"Frankfurt",endCountry:"Germany",endLat:"50.1106444",endLong:"8.6820917",cause:"suicide"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Frankfurt",endCountry:"Germany",endLat:"50.1106444",endLong:"8.6820917",cause:"suicide"},{origCountry:"Sudan",dead:"1",origLat:"14.5844444",origLong:"29.4917691",endCity:"Halle",endCountry:"Germany",endLat:"51.4322083",endLong:"8.2953778",cause:"suicide"},{origCountry:"Zaire",dead:"1",origLat:"4.0383",origLong:"21.7587",endCity:"Volkstedt",endCountry:"Germany",endLat:"51.5615059",endLong:"11.5551317",cause:"suicide"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"Wittlich",endCountry:"Germany",endLat:"49.9850353",endLong:"6.88844",cause:"suicide"},{origCountry:"Ivory Coast",dead:"1",origLat:"25.2149241",origLong:"55.17136121",endCity:"unknown",endCountry:"Ivory Coast",endLat:"25.2149241",endLong:"55.17136121",cause:"suicide"},{origCountry:"Sri Lanka",dead:"1",origLat:"7.878",origLong:"80.70382459",endCity:"Norwich",endCountry:"England",endLat:"52.628606",endLong:"1.29227",cause:"suicide"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Paris",endCountry:"France",endLat:"48.8566101",endLong:"2.3514992",cause:"suicide"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"Dresden",endCountry:"Germany",endLat:"51.0493286",endLong:"13.7381437",cause:"suicide"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Hamburg",endCountry:"Germany",endLat:"53.550341",endLong:"10.000654",cause:"suicide"},{origCountry:"India",dead:"1",origLat:"22.3511148",origLong:"78.6677428",endCity:"Regensburg",endCountry:"Germany",endLat:"49.0195333",endLong:"12.0974869",cause:"suicide"},{origCountry:"Nigeria",dead:"1",origLat:"9.6000359",origLong:"7.9999721",endCity:"Wolfenbüttel",endCountry:"Germany",endLat:"52.1625283",endLong:"10.5348215",cause:"suicide"},{origCountry:"Togo",dead:"1",origLat:"8.7800265",origLong:"1.0199765",endCity:"Hamburg",endCountry:"Germany",endLat:"53.550341",endLong:"10.000654",cause:"suicide"},{origCountry:"Latvia",dead:"2",origLat:"56.8406494",origLong:"24.7537645",endCity:"Durham",endCountry:"England",endLat:"54.7764152",endLong:"-1.5758539",cause:"suicide"},{origCountry:"Ethiopia",dead:"1",origLat:"10.2116702",origLong:"38.6521203",endCity:"Würzburg",endCountry:"Germany",endLat:"49.79245",endLong:"9.932966",cause:"suicide"},{origCountry:"Ethiopia",dead:"1",origLat:"10.2116702",origLong:"38.6521203",endCity:"Regensburg",endCountry:"Germany",endLat:"49.0195333",endLong:"12.0974869",cause:"suicide"},{origCountry:"Armenia",dead:"1",origLat:"40.7696272",origLong:"44.6736646",endCity:"Vienna",endCountry:"Austria",endLat:"48.2083537",endLong:"16.3725042",cause:"suicide"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Wiesbaden",endCountry:"Germany",endLat:"50.0833",endLong:"8.25",cause:"suicide"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"Munich",endCountry:"Germany",endLat:"48.1371079",endLong:"11.5753822",cause:"suicide"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"Hamburg",endCountry:"Germany",endLat:"53.550341",endLong:"10.000654",cause:"suicide"},{origCountry:"Ethiopia",dead:"1",origLat:"10.2116702",origLong:"38.6521203",endCity:"London",endCountry:"England",endLat:"51.5073219",endLong:"-0.1276474",cause:"suicide"
  }
];

// data96 array (INSERT AND FOLD)
var data96 =[
  {
    origCountry:"Gambia",dead:"1",origLat:"13.470062",origLong:"-15.4900464",endCity:"London",endCountry:"England",endLat:"51.5073219",endLong:"-0.1276474",cause:"asphyxiation"},{origCountry:"Ghana",dead:"1",origLat:"8.0300284",origLong:"-1.0800271",endCity:"Antwerp",endCountry:"Belgium",endLat:"51.2211097",endLong:"4.3997081",cause:"a beating"},{origCountry:"Zaire, Angola, Lebanon, and Togo",dead:"10",origLat:"4.0383",origLong:"21.7587",endCity:"Lubeck",endCountry:"Germany",endLat:"53.866444",endLong:"10.684738",cause:"a fire"},{origCountry:"Ukraine",dead:"1",origLat:"49.4871968",origLong:"31.2718321",endCity:"Menden",endCountry:"Germany",endLat:"51.43779",endLong:"7.7953822",cause:"a fire"},{origCountry:"Algeria",dead:"2",origLat:"28.0000272",origLong:"2.9999825",endCity:"Kassel",endCountry:"Germany",endLat:"51.3090209",endLong:"9.4762981",cause:"a fire"},{origCountry:"India",dead:"1",origLat:"22.3511148",origLong:"78.6677428",endCity:"Varena",endCountry:"Lithuania",endLat:"54.2121764",endLong:"24.5673724",cause:"an unknown cause"},{origCountry:"Iraq",dead:"1",origLat:"33.0955793",origLong:"44.1749775",endCity:"Alexandropolis",endCountry:"Greece",endLat:"40.845692",endLong:"25.8753275",cause:"a mine blast"},{origCountry:"Iraq and Algeria",dead:"3",origLat:"33.0955793",origLong:"44.1749775",endCity:"unknown",endCountry:"Turkish-Greek border",endLat:"41.327867",endLong:"26.579589",cause:"a mine blast"},{origCountry:"Pakistan",dead:"1",origLat:"30.3308401",origLong:"71.247499",endCity:"unknown",endCountry:"Pakistan",endLat:"30.3308401",endLong:"71.247499",cause:"an unknown cause"},{origCountry:"Sri Lanka",dead:"1",origLat:"7.878",origLong:"80.70382459",endCity:"Eggersberg",endCountry:"Germany",endLat:"49.1817386",endLong:"13.0906793",cause:"hypothermia"},{origCountry:"Sudan",dead:"1",origLat:"14.5844444",origLong:"29.4917691",endCity:"Melilla",endCountry:"Spain",endLat:"35.2919028",endLong:"-2.9407146",cause:"an unknown cause"},{origCountry:"Iran",dead:"1",origLat:"32.9407495",origLong:"52.9471344",endCity:"unknown",endCountry:"Netherlands",endLat:"52.2379891",endLong:"5.534607382",cause:"an unknown cause"},{origCountry:"Nigeria",dead:"1",origLat:"9.6000359",origLong:"7.9999721",endCity:"Ter Apel",endCountry:"Netherlands",endLat:"52.87771705",endLong:"7.068110999",cause:"an unknown cause"},{origCountry:"Liberia",dead:"4",origLat:"5.7499721",origLong:"-9.3658524",endCity:"Gran Canaria",endCountry:"Spain",endLat:"27.9580004",endLong:"-15.60623054",cause:"drowning"},{origCountry:"Iraq",dead:"3",origLat:"33.0955793",origLong:"44.1749775",endCity:"Kos",endCountry:"Greece",endLat:"36.7939719",endLong:"27.08508108",cause:"drowning"},{origCountry:"Iraq",dead:"1",origLat:"33.0955793",origLong:"44.1749775",endCity:"Hamburg",endCountry:"Germany",endLat:"53.550341",endLong:"10.000654",cause:"drowning"},{origCountry:"Sierra Leone",dead:"1",origLat:"8.6400349",origLong:"-11.8400269",endCity:"Hamburg",endCountry:"Germany",endLat:"53.550341",endLong:"10.000654",cause:"drowning"},{origCountry:"Romania",dead:"1",origLat:"45.9852129",origLong:"24.6859225",endCity:"Le Havre",endCountry:"France",endLat:"49.4938975",endLong:"0.1079732",cause:"drowning"},{origCountry:"Sri Lanka",dead:"6",origLat:"7.878",origLong:"80.70382459",endCity:"Vieste",endCountry:"Italy",endLat:"41.8827595",endLong:"16.1791791",cause:"drowning"},{origCountry:"unknown",dead:"2",origLat:"",origLong:"",endCity:"Gorlitz",endCountry:"Germany",endLat:"51.1563185",endLong:"14.991018",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Gorlitz",endCountry:"Germany",endLat:"51.1563185",endLong:"14.991018",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Guben",endCountry:"Germany",endLat:"51.9503235",endLong:"14.7153567",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Krauschwitz",endCountry:"Germany",endLat:"51.4727575",endLong:"14.86043774",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Frankfurt",endCountry:"Germany",endLat:"50.1106444",endLong:"8.6820917",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Lebus",endCountry:"Germany",endLat:"52.4271025",endLong:"14.5338189",cause:"drowning"},{origCountry:"Bulgaria",dead:"1",origLat:"42.6073975",origLong:"25.4856617",endCity:"unknown",endCountry:"Polish-German border",endLat:"52.338041",endLong:"14.563058",cause:"drowning"},{origCountry:"Morocco",dead:"25",origLat:"31.1728192",origLong:"-7.3366043",endCity:"unknown",endCountry:"Strait of Gibraltar",endLat:"35.9637715",endLong:"-5.5110791",cause:"drowning"},{origCountry:"Morocco",dead:"2",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Barbate",endCountry:"Spain",endLat:"36.1922549",endLong:"-5.9202942",cause:"drowning"},{origCountry:"India, Pakistan, and Sri Lanka",dead:"284",origLat:"22.3511148",origLong:"78.6677428",endCity:"unknown",endCountry:"Malta",endLat:"35.890036",endLong:"14.959924",cause:"drowning"},{origCountry:"Albania",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"Puglia",endCountry:"Italy",endLat:"43.5026432",endLong:"11.8827542",cause:"drowning"},{origCountry:"Maghreb",dead:"1",origLat:"33.38367245",origLong:"44.37339343",endCity:"Ceuta",endCountry:"Spain",endLat:"35.888361",endLong:"-5.304138",cause:"drowning"},{origCountry:"Albania",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"Valona",endCountry:"Italy",endLat:"46.4659338",endLong:"12.4505622",cause:"drowning"},{origCountry:"Sri Lanka and Africa",dead:"26",origLat:"7.878",origLong:"80.70382459",endCity:"Vieste",endCountry:"Italy",endLat:"41.8827595",endLong:"16.1791791",cause:"drowning"},{origCountry:"unknown",dead:"1",origLat:"25.02784685",origLong:"-77.37909427",endCity:"Frankfurt an der Oder",endCountry:"Germany",endLat:"52.3412273",endLong:"14.549452",cause:"drowning"},{origCountry:"Albania",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"unknown",endCountry:"Strait of Otranto",endLat:"40.2406193",endLong:"18.9637757",cause:"drowning"},{origCountry:"unknown",dead:"14",origLat:"",origLong:"",endCity:"Lampedusa",endCountry:"Italy",endLat:"35.51113415",endLong:"12.59629136",cause:"drowning"},{origCountry:"Morocco",dead:"2",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Cadiz",endCountry:"Spain",endLat:"36.5298292",endLong:"-6.2925679",cause:"drowning"},{origCountry:"Bangladesh",dead:"1",origLat:"24.4768783",origLong:"90.2932426",endCity:"unknown",endCountry:"England",endLat:"52.7954791",endLong:"-0.540240287",cause:"a fall"},{origCountry:"Romania",dead:"2",origLat:"45.9852129",origLong:"24.6859225",endCity:"Altenberg",endCountry:"Germany",endLat:"50.766598",endLong:"13.7523234",cause:"a fall"},{origCountry:"unknown",dead:"5",origLat:"",origLong:"",endCity:"Cadiz",endCountry:"Spain",endLat:"36.5298292",endLong:"-6.2925679",cause:"an unknown cause"},{origCountry:"unknown",dead:"3",origLat:"",origLong:"",endCity:"Tangier",endCountry:"Morocco",endLat:"35.777103",endLong:"-5.803792",cause:"an unknown cause"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Cieza",endCountry:"Spain",endLat:"38.2391277",endLong:"-1.4189645",cause:"a beating"},{origCountry:"Maghreb",dead:"1",origLat:"33.38367245",origLong:"44.37339343",endCity:"Aitona",endCountry:"Spain",endLat:"41.4939531",endLong:"0.4591083",cause:"a beating"},{origCountry:"Bangladesh",dead:"1",origLat:"24.4768783",origLong:"90.2932426",endCity:"Berlin",endCountry:"Germany",endLat:"52.5170365",endLong:"13.3888599",cause:"suicide"},{origCountry:"China",dead:"3",origLat:"25.4915799",origLong:"-98.9811115",endCity:"Ventimiglia",endCountry:"Italy",endLat:"43.7917623",endLong:"7.6033131",cause:"hit by a vehicle"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"Opicina",endCountry:"Italy",endLat:"45.6893779",endLong:"13.7898313",cause:"suicide"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"unknown",endCountry:"France",endLat:"46.603354",endLong:"1.8883335",cause:"suicide"},{origCountry:"Nigeria",dead:"1",origLat:"9.6000359",origLong:"7.9999721",endCity:"Berlin",endCountry:"Germany",endLat:"52.5170365",endLong:"13.3888599",cause:"suicide"},{origCountry:"Togo",dead:"1",origLat:"8.7800265",origLong:"1.0199765",endCity:"Stockholm",endCountry:"Sweden",endLat:"59.3251172",endLong:"18.0710935",cause:"suicide"},{origCountry:"Nigeria",dead:"1",origLat:"9.6000359",origLong:"7.9999721",endCity:"unknown",endCountry:"Guinea-Bisseau",endLat:"12.100035",endLong:"-14.9000214",cause:"a beating"},{origCountry:"Turkey",dead:"1",origLat:"38.9597594",origLong:"34.9249653",endCity:"unknown",endCountry:"Turkey",endLat:"38.9597594",endLong:"34.9249653",cause:"an unknown cause"},{origCountry:"Algeria",dead:"1",origLat:"28.0000272",origLong:"2.9999825",endCity:"Bergen",endCountry:"Norway",endLat:"60.3943532",endLong:"5.325551",cause:"suicide"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Ceuta",endCountry:"Spain",endLat:"35.888361",endLong:"-5.304138",cause:"a shooting"},{origCountry:"Serbia",dead:"1",origLat:"44.1534121",origLong:"20.55144",endCity:"Sarajevo",endCountry:"Bosnia and Herzegovina",endLat:"43.8519774",endLong:"18.3866868",cause:"a mine blast"},{origCountry:"unknown",dead:"1",origLat:"",origLong:"",endCity:"Frankfurt am Main",endCountry:"Germany",endLat:"50.2164354",endLong:"8.6915513",cause:"an unknown cause"},{origCountry:"Morocco",dead:"1",origLat:"31.1728192",origLong:"-7.3366043",endCity:"Baie de la Seine",endCountry:"France",endLat:"49.5",endLong:"-0.5",cause:"drowning"},{origCountry:"India",dead:"1",origLat:"22.3511148",origLong:"78.6677428",endCity:"London",endCountry:"England",endLat:"51.5073219",endLong:"-0.1276474",cause:"an unknown cause"},{origCountry:"Russia",dead:"1",origLat:"64.6863136",origLong:"97.7453061",endCity:"Rome",endCountry:"Italy",endLat:"41.894802",endLong:"12.4853384",cause:"hypothermia"},{origCountry:"Ghana",dead:"1",origLat:"8.0300284",origLong:"-1.0800271",endCity:"Coruna",endCountry:"Spain",endLat:"43.1538815",endLong:"-8.580941805",cause:"suffocation"},{origCountry:"Iran",dead:"1",origLat:"32.9407495",origLong:"52.9471344",endCity:"unknown",endCountry:"Sweden",endLat:"59.6749712",endLong:"14.5208584",cause:"suicide"},{origCountry:"Ethiopia",dead:"1",origLat:"10.2116702",origLong:"38.6521203",endCity:"Ludenscheid",endCountry:"Germany",endLat:"51.218116",endLong:"7.6395513",cause:"suicide"},{origCountry:"Bosnia and Herzegovina",dead:"1",origLat:"44.3053476",origLong:"17.5961467",endCity:"Den Bosch",endCountry:"Netherlands",endLat:"51.58378",endLong:"6.0202",cause:"suicide"},{origCountry:"Iran",dead:"1",origLat:"32.9407495",origLong:"52.9471344",endCity:"Haarlem",endCountry:"Netherlands",endLat:"52.38370575",endLong:"4.643559697",cause:"suicide"},{origCountry:"Kurdistan and Nigeria",dead:"2",origLat:"35.672803",origLong:"47.0124376",endCity:"Kassel",endCountry:"Germany",endLat:"51.3090209",endLong:"9.4762981",cause:"suicide"},{origCountry:"Togo",dead:"1",origLat:"8.7800265",origLong:"1.0199765",endCity:"Lorrach",endCountry:"Germany",endLat:"47.6120896",endLong:"7.6607218",cause:"suicide"},{origCountry:"Togo",dead:"1",origLat:"8.7800265",origLong:"1.0199765",endCity:"Landshut",endCountry:"Germany",endLat:"48.536217",endLong:"12.1516551",cause:"suicide"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"unknown",endCountry:"France",endLat:"46.603354",endLong:"1.8883335",cause:"suicide"},{origCountry:"Bosnia",dead:"1",origLat:"49.3548923",origLong:"23.4831155",endCity:"Berlin",endCountry:"Germany",endLat:"52.5170365",endLong:"13.3888599",cause:"suicide"},{origCountry:"Kurdistan",dead:"1",origLat:"35.672803",origLong:"47.0124376",endCity:"Delmenhorst",endCountry:"Germany",endLat:"53.048095",endLong:"8.6286066",cause:"suicide"},{origCountry:"Ukraine",dead:"1",origLat:"49.4871968",origLong:"31.2718321",endCity:"Erding",endCountry:"Germany",endLat:"48.3064441",endLong:"11.9076579",cause:"suicide"},{origCountry:"Sri Lanka",dead:"1",origLat:"7.878",origLong:"80.70382459",endCity:"Linz",endCountry:"Austria",endLat:"48.3059078",endLong:"14.286198",cause:"suicide"},{origCountry:"Ivory Coast",dead:"1",origLat:"25.2149241",origLong:"55.17136121",endCity:"Murrhardt",endCountry:"Germany",endLat:"48.9797657",endLong:"9.5794661",cause:"suicide"},{origCountry:"Nigeria",dead:"1",origLat:"9.6000359",origLong:"7.9999721",endCity:"unknown",endCountry:"Norway",endLat:"64.5731537",endLong:"11.52803644",cause:"suicide"},{origCountry:"Iran",dead:"1",origLat:"32.9407495",origLong:"52.9471344",endCity:"Stockholm",endCountry:"Sweden",endLat:"59.3251172",endLong:"18.0710935",cause:"suicide"},{origCountry:"Iran",dead:"1",origLat:"32.9407495",origLong:"52.9471344",endCity:"Crailo",endCountry:"Netherlands",endLat:"52.24760785",endLong:"5.172808846",cause:"suicide"},{origCountry:"Albania",dead:"1",origLat:"41.000028",origLong:"19.9999619",endCity:"Gelsenkirchen",endCountry:"Germany",endLat:"51.5110321",endLong:"7.0960124",cause:"suicide"
  }
];

// data97 array (INSERT AND FOLD)

var colorMap = {
  "asphyxiation": "#b07aa0",
  "suffocation": "#b07aa0",
  "a beating": "#f18e27",
  "a shooting": "#f18e27",
  "a stabbing": "#f18e27",
  "dehydration": "#8eca7d",
  "starvation": "#8eca7d",
  "drowning": "#4e79a7",
  "a fall": "#f8bfd1",
  "a jump": "#f8bfd1",
  "a fire": "#f1ce63",
  "hit by a vehicle": "#79706e",
  "a vehicle accident": "#79706e",
  "hypothermia": "#9fcae7",
  "medical neglect": "#408b75",
  "illness": "#408b75",
  "a mine blast": "#b5982f",
  "suicide": "#e05759",
  "an unknown cause": "#bab0ac",
  "poisoning": "#bab0ac",
  "other": "#bab0ac",
}

//origin rectangles: setting variables
var sel = g.selectAll("origSquares")
  .data(data93);

sel 
  .exit()
  .remove();

sel
  .enter()
  .append("rect")
  .attr("class","squares");

sel
  .attr("transform", function(d) {
    return "translate(" + squareProjection([
      d.origLong,
      d.origLat
    ]) + ")";
  })
  // .attr("width", 3)
  // .attr("height", 3)
  .attr("width", 10)
  .attr("height", 10)
  .attr('stroke-width', 0)
  .attr('fill', 'black')
  .on("click", function(d) {
    originTooltip.transition()
      .style('opacity', .8)
      .text(d.origCountry)
      .style('left', (d3.event.pageX - 50) + 'px')
      .style('top', (d3.event.pageY - 0) + 'px')
      .duration(0);
  })

//end circles: setting variables
var sel2 = g.selectAll("endCircles")
  .data(data93.sort(function(a,b){ return b.dead - a.dead}));

sel2
  .exit()
  .remove();

sel2
  .enter()
  .append("circle")
  .attr("class","circles");

sel2
  .attr("transform", function(d) {
    return "translate(" + projection([
        d.endLong,
        d.endLat
      ]) + ")";
    })
   // setting radius based on sqrt of # dead
  .attr("r", function(d){return Math.sqrt(d.dead)*4; })
  // changing color based on cause (code folded)
  .text(function(d){return d.cause; })
  .style('opacity', .6)
  .attr('fill', function(d) { return colorMap[d.cause]; })
  
  .on("mouseover", function(d) {
    endTooltip.transition()
      .style('font-size', 0.55)
      .style('opacity', .8)
      .style('background', 'white')
      .text(d.dead + " died in " + d.endCity + ", " + d.endCountry + ", after " + d.cause + ". They came from " + d.origCountry + ".")
      .style('left', (d3.event.pageX - 100) + 'px')
      .style('top', (d3.event.pageY - 30) + 'px')
      .duration(0);
  })
  .on("mouseout",function(d) {
     endTooltip.transition()
       .style("opacity", "0")
       .duration(0);
  });

function clearMap() {
  // hide tooltips
  d3.selectAll(".tooltip").style('opacity', 0);
  // remove migration elements
  svg.selectAll(".migration").remove();
  svg.selectAll(".migration-spots").remove();
  svg.selectAll(".migration-arc").remove();
  svg.selectAll(".migration-dots").remove();
}

function updateMap(data) {
  clearMap();
  console.log({ data })
  var allLocs = {};
  // Following along from https://stackoverflow.com/questions/39982729/drawing-connecting-lines-great-arcs-on-a-d3-symbol-map/39988387
  //
  // While reading in the migration information, create empty MultiLineString objects for every origin and destination:
  data.forEach(function(migration) {
    // this creates a string like "21.7587, 4.0383"
    var origin = `${migration.origLong}, ${migration.origLat}`;
    var dest = `${migration.endLong}, ${migration.endLat}`;
    // and this adds that information to the allLocs object
    allLocs[origin] = {
      0: migration.origLong,
      1: migration.origLat,
      arcs: {
        type: "MultiLineString",
        coordinates: [],
      },
      // get the corresponding value for key `l`, which is the country
      // that we set above in the forEach function.
      country: migration.origCountry,
      // store the coordinates so we can index them
      coords: origin,
    };
    // allLocs looks like this now:
    // {
    //   "21.7587, 4.0383": {
    //     0: "21.7587",
    //     1: "4.0383",
    //     arcs: {
    //       type: "MultiLineString",
    //       coordinates: [],
    //     },
    //     country: "Zaire, Angola, Lebanon, and Togo",
    //     coords: "21.7587, 4.0383",
    //   },
    // }
    allLocs[dest] = {
      0: migration.endLong,
      1: migration.endLat,
      arcs: {
        type: "MultiLineString",
        coordinates: [],
      },
      // get the corresponding value for key `l`, which is the country
      // that we set above in the forEach function.
      country: migration.origCountry,
      // store the coordinates so we can index them
      coords: dest,
    };
  });
  // this gets all of the values in allLocs as an array
  var locations = Object.values(allLocs);

  // this stores all of the locations in a d3 map
  var dataByCoords = d3.map(locations, function(d) { return d.coords; });
  // console.log({ allLocs });
  // console.log({ locations });
  // console.log({ dataByCoords });

  svg.append("path")
    .datum({type: "MultiPoint", coordinates: locations})
    .attr("class", "migration-spots")
    .attr("d", geoPath);

  sel = g.selectAll(".squares")
    .data(data);

  sel
    .exit()
    .remove();

  sel
    .enter()
    .append("rect")
    .attr("class","squares");

  sel
    .filter(function(d) {return d.origLong != 0})
    .attr("transform", function(d) {
      return "translate(" + squareProjection([
        d.origLong,
        d.origLat
      ]) + ")";
    })
    // .attr("width", 3)
    // .attr("height", 3)
    .attr("width", 3)
    .attr("height", 3)
    .attr('stroke-width', 0)
    .attr('fill', 'black')
    .on("click", function(d) {
      // get all prevous paths
      var previousPaths = locations
        .filter(function(d) { return d.arcs.coordinates.length; });

      // reset them
      previousPaths.forEach(function(path) { path.arcs.coordinates = []; });

      // remove them
      svg.selectAll(".migration-arc").remove();
      svg.selectAll(".migration-dots").remove();

      // get the new migrations
      var migrantsWithSameOrigin = data.filter(function(migrant) {
        return migrant.origCountry === d.origCountry;
      });

      // console.log({ d })
      // console.log({ migrantsWithSameOrigin })

      // get the source and target for the current migration and
      // create arcs for them
      var oSource = dataByCoords.get(`${d.origLong}, ${d.origLat}`);
      var oTarget = dataByCoords.get(`${d.endLong}, ${d.endLat}`);
      oSource.arcs.coordinates.push([oSource, oTarget]);
      oTarget.arcs.coordinates.push([oTarget, oSource]);

      // do the same for the other migrations with the same origin
      migrantsWithSameOrigin.forEach(function(path) {
        var eSource = dataByCoords.get(`${path.origLong}, ${path.origLat}`);
        var eTarget = dataByCoords.get(`${path.endLong}, ${path.endLat}`);
        eSource.arcs.coordinates.push([eSource, eTarget]);
        eTarget.arcs.coordinates.push([eTarget, eSource]);
      })

      // get all of the locations that have arcs
      var locs = locations
        .filter(function(d) { return d.arcs.coordinates.length; });

      // create paths for those arcs
      svg.append("path")
        .datum({type: "MultiPoint", coordinates: locs})
        .attr("class", "migration-dots")
        .attr("d", geoPath);

      var loc = svg.selectAll(".migration")
        .data(locs);

      loc
        .exit()
        .remove();

      loc
        .enter()
        .append("g")
        .attr("class", "migration");

      loc.append("path")
        .attr("class", "migration-arc")
        .attr("d", function(d) { return geoPath(d.arcs); });

      originTooltip.transition()
        .style('opacity', .8)
        .text(d.origCountry)
        .style('left', (d3.event.pageX - 50) + 'px')
        .style('top', (d3.event.pageY - 0) + 'px')
        .duration(0);
    })

  sel2 = g.selectAll(".circles")
    .data(data.sort(function(a,b){ return b.dead - a.dead}));

  sel2
    .exit()
    .remove();

  sel2
    .enter()
    .append("circle")
    .attr("class","circles");

  sel2
    .attr("transform", function(d) {
      return "translate(" + projection([
        d.endLong,
        d.endLat
      ]) + ")";
    })
    // setting radius based on sqrt of # dead
    .attr("r", function(d){return Math.sqrt(d.dead)*4; })
    // changing color based on cause (code folded)
    .text(function(d){return d.cause; })
    .style('opacity', .6)
    .attr('fill', function(d) { return colorMap[d.cause]; })
    .on("mouseover", function(d) {
      endTooltip.transition()
        .style('font-size', 0.55)
        .style('opacity', .8)
        .style('background', 'white')
        .text(d.dead + " died in " + d.endCity + ", " + d.endCountry + ", after " + d.cause + ". They came from " + d.origCountry + ".")
        .style('left', (d3.event.pageX - 100) + 'px')
        .style('top', (d3.event.pageY - 30) + 'px')
        .attr("transform", "translate(" + (d3.event.pageX + 5 ) + ",0)")
        .duration(0);
    })
    .on("mouseout",function(d) {
      endTooltip.transition()
        .style("opacity", 0)
        .duration(0);
    });
};

function show93() {
  document.getElementById("yearInfo").innerHTML = "In 1993, 62 Europe-bound migrants died.";
  selectYear("linkTo1993")
  updateMap(data93);
};

function show94() {
  document.getElementById("yearInfo").innerHTML = "In 1994, 125 Europe-bound migrants died.";
  selectYear("linkTo1994")
  updateMap(data94);

};

function show95() {
  document.getElementById("yearInfo").innerHTML = "In 1995, 180 Europe-bound migrants died.";
  selectYear("linkTo1995")
  updateMap(data95);

};

function show96() {
  document.getElementById("yearInfo").innerHTML = "In 1996, 456 Europe-bound migrants died.";
  selectYear("linkTo1996")
  updateMap(data96);

};

function selectYear(id) {
  var active = document.querySelectorAll(".yearLink.yearSelected");

  active.forEach(function(link) {
    link.classList.remove("yearSelected");
  })

  document.getElementById(id).classList.add("yearSelected");
}

function show97() {
  document.getElementById("yearInfo").innerHTML = "In 1997, 384 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo1997")
}
function show98() {
  document.getElementById("yearInfo").innerHTML = "In 1998, 389 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo1998")
}
function show99() {
  document.getElementById("yearInfo").innerHTML = "In 1999, 523 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo1999")
}
function show00() {
  document.getElementById("yearInfo").innerHTML = "In 2000, 825 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2000")
}
function show01() {
  document.getElementById("yearInfo").innerHTML = "In 2001, 511 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2001")
}
function show02() {
  document.getElementById("yearInfo").innerHTML = "In 2002, 721 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2002")
}
function show03() {
  document.getElementById("yearInfo").innerHTML = "In 2003, 1,360 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2003")
}
function show04() {
  document.getElementById("yearInfo").innerHTML = "In 2004, 908 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2004")
}
function show05() {
  document.getElementById("yearInfo").innerHTML = "In 2005, 1,087 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2005")
}
function show06() {
  document.getElementById("yearInfo").innerHTML = "In 2006, 1,891 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2006")
}
function show07() {
  document.getElementById("yearInfo").innerHTML = "In 2007, 1,672 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2007")
}
function show08() {
  document.getElementById("yearInfo").innerHTML = "In 2008, 1,180 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2008")
}
function show09() {
  document.getElementById("yearInfo").innerHTML = "In 2009, 1,233 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2009")
}
function show10() {
  document.getElementById("yearInfo").innerHTML = "In 2010, 302 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2010")
}
function show11() {
  document.getElementById("yearInfo").innerHTML = "In 2011, 1,977 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2011")
}
function show12() {
  document.getElementById("yearInfo").innerHTML = "In 2012, 741 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2012")
}
function show13() {
  document.getElementById("yearInfo").innerHTML = "In 2013, 957 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2013")
}
function show14() {
  document.getElementById("yearInfo").innerHTML = "In 2014, 2,685 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2014")
}
function show15() {
  document.getElementById("yearInfo").innerHTML = "In 2015, 3,139 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2015")
}
function show16() {
  document.getElementById("yearInfo").innerHTML = "In 2016, 3,962 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2016")
}
function show17() {
  document.getElementById("yearInfo").innerHTML = "In 2017, 3,853 Europe-bound migrants died. MAP DATA PENDING.";
  selectYear("linkTo2017")
}
