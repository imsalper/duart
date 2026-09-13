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
let paintTarget = 'tap'; // 'tap' | 'box' | 'eraser' | 'auto'
let currentCategory = 'all';
let isSplitComparison = true;
let splitPosition = 50; // Percentage 0 - 100

// Selective Wall Painting & Protection Tools
let currentPaintTool = 'tap';        // 'tap' | 'box' | 'eraser' | 'auto'
let ceilingGuardEnabled = true;      // Prevents paint from climbing into ceilings & crown moldings
let eraserBrushSize = 30;           // 15 | 30 | 60 px
let selectionBox = null;             // { x1, y1, x2, y2 } in canvas space
let isBoxSelecting = false;
let boxDragStart = null;
let isErasing = false;
let lastPointerPoint = null;

// Video & Stream State
let isVideoMode = false;
let videoStream = null;
let isVideoPlaying = false;
let cameraFacingMode = 'environment';
let animationFrameId = null;

// Offscreen Canvas Cache & Wall Segmentation Masks
let offscreenCanvas = null;
let offscreenCtx = null;
let originalImageData = null;
let activeWallMask = null;       // Uint8Array (w * h) for wall opacity 0 - 255
let currentImageEdges = null;    // Uint8Array (w * h) for edge gradients
let currentTolerance = 30;       // Sensitivity threshold (15 - 60) - Default tighter at 30 to prevent bleeding

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
  loadPhotoSource(src, true);
}

// ==========================================================================
// 7. Photo Upload & Loading
// ==========================================================================
function handlePhotoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  showLoader("Fotoğraf yükleniyor ve kenarlar analiz ediliyor...");
  const reader = new FileReader();
  reader.onload = (e) => {
    loadPhotoSource(e.target.result, false); // User photo: clean original start!
    // Uncheck demo room buttons
    document.querySelectorAll('.btn-demo-room').forEach(b => b.classList.remove('active'));
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}

function loadPhotoSource(src, isDemo = false) {
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

    // Compute high-fidelity multi-channel RGB edge gradient map
    currentImageEdges = computeEdgeMap(originalImageData, w, h);

    // Cancel any old selection marquee
    cancelSelection();

    if (isDemo) {
      // For demo rooms: run auto wall detection
      autoDetectWalls();
      showToast(`📸 ${currentRoomType === 'kitchen' ? 'Mutfak' : 'Salon'} yüklendi!`);
    } else {
      // For custom user uploaded photos: keep original clean so AC, sofa and ceiling are pristine!
      activeWallMask = new Uint8Array(w * h);
      setPaintTool('tap');
      showToast("📸 Odanız yüklendi! Boyamak istediğiniz duvara dokunun veya 📐 Bölge Seç ile kutu çizin.");
    }

    renderMaskedPaint();
    hideLoader();
  };
  img.src = src;
}

// ==========================================================================
// 8. Multi-Channel Edge Detection & Sizing Engine
// ==========================================================================

// Multi-channel RGB Euclidean gradient Sobel with diagonal support
// Detects subtle boundaries between plastic AC casings, ceiling moldings, sofa cushions and walls
function computeEdgeMap(imgData, w, h) {
  const src = imgData.data;
  const edges = new Uint8Array(w * h);

  for (let y = 1; y < h - 1; y++) {
    const rPrev = (y - 1) * w;
    const rCurr = y * w;
    const rNext = (y + 1) * w;

    for (let x = 1; x < w - 1; x++) {
      const pPrev = (rCurr + x - 1) * 4;
      const pNext = (rCurr + x + 1) * 4;
      const pUp   = (rPrev + x) * 4;
      const pDown = (rNext + x) * 4;

      // Color Euclidean difference in X and Y
      const dRx = src[pNext] - src[pPrev];
      const dGx = src[pNext + 1] - src[pPrev + 1];
      const dBx = src[pNext + 2] - src[pPrev + 2];
      const gradX = Math.sqrt(dRx * dRx + dGx * dGx + dBx * dBx);

      const dRy = src[pDown] - src[pUp];
      const dGy = src[pDown + 1] - src[pUp + 1];
      const dBy = src[pDown + 2] - src[pUp + 2];
      const gradY = Math.sqrt(dRy * dRy + dGy * dGy + dBy * dBy);

      // Diagonal components (crucial for AC unit corners, window borders and ceiling crown angles)
      const pDiag1 = (rPrev + x - 1) * 4;
      const pDiag2 = (rNext + x + 1) * 4;
      const dRd1 = src[pDiag2] - src[pDiag1];
      const dGd1 = src[pDiag2 + 1] - src[pDiag1 + 1];
      const dBd1 = src[pDiag2 + 2] - src[pDiag1 + 2];
      const gradD1 = Math.sqrt(dRd1 * dRd1 + dGd1 * dGd1 + dBd1 * dBd1) * 0.5;

      const pDiag3 = (rPrev + x + 1) * 4;
      const pDiag4 = (rNext + x - 1) * 4;
      const dRd2 = src[pDiag4] - src[pDiag3];
      const dGd2 = src[pDiag4 + 1] - src[pDiag3 + 1];
      const dBd2 = src[pDiag4 + 2] - src[pDiag3 + 2];
      const gradD2 = Math.sqrt(dRd2 * dRd2 + dGd2 * dGd2 + dBd2 * dBd2) * 0.5;

      const totalGrad = (gradX + gradY + gradD1 + gradD2) * 0.58;
      edges[rCurr + x] = Math.min(255, Math.round(totalGrad));
    }
  }
  return edges;
}

