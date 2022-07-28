
function getUrls(level, isCommunity) {

    function buildCalUrl(cal, level){
        return `https://api.logro.io/widget/appointment/service/${cal}${level}?group=codex-evals`;
    }

    if(isCommunity) return {
        evalCalUrl: buildCalUrl("community-mastery", level),
        capstoneCalUrl: buildCalUrl("community-capstone", level)
    }
    
    return {
        evalCalUrl: buildCalUrl("badge-level-", level),
        capstoneCalUrl: buildCalUrl("capstone", level)
    };
}

function loadContact(keyValStore) {
    var udJson = keyValStore.getItem("_ud");
    var contact =JSON.parse(udJson) || {};

    if(contact.currently_studying_level===undefined){
        console.log("No current level found");
        return {};
    }

    return {
        ...contact,
        ...getUrls(contact.currently_studying_level)
    }
}
