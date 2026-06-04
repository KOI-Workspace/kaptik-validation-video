/**
 * Kaptik Weverse Demo — 자막 타이머 + 문화맥락 해설
 */

const subtitles = [
  {"start":  0.00, "end":  3.32, "speaker": "Jin",
    "en": "I didn't play game that much during this tour in my room.",
    "id": "Aku tidak terlalu banyak bermain game di kamarku selama tur ini.",
    "es": "No jugué mucho en mi habitación durante esta gira."},
  {"start":  3.32, "end":  5.16, "speaker": "Jungkook",
    "en": "Elden Ring, Elden Ring",
    "id": "Elden Ring, Elden Ring.",
    "es": "Elden Ring, Elden Ring."},
  {"start":  5.16, "end":  6.76, "speaker": "Jin",
    "en": "I didn't play PlayStation that much,",
    "id": "Aku tidak terlalu banyak bermain PlayStation,",
    "es": "No jugué mucho a la PlayStation,"},
  {"start":  6.76, "end":  8.36, "speaker": "Jin",
    "en": "but I finished the game just inside the concert venue.",
    "id": "tapi aku menyelesaikan Elden Ring hanya di venue konser.",
    "es": "pero terminé Elden Ring solo dentro del recinto del concierto."},
  {"start":  8.36, "end": 13.92, "speaker": "Jungkook",
    "en": "That's right. Jin hyung only played the game he introduced me at our concert venue,",
    "id": "Benar. Jin hyung hanya memainkan game yang dia perkenalkan kepadaku di venue konser kami,",
    "es": "Es verdad. Jin hyung solo jugó el juego que me presentó en el recinto del concierto,"},
  {"start": 13.92, "end": 20.76, "speaker": "Jungkook",
    "en": "and now he only has the boss left.",
    "id": "dan sekarang dia hanya tinggal melawan boss terakhir.",
    "es": "y ahora solo le queda el jefe final."},
  {"start": 20.76, "end": 22.40, "speaker": "Jin",
    "en": "Even so, I think I played for about 100 hours.",
    "id": "Meski begitu, sepertinya aku sudah bermain sekitar 100 jam.",
    "es": "Aun así, creo que jugué unas 100 horas."},
  {"start": 22.40, "end": 24.04, "speaker": "Jin",
    "en": "Because the waiting time is so long.",
    "id": "Soalnya waktu menunggunya sangat lama.",
    "es": "Porque el tiempo de espera es muy largo."},
  {"start": 24.04, "end": 25.58, "speaker": "Jin",
    "en": "I need to do my hair and make up,",
    "id": "Aku harus menata rambut dan makeup-ku,",
    "es": "Tengo que hacerme el pelo y el maquillaje,"},
  {"start": 25.58, "end": 27.12, "speaker": "Jin",
    "en": "and wait for your hair and make up too.",
    "id": "lalu menunggu rambut dan makeup-mu selesai juga.",
    "es": "y luego esperar a que te hagan el tuyo también."},
  {"start": 27.12, "end": 30.56, "speaker": "Jungkook",
    "en": "But that's what makes you amazing, hyung.",
    "id": "Tapi justru itu yang membuatmu luar biasa, hyung.",
    "es": "Pero eso es increíble, hyung."},
  {"start": 30.56, "end": 33.76, "speaker": "Jin",
    "en": "In what way?",
    "id": "Dalam hal apa?",
    "es": "¿En qué sentido?"},
  {"start": 33.92, "end": 40.28, "speaker": "Jungkook",
    "en": "Because once we're at the venue, this is our main job, you know.",
    "id": "Karena begitu kita sudah berada di venue, ini pekerjaan utama kita, kan.",
    "es": "Porque una vez que estamos en el recinto, este es nuestro trabajo principal, ¿sabes?"},
  {"start": 40.28, "end": 42.00, "speaker": "Jin",
    "en": "Right.",
    "id": "Benar.",
    "es": "Claro."},
  {"start": 42.00, "end": 47.12, "speaker": "Jungkook",
    "en": "Since it's our main job… I mean, hyung, it's not like you did anything wrong.",
    "id": "Karena ini pekerjaan utama kita… maksudku, hyung, bukan berarti kamu melakukan sesuatu yang salah.",
    "es": "Como es nuestro trabajo principal… o sea, hyung, no es que hayas hecho algo mal."},
  {"start": 47.12, "end": 52.24, "speaker": "Jungkook",
    "en": "But the reason I think you're amazing is that you really finish all your own preparations first,",
    "id": "Tapi alasan aku merasa kamu luar biasa adalah karena kamu benar-benar menyelesaikan semua persiapanmu dulu,",
    "es": "Pero la razón por la que me pareces increíble es que realmente terminas todos tus preparativos primero,"},
  {"start": 52.24, "end": 58.08, "speaker": "Jungkook",
    "en": "and then you set aside separate time to play games.",
    "id": "lalu menyisihkan waktu khusus untuk bermain game.",
    "es": "y luego apartas tiempo específicamente para jugar."},
  {"start": 58.08, "end": 63.20, "speaker": "Jin",
    "en": "I warm up my voice, stretch my body, work out…",
    "id": "Aku pemanasan suara, pemanasan tubuh, olahraga…",
    "es": "Caliento la voz, estiro el cuerpo, hago ejercicio…"},
  {"start": 63.20, "end": 65.34, "speaker": "Jungkook",
    "en": "Exactly. You work out and do everything you need to do,",
    "id": "Tepat. Kamu olahraga dan melakukan semua yang perlu kamu lakukan,",
    "es": "Exacto. Haces ejercicio y haces todo lo que tienes que hacer,"},
  {"start": 65.34, "end": 67.48, "speaker": "Jungkook",
    "en": "and still manage to play games too.",
    "id": "tapi kamu tetap sempat bermain game juga.",
    "es": "pero aun así también logras jugar."},
  {"start": 67.48, "end": 71.36, "speaker": "Jungkook",
    "en": "You do it all. Jin hyung really does everything.",
    "id": "Kamu melakukan semuanya. Jin hyung benar-benar melakukan semuanya.",
    "es": "Lo haces todo. Jin hyung de verdad lo hace todo."},
  {"start": 71.36, "end": 73.50, "speaker": "Jin",
    "en": "You just have to get ready quickly.",
    "id": "Tinggal bersiap-siap dengan cepat saja.",
    "es": "Solo hay que prepararse rápido."},
  {"start": 73.50, "end": 76.80, "speaker": "Jungkook",
    "en": "Is that even possible? It's not easy.",
    "id": "Memangnya bisa begitu? Itu tidak mudah.",
    "es": "¿Eso se puede hacer? No es fácil."},
  {"start": 76.80, "end": 80.76, "speaker": "Jin",
    "en": "I just start getting ready earlier than everyone else,",
    "id": "Aku mulai bersiap lebih awal daripada yang lain,",
    "es": "Simplemente empiezo a prepararme antes que los demás,"},
  {"start": 80.76, "end": 84.72, "speaker": "Jin",
    "en": "and get everything done quickly, one after another.",
    "id": "lalu menyelesaikan semuanya dengan cepat, satu per satu.",
    "es": "y termino todo rápido, una cosa tras otra."}
];