// Upward scan to detect horizontal crown molding / ceiling line
function detectCeilingBoundary(startX, startY, w, h, edges) {
  const maxCeilingY = Math.round(h * 0.35);
  if (startY <= maxCeilingY) {
    return 0; // Already in upper zone
  }

  // Scan vertically upward from startY
  for (let y = startY - 8; y >= 6; y--) {
    let edgeSum = 0;
    let count = 0;
    for (let dx = -14; dx <= 14; dx += 4) {
      const nx = startX + dx;
      if (nx >= 0 && nx < w) {
        edgeSum += edges[y * w + nx];
        count++;
      }
    }
    const avgEdge = edgeSum / count;
    if (avgEdge > 18 && y <= maxCeilingY) {
      return y + 3; // Block anything at or above this molding line
    }
  }

  return Math.round(h * 0.12);
}

// 3x3 Smoothing for anti-aliased natural paint boundaries
function smoothMask(mask, w, h) {
  const smoothed = new Uint8Array(w * h);
  for (let y = 1; y < h - 1; y++) {
    const rPrev = (y - 1) * w;
    const rCurr = y * w;
    const rNext = (y + 1) * w;
    for (let x = 1; x < w - 1; x++) {
      const sum = mask[rPrev + x - 1] + mask[rPrev + x] + mask[rPrev + x + 1] +
                  mask[rCurr + x - 1] + mask[rCurr + x] * 4 + mask[rCurr + x + 1] +
                  mask[rNext + x - 1] + mask[rNext + x] + mask[rNext + x + 1];
      smoothed[rCurr + x] = Math.round(sum / 12);
    }
  }
  return smoothed;
}

