const tabs=document.querySelectorAll('.tab');
const prompt=document.getElementById('prompt');
const result=document.getElementById('result');
const btn=document.getElementById('generateBtn');
let mode='image';

tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    mode=tab.dataset.mode;
    btn.innerHTML=mode==='image'?'Generate <span>✦</span>':'Generate Video <span>✦</span>';
    prompt.placeholder=mode==='image'
      ? 'Example: A cinematic futuristic city at night, neon lights, ultra detailed...'
      : 'Example: A cinematic drone shot flying over a futuristic city at sunset...';
  });
});

btn.addEventListener('click',()=>{
  const text=prompt.value.trim();
  if(!text){alert('Please enter a prompt first.');return;}
  const style=document.getElementById('style').value;
  const ratio=document.getElementById('ratio').value;
  result.innerHTML=`
    <div class="generated">
      <div>
        <div class="spark">${mode==='image'?'🖼️':'🎬'}</div>
        <h3>${mode==='image'?'AI Image':'AI Video'} Preview</h3>
        <p>Prompt: ${escapeHtml(text)}</p>
        <p>Style: ${style} · Ratio: ${ratio}</p>
        <small>This demo UI is ready for an AI API connection.</small>
      </div>
    </div>`;
});

function escapeHtml(s){
  return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
