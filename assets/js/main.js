(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
  function $(i){return document.getElementById(i);}
  // 1. Lighter swaps: [from, to, how, tip]
  var SW={cream:['Double cream','Greek yogurt or half-fat crème fraîche','Stir in off the heat so it doesn’t split; replace half the cream for a gentler change.','In soups, blending in a few cooked potatoes or white beans also adds creaminess.'],
    sourcream:['Sour cream','Plain Greek yogurt','Use the same amount for dips, wraps and baked potatoes.','Add lemon zest and chives for a fresh topping.'],
    whitepasta:['White pasta','Wholewheat or legume pasta','Cook as normal; it may need a minute or two longer.','Try half and half if your family is new to it.'],
    whiterice:['White rice','Brown rice, quinoa or half cauliflower rice','Brown rice needs about 30–40 minutes; mix cauliflower rice in at the end.','Cook a big batch and freeze in portions.'],
    mince:['Fatty minced beef','Lean mince, or half mince and half lentils','Brown the mince, then stir in cooked lentils with the sauce.','Lentils soak up flavour and stretch the meal further.'],
    frying:['Deep-frying','Oven or air-fryer roasting','Toss in a teaspoon of oil and roast at high heat on a spread-out tray.','Use breadcrumbs or panko for crunch on fish and chicken.'],
    butter:['Lots of butter for frying','A little olive oil, or a spray','Use a non-stick pan and add a splash of water or stock if things stick.','Finish with a small knob of butter for flavour if you like.'],
    mayo:['Mayonnaise','Half yogurt, half mayonnaise','Mix together with a little mustard and lemon.','Great for coleslaw, potato salad and sandwiches.'],
    sugar:['Sugar in baking','Reduce by a quarter, or add ripe banana','Most cakes and muffins still work with 25% less sugar.','Cinnamon, vanilla and orange zest add a sense of sweetness.'],
    crisps:['Crisps as a snack','Popcorn, roasted chickpeas or veg sticks with hummus','Season popcorn with paprika or chickpeas with cumin.','Make a batch of roasted chickpeas for the week.']};
  var si=$('sw-i');
  function swap(){if(!si)return;var S=SW[si.value];$('sw-a').textContent=S[0];$('sw-b').textContent=S[1];$('sw-h').innerHTML='<b>How:</b> '+S[2];$('sw-t').innerHTML='<b>Tip:</b> '+S[3];}
  if(si){si.addEventListener('change',swap);swap();}
  // 2. Veg boost
  var VB={pasta:[['Grated carrot','stir into the sauce'],['Spinach','wilt in at the end'],['Courgette','dice and fry with the onion'],['Peppers','roast and blend into the sauce']],
    curry:[['Spinach','stir in at the end'],['Cauliflower','add florets with the sauce'],['Peas','add for the last 5 minutes'],['Sweet potato','cube and simmer until tender']],
    soup:[['Frozen peas','add just before blending'],['Kale','shred and simmer for 5 minutes'],['Leeks','soften with the onion'],['White beans','add for body']],
    omelette:[['Spinach','wilt first'],['Peppers','dice and fry'],['Mushrooms','slice and fry until golden'],['Cherry tomatoes','halve and scatter on top']],
    chilli:[['Grated carrot','add with the onion'],['Peppers','dice and fry'],['Sweetcorn','stir in before serving'],['Extra beans','swap some mince for beans']],
    pizza:[['Peppers','slice thinly'],['Spinach','scatter under the cheese'],['Mushrooms','slice and pre-cook'],['Rocket','add after baking']],
    burgers:[['Grated courgette','squeeze dry and mix in'],['Lettuce and tomato','pile high'],['Red onion','slice raw or pickle'],['Side salad','serve alongside']],
    stirfry:[['Broccoli','cut small florets'],['Snap peas','add for crunch'],['Carrot','cut into thin sticks'],['Pak choi','add for the last minute']]};
  var vd=$('vb-d'),vn=$('vb-n');
  function veg(){if(!vd)return;var k=+vn.value,L=VB[vd.value].slice(0,k+1);$('vb-n-o').textContent=k;
    $('vb-c').innerHTML=[1,2,3].map(function(i){return '<i class="'+(i<=k?'on':'')+'"></i>';}).join('');
    $('vb-l').innerHTML=L.map(function(x){return '<li><span>'+x[0]+'</span><b>'+x[1]+'</b></li>';}).join('');
    $('vb-t').innerHTML='<b>About '+k+' extra handful'+(k>1?'s':'')+' per person.</b> A handful is roughly 80 g of chopped vegetables.';}
  if(vd){[vd,vn].forEach(function(x){x.addEventListener('input',veg);x.addEventListener('change',veg);});veg();}
  // 3. Best cooking method: [best, [m1,t1],[m2,t2],[m3,t3], tip]
  var CM={broccoli:['Roast',[['Roast','220°C, 15 min'],['Steam','4–5 min'],['Stir-fry','3–4 min']],'Roast with garlic and lemon until the edges char; steam if you want it bright and tender.'],
    carrots:['Roast',[['Roast','200°C, 25–30 min'],['Steam','6–8 min'],['Raw','grated in salads']],'Roasting brings out their natural sweetness; try with cumin or honey.'],
    courgette:['Grill',[['Grill','3–4 min per side'],['Sauté','5 min'],['Raw','ribbons in salads']],'Salt sliced courgette for 10 minutes before grilling for better colour.'],
    peppers:['Roast',[['Roast','200°C, 25 min'],['Stir-fry','3 min'],['Raw','sliced for dipping']],'Roasted peppers make an instant sauce when blended with a little garlic.'],
    spinach:['Wilt',[['Wilt','1–2 min'],['Raw','in salads'],['Stir in','soups and curries']],'Add spinach at the very end; it shrinks dramatically.'],
    cauliflower:['Roast',[['Roast','220°C, 25 min'],['Steam','6–8 min'],['Rice','grated, 3–4 min']],'Toss with smoked paprika or curry powder before roasting.'],
    sweetpotato:['Roast',[['Roast','200°C, 25–30 min'],['Bake whole','45–60 min'],['Steam','12–15 min']],'Leave the skin on for extra texture.'],
    greenbeans:['Steam',[['Steam','4–5 min'],['Sauté','5–6 min'],['Roast','220°C, 15 min']],'Plunge into cold water after steaming to keep them bright green.'],
    mushrooms:['Sauté',[['Sauté','6–8 min, hot pan'],['Roast','200°C, 20 min'],['Grill','4–5 min']],'Don’t crowd the pan, and salt at the end so they brown.'],
    asparagus:['Grill',[['Grill','4–6 min'],['Roast','220°C, 10–12 min'],['Steam','3–4 min']],'Snap off the woody ends where they naturally break.']};
  var cv=$('cm-v');
  function meth(){if(!cv)return;var C=CM[cv.value];$('cm-b').textContent='Best: '+C[0];
    $('cm-m').innerHTML=C[1].map(function(x){return '<div><b>'+x[0]+'</b><small>'+x[1]+'</small></div>';}).join('');$('cm-t').innerHTML='<b>Tip:</b> '+C[2];}
  if(cv){cv.addEventListener('change',meth);meth();}
  // contact & cookies
  var cf=$('cform');
  if(cf)cf.addEventListener('submit',function(ev){ev.preventDefault();if(cf.website.value)return;if(!cf.checkValidity()){cf.reportValidity();return;}
    var body='Name: '+cf.name.value+'\nEmail: '+cf.email.value+'\nTopic: '+cf.topic.value+'\n\n'+cf.message.value;
    window.location.href='mailto:'+cf.dataset.to+'?subject='+encodeURIComponent('Website enquiry: '+cf.topic.value)+'&body='+encodeURIComponent(body);
    var s=$('fm');s.hidden=false;s.textContent='Your email app should now open with your message ready to send. If it doesn’t, please email us directly at '+cf.dataset.to+'.';});
  var c=$('cookie'),v=null;try{v=localStorage.getItem('hr_cookie');}catch(e){}
  if(c&&!v)c.classList.add('show');
  document.querySelectorAll('[data-cookie]').forEach(function(x){x.addEventListener('click',function(){try{localStorage.setItem('hr_cookie',x.dataset.cookie);}catch(e){}c.classList.remove('show');});});
  var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
