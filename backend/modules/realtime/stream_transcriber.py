"""
Real-time stream transcription handler
Handles live audio streaming and transcription
"""


class StreamTranscriber:
    """Class to handle real-time audio stream transcription"""

    def __init__(self):
        self.is_listening = False

    def start_listening(self) -> bool:
        """
        Start listening to audio stream
        
        Returns:
            Success status
        """
        pass

    def stop_listening(self) -> bool:
        """
        Stop listening to audio stream
        
        Returns:
            Success status
        """
        pass

    def get_transcription(self) -> str:
        """
        Get current transcription from the stream
        
        Returns:
            Current transcription text
        """
        pass

    def get_available_devices(self) -> list:
        """Get list of available audio devices"""
        pass
