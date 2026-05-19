const pairs = [
  ["Defense", "USDT"],
  ["Decentralized", "USDT"],
  ["Dollar", "You"],
];

const primaryRotator = document.querySelector(".rotator:not(.companion)");
const companionRotator = document.querySelector(".rotator.companion");
let pairIndex = 0;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
progressBar.setAttribute("aria-hidden", "true");
document.body.prepend(progressBar);

const energyCanvas = document.createElement("canvas");
energyCanvas.className = "energy-canvas";
energyCanvas.setAttribute("aria-hidden", "true");
document.body.prepend(energyCanvas);

window.setInterval(() => {
  pairIndex = (pairIndex + 1) % pairs.length;
  primaryRotator.classList.add("is-changing");
  companionRotator.classList.add("is-changing");

  window.setTimeout(
    () => {
      primaryRotator.textContent = pairs[pairIndex][0];
      companionRotator.textContent = pairs[pairIndex][1];
      primaryRotator.classList.remove("is-changing");
      companionRotator.classList.remove("is-changing");
    },
    prefersReducedMotion ? 0 : 220,
  );
}, 1800);

if (!prefersReducedMotion) {
  window.addEventListener("pointermove", (event) => {
    document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
    document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
  });
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.body.style.setProperty("--scroll-progress", `${Math.min(progress, 100)}%`);
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

const translations = {
  zh: {
    "page.title": "D4U - 稳定币智能账户基础设施",
    "page.description": "D4U 是面向稳定币的下一代智能账户基础设施，提供私密收款、快速转账与安全资产分区能力。",
    "nav.story": "产品故事",
    "nav.features": "功能",
    "nav.engines": "三大引擎",
    "nav.download": "下载 App",
    "cta.download": "下载 D4U",
    "cta.learn": "了解产品故事",
    "hero.for": "为",
    "hero.title": "下一代稳定币智能账户基础设施",
    "hero.lede": "以简洁克制的产品体验，承载 USDT 收付、隐私保护与资产分区所需的完整安全能力。",
    "story.kicker": "欢迎来到 D4U",
    "story.title": "下一代稳定币智能账户基础设施体系",
    "story.problemTitle": "传统钱包存在设计缺陷",
    "story.problem": "传统 Web3 钱包无法从根源保护你的 USDT 隐私和安全，你的钱包拥有极大的被污染风险，以及隐私泄露风险。",
    "story.solutionTitle": "D4U 不只是钱包，更是 USDT 秩序的构建者",
    "story.solution": "得益于去中心化设计、D4U 混合网络技术和零知识证明技术，D4U 重新构建了 USDT 的使用秩序。",
    "story.button": "下载 D4U",
    "metrics.users": "用户",
    "metrics.countries": "覆盖国家和地区",
    "metrics.secured": "累计保护资产",
    "metrics.daily": "日均处理规模",
    "privacyAction.kicker": "See Safety and Privacy in Action",
    "privacyAction.title": "安全收款与隐私付款，一眼看清。",
    "privacyAction.copy": "两个核心 Demo 分别展示 D4U 如何隔离风险资金，以及如何隐藏 USDT 支付链路。",
    "privacyAction.chipLeft": "端到端加密",
    "privacyAction.chipRight": "ZK 保护",
    "privacyAction.safetyKicker": "安全收款",
    "privacyAction.safetyTitle": "Receive USDT safely.",
    "privacyAction.safetyCopy": "风险资金在入账瞬间被识别，并从主账户路径中隔离出去。",
    "privacyAction.privacyKicker": "隐私付款",
    "privacyAction.privacyTitle": "Pay USDT privately.",
    "privacyAction.privacyCopy": "D4U Hybrid Network 打断发送方、路由与接收方之间的可见关联。",
    "features.kicker": "D4U Features",
    "features.title": "D4U Features",
    "features.receiveTitle": "Monitoring your stablecoin as a sentry. Receive USDT safely.",
    "features.receive": "红、棕、绿资金从左侧进入 D4U Sentry 系统，风险雷达实时过滤，并自动分配到对应风险区域。",
    "features.visualVault": "隔离区",
    "features.visualFee": "低费用",
    "features.visualInstant": "即时到账",
    "features.sendTitle": "快速转账",
    "features.send": "低费用、即时 USDT 转账，适合朋友、白名单与高频运营场景。",
    "features.privateTitle": "隐私付 U",
    "features.private": "通过隐私路由打散交易特征，让支付像你希望的那样低可见、低关联。",
    "engines.kicker": "多层隐私与安全架构",
    "engines.title": "三大核心引擎，为 USDT 账户建立秩序。",
    "engines.sentry": "毫秒级 KYT 检测、16 层风险维度与三级智能预警，入账即扫描。",
    "engines.sentry1": "实时监控",
    "engines.sentry2": "16 层防护",
    "engines.sentry3": "智能预警",
    "engines.cloak": "零痕迹支付系统通过路径混淆、元数据清零和地址轮换切断地址关联。",
    "engines.cloak1": "路径混淆",
    "engines.cloak2": "元数据清零",
    "engines.cloak3": "地址轮换",
    "engines.partition": "核心储备区、流动区、观察区分层管理，避免可疑资产污染主账户。",
    "engines.partition1": "核心储备区",
    "engines.partition2": "流动区",
    "engines.partition3": "观察区",
    "ecosystem.kicker": "D4U 生态",
    "ecosystem.title": "从地址到链路，再到 API，一次完成。",
    "ecosystem.addressTitle": "即时生成式地址簿",
    "ecosystem.address": "基于 Stealth Address 技术，为每一次收付生成更私密的链上入口。",
    "ecosystem.chainTitle": "D4U 混合网络公链系统",
    "ecosystem.chain": "通过混合网络式链路提升收支效率，让转账更快、更省、更难关联。",
    "ecosystem.apiTitle": "D4U API 与 SDK",
    "ecosystem.api": "实时监控、智能预警、隐形支付、资金分层，一次集成。",
    "trust.kicker": "信任与背书",
    "trust.title": "安全审计与顶级支持，是 D4U 的基础设施底座。",
    "trust.copy": "D4U 面向严肃的 USDT 收付场景构建，从安全审查、ZK 架构到长期生态支持，都服务于更可靠的账户秩序。",
    "trust.audit": "安全审计",
    "trust.backed": "顶级生态支持",
    "trust.auditTag1": "安全审查",
    "trust.auditTag2": "ZK 架构",
    "trust.auditTag3": "风险控制",
    "trust.backTag1": "长期资本",
    "trust.backTag2": "加密原生网络",
    "trust.backTag3": "基础设施视角",
    "security.kicker": "隐私与安全优先的设计",
    "security.title": "每一个设计决定，都先保护你的控制权。",
    "security.selfTitle": "始终自托管",
    "security.self": "D4U 完全非托管。你的密钥、你的资产、你的控制权。",
    "security.openTitle": "默认开源",
    "security.open": "核心组件开源，你无需只相信承诺，也可以自行验证安全性。",
    "security.mixnetTitle": "混合网络",
    "security.mixnet": "混合网络打散并重组交易路径，让资金流难以回溯到你。",
    "security.zkTitle": "内置零知识证明",
    "security.zk": "原生 ZK 证明可在不暴露持仓或交易历史的前提下证明余额与合规性。",
    "feedback.kicker": "用户反馈",
    "feedback.title": "用户如何评价 D4U",
    "feedback.quote1": "对于机构级 USDT 管理，D4U 提供了难得的灵活性。实时报告和多链支持显著改善了我们的工作流。",
    "feedback.role1": "Quantum Capital 管理合伙人",
    "feedback.quote2": "D4U 以隐私优先的设计和多重签名安全机制，让我们能够更放心地处理大额交易。",
    "feedback.role2": "OTC 商户",
    "feedback.quote3": "自托管模型与审计轨迹兼顾隐私和问责，正好满足我们对合规与控制权的要求。",
    "feedback.role3": "PayBridge International 合规官",
    "download.kicker": "开始使用",
    "download.title": "加入 D4U，把稳定币控制权交还给你。",
    "download.copy": "受到超过 100,000 名用户信任。D4U 不只是另一个钱包，而是一套稳定币账户基础设施。",
    "download.button": "获取 D4U",
    "footer.products": "产品",
    "footer.download": "下载",
    "footer.support": "功能支持",
    "footer.resource": "资源",
    "footer.brand": "品牌手册",
    "footer.privacy": "隐私政策",
    "footer.terms": "使用条款",
    "footer.audit": "审计报告",
  },
  en: {
    "page.title": "D4U - Smart Account Infrastructure for Stablecoins",
    "page.description": "D4U is a next-generation smart account infrastructure stack for stablecoins, built for private USDT receiving, fast transfers, and secure asset partitioning.",
    "nav.story": "Story",
    "nav.features": "Features",
    "nav.engines": "Engines",
    "nav.download": "Download App",
    "cta.download": "Download D4U",
    "cta.learn": "Explore the story",
    "hero.for": "For",
    "hero.title": "Next-generation smart account infrastructure for stablecoins.",
    "hero.lede": "A refined USDT account experience for receiving, sending, privacy protection, and secure asset partitioning.",
    "story.kicker": "Welcome to D4U",
    "story.title": "The Next-Gen Smart Account Infrastructure Stack for Stablecoins.",
    "story.problemTitle": "Traditional wallets are fundamentally flawed",
    "story.problem": "Conventional web3 wallets fail to protect your USDT privacy and security at the source. Your wallet faces significant risks of contamination and privacy exposure.",
    "story.solutionTitle": "D4U is more than a wallet — it's the architect of USDT order",
    "story.solution": "Powered by decentralized architecture, D4U hybrid network technology, and zero-knowledge proofs, D4U redefines how USDT should be used.",
    "story.button": "Get D4U",
    "metrics.users": "Users",
    "metrics.countries": "Supported countries",
    "metrics.secured": "Total value secured",
    "metrics.daily": "Daily processed",
    "privacyAction.kicker": "See Safety and Privacy in Action",
    "privacyAction.title": "Safety and privacy, shown in action.",
    "privacyAction.copy": "Two core demos show how D4U isolates risky incoming funds and hides visible USDT payment links.",
    "privacyAction.chipLeft": "E2E Encrypted",
    "privacyAction.chipRight": "ZK Protected",
    "privacyAction.safetyKicker": "Safe receive",
    "privacyAction.safetyTitle": "Receive USDT safely.",
    "privacyAction.safetyCopy": "Risky funds are detected on arrival and routed away from your main account.",
    "privacyAction.privacyKicker": "Private pay",
    "privacyAction.privacyTitle": "Pay USDT privately.",
    "privacyAction.privacyCopy": "D4U Hybrid Network breaks visible links between sender, route, and recipient.",
    "features.kicker": "D4U Features",
    "features.title": "D4U Features",
    "features.receiveTitle": "Monitoring your stablecoin as a sentry. Receive USDT safely.",
    "features.receive": "Red, amber, and green flows enter D4U Sentry from the left. The risk radar filters funds in real time and routes them into the right risk zones.",
    "features.visualVault": "Isolated",
    "features.visualFee": "Low fee",
    "features.visualInstant": "Instant",
    "features.sendTitle": "Send with low fees",
    "features.send": "Instant USDT transfers for friends, whitelists, and high-frequency operational flows.",
    "features.privateTitle": "Pay USDT privately",
    "features.private": "Privacy routing scatters transaction characteristics so payments remain low-visibility and hard to link.",
    "engines.kicker": "Multi-layered Privacy & Security Architectures",
    "engines.title": "Three core engines create order for USDT accounts.",
    "engines.sentry": "Millisecond KYT detection, 16 risk dimensions, and three-tier alerts scan funds on arrival.",
    "engines.sentry1": "Real-time monitoring",
    "engines.sentry2": "16-layer protection",
    "engines.sentry3": "Intelligent alerts",
    "engines.cloak": "A zero-trace payment system severs address linkage through obfuscation, metadata zeroing, and address rotation.",
    "engines.cloak1": "Path obfuscation",
    "engines.cloak2": "Metadata zeroing",
    "engines.cloak3": "Address rotation",
    "engines.partition": "Core Reserve, Flow Zone, and Watch Zone separate funds so suspicious assets never contaminate main accounts.",
    "engines.partition1": "Core Reserve",
    "engines.partition2": "Flow Zone",
    "engines.partition3": "Watch Zone",
    "ecosystem.kicker": "D4U Ecosystem",
    "ecosystem.title": "From addresses to routing to APIs, all in one stack.",
    "ecosystem.addressTitle": "Instantly generated address book",
    "ecosystem.address": "Stealth Address technology creates more private onchain entry points for every receipt and payment.",
    "ecosystem.chainTitle": "D4U Hybrid Network Public Chain",
    "ecosystem.chain": "Hybrid network routing makes transfers faster, more efficient, less expensive, and harder to correlate.",
    "ecosystem.apiTitle": "D4U API & SDK",
    "ecosystem.api": "Realtime monitoring, smart alerts, invisible payments, and fund partitioning in one integration.",
    "trust.kicker": "Trust & Backing",
    "trust.title": "Audited security, backed by people who understand infrastructure.",
    "trust.copy": "D4U is built for serious USDT flows, with security review, ZK architecture, and long-term ecosystem support at the foundation.",
    "trust.audit": "Audited Security",
    "trust.backed": "Ecosystem Backing",
    "trust.auditTag1": "Security review",
    "trust.auditTag2": "ZK design",
    "trust.auditTag3": "Risk controls",
    "trust.backTag1": "Long-term capital",
    "trust.backTag2": "Crypto-native network",
    "trust.backTag3": "Infrastructure focus",
    "security.kicker": "Privacy- and security-driven design",
    "security.title": "Every design decision starts with your control.",
    "security.selfTitle": "Self-Custody, Always",
    "security.self": "D4U is fully non-custodial. Your keys, your coins, your control.",
    "security.openTitle": "Open Source by Default",
    "security.open": "Core components are open source, so security can be verified instead of merely trusted.",
    "security.mixnetTitle": "Hybrid Mixnet",
    "security.mixnet": "The hybrid mixnet breaks and reshuffles transaction paths so flows cannot easily be traced back to you.",
    "security.zkTitle": "Zero-Knowledge Built In",
    "security.zk": "Native ZK proofs let you prove balances or compliance without revealing holdings or transaction history.",
    "feedback.kicker": "Feedback",
    "feedback.title": "What users say about D4U",
    "feedback.quote1": "For institutional USDT management, D4U offers rare flexibility. Realtime reporting and multi-chain support have transformed our workflow.",
    "feedback.role1": "Managing Partner, Quantum Capital",
    "feedback.quote2": "D4U's privacy-first design and multi-signature security give us confidence to handle large-volume transactions with discretion.",
    "feedback.role2": "OTC Merchant",
    "feedback.quote3": "The self-custody model and audit trail create the right balance between privacy and accountability.",
    "feedback.role3": "Compliance Officer, PayBridge International",
    "download.kicker": "Get Started",
    "download.title": "Join D4U and take control of your stablecoins.",
    "download.copy": "Trusted by more than 100,000 users. D4U is not just another wallet; it is account infrastructure for stablecoins.",
    "download.button": "Get D4U",
    "footer.products": "Products",
    "footer.download": "Download",
    "footer.support": "Support",
    "footer.resource": "Resources",
    "footer.brand": "Brand book",
    "footer.privacy": "Privacy policy",
    "footer.terms": "Terms of use",
    "footer.audit": "Audit report",
  },
};

const langToggle = document.querySelector(".lang-toggle");
let currentLang = "zh";

function applyLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = translations[lang]["page.title"];
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", translations[lang]["page.description"]);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = translations[lang][key] ?? node.textContent;
  });
  langToggle.textContent = lang === "zh" ? "EN" : "中";
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  applyLanguage(currentLang);
});

