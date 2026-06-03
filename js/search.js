const announcements = [
    {
        title: "Initial Multimedia Announcement",
        date: "2026-06-03",
        path: "x7r2p9.html",
        preview: "This announcement contains the processed video segments of the initial briefing."
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
