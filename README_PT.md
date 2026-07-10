# 🎤 EchoScribe - Transcrição de Vídeos Desktop

Um aplicativo desktop moderno para transcrição de vídeos, geração de legendas e transcrição em tempo real, construído com **Python** (backend) e **Electron** (frontend).

## 🎯 Características

### 1. **Transcrever Vídeo** 📝
- Upload de arquivos de vídeo
- Transcrição automática usando tecnologia de reconhecimento de fala
- Suporte para múltiplos formatos de vídeo (MP4, AVI, MOV, MKV, etc.)
- Exportação de transcrição em texto

### 2. **Gerar Legendas** 📺
- Crie legendas automaticamente a partir de vídeos
- Suporte para múltiplos formatos (SRT, VTT, ASS)
- Incorporação de legendas no vídeo original
- Sincronização automática de timing

### 3. **Transcrição em Tempo Real** 🎤
- Transcrição live de áudio
- Suporte para múltiplos dispositivos de entrada
- Exibição em tempo real do texto transcrito
- Salvar sessões de transcrição

## 🏗️ Estrutura do Projeto

```
echoscribe/
├── src/
│   ├── main/                 # Processo principal do Electron
│   │   ├── main.js          # Janela principal e IPC handlers
│   │   └── preload.js       # Segurança e exposição de APIs
│   └── renderer/            # Frontend (interface do usuário)
│       ├── index.html       # Estrutura HTML
│       ├── index.js         # Lógica JavaScript
│       └── styles.css       # Estilos
├── backend/                 # Backend Python
│   ├── modules/
│   │   ├── transcription/   # Módulo de transcrição
│   │   ├── subtitle/        # Módulo de legendas
│   │   └── realtime/        # Módulo de transcrição em tempo real
│   ├── api/                 # API Flask
│   ├── utils/               # Utilitários (logger, config)
│   └── main.py              # Ponto de entrada do backend
├── assets/                  # Imagens, ícones, etc.
├── docs/                    # Documentação
├── requirements.txt         # Dependências Python
└── package.json            # Dependências Node.js
```

## 🚀 Próximos Passos

1. **Instalar dependências Python**
   ```bash
   pip install -r requirements.txt
   ```

2. **Instalar dependências Node.js**
   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente**
   - Criar arquivo `.env` na raiz do projeto
   - Adicionar configurações necessárias

4. **Implementar os módulos**
   - Transcrição
   - Geração de legendas
   - Transcrição em tempo real

5. **Desenvolvimento**
   - Iniciar servidor Python backend
   - Iniciar servidor Electron frontend

## 📦 Tecnologias

- **Frontend**: Electron, HTML5, CSS3, JavaScript
- **Backend**: Python, Flask, Librosa, ffmpeg-python
- **Comunicação**: IPC (Inter-Process Communication)
- **Transcrição**: OpenAI Whisper ou Google Speech Recognition

## 📝 Notas

Este é apenas o esqueleto inicial do projeto. A próxima fase será implementar a lógica real para cada módulo.

---

**Desenvolvido com ❤️ para transcrição de conteúdo multimídia**
