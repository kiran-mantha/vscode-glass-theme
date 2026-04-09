// VS Code Cursor Glow Effect
(function () {
  let glow = null;
  let mouseX = -9999;
  let mouseY = -9999;
  let rafId = null;

  function updateGlowPosition() {
    if (glow) {
      glow.style.left = mouseX + 'px';
      glow.style.top = mouseY + 'px';
    }
    rafId = null;
  }

  // Single persistent mouse handler — bound once, not on every re-init
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!rafId) {
      rafId = requestAnimationFrame(updateGlowPosition);
    }
  });

  function initGlow() {
    // Skip if glow element is already in the DOM
    if (document.getElementById('vscode-cursor-glow')) return;

    glow = document.createElement('div');
    glow.id = 'vscode-cursor-glow';
    glow.style.left = '-9999px';
    glow.style.top = '-9999px';
    document.body.appendChild(glow);
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlow);
  } else {
    initGlow();
  }

  // Re-insert the glow when VS Code removes it from the DOM
  const observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var nodes = mutations[i].removedNodes;
      for (var j = 0; j < nodes.length; j++) {
        var node = nodes[j];
        if (node.nodeType === 1 && node.id === 'vscode-cursor-glow') {
          initGlow();
          return;
        }
      }
    }
  });
  observer.observe(document.body, { childList: true });
})();
