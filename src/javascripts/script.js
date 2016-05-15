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
    var milliseconds = unix * 1000;
    var date = new Date(milliseconds);
    var day_of_the_week = ['月', '火', '水', '木', '金', '土', '日'];
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var hour = ("0" + date.getHours()).slice(-2);
    var minute = ("0" + date.getMinutes()).slice(-2);
    var second = ("0" + date.getSeconds()).slice(-2);
    var week_day = day_of_the_week[date.getDay()];
    return month + "月" + day + "日（" + week_day + "） " + hour + "時" + minute + "分" + second + "秒";
}

window.loadHomeQuestToken = loadHomeQuestToken;
window.saveHomeQuestToken = saveHomeQuestToken;

window.redirect = redirect;

window.int2star = int2star;
window.epoch2str = epoch2str;

window.HomeQuest_API = HomeQuest_API;

