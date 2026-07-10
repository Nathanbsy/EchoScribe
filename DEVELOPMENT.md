# Development setup guide for EchoScribe

## 🔧 Instalação e Configuração

### Pré-requisitos
- Python 3.8+
- Node.js 14+
- npm ou yarn

### 1. Clonar o repositório e instalar dependências

```bash
# Instalar dependências Node.js
npm install

# Instalar dependências Python
pip install -r requirements.txt
```

### 2. Configurar variáveis de ambiente

```bash
# Copiar arquivo de exemplo
cp .env.example .env

# Editar .env com suas configurações
# (Deixar valores padrão é suficiente para começar)
```

### 3. Estrutura de desenvolvimento

```
Terminal 1: Backend Python
cd backend
python main.py

Terminal 2: Frontend Electron
npm start
```

Ou usar o comando de desenvolvimento simultâneo:
```bash
npm run dev
```

## 📁 Estrutura de Pastas

- `src/main/` - Processo principal do Electron (Node.js)
- `src/renderer/` - Interface do usuário (HTML/CSS/JS)
- `backend/` - Backend Python com os 3 módulos
- `backend/modules/transcription/` - Módulo de transcrição
- `backend/modules/subtitle/` - Módulo de legendas
- `backend/modules/realtime/` - Módulo de tempo real
- `backend/api/` - Servidor Flask com endpoints REST

## 🚀 Próximas Implementações

### 1. Transcrição de Vídeo
- [ ] Integrar OpenAI Whisper ou Google Speech Recognition
- [ ] Implementar endpoint `/api/transcribe`
- [ ] Adicionar processamento assíncrono com fila
- [ ] Barra de progresso no frontend

### 2. Geração de Legendas
- [ ] Implementar gerador de legendas (SRT, VTT)
- [ ] Incorporar legendas no vídeo
- [ ] Endpoint `/api/generate-subtitles`
- [ ] Suporte a múltiplos idiomas

### 3. Transcrição em Tempo Real
- [ ] Captura de áudio do microfone
- [ ] WebSocket para atualizações em tempo real
- [ ] Endpoints `/api/realtime/start` e `/api/realtime/stop`
- [ ] Exibição live no frontend

## 📝 Convenções de Código

### Python
- Usar type hints
- Documentar classes e funções com docstrings
- Seguir PEP 8 (use `black` para formatação)
- Usar `logging` para debug

### JavaScript
- Usar ES6+
- Comentar funções complexas
- Seguir convenção camelCase para variáveis

## 🐛 Debugging

### Backend Python
```python
from backend.utils.logger import setup_logger
logger = setup_logger(__name__)
logger.info("Mensagem de debug")
```

### Frontend Electron
- Abrir DevTools: F12
- Console para ver logs do renderer
- Network tab para ver requisições à API

## 📚 Referências

- [Electron Docs](https://www.electronjs.org/docs)
- [Flask Docs](https://flask.palletsprojects.com/)
- [OpenAI Whisper](https://github.com/openai/whisper)

## ❓ Solução de Problemas

### Porta 5000 já em uso
```bash
# Mudar porta no .env
API_PORT=5001
```

### Módulo Python não encontrado
```bash
# Garantir que está no diretório correto
cd echoscribe
pip install -r requirements.txt
```

### Electron não encontra pré-requisitos
```bash
# Limpar node_modules e reinstalar
rm -rf node_modules
npm install
```

---

Qualquer dúvida, consulte a documentação em `docs/ARCHITECTURE.md`
