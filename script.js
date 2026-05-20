const pairs = [
  ["Defense", "USDT"],
  ["Decentralized", "USDT"],
  ["Dollar", "YOU"],
];

const translations = {
  zh: {
    download: "下载",
    downloadAria: "下载 D4U",
    langToggle: "EN / 中文",
    introTitle: "欢迎来到D4U-- 下一代稳定币智能账户基础设施体系",
    introBlockOneTitle: "传统钱包存在设计缺陷",
    introBlockOneBody:
      "传统web3钱包无法从根源保护你的USDT隐私和安全，你的钱包拥有极大的被污染风险，以及隐私泄露风险。",
    introBlockTwoTitle: "D4U不只是钱包，更是USDT秩序的构建者",
    introBlockTwoBody:
      "得益于去中心化设计、D4U混合网络技术和零知识证明技术，D4U重新构建了USDT的使用秩序。",
  },
  en: {
    download: "Download",
    downloadAria: "Download D4U",
    langToggle: "中文 / EN",
    introTitle:
      "Welcome to D4U- The Next-Gen Smart account infrastructure stack for Stablecoins.",
    introBlockOneTitle: "Traditional wallets are fundamentally flawed",
    introBlockOneBody:
      "Conventional web3 wallets fail to protect your USDT privacy and security at the source. Your wallet faces significant risks of contamination and privacy exposure.",
    introBlockTwoTitle:
      "D4U is more than a wallet — it's the architect of USDT order",
    introBlockTwoBody:
      "Powered by decentralized architecture, D4U hybrid network technology, and zero-knowledge proofs, D4U redefines how USDT should be used.",
  },
};

let currentLanguage = "zh";

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = translations[language][node.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", translations[language][node.dataset.i18nAria]);
  });

  const langToggle = document.querySelector("[data-lang-toggle]");
  if (langToggle) {
    langToggle.textContent = translations[language].langToggle;
  }
}

const langToggle = document.querySelector("[data-lang-toggle]");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "zh" ? "en" : "zh");
  });
}

const leadWord = document.querySelector("#lead-word");
const targetWord = document.querySelector("#target-word");
let index = 0;

function swapWords() {
  leadWord.classList.add("word-exit");
  targetWord.classList.add("word-exit");

  window.setTimeout(() => {
    index = (index + 1) % pairs.length;
    leadWord.textContent = pairs[index][0];
    targetWord.textContent = pairs[index][1];
    leadWord.classList.remove("word-exit");
    targetWord.classList.remove("word-exit");
  }, 240);
}

window.setInterval(swapWords, 2200);

const tabPanels = Array.from(document.querySelectorAll("[data-tab-panel]"));
let activePanelIndex = 0;

function setActivePanel(nextIndex) {
  activePanelIndex = nextIndex;
  tabPanels.forEach((panel, panelIndex) => {
    const isActive = panelIndex === activePanelIndex;
    panel.classList.toggle("is-active", isActive);
    panel
      .querySelector(".copy-trigger")
      .setAttribute("aria-expanded", String(isActive));
  });
}

if (tabPanels.length > 0) {
  tabPanels.forEach((panel, panelIndex) => {
    panel.querySelector(".copy-trigger").addEventListener("click", () => {
      setActivePanel(panelIndex);
    });
  });

  window.setInterval(() => {
    setActivePanel((activePanelIndex + 1) % tabPanels.length);
  }, 3800);
}

const counters = Array.from(document.querySelectorAll("[data-count-to]"));

function formatCounter(value, format) {
  if (format === "comma") {
    return Math.round(value).toLocaleString("en-US");
  }

  return String(Math.round(value));
}

function animateCounter(counter) {
  const target = Number(counter.dataset.countTo);
  const format = counter.dataset.format;
  const duration = 1400;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = formatCounter(target * eased, format);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

if (counters.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

const chatDemos = Array.from(document.querySelectorAll("[data-chat-demo]"));

function playChatDemo(chatDemo, startDelay = 0) {
  const steps = Array.from(chatDemo.querySelectorAll("[data-chat-step]"));
  const typing = chatDemo.querySelector(".typing-indicator");
  let stepIndex = 0;

  steps.forEach((step) => step.classList.remove("is-visible"));
  typing.classList.remove("is-visible");

  function revealNext() {
    if (stepIndex >= steps.length) {
      window.setTimeout(() => playChatDemo(chatDemo), 1800);
      return;
    }

    typing.classList.add("is-visible");

    window.setTimeout(() => {
      typing.classList.remove("is-visible");
      steps[stepIndex].classList.add("is-visible");
      stepIndex += 1;
      window.setTimeout(revealNext, 760);
    }, 620);
  }

  window.setTimeout(revealNext, startDelay);
}

if (chatDemos.length > 0) {
  const chatObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const demoIndex = chatDemos.indexOf(entry.target);
          playChatDemo(entry.target, demoIndex * 1600);
          chatObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 },
  );

  chatDemos.forEach((chatDemo) => chatObserver.observe(chatDemo));
}
