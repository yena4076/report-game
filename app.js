'use strict';
// Add a program and its modes here. Unimplemented programs have no launch action.
const PROGRAMS = [
 {id:'document',name:'한글 문서',icon:'가',color:'#eaf0fb',ink:'#517bb9',description:'한 장씩 채워가는 나만의 문서',modes:[{id:'copy',name:'보고서 따라쓰기',description:'회색 원문을 보며 직접 입력'},{id:'auto',name:'자동 보고서 작성',description:'아무 글자 키로 한 글자씩'}]},
 {id:'slides',name:'파워포인트',icon:'▣',color:'#faeee7',ink:'#be7852',description:'슬라이드로 펼치는 아이디어'},
 {id:'sheets',name:'엑셀',icon:'▦',color:'#e7efe6',ink:'#5e8663',description:'차곡차곡, 셀을 채우는 시간'},
 {id:'design',name:'캔바',icon:'◒',color:'#ece9f5',ink:'#8a78ac',description:'가볍게 즐기는 디자인 작업'},
 {id:'code',name:'코딩',icon:'⌘',color:'#e9edf0',ink:'#6c8190',description:'키보드 위에서 만들어가는 세계'}
];
// Original report text. Append entries to expand the report library.
const REPORTS = [
 {title:'도시 속 작은 정원의 가치',text:'도시 속 작은 정원의 가치\n\n1. 조사 배경\n도시의 일상은 빠르게 흘러간다. 건물 사이에 마련된 작은 정원은 바쁜 생활 속에서 잠시 숨을 고를 수 있는 공간이 된다. 본 보고서는 생활권 정원이 시민의 일상에 미치는 영향을 살펴보고자 한다.\n\n2. 주요 관찰 내용\n정원에는 계절마다 다른 풍경이 나타난다. 봄에는 어린잎이 돋아나고, 여름에는 나무 그늘이 보행자에게 휴식을 제공한다. 가까운 곳에서 자연의 변화를 관찰하는 경험은 주변 환경에 대한 관심으로 이어진다.\n\n또한 작은 정원은 이웃이 자연스럽게 만나는 장소로 활용된다. 함께 식물에 물을 주고 산책길을 정리하는 활동은 지역 안에서 느슨하지만 지속적인 관계를 형성한다.\n\n3. 개선 방향\n누구나 편하게 머물 수 있도록 벤치와 보행로를 관리할 필요가 있다. 식물의 종류를 설명하는 안내판을 설치하고, 주민이 참여하는 관리 일정을 마련하면 공간의 활용도를 높일 수 있다.\n\n4. 맺음말\n작은 정원의 가치는 면적만으로 판단하기 어렵다. 일상 가까이에 있는 자연을 꾸준히 돌보는 일이 도시의 생활 환경을 바꾸는 출발점이 될 것이다.'},
 {title:'효율적인 협업을 위한 기록 습관',text:'효율적인 협업을 위한 기록 습관\n\n1. 작성 목적\n업무의 흐름을 명확하게 공유하기 위해서는 간결하고 일관된 기록이 필요하다. 이 보고서는 팀이 함께 활용할 수 있는 기록 방법을 정리하고, 실제 업무에 적용할 수 있는 개선 방향을 제안한다.\n\n2. 현황 분석\n회의에서 정한 내용이 여러 채널에 흩어지면 담당자와 일정을 확인하는 데 시간이 걸린다. 결정의 이유가 남아 있지 않은 경우 같은 논의를 반복하기도 한다. 따라서 기록은 결과뿐 아니라 판단의 배경까지 담아야 한다.\n\n3. 실행 방안\n회의가 끝나면 결정 사항, 담당자, 완료 예정일을 한곳에 정리한다. 진행 중인 업무는 변경된 내용 위주로 짧게 갱신한다. 누구나 이해할 수 있는 제목을 사용하고 관련 자료를 함께 연결하면 정보를 찾기 쉬워진다.\n\n기록을 작성하는 시간도 업무 일정에 포함한다. 분량을 늘리기보다 다음 행동을 분명하게 표현하는 데 집중한다. 간단한 문장이라도 꾸준히 남기면 팀의 경험이 공동의 자산으로 쌓인다.\n\n4. 기대 효과\n기록 습관이 정착되면 업무 인수인계가 수월해지고 불필요한 확인이 줄어든다. 작은 기록을 지속하는 것이 안정적인 협업의 기반이 된다.'},
 {title:'지역 도서관 공간 활용 제안',text:'지역 도서관 공간 활용 제안\n\n1. 검토 배경\n도서관은 책을 읽는 공간이면서 지역의 다양한 활동을 연결하는 장소이다. 이용자의 생활 방식이 달라짐에 따라 조용한 열람 공간과 교류 공간을 함께 고려한 운영이 필요하다.\n\n2. 공간 구성 방향\n집중이 필요한 열람실은 소음을 줄이고 충분한 조명을 확보한다. 입구 가까운 곳에는 짧게 머물며 책을 살펴볼 수 있는 좌석을 배치한다. 활동 공간과 열람 공간 사이에는 완충 구역을 마련한다.\n\n3. 운영 프로그램\n주민이 읽은 책을 소개하는 작은 전시를 운영한다. 관심 분야가 비슷한 이용자가 만날 수 있도록 소규모 독서 모임을 지원한다. 처음 방문한 사람에게는 자료를 찾는 방법을 안내하는 시간을 제공한다.\n\n프로그램은 참여 인원만으로 평가하지 않는다. 이용자의 의견을 정기적으로 듣고, 운영 시간과 공간 배치를 조금씩 조정하는 과정이 중요하다.\n\n4. 결론\n도서관의 변화는 일상적인 이용 경험에서 시작된다. 편안하게 방문하고 다시 찾고 싶은 공간을 만드는 것을 운영의 중심에 두어야 한다.'}
];
const $ = id => document.getElementById(id);
const home=$('home'), editor=$('editor'), input=$('input'), ghost=$('ghost');
let mode=null, reportIndex=0, guideVisible=true, composing=false, autoText='', physicalAutoKey=false;
for(const p of PROGRAMS){
 const card=document.createElement('article');card.className='card '+(p.modes?'active':'soon');
 card.innerHTML=`<div class="card-head"><span class="program-icon" style="--tint:${p.color};--ink:${p.ink}" aria-hidden="true">${p.icon}</span><div><h3>${p.name}</h3><p>${p.description}</p></div>${p.modes?'<span class="badge">플레이 가능</span>':''}</div>`;
 if(p.modes){const modes=document.createElement('div');modes.className='modes';for(const m of p.modes){const button=document.createElement('button');button.className='mode';button.innerHTML=`<strong>${m.name}<span>↗</span></strong><small>${m.description}</small>`;button.onclick=()=>start(m.id);modes.append(button)}card.append(modes)}
 else{const badge=document.createElement('span');badge.className='badge';badge.textContent='준비 중';card.append(badge)}
 $('program-grid').append(card);
}
function currentReport(){return REPORTS[reportIndex%REPORTS.length]}
function start(nextMode){mode=nextMode;reportIndex=0;guideVisible=true;composing=false;physicalAutoKey=false;autoText='';input.value='';ghost.classList.remove('hidden-guide');home.hidden=true;editor.hidden=false;$('workspace').scrollTop=0;render();input.focus()}
function closeEditor(){mode=null;composing=false;autoText='';input.value='';$('ghost-prefix').textContent='';$('ghost-rest').textContent='';editor.hidden=true;home.hidden=false;document.querySelector('.mode').focus()}
$('close').onclick=closeEditor;
function render(){
 const report=currentReport();$('filename').textContent=report.title+'.hwp';
 $('report-status').textContent=`${mode==='copy'?'따라쓰기':'자동 작성'} · 보고서 ${reportIndex+1}`;
 $('count').textContent=Array.from(input.value).length+'자';
 $('ghost-prefix').textContent=input.value;
 $('ghost-rest').textContent=mode==='copy'?Array.from(report.text).slice(Array.from(input.value).length).join(''):'\u200b';
 input.style.height='auto';input.style.height=Math.max(930,input.scrollHeight,ghost.scrollHeight)+'px';
}
function checkCopy(){if(mode==='copy'&&!composing&&input.value===currentReport().text){reportIndex++;input.value='';$('workspace').scrollTop=0}render()}
input.addEventListener('compositionstart',()=>{composing=true});
input.addEventListener('compositionend',()=>{composing=false;if(mode==='copy')checkCopy();else if(mode==='auto'){input.value=autoText;render()}});
input.addEventListener('input',()=>{if(mode==='copy')checkCopy();else if(mode==='auto'){input.value=autoText;render()}});
function nextAutoCharacter(){
 let full=REPORTS.map(r=>r.text).join('\n\n');
 const cycle=full+'\n\n';
 autoText+=Array.from(cycle)[Array.from(autoText).length%Array.from(cycle).length];
 syncAuto();
}
function syncAuto(){input.value=autoText;let remaining=Array.from(autoText).length;reportIndex=0;while(remaining>Array.from(REPORTS[reportIndex%REPORTS.length].text).length){remaining-=Array.from(REPORTS[reportIndex%REPORTS.length].text).length+2;reportIndex++}render();input.setSelectionRange(input.value.length,input.value.length);const workspace=$('workspace'),caret=$('ghost-rest').getBoundingClientRect(),view=workspace.getBoundingClientRect();if(caret.bottom>view.bottom-60)workspace.scrollTop+=caret.bottom-view.bottom+90;else if(caret.top<view.top+35)workspace.scrollTop-=view.top+35-caret.top}
document.addEventListener('keydown',event=>{
 if(!mode)return;
 if(event.altKey&&event.code==='KeyQ'){event.preventDefault();if(mode==='copy'&&!event.repeat){guideVisible=!guideVisible;ghost.classList.toggle('hidden-guide',!guideVisible)}return}
 if(mode!=='auto'||event.ctrlKey||event.metaKey||event.altKey||event.target!==input)return;
 if(event.key==='Backspace'){event.preventDefault();autoText=Array.from(autoText).slice(0,-1).join('');syncAuto();return}
 if(event.key.length===1||/^(Key[A-Z]|Digit[0-9]|Numpad[0-9])$/.test(event.code)){event.preventDefault();physicalAutoKey=true;nextAutoCharacter()}
 else if(event.key==='Enter'||event.key==='Delete'){event.preventDefault()}
});
// Virtual keyboards use beforeinput without a physical keydown event.
document.addEventListener('keyup',()=>{physicalAutoKey=false});
input.addEventListener('blur',()=>{physicalAutoKey=false});
input.addEventListener('beforeinput',event=>{if(mode!=='auto')return;event.preventDefault();if(physicalAutoKey)return;if(event.inputType==='deleteContentBackward'){autoText=Array.from(autoText).slice(0,-1).join('');syncAuto()}else if(event.inputType==='insertText'||event.inputType==='insertCompositionText')nextAutoCharacter()});
input.addEventListener('paste',event=>{if(mode==='auto')event.preventDefault()});
window.addEventListener('resize',()=>{if(mode)render()});
