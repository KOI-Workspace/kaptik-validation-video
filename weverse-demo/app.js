/**
 * Kaptik — 바텀시트 자막 플레이어
 */

const subtitles = [
  {"start":  0.00, "end":  3.32, "speaker": "Jin",
    "en": "I didn't play game that much during this tour in my room.",
    "id": "Aku tidak terlalu banyak bermain game di kamarku selama tur ini.",
    "es": "No jugué mucho en mi habitación durante esta gira.", "ko": "투어 중에 방에서 게임을 많이 하진 않았어."},
  {"start":  3.32, "end":  5.16, "speaker": "Jungkook",
    "en": "Elden Ring, Elden Ring", "id": "Elden Ring, Elden Ring.", "es": "Elden Ring, Elden Ring.", "ko": "엘든 링, 엘든 링"},
  {"start":  5.16, "end":  6.76, "speaker": "Jin",
    "en": "I didn't play PlayStation that much,", "id": "Aku tidak terlalu banyak bermain PlayStation,", "es": "No jugué mucho a la PlayStation,", "ko": "플스를 많이 하진 않았는데,"},
  {"start":  6.76, "end":  8.36, "speaker": "Jin",
    "en": "but I finished the game just inside the concert venue.", "id": "tapi aku menyelesaikan Elden Ring hanya di venue konser.", "es": "pero terminé Elden Ring solo dentro del recinto.", "ko": "공연장 안에서만 게임을 다 깼어."},
  {"start":  8.36, "end": 13.92, "speaker": "Jungkook",
    "en": "That's right. Jin hyung only played the game he introduced me at our concert venue,", "ko": "맞아. 진 형은 나한테 소개해준 그 게임을 공연장에서만 했는데,"},
  {"start": 13.92, "end": 20.76, "speaker": "Jungkook",
    "en": "and now he only has the boss left.", "ko": "이제 보스만 남았대."},
  {"start": 20.76, "end": 22.40, "speaker": "Jin",
    "en": "Even so, I think I played for about 100 hours.", "ko": "그래도 한 100시간은 한 것 같아."},
  {"start": 22.40, "end": 24.04, "speaker": "Jin",
    "en": "Because the waiting time is so long.", "ko": "대기 시간이 너무 기니까."},
  {"start": 24.04, "end": 25.58, "speaker": "Jin",
    "en": "I need to do my hair and make up,", "ko": "머리랑 메이크업 받고,"},
  {"start": 25.58, "end": 27.12, "speaker": "Jin",
    "en": "and wait for your hair and make up too.", "ko": "너 머리랑 메이크업도 기다리고."},
  {"start": 27.12, "end": 30.56, "speaker": "Jungkook",
    "en": "But that's what makes you amazing, hyung.", "ko": "그게 형이 대단한 거야."},
  {"start": 30.56, "end": 33.76, "speaker": "Jin",
    "en": "In what way?", "ko": "어떤 면에서?"},
  {"start": 33.92, "end": 40.28, "speaker": "Jungkook",
    "en": "Because once we're at the venue, this is our main job, you know.", "ko": "공연장에 오면 이게 우리 본업이잖아."},
  {"start": 40.28, "end": 42.00, "speaker": "Jin",
    "en": "Right.", "ko": "맞아."},
  {"start": 42.00, "end": 47.12, "speaker": "Jungkook",
    "en": "Since it's our main job… I mean, hyung, it's not like you did anything wrong.", "ko": "본업이니까… 형이 잘못한 건 아닌데."},
  {"start": 47.12, "end": 52.24, "speaker": "Jungkook",
    "en": "But the reason I think you're amazing is that you really finish all your own preparations first,", "ko": "근데 형이 대단한 이유가, 자기 준비를 다 끝내고"},
  {"start": 52.24, "end": 58.08, "speaker": "Jungkook",
    "en": "and then you set aside separate time to play games.", "ko": "따로 시간을 내서 게임을 해."},
  {"start": 58.08, "end": 63.20, "speaker": "Jin",
    "en": "I warm up my voice, stretch my body, work out…", "ko": "발성 하고, 스트레칭 하고, 운동하고…"},
  {"start": 63.20, "end": 65.34, "speaker": "Jungkook",
    "en": "Exactly. You work out and do everything you need to do,", "ko": "맞아. 다 하고,"},
  {"start": 65.34, "end": 67.48, "speaker": "Jungkook",
    "en": "and still manage to play games too.", "ko": "게임까지 해."},
  {"start": 67.48, "end": 71.36, "speaker": "Jungkook",
    "en": "You do it all. Jin hyung really does everything.", "ko": "다 해. 진 형은 진짜 다 해."},
  {"start": 71.36, "end": 73.50, "speaker": "Jin",
    "en": "You just have to get ready quickly.", "ko": "빨리 준비하면 되는 거지."},
  {"start": 73.50, "end": 76.80, "speaker": "Jungkook",
    "en": "Is that even possible? It's not easy.", "ko": "그게 돼? 쉽지 않잖아."},
  {"start": 76.80, "end": 80.76, "speaker": "Jin",
    "en": "I just start getting ready earlier than everyone else,", "ko": "그냥 남들보다 일찍 준비 시작하는 거야,"},
  {"start": 80.76, "end": 84.72, "speaker": "Jin",
    "en": "and get everything done quickly, one after another.", "ko": "하나하나 빨리 끝내고."}
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

const SPEAKER_INITIALS = {
  'RM': 'RM', 'Jin': 'JN', 'Suga': 'SG',
  'j-hope': 'JH', 'Jimin': 'JM', 'V': 'V', 'Jungkook': 'JK',
};

// ── DOM ──
const startBtn         = document.getElementById('startBtn');
const resetBtn         = document.getElementById('resetBtn');
const sheet            = document.getElementById('sheet');
const sheetHandle      = document.getElementById('sheetHandle');
const sheetContent     = document.getElementById('sheetContent');
const scrollToTopBtn   = document.getElementById('scrollToTopBtn');
const langFab          = document.getElementById('langFab');
const langPanel        = document.getElementById('langPanel');
const langSelect       = document.getElementById('langSelect');
const contextOverlay   = document.getElementById('contextOverlay');
const contextCardInner = document.getElementById('contextCardInner');

// 자막 리스트 컨테이너
const subtitleList = document.createElement('div');
subtitleList.className = 'subtitle-list';
sheetContent.appendChild(subtitleList);

// ── 바텀 시트 드래그 ──
let sheetTop     = 80;
const MIN_TOP    = 60;
const MAX_TOP    = () => Math.round(window.innerHeight * 0.75);

function applySheetTop(top, animate = false) {
  sheetTop = Math.max(MIN_TOP, Math.min(MAX_TOP(), top));
  if (animate) sheet.classList.add('animating');
  sheet.style.top          = sheetTop + 'px';
  contextOverlay.style.top = sheetTop + 'px';
  if (animate) {
    setTimeout(() => sheet.classList.remove('animating'), 340);
  }
}

let isDragging   = false;
let dragStartY   = 0;
let dragStartTop = 0;

sheetHandle.addEventListener('touchstart', (e) => {
  isDragging   = true;
  dragStartY   = e.touches[0].clientY;
  dragStartTop = sheetTop;
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const delta = e.touches[0].clientY - dragStartY;
  applySheetTop(dragStartTop + delta);
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', () => { isDragging = false; });

// ── 스크롤 감지 ──
let isUserScrolled = false;

sheetContent.addEventListener('scroll', () => {
  isUserScrolled = sheetContent.scrollTop > 20;
  scrollToTopBtn.classList.toggle('visible', isUserScrolled);
});

scrollToTopBtn.addEventListener('click', () => {
  sheetContent.scrollTop = 0;
  isUserScrolled = false;
  scrollToTopBtn.classList.remove('visible');
});

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
  langPanel.classList.remove('open');
  rerenderAll();
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
  history           = [];
  lastSubtitleStart = -1;
  pausedAt          = 0;
  isUserScrolled    = false;
  subtitleList.innerHTML = '';
  scrollToTopBtn.classList.remove('visible');
  hideContext();
}

// ── 자막 히스토리 ──
const MAX_HISTORY = 50;
let history           = [];
let lastSubtitleStart = -1;

function updateSubtitle(elapsed) {
  const current = subtitles.find(s => elapsed >= s.start && elapsed < s.end);
  if (!current || current.start === lastSubtitleStart) return;
  lastSubtitleStart = current.start;
  history.push(current);
  prependSubtitle(current);
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

function createSubtitleEl(item) {
  const wrapper  = document.createElement('div');
  wrapper.className = 'subtitle-item';

  const speaker  = item.speaker || '';
  const color    = SPEAKER_COLORS[speaker]  || '#888888';
  const initials = SPEAKER_INITIALS[speaker] || speaker.slice(0, 2).toUpperCase();
  const text     = item[currentLang] || item.en || '';

  // 아바타
  const avatar = document.createElement('div');
  avatar.className = 'subtitle-avatar';
  avatar.textContent = initials;
  avatar.style.background = color + '22'; // ~13% 투명도
  avatar.style.border = `1.5px solid ${color}55`;
  avatar.style.color  = color;

  // 본문 (이름 + 텍스트)
  const body = document.createElement('div');
  body.className = 'subtitle-body';

  const nameEl = document.createElement('div');
  nameEl.className = 'subtitle-name';
  nameEl.style.color = color;
  nameEl.textContent = speaker;

  const textEl = document.createElement('div');
  textEl.className = 'subtitle-text';
  textEl.innerHTML = buildAnnotatedHtml(text);

  body.appendChild(nameEl);
  body.appendChild(textEl);
  wrapper.appendChild(avatar);
  wrapper.appendChild(body);

  bindAnnotationClicks(wrapper);
  return wrapper;
}

// ── 최신 자막을 맨 위에 삽입 ──
function prependSubtitle(item) {
  const atTop = sheetContent.scrollTop <= 20;
  const existingEls = [...subtitleList.querySelectorAll('.subtitle-item')];
  const newEl = createSubtitleEl(item);

  if (!atTop) {
    // 히스토리 읽는 중: 삽입 후 scrollTop 보정으로 화면 고정
    const prevScrollTop = sheetContent.scrollTop;
    subtitleList.insertBefore(newEl, subtitleList.firstChild);
    sheetContent.scrollTop = prevScrollTop + newEl.getBoundingClientRect().height;

    const allItems = subtitleList.querySelectorAll('.subtitle-item');
    if (allItems.length > MAX_HISTORY) {
      const removed = allItems[allItems.length - 1];
      sheetContent.scrollTop -= removed.getBoundingClientRect().height;
      subtitleList.removeChild(removed);
    }
    return;
  }

  // 최상단: FLIP 슬라이드 다운
  newEl.style.opacity = '0';
  subtitleList.insertBefore(newEl, subtitleList.firstChild);

  const allItems = subtitleList.querySelectorAll('.subtitle-item');
  if (allItems.length > MAX_HISTORY) {
    subtitleList.removeChild(allItems[allItems.length - 1]);
  }

  if (existingEls.length > 0) {
    const newElH = newEl.offsetHeight;
    existingEls.forEach(el => {
      if (!el.parentElement) return;
      el.style.transition = 'none';
      el.style.transform  = `translateY(${-newElH}px)`;
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        existingEls.forEach(el => {
          if (!el.parentElement) return;
          el.style.transition = 'transform 0.32s ease-out';
          el.style.transform  = '';
        });
        newEl.style.transition = 'opacity 0.2s ease-out 0.12s';
        newEl.style.opacity    = '1';
      });
    });

    setTimeout(() => {
      existingEls.forEach(el => {
        if (!el.parentElement) return;
        el.style.transition = '';
        el.style.transform  = '';
      });
    }, 360);
  } else {
    newEl.style.opacity = '1';
  }

}

// ── 전체 재렌더 (언어 변경 시) ──
function rerenderAll() {
  subtitleList.innerHTML = '';
  [...history].reverse().forEach(item => {
    const el = createSubtitleEl(item);
    subtitleList.appendChild(el);
  });
}

// ── 문화맥락 해설 ──
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
  contextOverlay.classList.add('visible');
}

function hideContext() {
  activeContextKey = null;
  contextOverlay.classList.remove('visible');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 초기 시트 위치 적용
applySheetTop(sheetTop);
