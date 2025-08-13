(function () {
  const grid = document.getElementById('rr-grid');
  const cols = [
    document.getElementById('col-1'),
    document.getElementById('col-2'),
    document.getElementById('col-3'),
    document.getElementById('col-4'),
  ];
  const tpl = document.getElementById('tpl-card');
  if (!grid || cols.some(c => !c) || !tpl) return;

  const NUM_ITEMS = 20;
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  for (let i = 0; i < NUM_ITEMS; i += 1) {
    const colIndex = i % cols.length; // round-robin: 0,1,2,3,0,1,2,3,...
    const card = tpl.content.firstElementChild.cloneNode(true);
    const media = card.querySelector('.media');
    const title = card.querySelector('.title');
    const desc = card.querySelector('.desc');
    media.style.height = `${rand(240, 520)}px`;
    title.textContent = `Ad ${i + 1}`;
    desc.textContent = `This is a mock ad placed in column ${colIndex + 1}.`;
    cols[colIndex].appendChild(card);
  }
})();