applyLanguage(currentLang);

const revealTargets = [
  ...document.querySelectorAll(
    ".section, .intro, .metrics, .trust-band, .demo-card, .split-copy article, .feature-card, .engine-card, .ecosystem-list article, .security-grid article, .quote-grid figure",
  ),
];

revealTargets.forEach((target) => target.classList.add("reveal"));

let lastScrollY = window.scrollY;
let scrollDirection = "down";

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;
    scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
    lastScrollY = Math.max(currentScrollY, 0);
    document.body.dataset.scrollDirection = scrollDirection;
  },
  { passive: true },
);

function parseMetricValue(text) {
  const numeric = Number.parseFloat(text.replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function formatMetricValue(original, value) {
  const rounded = Math.round(value);
  if (original.includes("$")) return `$${rounded}${original.includes("B") ? "B" : "M"}+`;
  return `${rounded.toLocaleString()}${original.includes("+") ? "+" : ""}`;
}

function animateMetric(node) {
  if (node.dataset.animated === "true") return;
  node.dataset.animated = "true";

  const original = node.dataset.originalValue ?? node.textContent.trim();
  node.dataset.originalValue = original;

  if (prefersReducedMotion) {
    node.textContent = original;
    return;
  }

  const target = parseMetricValue(original);
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = formatMetricValue(original, target * eased);
    if (progress < 1) {
      window.requestAnimationFrame(tick);
    } else {
      node.textContent = original;
    }
  }

  window.requestAnimationFrame(tick);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (!entry.isIntersecting) {
        target.classList.remove("is-visible");
        return;
      }

      target.classList.toggle("reveal-from-below", scrollDirection === "down");
      target.classList.toggle("reveal-from-above", scrollDirection === "up");
      target.classList.add("is-visible");

      if (target.classList.contains("metrics")) {
        target.querySelectorAll(".metric strong").forEach(animateMetric);
      }
    });
  },
  { threshold: 0.14, rootMargin: "-6% 0px -10% 0px" },
);

