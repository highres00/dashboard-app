import React from "react";

type Stat = { player: string; value: string };
type StatCategory = { label: string; stats: Stat[] };
import Card from "../components/Card";

// Placeholder data
const categories: StatCategory[] = [
  {
    label: "Top Scorers",
    stats: [
      { player: "Erling Haaland", value: "12" },
      { player: "Kylian Mbappé", value: "10" },
      { player: "Robert Lewandowski", value: "9" },
      { player: "Mohamed Salah", value: "8" },
      { player: "Vinícius Júnior", value: "7" },
    ],
  },
  {
    label: "Assists",
    stats: [
      { player: "Kevin De Bruyne", value: "7" },
      { player: "Bruno Fernandes", value: "6" },
      { player: "Luka Modrić", value: "5" },
      { player: "Lionel Messi", value: "5" },
      { player: "Neymar Jr.", value: "4" },
    ],
  },
  {
    label: "Yellow Cards",
    stats: [
      { player: "Sergio Ramos", value: "5" },
      { player: "Casemiro", value: "4" },
      { player: "Pepe", value: "4" },
      { player: "Rodri", value: "3" },
      { player: "Fernandinho", value: "3" },
    ],
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1C1C3C] via-[#2D2D6D] to-[#3C3C9C] p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          {/* Animated Element */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-[#00AEEF] to-[#3C3C9C] rounded-full animate-bounce flex items-center justify-center text-white font-bold text-lg shadow-lg">
            ⚽
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Champions League Dashboard
          </h1>
          <p className="text-gray-200 text-lg md:text-xl">
            Latest top performers and statistics from the Champions League
          </p>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(categories || []).map((category, i) => (
            <Card key={i} title={category.label} body={category.stats.map((s: Stat, idx: number) => `${idx + 1}. ${s.player}: ${s.value}`).join("\n")} />
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-300 text-sm mt-12">
          ⚡ Stats are placeholders — replace with live Champions League data.
        </footer>
      </div>
    </main>
  );
}
