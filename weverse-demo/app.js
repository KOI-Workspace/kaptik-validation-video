/**
 * Kaptik Weverse Demo — 자막 타이머 로직
 * 자막 형식: [{ start, end, speaker, en }, ...]
 * speaker 필드에 발화자 이름 직접 입력 (예: "Jungkook", "Jin", "V")
 */

// 5:10~6:34 구간 / 긴 문장은 두 줄로 분리
let subtitles = [
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

let startTime = null;
let timerInterval = null;
let isRunning = false;
let currentLang = 'en';

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const subtitleHistory = document.getElementById('subtitleHistory');
const subtitleArea = document.getElementById('subtitleArea');
const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');
const langSelect = document.getElementById('langSelect');
const dragHandle = document.getElementById('dragHandle');
const headerPanel = document.getElementById('headerPanel');

// ── 헤더만 위아래로 드래그 (자막/컨트롤은 고정) ──
let headerOffset = 0;
let dragStartY = 0;
let isDragging = false;
const DRAG_HANDLE_H = 24;
const MAX_DRAG = window.innerHeight * 0.6;

function applyHeaderOffset(offset) {
  headerOffset = offset;
  headerPanel.style.transform = `translateY(${offset}px)`;
}

dragHandle.addEventListener('touchstart', (e) => {
  dragStartY = e.touches[0].clientY;
  isDragging = true;
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const delta = e.touches[0].clientY - dragStartY;
  const newOffset = Math.max(0, Math.min(MAX_DRAG, headerOffset + delta));
  applyHeaderOffset(newOffset);
  dragStartY = e.touches[0].clientY;
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', () => {
  isDragging = false;
});

const MAX_HISTORY = 20;
let history = [];
let lastSubtitleStart = -1;
let isUserScrolled = false;

// 스크롤 감지 — 사용자가 위로 올리면 플로팅 버튼 표시
subtitleArea.addEventListener('scroll', () => {
  const atBottom = subtitleArea.scrollTop >= subtitleArea.scrollHeight - subtitleArea.clientHeight - 20;
  isUserScrolled = !atBottom;
  scrollToBottomBtn.classList.toggle('visible', isUserScrolled);
});

// 플로팅 버튼 — 최신 자막으로 이동
scrollToBottomBtn.addEventListener('click', () => {
  subtitleArea.scrollTop = subtitleArea.scrollHeight;
  isUserScrolled = false;
  scrollToBottomBtn.classList.remove('visible');
});

const SPEAKER_COLORS = {
  'RM':       '#7B8CFF',
  'Jin':      '#FF7EB3',
  'Suga':     '#FFB347',
  'j-hope':   '#FFE066',
  'Jimin':    '#FF6B6B',
  'V':        '#4ECDC4',
  'Jungkook': '#5BC8FF',
};

langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  if (history.length > 0) renderHistory();
});

resetBtn.addEventListener('click', () => {
  clearSubtitles();
});

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    startSubtitles();
  } else {
    stopSubtitles();
  }
});

let pausedAt = 0; // 멈춘 시점의 elapsed (초)

function startSubtitles() {
  isRunning = true;
  // 이어서 재생: pausedAt 만큼 과거로 startTime 조정
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
  pausedAt = (Date.now() - startTime) / 1000; // 현재 위치 저장
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
  scrollToBottomBtn.classList.remove('visible');
}

function updateSubtitle(elapsed) {
  const current = subtitles.find(s => elapsed >= s.start && elapsed < s.end);
  if (!current) return;
  if (current.start === lastSubtitleStart) return;
  lastSubtitleStart = current.start;

  history.push(current);
  if (history.length > MAX_HISTORY) history.shift();
  renderHistory();
}

function renderHistory() {
  subtitleHistory.innerHTML = '';
  const len = history.length;

  history.forEach((item, i) => {
    const distFromEnd = len - 1 - i;
    const p = document.createElement('p');

    if (distFromEnd === 0) p.className = 'subtitle-line active';
    else if (distFromEnd === 1) p.className = 'subtitle-line prev-1';
    else if (distFromEnd <= 4) p.className = 'subtitle-line prev-2';
    else p.className = 'subtitle-line';

    const text = item[currentLang] || item.en || '';
    const speaker = item.speaker || '';
    const prevSpeaker = i > 0 ? (history[i - 1].speaker || '') : '';
    const showSpeaker = speaker && speaker !== prevSpeaker;

    if (showSpeaker) {
      const color = SPEAKER_COLORS[speaker] || '#05F048';
      p.innerHTML = `<span class="speaker" style="color:${color}">${escapeHtml(speaker)}</span>&ensp;${escapeHtml(text)}`;
    } else {
      p.textContent = text;
    }

    subtitleHistory.appendChild(p);
  });

  // 사용자가 위로 스크롤 중이 아닐 때만 자동으로 최하단 이동
  if (!isUserScrolled) {
    subtitleArea.scrollTop = subtitleArea.scrollHeight;
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
