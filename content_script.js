browser.runtime.onMessage.addListener((msg) => {
  if (msg === "resetLeft") {
    document.querySelectorAll('iframe.h5p-iframe').forEach(iframe => {
      iframe.style.setProperty('left', '0px', 'important');
    });
  }
});

browser.tabs.sendMessage(tabs[0].id, "resetLeft");
