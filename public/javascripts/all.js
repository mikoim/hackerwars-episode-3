function loadHomeQuestToken() {
    "use strict";

    return localStorage.getItem('homequest_token');
}

function saveHomeQuestToken(token) {
    "use strict";

    return localStorage.setItem('homequest_token', token)
}

function redirect(url) {
    location.href = url;
}

function HomeQuest_API(token) {
    var api = new HomeQuest.DefaultApi();
    api.apiClient.authentications.api_key = token;
    return api;
}

window.loadHomeQuestToken = loadHomeQuestToken;
window.saveHomeQuestToken = saveHomeQuestToken;
window.redirect = redirect;
window.HomeQuest_API = HomeQuest_API;

function star(level) {
    var out;
    switch (level) {
        case 1:
            out = "★☆☆☆☆：チョ～かんたん！";
            break;
        case 2:
            out = "★★☆☆☆：かんたん！";
            break;
        case 3:
            out = "★★★☆☆：ふつう";
            break;
        case 4:
            out = "★★★★☆：時間がかかるかも？";
            break;
        case 5:
            out = "★★★★★：めっちゃムズい！";
            break;
        default:
            out = "ERROR!!"
    }

    return out;
}
