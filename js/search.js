const announcements = [
    {
        title: "全球廣播電台目錄 - 跨越國界的聲音探索",
        date: "2026-06-06",
        path: "announcements/w2k9r4p1.html",
        preview: "收錄全球各國廣播電台資源，是您了解國際新聞、學習語言或欣賞異國音樂的絕佳入口。"
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
        title: "電子發票手機條碼載具",
        date: "2026-06-06",
        path: "announcements/x7q8b3k2.html",
        preview: "收錄個人常用之電子發票手機條碼載具資訊，省去攜帶或開啟實體條碼的繁瑣步驟。"
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
