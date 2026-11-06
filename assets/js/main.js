document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.menu-btn'),nav=document.querySelector('header nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)})}
  var f=document.querySelectorAll('.filters button');
  f.forEach(function(b){b.addEventListener('click',function(){
    f.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    var c=b.dataset.filter;
    document.querySelectorAll('.works li').forEach(function(li){li.hidden=!(c==='all'||li.dataset.cat===c)})})});
  var el=document.getElementById('typed');
  if(el){
    var words=el.dataset.words.split('|'),si=0,ci=0,del=false,cur='|';
    (function tick(){
      var s=words[si];
      if(!del){ci++;el.textContent=s.slice(0,ci)+cur;
        if(ci===s.length){del=true;return setTimeout(tick,500)}
        return setTimeout(tick,130)}
      ci--;el.textContent=s.slice(0,ci)+cur;
      if(ci===0){del=false;si=(si+1)%words.length;return setTimeout(tick,300)}
      setTimeout(tick,70);
    })();
  }
});
