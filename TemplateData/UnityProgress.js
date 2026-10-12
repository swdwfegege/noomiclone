```javascript
function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module)
    return;

  if (!unityInstance.logo) {
    unityInstance.logo = document.createElement("div");
    unityInstance.logo.className =
      "logo " + unityInstance.Module.splashScreenStyle;
    unityInstance.container.appendChild(unityInstance.logo);
  }

  if (!unityInstance.progress) {
    unityInstance.progress = document.createElement("div");
    unityInstance.progress.className =
      "progress " + unityInstance.Module.splashScreenStyle;

    unityInstance.progress.empty = document.createElement("div");
    unityInstance.progress.empty.className = "empty";
    unityInstance.progress.appendChild(unityInstance.progress.empty);

    unityInstance.progress.full = document.createElement("div");
    unityInstance.progress.full.className = "full";
    unityInstance.progress.appendChild(unityInstance.progress.full);

    unityInstance.container.appendChild(unityInstance.progress);

    // Port credit
    unityInstance.portCredit = document.createElement("div");
    unityInstance.portCredit.textContent = "Ported By Snubs";

    Object.assign(unityInstance.portCredit.style, {
      position: "absolute",
      left: "0",
      right: "0",
      bottom: "12px",
      textAlign: "center",
      color: "#ffffff",
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
      textShadow: "1px 1px 3px #000000",
      zIndex: "1000",
      pointerEvents: "none"
    });

    unityInstance.container.appendChild(unityInstance.portCredit);
  }

  unityInstance.progress.full.style.width =
    (100 * progress) + "%";
  unityInstance.progress.empty.style.width =
    (100 * (1 - progress)) + "%";

  if (progress == 1) {
    unityInstance.logo.style.display = "none";
    unityInstance.progress.style.display = "none";
    unityInstance.portCredit.style.display = "none";
  }
}
```