// ── 문화맥락 해설 데이터 ──
const ANNOTATIONS = {
  'Elden Ring': {
    color: '#A78BFA',
    title: 'Elden Ring',
    content: 'FromSoftware가 2022년 출시한 오픈월드 액션 RPG. 극도로 높은 난이도로 유명하며, "소울라이크" 장르의 대표작. 진이 월드투어 중 대기 시간에 100시간 넘게 플레이했다고 언급해 팬들 사이에서 화제가 됨.',
  },
  'PlayStation': {
    color: '#60A5FA',
    title: 'PlayStation',
    content: 'Sony의 게임 콘솔 브랜드. 진이 언급한 "PlayStation"은 PS5를 지칭. BTS 멤버들이 자주 언급하는 게임 플랫폼으로, 팬들에게 친숙한 문화 코드.',
  },
  'hyung': {
    color: '#F472B6',
    title: 'hyung (형)',
    content: '한국어로 남성이 자신보다 나이 많은 남성을 부르는 호칭. 정국이 진을 "Jin hyung"이라고 부르는 것은 나이 차이를 존중하는 한국 문화의 표현. 팬들 사이에서도 영어권 팬이 그대로 "hyung"이라는 단어를 사용할 만큼 보편화됨.',
  },
};

const SPEAKER_COLORS = {
  'RM':       '#7B8CFF',
  'Jin':      '#FF7EB3',
  'Suga':     '#FFB347',
  'j-hope':   '#FFE066',
  'Jimin':    '#FF6B6B',
  'V':        '#4ECDC4',
  'Jungkook': '#5BC8FF',
};

