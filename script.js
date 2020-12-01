document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();

  }
}, false);

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 85 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();

  }
}, false);

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 73 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();

  }
}, false);

    function sesesesegghg() {
                  document.getElementById("demo3").innerHTML =  document.getElementById("nonesesese").value
                }
                  function sesesesegghgss() {
                    document.getElementById("demo3").innerHTML = ''
                  }

  function auto() {

  
   

    document.getElementById("S").onclick = function autosave() {
    
      
 if(document.getElementById("cmd").value == '') return alert("اكتب الرسالة")
 if(document.getElementById("reply").value == '') return alert("اكتب الرد")
      

      
         var reply = document.getElementById("reply")
         
              var cmd = document.getElementById("cmd")
         
        var guild = document.getElementById("guild")
        
        if(!guild) return;
      if(!reply) return;
    if(!cmd) return;
      
    cmd = cmd.value
      
      guild = guild.value
      
      reply = reply.value
      
      $.ajax({url: `/autoreply?reply=${reply}&guild=${guild}&cmd=${cmd}`, success: function() {
    swal("Success", "Success I Have Save All Changes", "success");
    swal("Success", "Success I Have Save All Changes", "success");
}});swal("Success", "Success I Have Save All Changes", "success");
      
    }
   
  }

  function avattttytytyar() {
    var a = document.getElementById("avatarurl")
    if(!a) return;
    a = a.value 
  
    document.getElementById("avatar").src =  a

    
   
  }


  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    //alert(‘No F-12’);
    return false;
    }
    }
    document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    //alert(‘No F-keys’);
    return false;
    }
    }
   document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    //alert(‘No F-keys’);
    return false;
    }
    }

    function onKeyDown() {
        // current pressed key
        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
        if (event.ctrlKey && (pressedKey == "c" || 
                              pressedKey == "v")) {
          // disable key press porcessing
          event.returnValue = false;
        }
      } // onKeyDown


      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });


function log() {
  if( document.getElementById("fssdsdsd").value == 'off') {
  document.getElementById("fssdsdsd").value = 'on'

}

if( document.getElementById("fssdsdsd").value == 'on') {
  document.getElementById("fssdsdsd").value = 'off'

}

}  

 document.getElementById("colorbox").style.backgroundColor = document.getElementById('textcolor').value || document.getElementById('textcolor').placeholder

   function color() {
       document.getElementById("colorbox").style.backgroundColor = document.getElementById('textcolor').value || document.getElementById('textcolor').placeholder
   }
   
   $(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

