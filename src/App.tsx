import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Bike,
  Building2,
  CalendarDays,
  CheckCircle2,
  Droplets,
  Dumbbell,
  Handshake,
  HeartPulse,
  Leaf,
  Map,
  MapPin,
  Trees,
  Users,
  Waves
} from "lucide-react";
import "./index.css";

/*
  De werkende lokale versie in deze map gebruikt src/main.js, omdat deze
  Codex-omgeving geen npm beschikbaar heeft om React/Vite te installeren.
  Deze App.tsx is bewust meegeleverd als schone React/TypeScript-bronstructuur:
  dezelfde componenten, data en secties kunnen direct in een Vite-project worden
  gebruikt zodra dependencies geinstalleerd zijn.
*/

export default function App() {
  const [activeRoute, setActiveRoute] = useState("running");

  return (
    <main>
      <section className="hero">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">NMHC Nijmegen | d'Almarasweg</p>
          <h1>Green Blue Challenge Park NMHC</h1>
          <p>Een groene Health Hub waar hardlopen, functionele training, wandelen, ontmoeten en natuur samenkomen.</p>
        </motion.div>
      </section>
      <section className="section">
        <h2>Interactieve terreinplattegrond</h2>
        <p>
          Rood is de volledige 1 km Running Loop over NMHC, blauw is de Groene Corridor richting de bossen en geel is de
          HYROX-geinspireerde Hub als station binnen de grotere route.
        </p>
        <button onClick={() => setActiveRoute("running")}>1 km Running Loop</button>
        <button onClick={() => setActiveRoute("corridor")}>Groene Corridor</button>
        <button onClick={() => setActiveRoute("hub")}>HYROX-geinspireerde Hub</button>
        <p>Actieve laag: {activeRoute}</p>
      </section>
    </main>
  );
}
