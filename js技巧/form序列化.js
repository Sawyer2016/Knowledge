function Form1(form){ 
   var setForm = ""; 
   for(var key in form){   
    if(form.hasOwnProperty(key)){ 
     setForm += '"'+form[key].name+'"'+':'+'"'+form[key].value + '"'+',';
    }
   }
   setForm = "{" + setForm.slice(0,setForm.length -1) + "}";
   return JSON.parse(setForm);
  }
 // 调用
 var oForm = document.getElementById('target');
 console.log(Form1(oForm));
