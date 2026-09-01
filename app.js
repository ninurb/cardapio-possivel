const DAYS=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
const LABELS={lunch:'Almoço',dinner:'Jantar',snack:'Lanche'};
const LEVELS={survival:{label:'Sobrevivência',tip:'Nesta semana, repita preparações sem culpa. O objetivo é alimentar com o menor número possível de decisões.'},maintenance:{label:'Manutenção',tip:'Prepare uma base e reaproveite em outra refeição. Menos louça, menos desperdício e uma semana que funciona.'},advance:{label:'Avanço',tip:'Aproveite o espaço desta semana para adiantar duas bases e guardar porções no freezer para os dias difíceis.'}};
const RECIPES={
survival:[
{n:'Arroz, feijão, ovo e tomate',i:['arroz','feijão','ovos','tomate','alho','cebola','óleo ou azeite']},
{n:'Omelete de legumes com pão',i:['ovos','tomate','cenoura','cebola','pão integral','óleo ou azeite']},
{n:'Macarrão com sardinha e cenoura',i:['macarrão','sardinha em lata','molho de tomate','cenoura','alho','cebola']},
{n:'Frango acebolado com arroz e salada',i:['frango','arroz','cebola','alface','tomate','alho','óleo ou azeite']},
{n:'Cuscuz com ovos e tomate',i:['flocão de milho','ovos','tomate','cebola','óleo ou azeite']},
{n:'Sopa de legumes com frango',i:['frango','batata','cenoura','abóbora','cebola','alho']},
{n:'Arroz de panela com frango e legumes',i:['arroz','frango','cenoura','abobrinha','tomate','alho','cebola']},
{n:'Batata-doce, ovo e couve refogada',i:['batata-doce','ovos','couve','alho','óleo ou azeite']},
{n:'Polenta com carne moída',i:['fubá','carne moída','molho de tomate','cebola','alho']},
{n:'Panqueca de banana e aveia',i:['banana','ovos','aveia','canela']},
{n:'Mingau de aveia com banana',i:['aveia','leite','banana','canela']},
{n:'Tapioca com ovo mexido e tomate',i:['goma de tapioca','ovos','tomate','óleo ou azeite']},
{n:'Arroz, lentilha e cenoura',i:['arroz','lentilha','cenoura','cebola','alho','ovos']},
{n:'Sanduíche natural de frango',i:['pão integral','frango','cenoura','alface','tomate','iogurte natural']}],
maintenance:[
{n:'Frango assado, arroz, feijão e salada',i:['frango','arroz','feijão','alface','tomate','limão','alho','cebola','óleo ou azeite']},
{n:'Carne moída com abóbora, arroz e couve',i:['carne moída','abóbora','arroz','couve','alho','cebola','óleo ou azeite']},
{n:'Macarrão integral à bolonhesa com cenoura',i:['macarrão integral','carne moída','molho de tomate','cenoura','alho','cebola']},
{n:'Arroz, feijão, frango grelhado e beterraba',i:['arroz','feijão','frango','beterraba','alho','cebola','óleo ou azeite']},
{n:'Torta de frango com legumes e salada',i:['frango','farinha de trigo','ovos','leite','cenoura','milho','alface','tomate']},
{n:'Sardinha assada com batata e vinagrete',i:['sardinha','batata','tomate','cebola','pimentão','limão','óleo ou azeite']},
{n:'Arroz com lentilha, ovo e legumes',i:['arroz','lentilha','ovos','cenoura','abobrinha','alho','cebola']},
{n:'Frango ensopado com mandioca e couve',i:['frango','mandioca','couve','tomate','alho','cebola']},
{n:'Quibe de forno com salada de repolho',i:['trigo para quibe','carne moída','hortelã','repolho','cenoura','limão','cebola']},
{n:'Omelete de forno com legumes e arroz',i:['ovos','cenoura','abobrinha','tomate','arroz','queijo']},
{n:'Feijão tropeiro leve com couve',i:['feijão','ovos','farinha de mandioca','couve','cebola','alho']},
{n:'Picadinho de carne com batata e cenoura',i:['carne em cubos','batata','cenoura','arroz','tomate','alho','cebola']},
{n:'Frango desfiado com purê de abóbora',i:['frango','abóbora','leite','cebola','alho','alface','tomate']},
{n:'Grão-de-bico com legumes e ovo cozido',i:['grão-de-bico','ovos','cenoura','tomate','pepino','cebola','limão']},
{n:'Arroz de forno com frango e legumes',i:['arroz','frango','cenoura','ervilha','milho','molho de tomate','queijo']},
{n:'Panqueca integral de carne e salada',i:['farinha de trigo integral','ovos','leite','carne moída','molho de tomate','alface','tomate']}],
advance:[
{n:'Frango marinado, cuscuz e legumes assados',i:['frango','flocão de milho','abobrinha','pimentão','cenoura','limão','alho','óleo ou azeite']},
{n:'Escondidinho de carne com salada',i:['carne moída','mandioca','leite','alface','tomate','cebola','alho']},
{n:'Peixe ao forno com arroz de brócolis',i:['filé de peixe','arroz','brócolis','limão','alho','cebola','óleo ou azeite']},
{n:'Lasanha de berinjela com carne',i:['berinjela','carne moída','molho de tomate','queijo','cebola','alho']},
{n:'Frango ao curry suave com arroz e legumes',i:['frango','leite de coco','curry','arroz','cenoura','vagem','cebola']},
{n:'Almôndegas, purê e vagem',i:['carne moída','ovos','aveia','batata','leite','vagem','molho de tomate']},
{n:'Quiche integral de legumes e folhas',i:['farinha de trigo integral','ovos','leite','queijo','abobrinha','cenoura','alface','tomate']},
{n:'Tilápia grelhada, feijão-fradinho e salada',i:['filé de peixe','feijão-fradinho','tomate','pepino','cebola','limão']},
{n:'Frango recheado, batata-doce e brócolis',i:['frango','cenoura','queijo','batata-doce','brócolis','alho']},
{n:'Carne de panela com mandioca e legumes',i:['carne em cubos','mandioca','cenoura','vagem','tomate','cebola','alho']},
{n:'Hambúrguer caseiro, arroz e salada colorida',i:['carne moída','aveia','ovos','arroz','repolho','cenoura','tomate']},
{n:'Moqueca econômica de peixe com arroz',i:['filé de peixe','leite de coco','tomate','pimentão','cebola','arroz','coentro']},
{n:'Nhoque de abóbora com frango desfiado',i:['abóbora','farinha de trigo','frango','molho de tomate','cebola','alho']},
{n:'Arroz integral, grão-de-bico e legumes',i:['arroz integral','grão-de-bico','abobrinha','cenoura','brócolis','cebola','alho']},
{n:'Rocambole de carne com purê de batata-doce',i:['carne moída','ovos','aveia','cenoura','batata-doce','leite','alface','tomate']},
{n:'Frango xadrez econômico com arroz',i:['frango','pimentão','cenoura','cebola','amendoim','molho de soja','arroz']}],
snack:[
{n:'Banana com aveia e canela',i:['banana','aveia','canela']},{n:'Iogurte natural com fruta',i:['iogurte natural','banana']},{n:'Pipoca caseira e fruta',i:['milho para pipoca','óleo','maçã']},{n:'Pão integral com ovo mexido',i:['pão integral','ovos']},{n:'Tapioca com banana e canela',i:['goma de tapioca','banana','canela']},{n:'Vitamina de banana com aveia',i:['banana','leite','aveia']},{n:'Bolo caseiro de banana e aveia',i:['banana','aveia','ovos','fermento químico']},{n:'Cuscuz com queijo e tomate',i:['flocão de milho','queijo','tomate']},{n:'Fruta picada com aveia',i:['mamão','banana','aveia']},{n:'Patê de frango com pão integral',i:['frango','cenoura','iogurte natural','pão integral']},{n:'Mingau de aveia e canela',i:['aveia','leite','canela']},{n:'Batata-doce cozida com queijo',i:['batata-doce','queijo']},{n:'Panqueca de banana com aveia',i:['banana','ovos','aveia']},{n:'Iogurte com mamão e aveia',i:['iogurte natural','mamão','aveia']},{n:'Sanduíche de ricota e tomate',i:['pão integral','ricota','tomate']},{n:'Milho cozido e fruta',i:['milho verde','maçã']} ]};
const emergency=[['Ovos mexidos + pão','Uma panela • cerca de 8 minutos'],['Macarrão com molho pronto','Uma panela • poucos ingredientes'],['Arroz, feijão e ovo','Use porções congeladas, se tiver'],['Sanduíche + fruta','Sem fogão • montagem rápida'],['Refeição pronta do freezer','É para isso que o freezer existe']];
let state=JSON.parse(localStorage.getItem('cardapioPossivel')||'null')||{level:'maintenance',people:4,meals:['lunch','dinner'],restrictions:'',pantry:[],plan:[],favorites:[],checked:[],shoppingQty:{},useFirst:[],freezer:[]};
state.shoppingQty=state.shoppingQty||{};
let selectedDay=0,deferredPrompt;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem('cardapioPossivel',JSON.stringify(state))}
function go(id){$$('.view').forEach(v=>v.classList.toggle('active',v.id===id));$$('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.go===id));scrollTo(0,0);if(id==='plan')renderPlan();if(id==='shopping')renderShopping();if(id==='organize')renderOrganize();if(id==='impossible')renderEmergency()}
function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),1800)}
function generate(){let seed=Math.floor(Math.random()*7);state.plan=DAYS.map((_,d)=>state.meals.map((type,m)=>{let pool=type==='snack'?RECIPES.snack:RECIPES[state.level],offset=type==='dinner'?7:m*3;return{...pool[(seed+d+offset)%pool.length],type,id:`${d}-${type}`}}));state.checked=[];state.shoppingQty={};save()}
function renderPlan(){if(!state.plan.length)generate();$('#planLevel').textContent=`NÍVEL ${LEVELS[state.level].label.toUpperCase()}`;$('#weekStrip').innerHTML=DAYS.map((d,i)=>`<button class="day-pill ${i===selectedDay?'active':''}" data-day="${i}"><small>${d}</small><b>${i+1}</b></button>`).join('');$('#dayPlan').innerHTML=state.plan[selectedDay].map(r=>`<article class="meal-card"><div class="meal-top"><small>${LABELS[r.type].toUpperCase()}</small></div><h3>${r.n}</h3><p>${r.i.join(' • ')}</p><div class="meal-actions"><button class="swap" data-id="${r.id}">↻ Trocar</button><button class="favorite ${state.favorites.includes(r.n)?'active':''}" data-name="${r.n}">♡ Favoritar</button></div></article>`).join('');$('#levelTip').innerHTML=`<b>Dica possível:</b> ${LEVELS[state.level].tip}`}
function swap(id){let [d,type]=id.split('-'),current=state.plan[d].find(x=>x.type===type),pool=type==='snack'?RECIPES.snack:RECIPES[state.level],idx=(pool.findIndex(x=>x.n===current.n)+1)%pool.length;Object.assign(current,{...pool[idx],type,id});save();renderPlan();toast('Refeição trocada')}
function shopping(){let owned=new Set(state.pantry.map(x=>x.toLowerCase()));let all=state.plan.flat().flatMap(r=>r.i).filter(x=>!owned.has(x.toLowerCase()));let counts={};all.forEach(x=>counts[x]=(counts[x]||0)+1);let cats={};Object.entries(counts).forEach(([n,q])=>{let c=/frango|carne|bife|peixe|tilápia|sardinha|atum/.test(n)?'Carnes e proteínas':/tomate|cenoura|alface|couve|batata|abóbora|abobrinha|berinjela|brócolis|vagem|banana|maçã|mamão|limão|mandioca|pimentão|beterraba|repolho|pepino|milho verde|hortelã|coentro/.test(n)?'Hortifruti':/queijo|leite|iogurte|manteiga|ovos|ricota/.test(n)?'Frios, ovos e laticínios':/pão/.test(n)?'Padaria':/óleo|azeite|molho de soja|leite de coco|sardinha em lata/.test(n)?'Óleos, molhos e enlatados':'Mercearia';(cats[c]??=[]).push({n,q})});return cats}
function renderShopping(){let cats=shopping(),items=Object.values(cats).flat(),done=items.filter(x=>state.checked.includes(x.n)).length;$('#shopProgress').style.width=`${items.length?done/items.length*100:0}%`;$('#shoppingList').innerHTML=Object.entries(cats).map(([c,a])=>`<section class="shop-group"><h3>${c}</h3>${a.map(x=>`<div class="shop-item ${state.checked.includes(x.n)?'done':''}"><input class="qty-input" type="text" inputmode="decimal" data-qty="${x.n}" value="${state.shoppingQty[x.n]||''}" placeholder="Qtd." aria-label="Quantidade de ${x.n}"><label><input type="checkbox" data-shop="${x.n}" ${state.checked.includes(x.n)?'checked':''}><span>${x.n}</span></label></div>`).join('')}</section>`).join('')||'<p>Sua despensa já cobre o cardápio. Que alívio!</p>'}
function renderOrganize(){$('#useFirstList').innerHTML=state.useFirst.map((x,i)=>`<li><span>${x}</span><button data-remove="useFirst-${i}">×</button></li>`).join('');$('#freezerList').innerHTML=state.freezer.map((x,i)=>`<li><span>${x.name}</span><b>${x.qty} porç.</b><button data-remove="freezer-${i}">×</button></li>`).join('')}
function renderEmergency(){$('#emergencyList').innerHTML=emergency.map(x=>`<div class="emergency-option"><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}
function textPlan(){return `*Cardápio Possível™ — Nível ${LEVELS[state.level].label}*\n\n`+state.plan.map((day,i)=>`*${DAYS[i]}*\n`+day.map(r=>`${LABELS[r.type]}: ${r.n}`).join('\n')).join('\n\n')+'\n\nSua casa não precisa estar perfeita. Precisa estar possível.'}
function textShopping(){let cats=shopping();return '*Lista de compras — Cardápio Possível™*\n\n'+Object.entries(cats).map(([c,a])=>`*${c}*\n`+a.map(x=>`☐ ${state.shoppingQty[x.n]?state.shoppingQty[x.n]+' — ':'_____ '}${x.n}`).join('\n')).join('\n\n')}
function share(text){window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank')}
$$('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));$$('[data-level]').forEach(b=>b.onclick=()=>{state.level=b.dataset.level;save();go('setup')});$$('[data-count]').forEach(b=>b.onclick=()=>{$('#peopleOut').value=state.people=Math.max(1,Math.min(20,state.people+Number(b.dataset.count)));save()});
$('#setupForm').onsubmit=e=>{e.preventDefault();state.meals=$$('[name=meals]:checked').map(x=>x.value);if(!state.meals.length)return toast('Escolha ao menos uma refeição');state.restrictions=$('#restrictions').value.trim();state.pantry=$('#pantry').value.split(',').map(x=>x.trim()).filter(Boolean);generate();go('plan')};
document.addEventListener('click',e=>{let b=e.target.closest('[data-day]');if(b){selectedDay=+b.dataset.day;renderPlan()}if(e.target.closest('.swap'))swap(e.target.closest('.swap').dataset.id);if(e.target.closest('.favorite')){let n=e.target.closest('.favorite').dataset.name;state.favorites.includes(n)?state.favorites=state.favorites.filter(x=>x!==n):state.favorites.push(n);save();renderPlan()}if(e.target.dataset.shop){state.checked=e.target.checked?[...new Set([...state.checked,e.target.dataset.shop])]:state.checked.filter(x=>x!==e.target.dataset.shop);save();renderShopping()}if(e.target.dataset.remove){let [k,i]=e.target.dataset.remove.split('-');state[k].splice(+i,1);save();renderOrganize()}});
document.addEventListener('input',e=>{if(e.target.dataset.qty){state.shoppingQty[e.target.dataset.qty]=e.target.value;save()}});
$$('.inline-form').forEach(f=>f.onsubmit=e=>{e.preventDefault();let inputs=[...f.querySelectorAll('input')],name=inputs[0].value.trim();if(!name)return;if(f.dataset.list==='freezer')state.freezer.push({name,qty:+inputs[1].value});else state.useFirst.push(name);inputs[0].value='';save();renderOrganize()});
$('#sharePlan').onclick=()=>share(textPlan());$('#shareShopping').onclick=()=>share(textShopping());
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false});$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null;$('#installBtn').hidden=true}};
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js');
$('#peopleOut').value=state.people;$('#restrictions').value=state.restrictions;$('#pantry').value=state.pantry.join(', ');$$('[name=meals]').forEach(x=>x.checked=state.meals.includes(x.value));renderEmergency();
