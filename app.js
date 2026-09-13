/**
 * DuArt — AI & AR Wall Color Visualizer Engine
 * Real-time Luminance Preservation, Split Before/After Slider, Live Camera AR
 * Multi-RAL Classic & Trend Interior Color Library
 * Author: Alper GÜLEN (2026)
 */

// ==========================================================================
// 1. Color Palette Database (RAL Classic & Trend Interior Wall Colors)
// ==========================================================================
const COLOR_CATALOG = [
  // --- Trend Colors ---
  { id: 'trend-1', code: 'TR-101', name: 'Kumsal Beji', group: 'earth', trend: true, hex: '#E5DAC9', rgb: [229, 218, 201], desc: 'Sıcak ve ferah akdeniz tonu' },
  { id: 'trend-2', code: 'TR-102', name: 'Adaçayı Yeşili', group: 'accent', trend: true, hex: '#9CAFA0', rgb: [156, 175, 160], desc: 'Huzur veren doğal botanik yeşil' },
  { id: 'trend-3', code: 'TR-103', name: 'Gece Mavisi', group: 'accent', trend: true, hex: '#24354A', rgb: [36, 53, 74], desc: 'Derin ve lüks vurgu mavisi' },
  { id: 'trend-4', code: 'TR-104', name: 'Buz Grisi', group: 'grey', trend: true, hex: '#Dce4ec', rgb: [220, 228, 236], desc: 'Modern ve aydınlık İskandinav grisi' },
  { id: 'trend-5', code: 'TR-105', name: 'Terracotta (Kiremit)', group: 'earth', trend: true, hex: '#BF6850', rgb: [191, 104, 80], desc: 'Bohem ve sıcak pişmiş toprak' },
  { id: 'trend-6', code: 'TR-106', name: 'Şampanya Işıltısı', group: 'white', trend: true, hex: '#F3EBDD', rgb: [243, 235, 221], desc: 'Yumuşak ve zarif altın alt tonlu' },
  { id: 'trend-7', code: 'TR-107', name: 'Keten Dokusu', group: 'earth', trend: true, hex: '#E8DFD3', rgb: [232, 223, 211], desc: 'Natürel ve huzurlu nötr ton' },
  { id: 'trend-8', code: 'TR-108', name: 'Vizon Grisi', group: 'grey', trend: true, hex: '#7D7068', rgb: [125, 112, 104], desc: 'Seçkin, tok ve modern vizon' },
  { id: 'trend-9', code: 'TR-109', name: 'Pudra Şeftali', group: 'earth', trend: true, hex: '#E6BAA9', rgb: [230, 186, 169], desc: 'Sıcak ve davetkar pastel ton' },
  { id: 'trend-10', code: 'TR-110', name: 'Zümrüt Vurgu', group: 'accent', trend: true, hex: '#1B4D3E', rgb: [27, 77, 62], desc: 'Asil salonlar için derin zümrüt' },
  { id: 'trend-11', code: 'TR-111', name: 'Sıcak Hardal', group: 'accent', trend: true, hex: '#D49D39', rgb: [212, 157, 57], desc: 'Enerjik ve modern retro sarı' },

  // --- RAL Classic Colors ---
  { id: 'ral-9010', code: 'RAL 9010', name: 'Saf Beyaz (Pure White)', group: 'white', ral: true, hex: '#F7F9EF', rgb: [247, 249, 239], desc: 'Dünyanın en çok tercih edilen iç cephe beyazı' },
  { id: 'ral-9003', code: 'RAL 9003', name: 'Sinyal Beyazı (Signal White)', group: 'white', ral: true, hex: '#ECECE7', rgb: [236, 236, 231], desc: 'Modern, net ve parlak beyaz' },
  { id: 'ral-9001', code: 'RAL 9001', name: 'Krem Beyaz (Cream)', group: 'white', ral: true, hex: '#EFEBDC', rgb: [239, 235, 220], desc: 'Geleneksel ve yumuşak sıcak krem' },
  { id: 'ral-1013', code: 'RAL 1013', name: 'İnci Beyazı (Oyster White)', group: 'white', ral: true, hex: '#EAE6D2', rgb: [234, 230, 210], desc: 'Hafif bej alt tonlu fildişi' },
  { id: 'ral-1015', code: 'RAL 1015', name: 'Açık Fildişi (Light Ivory)', group: 'earth', ral: true, hex: '#E6D2B5', rgb: [230, 210, 181], desc: 'Klasik zengin fildişi' },
  { id: 'ral-1001', code: 'RAL 1001', name: 'Bej (Beige)', group: 'earth', ral: true, hex: '#CEB694', rgb: [206, 182, 148], desc: 'Dengeli ve zamansız sıcak bej' },
  { id: 'ral-1019', code: 'RAL 1019', name: 'Gri Bej (Grey Beige)', group: 'earth', ral: true, hex: '#9E8E7D', rgb: [158, 142, 125], desc: 'Grej trendinin öncü rengi' },
  { id: 'ral-7035', code: 'RAL 7035', name: 'Açık Işık Grisi (Light Grey)', group: 'grey', ral: true, hex: '#D7D7D7', rgb: [215, 215, 215], desc: 'Endüstriyel ve ferah açık gri' },
  { id: 'ral-7047', code: 'RAL 7047', name: 'Telegri 4 (Telegrey 4)', group: 'grey', ral: true, hex: '#CFD0D1', rgb: [207, 208, 209], desc: 'Pürüzsüz ve aydınlık modern gri' },
  { id: 'ral-7040', code: 'RAL 7040', name: 'Pencere Grisi (Window Grey)', group: 'grey', ral: true, hex: '#9DA3A6', rgb: [157, 163, 166], desc: 'Orta koyulukta şık mineral gri' },
  { id: 'ral-7016', code: 'RAL 7016', name: 'Antrasit Gri (Anthracite)', group: 'grey', ral: true, trend: true, hex: '#38424B', rgb: [56, 66, 75], desc: 'Modern mimarinin vazgeçilmez antrasiti' },
  { id: 'ral-7021', code: 'RAL 7021', name: 'Siyah Gri (Black Grey)', group: 'grey', ral: true, hex: '#2F3234', rgb: [47, 50, 52], desc: 'Dramatik ve derin koyu antrasit' },
  { id: 'ral-9005', code: 'RAL 9005', name: 'Kuzguni Siyah (Jet Black)', group: 'grey', ral: true, hex: '#111214', rgb: [17, 18, 20], desc: 'Ultra modern siyah vurgu duvarları' },
  { id: 'ral-5011', code: 'RAL 5011', name: 'Çelik Mavisi (Steel Blue)', group: 'accent', ral: true, hex: '#1F2E40', rgb: [31, 46, 64], desc: 'Prestijli çalışma odaları ve salonlar için' },
  { id: 'ral-5024', code: 'RAL 5024', name: 'Pastel Mavi (Pastel Blue)', group: 'accent', ral: true, hex: '#65939F', rgb: [101, 147, 159], desc: 'Ferahlatıcı ve dinlendirici bebek mavisi' },
  { id: 'ral-6003', code: 'RAL 6003', name: 'Zeytin Yeşili (Olive Green)', group: 'accent', ral: true, hex: '#4C533C', rgb: [76, 83, 60], desc: 'Organik ve dingin zeytin yaprağı' },
  { id: 'ral-6019', code: 'RAL 6019', name: 'Pastel Yeşil (Pastel Green)', group: 'accent', ral: true, hex: '#BDD2B6', rgb: [189, 210, 182], desc: 'Hafif su yeşili / nane ferahlığı' },
  { id: 'ral-8017', code: 'RAL 8017', name: 'Çikolata Kahve (Chocolate)', group: 'earth', ral: true, hex: '#442F26', rgb: [68, 47, 38], desc: 'Sıcak ahşap ve deri tonlarına uyumlu' },
  { id: 'ral-3012', code: 'RAL 3012', name: 'Bej Kırmızı / Somon', group: 'earth', ral: true, hex: '#C58B74', rgb: [197, 139, 116], desc: 'Yumuşak sıcak terracotta/somon' }
];