// Flood Fill from point bounded by sharp edge barriers, bounding box & ceiling guard
function floodFillFromPoint(startX, startY, tolerance, targetMask, boundingBox = null) {
  if (!originalImageData) return;
  const w = originalImageData.width;
  const h = originalImageData.height;
  const src = originalImageData.data;

  if (!targetMask) targetMask = new Uint8Array(w * h);
  if (!currentImageEdges) currentImageEdges = computeEdgeMap(originalImageData, w, h);

  // Bounding box limits
  let minX = 0, maxX = w - 1, minY = 0, maxY = h - 1;
  if (boundingBox) {
    minX = Math.max(0, Math.min(boundingBox.x1, boundingBox.x2));
    maxX = Math.min(w - 1, Math.max(boundingBox.x1, boundingBox.x2));
    minY = Math.max(0, Math.min(boundingBox.y1, boundingBox.y2));
    maxY = Math.min(h - 1, Math.max(boundingBox.y1, boundingBox.y2));
  }

  // Ceiling cutoff
  let ceilingLimitY = 0;
  if (ceilingGuardEnabled && !boundingBox) {
    ceilingLimitY = detectCeilingBoundary(startX, startY, w, h, currentImageEdges);
  }

  const startIdx = (startY * w + startX) * 4;
  const seedR = src[startIdx];
  const seedG = src[startIdx + 1];
  const seedB = src[startIdx + 2];
  const seedLum = (seedR * 77 + seedG * 150 + seedB * 29) >> 8;

  // Adaptive Edge Threshold: lower than before so even faint AC borders or molding lines stop fill
  const edgeThreshold = Math.max(12, Math.min(22, Math.round(tolerance * 0.46)));

  // BFS Queue
  const queue = new Int32Array(w * h);
  let qStart = 0;
  let qEnd = 0;

  const visited = new Uint8Array(w * h);
  const startPos = startY * w + startX;
  visited[startPos] = 1;
  targetMask[startPos] = 255;
  queue[qEnd++] = startPos;

  const maxPixels = Math.round(w * h * 0.85);
  let filledCount = 0;

  while (qStart < qEnd && filledCount < maxPixels) {
    const curr = queue[qStart++];
    filledCount++;
    const cx = curr % w;
    const cy = Math.floor(curr / w);
    const currIdx = curr * 4;
    const cR = src[currIdx];
    const cG = src[currIdx + 1];
    const cB = src[currIdx + 2];

    const neighbors = [
      cy > 0 ? curr - w : -1,
      cy < h - 1 ? curr + w : -1,
      cx > 0 ? curr - 1 : -1,
      cx < w - 1 ? curr + 1 : -1
    ];

    for (let i = 0; i < 4; i++) {
      const n = neighbors[i];
      if (n === -1 || visited[n]) continue;
      visited[n] = 1;

      const nx = n % w;
      const ny = Math.floor(n / w);

      // 1. Strict Bounding Box Constraint
      if (boundingBox) {
        if (nx < minX || nx > maxX || ny < minY || ny > maxY) continue;
      }

      // 2. Strict Ceiling Guard Barrier
      if (ceilingGuardEnabled && !boundingBox && ny < ceilingLimitY) {
        continue;
      }

      // 3. Strict Multi-channel Edge Barrier (AC unit casing, sofa seams, curtains, TV frame)
      if (currentImageEdges[n] > edgeThreshold) {
        continue;
      }

      const pIdx = n * 4;
      const r = src[pIdx];
      const g = src[pIdx + 1];
      const b = src[pIdx + 2];
      const lum = (r * 77 + g * 150 + b * 29) >> 8;

      // Distance to initial seed point
      const dr = r - seedR;
      const dg = g - seedG;
      const db = b - seedB;
      const distToSeed = Math.sqrt(dr * dr + dg * dg + db * db);

      // Local gradient to neighbor (prevents jumping over soft shadow transitions into different materials)
      const sdr = r - cR;
      const sdg = g - cG;
      const sdb = b - cB;
      const stepDist = Math.sqrt(sdr * sdr + sdg * sdg + sdb * sdb);

      const diffLum = Math.abs(lum - seedLum);

      if (distToSeed < tolerance * 1.35 && stepDist < tolerance * 0.82 && diffLum < tolerance * 1.25) {
        targetMask[n] = 255;
        queue[qEnd++] = n;
      }
    }
  }

  return smoothMask(targetMask, w, h);
}

// Automatically detect main wall surfaces without touching furniture, floors, ceilings or appliances
function autoDetectWalls() {
  if (!originalImageData) return;
  const w = originalImageData.width;
  const h = originalImageData.height;
  if (!currentImageEdges) currentImageEdges = computeEdgeMap(originalImageData, w, h);

  const mask = new Uint8Array(w * h);
  const src = originalImageData.data;

  // Safe middle-wall candidate coordinates (skip ceiling zone at top)
  const candidateRows = ceilingGuardEnabled ? [0.28, 0.38, 0.48] : [0.18, 0.28, 0.38, 0.48];
  const candidateCols = [0.22, 0.36, 0.5, 0.64, 0.78];

  for (let rFrac of candidateRows) {
    const y = Math.round(h * rFrac);
    for (let cFrac of candidateCols) {
      const x = Math.round(w * cFrac);
      const pos = y * w + x;
      const idx = pos * 4;

      if (mask[pos] > 80) continue; // Already covered
      if (currentImageEdges[pos] > 15) continue; // On an edge, skip

      // Check local variance to avoid appliances (like AC vents or detailed paintings)
      let localEdgeCount = 0;
      for (let dy = -6; dy <= 6; dy += 3) {
        for (let dx = -6; dx <= 6; dx += 3) {
          const np = (y + dy) * w + (x + dx);
          if (np >= 0 && np < w * h && currentImageEdges[np] > 20) {
            localEdgeCount++;
          }
        }
      }
      if (localEdgeCount > 4) continue; // High variance = furniture or appliance, skip!

      const r = src[idx], g = src[idx + 1], b = src[idx + 2];
      const lum = (r * 77 + g * 150 + b * 29) >> 8;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const sat = max === 0 ? 0 : (max - min) / max;

      // Typical neutral light wall properties
      if (lum > 70 && lum < 246 && sat < 0.40) {
        floodFillFromPoint(x, y, currentTolerance, mask);
      }
    }
  }

  activeWallMask = smoothMask(mask, w, h);
}

