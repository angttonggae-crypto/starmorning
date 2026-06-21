// Zodiac signs database
const ZODIAC_DATA = [
  { name: '양자리', english: 'Aries', symbol: '♈', date: '03.21 ~ 04.19', aliases: ['양', '양자리'] },
  { name: '황소자리', english: 'Taurus', symbol: '♉', date: '04.20 ~ 05.20', aliases: ['황소', '황소자리'] },
  { name: '쌍둥이자리', english: 'Gemini', symbol: '♊', date: '05.21 ~ 06.21', aliases: ['쌍둥이', '쌍둥이자리'] },
  { name: '게자리', english: 'Cancer', symbol: '♋', date: '06.22 ~ 07.22', aliases: ['게', '게자리'] },
  { name: '사자자리', english: 'Leo', symbol: '♌', date: '07.23 ~ 08.22', aliases: ['사자', '사자자리'] },
  { name: '처녀자리', english: 'Virgo', symbol: '♍', date: '08.23 ~ 09.23', aliases: ['처녀', '처녀자리'] },
  { name: '천칭자리', english: 'Libra', symbol: '♎', date: '09.24 ~ 10.22', aliases: ['천칭', '천칭자리'] },
  { name: '전갈자리', english: 'Scorpio', symbol: '♏', date: '10.23 ~ 11.22', aliases: ['전갈', '전갈자리'] },
  { name: '사수자리', english: 'Sagittarius', symbol: '♐', date: '11.23 ~ 12.21', aliases: ['사수', '사수자리', '궁수', '궁수자리'] },
  { name: '염소자리', english: 'Capricorn', symbol: '♑', date: '12.22 ~ 01.19', aliases: ['염소', '염소자리'] },
  { name: '물병자리', english: 'Aquarius', symbol: '♒', date: '01.20 ~ 02.18', aliases: ['물병', '물병자리'] },
  { name: '물고기자리', english: 'Pisces', symbol: '♓', date: '02.19 ~ 03.20', aliases: ['물고기', '물고기자리'] }
];

// Encouraging words database (Randomized every lookup)
const CHEERING_MESSAGES = [
  "오늘도 당신은 존재 자체로 찬란하게 빛나요! ✨",
  "어떤 하루가 펼쳐지든, 당신은 능히 해낼 수 있어요. 화이팅! ☀️",
  "힘든 순간이 다가와도 별들이 늘 당신의 길을 지켜줄 거예요. ⭐",
  "오늘 하루, 스스로를 세상에서 가장 아끼고 사랑해 주세요. 💕",
  "당신의 발걸음 닿는 곳마다 행운과 기쁨이 가득하길 바랄게요. 🍀",
  "괜찮아요, 다 잘 될 거예요. 오늘 하루도 기분 좋게 시작해봐요! 🌈",
  "당신 안에 있는 무한한 가능성을 믿으세요. 분명 잘 해낼 거예요. 🚀",
  "사소한 일에도 웃음 지을 수 있는 귀여운 행복이 찾아올 거예요. 🌸",
  "오늘의 수고가 내일의 멋진 선물로 돌아올 것을 믿어요! 🎁",
  "눈부신 아침 햇살처럼 당신의 하루도 활짝 피어날 거예요. ☀️"
];

