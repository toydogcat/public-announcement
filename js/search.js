const announcements = [
    {
        title: "熱門 AI 與學術技職證照全指南 - 升學與就業規劃",
        date: "2026-06-24",
        path: "announcements/h3f9k2w1.html",
        preview: "深度解析在學期間（國中升高中、高中升大學）與就業階段之熱門 AI、雲端及學術技職證照，包含 2026 年 AWS 新制驗證與專屬定向分析匹配小工具。"
    },
    {
        title: "Vibe Coding 實戰技巧",
        date: "2026-06-17",
        path: "announcements/v3k8r9p2.html",
        preview: "分享高效的 Vibe Coding 技巧與開源工具（如 rtk Token 優化工具、ponytail 極簡思考法），助你最大化釋放 AI 輔助開發效能。"
    },
    {
        title: "經典老音樂推薦",
        date: "2026-06-17",
        path: "announcements/r7k3w9q2.html",
        preview: "收錄滿滿回憶的經典音樂，包含大合集（8090後金曲、經典華語佳作）以及精選翻唱單曲（Let Her Go、魔法騎士主題曲）。"
    },
    {
        title: "經典港產老電影推薦",
        date: "2026-06-17",
        path: "announcements/m9p2w8q4.html",
        preview: "收錄極具情懷的經典香港老電影，包含《猛鬼撞鬼》、《五福星撞鬼》等搞笑幽默與恐怖喜劇片。"
    },
    {
        title: "Luna AI Hub 智慧服務門戶正式上線",
        date: "2026-06-13",
        path: "announcements/l8a2i9h3.html",
        preview: "Luna AI 官方入口網站，整合了強大的 AI 對話、個人助手與多項智慧化核心服務，採用 PWA 規範設計，提供極速流暢體驗。"
    },
    {
        title: "娛樂資訊中心 - 電台與漫畫探索",
        date: "2026-06-06",
        path: "announcements/w2k9r4p1.html",
        preview: "整合全球廣播電台與熱門漫畫資源（如漫畫櫃），提供豐富的多元視聽與休閒娛樂選擇。"
    },
    {
        title: "24GB 顯卡本地 AI Agent 模型挑選指南",
        date: "2026-06-06",
        path: "announcements/a7k2w1m9.html",
        preview: "如何在有限的 24GB VRAM 硬體下，挑選最穩定的本地 AI 模型？深度解析 Qwen、Llama 與 Gemma 的實戰差異。"
    },
    {
        title: "網路安全防護指南 - 專業教學",
        date: "2026-06-06",
        path: "announcements/r4e2w9q1.html",
        preview: "進階安全教學：整合 VirusTotal/urlscan.io 偵測工具，並實作 Cloudflare 1.1.1.2 安全 DNS 主動防禦配置。"
    },
    {
        title: "Initial Multimedia Announcement",
        date: "2026-06-03",
        path: "announcements/scfz8mg3.html",
        preview: "This announcement contains the processed video segments of the initial briefing."
    },
    {
        title: "馬祖資訊專頁 - 被遺忘的海上軍事王國",
        date: "2026-06-04",
        path: "announcements/ci55za4g.html",
        preview: "馬祖 = 戰地遺跡 + 閩東文化 + 海蝕地景 + 藍眼淚。深入了解這座海上軍事王國。"
    },
    {
        title: "重要資訊彙整 - 載具與生活資訊",
        date: "2026-06-06",
        path: "announcements/x7q8b3k2.html",
        preview: "整合個人常用之電子發票手機條碼載具、石牌站公車轉乘資訊及其他日常生活重要連結。"
    },
    {
        title: "英文學習資源",
        date: "2026-06-06",
        path: "announcements/e9r2p1k5.html",
        preview: "精選 YouTube 英文學習頻道資源，涵蓋口說、聽力與日常對話練習。"
    },
    {
        title: "資產資訊中心",
        date: "2026-06-06",
        path: "announcements/a3f9k8v1.html",
        preview: "整合股市（大盤、台積電、0050/0056）及黃金、白銀、比特幣等資產行情導引。"
    },
    {
        title: "遠端分享控制中心",
        date: "2026-06-06",
        path: "announcements/r9t3k4m2.html",
        preview: "快速存取 Google 遠端桌面，實現安全且跨平台的螢幕分享與遠端存取控制。"
    },
    {
        title: "考古題快速查閱系統",
        date: "2026-06-11",
        path: "announcements/k7v4p2m9.html",
        preview: "專為考生設計的極速考古題查閱工具，優化閱讀體驗並提升複習效率。"
    },
    {
        title: "本地資訊",
        date: "2026-06-06",
        path: "announcements/v8n2m7p1.html",
        preview: "存取內網環境下的本地服務，包含金星閱讀等數位資源入口。"
    },
    {
        title: "行銷方法論 - 流量與成交的藝術",
        date: "2026-06-10",
        path: "announcements/m2k9r4p1.html",
        preview: "深度解析網路行銷核心：如何利用短影音、SEO 及私域流量實現「低粉高爆」與高效成交。"
    }
];

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

function displayResults(filter = '') {
    resultsDiv.innerHTML = '';
    
    // Sort announcements by date (descending - newest first)
    const sortedAnnouncements = [...announcements].sort((a, b) => new Date(b.date) - new Date(a.date));

    const filtered = sortedAnnouncements.filter(a => 
        a.title.toLowerCase().includes(filter.toLowerCase()) || 
        a.preview.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = '<p style="text-align: center; opacity: 0.5;">No announcements found.</p>';
        return;
    }

    filtered.forEach(a => {
        const link = document.createElement('a');
        link.href = a.path;
        link.className = 'announcement-link';
        link.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0;">${a.title}</h3>
                <span style="font-size: 0.8rem; opacity: 0.5;">${a.date}</span>
            </div>
            <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.7;">${a.preview}</p>
        `;
        resultsDiv.appendChild(link);
    });
}

searchInput.addEventListener('input', (e) => {
    displayResults(e.target.value);
});

// Initial display
displayResults();
