/**
 * Kaptik Weverse Demo
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

const ANNOTATIONS = {
  'Elden Ring': {
    color: '#A78BFA',
    title: 'Elden Ring',
    content: 'FromSoftware가 2022년 출시한 오픈월드 액션 RPG. 극도로 높은 난이도로 유명한 "소울라이크" 장르의 대표작. 진이 월드투어 대기 시간에 100시간 넘게 플레이했다고 밝혀 팬들 사이에서 화제가 됨.',
  },
};

const SPEAKER_COLORS = {
  'RM': '#7B8CFF', 'Jin': '#FF7EB3', 'Suga': '#FFB347',
  'j-hope': '#FFE066', 'Jimin': '#FF6B6B', 'V': '#4ECDC4', 'Jungkook': '#5BC8FF',
};

const LANG_FLAGS = {
  'en':'🇺🇸','id':'🇮🇩','ja':'🇯🇵','zh-CN':'🇨🇳','zh-TW':'🇹🇼',
  'es':'🇪🇸','pt':'🇧🇷','fr':'🇫🇷','de':'🇩🇪','ar':'🇸🇦',
  'hi':'🇮🇳','th':'🇹🇭','vi':'🇻🇳','ms':'🇲🇾','tl':'🇵🇭',
  'ko':'🇰🇷','ru':'🇷🇺','tr':'🇹🇷','pl':'🇵🇱','nl':'🇳🇱',
  'sv':'🇸🇪','da':'🇩🇰','fi':'🇫🇮','no':'🇳🇴','cs':'🇨🇿',
  'hu':'🇭🇺','ro':'🇷🇴','uk':'🇺🇦','he':'🇮🇱','fa':'🇮🇷',
};

// ── DOM ──
const startBtn             = document.getElementById('startBtn');
const resetBtn             = document.getElementById('resetBtn');
const subtitleHistory      = document.getElementById('subtitleHistory');
const subtitleArea         = document.getElementById('subtitleArea');
const scrollToBottomBtn    = document.getElementById('scrollToBottomBtn');
const langSelect           = document.getElementById('langSelect');
const langFab              = document.getElementById('langFab');
const langPanel            = document.getElementById('langPanel');
const headerPanel          = document.getElementById('headerPanel');
const headerDragBar        = document.getElementById('headerDragBar');
const headerSubtitleLines  = document.getElementById('headerSubtitleLines');
const expandToggleBtn      = document.getElementById('expandToggleBtn');
const contextCardContainer = document.getElementById('contextCardContainer');
const contextCardInner     = document.getElementById('contextCardInner');

// ── 언어 팝업 ──
langFab.addEventListener('click', (e) => {
  e.stopPropagation();
  langPanel.classList.toggle('open');
});
document.addEventListener('click', () => langPanel.classList.remove('open'));
langPanel.addEventListener('click', (e) => e.stopPropagation());

let currentLang = 'en';
langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  rerenderAll();
});

// ── 헤더 위치 + 높이 ──
let headerTop    = 0;
let headerHeight = 0; // 콘텐츠 기반 자동 계산
const MIN_TOP    = 0;
const MAX_TOP    = () => window.innerHeight * 0.55;

let isExpanded = false;

function measureAndApplyHeight(animate = false) {
  // 콘텐츠 높이 기반으로 헤더 높이 계산
  headerPanel.style.height = 'auto';
  const naturalH = headerPanel.offsetHeight;

  if (animate) {
    const prevH = headerHeight || naturalH;
    headerPanel.classList.add('animating');
    headerPanel.style.height = prevH + 'px';
    headerPanel.offsetHeight; // force reflow
    headerPanel.style.height = naturalH + 'px';
    subtitleArea.style.transition = 'top 0.32s cubic-bezier(0.4,0,0.2,1)';
    subtitleArea.style.top = (headerTop + naturalH) + 'px';
    setTimeout(() => {
      headerPanel.classList.remove('animating');
      headerPanel.style.height = 'auto';
      subtitleArea.style.transition = '';
      rerenderHistory();
    }, 340);
  } else {
    subtitleArea.style.top = (headerTop + naturalH) + 'px';
  }

  headerHeight = naturalH;
  contextCardContainer.style.top = (headerTop + naturalH) + 'px';
}

function applyHeaderPosition() {
  headerPanel.style.top = headerTop + 'px';
  subtitleArea.style.top = (headerTop + headerHeight) + 'px';
  contextCardContainer.style.top = (headerTop + headerHeight) + 'px';
}

// 확장/축소 토글
expandToggleBtn.addEventListener('click', () => {
  isExpanded = !isExpanded;
  headerPanel.classList.toggle('expanded', isExpanded);
  renderHeaderPanel();
  measureAndApplyHeight(true);
});

// 드래그로 위치 이동 (상단 drag bar)
let isMoveGrab   = false;
let moveStartY   = 0;
let moveStartTop = 0;

headerDragBar.addEventListener('touchstart', (e) => {
  isMoveGrab   = true;
  moveStartY   = e.touches[0].clientY;
  moveStartTop = headerTop;
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  if (!isMoveGrab) return;
  const delta = e.touches[0].clientY - moveStartY;
  headerTop = Math.max(MIN_TOP, Math.min(MAX_TOP(), moveStartTop + delta));
  applyHeaderPosition();
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', () => { isMoveGrab = false; });

function getVisibleCount() {
  return isExpanded ? 3 : 1;
}

// ── 스크롤 ──
let isUserScrolled = false;
subtitleArea.addEventListener('scroll', () => {
  const atBottom = subtitleArea.scrollTop >= subtitleArea.scrollHeight - subtitleArea.clientHeight - 20;
  isUserScrolled = !atBottom;
  scrollToBottomBtn.classList.toggle('visible', isUserScrolled);
});
scrollToBottomBtn.addEventListener('click', () => {
  subtitleArea.scrollTop = subtitleArea.scrollHeight;
  isUserScrolled = false;
  scrollToBottomBtn.classList.remove('visible');
});

// ── 재생 ──
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
    if (elapsed > subtitles[subtitles.length - 1].end + 1) stopSubtitles();
  }, 80);
}

function stopSubtitles() {
  isRunning = false;
  pausedAt  = (Date.now() - startTime) / 1000;
  clearInterval(timerInterval);
  timerInterval = null;
  startBtn.textContent = '▶ Start';
  startBtn.classList.remove('running');
}

function clearSubtitles() {
  history = [];
  lastSubtitleStart  = -1;
  historyRenderedUpTo = -1;
  pausedAt           = 0;
  isUserScrolled     = false;
  subtitleHistory.innerHTML     = '';
  headerSubtitleLines.innerHTML = '';
  scrollToBottomBtn.classList.remove('visible');
  hideContext();
}

// ── 자막 ──
const MAX_HISTORY = 60;
let history            = [];
let lastSubtitleStart  = -1;
let historyRenderedUpTo = -1;

function updateSubtitle(elapsed) {
  const current = subtitles.find(s => elapsed >= s.start && elapsed < s.end);
  if (!current || current.start === lastSubtitleStart) return;
  lastSubtitleStart = current.start;
  history.push(current);
  renderHeaderPanel();
  measureAndApplyHeight(false);
  appendNewHistoryItems();
}

// ── 어노테이션 ──
function buildAnnotatedHtml(text) {
  let result = escapeHtml(text);
  Object.keys(ANNOTATIONS).forEach(keyword => {
    const ann = ANNOTATIONS[keyword];
    const esc = escapeHtml(keyword);
    result = result.replace(
      new RegExp(esc, 'g'),
      `<span class="annotated-word" data-key="${esc}" style="color:${ann.color};text-decoration-color:${ann.color}55">${esc}</span>`
    );
  });
  return result;
}

function bindAnnotationClicks(el) {
  el.querySelectorAll('.annotated-word').forEach(span => {
    span.addEventListener('click', () => showContext(span.dataset.key));
  });
}

// ── 헤더 패널 렌더 ──
function renderHeaderPanel() {
  const count = getVisibleCount();
  const items = history.slice(-count);
  headerSubtitleLines.innerHTML = '';
  items.forEach((item, i) => {
    const isLatest = i === items.length - 1;
    const p = document.createElement('p');
    p.className = isLatest ? 'current-line' : 'current-line current-line-prev';
    const text    = item[currentLang] || item.en || '';
    const speaker = item.speaker || '';
    let html = '';
    if (speaker) {
      const color = SPEAKER_COLORS[speaker] || '#aaa';
      html += `<span class="current-speaker" style="color:${color}">${escapeHtml(speaker)}</span> `;
    }
    html += buildAnnotatedHtml(text);
    p.innerHTML = html;
    bindAnnotationClicks(p);
    headerSubtitleLines.appendChild(p);
  });
}

// ── 히스토리 패널: 새 항목 하단에 추가 ──
function appendNewHistoryItems() {
  const historyEndIndex = history.length - 1;

  for (let i = historyRenderedUpTo + 1; i <= historyEndIndex; i++) {
    if (i < 0) continue;
    const item        = history[i];
    const showSpeaker = i === 0 || history[i].speaker !== history[i - 1].speaker;
    const p = createHistoryEl(item, showSpeaker);
    subtitleHistory.appendChild(p);
    historyRenderedUpTo = i;
  }

  if (!isUserScrolled) {
    subtitleArea.scrollTop = subtitleArea.scrollHeight;
  }
}

function rerenderHistory() {
  subtitleHistory.innerHTML  = '';
  historyRenderedUpTo        = -1;
  const historyEndIndex = history.length - 1;
  for (let i = 0; i <= historyEndIndex; i++) {
    const item        = history[i];
    const showSpeaker = i === 0 || history[i].speaker !== history[i - 1].speaker;
    subtitleHistory.appendChild(createHistoryEl(item, showSpeaker));
    historyRenderedUpTo = i;
  }
  if (!isUserScrolled) subtitleArea.scrollTop = subtitleArea.scrollHeight;
}

function rerenderAll() {
  renderHeaderPanel();
  measureAndApplyHeight(false);
  rerenderHistory();
}

function createHistoryEl(item, showSpeaker) {
  const p = document.createElement('p');
  p.className = 'history-line';
  const text    = item[currentLang] || item.en || '';
  const speaker = item.speaker || '';
  let html = '';
  if (showSpeaker && speaker) {
    const color = SPEAKER_COLORS[speaker] || '#aaa';
    html += `<span class="speaker" style="color:${color}">${escapeHtml(speaker)}</span>&ensp;`;
  }
  html += buildAnnotatedHtml(text);
  p.innerHTML = html;
  bindAnnotationClicks(p);
  return p;
}

// ── 문화맥락 해설 카드 ──
let activeContextKey = null;

function showContext(key) {
  if (activeContextKey === key) { hideContext(); return; }
  activeContextKey = key;
  const ann = ANNOTATIONS[key];
  if (!ann) return;
  contextCardInner.innerHTML = `
    <div class="context-card-header">
      <span class="context-card-title" style="color:${ann.color}">${escapeHtml(ann.title)}</span>
      <button class="context-card-close" id="contextClose">✕</button>
    </div>
    <p class="context-card-body">${escapeHtml(ann.content)}</p>
  `;
  document.getElementById('contextClose').addEventListener('click', hideContext);
  contextCardContainer.classList.add('visible');
}

function hideContext() {
  activeContextKey = null;
  contextCardContainer.classList.remove('visible');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 초기 헤더 위치 적용
applyHeaderPosition();
measureAndApplyHeight(false);
