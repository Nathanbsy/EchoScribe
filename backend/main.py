"""
Main entry point for the Python backend
"""

from api.server import APIServer
from utils.logger import setup_logger

logger = setup_logger(__name__)


def main():
    """Main function"""
    logger.info("Starting EchoScribe Backend...")
    
    server = APIServer()
    server.run()


if __name__ == "__main__":
    main()