// Fortune Contents by Tier
const FORTUNE_TEMPLATES = {
  good: {
    emoji: "✨",
    title: "최고의 운세! 기분 좋은 하루가 찾아옵니다.",
    descriptions: [
      "마치 온 우주가 당신을 돕고 있는 듯한 활기찬 날입니다. 망설였던 일이나 새로운 프로젝트가 있다면 지금 시작해보세요! 좋은 결실을 맺을 것입니다.",
      "대인관계에 좋은 기운이 깃드는 날입니다. 당신의 긍정적인 에너지가 주변 사람들을 매료시키고, 유익한 기회나 조력자를 만나게 될 것입니다.",
      "자신감과 창의력이 최고조에 달하는 하루입니다. 직관을 믿고 행동해보세요. 기대 이상의 성과와 보람이 당신을 기다립니다."
    ],
    recommends: [
      "새로운 공부나 취미 과감히 시작하기",
      "고마웠던 사람에게 따뜻한 메시지 보내기",
      "좋아하는 음악을 들으며 아침 산책하기",
      "나를 위한 작은 선물이나 맛있는 음식 대접하기"
    ],
    avoids: [
      "좋은 기운에 방심하여 과하게 거만해지기",
      "충동적인 카드 긁기나 과도한 지출",
      "스스로의 페이스를 잃어버릴 정도로 많은 약속 잡기",
      "사소한 논쟁에 휘말려 기분 잡치기"
    ]
  },
  normal: {
    emoji: "☀️",
    title: "평온하고 무난한 하루입니다. 소소한 행복을 찾아보세요.",
    descriptions: [
      "안정적이고 평온한 흐름이 이어지는 날입니다. 무리하게 큰일을 도모하기보다는, 일상의 사소한 일들을 차근차근 정리하며 내실을 다지기 좋습니다.",
      "적당한 긴장감과 편안함이 조화를 이루는 하루입니다. 특별한 이벤트는 없을지라도 나만의 평화로운 템포를 지키며 마음의 여유를 가질 수 있습니다.",
      "주변의 변화에 휩쓸리지 않고 스스로 중심을 잡을 수 있는 날입니다. 차분한 호흡으로 계획했던 일을 묵묵히 실천해 나가기에 아주 적절합니다."
    ],
    recommends: [
      "따뜻한 차나 커피 한 잔 마시며 생각 정리하기",
      "가벼운 스트레칭으로 굳은 몸 풀어주기",
      "바쁘더라도 하늘을 3초 이상 올려다보기",
      "방 안의 필요 없는 물건 비우고 정리하기"
    ],
    avoids: [
      "지루하다는 핑계로 계획에 없던 충동적 결정 내리기",
      "인스턴트 음식으로 끼니 대충 때우기",
      "너무 늦은 시간까지 스마트폰 보며 수면 방해하기",
      "타인의 험담이나 불평에 휩쓸려 동조하기"
    ]
  },
  caution: {
    emoji: "🌙",
    title: "차분하고 조심하는 것이 좋아요. 무리하지 마세요.",
    descriptions: [
      "에너지가 다소 가라앉는 시기이므로 신중하고 꼼꼼한 태도가 요구되는 날입니다. 중요한 결정은 잠시 미루고, 나를 돌보는 일에 신경 써보세요.",
      "사소한 오해나 말실수로 인해 감정이 상할 수 있는 흐름입니다. 평소보다 경청하는 태도를 유지하고 행동을 한 번 더 생각한 후 실행에 옮기세요.",
      "무리한 스케줄은 몸과 마음에 스트레스를 줄 수 있습니다. 약속을 최소화하고 일찍 귀가하여 조용히 에너지를 충전하는 온전한 휴식을 권합니다."
    ],
    recommends: [
      "따뜻한 물로 목욕하거나 반신욕 즐기기",
      "충분한 수면을 취하고 일찍 잠자리에 들기",
      "내면을 차분하게 해주는 명상이나 일기 쓰기",
      "안전하고 익숙한 경로로 이동하며 마음의 평화 유지하기"
    ],
    avoids: [
      "중요한 계약서 서명이나 성급한 금전 거래",
      "타인과의 논쟁이나 감정이 섞인 대화 받아치기",
      "카페인이나 알코올 과다 섭취하기",
      "몸에 피로를 주는 고강도의 운동이나 무리한 일정"
    ]
  }
};

// DOM Elements
const selectionScreen = document.getElementById('selection-screen');
const resultScreen = document.getElementById('result-screen');
const zodiacInput = document.getElementById('zodiac-input');
const clearInputBtn = document.getElementById('clear-input');
const btnSubmit = document.getElementById('btn-submit');
const errorMessage = document.getElementById('error-message');
const errorText = document.getElementById('error-text');
const suggestionsContainer = document.getElementById('suggestions');
const zodiacGrid = document.getElementById('zodiac-grid');

// Result Screen DOM Elements
const resultZodiacSymbol = document.getElementById('result-zodiac-symbol');
const resultZodiacName = document.getElementById('result-zodiac-name');
const resultDateInfo = document.getElementById('result-date-info');
const rankNumber = document.getElementById('rank-number');
const rankText = document.getElementById('rank-text');
const tierStatusBanner = document.getElementById('tier-status-banner');
const tierStatusEmoji = document.getElementById('tier-status-emoji');
const tierStatusMessage = document.getElementById('tier-status-message');
const fortuneDescription = document.getElementById('fortune-description');
const recommendList = document.getElementById('recommend-list');
const avoidList = document.getElementById('avoid-list');
const cheeringMessage = document.getElementById('cheering-message');
const btnBack = document.getElementById('btn-back');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});

