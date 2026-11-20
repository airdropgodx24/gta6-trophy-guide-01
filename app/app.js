"use strict";
/* Leonida Legend - GTA VI Trophy Guide & Tracker.
   Fully offline: no network calls, no eval, no service worker, no cookies.
   The trophy array below is the same data as data/trophies.json, embedded
   because a page opened from file:// cannot load a JSON file. */
const TROPHIES = [
  { id: 1, name: "Vice Got a Price!", description: "Congratulations! You're a Leonida Legend.", grade: "platinum", hidden: false, missable: false, kind: "completion", roadmapStage: 5, guide: "The platinum itself: it unlocks automatically once the other 54 trophies are earned, so treat it as the final check on the list rather than a separate task. Work the roadmap in order, clear the missable story and strand trophies on the main playthrough, then finish activities, collectibles and the 100 percent grind before the secret cleanup. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 2, name: "Just Like Paradise", description: "Complete Gone Fishing.", grade: "bronze", hidden: true, missable: false, kind: "story", roadmapStage: 1, guide: "Finish the opening mission, Gone Fishing. It is the first story mission and introduces the basics, so simply play through it to the mission-complete screen and this hidden story trophy pops with it. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 3, name: "Paradise Lost", description: "Complete Chapter 1.", grade: "bronze", hidden: true, missable: false, kind: "story", roadmapStage: 1, guide: "Finish every mission in Chapter 1. Follow the story markers in order and the trophy unlocks when the chapter closes; nothing optional is required beyond completing the chapter itself. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 4, name: "T**s Ass Drug Money", description: "Complete Chapter 2.", grade: "bronze", hidden: true, missable: false, kind: "story", roadmapStage: 1, guide: "Finish every mission in Chapter 2. Keep following the main story after Chapter 1 ends and the trophy unlocks at the end of the chapter. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 5, name: "Vice City, Baby!", description: "Complete Chapter 3.", grade: "bronze", hidden: true, missable: false, kind: "story", roadmapStage: 1, guide: "Finish every mission in Chapter 3. Play the story missions in order and the trophy unlocks when Chapter 3 closes. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 6, name: "Top Of The World, Ma", description: "Complete Chapter 4.", grade: "bronze", hidden: true, missable: false, kind: "story", roadmapStage: 1, guide: "Finish every mission in Chapter 4. Continue the main story in order and the trophy unlocks at the end of the chapter. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 7, name: "You Gotta Know When to Get Off", description: "Complete the final mission.", grade: "gold", hidden: true, missable: false, kind: "story", roadmapStage: 1, guide: "Finish the final story mission. This is the gold story trophy and it unlocks when the last mission ends, so keep a manual save before the endgame in case you want to return to free roam with a clean file. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 8, name: "Trust", description: "Complete Breakfast Run.", grade: "bronze", hidden: true, missable: true, kind: "story", roadmapStage: 1, guide: "Complete the named mission Breakfast Run when it is offered. Missable: this guide flags the named story missions as missable, so do not advance past the point where the mission is available without finishing it, and keep a rotating manual save before starting it. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 9, name: "Break the Bank", description: "Complete The Cartel Heist.", grade: "bronze", hidden: true, missable: true, kind: "story", roadmapStage: 1, guide: "Complete the named mission The Cartel Heist. Missable: finish it when it appears in the story rather than pushing past it, and keep a rotating manual save beforehand, as no mission replay has been reported. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 10, name: "Family Matters", description: "Complete Child's Play.", grade: "bronze", hidden: true, missable: true, kind: "story", roadmapStage: 1, guide: "Complete the named mission Child's Play. Missable: take it when it is offered and keep a manual save before it, so a missed trigger does not cost a whole playthrough. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 11, name: "DWNFALL", description: "Complete Headliners.", grade: "bronze", hidden: true, missable: true, kind: "story", roadmapStage: 1, guide: "Complete the named mission Headliners. Missable: finish it during the story window where it is available and keep a rotating manual save before starting it. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 12, name: "Hi-Jacked", description: "Complete VCIA Takedown.", grade: "bronze", hidden: true, missable: true, kind: "story", roadmapStage: 1, guide: "Complete the named mission VCIA Takedown. Missable: do it when the story offers it rather than advancing past it, and save manually beforehand. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 13, name: "Snow Storm", description: "Complete Operation Savage Glory.", grade: "bronze", hidden: true, missable: true, kind: "story", roadmapStage: 1, guide: "Complete the named mission Operation Savage Glory. Missable: finish it in its story window and keep a rotating manual save before it, as no mission replay has been reported. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 14, name: "A Long Road", description: "Attain 100% Completion.", grade: "gold", hidden: false, missable: false, kind: "completion", roadmapStage: 4, guide: "Reach 100 percent total completion. Use the in-game completion checklist as the authority: story, strands, activities, collectibles and hobbies all feed it, so leave this until Stage 4 and work the remaining checklist lines one category at a time until the counter reads 100. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 15, name: "Cunning Stunts", description: "Complete 250 Stunts.", grade: "silver", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Complete 250 stunts in total. Work through stunt locations steadily as you explore rather than leaving all 250 for the end, and use a fast, durable vehicle so failed attempts cost less time. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 16, name: "Master of None", description: "Try each type of activity once.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Try each of the 9 types of activity once. Open the activities list, note any type you have not sampled, and start one of each; a single attempt per type is enough for this trophy. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 17, name: "The Shootist", description: "Earn a gold medal in all Shooting Range challenges.", grade: "silver", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Earn a gold medal in all 42 Shooting Range challenges. Learn each range layout, replay the challenges where you fall short of gold, and move on only once every challenge shows a gold medal. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 18, name: "Top Fun", description: "Win a Top Fun Drone Race at every location.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Win a Top Fun drone race at every one of the 14 locations. A win at each location counts, not just taking part, so retry a race until you win it before moving to the next location. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 19, name: "Earn Cash, Not Kudos", description: "Win 20 different races.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Win 20 different races. Repeating the same race does not add to the count, so keep moving to races you have not won yet and tick them off until you reach 20 distinct wins. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 20, name: "Baited My Tackle", description: "Beat Cal in a fishing challenge.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Beat Cal in a fishing challenge. Take the fishing challenge when Cal offers it and land the better catch under its rules; if you lose, challenge him again until you win once. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 21, name: "Stick Fiddler", description: "Complete an arcade game.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Complete one arcade game from start to finish. Pick the shortest arcade game you find and play it through to completion rather than quitting out mid-game. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 22, name: "Road to Rehabilitation", description: "Complete the final mission for Andy.", grade: "bronze", hidden: true, missable: true, kind: "side", roadmapStage: 1, guide: "Complete Andy's strand through to his final mission. Missable: work each strand to its end before the story moves you on, and keep a rotating manual save, because strand finales are flagged missable in this guide. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 23, name: "This Was No Boat Accident", description: "Complete the final mission for Kenton.", grade: "bronze", hidden: true, missable: true, kind: "side", roadmapStage: 1, guide: "Complete Kenton's strand through to his final mission. Missable: finish the strand finale when it becomes available and save manually beforehand. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 24, name: "The Lone Rider", description: "Complete the final mission for Billy.", grade: "bronze", hidden: true, missable: true, kind: "side", roadmapStage: 1, guide: "Complete Billy's strand through to his final mission. Missable: do not leave the strand half-finished while you advance the main story, and keep a rotating manual save. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 25, name: "Strangers & Freaks", description: "Complete 8 mission strands for strangers across the state of Leonida.", grade: "silver", hidden: false, missable: false, kind: "side", roadmapStage: 1, guide: "Complete 8 full mission strands for strangers across Leonida. Each strand is a chain, so finish every step of a strand, not just its first mission, and count completed strands until you reach 8. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 26, name: "Supply & Demand", description: "Complete the final mission for Randy.", grade: "bronze", hidden: true, missable: true, kind: "side", roadmapStage: 1, guide: "Complete Randy's strand through to his final mission. Missable: finish the finale when it appears and keep a manual save before it. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 27, name: "Spin On This!", description: "Complete the final mission for Tyrone.", grade: "bronze", hidden: true, missable: true, kind: "side", roadmapStage: 1, guide: "Complete Tyrone's strand through to his final mission. Missable: work the strand to its end in Stage 1 and save manually before the finale. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 28, name: "Positive Mental Attitude", description: "Meditate at every spot across Leonida.", grade: "bronze", hidden: false, missable: true, kind: "activities", roadmapStage: 3, guide: "Meditate at all 18 meditation spots across Leonida. Missable: one spot is reported missable in the sources checked, so visit spots as each area opens rather than saving them all for the end, and keep a rotating manual save. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 29, name: "Fair Game", description: "Hunt a unique animal for Bret.", grade: "bronze", hidden: true, missable: false, kind: "activities", roadmapStage: 2, guide: "Hunt the unique animal Bret asks for and complete his hunt. This is a hidden trophy, so it will not show on PlayStation until earned; take Bret's request when it appears and follow it through to the kill. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 30, name: "Don't Touch My Deck", description: "Complete 3 Collectible Card sets.", grade: "silver", hidden: false, missable: false, kind: "collectibles", roadmapStage: 3, guide: "Complete all 3 collectible card sets. Collect cards set by set so you can see which cards a set still needs, and finish the third set to unlock this silver trophy. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 31, name: "You WAiNKer!", description: "WAiNK It at 100 locations.", grade: "silver", hidden: false, missable: false, kind: "collectibles", roadmapStage: 3, guide: "Use WAiNK at 100 different locations. Work district by district so you do not revisit the same locations, and keep a tally until the count reaches 100. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 32, name: "One Last Thing", description: "Complete 50 Challenges.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Complete 50 challenges in total. Challenges are tracked in the game, so pick off the shortest remaining challenges first and keep going until the completed count reaches 50. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 33, name: "Hot Together", description: "Lose a 4 star Wanted Level with your partner and escape the heat.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "With your partner with you, raise a 4-star wanted level, then lose it and escape the heat together. Stay together while you break line of sight and wait out the search until the wanted level clears completely. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 34, name: "Retail Therapy", description: "Rob 3 shops back-to-back with your partner without losing your Wanted Level.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "With your partner, rob 3 shops back to back without losing your wanted level in between. Plan three nearby shops, move straight from one to the next, and do not let the wanted level clear until the third robbery is done. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 35, name: "Whip It Good", description: "Discover 100 vehicles.", grade: "bronze", hidden: false, missable: false, kind: "collectibles", roadmapStage: 3, guide: "Discover 100 different vehicles. Get into vehicles you have not driven before whenever you see a new model, especially in new districts, until 100 distinct vehicles are registered. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 36, name: "Gunslinger", description: "Take down 5 enemies in a single use of Combat Focus.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Take down 5 enemies during a single use of Combat Focus. Wait for a group of at least five enemies in the open, trigger Combat Focus once, and drop all five before it ends. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 37, name: "Catch Me If You Can", description: "Make an unscheduled departure at VCIA.", grade: "bronze", hidden: true, missable: false, kind: "secret", roadmapStage: 5, guide: "Make an unscheduled departure at VCIA. The official description is short and the sources checked describe the act only in those terms, so the exact trigger was unconfirmed in the sources checked; try departing VCIA outside any scheduled departure rather than following an invented step-by-step method. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 38, name: "Challenging Tank", description: "Kinda hot in these Rhinos.", grade: "bronze", hidden: true, missable: false, kind: "secret", roadmapStage: 5, guide: "The official description, 'Kinda hot in these Rhinos', is deliberately vague: Rhinos are tanks, but the exact act the trophy wants was unconfirmed in the sources checked. Treat this as a secret-trophy experiment around Rhino tanks and do not trust any guide that states a precise method without a source. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 39, name: "Sneakthief", description: "Rob a jewelry store without being detected.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Rob a jewelry store without being detected. Go in quietly, avoid raising an alarm or being spotted, and get out with the take while still undetected; if you are seen, reload and try the same store cleanly. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 40, name: "Maximum Withdrawal", description: "Rob 5 Bank Vaults and escape.", grade: "silver", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Rob 5 bank vaults and escape after each one. A vault only counts once you escape, so plan an exit route before you start and repeat at five different vaults. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 41, name: "A Classic Blitz Play", description: "Rob an Armored Truck and escape.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Rob an armored truck and escape. Stop or open the truck, take the money, then lose the heat; the trophy needs the escape, not just the robbery. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 42, name: "The Goodtime State", description: "Explore all of Leonida.", grade: "bronze", hidden: false, missable: false, kind: "collectibles", roadmapStage: 3, guide: "Explore all of Leonida: the starter list counts 52 areas. Travel into any area still fogged or unvisited on your map, district by district, until every area has been entered at least once. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 43, name: "Pest Control", description: "Rob an Illegal Operation belonging to each gang.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 2, guide: "Rob an illegal operation belonging to each of the 9 gangs. One operation per gang is enough, so track which gangs you have already hit and target a new gang each time. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 44, name: "In The Beginning…", description: "Enjoy a cocktail with a view on Ocean Beach.", grade: "bronze", hidden: true, missable: false, kind: "secret", roadmapStage: 5, guide: "Enjoy a cocktail with a view on Ocean Beach. Head to Ocean Beach, order or pick up a cocktail where they are served, and take in the view; this hidden trophy is a small scene-setting moment rather than a challenge. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 45, name: "Capital Offense", description: "Smash your way out of a vehicle showroom in classic style.", grade: "bronze", hidden: true, missable: false, kind: "secret", roadmapStage: 5, guide: "Smash your way out of a vehicle showroom in classic style: get into a car inside a showroom and drive it out through the showroom glass instead of using a door. The sources checked agree on the act in the description; the exact showroom they used was not confirmed. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 46, name: "Let’s Go Bowling", description: "Follow-through at the Kolt & Associates' bowling alley.", grade: "bronze", hidden: true, missable: false, kind: "secret", roadmapStage: 5, guide: "Play bowling at the Kolt and Associates bowling alley and follow through on your throw. Visit the alley, start a game of bowling there, and bowl as the description says. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 47, name: "Personal Best", description: "A partnership with mass appeal.", grade: "bronze", hidden: true, missable: false, kind: "secret", roadmapStage: 5, guide: "The official description, 'A partnership with mass appeal', is deliberately vague and the exact act was unconfirmed in the sources checked. Keep this for the Stage 5 cleanup, experiment with partner activities, and do not follow any precise method that cites no source. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 48, name: "Actions Speak Louder", description: "Choices made (for better or worse).", grade: "bronze", hidden: true, missable: true, kind: "secret", roadmapStage: 5, guide: "Make choices in the game; PlayStation tracks a count for this trophy, listed as 500 in the starter guide. Missable: choices are permanent once made, so keep rotating manual saves before big decisions. The exact choices that count were unconfirmed in the sources checked beyond the description itself. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 49, name: "Bad Luck, I Guess", description: "Second time's the charm.", grade: "bronze", hidden: true, missable: false, kind: "secret", roadmapStage: 5, guide: "The official description, 'Second time's the charm', is deliberately vague: it points to succeeding at something on a second attempt, but which attempt was unconfirmed in the sources checked. Leave it for the secret cleanup and note any activity you fail once and then complete. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 50, name: "The Truth Is Out There", description: "What the hell just happened?", grade: "bronze", hidden: true, missable: false, kind: "secret", roadmapStage: 5, guide: "The official description, 'What the hell just happened?', is deliberately vague and points to witnessing something strange, but the exact event was unconfirmed in the sources checked. Explore odd corners of Leonida during the Stage 5 cleanup rather than trusting an unsourced pinpoint location. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 51, name: "Ten Pin", description: "Bowl 'em over with a melee drive-by.", grade: "bronze", hidden: true, missable: false, kind: "secret", roadmapStage: 5, guide: "Knock someone down with a melee drive-by: drive past a pedestrian or enemy and hit them with a melee attack from the vehicle, bowling them over as the name suggests. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 52, name: "Dime on the Dollar", description: "Earn $250,000 laundering Marked Bills through your contacts.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 4, guide: "Earn 250,000 dollars by laundering marked bills through your contacts. Route marked bills through the laundering contacts whenever you hold them and keep a running total; this is a Stage 4 money grind, not a single job. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." },
  { id: 53, name: "Treat Yo Self", description: "Spend $100,000 across all shops.", grade: "bronze", hidden: false, missable: false, kind: "activities", roadmapStage: 4, guide: "Spend 100,000 dollars across all shops in total. Normal story spending counts toward it, so check your remaining gap in Stage 4 and top it up with useful purchases rather than wasting money early. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; KeenGamer GTA 6 trophy guide and platinum roadmap." },
  { id: 54, name: "Little Boxes", description: "Purchase all garage properties.", grade: "bronze", hidden: false, missable: false, kind: "collectibles", roadmapStage: 4, guide: "Purchase all 8 garage properties. Save for them during the money stages, then buy every garage still for sale on the map until all 8 are owned. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; GameMapa GTA 6 trophy list (conditions cross-checked from PowerPyx and GamesRadar+)." },
  { id: 55, name: "On the Spot", description: "Register 10 vehicles to the Scooter Bros app.", grade: "bronze", hidden: false, missable: false, kind: "collectibles", roadmapStage: 3, guide: "Register 10 vehicles to the Scooter Bros app. Register each new vehicle you keep through the app as you acquire it, until 10 vehicles are registered. Sources: Official PS5 trophy list as listed by Exophase and PSNProfiles; Push Square GTA 6 trophy guide and roadmap." }
];
const STORAGE_KEY = "gta6-trophy-guide-progress-v1";
const STAGE_NAMES = {
  1: "Stage 1 - Story and side strands first",
  2: "Stage 2 - Activities and skills",
  3: "Stage 3 - Collectibles and exploration",
  4: "Stage 4 - Completion and the 100% grind",
  5: "Stage 5 - Secrets and platinum cleanup"
};
const GRADE_ORDER = ["platinum", "gold", "silver", "bronze"];

function loadEarned() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter(function (id) { return Number.isInteger(id); }));
  } catch (err) {
    return new Set();
  }
}
function saveEarned(earned) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(earned).sort(function (a, b) { return a - b; }))); } catch (err) {}
}

