// Hero / landing: basket of Vimeo video IDs. One is chosen at random per load.
export const heroVimeoIds: string[] = [
  "924881851", // SnapDragon
  "937625786", // Schwab - Tailored Education
  "533043384", // TEKASHI Montage
  "536117885", // CTHD
  "526792050", // Big 2 Online
  "625109096", // FG RUN TEST
  "625108706", // FG BLINK (Krit lost anim)
  "34182343", // Scion Medley
  "116807371", // Hornet Character ROT
  "538140392", // Hornets Open
  "116807372", // Hornet Character B ROT
  "801780028", // ONYX Montage
  "801780449", // PYRITE 1
  "801780698", // PYRITE 2
  "801805622", // PYRITE 3
  "801805756", // PYRITE 4
  "727899592", // Obi Montage
  // Uncomment to add more:
  // "513886268", // Fox Brand Film
  // "117068345", // Amazon Fire UI
  // "111158199", // Hornet Homecoming
  // "173970403", // Amazon Fire
  // "173709965", // Liberati 2016 Montage
];

/** Returns a random Vimeo ID from the hero basket (new on each call/reload). */
export function getRandomHeroVimeoId(): string {
  const list = heroVimeoIds;
  if (list.length === 0) return "";
  return list[Math.floor(Math.random() * list.length)];
}
