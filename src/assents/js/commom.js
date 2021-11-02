import FastClick from 'fastclick'
// 解决移动端click点击事件300ms延迟
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

document.documentElement.addEventListener('touchmove', function(e) {
   if(e.touches.length > 1) {
      //阻止多指事件
      e.preventDefault(); 
   }
}, false);
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'