const state = {
  earned: loadEarned(),
  query: "",
  kind: "",
  grade: "",
  earnedState: "",
  spoiler: false
};

function el(id) { return document.getElementById(id); }
function matches(trophy) {
  if (state.kind === "missable" && !trophy.missable) return false;
  if (state.kind && state.kind !== "missable" && trophy.kind !== state.kind) return false;
  if (state.grade && trophy.grade !== state.grade) return false;
  if (state.earnedState === "earned" && !state.earned.has(trophy.id)) return false;
  if (state.earnedState === "unearned" && state.earned.has(trophy.id)) return false;
  if (state.query) {
    const hay = (trophy.name + " " + trophy.description + " " + trophy.guide + " " + trophy.kind + " " + trophy.grade).toLowerCase();
    if (hay.indexOf(state.query.toLowerCase()) === -1) return false;
  }
  return true;
}
function isSpoilerHidden(trophy) {
  return state.spoiler && trophy.kind === "story" && !state.earned.has(trophy.id);
}
function renderCounts() {
  const total = TROPHIES.length;
  const done = state.earned.size;
  const left = total - done;
  const percent = total ? Math.round(done * 100 / total) : 0;
  const summary = done + " of " + total + " earned - " + left + " to go (" + percent + "%)";
  el("progress-summary").textContent = summary;
  document.title = "Leonida Legend (" + summary + ") - GTA VI Trophy Guide & Tracker";
  el("progress-fill").style.width = (total ? (done * 100 / total) : 0) + "%";
  el("grade-counts").textContent = GRADE_ORDER.map(function (grade) {
    const all = TROPHIES.filter(function (t) { return t.grade === grade; }).length;
    const got = TROPHIES.filter(function (t) { return t.grade === grade && state.earned.has(t.id); }).length;
    return grade + ": " + got + "/" + all;
  }).join("  |  ");
  el("stage-counts").textContent = Object.keys(STAGE_NAMES).map(function (stage) {
    const num = Number(stage);
    const all = TROPHIES.filter(function (t) { return t.roadmapStage === num; }).length;
    const got = TROPHIES.filter(function (t) { return t.roadmapStage === num && state.earned.has(t.id); }).length;
    return "Stage " + stage + ": " + got + "/" + all;
  }).join("  |  ");
}
function badge(text, cls) {
  const span = document.createElement("span");
  span.className = "badge" + (cls ? " " + cls : "");
  span.textContent = text;
  return span;
}
function renderList() {
  const list = el("trophy-list");
  list.textContent = "";
  const visible = TROPHIES.filter(matches);
  visible.forEach(function (trophy) {
    const card = document.createElement("article");
    card.className = "trophy-card" + (state.earned.has(trophy.id) ? " earned" : "");
    const hiddenStory = isSpoilerHidden(trophy);
    const title = document.createElement("h3");
    title.textContent = hiddenStory ? "Hidden trophy (spoiler mode)" : trophy.name;
    card.appendChild(title);
    const badges = document.createElement("p");
    badges.className = "badges";
    badges.appendChild(badge(trophy.grade, "grade-" + trophy.grade));
    badges.appendChild(badge(trophy.kind));
    badges.appendChild(badge(STAGE_NAMES[trophy.roadmapStage]));
    if (trophy.missable) badges.appendChild(badge("MISSABLE", "missable"));
    if (trophy.hidden) badges.appendChild(badge("Hidden on PSN", "hidden-badge"));
    card.appendChild(badges);
    const earnRow = document.createElement("label");
    earnRow.className = "earn-row";
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = state.earned.has(trophy.id);
    box.addEventListener("change", function () {
      if (box.checked) state.earned.add(trophy.id); else state.earned.delete(trophy.id);
      saveEarned(state.earned);
      renderAll();
    });
    earnRow.appendChild(box);
    earnRow.appendChild(document.createTextNode(" Earned"));
    card.appendChild(earnRow);
    const desc = document.createElement("p");
    desc.className = "description";
    desc.textContent = hiddenStory ? "Spoiler mode is hiding this unearned story trophy. Mark it earned or turn spoiler mode off to reveal it." : trophy.description;
    card.appendChild(desc);
    const guide = document.createElement("p");
    guide.className = "guide";
    guide.textContent = hiddenStory ? "Guide hidden by spoiler mode." : trophy.guide;
    card.appendChild(guide);
    list.appendChild(card);
  });
  el("empty-message").hidden = visible.length !== 0;
  el("visible-count").textContent = "Showing " + visible.length + " of " + TROPHIES.length + " trophies";
}
function renderAll() { renderCounts(); renderList(); }