// Render Painted Wall onto Canvas (ONLY Masked Wall Pixels are Touched!)
function renderMaskedPaint() {
  const canvas = document.getElementById('canvas-painted');
  if (!canvas || !originalImageData || !activeWallMask) return;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const src = originalImageData.data;
  const output = ctx.createImageData(w, h);
  const dst = output.data;

  const [pR, pG, pB] = currentSelectedColor.rgb;

  for (let i = 0; i < w * h; i++) {
    const pIdx = i * 4;
    const r = src[pIdx];
    const g = src[pIdx + 1];
    const b = src[pIdx + 2];
    const a = src[pIdx + 3];

    const maskVal = activeWallMask[i];

    if (maskVal === 0) {
      // 100% UNTOUCHED ORIGINAL PIXEL!
      // Sofas, wooden floors, windows, paintings, air conditioners stay completely pristine!
      dst[pIdx]     = r;
      dst[pIdx + 1] = g;
      dst[pIdx + 2] = b;
      dst[pIdx + 3] = a;
      continue;
    }

    const alpha = maskVal / 255;
    const origLum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Realistic Reflectance: preserve natural shadows and light gradients
    const factor = 0.35 + 0.75 * origLum;
    let rNew = pR * factor;
    let gNew = pG * factor;
    let bNew = pB * factor;

    // Specular Highlight Glint preservation (pencereden vuran güneş ve lamba parıltısı)
    if (origLum > 0.82) {
      const glint = (origLum - 0.82) / 0.18;
      rNew = rNew * (1 - glint) + r * glint;
      gNew = gNew * (1 - glint) + g * glint;
      bNew = bNew * (1 - glint) + b * glint;
    }

    // Blend into output with anti-aliased mask alpha
    dst[pIdx]     = Math.min(255, Math.max(0, Math.round(r * (1 - alpha) + rNew * alpha)));
    dst[pIdx + 1] = Math.min(255, Math.max(0, Math.round(g * (1 - alpha) + gNew * alpha)));
    dst[pIdx + 2] = Math.min(255, Math.max(0, Math.round(b * (1 - alpha) + bNew * alpha)));
    dst[pIdx + 3] = a;
  }

  ctx.putImageData(output, 0, 0);
}

// Alias for compatibility
function applyPaintToCanvas() {
  renderMaskedPaint();
}

// ==========================================================================
// 9. Interactive Selective Wall Tools, Eraser & Pointer Engine
// ==========================================================================

function setPaintTool(tool) {
  currentPaintTool = tool;
  paintTarget = tool;

  // Update tabs
  document.querySelectorAll('#paint-tools-nav .target-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tool === tool);
  });

  const layer = document.getElementById('interactive-tap-layer');
  if (layer) layer.setAttribute('data-tool', tool);

  const eraserControls = document.getElementById('eraser-controls-group');
  const eraserCircle = document.getElementById('eraser-cursor-circle');
  const hint = document.getElementById('tap-hint-pill');

  if (tool === 'eraser') {
    if (eraserControls) eraserControls.style.display = 'inline-flex';
    if (hint) hint.textContent = '🧹 Klimaya, tavana veya koltuğa dokunarak tek tıkla boyayı temizleyin veya sürükleyerek silin';
    showToast("🧹 Silgi aktif: Boyanan klimaya, koltuğa veya tavana dokunarak anında temizleyin");
  } else {
    if (eraserControls) eraserControls.style.display = 'none';
    if (eraserCircle) eraserCircle.style.display = 'none';
  }

  if (tool === 'box') {
    if (hint) hint.textContent = '📐 Duvarda boyamak istediğiniz alanı parmağınızla/fareyle kutu içine alın';
    showToast("📐 Bölge Seç: Duvarda boyamak istediğiniz bölgenin etrafına kutu çizin");
  } else if (tool === 'tap') {
    if (hint) hint.textContent = '🎯 Boyamak istediğiniz duvara dokunun (Klima, tavan ve koltuk kenar bariyerleriyle korunur)';
  } else if (tool === 'auto') {
    if (hint) hint.textContent = '🪄 Odadaki duvarlar otomatik algılanıp boyandı';
    autoDetectWalls();
    renderMaskedPaint();
    showToast("🪄 Odadaki duvarlar otomatik algılandı ve boyandı!");
  }
}

