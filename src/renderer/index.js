/**
 * Renderer process entry point
 * Main React/Vue application will be loaded here
 */

const root = document.getElementById('root');

// Create main container
const container = document.createElement('div');
container.className = 'app-container';

// Create navigation
const nav = document.createElement('nav');
nav.className = 'navigation';
nav.innerHTML = `
  <div class="nav-header">
    <h1>EchoScribe</h1>
  </div>
  <ul class="nav-items">
    <li class="nav-item active" data-module="transcribe">
      <span>📝 Transcrever Vídeo</span>
    </li>
    <li class="nav-item" data-module="subtitle">
      <span>📺 Gerar Legendas</span>
    </li>
    <li class="nav-item" data-module="realtime">
      <span>🎤 Transcrição em Tempo Real</span>
    </li>
  </ul>
`;

// Create main content area
const content = document.createElement('div');
content.className = 'content-area';
content.id = 'content';

container.appendChild(nav);
container.appendChild(content);
root.appendChild(container);

// Module loader
function loadModule(moduleName) {
  const content = document.getElementById('content');
  content.innerHTML = '';

  switch (moduleName) {
    case 'transcribe':
      loadTranscribeModule(content);
      break;
    case 'subtitle':
      loadSubtitleModule(content);
      break;
    case 'realtime':
      loadRealtimeModule(content);
      break;
  }
}

function loadTranscribeModule(container) {
  container.innerHTML = `
    <div class="module">
      <h2>Transcrever Vídeo</h2>
      <p>Selecione um arquivo de vídeo para transcrever</p>
      <input type="file" id="videoFile" accept="video/*" />
      <button id="transcribeBtn">Iniciar Transcrição</button>
      <div id="transcribeResult"></div>
    </div>
  `;
}

function loadSubtitleModule(container) {
  container.innerHTML = `
    <div class="module">
      <h2>Gerar Legendas</h2>
      <p>Crie legendas para seus vídeos</p>
      <input type="file" id="videoFile" accept="video/*" />
      <select id="subtitleFormat">
        <option value="srt">SRT</option>
        <option value="vtt">VTT</option>
        <option value="ass">ASS</option>
      </select>
      <button id="generateSubtitlesBtn">Gerar Legendas</button>
      <div id="subtitleResult"></div>
    </div>
  `;
}

function loadRealtimeModule(container) {
  container.innerHTML = `
    <div class="module">
      <h2>Transcrição em Tempo Real</h2>
      <p>Transcreva áudio em tempo real</p>
      <button id="startBtn">Iniciar</button>
      <button id="stopBtn" disabled>Parar</button>
      <div id="liveTranscription"></div>
    </div>
  `;
}

// Navigation event listeners
document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((i) => i.classList.remove('active'));
    item.classList.add('active');
    const moduleName = item.getAttribute('data-module');
    loadModule(moduleName);
  });
});

// Load initial module
loadModule('transcribe');
