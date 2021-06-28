function check() {
  var a=0;
  var q1=document.PTSD_screening.question1.value;
  var q2=document.PTSD_screening.question2.value;
  var q3=document.PTSD_screening.question3.value;
  var q4=document.PTSD_screening.question4.value;
  var q5=document.PTSD_screening.question5.value;
  var q6=document.PTSD_screening.question6.value;
  if (q1=="Yes") {a++}
  if (q2=="Yes") {a++}
  if (q3=="Yes") {a++}
  if (q4=="Yes") {a++}
  if (q5=="Yes") {a++}
  if (q6=="Yes") {a++}
 
  document.write(a);
}