// Ceiling & Furniture Protection Toggle
function toggleCeilingGuard() {
  ceilingGuardEnabled = !ceilingGuardEnabled;
  const btn = document.getElementById('btn-ceiling-guard');
  const txt = document.getElementById('guard-text');
  if (btn && txt) {
    if (ceilingGuardEnabled) {
      btn.classList.remove('disabled');
      btn.classList.add('active');
      txt.textContent = 'Tavanı Koru: AÇIK';
      showToast("🛡️ Tavan koruması aktif: Tavan ve kartonpiyerler kesinlikle boyanmaz");
    } else {
      btn.classList.remove('active');
      btn.classList.add('disabled');
      txt.textContent = 'Tavanı Koru: KAPALI';
      showToast("⚠️ Tavan koruması kapatıldı");
    }
  }
}

// Eraser brush size setter
function setEraserBrushSize(size) {
  eraserBrushSize = parseInt(size, 10) || 30;
  document.querySelectorAll('.btn-brush-size').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.size, 10) === eraserBrushSize);
  });
  const eraserCircle = document.getElementById('eraser-cursor-circle');
  if (eraserCircle) {
    eraserCircle.style.width = `${eraserBrushSize * 2}px`;
    eraserCircle.style.height = `${eraserBrushSize * 2}px`;
  }
}

// Smart tap-to-unpaint: single tap on AC or sofa clears that entire connected object!
function unpaintAtPoint(clickX, clickY) {
  if (!originalImageData || !activeWallMask) return;
  const w = originalImageData.width;
  const h = originalImageData.height;
  const src = originalImageData.data;

  let seedPos = clickY * w + clickX;
  if (activeWallMask[seedPos] === 0) {
    // If clicked on border, find nearest painted pixel within 14px
    for (let r = 1; r <= 14; r += 2) {
      let found = false;
      for (let dy = -r; dy <= r; dy += 2) {
        for (let dx = -r; dx <= r; dx += 2) {
          const nx = clickX + dx;
          const ny = clickY + dy;
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            const p = ny * w + nx;
            if (activeWallMask[p] > 0) {
              seedPos = p;
              found = true;
              break;
            }
          }
        }
        if (found) break;
      }
      if (found) break;
    }
  }

  if (activeWallMask[seedPos] === 0) {
    showToast("ℹ️ Bu noktada silinecek boya bulunmuyor.");
    return;
  }

  const seedIdx = seedPos * 4;
  const seedR = src[seedIdx];
  const seedG = src[seedIdx + 1];
  const seedB = src[seedIdx + 2];

  const queue = new Int32Array(w * h);
  let qStart = 0;
  let qEnd = 0;
  const visited = new Uint8Array(w * h);

  visited[seedPos] = 1;
  activeWallMask[seedPos] = 0;
  queue[qEnd++] = seedPos;

  let clearedCount = 0;
  while (qStart < qEnd) {
    const curr = queue[qStart++];
    clearedCount++;
    const cx = curr % w;
    const cy = Math.floor(curr / w);

    const neighbors = [
      cy > 0 ? curr - w : -1,
      cy < h - 1 ? curr + w : -1,
      cx > 0 ? curr - 1 : -1,
      cx < w - 1 ? curr + 1 : -1
    ];

    for (let i = 0; i < 4; i++) {
      const n = neighbors[i];
      if (n === -1 || visited[n]) continue;
      visited[n] = 1;

      if (activeWallMask[n] > 0) {
        // Stop at strong outer edge separating object from wall
        if (currentImageEdges && currentImageEdges[n] > 18) {
          activeWallMask[n] = 0;
          continue;
        }

        const pIdx = n * 4;
        const dr = src[pIdx] - seedR;
        const dg = src[pIdx + 1] - seedG;
        const db = src[pIdx + 2] - seedB;
        const dist = Math.sqrt(dr * dr + dg * dg + db * db);

        if (dist < 85) {
          activeWallMask[n] = 0;
          queue[qEnd++] = n;
        }
      }
    }
  }

  renderMaskedPaint();
  showToast("🧹 Klima/Eşya üzerindeki boya başarıyla temizlendi!");
}