function applyUrlParams() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("kind")) { state.kind = params.get("kind"); el("kind-filter").value = state.kind; }
  if (params.get("grade")) { state.grade = params.get("grade"); el("grade-filter").value = state.grade; }
  if (params.get("q")) { state.query = params.get("q"); el("search").value = state.query; }
  if (params.get("spoiler") === "1") { state.spoiler = true; el("spoiler-toggle").checked = true; }
}
function wireControls() {
  el("search").addEventListener("input", function (e) { state.query = e.target.value; renderList(); });
  el("kind-filter").addEventListener("change", function (e) { state.kind = e.target.value; renderList(); });
  el("grade-filter").addEventListener("change", function (e) { state.grade = e.target.value; renderList(); });
  el("state-filter").addEventListener("change", function (e) { state.earnedState = e.target.value; renderList(); });
  el("spoiler-toggle").addEventListener("change", function (e) { state.spoiler = e.target.checked; renderList(); });
  el("reset-button").addEventListener("click", function () {
    state.earned = new Set();
    saveEarned(state.earned);
    renderAll();
  });
  el("export-button").addEventListener("click", function () {
    const payload = JSON.stringify({ key: STORAGE_KEY, earned: Array.from(state.earned).sort(function (a, b) { return a - b; }) }, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "gta6-trophy-progress.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 500);
  });
  el("import-input").addEventListener("change", function (e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const parsed = JSON.parse(String(reader.result));
        const ids = Array.isArray(parsed) ? parsed : parsed.earned;
        if (!Array.isArray(ids)) return;
        state.earned = new Set(ids.filter(function (id) { return Number.isInteger(id) && id >= 1 && id <= TROPHIES.length; }));
        saveEarned(state.earned);
        renderAll();
      } catch (err) {}
    };
    reader.readAsText(file);
  });
}
applyUrlParams();
wireControls();
renderAll();
