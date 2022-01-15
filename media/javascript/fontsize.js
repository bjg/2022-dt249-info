var min=8;
var max=18;
function smallFontSize() {
   var body = document.getElementsByTagName('body');
   for(i=0;i<body.length;i++) {
      if(body[i].style.fontSize) {
         var s = parseInt(body[i].style.fontSize.replace("%",""));
      } else {
         var s = 70;
      }
      if(s!=max) {
         s = 70;
      }
      body[i].style.fontSize = s+"%"
   }
}
function mediumFontSize() {
   var body = document.getElementsByTagName('body');
   for(i=0;i<body.length;i++) {
      if(body[i].style.fontSize) {
         var s = parseInt(body[i].style.fontSize.replace("%",""));
      } else {
         var s = 70;
      }
      if(s!=min) {
         s = 90;
      }
      body[i].style.fontSize = s+"%"
   }   
 }
function largeFontSize() {
   var body = document.getElementsByTagName('body');
   for(i=0;i<body.length;i++) {
      if(body[i].style.fontSize) {
         var s = parseInt(body[i].style.fontSize.replace("%",""));
      } else {
         var s = 70;
      }
      if(s!=min) {
         s = 100;
      }
      body[i].style.fontSize = s+"%"
   }   
}