// Drag Eraser Brush
function eraseBrush(centerX, centerY, radius) {
  if (!activeWallMask || !originalImageData) return;
  const w = originalImageData.width;
  const h = originalImageData.height;
  const r2 = radius * radius;

  const minX = Math.max(0, centerX - radius);
  const maxX = Math.min(w - 1, centerX + radius);
  const minY = Math.max(0, centerY - radius);
  const maxY = Math.min(h - 1, centerY + radius);

  let erased = false;
  for (let y = minY; y <= maxY; y++) {
    const row = y * w;
    for (let x = minX; x <= maxX; x++) {
      const dx = x - centerX;
      const dy = y - centerY;
      if (dx * dx + dy * dy <= r2) {
        const pos = row + x;
        if (activeWallMask[pos] > 0) {
          activeWallMask[pos] = 0;
          erased = true;
        }
      }
    }
  }
  if (erased) renderMaskedPaint();
}

// Paint only inside the user's dragged bounding box
function paintSelectedRegion() {
  if (!selectionBox || !originalImageData) return;
  const w = originalImageData.width;
  const h = originalImageData.height;

  const minX = Math.max(0, Math.min(selectionBox.x1, selectionBox.x2));
  const maxX = Math.min(w - 1, Math.max(selectionBox.x1, selectionBox.x2));
  const minY = Math.max(0, Math.min(selectionBox.y1, selectionBox.y2));
  const maxY = Math.min(h - 1, Math.max(selectionBox.y1, selectionBox.y2));

  if (maxX - minX < 15 || maxY - minY < 15) {
    showToast("⚠️ Lütfen biraz daha geniş bir duvar alanı seçin.");
    return;
  }

  if (!activeWallMask) activeWallMask = new Uint8Array(w * h);

  // Probe seed point inside box avoiding edges
  let bestX = Math.round((minX + maxX) / 2);
  let bestY = Math.round((minY + maxY) / 2);

  if (currentImageEdges && currentImageEdges[bestY * w + bestX] > 18) {
    // Find nearby clean spot
    for (let dy = -10; dy <= 10; dy += 4) {
      for (let dx = -10; dx <= 10; dx += 4) {
        const nx = bestX + dx;
        const ny = bestY + dy;
        if (nx >= minX && nx <= maxX && ny >= minY && ny <= maxY) {
          if (currentImageEdges[ny * w + nx] < 15) {
            bestX = nx;
            bestY = ny;
            break;
          }
        }
      }
    }
  }

  floodFillFromPoint(bestX, bestY, currentTolerance, activeWallMask, selectionBox);
  renderMaskedPaint();

  cancelSelection();
  showToast(`✨ Seçtiğiniz duvar alanı ${currentSelectedColor.code} ile boyandı!`);
}

function cancelSelection() {
  selectionBox = null;
  isBoxSelecting = false;
  boxDragStart = null;
  const marquee = document.getElementById('selection-marquee');
  const actionBubble = document.getElementById('selection-action-bubble');
  if (marquee) marquee.style.display = 'none';
  if (actionBubble) actionBubble.style.display = 'none';
}

function clearPaintedWalls() {
  if (!canvas || !originalImageData) return;
  const w = originalImageData.width;
  const h = originalImageData.height;
  activeWallMask = new Uint8Array(w * h);
  cancelSelection();
  renderMaskedPaint();
  showToast("🧹 Boyanmış duvarlar sıfırlandı. Orijinal odaya dönüldü.");
}

function updateTolerance(val) {
  currentTolerance = parseInt(val, 10) || 30;
  const valEl = document.getElementById('tolerance-val');
  if (valEl) valEl.textContent = currentTolerance;
}