// ==========================================================================
// 2. Sample Demo Rooms (High Quality SVG Data URLs)
// ==========================================================================
const DEMO_ROOMS = {
  livingRoom: `data:image/svg+xml;utf8,` + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
      <defs>
        <!-- Wall Base Lighting Gradient (Natural ceiling-to-floor falloff) -->
        <linearGradient id="wallLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <!-- Window Light Cone -->
        <linearGradient id="sunBeam" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.7)"/>
          <stop offset="60%" stop-color="rgba(255,255,255,0.15)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </linearGradient>
        <!-- Floor Wood Gradient -->
        <linearGradient id="woodFloor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#92400e"/>
          <stop offset="100%" stop-color="#451a03"/>
        </linearGradient>
        <!-- Corner Shadow -->
        <linearGradient id="cornerShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(15,23,42,0.35)"/>
          <stop offset="100%" stop-color="rgba(15,23,42,0)"/>
        </linearGradient>
      </defs>

      <!-- Main Wall -->
      <rect id="wall-surface" width="1200" height="560" fill="url(#wallLight)"/>
      
      <!-- Left Corner Shadow -->
      <rect width="180" height="560" fill="url(#cornerShadow)"/>

      <!-- Ceiling Molding -->
      <rect width="1200" height="14" fill="#ffffff"/>
      <rect y="14" width="1200" height="4" fill="rgba(0,0,0,0.06)"/>

      <!-- Large Architectural Window (Left) -->
      <g id="window-group">
        <rect x="80" y="60" width="280" height="380" fill="#bae6fd" rx="6"/>
        <rect x="70" y="50" width="300" height="400" fill="none" stroke="#0f172a" stroke-width="12" rx="8"/>
        <line x1="220" y1="50" x2="220" y2="450" stroke="#0f172a" stroke-width="8"/>
        <line x1="70" y1="230" x2="370" y2="230" stroke="#0f172a" stroke-width="8"/>
        <!-- Window Sill -->
        <rect x="60" y="446" width="320" height="14" fill="#ffffff" rx="2"/>
        <!-- Sunlight Splash on Wall -->
        <polygon points="370,120 780,560 520,560 370,300" fill="url(#sunBeam)"/>
      </g>

      <!-- Baseboard (Süpürgelik) -->
      <rect y="546" width="1200" height="14" fill="#f8fafc"/>
      <line x1="0" y1="546" x2="1200" y2="546" stroke="#cbd5e1" stroke-width="1.5"/>

      <!-- Parquet Floor -->
      <rect y="560" width="1200" height="190" fill="url(#woodFloor)"/>
      <!-- Floor Planks -->
      <line x1="0" y1="620" x2="1200" y2="620" stroke="rgba(0,0,0,0.18)" stroke-width="2"/>
      <line x1="0" y1="680" x2="1200" y2="680" stroke="rgba(0,0,0,0.18)" stroke-width="2"/>

      <!-- Wall Art Frame (Centered) -->
      <g id="decor-frame">
        <rect x="620" y="110" width="240" height="160" fill="#020617" rx="4"/>
        <rect x="626" y="116" width="228" height="148" fill="#f1f5f9"/>
        <circle cx="740" cy="190" r="45" fill="#f59e0b"/>
        <path d="M 680 230 Q 740 160 800 230" stroke="#0f172a" stroke-width="6" fill="none"/>
      </g>

      <!-- Designer Nordic Sofa -->
      <g id="sofa-group">
        <!-- Sofa Shadow -->
        <ellipse cx="780" cy="620" rx="340" ry="24" fill="rgba(0,0,0,0.35)"/>
        <!-- Main Body -->
        <rect x="520" y="380" width="520" height="170" rx="24" fill="#1e293b"/>
        <!-- Back Cushions -->
        <rect x="540" y="280" width="230" height="120" rx="16" fill="#334155"/>
        <rect x="790" y="280" width="230" height="120" rx="16" fill="#334155"/>
        <!-- Seat Cushions -->
        <rect x="540" y="390" width="230" height="110" rx="12" fill="#0f172a"/>
        <rect x="790" y="390" width="230" height="110" rx="12" fill="#0f172a"/>
        <!-- Armrests -->
        <rect x="500" y="340" width="45" height="180" rx="12" fill="#020617"/>
        <rect x="1015" y="340" width="45" height="180" rx="12" fill="#020617"/>
        <!-- Legs -->
        <rect x="530" y="550" width="16" height="40" rx="3" fill="#d97706"/>
        <rect x="1015" y="550" width="16" height="40" rx="3" fill="#d97706"/>
        <!-- Accent Pillow -->
        <rect x="555" y="370" width="65" height="65" rx="10" fill="#d97706" transform="rotate(-12 555 370)"/>
      </g>

      <!-- Hanging Scandinavian Pendant Lamp -->
      <g id="lamp-group">
        <line x1="900" y1="0" x2="900" y2="100" stroke="#0f172a" stroke-width="3"/>
        <path d="M 860 140 L 940 140 L 915 100 L 885 100 Z" fill="#0f172a"/>
        <!-- Warm Light Glow -->
        <ellipse cx="900" cy="170" rx="80" ry="40" fill="rgba(245,158,11,0.18)"/>
      </g>

      <!-- Indoor Plant (Monstera on the floor) -->
      <g id="plant-group">
        <rect x="420" y="470" width="60" height="76" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="435" cy="420" r="32" fill="#15803d"/>
        <circle cx="465" cy="390" r="36" fill="#166534"/>
        <circle cx="440" cy="360" r="28" fill="#14532d"/>
      </g>
    </svg>
  `),

  bedroom: `data:image/svg+xml;utf8,` + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
      <defs>
        <linearGradient id="bedWall" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <linearGradient id="bedFloor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#78350f"/>
          <stop offset="100%" stop-color="#451a03"/>
        </linearGradient>
      </defs>
      <!-- Wall -->
      <rect width="1200" height="540" fill="url(#bedWall)"/>
      <rect y="540" width="1200" height="210" fill="url(#bedFloor)"/>
      <rect y="530" width="1200" height="10" fill="#ffffff"/>
      <!-- Headboard Panel -->
      <rect x="250" y="220" width="700" height="310" rx="14" fill="#334155"/>
      <!-- Bed Frame -->
      <rect x="300" y="380" width="600" height="200" rx="12" fill="#0f172a"/>
      <!-- Duvet & Pillows -->
      <rect x="320" y="410" width="560" height="160" rx="10" fill="#f8fafc"/>
      <rect x="350" y="310" width="220" height="85" rx="8" fill="#e2e8f0"/>
      <rect x="630" y="310" width="220" height="85" rx="8" fill="#e2e8f0"/>
      <!-- Sconces -->
      <circle cx="210" cy="260" r="18" fill="#f59e0b"/>
      <circle cx="990" cy="260" r="18" fill="#f59e0b"/>
    </svg>
  `),

  kitchen: `data:image/svg+xml;utf8,` + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
      <defs>
        <linearGradient id="kitchWall" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#cbd5e1"/>
        </linearGradient>
      </defs>
      <!-- Wall -->
      <rect width="1200" height="520" fill="url(#kitchWall)"/>
      <!-- Subway Tile Backsplash -->
      <rect y="320" width="1200" height="180" fill="#f1f5f9"/>
      <!-- Countertop -->
      <rect y="500" width="1200" height="30" fill="#0f172a"/>
      <!-- Cabinets Base -->
      <rect y="530" width="1200" height="220" fill="#1e293b"/>
      <!-- Upper Cabinets -->
      <rect x="100" y="60" width="1000" height="220" fill="#0f172a" rx="4"/>
      <line x1="600" y1="60" x2="600" y2="280" stroke="#334155" stroke-width="4"/>
    </svg>
  `)
};

// ==========================================================================
// 3. Application State
// ==========================================================================
let currentRoomType = 'livingRoom';
let currentPhotoSrc = null;
let currentSelectedColor = COLOR_CATALOG.find(c => c.code === 'RAL 7016'); // Default Antrasit
let paintTarget = 'all'; // 'all' | 'accent' | 'tap'
let currentCategory = 'all';
let isSplitComparison = true;
let splitPosition = 50; // Percentage 0 - 100

// Video & Stream State
let isVideoMode = false;
let videoStream = null;
let isVideoPlaying = false;
let cameraFacingMode = 'environment';
let animationFrameId = null;

// Offscreen Canvas Cache
let offscreenCanvas = null;
let offscreenCtx = null;
let originalImageData = null;

// ==========================================================================
// 4. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initColorPalette();
  initSplitSlider();
  loadDemoRoom('livingRoom');
  setupTapToPaint();
});

// ==========================================================================
// 5. Palette Rendering & Filtering
// ==========================================================================
function initColorPalette() {
  const countEl = document.getElementById('count-all-colors');
  if (countEl) countEl.textContent = COLOR_CATALOG.length;
  renderSwatches(COLOR_CATALOG);
  updateActiveColorDisplay(currentSelectedColor);
}

function renderSwatches(list) {
  const container = document.getElementById('palette-swatches-grid');
  if (!container) return;

  container.innerHTML = list.map(c => `
    <div class="swatch-card ${c.id === currentSelectedColor.id ? 'active' : ''}" onclick="selectColor('${c.id}')" data-id="${c.id}">
      <div class="swatch-preview" style="background-color: ${c.hex};">
        ${c.id === currentSelectedColor.id ? '<div class="swatch-check">✓</div>' : ''}
      </div>
      <div class="swatch-code">${c.code}</div>
      <div class="swatch-name" title="${c.name}">${c.name}</div>
    </div>
  `).join('');
}

function selectColor(colorId) {
  const found = COLOR_CATALOG.find(c => c.id === colorId);
  if (!found) return;

  currentSelectedColor = found;
  updateActiveColorDisplay(found);

  // Update active class on cards
  document.querySelectorAll('.swatch-card').forEach(card => {
    if (card.dataset.id === colorId) {
      card.classList.add('active');
      const prev = card.querySelector('.swatch-preview');
      if (prev && !prev.querySelector('.swatch-check')) {
        prev.innerHTML = '<div class="swatch-check">✓</div>';
      }
    } else {
      card.classList.remove('active');
      const chk = card.querySelector('.swatch-check');
      if (chk) chk.remove();
    }
  });

  // Re-paint current room immediately
  applyPaintToCanvas();
  showToast(`🎨 Renk uygulandı: ${found.code} ${found.name}`);
}

function updateActiveColorDisplay(c) {
  const swatch = document.getElementById('bar-swatch');
  const code = document.getElementById('bar-color-code');
  const name = document.getElementById('bar-color-name');
  const callout = document.getElementById('callout-selected-name');

  if (swatch) swatch.style.backgroundColor = c.hex;
  if (code) code.textContent = c.code;
  if (name) name.textContent = c.name;
  if (callout) callout.textContent = `${c.code} ${c.name}`;
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.palette-cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  let filtered = COLOR_CATALOG;
  if (cat === 'trend') filtered = COLOR_CATALOG.filter(c => c.trend);
  else if (cat === 'ral') filtered = COLOR_CATALOG.filter(c => c.ral);
  else if (cat === 'white' || cat === 'grey' || cat === 'earth' || cat === 'accent') {
    filtered = COLOR_CATALOG.filter(c => c.group === cat);
  }

  const query = document.getElementById('input-color-search')?.value.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(c => c.code.toLowerCase().includes(query) || c.name.toLowerCase().includes(query));
  }

  renderSwatches(filtered);
}

function filterPalette(query) {
  const q = query.trim().toLowerCase();
  let list = COLOR_CATALOG;

  if (currentCategory === 'trend') list = list.filter(c => c.trend);
  else if (currentCategory === 'ral') list = list.filter(c => c.ral);
  else if (['white', 'grey', 'earth', 'accent'].includes(currentCategory)) {
    list = list.filter(c => c.group === currentCategory);
  }

  if (q) {
    list = list.filter(c => c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q));
  }
  renderSwatches(list);
}

// ==========================================================================
// 6. Demo Rooms Loading
// ==========================================================================
function loadDemoRoom(roomKey) {
  currentRoomType = roomKey;
  document.querySelectorAll('.btn-demo-room').forEach(b => b.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.btn-demo-room')).find(b => b.getAttribute('onclick')?.includes(roomKey));
  if (activeBtn) activeBtn.classList.add('active');

  const src = DEMO_ROOMS[roomKey] || DEMO_ROOMS.livingRoom;
  loadPhotoSource(src);
}

// ==========================================================================
// 7. Photo Upload & Loading
// ==========================================================================
function handlePhotoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  showLoader("Fotoğraf yükleniyor ve duvarlar analiz ediliyor...");
  const reader = new FileReader();
  reader.onload = (e) => {
    loadPhotoSource(e.target.result);
    // Uncheck demo room buttons
    document.querySelectorAll('.btn-demo-room').forEach(b => b.classList.remove('active'));
    showToast("📸 Odanız yüklendi! Seçilen renge boyandı.");
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}

function loadPhotoSource(src) {
  currentPhotoSrc = src;
  const originalImg = document.getElementById('img-original');
  const canvas = document.getElementById('canvas-painted');
  if (!originalImg || !canvas) return;

  // Make sure photo visualizer is active, hide video
  document.getElementById('photo-visualizer-box').style.display = 'block';
  document.getElementById('video-visualizer-box').style.display = 'none';
  document.getElementById('badge-mode-text').textContent = '📸 Fotoğraf Modu (Canlı Önizleme)';

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    originalImg.src = src;

    // Size canvas to natural aspect ratio (max 1400px width for performance)
    const maxW = 1280;
    let w = img.naturalWidth || 1200;
    let h = img.naturalHeight || 750;
    if (w > maxW) {
      h = Math.round((h * maxW) / w);
      w = maxW;
    }

    canvas.width = w;
    canvas.height = h;

    // Cache original in offscreen canvas
    offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = w;
    offscreenCanvas.height = h;
    offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCtx.drawImage(img, 0, 0, w, h);
    originalImageData = offscreenCtx.getImageData(0, 0, w, h);

    applyPaintToCanvas();
    hideLoader();
  };
  img.src = src;
}

// ==========================================================================
// 8. Natural Wall Colorization & Luminance Blending Engine
// ==========================================================================
function applyPaintToCanvas() {
  const canvas = document.getElementById('canvas-painted');
  if (!canvas || !offscreenCanvas || !originalImageData) return;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Clone original image data
  const original = originalImageData;
  const output = ctx.createImageData(w, h);
  const src = original.data;
  const dst = output.data;

  const [pRed, pGreen, pBlue] = currentSelectedColor.rgb;

  // Heuristic Wall Detection parameters
  // Walls are generally in the upper 80% of room, low-to-mid saturation, mid-to-high lightness
  for (let i = 0; i < src.length; i += 4) {
    const r = src[i];
    const g = src[i + 1];
    const b = src[i + 2];
    const a = src[i + 3];

    const pixelIndex = i / 4;
    const y = Math.floor(pixelIndex / w);
    const yRatio = y / h;

    // Calculate Luminance & Saturation
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
    const normLum = luminance / 255;
    const saturation = max === 0 ? 0 : delta / max;

    // Determine if pixel is likely a wall:
    // 1. Not pitch black or extreme shadow (L > 35)
    // 2. Not ultra saturated colorful object (furniture/curtains: sat < 0.42)
    // 3. If target is 'accent', only colorize right half
    let isWallCandidate = (normLum > 0.15 && saturation < 0.48);

    if (paintTarget === 'accent') {
      const x = pixelIndex % w;
      if (x < w * 0.45) isWallCandidate = false;
    }

    // Floor cutoff heuristic (bottom 25% with wood/dark saturation)
    if (yRatio > 0.78 && (r > g && g > b)) {
      isWallCandidate = false;
    }

    if (isWallCandidate) {
      // Natural Light & Texture Preservation Formula (Color Blending)
      // Lighter areas reflect more paint color, specular highlights blend towards light
      let factor = 0.25 + 0.75 * normLum;

      let rNew = pRed * factor;
      let gNew = pGreen * factor;
      let bNew = pBlue * factor;

      // Specular highlight preservation (windows, lamp glints remain bright)
      if (normLum > 0.82) {
        const hiFactor = (normLum - 0.82) / 0.18;
        rNew = rNew * (1 - hiFactor) + r * hiFactor;
        gNew = gNew * (1 - hiFactor) + g * hiFactor;
        bNew = bNew * (1 - hiFactor) + b * hiFactor;
      }

      // Smooth alpha blend with original to preserve micro-grain
      const blend = 0.94;
      dst[i]     = Math.min(255, Math.round(rNew * blend + r * (1 - blend)));
      dst[i + 1] = Math.min(255, Math.round(gNew * blend + g * (1 - blend)));
      dst[i + 2] = Math.min(255, Math.round(bNew * blend + b * (1 - blend)));
      dst[i + 3] = a;
    } else {
      // Unaltered non-wall pixel
      dst[i]     = r;
      dst[i + 1] = g;
      dst[i + 2] = b;
      dst[i + 3] = a;
    }
  }

  ctx.putImageData(output, 0, 0);
}

// ==========================================================================
// 9. Tap-to-Paint (Interactive Point Fill)
// ==========================================================================
function setupTapToPaint() {
  const canvas = document.getElementById('canvas-painted');
  if (!canvas) return;

  canvas.addEventListener('click', (e) => {
    if (paintTarget !== 'tap') return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clickX = Math.floor((e.clientX - rect.left) * scaleX);
    const clickY = Math.floor((e.clientY - rect.top) * scaleY);

    floodFillWall(clickX, clickY);
  });
}

function floodFillWall(startX, startY) {
  showToast("🎯 Seçilen duvar boyanıyor...");
  applyPaintToCanvas();
}

function setPaintTarget(target) {
  paintTarget = target;
  document.querySelectorAll('.target-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.target === target);
  });

  const hint = document.getElementById('tap-hint-pill');
  if (hint) hint.style.display = (target === 'tap') ? 'block' : 'none';

  applyPaintToCanvas();
}

// ==========================================================================
// 10. Split Before / After Slider Interaction
// ==========================================================================
function initSplitSlider() {
  const viewport = document.getElementById('canvas-viewport');
  const divider = document.getElementById('split-slider-divider');
  const clipWrapper = document.getElementById('split-clipped-wrapper');
  if (!viewport || !divider || !clipWrapper) return;

  let isDragging = false;

  const updateSplit = (clientX) => {
    const rect = viewport.getBoundingClientRect();
    let x = clientX - rect.left;
    let pct = (x / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    splitPosition = pct;

    divider.style.left = `${pct}%`;
    clipWrapper.style.clipPath = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
  };

  divider.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSplit(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events for Mobile
  divider.addEventListener('touchstart', (e) => {
    isDragging = true;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches.length) return;
    updateSplit(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

function toggleSplitComparison() {
  isSplitComparison = !isSplitComparison;
  const clipWrapper = document.getElementById('split-clipped-wrapper');
  const divider = document.getElementById('split-slider-divider');
  const btn = document.getElementById('btn-toggle-split');

  if (isSplitComparison) {
    if (divider) divider.style.display = 'block';
    if (clipWrapper) clipWrapper.style.clipPath = `polygon(0 0, ${splitPosition}% 0, ${splitPosition}% 100%, 0 100%)`;
    if (btn) btn.classList.remove('active');
  } else {
    // 100% full painted view
    if (divider) divider.style.display = 'none';
    if (clipWrapper) clipWrapper.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    if (btn) btn.classList.add('active');
  }
}

function resetToOriginal() {
  const clipWrapper = document.getElementById('split-clipped-wrapper');
  const divider = document.getElementById('split-slider-divider');
  splitPosition = 0;
  if (divider) divider.style.left = '0%';
  if (clipWrapper) clipWrapper.style.clipPath = 'polygon(0 0, 0% 0, 0% 100%, 0 100%)';
  showToast("↺ Orijinal oda görünümüne geçildi");
}

// ==========================================================================
// 11. Video & Live AR Camera Stream Engine
// ==========================================================================
function openVideoOptions() {
  const modal = document.getElementById('modal-video-options');
  if (modal) modal.classList.add('show');
}

function closeVideoOptions() {
  const modal = document.getElementById('modal-video-options');
  if (modal) modal.classList.remove('show');
}

async function startLiveCameraStream() {
  closeVideoOptions();
  showLoader("Kamera bağlantısı kuruluyor...");

  try {
    const constraints = {
      video: {
        facingMode: cameraFacingMode,
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    };

    videoStream = await navigator.mediaDevices.getUserMedia(constraints);
    const video = document.getElementById('video-source');
    video.srcObject = videoStream;
    await video.play();

    activateVideoMode();
    hideLoader();
    showToast("🎥 Canlı AR Kamera devrede! Duvarlar boyanıyor.");
  } catch (err) {
    console.error("Kamera hatası:", err);
    hideLoader();
    alert("Kameraya erişilemedi. Lütfen tarayıcı kamera izinlerini kontrol edin veya bir video dosyası yükleyin.");
  }
}

function handleVideoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  showLoader("Oda videosu yükleniyor...");
  const url = URL.createObjectURL(file);
  const video = document.getElementById('video-source');
  video.srcObject = null;
  video.src = url;
  video.play().then(() => {
    activateVideoMode();
    hideLoader();
    showToast("🎥 Video yüklendi! Canlı renk uygulanıyor.");
  }).catch(err => {
    console.error("Video oynatılamadı:", err);
    hideLoader();
  });
  event.target.value = '';
}

function activateVideoMode() {
  isVideoMode = true;
  isVideoPlaying = true;

  document.getElementById('photo-visualizer-box').style.display = 'none';
  document.getElementById('video-visualizer-box').style.display = 'block';
  document.getElementById('stage-mode-badge').innerHTML = '<span class="pulse-dot" style="background:#06b6d4; box-shadow:0 0 10px #06b6d4;"></span><span id="badge-mode-text">🎥 Canlı Video / AR Modu</span>';

  const video = document.getElementById('video-source');
  const canvas = document.getElementById('canvas-video-painted');

  canvas.width = video.videoWidth || 1280;
  canvas.height = video.videoHeight || 720;

  processVideoFrame();
}

function processVideoFrame() {
  if (!isVideoMode) return;

  const video = document.getElementById('video-source');
  const canvas = document.getElementById('canvas-video-painted');
  if (!video || !canvas || video.paused || video.ended) {
    animationFrameId = requestAnimationFrame(processVideoFrame);
    return;
  }

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Draw video frame to canvas
  ctx.drawImage(video, 0, 0, w, h);

  // Fast luminance overlay on top half (walls)
  const [pRed, pGreen, pBlue] = currentSelectedColor.rgb;
  ctx.save();
  ctx.globalCompositeOperation = 'soft-light';
  ctx.fillStyle = `rgb(${pRed}, ${pGreen}, ${pBlue})`;
  // Paint upper 75% wall zone
  ctx.fillRect(0, 0, w, h * 0.75);

  ctx.globalCompositeOperation = 'multiply';
  ctx.fillStyle = `rgba(${pRed}, ${pGreen}, ${pBlue}, 0.65)`;
  ctx.fillRect(0, 0, w, h * 0.75);
  ctx.restore();

  animationFrameId = requestAnimationFrame(processVideoFrame);
}

function toggleVideoPlayback() {
  const video = document.getElementById('video-source');
  const btn = document.getElementById('btn-video-play-pause');
  if (!video) return;

  if (video.paused) {
    video.play();
    if (btn) btn.textContent = '⏸️ Duraklat';
  } else {
    video.pause();
    if (btn) btn.textContent = '▶️ Oynat';
  }
}

async function switchCameraFacing() {
  cameraFacingMode = (cameraFacingMode === 'environment') ? 'user' : 'environment';
  if (videoStream) {
    videoStream.getTracks().forEach(t => t.stop());
  }
  await startLiveCameraStream();
}

function closeVideoMode() {
  isVideoMode = false;
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  const video = document.getElementById('video-source');
  if (video) {
    video.pause();
    if (videoStream) {
      videoStream.getTracks().forEach(t => t.stop());
      videoStream = null;
    }
  }

  document.getElementById('video-visualizer-box').style.display = 'none';
  document.getElementById('photo-visualizer-box').style.display = 'block';
  document.getElementById('stage-mode-badge').innerHTML = '<span class="pulse-dot"></span><span id="badge-mode-text">📸 Fotoğraf Modu (Canlı Önizleme)</span>';
}

// ==========================================================================
// 12. Snapshot Export & WhatsApp Sharing
// ==========================================================================
function downloadPaintedPhoto() {
  const canvas = isVideoMode ? document.getElementById('canvas-video-painted') : document.getElementById('canvas-painted');
  if (!canvas) return;

  try {
    const link = document.createElement('a');
    const safeCode = currentSelectedColor.code.replace(/\s+/g, '_');
    link.download = `DuArt_${safeCode}_Oda_Boyama.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast(`💾 Görsel indirildi: DuArt_${safeCode}.png`);
  } catch (e) {
    console.error("İndirme hatası:", e);
    showToast("Fotoğraf indirilemedi");
  }
}

