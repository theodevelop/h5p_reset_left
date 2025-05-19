browser.commands.onCommand.addListener((command) => {
  if (command === "reset-h5p-left") {
    browser.tabs.query({ active: true, currentWindow: true })
      .then((tabs) => {
        if (!tabs[0]?.id) return;
        browser.tabs.executeScript(tabs[0].id, {
          code: `
            document.querySelectorAll('iframe.h5p-iframe').forEach(iframe => {
              iframe.style.setProperty('left', '0px', 'important');
            });
          `
        });
      });
  }
});
