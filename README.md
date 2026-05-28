# Green Blue Challenge Park NMHC

Complete one-page projectsite voor het Green Blue Challenge Park / Health Hub bij NMHC Nijmegen.

## Lokaal starten

Deze map bevat een kleine Node-static-server zodat de site ook zonder pakketmanager direct draait:

```bash
node server.mjs
```

Open daarna:

```text
http://127.0.0.1:5173
```

## Beelden vervangen

Alle vervangbare beelden staan in `public/images`:

- `plattegrond-nmhc.jpg`
- `gewenste-situatie-map.png`
- `gewenste-situatie-hyrox-hub.png`
- `gewenste-situatie-opening-naar-weg.png`
- `gewenste-situatie-wandelpad-langs-tribune.png`
- `gewenste-situatie-wandelpad-rond-huisje.png`
- `gewenste-situatie-hek-langs-huisje.png`
- `gewenste-wandelpad-van-hyrox-hub.png`
- `gewenste-pad-naar-bos.png`
- `gewenste-situatie-langs-gastank.png`
- `route-schets.png`
- `huidige-situatie-1.jpg` t/m `huidige-situatie-11.jpg`
- `hyrox-hub-before.jpg`
- `hyrox-hub-after.jpg`
- `groene-corridor.jpg`

## React/Vite-bron

`src/App.tsx` en `src/main.tsx` zijn meegeleverd als React/TypeScript-startpunt. De werkende lokale versie gebruikt `src/main.js`, omdat in deze Codex-omgeving geen `npm` beschikbaar was om React, Vite, Tailwind, Framer Motion en Lucide te installeren.
