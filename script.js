const wordPairs = {
  zh: [
    ["守护", "USDT"],
    ["去中心化", "USDT"],
    ["Dollar", "YOU"],
  ],
  en: [
    ["Defense", "USDT"],
    ["Decentralized", "USDT"],
    ["Dollar", "YOU"],
  ],
};

const translations = {
  zh: {
    navAbout: "关于",
    navStats: "数据",
    navDemo: "演示",
    navFeatures: "特性",
    heroDivider: "为",
    heroBadge: "下一代稳定币账户基础设施",
    heroSubtitle: "非托管、隐私优先的 USDT 钱包。安全收款、隐私支付、资金分层，一站式搞定。",
    heroChipOne: "非托管",
    heroChipTwo: "隐私保护",
    heroChipThree: "零知识证明",
    heroWalletBalance: "总余额",
    heroWalletProtected: "已保护",
    heroWalletChange: "今日 +4.32%",
    heroWalletSend: "发送",
    heroWalletReceive: "接收",
    heroWalletSafe: "安全",
    heroWalletToast: "风险路线已清除",
    heroFloatSafe: "隐私路径已保护",
    heroFloatRisk: "风险已清除",
    download: "下载",
    downloadAria: "下载 D4U",
    brandHome: "D4U 首页",
    navMenuOpen: "打开菜单",
    navMenuClose: "关闭菜单",
    langToggle: "EN / 中文",
    statsTitle: "全球用户信赖",
    statUsers: "用户",
    statCountries: "支持国家",
    statSecured: "安全保障总额",
    statProcessed: "日处理量",
    demoTitle: "安全与隐私，真实可见",
    demoPayTopbar: "隐私付款",
    demoPayChat1: "向 Alex 发送 320 USDT？",
    demoPayChat2: "隐藏发送地址与付款路径。",
    demoPayChat3: "隐私路径已由 D4U 保护。",
    demoPayCardLabel: "隐私付款",
    demoPayCardSmall: "隐私路径已确认。",
    demoOneTitle: "隐私付款",
    demoOneBody: "付款路径与地址信息被保护，减少隐私暴露。",
    demoReceiveTopbar: "安全收款",
    demoReceiveChat1: "检测到 1,280 USDT 入账。",
    demoReceiveChat2: "收款前先检查污染风险。",
    demoReceiveChat3: "地址风险已清除，可安全接收。",
    demoReceiveCardLabel: "安全收款",
    demoReceiveCardStrong: "已验证",
    demoReceiveCardSmall: "来源风险已清除。",
    demoTwoTitle: "安全收款",
    demoTwoBody: "收款前识别风险来源，降低钱包污染风险。",
    featuresEyebrow: "D4U 特性",
    featureOneTitle: "像哨兵一样监控你的稳定币，安全接收 USDT。",
    featureTwoTitle: "如你所愿，隐形存在。私密支付 USDT。",
    featureThreeTitle: "低费率、隐私化的 USDT 子钱包转账。",
    featureFourTitle: "多个金库，多种用途，尽在一处",
    introTitle: "欢迎来到D4U-- 下一代稳定币智能账户基础设施体系",
    introBlockOneTitle: "传统钱包存在设计缺陷",
    introBlockOneBody:
      "传统web3钱包无法从根源保护你的USDT隐私和安全，你的钱包拥有极大的被污染风险，以及隐私泄露风险。",
    introBlockTwoTitle: "D4U不只是钱包，更是USDT秩序的构建者",
    introBlockTwoBody:
      "得益于去中心化设计、D4U混合网络技术和零知识证明技术，D4U重新构建了USDT的使用秩序。",
    engineTitle: "多层隐私与安全架构",
    sentryEngineName: "D4U 哨兵引擎",
    sentryCardOneTitle: "实时监控",
    sentryCardOneBody: "毫秒级KYT检测，零延迟隔离风险资金",
    sentryCardTwoTitle: "多层防护",
    sentryCardTwoBody:
      "覆盖链上追溯、混币识别、黑U数据库、制裁名单等多个检测维度",
    sentryCardThreeTitle: "智能预警",
    sentryCardThreeBody: "高中低风险三级分类，自动隔离可疑交易。",
    sentryCardFourTitle: "地址矩阵",
    sentryCardFourBody: "每笔交易自动生成临时地址,用后即焚不留痕迹。",
    cloakEngineName: "D4U斗篷模式--零痕迹支付系统",
    cloakCardOneTitle: "路径混淆",
    cloakCardOneBody:
      "通过D4U混合网络和隐私路由技术打散交易特征,切断地址关联性",
    cloakCardTwoTitle: "元数据清零",
    cloakCardTwoBody: "不记录转账时间、金额模式、交易对手等任何元数据",
    ecosystemTitle: "D4U生态系统",
    ecosystemOneTitle: "即时生成式地址簿",
    ecosystemOneBody: "基于Stealth Address技术，您的链上隐私得以实现。",
    ecosystemTwoTitle: "D4U混合网络公链系统",
    ecosystemTwoBody: "强大的混合网络式公链系统，收支更快速，更高效，更省钱。",
    ecosystemThreeTitle: "D4U API&SDK",
    ecosystemThreeBody:
      "强大的API&SDK集成，实时监控，智能预警，隐形支付，资金分层，一次搞定。",
    compareTitle: "更强隐私，更加安全，更多自由。",
    compareSubtitle: "看看我们的三大引擎如何发挥技术优势",
    compareFeatureCol: "功能",
    compareRowOne: "安全收款",
    compareRowTwo: "隐私支付",
    compareRowThree: "资金分层",
    compareRowFour: "资产隐私归集",
    compareRowFive: "动态地址矩阵",
    compareRowSix: "非托管",
    trustTitle: "值得信赖",
    trustSubtitle: "获领先机构认证",
    trustOne: "经 CertiK、PeckShield 审计",
    trustTwo: "零知识架构",
    investorsTitle: "顶级投资者背书",
    privacyTitle: "隐私与安全驱动设计",
    privacyCardOneTitle: "始终自托管",
    privacyCardOneBody:
      "D4U 完全非托管——你的密钥、你的资产、你的掌控。我们从不持有你的资金。",
    privacyCardTwoTitle: "默认开源",
    privacyCardTwoBody:
      "核心组件开源。你不必相信我们的承诺——你可以亲自验证安全性。",
    privacyCardThreeTitle: "混合网络",
    privacyCardThreeBody:
      "混合网络打散并重排交易路径，你的资金流向难以被追溯。",
    privacyCardFourTitle: "内置零知识证明",
    privacyCardFourBody:
      "原生 ZK 证明让你在不暴露实际持仓或交易历史的情况下，证明余额或合规性。",
    feedbackTitle: "用户反馈（他们如何评价我们）",
    feedbackOneQuote:
      "对于机构级 USDT 管理，D4U 提供了无与伦比的灵活性。分层权限系统让我们可以委派运营任务，同时保持战略控制。实时报告和多链支持改变了我们的资产配置流程。",
    feedbackOneRole: "Quantum Capital 管理合伙人",
    feedbackTwoQuote:
      "管理客户 USDT 流转既需要速度也需要谨慎。D4U 的隐私优先设计和多签安全让我们有信心处理大额交易，而不会损害客户机密与运营安全。",
    feedbackTwoRole: "OTC 商户",
    feedbackThreeQuote:
      "D4U 的去中心化基础设施与我们的监管方式完美契合。自托管模式意味着我们从不触碰客户资金，而审计追踪则为合规团队提供了所需的透明度。这是隐私与问责之间的完美平衡。",
    feedbackThreeRole: "PayBridge International 合规官",
    ctaTitle: "立即开始",
    ctaLineOne: "受到 10 万用户社区信赖，超越其他钱包。",
    ctaLineTwo: "加入 D4U，Defense Decentralized Dollar for You.",
    ctaButton: "下载",
    ctaButtonAria: "下载 D4U",
    footerTagline: "Defense Decentralized Dollar for U",
    footerProductsTitle: "产品",
    footerDownload: "下载",
    footerSupport: "支持",
    footerResourceTitle: "资源",
    footerBrandBook: "品牌手册",
    footerPrivacyPolicy: "隐私政策",
    footerTermsOfUse: "使用条款",
    footerAuditReport: "审计报告",
    footerCopyright: "© 2026 D4U. 保留所有权利。",
  },
  en: {
    navAbout: "About",
    navStats: "Stats",
    navDemo: "Demo",
    navFeatures: "Features",
    heroDivider: "For",
    heroBadge: "Next-Gen Stablecoin Infrastructure",
    heroSubtitle:
      "Non-custodial, privacy-first USDT wallet. Safe receive, private pay, and fund layering — all in one place.",
    heroChipOne: "Non-custodial",
    heroChipTwo: "Privacy-first",
    heroChipThree: "Zero-knowledge",
    heroWalletBalance: "Total Balance",
    heroWalletProtected: "Protected",
    heroWalletChange: "+4.32% today",
    heroWalletSend: "Send",
    heroWalletReceive: "Receive",
    heroWalletSafe: "Safe",
    heroWalletToast: "Risk route cleared",
    heroFloatSafe: "Privacy route protected",
    heroFloatRisk: "Risk cleared",
    download: "Download",
    downloadAria: "Download D4U",
    brandHome: "D4U Home",
    navMenuOpen: "Open menu",
    navMenuClose: "Close menu",
    langToggle: "中文 / EN",
    statsTitle: "Trusted By Worldwide Users",
    statUsers: "Users",
    statCountries: "Supported countries",
    statSecured: "Total value secured",
    statProcessed: "Daily processed",
    demoTitle: "See Safety and Privacy in Action",
    demoPayTopbar: "Private Pay",
    demoPayChat1: "Send 320 USDT to Alex?",
    demoPayChat2: "Hide sender address and payment route.",
    demoPayChat3: "Privacy route protected by D4U.",
    demoPayCardLabel: "Privacy Payment",
    demoPayCardSmall: "Private route confirmed.",
    demoOneTitle: "Private Payment",
    demoOneBody:
      "Payment paths and address details are protected to reduce privacy exposure.",
    demoReceiveTopbar: "Safe Receive",
    demoReceiveChat1: "Incoming 1,280 USDT detected.",
    demoReceiveChat2: "Check contamination risk before receiving.",
    demoReceiveChat3: "Address risk cleared. Funds are safe to accept.",
    demoReceiveCardLabel: "Safe Receive",
    demoReceiveCardStrong: "Verified",
    demoReceiveCardSmall: "Source risk cleared.",
    demoTwoTitle: "Safe Receive",
    demoTwoBody:
      "Identify risky sources before receiving funds to reduce wallet contamination.",
    featuresEyebrow: "D4U Features",
    featureOneTitle: "Monitoring your stablecoin as a sentry. Receive USDT safely.",
    featureTwoTitle: "Invisible as you wish. Pay USDT privately.",
    featureThreeTitle: "Low-fee, private USDT transfers from your sub-wallets.",
    featureFourTitle: "Multiple vaults, multiple purposes, all in one place",
    introTitle:
      "Welcome to D4U- The Next-Gen Smart account infrastructure stack for Stablecoins.",
    introBlockOneTitle: "Traditional wallets are fundamentally flawed",
    introBlockOneBody:
      "Conventional web3 wallets fail to protect your USDT privacy and security at the source. Your wallet faces significant risks of contamination and privacy exposure.",
    introBlockTwoTitle:
      "D4U is more than a wallet — it's the architect of USDT order",
    introBlockTwoBody:
      "Powered by decentralized architecture, D4U hybrid network technology, and zero-knowledge proofs, D4U redefines how USDT should be used.",
    engineTitle: "Multi-layered Privacy & Security Architectures",
    sentryEngineName: "D4U Sentry engine",
    sentryCardOneTitle: "Real-time Monitoring",
    sentryCardOneBody:
      "Millisecond-level KYT detection, zero-delay isolation of risky funds.",
    sentryCardTwoTitle: "Multi-Layered Protection",
    sentryCardTwoBody:
      "Including on-chain tracing, mixer identification, tainted USDT database, sanction lists, and more.",
    sentryCardThreeTitle: "Intelligent Alerts",
    sentryCardThreeBody:
      "Three-tier risk classification (high, medium, low), automatic isolation of suspicious transactions to observation zone.",
    sentryCardFourTitle: "Address Rotation",
    sentryCardFourBody:
      "Automatically generates a temporary address for each transaction, which is burned immediately after use, leaving no traces.",
    cloakEngineName: "D4U Cloak Mode Zero-Trace Payment System",
    cloakCardOneTitle: "Path Obfuscation",
    cloakCardOneBody:
      "Uses D4U Hybrid Network and privacy routing technology to scatter transaction characteristics and completely sever address linkage.",
    cloakCardTwoTitle: "Metadata Zeroing",
    cloakCardTwoBody:
      "Records no metadata whatsoever, including transfer time, amount patterns, transaction counterparties, etc.",
    ecosystemTitle: "D4U Ecosystem",
    ecosystemOneTitle: "Instantly Generated Address Book",
    ecosystemOneBody:
      "Powered by Stealth Address technology, your on‑chain privacy is fully protected.",
    ecosystemTwoTitle: "D4U Hybrid Network Public Chain System",
    ecosystemTwoBody:
      "A powerful hybrid network public blockchain system , faster, more efficient, and more cost‑effective for your financial flows.",
    ecosystemThreeTitle: "D4U API&SDK",
    ecosystemThreeBody:
      "A powerful API and SDK suite that enables real‑time monitoring, smart alerts, invisible payments, and fund partitioning – all in one place.",
    compareTitle: "Stronger privacy, greater security, more freedom.",
    compareSubtitle: "See how our three core engines deliver technical advantages",
    compareFeatureCol: "Feature",
    compareRowOne: "Secure Receive",
    compareRowTwo: "Private Payment",
    compareRowThree: "Fund Layering",
    compareRowFour: "Private Asset Aggregation",
    compareRowFive: "Dynamic Address Matrix",
    compareRowSix: "Non-custodial",
    trustTitle: "Trustworthy",
    trustSubtitle: "Certified by Leading Institutions",
    trustOne: "Audited by CertiK, PeckShield",
    trustTwo: "Zero-Knowledge Architecture",
    investorsTitle: "Backed by Top Investors",
    privacyTitle: "Privacy- and security-driven design",
    privacyCardOneTitle: "Self-Custody, Always",
    privacyCardOneBody:
      "D4U is fully non-custodial — your keys, your coins, your control. We never hold your funds.",
    privacyCardTwoTitle: "Open Source by Default",
    privacyCardTwoBody:
      "Core components are open source. You don't have to trust our word — you can verify the security yourself.",
    privacyCardThreeTitle: "Hybrid Mixnet",
    privacyCardThreeBody:
      "Our hybrid mixnet breaks and reshuffles transaction paths, so your flows can't be easily traced back to you.",
    privacyCardFourTitle: "Zero-Knowledge Built In",
    privacyCardFourBody:
      "Native ZK proofs let you prove balances or compliance without revealing your actual holdings or transaction history.",
    feedbackTitle: "Feedback (How users say about us)",
    feedbackOneQuote:
      "For institutional USDT management, D4U offers unmatched flexibility. The tiered permission system lets us delegate operational tasks while maintaining strategic control. Real-time reporting and multi-chain support have transformed our asset allocation workflow.",
    feedbackOneRole: "Managing Partner, Quantum Capital",
    feedbackTwoQuote:
      "Managing client USDT flows requires both speed and discretion. D4U's privacy-first design and multi-signature security give us the confidence to handle large volume transactions without compromising our clients' confidentiality or our operational security.",
    feedbackTwoRole: "OTC Merchant",
    feedbackThreeQuote:
      "D4U's decentralized infrastructure aligns perfectly with our regulatory approach. The self-custody model means we never touch client funds, while the audit trail provides the transparency our compliance team needs. It's the perfect balance of privacy and accountability.",
    feedbackThreeRole: "Compliance Officer, PayBridge International",
    ctaTitle: "Get Started",
    ctaLineOne: "Trusted by a community of 100,000 users, more than another wallet.",
    ctaLineTwo: "Join D4U, Defense Decentralized Dollar for You.",
    ctaButton: "Get D4U",
    ctaButtonAria: "Get D4U",
    footerTagline: "Defense Decentralized Dollar for U",
    footerProductsTitle: "Products",
    footerDownload: "Download",
    footerSupport: "Support",
    footerResourceTitle: "Resource",
    footerBrandBook: "Brand book",
    footerPrivacyPolicy: "Privacy policy",
    footerTermsOfUse: "Terms of use",
    footerAuditReport: "Audit report",
    footerCopyright: "© 2026 D4U. All rights reserved.",
  },
};

