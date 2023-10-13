document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('color');
    const textInput = document.getElementById('text');
    const saveButton = document.getElementById('save');

    // Load saved settings
    chrome.storage.sync.get(['color', 'text'], (data) => {
        colorInput.value = data.color || '#00FF00';  // Default green color
        textInput.value = data.text || 'CUI - UNNPI'; // Default text
    });

    // Save settings
    saveButton.addEventListener('click', () => {
        const color = colorInput.value;
        const text = textInput.value;
        chrome.storage.sync.set({color, text}, () => {
            alert('Settings saved');
        });
    });
});
