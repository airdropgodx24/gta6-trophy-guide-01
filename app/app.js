// Leonida Legend — GTA VI trophy tracker.
// Loads the trophy data from a relative file, renders the checklist, the
// roadmap and the missable panel, and keeps progress in localStorage only.
const STORAGE_KEY = "gta6-trophy-guide-progress-v1";

const STAGES = [
  { n: 1, name: "Story and strands first" },
  { n: 2, name: "Activities and skills" },
  { n: 3, name: "Collectibles and exploration" },
  { n: 4, name: "Money and the 100% grind" },
  { n: 5, name: "Secrets and platinum cleanup" },
];
const GRADES = ["platinum", "gold", "silver", "bronze"];

const els = {
  list: document.getElementById("list"),
  roadmap: document.getElementById("roadmap"),
  missableList: document.getElementById("missable-list"),
  progressText: document.getElementById("progress-text"),
  progressGrades: document.getElementById("progress-grades"),
  progressFill: document.getElementById("progress-fill"),
  showing: document.getElementById("showing"),
  search: document.getElementById("search"),
  kind: document.getElementById("kind-filter"),
  grade: document.getElementById("grade-filter"),
  earnedFilter: document.getElementById("earned-filter"),
  spoiler: document.getElementById("spoiler"),
  exportBtn: document.getElementById("export"),
  importInput: document.getElementById("import"),
  resetBtn: document.getElementById("reset"),
};

// Initial state: saved progress first, then URL params override the view so
// links like ?kind=missable&spoiler=1&q=heist open on that exact view.
function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { earned: [], spoiler: false };
    const parsed = JSON.parse(raw);
    return {
      earned: Array.isArray(parsed.earned) ? parsed.earned : [],
      spoiler: Boolean(parsed.spoiler),
    };
  } catch {
    return { earned: [], spoiler: false };
  }
}

const saved = loadSaved();
const state = {
  earned: new Set(saved.earned),
  spoiler: saved.spoiler,
  q: "",
  kind: "all",
  grade: "all",
  earnedFilter: "all",
};

const params = new URLSearchParams(location.search);
if (params.get("kind")) state.kind = params.get("kind");
if (params.get("grade")) state.grade = params.get("grade");
if (params.get("q")) state.q = params.get("q");
if (params.get("spoiler") === "1") state.spoiler = true;

els.search.value = state.q;
els.kind.value = state.kind;
els.grade.value = state.grade;
els.spoiler.checked = state.spoiler;

let trophies = [];

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ earned: [...state.earned], spoiler: state.spoiler })
  );
}

function badge(text, cls) {
  const span = document.createElement("span");
  span.className = `badge ${cls}`;
  span.textContent = text;
  return span;
}

function renderProgress() {
  const total = trophies.length;
  const done = trophies.filter((t) => state.earned.has(t.name)).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const left = total - done;
  els.progressText.textContent = left === 0
    ? `${done} of ${total} earned · 100% — platinum earned, congratulations!`
    : `${done} of ${total} earned · ${pct}% · ${left} to go`;
  document.title = `(${done}/${total}) Leonida Legend — GTA VI Trophy Guide & Tracker`;
  els.progressFill.style.width = `${pct}%`;
  els.progressGrades.textContent = GRADES.map((g) => {
    const all = trophies.filter((t) => t.grade === g);
    const got = all.filter((t) => state.earned.has(t.name)).length;
    return `${g[0].toUpperCase() + g.slice(1)} ${got}/${all.length}`;
  }).join(" · ");
}

function renderRoadmap() {
  els.roadmap.replaceChildren();
  for (const stage of STAGES) {
    const items = trophies.filter((t) => t.roadmapStage === stage.n);
    const got = items.filter((t) => state.earned.has(t.name)).length;
    const box = document.createElement("div");
    box.className = "stage";
    const head = document.createElement("h3");
    head.textContent = `Stage ${stage.n}: ${stage.name} `;
    const count = document.createElement("span");
    count.className = "stage-count";
    count.textContent = `(${got}/${items.length} earned)`;
    head.append(count);
    const names = document.createElement("p");
    names.textContent = items.map((t) => t.name).join(" · ");
    box.append(head, names);
    els.roadmap.append(box);
  }
}

function renderMissable() {
  els.missableList.replaceChildren();
  for (const t of trophies.filter((x) => x.missable)) {
    const li = document.createElement("li");
    li.textContent = t.name;
    els.missableList.append(li);
  }
}

