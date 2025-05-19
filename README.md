# <image style="width: 40px; height: 40px;" href="/icons/icon128.png"></image> H5P Reset Left

Une extension Firefox légère pour réinitialiser, via un raccourci clavier, la propriété left des iframes H5P à 0px.

## 📂 Structure du dépôt
```
h5p-reset-left/
├─ icons/
│  ├─ icon48.png
│  └─ icon128.png
├─ manifest.json
├─ background.js
├─ content_script.js
├─ README.md
└─ LICENSE
```

## 🚀 Installation locale
**1. Cloner le dépot**
  ```bash
  git clone https://github.com/theodevelop/h5p-reset-left.git
  cd h5p-reset-left
  ```
**2. Charger en tant qu’extension temporaire**
- Ouvrez ```about:debugging#/runtime/this-firefox``` dans *Firefox*.
- Cliquez sur *Charger un module complémentaire temporaire…*.
- Sélectionnez [manifest.json](manifest.json) dans la racine du projet.

**3. Tester**
Ouvrez une page avec un iframe H5P / vidéo sur Moodle (class h5p-iframe + left: -10000px), pressez ```Alt+L``` (```⌘+L``` sur *Mac*) pour le recentrer.

## ⚙️ Détails techniques
- **Raccourci**
  Défini dans ```manifest.json``` (```Alt+L``` / ```⌘+L```).

- **Background**
  Utilise l’API ```browser.commands``` + ```tabs.executeScript``` (Manifest V2) pour injecter la fonction.

- **Content script**
  Écoute un message, puis réapplique ```iframe.style.setProperty('left', '0px', 'important');```.

## 🛠️ Développement
- **Conventions**
  * Manifest v2.
  * Pas de dépendances externes.
- **Outils**
  * Utilisez [web-ext](https://github.com/mozilla/web-ext) pour recharger automatiquement :
  ```web-ext run --source-dir .```

## 📄 Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE.
