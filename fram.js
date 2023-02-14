var image=[];
image[0]="diapo/1.jpg";
image[1]="diapo/2.jpg";
image[2]="diapo/3.jpg";
image[3]="diapo/4.jpg";
image[4]="diapo/5.jpg";
image[5]="diapo/6.jpg";
image[6]="diapo/7.jpg";
image[7]="diapo/8.jpg";
image[8]="diapo/9.jpg";


 var i = 0;
 var time = 1000;
 function k() {
 	document.diapo.src = image[i];
 	if (i<image.length) {
 		i++;
 	}
 	else
 	{
 		i=0;
 	}
 	setTimeout("k()",time);
 }
 window.onload = k;