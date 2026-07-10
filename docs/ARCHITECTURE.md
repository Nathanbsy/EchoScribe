# 🏗️ Arquitetura do EchoScribe

## Visão Geral

EchoScribe é uma aplicação desktop com uma arquitetura de **duas camadas principais**:

1. **Frontend (Electron)** - Interface do usuário
2. **Backend (Python)** - Processamento e lógica de negócio

## Fluxo de Comunicação

```
┌─────────────────┐
│   Renderer      │ (React/Vue ou JavaScript puro)
│   (Electron)    │
└────────┬────────┘
         │
         │ IPC (Inter-Process Communication)
         │
┌────────▼────────┐
│   Main Process  │ (Node.js - Electron)
│   (Electron)    │
└────────┬────────┘
         │
         │ HTTP REST API
         │
┌────────▼────────┐
│  Flask Server   │ (Python Backend)
│  (127.0.0.1:5000)
└────────┬────────┘
         │
    ┌────┴────┬────────┬─────────────┐
    │          │        │             │
┌───▼──┐  ┌───▼──┐ ┌───▼──┐  ┌──────▼──┐
│Trans │  │Subtl │ │Realtime  │Utils│
│crip  │  │itle  │ │Transcrip │     │
└──────┘  └──────┘ └──────────┘  └──────┘
```

## Componentes Principais

### Frontend (Electron Renderer)
- Interface gráfica com 3 módulos principais
- Navegação entre módulos
- Upload de arquivos
- Exibição de resultados

### Main Process (Electron)
- Gerenciamento de janelas
- Handlers IPC para comunicação com renderer
- Coordenação com backend Python

### Backend Python
- **API Server (Flask)**: Recebe requisições HTTP do Electron
- **Módulos de Processamento**:
  - `Transcriber`: Transcrição de arquivos
  - `SubtitleGenerator`: Geração de legendas
  - `StreamTranscriber`: Transcrição em tempo real

## Fluxos de Dados

### Transcrição de Vídeo
```
1. Usuário seleciona vídeo no frontend
2. Frontend envia requisição IPC para main process
3. Main process faz HTTP POST para /api/transcribe
4. Backend processa o vídeo
5. Retorna transcription com timestamps
6. Frontend exibe resultado
```

### Geração de Legendas
```
1. Usuário envia transcrição + vídeo
2. Frontend envia para /api/generate-subtitles
3. Backend mapeia tempos e cria arquivo de legendas
4. Opcionalmente incorpora legendas no vídeo
5. Retorna arquivo de legendas
```

### Transcrição em Tempo Real
```
1. Usuário clica "Iniciar" no módulo realtime
2. Frontend solicita ao backend que inicie listening
3. Backend monitora entrada de áudio
4. Envia updates via WebSocket ou polling
5. Frontend atualiza transcription em tempo real
```

## Segurança

- **Context Isolation**: Ativado no Electron (preload.js)
- **Node Integration**: Desativado
- **API Endpoints**: Apenas localhost (127.0.0.1)
- **Validação**: Validar todos os inputs no backend

## Escalabilidade

Para versões futuras:
- Implementar WebSockets para atualizações em tempo real
- Cache de transcrições
- Suporte a múltiplos idiomas
- Processamento em background com fila de jobs

---

**Última atualização**: 2024
