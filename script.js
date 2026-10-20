// ===================== EDIT YOUR SERVER INFO HERE =====================
const CONFIG = {
  ip: "play.yourserver.net",
  discord: "https://discord.gg/yourinvite",
  version: "Minecraft Java Edition 1.21+",
  rules: [
    "Be respectful. No harassment, hate speech or toxicity.",
    "No cheating: hacked clients, x-ray, auto-clickers or duping.",
    "No griefing or stealing from bases - PvP kills are the only way to take hearts.",
    "Don't exploit bugs. Report them to staff instead.",
    "No advertising other servers.",
    "Staff decisions are final. Ask in Discord if you have questions."
  ],
  hearts: [
    ["Air Heart", "🌪️", ["No fall damage", "Armor/tool durability protection", "+1 heart"]],
    ["Diamond Heart", "💎", ["Crystal heart - \"Steady and Unbroken\"", "+4 armor", "+1 heart"]],
    ["Strength Heart", "💪", ["Strength III for 5 seconds (press F)", "Permanent Strength I", "+1 heart"]],
    ["Fire Heart", "🔥", ["Fire Aspect on swords and axes", "Infinite Fire Resistance", "+1 heart"]],
    ["Ender Heart", "🟣", ["Teleportation (press F)", "Infinite ender pearls", "Only from killing the Ender Dragon", "+1 heart"]],
    ["Creeper Heart", "💥", ["Triple jump", "Shift-activated creeper explosion", "+1 heart"]],
    ["Emerald Heart", "💚", ["Right-click a villager for 1 emerald", "Infinite Hero of the Village V", "+1 heart"]],
    ["Totem Heart", "✨", ["Auto totem, 40 second cooldown", "Survive lethal damage with recovery effects", "+1 heart"]],
    ["Hungry Heart", "🍖", ["50% less hunger depletion", "Bonus saturation when eating", "+1 heart"]],
    ["Water Heart", "🌊", ["Infinite Water Breathing", "Faster swimming", "+1 heart"]]
  ]
};
// ======================================================================

const $ = id => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };

$("ip-text").textContent = $("ip-text2").textContent = CONFIG.ip;
$("discord-btn").href = CONFIG.discord;
$("join-text").textContent = "Open " + CONFIG.version + ", add the server, and paste the IP below.";
$("year").textContent = new Date().getFullYear();

CONFIG.hearts.forEach(([name, icon, skills]) => {
  const card = el("article", "card heart");
  card.append(el("div", "icon", icon), el("h3", "", name));
  const ul = el("ul");
  skills.forEach(s => ul.append(el("li", "", s)));
  card.append(ul);
  $("hearts-grid").append(card);
});

CONFIG.rules.forEach(r => $("rules-list").append(el("li", "", r)));

function copyIP(btn) {
  const hint = btn.querySelector("small");
  const done = () => { hint.textContent = "Copied! ✔"; setTimeout(() => hint.textContent = "Click to copy IP", 1800); };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(CONFIG.ip).then(done).catch(() => {});
  } else {
    const t = el("textarea"); t.value = CONFIG.ip; document.body.append(t); t.select();
    document.execCommand("copy"); t.remove(); done();
  }
}
["ip-btn", "ip-btn2"].forEach(id => $(id).addEventListener("click", e => copyIP(e.currentTarget)));
