/**
 * Preload script
 * Exposes safe IPC methods to the renderer process
 */

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  /**
   * Transcription API
   */
  transcribeFile: (filePath) =>
    ipcRenderer.invoke('invoke-transcribe', filePath),

  /**
   * Subtitle generation API
   */
  generateSubtitles: (transcriptionData) =>
    ipcRenderer.invoke('invoke-generate-subtitles', transcriptionData),

  /**
   * Real-time transcription API
   */
  startRealtimeTranscription: () =>
    ipcRenderer.invoke('invoke-realtime-start'),

  stopRealtimeTranscription: () =>
    ipcRenderer.invoke('invoke-realtime-stop'),

  /**
   * Receive messages from main process
   */
  onTranscriptionProgress: (callback) =>
    ipcRenderer.on('transcription-progress', (event, data) =>
      callback(data)
    ),

  onRealtimeUpdate: (callback) =>
    ipcRenderer.on('realtime-update', (event, data) => callback(data)),
});
