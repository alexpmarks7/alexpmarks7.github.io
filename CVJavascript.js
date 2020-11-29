function showLboro()
{
    var lboro = document.getElementById("lboro")
    if (lboro.style.display = 'none')
    {
        lboro.style.display = 'block';
    }
    var lboroShape = document.getElementById("lboroShape")
    lboroShape.style.height = 'min-height'
  
}

function hideLboro()
{
    var lboro = document.getElementById("lboro")
    if (lboro.style.display = 'block')
    {
        lboro.style.display = 'none';
    }
    var lboroShape = document.getElementById("lboroShape")
    lboroShape.style.height = 'min-height'
  
}

function showPetroc()
{
    var lboro = document.getElementById("petroc")
    if (lboro.style.display = 'none')
    {
        lboro.style.display = 'block';
    }
    var lboroShape = document.getElementById("petrocShape")
    lboroShape.style.height = 'min-height'
  
}

function hidePetroc()
{
    var lboro = document.getElementById("petroc")
    if (lboro.style.display = 'block')
    {
        lboro.style.display = 'none';
    }
    var lboroShape = document.getElementById("petrocShape")
    lboroShape.style.height = 'min-height'
  
}

var i = 0;
function moveCSharp() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("cSharpBar");
    var width = 10;
    var id = setInterval(frame, 10);
   
    function frame() {
        if (width >= 80) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = (width/2 + "%");
            elem.innerHTML = width + "%";
        }
    }
    
  }
}


var i = 0;
function moveHTML() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("HTMLBar");
    var width = 10;
    var id = setInterval(frame, 10);
   
    function frame() {
        if (width >= 70) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = (width/2 + "%");
            elem.innerHTML = width + "%";
        }
    }
    
  }
}

var i = 0;
function moveVS() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("VSBar");
    var width = 10;
    var id = setInterval(frame, 10);
   
    function frame() {
        if (width >= 90) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = (width/2 + "%");
            elem.innerHTML = width + "%";
        }
    }
    
  }
}

var i = 0;
function moveGit() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("GitBar");
    var width = 10;
    var id = setInterval(frame, 10);
   
    function frame() {
        if (width >= 80) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = (width/2 + "%");
            elem.innerHTML = width + "%";
        }
    }
    
  }
}