const lyrics = [
  { time: 25, text: "I wanna take you somewhere so you know I care" },
  { time: 29, text: "But it's so cold, and I don't know where" },
  { time: 32, text: "I brought you daffodils on a pretty string" },
  { time: 37, text: "But they won't flower like they did last spring" },
  { time: 42, text: "Instrumental pause... 🎵" },
  { time: 45, text: "And I wanna kiss you, make you feel alright" },
  { time: 50, text: "I'm just so tired to share my nights" },
  { time: 54, text: "I wanna cry and I wanna love" },
  { time: 58, text: "But all my tears have been used up" },
  { time: 63, text: "Instrumental pause... 🎵" },
  { time: 66, text: "On another love, another love" },
  { time: 71, text: "All my tears have been used up" },
  { time: 74, text: "On another love, another love" },
  { time: 77, text: "All my tears have been used up" },
  { time: 81, text: "On another love, another love" },
  { time: 86, text: "All my tears have been used up..." },
  { time: 90, text: "Oohh-oh-oh , oh-oooh" },
  { time: 100, text: "Oohh-oh-oh , oh-oooh" },
  { time: 117, text: "And if somebody hurts you, I wanna fight" },
  { time: 121, text: "But my hands been broken one too many times" },
  { time: 126, text: "So I'll use my voice, I'll be so fucking rude" },
  { time: 130, text: "Words, they always win, but I know I'll lose" },
  { time: 134, text: "And I'd sing a song that'd be just ours" },
  { time: 138, text: "But I sang 'em all to another heart" },
  { time: 142, text: "And I wanna cry, I wanna learn to love" },
  { time: 145, text: "But all my tears have been used up..." }, 
  { time: 147, text: "On another love, another love" },
  { time: 150, text: "All my tears have been used up" },
  { time: 153, text: "On another love, another love" },
  { time: 158, text: "All my tears have been used up" },
  { time: 160, text: "On another love, another love" },
  { time: 169, text: "All my tears have been used up,oh-ooh.." },
  { time: 174, text: "Oohh-oh-oh , oh-oooh" },
  { time: 179, text: "Oh-oh need a love now!" },
  { time: 184, text: "Oh my heart is thinking of" },
  { time: 188, text: "I wanna sing a song that'll be just ours!" },
  { time: 191, text: "But I sang 'em all to another heart" },
  { time: 194, text: "And I wanna cry, I wanna learn to love" },
  { time: 198, text: "But all my tears have been used up..." },
  { time: 202, text: "On another love, another love" },
  { time: 206, text: "All my tears have been used up" },
  { time: 210, text: "On another love, another love" },
  { time: 215, text: "All my tears have been used up..." },
  { time: 220, text: "Instrumental fade out... 🎵" },
  { time: 225, text: "The End...Thank you for singing!" },
];

const audio = document.getElementById("song");
const lyricsDiv = document.getElementById("lyrics");

let currentIndex = -1;

lyricsDiv.innerHTML = lyrics
  .map((l, i) => `<p class="line" data-index="${i}">${l.text}</p>`)
  .join("");

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  for (let i = 0; i < lyrics.length; i++) {
    const next = lyrics[i + 1] ? lyrics[i + 1].time : audio.duration;
    if (currentTime >= lyrics[i].time && currentTime < next) {
      if (currentIndex !== i) {
        // Remove previous highlight
        const prev = lyricsDiv.querySelector(".highlight");
        if (prev) prev.classList.remove("highlight");

        // Highlight current line and scroll into view
        const el = lyricsDiv.querySelector(`.line[data-index="${i}"]`);
        if (el) {
          el.classList.add("highlight");
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        currentIndex = i;
      }
      break;
    }
  }
});
