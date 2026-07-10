"""
Configuration management
"""

import os
from pathlib import Path


class Config:
    """Application configuration"""

    # Base directories
    BASE_DIR = Path(__file__).parent.parent.parent
    BACKEND_DIR = BASE_DIR / "backend"
    
    # Supported formats
    SUPPORTED_VIDEO_FORMATS = [".mp4", ".avi", ".mov", ".mkv", ".flv", ".wmv"]
    SUPPORTED_AUDIO_FORMATS = [".mp3", ".wav", ".m4a", ".flac", ".aac"]
    
    # Subtitle formats
    SUBTITLE_FORMATS = ["srt", "vtt", "ass", "ssa"]
    
    # API Settings
    API_HOST = os.getenv("API_HOST", "127.0.0.1")
    API_PORT = int(os.getenv("API_PORT", "5000"))
    API_DEBUG = os.getenv("API_DEBUG", "False").lower() == "true"
    
    # Model settings
    MODEL_NAME = os.getenv("MODEL_NAME", "base")  # tiny, base, small, medium, large