function matches(t) {
  if (state.kind === "missable") {
    if (!t.missable) return false;
  } else if (state.kind !== "all" && t.kind !== state.kind) {
    return false;
  }
  if (state.grade !== "all" && t.grade !== state.grade) return false;
  const isEarned = state.earned.has(t.name);
  if (state.earnedFilter === "earned" && !isEarned) return false;
  if (state.earnedFilter === "unearned" && isEarned) return false;
  if (state.q) {
    const hay = `${t.name} ${t.description} ${t.guide} ${t.kind} ${t.grade}`.toLowerCase();
    if (!hay.includes(state.q.toLowerCase())) return false;
  }
  return true;
}

function renderList() {
  const shown = trophies.filter(matches);
  els.list.replaceChildren();
  for (const t of shown) {
    const isEarned = state.earned.has(t.name);
    const hideSpoiler = state.spoiler && t.kind === "story" && !isEarned;
    const card = document.createElement("article");
    card.className = isEarned ? "card earned" : "card";

    const top = document.createElement("div");
    top.className = "card-top";
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = isEarned;
    box.setAttribute("aria-label", `Mark ${t.name} as earned`);
    box.addEventListener("change", () => {
      if (box.checked) state.earned.add(t.name);
      else state.earned.delete(t.name);
      save();
      render();
    });
    const titleBox = document.createElement("div");
    const h = document.createElement("h3");
    h.textContent = hideSpoiler ? "Hidden story trophy" : t.name;
    titleBox.append(h);
    titleBox.append(badge(t.grade, `badge-${t.grade}`));
    titleBox.append(badge(t.kind, "badge-kind"));
    titleBox.append(badge(`Stage ${t.roadmapStage}`, "badge-stage"));
    if (t.hidden) titleBox.append(badge("Hidden", "badge-hidden"));
    if (t.missable) titleBox.append(badge("Missable — caution", "badge-missable"));
    top.append(box, titleBox);
    card.append(top);

    const desc = document.createElement("p");
    desc.className = "desc";
    const guide = document.createElement("p");
    guide.className = "guide";
    if (hideSpoiler) {
      const note = document.createElement("span");
      note.className = "spoiler-note";
      note.textContent = "Spoiler hidden until earned — tick it off to reveal its name, description and guide.";
      desc.append(note);
      guide.textContent = "";
    } else {
      desc.textContent = t.description;
      guide.textContent = t.guide;
    }
    card.append(desc, guide);
    els.list.append(card);
  }
  els.showing.textContent = `Showing ${shown.length} of ${trophies.length} trophies`;
}

function render() {
  renderProgress();
  renderRoadmap();
  renderMissable();
  renderList();
}

els.search.addEventListener("input", () => { state.q = els.search.value; renderList(); });
els.kind.addEventListener("change", () => { state.kind = els.kind.value; renderList(); });
els.grade.addEventListener("change", () => { state.grade = els.grade.value; renderList(); });
els.earnedFilter.addEventListener("change", () => { state.earnedFilter = els.earnedFilter.value; renderList(); });
els.spoiler.addEventListener("change", () => { state.spoiler = els.spoiler.checked; save(); renderList(); });

els.exportBtn.addEventListener("click", () => {
  const payload = JSON.stringify(
    { game: "Grand Theft Auto VI", earned: [...state.earned], spoiler: state.spoiler },
    null,
    2
  );
  const url = URL.createObjectURL(new Blob([payload], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "gta6-trophy-progress.json";
  a.click();
  URL.revokeObjectURL(url);
});

els.importInput.addEventListener("change", async () => {
  const file = els.importInput.files[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const names = Array.isArray(parsed) ? parsed : parsed.earned;
    if (!Array.isArray(names)) throw new Error("bad file");
    const valid = new Set(trophies.map((t) => t.name));
    state.earned = new Set(names.filter((n) => valid.has(n)));
    if (typeof parsed.spoiler === "boolean") {
      state.spoiler = parsed.spoiler;
      els.spoiler.checked = state.spoiler;
    }
    save();
    render();
  } catch {
    alert("That file could not be read as trophy progress.");
  }
  els.importInput.value = "";
});

els.resetBtn.addEventListener("click", () => {
  if (!confirm("Clear all earned trophies and reset the tracker?")) return;
  state.earned = new Set();
  save();
  render();
});

async function init() {
  const res = await fetch("data/trophies.json");
  const doc = await res.json();
  trophies = doc.trophies;
  render();
}

init();
