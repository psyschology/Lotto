function filterChar(id){
    var inp=document.getElementById(id);
   // inp.style.border="0px solid red";
    inp.value=inp.value.replace(",","");
    inp.value=inp.value.replace("'","");
    inp.value=inp.value.replace('"',"");
    inp.value=inp.value.replace("\\","");
    inp.value=inp.value.replace("<","");
    inp.value=inp.value.replace(">","");
    }