chrome.storage.sync.get(['color', 'text'], (data) => {
    const banner = document.createElement('div');
    banner.textContent = data.text || 'CUI - UNNPI';
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = data.color || 'green';
    banner.style.color = 'white';
    banner.style.zIndex = '1000';
    banner.style.textAlign = 'center';
    banner.style.padding = '5px';
    banner.style.fontSize = '18px';
    banner.style.opacity = '0.8';
    document.body.appendChild(banner);

    window.onload = () => {
        const bannerHeight = banner.offsetHeight;
        document.body.style.paddingTop = `${bannerHeight}px`;
    };
});
