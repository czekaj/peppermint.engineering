function initializePopup() {
  const popup = document.getElementById('demo-popup');
  const openButtons = document.querySelectorAll('[id^="open-popup"]');
  const closeButton = document.getElementById('close-popup');

  if (popup && openButtons.length > 0 && closeButton) {
    openButtons.forEach(button => {
      button.addEventListener('click', () => {
        popup.classList.remove('hidden');
        popup.classList.add('flex');
      });
    });

    closeButton.addEventListener('click', () => {
      popup.classList.remove('flex');
      popup.classList.add('hidden');
    });
  } else {
    console.error('Popup elements not found');
  }
}

// Try to initialize immediately
initializePopup();

// If it fails, try again when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePopup);

// If it still fails, try one last time after a short delay
window.addEventListener('load', () => setTimeout(initializePopup, 500));
