function Christmas(inputDate) {
  const year = inputDate.getFullYear();
  // Christmas is December 25th. Note: Month index 11 is December.
  const christmas = new Date(year, 11, 25);
  
  // Calculate the absolute difference in milliseconds
  const diffInMs = Math.abs(inputDate - christmas);
  
  // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 ms)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  
  // Return true if the difference is 3 days or less
  return diffInDays <= 3;
}
const now=new Date();
if(Christmas(now)){
    document.getElementById("svg-space").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%"><rect width="400" height="500" fill="#0d1b2a"/><g fill="#ffffff" opacity="0.6"><circle cx="50" cy="80" r="2" /><circle cx="90" cy="40" r="1.5" /><circle cx="320" cy="60" r="2" /><circle cx="360" cy="120" r="1.5" /><circle cx="280" cy="30" r="2.5" /><circle cx="70" cy="180" r="1" /></g><rect x="185" y="380" width="30" height="60" fill="#5c4033" rx="3" /><polygon points="200,180 80,390 320,390" fill="#132a13" /><polygon points="200,130 100,310 300,310" fill="#1b4332" /><polygon points="200,80 120,230 280,230" fill="#2d6a4f" /><g><circle cx="160" cy="210" r="8" fill="#e63946" /><circle cx="230" cy="280" r="9" fill="#e63946" /><circle cx="140" cy="350" r="10" fill="#e63946" /><circle cx="240" cy="190" r="7" fill="#ffb703" /><circle cx="160" cy="290" r="9" fill="#ffb703" /><circle cx="260" cy="340" r="10" fill="#ffb703" /><circle cx="200" cy="160" r="6" fill="#118ab2" /><circle cx="200" cy="250" r="8" fill="#118ab2" /><circle cx="200" cy="330" r="9" fill="#118ab2" /></g><path d="M 165,150 Q 200,170 235,150" fill="none" stroke="#ffd700" stroke-width="3" opacity="0.8" /><path d="M 135,210 Q 200,240 265,210" fill="none" stroke="#ffd700" stroke-width="4" opacity="0.8" /><path d="M 110,290 Q 200,330 290,290" fill="none" stroke="#ffd700" stroke-width="4" opacity="0.8" /><path d="M 90,370 Q 200,410 310,370" fill="none" stroke="#ffd700" stroke-width="4" opacity="0.8" /><polygon points="200,50 205,68 223,68 209,79 214,97 200,86 186,97 191,79 177,68 195,68" fill="#ffbe0b" stroke="#fff" stroke-width="1" /></svg>';
}
