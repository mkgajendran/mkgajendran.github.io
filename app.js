
document.addEventListener('DOMContentLoaded', function () {
    fetch('jobs-data.json')
        .then(response => response.json())
        .then(data => populateTabs(data))
        .catch(error => console.error('Error loading job data:', error));
});

function populateTabs(tabData) {
    const tabsContainer = document.getElementById('tabs');
    const contentContainer = document.getElementById('content');
    let firstTab = true;

    for (const [tabName, tabContent] of Object.entries(tabData)) {
        const tab = document.createElement('button');
        tab.className = 'tab';
        tab.textContent = tabName;

        tab.onclick = function() {
            const current = document.getElementsByClassName('active');
            if (current.length > 0) {
                current[0].className = current[0].className.replace(' active', '');
            }
            this.className += ' active';
            contentContainer.innerHTML = tabContent;
        };

        tabsContainer.appendChild(tab);

        if (firstTab) {
            tab.click();
            firstTab = false;
        }
    }
}