let currentLanguage = localStorage.getItem("d4u-lang") || "zh";
let wordIndex = 0;

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("d4u-lang", language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[language][node.dataset.i18n];
    if (value !== undefined) {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const value = translations[language][node.dataset.i18nAria];
    if (value !== undefined) {
      node.setAttribute("aria-label", value);
    }
  });

  const langToggles = document.querySelectorAll("[data-lang-toggle]");
  langToggles.forEach((toggle) => {
    toggle.textContent = translations[language].langToggle;
  });

  const navToggleButton = document.querySelector("[data-nav-toggle]");
  const header = document.querySelector(".site-header");
  if (navToggleButton && header) {
    const isOpen = header.classList.contains("is-open");
    const menuLabel =
      translations[language][isOpen ? "navMenuClose" : "navMenuOpen"];
    if (menuLabel) {
      navToggleButton.setAttribute("aria-label", menuLabel);
    }
  }

  wordIndex = 0;
  if (leadWord && targetWord) {
    const pairs = wordPairs[language];
    leadWord.textContent = pairs[0][0];
    targetWord.textContent = pairs[0][1];
  }
}

const langToggles = document.querySelectorAll("[data-lang-toggle]");

const leadWord = document.querySelector("#lead-word");
const targetWord = document.querySelector("#target-word");

