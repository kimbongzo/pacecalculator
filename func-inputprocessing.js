<script language="JavaScript"> // Hide from old browsers
var ratio = 1.609344;
var str = null; 
var x = 1; 
var answer = 0;

function calc(output,num){
  if (num == 0){
    dist = eval(document.inbox.distance.value);
    hours = eval(document.inbox.hrs.value);
    minutes = eval(document.inbox.min.value);
    seconds = eval(document.inbox.sec.value);
    time = hours*60 + minutes + seconds/60;
    units =
document.inbox.units.options[document.inbox.units.selectedIndex].value;
    if (units == "miles"){
       miles = dist;
       kilometers = ratio*miles;
    }
    else if (units == "kilometers"){ 
       kilometers = dist;
       miles = kilometers/ratio;
    }
    else if (units == "meters"){
       kilometers = dist/1000;
       miles = kilometers/ratio;
    }
    else{
       miles = dist/1760;
       kilometers = ratio*miles;
    }
  }
  else if (num == 1){
    mintemp = eval(document.output.minmile.value);
    sectemp = eval(document.output.secmile.value);
    time = mintemp + sectemp/60;
    miles = 1;
    kilometers = ratio;
  }
  else if (num == 2){
    mintemp = eval(document.output.minkm.value);
    sectemp = eval(document.output.seckm.value);
    time = mintemp + sectemp/60;
    kilometers = 1;
    miles = 1/ratio;
  }
  else if (num == 3){
    temp = eval(document.output.mph.value);
    miles = temp;
    kilometers = miles*ratio; 
    time = 60;
  }
  else if (num == 4){
    temp = eval(document.output.kph.value);
    kilometers = temp;
    miles = kilometers/ratio;
    time = 60;
  }
  else if (num == 5){
    temp = eval(document.output.mps.value);
    kilometers = temp/1000;
    miles = kilometers/ratio;
    time = 1/60;
  } 
  writePace("miles", miles);
  writePace("kilometers", kilometers);
  round(100*miles*60/time);
  document.output.mph.value = answer/100;
  round(100*kilometers*60/time);
  document.output.kph.value = answer/100; 
  round(100*kilometers*1000/time/60);
  document.output.mps.value = answer/100;
}

function writePace(str, dis){
  if (str == "miles"){
     minwin = document.output.minmile;
     secwin = document.output.secmile;
     num = time/dis;
  }
  else{
     minwin = document.output.minkm;
     secwin = document.output.seckm;
     num = time/dis;
  }
  var i = 0;
  var j = 1;
  var go = 1;
  while (go == 1){
    if ((i<=num)&(j>num)){
       minwin.value = i;
       j = 60*(num - i);
       round(j);
       if (answer == 60){
      minwin.value = i+1;
          secwin.value = "00";
       }
       else if (answer == 0){
         secwin.value = "00";
       }
       else if (answer<10){
         secwin.value = "0"+answer;
       }
       else{
    secwin.value = answer;
       }
       go = 0;
    }
    else{
       i++;
       j++;
    }
  } //end of while loop
} //end of fxn

function round(num){
  m = 0;
  n = 1;
  answer = -1;
  while (answer == -1){
    if ((m<=num)&(n>num)){
       if ((num + .5) >= n){
          answer = n;
       }
       else{
          answer = m;
       }
    }
    else{
      m++;
      n++;
    }
  }
}
  

function record(num){
  x=num;
}
// Stop hiding from old browsers -->
</script>