const LANG_FLAGS = {
  'en':'🇺🇸','id':'🇮🇩','ja':'🇯🇵','zh-CN':'🇨🇳','zh-TW':'🇹🇼',
  'es':'🇪🇸','pt':'🇧🇷','fr':'🇫🇷','de':'🇩🇪','ar':'🇸🇦',
  'hi':'🇮🇳','th':'🇹🇭','vi':'🇻🇳','ms':'🇲🇾','tl':'🇵🇭',
  'ko':'🇰🇷','ru':'🇷🇺','tr':'🇹🇷','pl':'🇵🇱','nl':'🇳🇱',
  'sv':'🇸🇪','da':'🇩🇰','fi':'🇫🇮','no':'🇳🇴','cs':'🇨🇿',
  'hu':'🇭🇺','ro':'🇷🇴','uk':'🇺🇦','he':'🇮🇱','fa':'🇮🇷',
};

// ── DOM 참조 ──
const startBtn            = document.getElementById('startBtn');
const resetBtn            = document.getElementById('resetBtn');
const subtitleHistory     = document.getElementById('subtitleHistory');
const subtitleArea        = document.getElementById('subtitleArea');
const scrollToTopBtn      = document.getElementById('scrollToTopBtn');
const langSelect          = document.getElementById('langSelect');
const infoBtn             = document.getElementById('infoBtn');
const infoPanel           = document.getElementById('infoPanel');
const infoBtnFlag         = document.getElementById('infoBtnFlag');
const currentSubtitleText = document.getElementById('currentSubtitleText');

// ── 정보 패널 토글 ──
infoBtn.addEventListener('click', () => {
  const isOpen = infoPanel.classList.toggle('open');
  infoBtn.classList.toggle('open', isOpen);
  infoBtn.setAttribute('aria-expanded', isOpen);
});

// ── 언어 변경 ──
let currentLang = 'en';
let needsFullRerender = false;

langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  infoBtnFlag.textContent = LANG_FLAGS[currentLang] || '🌐';
  needsFullRerender = true;
  renderCurrent(history.length > 0 ? history[history.length - 1] : null);
  renderHistoryPanel();
  needsFullRerender = false;
});

// ── 스크롤 감지 ──
let isUserScrolled = false;

subtitleArea.addEventListener('scroll', () => {
  const atTop = subtitleArea.scrollTop <= 20;
  isUserScrolled = !atTop;
  scrollToTopBtn.classList.toggle('visible', isUserScrolled);
});

scrollToTopBtn.addEventListener('click', () => {
  subtitleArea.scrollTop = 0;
  isUserScrolled = false;
  scrollToTopBtn.classList.remove('visible');
});

// ── 재생 상태 ──
let startTime     = null;
let timerInterval = null;
let isRunning     = false;
let pausedAt      = 0;

startBtn.addEventListener('click', () => {
  if (!isRunning) startSubtitles();
  else stopSubtitles();
});

resetBtn.addEventListener('click', clearSubtitles);

function startSubtitles() {
  isRunning = true;
  startTime = Date.now() - pausedAt * 1000;
  startBtn.textContent = '⏹ Stop';
  startBtn.classList.add('running');
  timerInterval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    updateSubtitle(elapsed);
    if (subtitles.length > 0) {
      const last = subtitles[subtitles.length - 1];
      if (elapsed > last.end + 1) stopSubtitles();
    }
  }, 80);
}

function stopSubtitles() {
  isRunning = false;
  pausedAt = (Date.now() - startTime) / 1000;
  clearInterval(timerInterval);
  timerInterval = null;
  startBtn.textContent = '▶ Start';
  startBtn.classList.remove('running');
}

function clearSubtitles() {
  history = [];
  lastSubtitleStart = -1;
  pausedAt = 0;
  isUserScrolled = false;
  subtitleHistory.innerHTML = '';
  currentSubtitleText.innerHTML = '';
  scrollToTopBtn.classList.remove('visible');
  activeContextKey = null;
}

// ── 자막 히스토리 ──
const MAX_HISTORY = 20;
let history = [];
let lastSubtitleStart = -1;
let activeContextKey = null;

function updateSubtitle(elapsed) {
  const current = subtitles.find(s => elapsed >= s.start && elapsed < s.end);
  if (!current) return;
  if (current.start === lastSubtitleStart) return;
  lastSubtitleStart = current.start;
  history.push(current);
  if (history.length > MAX_HISTORY) history.shift();
  renderCurrent(current);
  renderHistoryPanel();
}

