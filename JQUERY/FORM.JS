
       $(document).ready(function(){
       $('#demo1').hide();
       
       
   
       
           $('#name').keyup(function(){
               fun();
           });
   
           function fun(){
           if($('#name').val()==""){
               $('#demo1').show();
               return false;
           }
           else{
               $('#demo1').hide();
               return true;
           }
           }
           
       
   
       $('#demo2').hide();
       $('#pass').keyup(function(){
           fun2();
       });
   
       function fun2(){
           if($('#pass').val()==""){
               $('#demo2').show();
               return false;
           }
           else{
               $('#demo2').hide();
               return true;
           }
       }
       
   
       
       $('#demo3').hide();
       $('#add').keyup(function(){
           fun3();
       });
   
       function fun3(){
           if($('#add').val()==""){
               $('#demo3').show();
               return false;
           }
           else{
               $('#demo3').hide();
               return true;
           }
       }
       
   
       
   
       $('#sub').click(function(){
             fun()
             fun2()
             fun3()
           if(fun()==true && fun2()==true && fun3()==true)
               $('#form').submit();
           else
           return false;
           
       });
   
   
   
   });
    
    
    
       
    