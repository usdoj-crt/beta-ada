function getCookieValue(name) {
    const match = document.cookie.match('(^|;) *' + name + '=([^;]*)');
    if (match) {
        return match[2]
    }
    return false;
}

export default function communityOutreach() {
    if (document.referrer.includes('/redirects/communityoutreach/')) {
        document.cookie = 'communityoutreach=true';
    }
    window.addEventListener('DOMContentLoaded', function() {
        const outreachCampaignUser = getCookieValue('communityoutreach');
        if (window.location.pathname == '/file-a-complaint/' && outreachCampaignUser) {
            const faCLink = document.querySelector('.civil-rights-complaint');
            faCLink.setAttribute('href', 'https://civilrights.justice.gov/report?utm_campaign=61607827-e620-4e59-8850-b946d32c69ab');
        }
    });
}