// ── 텍스트에서 어노테이션 키워드를 하이라이트 span으로 변환 ──
function buildAnnotatedHtml(text) {
  let result = escapeHtml(text);
  Object.keys(ANNOTATIONS).forEach(keyword => {
    const color = ANNOTATIONS[keyword].color;
    const escaped = escapeHtml(keyword);
    const regex = new RegExp(escaped, 'g');
    result = result.replace(regex,
      `<span class="annotated-word" data-key="${escaped}" style="color:${color};border-bottom:1.5px solid ${color}40;cursor:pointer">${escaped}</span>`
    );
  });
  return result;
}

// ── 최신 자막 패널 업데이트 ──
function renderCurrent(item) {
  if (!item) { currentSubtitleText.innerHTML = ''; return; }
  const text = item[currentLang] || item.en || '';
  const speaker = item.speaker || '';
  let html = '';
  if (speaker) {
    const color = SPEAKER_COLORS[speaker] || '#aaa';
    html += `<span class="current-speaker" style="color:${color}">${escapeHtml(speaker)}</span> `;
  }
  html += buildAnnotatedHtml(text);

  currentSubtitleText.style.opacity = '0';
  currentSubtitleText.innerHTML = html;

  // 어노테이션 클릭 이벤트 바인딩
  currentSubtitleText.querySelectorAll('.annotated-word').forEach(el => {
    el.addEventListener('click', () => showContext(el.dataset.key));
  });

  requestAnimationFrame(() => {
    currentSubtitleText.style.transition = 'opacity 0.2s ease-out';
    currentSubtitleText.style.opacity = '1';
  });
}

// ── 문화맥락 해설 카드 표시 (FLIP으로 히스토리 아래로 밀기) ──
function showContext(key) {
  if (activeContextKey === key) {
    removeContextCard();
    return;
  }
  removeContextCard();
  activeContextKey = key;

  const annotation = ANNOTATIONS[key];
  if (!annotation) return;

  const existingEls = [...subtitleHistory.children];
  const firstTops = existingEls.map(el => el.getBoundingClientRect().top);

  const card = document.createElement('div');
  card.className = 'context-card';
  card.dataset.contextKey = key;
  card.innerHTML = `
    <div class="context-card-header">
      <span class="context-card-title" style="color:${annotation.color}">${escapeHtml(annotation.title)}</span>
      <button class="context-card-close" aria-label="닫기">✕</button>
    </div>
    <p class="context-card-body">${escapeHtml(annotation.content)}</p>
  `;
  card.style.opacity = '0';
  subtitleHistory.insertBefore(card, subtitleHistory.firstChild);

  card.querySelector('.context-card-close').addEventListener('click', removeContextCard);

  // FLIP 슬라이드 다운
  const lastTops = existingEls.map(el =>
    el.parentElement ? el.getBoundingClientRect().top : null
  );
  existingEls.forEach((el, i) => {
    if (!el.parentElement || lastTops[i] === null) return;
    const delta = firstTops[i] - lastTops[i];
    if (Math.abs(delta) < 0.5) return;
    el.style.transition = 'none';
    el.style.transform = `translateY(${delta}px)`;
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      existingEls.forEach(el => {
        if (!el.parentElement) return;
        el.style.transition = 'transform 0.35s ease-out';
        el.style.transform = '';
      });
      card.style.transition = 'opacity 0.25s ease-out';
      card.style.opacity = '1';
    });
  });

  setTimeout(() => {
    existingEls.forEach(el => {
      if (!el.parentElement) return;
      el.style.transition = '';
      el.style.transform = '';
    });
  }, 400);
}

function removeContextCard() {
  activeContextKey = null;
  const existing = subtitleHistory.querySelector('.context-card');
  if (!existing) return;

  const existingEls = [...subtitleHistory.children].filter(el => el !== existing);
  const firstTops = existingEls.map(el => el.getBoundingClientRect().top);

  existing.remove();

  const lastTops = existingEls.map(el =>
    el.parentElement ? el.getBoundingClientRect().top : null
  );
  existingEls.forEach((el, i) => {
    if (!el.parentElement || lastTops[i] === null) return;
    const delta = firstTops[i] - lastTops[i];
    if (Math.abs(delta) < 0.5) return;
    el.style.transition = 'none';
    el.style.transform = `translateY(${delta}px)`;
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      existingEls.forEach(el => {
        if (!el.parentElement) return;
        el.style.transition = 'transform 0.3s ease-out';
        el.style.transform = '';
      });
    });
  });

  setTimeout(() => {
    existingEls.forEach(el => {
      if (!el.parentElement) return;
      el.style.transition = '';
      el.style.transform = '';
    });
  }, 350);
}

