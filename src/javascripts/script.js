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
    if (token) {
        api.apiClient.authentications.api_key.apiKey = token;
    }
    api.apiClient.basePath = location.origin + '/v1';
    return api;
}

function int2star(level) {
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

function epoch2str(unix) {
    return DateFormat(new Date(unix), 'yyyy年mm月dd日 HH時MM分ss秒');
}

function str2epoch(str) {
    return new Date(str).getTime() / 1000.0;
}

window.loadHomeQuestToken = loadHomeQuestToken;
window.saveHomeQuestToken = saveHomeQuestToken;

window.redirect = redirect;

window.int2star = int2star;
window.epoch2str = epoch2str;
window.str2epoch = str2epoch;

window.HomeQuest_API = HomeQuest_API;