revealTargets.forEach((target) => revealObserver.observe(target));

if (!prefersReducedMotion) {
  const heroVisual = document.querySelector(".hero-visual");
  if (heroVisual) {
    window.addEventListener("pointermove", (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      heroVisual.style.setProperty("--hero-tilt-x", `${(-y * 8).toFixed(2)}deg`);
      heroVisual.style.setProperty("--hero-tilt-y", `${(x * 10).toFixed(2)}deg`);
    });
  }

  document.querySelectorAll(".button, .lang-toggle").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
    });
    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });

  const tiltTargets = document.querySelectorAll(
    ".demo-card, .feature-card, .engine-card, .split-copy article, .ecosystem-list article, .security-grid article, .quote-grid figure",
  );

  tiltTargets.forEach((target) => {
    target.addEventListener("pointermove", (event) => {
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      target.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      target.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
    });

    target.addEventListener("pointerleave", () => {
      target.style.setProperty("--tilt-x", "0deg");
      target.style.setProperty("--tilt-y", "0deg");
    });
  });
}

function startEnergyField() {
  if (prefersReducedMotion) return;

  const canvas = energyCanvas;
  const ctx = canvas.getContext("2d");
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let particles = [];
  let width = 0;
  let height = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(96, Math.max(46, Math.floor(width / 18)));
    particles = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: index % 7 === 0 ? 2.4 : 1.4,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(now) {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      const dx = p.x - pointer.x;
      const dy = p.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 180) {
        const force = (180 - distance) / 180;
        p.vx += (dx / (distance || 1)) * force * 0.035;
        p.vy += (dy / (distance || 1)) * force * 0.035;
      }

      p.x += p.vx + Math.cos(now / 950 + p.phase) * 0.18;
      p.y += p.vy + Math.sin(now / 1100 + p.phase) * 0.18;
      p.vx *= 0.992;
      p.vy *= 0.992;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist > 135) continue;
        const alpha = (1 - dist / 135) * 0.22;
        ctx.strokeStyle = `rgba(0, 145, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    particles.forEach((p) => {
      const pulse = 0.55 + Math.sin(now / 500 + p.phase) * 0.35;
      ctx.fillStyle = `rgba(0, 167, 255, ${0.24 + pulse * 0.32})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r + pulse, 0, Math.PI * 2);
      ctx.fill();
    });

    window.requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
  resize();
  window.requestAnimationFrame(draw);
}

startEnergyField();
