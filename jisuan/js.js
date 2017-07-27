
    var $cal=document.getElementById("cal");
    var $result=document.querySelector(".result");
    var $clear=document.getElementsByClassName("clear")[0];
    var $c=document.getElementsByClassName("c")[0];
    var $number=document.querySelectorAll(".number");
    var $symbols = document.querySelectorAll('.btn.sym');
    var $equal = document.querySelector('.equal');
    var $btn = document.querySelectorAll('.btn');
    
    for(var i=0;i<$number.length;i++){
        var number=$number[i];
        
        number.addEventListener("click",function(){
        if($cal.innerHTML === '0'){
            $cal.innerHTML=""+this.innerHTML;
        }else {
            $cal.innerHTML=$cal.innerHTML+this.innerHTML;//计算值=当前计算值加上点击的值
        }





        function Font(){
            var fontsize=30;
            var $carFont=$cal.style.fontSize;         
            $carFont=fontsize+"px";
            (function check(){
                if($carFont.offsetWidth>2){
                    $carFont = (fontsize -= 5) + 'px';
                    check();
                }
            })()

            
        }
       Font()
  
    })
}
for(var i=0;i<$symbols.length;i++){
    var symbol = $symbols[i];
    symbol.addEventListener("click" , function(){
        var s=$cal.innerHTML[$cal.innerHTML.length-1];
        if(s==="+"||s==="-"||s==="*"||s==="/"||s==="%"){
          $cal.innerHTML=$cal.innerHTML.slice(0,-1) 
        }
         $cal.innerHTML=$cal.innerHTML+this.innerHTML;//计算值=当前值
    })
}
$clear.addEventListener("click", function(){
    $cal.innerHTML="0";
})
$c.addEventListener("click", function(){
    $cal.innerHTML=$cal.innerHTML.slice(0,-1) 
    if($cal.innerHTML==""){
    $cal.innerHTML="0";
    }
})
$equal.addEventListener("click", function(){
   $cal.innerHTML=eval($cal.innerHTML);
})
for(var i=0; i<$btn.length;i++){
        (function(i){
            $btn[i].addEventListener('mouseover',function(){
                this.style.cursor="pointer";
            }) 
            $btn[i].addEventListener('mouseout',function(){
                this.style.cursor="auto";
            }) 
        })(i);
    }


/*
问题：
字符串长度
点击颜色
禁止缩放
icon
*/

