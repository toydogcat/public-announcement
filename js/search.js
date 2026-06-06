const announcements = [
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
    }
];

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

function displayResults(filter = '') {
    resultsDiv.innerHTML = '';
    const filtered = announcements.filter(a => 
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
