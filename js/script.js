const titles = [
  "😎 fqlq.Xyz",
  "😎 fqlq.xYz",
  "😎 fqlq.xyZ"
];

let index = 0;
setInterval(() => {
  document.title = titles[index];
  index = (index + 1) % titles.length;
}, 700); 