// Unified Pointer & Touch Event Setup for interactive-tap-layer
function setupTapToPaint() {
  const layer = document.getElementById('interactive-tap-layer');
  const canvas = document.getElementById('canvas-painted');
  const viewport = document.getElementById('canvas-viewport');
  const marquee = document.getElementById('selection-marquee');
  const actionBubble = document.getElementById('selection-action-bubble');
  const eraserCircle = document.getElementById('eraser-cursor-circle');

  if (!layer || !canvas || !viewport) return;

  function getCanvasCoords(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.round((clientX - rect.left) * scaleX);
    const y = Math.round((clientY - rect.top) * scaleY);
    const vRect = viewport.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(canvas.width - 1, x)),
      y: Math.max(0, Math.min(canvas.height - 1, y)),
      viewportX: clientX - vRect.left,
      viewportY: clientY - vRect.top
    };
  }

  let pointerDownPos = null;
  let hasMoved = false;

  layer.addEventListener('pointerdown', (e) => {
    if (isVideoMode || !originalImageData) return;
    try {
      layer.setPointerCapture(e.pointerId);
    } catch (_) {}
    pointerDownPos = { clientX: e.clientX, clientY: e.clientY };
    hasMoved = false;

    const coords = getCanvasCoords(e.clientX, e.clientY);

    if (currentPaintTool === 'box') {
      isBoxSelecting = true;
      boxDragStart = coords;
      if (actionBubble) actionBubble.style.display = 'none';
      if (marquee) {
        marquee.style.display = 'block';
        marquee.style.left = `${coords.viewportX}px`;
        marquee.style.top = `${coords.viewportY}px`;
        marquee.style.width = '0px';
        marquee.style.height = '0px';
      }
    } else if (currentPaintTool === 'eraser') {
      isErasing = true;
      if (eraserCircle) {
        eraserCircle.style.display = 'block';
        eraserCircle.style.width = `${eraserBrushSize * 2}px`;
        eraserCircle.style.height = `${eraserBrushSize * 2}px`;
        eraserCircle.style.left = `${coords.viewportX}px`;
        eraserCircle.style.top = `${coords.viewportY}px`;
      }
      eraseBrush(coords.x, coords.y, eraserBrushSize);
    }
  });

  layer.addEventListener('pointermove', (e) => {
    if (isVideoMode || !originalImageData) return;
    const coords = getCanvasCoords(e.clientX, e.clientY);

    if (pointerDownPos) {
      const dist = Math.hypot(e.clientX - pointerDownPos.clientX, e.clientY - pointerDownPos.clientY);
      if (dist > 5) hasMoved = true;
    }

    if (currentPaintTool === 'eraser') {
      if (eraserCircle) {
        eraserCircle.style.display = 'block';
        eraserCircle.style.width = `${eraserBrushSize * 2}px`;
        eraserCircle.style.height = `${eraserBrushSize * 2}px`;
        eraserCircle.style.left = `${coords.viewportX}px`;
        eraserCircle.style.top = `${coords.viewportY}px`;
      }
      if (isErasing) {
        eraseBrush(coords.x, coords.y, eraserBrushSize);
      }
    } else if (currentPaintTool === 'box' && isBoxSelecting && boxDragStart) {
      const x1 = Math.min(boxDragStart.viewportX, coords.viewportX);
      const y1 = Math.min(boxDragStart.viewportY, coords.viewportY);
      const w = Math.abs(coords.viewportX - boxDragStart.viewportX);
      const h = Math.abs(coords.viewportY - boxDragStart.viewportY);

      if (marquee) {
        marquee.style.display = 'block';
        marquee.style.left = `${x1}px`;
        marquee.style.top = `${y1}px`;
        marquee.style.width = `${w}px`;
        marquee.style.height = `${h}px`;
      }

      const label = document.getElementById('selection-label');
      if (label) {
        const canW = Math.abs(coords.x - boxDragStart.x);
        const canH = Math.abs(coords.y - boxDragStart.y);
        label.textContent = `Seçilen Duvar: ${canW} × ${canH} px`;
      }
    }
  });

  const handlePointerEnd = (e) => {
    if (isVideoMode || !originalImageData) return;
    try {
      layer.releasePointerCapture(e.pointerId);
    } catch (_) {}

    const coords = getCanvasCoords(e.clientX, e.clientY);

    if (currentPaintTool === 'tap') {
      if (!hasMoved) {
        createTapRipple(coords.viewportX, coords.viewportY);
        if (!activeWallMask) activeWallMask = new Uint8Array(canvas.width * canvas.height);
        floodFillFromPoint(coords.x, coords.y, currentTolerance, activeWallMask);
        renderMaskedPaint();
        showToast(`🎯 Duvar seçildi ve ${currentSelectedColor.code} ile boyandı!`);
      }
    } else if (currentPaintTool === 'eraser') {
      isErasing = false;
      if (!hasMoved) {
        // Single tap with eraser on an appliance/sofa/ceiling: smart unpaint!
        unpaintAtPoint(coords.x, coords.y);
      }
    } else if (currentPaintTool === 'box' && isBoxSelecting) {
      isBoxSelecting = false;
      if (boxDragStart) {
        const canX1 = Math.min(boxDragStart.x, coords.x);
        const canX2 = Math.max(boxDragStart.x, coords.x);
        const canY1 = Math.min(boxDragStart.y, coords.y);
        const canY2 = Math.max(boxDragStart.y, coords.y);

        if (canX2 - canX1 > 20 && canY2 - canY1 > 20) {
          selectionBox = { x1: canX1, y1: canY1, x2: canX2, y2: canY2 };
          if (actionBubble) {
            const centerX = Math.min(boxDragStart.viewportX, coords.viewportX) + Math.abs(coords.viewportX - boxDragStart.viewportX) / 2;
            const topY = Math.min(boxDragStart.viewportY, coords.viewportY);
            actionBubble.style.left = `${centerX}px`;
            actionBubble.style.top = `${Math.max(50, topY - 10)}px`;
            actionBubble.style.display = 'flex';
          }
        } else {
          cancelSelection();
        }
      }
    }

    pointerDownPos = null;
    hasMoved = false;
  };

  layer.addEventListener('pointerup', handlePointerEnd);
  layer.addEventListener('pointercancel', handlePointerEnd);
  layer.addEventListener('pointerleave', () => {
    if (eraserCircle && currentPaintTool === 'eraser' && !isErasing) {
      eraserCircle.style.display = 'none';
    }
  });
}

