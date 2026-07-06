const ctx = document.getElementById("musicChart");

new Chart(ctx,{

type:"bar",

data:{

labels:["Pop","Rock","Hip-Hop","EDM","Classical"],

datasets:[{

label:"Songs Played",

data:[90,75,60,55,20],

backgroundColor:[
"#1DB954",
"#3498db",
"#9b59b6",
"#e67e22",
"#e74c3c"
]

}]

}

});