function swapWords() {
  if (!leadWord || !targetWord) {
    return;
  }

  const pairs = wordPairs[currentLanguage];
  leadWord.classList.add("word-exit");
  targetWord.classList.add("word-exit");

  window.setTimeout(() => {
    wordIndex = (wordIndex + 1) % pairs.length;
    leadWord.textContent = pairs[wordIndex][0];
    targetWord.textContent = pairs[wordIndex][1];
    leadWord.classList.remove("word-exit");
    targetWord.classList.remove("word-exit");
  }, 240);
}

if (leadWord && targetWord) {
  window.setInterval(swapWords, 2200);
}

applyLanguage(currentLanguage);

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

function initScrollMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-motion], .motion-up, .motion-down, .motion-scale").forEach((el) => {
      el.classList.add("is-inview");
    });
    return;
  }

  function revealElement(node) {
    if (!node || node.classList.contains("is-inview")) {
      return;
    }
    node.classList.add("is-inview");
  }

  const motionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          motionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px 5% 0px" },
  );

  function observeNode(node) {
    if (!node || node.dataset.motionBound === "true") {
      return;
    }

    node.dataset.motionBound = "true";
    motionObserver.observe(node);

    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
    if (inView) {
      window.requestAnimationFrame(() => revealElement(node));
    }
  }

  function revealNodes(nodes, motionClass, staggerMs = 90) {
    nodes.forEach((node, index) => {
      if (node.classList.contains("motion-ready")) {
        return;
      }

      node.classList.add("motion-ready", motionClass);
      node.style.setProperty("--motion-delay", `${index * staggerMs}ms`);
      observeNode(node);
    });
  }

  document.querySelectorAll(".site-shell > section:not(.hero)").forEach((section) => {
    const connector = document.createElement("div");
    connector.className = "section-connector motion-scale";
    connector.setAttribute("aria-hidden", "true");
    section.before(connector);
    observeNode(connector);
  });

  const footer = document.querySelector(".site-footer");
  if (footer) {
    const footerConnector = document.createElement("div");
    footerConnector.className = "section-connector motion-scale";
    footerConnector.setAttribute("aria-hidden", "true");
    footer.before(footerConnector);
    observeNode(footerConnector);
    revealNodes([footer.querySelector(".footer-inner"), footer.querySelector(".footer-bottom")].filter(Boolean), "motion-up", 120);
  }

  revealNodes(
    document.querySelectorAll(
      [
        ".stats-section > h2",
        ".demo-section > h2",
        ".ecosystem-section > h2",
        ".investors-section > h2",
        ".engine-inner > h2",
        ".privacy-inner > h2",
        ".feedback-inner > h2",
        ".compare-heading",
        ".hero-badge",
        ".hero-subtitle",
        ".hero h1",
        ".trust-copy > h2",
        ".trust-subtitle",
      ].join(","),
    ),
    "motion-down",
    80,
  );

  document
    .querySelectorAll(
      ".stats-grid, .demo-grid, .engine-card-grid, .ecosystem-grid, .privacy-grid, .feedback-grid, .trust-list",
    )
    .forEach((grid) => {
      revealNodes(Array.from(grid.children), "motion-up", 100);
    });

  revealNodes(
    document.querySelectorAll(
      [
        ".intro-visual",
        ".intro-copy",
        ".features-section",
        ".compare-table-wrap",
        ".trust-visual",
        ".investors-bar",
        ".cta-inner",
        ".wallet-preview",
        ".engine-group-title",
      ].join(","),
    ),
    "motion-up",
    120,
  );

  const hero = document.querySelector(".hero");
  if (hero) {
    const heroItems = hero.querySelectorAll(
      ".hero-badge, .hero h1, .hero-subtitle, .hero-actions, .hero-panel",
    );
    heroItems.forEach((item, index) => {
      item.classList.add("motion-ready", index % 2 === 0 ? "motion-down" : "motion-up");
      item.style.setProperty("--motion-delay", `${index * 110}ms`);
    });

    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        heroItems.forEach((item) => revealElement(item));
      }, 120);
    });
  }

  window.addEventListener(
    "scroll",
    () => {
      document.querySelectorAll(".motion-ready:not(.is-inview)").forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          revealElement(node);
        }
      });
    },
    { passive: true },
  );
}