// Event Listeners Registration
function setupEventListeners() {
  // Input clear button toggle
  zodiacInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    if (value) {
      clearInputBtn.classList.remove('hidden');
      showSuggestions(value);
    } else {
      clearInputBtn.classList.add('hidden');
      hideSuggestions();
    }
    hideError();
  });

  // Clear Input
  clearInputBtn.addEventListener('click', () => {
    zodiacInput.value = '';
    clearInputBtn.classList.add('hidden');
    hideSuggestions();
    hideError();
    zodiacInput.focus();
  });

  // Close suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!zodiacInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
      hideSuggestions();
    }
  });

  // Submit via search bar
  btnSubmit.addEventListener('click', () => {
    handleSearch(zodiacInput.value.trim());
  });

  // Search on Enter key press
  zodiacInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSearch(zodiacInput.value.trim());
    }
  });

  // Grid Selection Clicks
  zodiacGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.zodiac-btn');
    if (btn) {
      const name = btn.dataset.name;
      handleSearch(name);
    }
  });

  // Back to search screen
  btnBack.addEventListener('click', () => {
    switchToScreen(selectionScreen);
    // Reset state slightly but keep the input for convenience
    hideError();
  });
}

// Normalize & validate input, then show results
function handleSearch(inputValue) {
  if (!inputValue) {
    showError("별자리를 입력해주세요.");
    return;
  }

  const normalizedInput = normalizeZodiacName(inputValue);
  const matchedZodiac = ZODIAC_DATA.find(z => z.aliases.includes(normalizedInput) || z.name === normalizedInput);

  if (!matchedZodiac) {
    showError("올바른 별자리를 입력해주세요.");
    return;
  }

  // Hide errors and suggestions
  hideError();
  hideSuggestions();

  // Show Results
  generateAndDisplayFortune(matchedZodiac);
}

// Normalize typing inputs to clean up spaces and common terms (e.g. "사자" -> "사자자리", "물고기 자리" -> "물고기자리")
function normalizeZodiacName(str) {
  let clean = str.replace(/\s+/g, ''); // Remove spaces
  
  // Standardize common short versions to full names
  const suffixMatches = ['양', '황소', '쌍둥이', '게', '사자', '처녀', '천칭', '전갈', '사수', '궁수', '염소', '물병', '물고기'];
  if (suffixMatches.includes(clean)) {
    if (clean === '궁수') clean = '사수'; // Map 궁수 to 사수
    return clean + '자리';
  }
  
  if (clean.endsWith('자리')) {
    const prefix = clean.substring(0, clean.length - 4);
    if (prefix === '궁수') return '사수자리';
  }

  return clean;
}

// Seeded Daily Ranking System
// Ensures that rankings are stable, unique, and well-distributed (1-12) for the current day
function getRankingsForToday() {
  const today = new Date();
  const dateStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  
  // Create stable scores using a simple hash algorithm
  const scoredZodiacs = ZODIAC_DATA.map(zodiac => {
    const seedStr = zodiac.name + dateStr;
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
      hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    return {
      name: zodiac.name,
      score: Math.abs(hash)
    };
  });
  
  // Sort stably by hashed score
  scoredZodiacs.sort((a, b) => a.score - b.score);
  
  // Convert sorted array to a lookup map of { [zodiacName]: rank }
  const rankings = {};
  scoredZodiacs.forEach((item, index) => {
    rankings[item.name] = index + 1;
  });
  
  return rankings;
}