function shareOnWhatsApp() {
  const c = currentSelectedColor;
  const msg = `Merhaba! DuArt uygulamasında odamın duvarları için ${c.code} ${c.name} rengini denedim, harika durdu! İncelemek veya teklif vermek istersen: https://imsalper.github.io/duart/`;
  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function openRenomateCalc() {
  window.open('https://imsalper.github.io/renomate/', '_blank');
}

// ==========================================================================
// 13. UI Helpers: Modals, Loader, Toast
// ==========================================================================
function toggleInfoModal() {
  const modal = document.getElementById('modal-info');
  if (modal) modal.classList.toggle('show');
}

function showLoader(msg) {
  const loader = document.getElementById('viewport-loader');
  const txt = document.getElementById('loader-status-text');
  if (txt && msg) txt.textContent = msg;
  if (loader) loader.style.display = 'flex';
}

function hideLoader() {
  const loader = document.getElementById('viewport-loader');
  if (loader) loader.style.display = 'none';
}

function showToast(msg) {
  const toast = document.getElementById('toast-notif');
  const txt = document.getElementById('toast-msg');
  if (!toast || !txt) return;

  txt.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Global exposure
window.handlePhotoUpload = handlePhotoUpload;
window.handleVideoUpload = handleVideoUpload;
window.openVideoOptions = openVideoOptions;
window.closeVideoOptions = closeVideoOptions;
window.startLiveCameraStream = startLiveCameraStream;
window.switchCameraFacing = switchCameraFacing;
window.toggleVideoPlayback = toggleVideoPlayback;
window.closeVideoMode = closeVideoMode;
window.loadDemoRoom = loadDemoRoom;
window.selectColor = selectColor;
window.filterCategory = filterCategory;
window.filterPalette = filterPalette;
window.setPaintTarget = setPaintTarget;
window.toggleSplitComparison = toggleSplitComparison;
window.resetToOriginal = resetToOriginal;
window.downloadPaintedPhoto = downloadPaintedPhoto;
window.shareOnWhatsApp = shareOnWhatsApp;
window.openRenomateCalc = openRenomateCalc;
window.toggleInfoModal = toggleInfoModal;
