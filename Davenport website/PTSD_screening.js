function check() {
  var a=0;
  var q1=document.PTSD_screening.question1.value;
  var q2=document.PTSD_screening.question2.value;
  var q3=document.PTSD_screening.question3.value;
  var q4=document.PTSD_screening.question4.value;
  var q5=document.PTSD_screening.question5.value;
  var q6=document.PTSD_screening.question6.value;
  var result=document.getElementById('result');
  var PTSD_screening=document.getElementById("PTSD_screening");
  if (q1=="Yes") {a++}
  if (q2=="Yes") {a++}
  if (q3=="Yes") {a++}
  if (q4=="Yes") {a++}
  if (q5=="Yes") {a++}
  if (q6=="Yes") {a++}
 PTSD_screening.style.display="none";

  if (a<=2) {
    result.textContent=`Your screen results indicate that you have few or no symptoms of PTSD. This screen is not designed to provide a comprehensive assessment or diagnosis of PTSD. Only a qualified physician or mental health provider can provide a complete assessment and diagnosis of PTSD.
  If you are concerned about any illness, regardless of what the screen shows, you should seek further evaluation from your physician. If you are concerned that you may have a medical emergency or are having thoughts of harming yourself or someone else, call 911, or go immediately to the nearest hospital emergency room for an evaluation.`

  } else {
    result.textContent=`Your screen results are consistent with many of the symptoms of PTSD. You are advised to see your physician or a qualified mental health professional immediately for a complete assessment. Although many veterans/individuals cope well with symptoms like yours, effective treatments for PTSD are available to help reduce your symptoms and improve your quality of life. A mental health professional or your physician can advise you about whether you can benefit from treatment and describe different treatment alternatives.

  This screen is not designed to provide a comprehensive assessment or diagnosis of PTSD. Only a qualified physician or mental health provider can provide a complete assessment and diagnosis of PTSD. Only a qualified physician or mental health professional can differentiate symptoms of PTSD from other medical conditions.
  
  If you are concerned about any illness, regardless of what the screen shows, you should seek further evaluation from your physician. If you are concerned that you may have a medical emergency or are having thoughts of harming yourself or someone else, call 911, or go immediately to the nearest hospital emergency room for an evaluation.`
  

    
  }
}