// Generate the fortune content based on daily ranking and update UI
function generateAndDisplayFortune(zodiac) {
  // 1. Get stable rank
  const rankings = getRankingsForToday();
  const rank = rankings[zodiac.name];

  // 2. Select Tier (1-3 Good, 4-8 Normal, 9-12 Caution)
  let tierKey = 'normal';
  if (rank <= 3) {
    tierKey = 'good';
  } else if (rank >= 9) {
    tierKey = 'caution';
  }
  const tierData = FORTUNE_TEMPLATES[tierKey];

  // 3. Populate Zodiac Info
  resultZodiacSymbol.textContent = zodiac.symbol;
  resultZodiacName.textContent = zodiac.name;
  resultDateInfo.textContent = zodiac.date;

  // 4. Populate Ranking
  rankNumber.textContent = rank;
  rankText.textContent = `오늘의 ${zodiac.name}는 ${rank}위입니다.`;

  // Set colors based on rank tier
  rankNumber.className = 'rank-number'; // Reset
  // Apply gradient text or styles if needed, the CSS handles general styling, but we can update badges
  
  // 5. Populate Status Banner
  tierStatusBanner.className = `status-banner tier-${tierKey}`;
  tierStatusEmoji.textContent = tierData.emoji;
  tierStatusMessage.textContent = tierData.title;

  // 6. Populate Description (using stable hash index to pick one description)
  const descIndex = rank % tierData.descriptions.length;
  fortuneDescription.textContent = tierData.descriptions[descIndex];

  // 7. Populate Recommended Actions (Pick 2 random ones for diversity, or stable by rank)
  recommendList.innerHTML = '';
  const recIndex1 = rank % tierData.recommends.length;
  const recIndex2 = (rank + 1) % tierData.recommends.length;
  const recItem1 = document.createElement('li');
  recItem1.textContent = tierData.recommends[recIndex1];
  const recItem2 = document.createElement('li');
  recItem2.textContent = tierData.recommends[recIndex2];
  recommendList.appendChild(recItem1);
  recommendList.appendChild(recItem2);

  // 8. Populate Avoid Actions (Pick 2)
  avoidList.innerHTML = '';
  const avoidIndex1 = rank % tierData.avoids.length;
  const avoidIndex2 = (rank + 1) % tierData.avoids.length;
  const avoidItem1 = document.createElement('li');
  avoidItem1.textContent = tierData.avoids[avoidIndex1];
  const avoidItem2 = document.createElement('li');
  avoidItem2.textContent = tierData.avoids[avoidIndex2];
  avoidList.appendChild(avoidItem1);
  avoidList.appendChild(avoidItem2);

  // 9. Populate Cheering Message (Completely random on every click)
  const cheerIndex = Math.floor(Math.random() * CHEERING_MESSAGES.length);
  cheeringMessage.textContent = `"${CHEERING_MESSAGES[cheerIndex]}"`;

  // 10. Switch Screen
  switchToScreen(resultScreen);
}

// Autocomplete Suggestions List
function showSuggestions(query) {
  const cleanQuery = query.toLowerCase();
  
  // Find matches among zodiac names and aliases
  const matches = ZODIAC_DATA.filter(zodiac => {
    return zodiac.name.includes(cleanQuery) || 
           zodiac.aliases.some(alias => alias.includes(cleanQuery)) ||
           zodiac.english.toLowerCase().includes(cleanQuery);
  });

  if (matches.length > 0) {
    suggestionsContainer.innerHTML = '';
    matches.forEach(match => {
      const div = document.createElement('div');
      div.className = 'suggestion-item';
      div.innerHTML = `<span style="margin-right: 8px;">${match.symbol}</span><strong>${match.name}</strong> (${match.date})`;
      
      div.addEventListener('click', () => {
        zodiacInput.value = match.name;
        clearInputBtn.classList.remove('hidden');
        hideSuggestions();
        handleSearch(match.name);
      });
      suggestionsContainer.appendChild(div);
    });
    suggestionsContainer.classList.remove('hidden');
  } else {
    hideSuggestions();
  }
}

function hideSuggestions() {
  suggestionsContainer.classList.add('hidden');
}

// Error Banner Show/Hide
function showError(msg) {
  errorText.textContent = msg;
  errorMessage.classList.remove('hidden');
  
  // Simple shake animation trigger
  errorMessage.style.animation = 'none';
  errorMessage.offsetHeight; // Trigger reflow
  errorMessage.style.animation = 'shake 0.4s ease';
}

function hideError() {
  errorMessage.classList.add('hidden');
}

// Screen Switch Helper
function switchToScreen(targetScreen) {
  // Remove active from all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  // Show target
  targetScreen.classList.add('active');
  
  // Scroll to top of app container on screen changes
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
