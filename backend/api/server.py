"""
Main API server
Flask/FastAPI server for handling requests from Electron frontend
"""

from flask import Flask, request, jsonify
from utils.logger import setup_logger
from utils.config import Config

logger = setup_logger(__name__)


class APIServer:
    """Main API server class"""

    def __init__(self):
        self.app = Flask(__name__)
        self.setup_routes()

    def setup_routes(self):
        """Setup API routes"""
        
        @self.app.route('/api/health', methods=['GET'])
        def health():
            return jsonify({"status": "ok"}), 200

        @self.app.route('/api/transcribe', methods=['POST'])
        def transcribe():
            """Handle transcription request"""
            pass

        @self.app.route('/api/generate-subtitles', methods=['POST'])
        def generate_subtitles():
            """Handle subtitle generation request"""
            pass

        @self.app.route('/api/realtime/start', methods=['POST'])
        def start_realtime():
            """Start real-time transcription"""
            pass

        @self.app.route('/api/realtime/stop', methods=['POST'])
        def stop_realtime():
            """Stop real-time transcription"""
            pass

    def run(self):
        """Start the API server"""
        self.app.run(
            host=Config.API_HOST,
            port=Config.API_PORT,
            debug=Config.API_DEBUG
        )


if __name__ == "__main__":
    server = APIServer()
    logger.info(f"Starting API server on {Config.API_HOST}:{Config.API_PORT}")
    server.run()