initScrollMotion();

const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("#site-nav");
const navBackdrop = document.querySelector("[data-nav-backdrop]");

if (siteHeader) {
  window.addEventListener(
    "scroll",
    () => {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
    },
    { passive: true },
  );
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
}

function setNavOpen(isOpen) {
  if (!siteHeader || !navToggle) {
    return;
  }

  siteHeader.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  if (navBackdrop) {
    navBackdrop.setAttribute("aria-hidden", String(!isOpen));
  }
  const menuLabel =
    translations[currentLanguage][isOpen ? "navMenuClose" : "navMenuOpen"];
  if (menuLabel) {
    navToggle.setAttribute("aria-label", menuLabel);
  }
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setNavOpen(!siteHeader.classList.contains("is-open"));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setNavOpen(false);
    });
  });

  if (navBackdrop) {
    navBackdrop.addEventListener("click", () => {
      setNavOpen(false);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      setNavOpen(false);
    }
  });
}

langToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "zh" ? "en" : "zh");
    setNavOpen(false);
  });
});

const navSections = [
  { id: "intro-title", href: "#intro-title" },
  { id: "stats-title", href: "#stats-title" },
  { id: "demo-title", href: "#demo-title" },
  { id: "features-title", href: "#features-title" },
];

function initNavSpy() {
  if (!siteNav) {
    return;
  }

  const navLinks = Array.from(siteNav.querySelectorAll('a[href^="#"]')).filter(
    (link) => !link.classList.contains("site-nav-cta"),
  );
  const sections = navSections
    .map(({ id }) => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length || !navLinks.length) {
    return;
  }

  function updateActiveNav() {
    const offset = (siteHeader?.offsetHeight ?? 80) + 48;
    let activeId = sections[0].id;

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top - offset <= 0) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
    });
  }

  updateActiveNav();
  window.addEventListener("scroll", updateActiveNav, { passive: true });
}

initNavSpy();