function createTapRipple(x, y) {
  const box = document.getElementById('photo-visualizer-box');
  if (!box) return;

  const ripple = document.createElement('div');
  ripple.className = 'paint-ripple';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.borderColor = currentSelectedColor.hex;
  box.appendChild(ripple);

  setTimeout(() => ripple.remove(), 700);
}

function updateTolerance(val) {
  currentTolerance = parseInt(val, 10) || 38;
  const valEl = document.getElementById('tolerance-val');
  if (valEl) valEl.textContent = currentTolerance;
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

  // Draw original video frame
  ctx.drawImage(video, 0, 0, w, h);

  // Fast pixel-level wall segmentation for live video (only neutral light surfaces in upper/mid room)
  const frame = ctx.getImageData(0, 0, w, h);
  const data = frame.data;
  const [pR, pG, pB] = currentSelectedColor.rgb;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const y = Math.floor((i / 4) / w);
    // Don't paint floor (bottom 25%)
    if (y > h * 0.75) continue;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lum = (0.299 * r + 0.587 * g + 0.114 * b);
    const sat = max === 0 ? 0 : (max - min) / max;

    // Only light neutral pixels (walls)
    if (lum > 90 && lum < 245 && sat < 0.28) {
      const alpha = 0.85;
      const factor = (0.3 + 0.7 * (lum / 255));
      data[i]     = Math.round(r * (1 - alpha) + pR * factor * alpha);
      data[i + 1] = Math.round(g * (1 - alpha) + pG * factor * alpha);
      data[i + 2] = Math.round(b * (1 - alpha) + pB * factor * alpha);
    }
  }

  ctx.putImageData(frame, 0, 0);
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
window.setPaintTool = setPaintTool;
window.setPaintTarget = setPaintTool; // backwards compatibility alias
window.toggleCeilingGuard = toggleCeilingGuard;
window.setEraserBrushSize = setEraserBrushSize;
window.paintSelectedRegion = paintSelectedRegion;
window.cancelSelection = cancelSelection;
window.unpaintAtPoint = unpaintAtPoint;
window.clearPaintedWalls = clearPaintedWalls;
window.updateTolerance = updateTolerance;
window.toggleSplitComparison = toggleSplitComparison;
window.resetToOriginal = resetToOriginal;
window.downloadPaintedPhoto = downloadPaintedPhoto;
window.shareOnWhatsApp = shareOnWhatsApp;
window.openRenomateCalc = openRenomateCalc;
window.toggleInfoModal = toggleInfoModal;


