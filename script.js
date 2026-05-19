const pairs = [
  ["Defense", "USDT"],
  ["Decentralized", "USDT"],
  ["Dollar", "YOU"],
];

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

function playChatDemo(chatDemo) {
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

  revealNext();
}

if (chatDemos.length > 0) {
  const chatObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playChatDemo(entry.target);
          chatObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 },
  );

  chatDemos.forEach((chatDemo) => chatObserver.observe(chatDemo));
}
