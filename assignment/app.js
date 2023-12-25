document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const recordButton = document.getElementById('record-button');
  
    let mediaRecorder;
    let audioChunks = [];
  
    recordButton.addEventListener('click', async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
  
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunks.push(event.data);
          }
        };
  
        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
  
          // Simulate playing back audio
          playAudio(audioUrl);
  
          // Display user message in the chat
          displayMessage(userInput.value, 'user');
  
          // Clear the input field
          userInput.value = '';
          audioChunks = [];
        };
  
        // Start recording
        mediaRecorder.start();
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    });
  
    function displayMessage(message, sender) {
      const messageElement = document.createElement('div');
      messageElement.className = `message ${sender}`;
      messageElement.innerHTML = message;
      chatMessages.appendChild(messageElement);
  
      // Scroll to the bottom to show the latest message
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    function playAudio(audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  });
  