
setInterval(getMessages, 333);

window.onload = function ClearChat(){
  var divs = document.getElementById("myDiv");
  divs.innerHTML = "";


  sessionStorage.setItem("lungime",0);
}


function getMessages() {
  console.log("se apeleaza");
  $.ajax({
      url: "request.php",
      type: "GET",
      dataType: 'JSON',
      success: function(result){
          var oldLength=sessionStorage.getItem("lungime");
          let div=document.getElementById("myDiv");
          let lungime=result.length;
          console.log(lungime,oldLength);
          if(oldLength<lungime)
          {
            var diff = lungime - oldLength;

            console.log(lungime,diff);
            console.log(result);
            //div.innerHTML="";
            for(var i=diff - 1; i>= 0;i--){
              let text=result[i].mess;
              // let item=document.createElement("div");
              // item.textContent=text;
              // console.log(item.textContent);
              // div.appendChild(item);

              div.innerHTML += "<div>" + text + "</div>";
            }
            sessionStorage.setItem("lungime",lungime);
          }
      }
  });
}
function Insert(event)
{
  event.preventDefault();
  let item=document.getElementById("mesaj");
  console.log(item);
  let messageToSend = item.value;
  item.value = "";
  // messageToSend.value = "";
  $.ajax({
      url: "request.php",
      type: "POST",
      dataType: 'JSON',
      data: {"message":messageToSend},
      success: function(result){
          console.log(result); 
          getMessages();
      },
  });
}
//var intervalToRefresh=