// ── 히스토리 패널 렌더링 (최신-1부터 역순) ──
function getLineClass(i) {
  if (i === 0) return 'subtitle-line prev-1';
  if (i <= 3)  return 'subtitle-line prev-2';
  return 'subtitle-line';
}

function createSubtitleEl(item, posIndex, showSpeaker) {
  const p = document.createElement('p');
  p.className = getLineClass(posIndex);
  const text = item[currentLang] || item.en || '';
  const speaker = item.speaker || '';
  let html = '';
  if (showSpeaker && speaker) {
    const color = SPEAKER_COLORS[speaker] || '#aaa';
    html += `<span class="speaker" style="color:${color}">${escapeHtml(speaker)}</span>&ensp;`;
  }
  html += buildAnnotatedHtml(text);
  p.innerHTML = html;
  p.querySelectorAll('.annotated-word').forEach(el => {
    el.addEventListener('click', () => showContext(el.dataset.key));
  });
  return p;
}

function renderHistoryPanel() {
  // 최신 자막(history[last])은 current-panel에 표시 → 히스토리는 나머지
  const prevItems = history.slice(0, -1);
  const reversed  = [...prevItems].reverse();

  const contextCard = subtitleHistory.querySelector('.context-card');

  if (subtitleHistory.querySelectorAll('p').length === 0 || needsFullRerender) {
    // 전체 재렌더링
    subtitleHistory.innerHTML = '';
    if (contextCard) subtitleHistory.appendChild(contextCard);
    reversed.forEach((item, i) => {
      const prevItem = i > 0 ? reversed[i - 1] : null;
      const showSpeaker = !prevItem || prevItem.speaker !== item.speaker;
      subtitleHistory.appendChild(createSubtitleEl(item, i, showSpeaker));
    });
    if (!isUserScrolled) subtitleArea.scrollTop = 0;
    return;
  }

  if (prevItems.length === 0) return;

  // FLIP: 이전 "current"가 히스토리 맨 위로 내려옴
  const newHistoryItem = prevItems[prevItems.length - 1];
  const existingEls = [...subtitleHistory.querySelectorAll('p')];
  const firstTops = existingEls.map(el => el.getBoundingClientRect().top);

  const prevHistoryItem = prevItems.length >= 2 ? prevItems[prevItems.length - 2] : null;
  const showSpeaker = !prevHistoryItem || prevHistoryItem.speaker !== newHistoryItem.speaker;
  const newEl = createSubtitleEl(newHistoryItem, 0, showSpeaker);
  newEl.style.opacity = '0';

  // context card 바로 뒤 (또는 맨 앞)에 삽입
  const insertRef = contextCard ? contextCard.nextSibling : subtitleHistory.firstChild;
  subtitleHistory.insertBefore(newEl, insertRef);

  existingEls.forEach((el, i) => {
    el.className = getLineClass(i + 1);
  });

  // MAX_HISTORY 초과 제거
  const allPs = [...subtitleHistory.querySelectorAll('p')];
  while (allPs.length > MAX_HISTORY) {
    subtitleHistory.removeChild(allPs[allPs.length - 1]);
    allPs.pop();
  }

  // FLIP Play
  const lastTops = existingEls.map(el =>
    el.parentElement ? el.getBoundingClientRect().top : null
  );
  existingEls.forEach((el, i) => {
    if (!el.parentElement || lastTops[i] === null) return;
    const delta = firstTops[i] - lastTops[i];
    if (Math.abs(delta) < 0.5) return;
    el.style.transition = 'none';
    el.style.transform = `translateY(${delta}px)`;
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      existingEls.forEach(el => {
        if (!el.parentElement) return;
        el.style.transition = 'transform 0.35s ease-out';
        el.style.transform = '';
      });
      newEl.style.transition = 'opacity 0.3s ease-out';
      newEl.style.opacity = '1';
    });
  });

  setTimeout(() => {
    existingEls.forEach(el => {
      if (!el.parentElement) return;
      el.style.transition = '';
      el.style.transform = '';
    });
  }, 400);

  if (!isUserScrolled) subtitleArea.scrollTop = 0;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
