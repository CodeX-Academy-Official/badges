
function getUrls(contact) {

    console.log(contact);
    return {
        evalCalUrl: `https://api.logro.io/widget/appointment/service/badge-level-${contact.currentLevelStudying}?group=codex-evals`
    }
}

function loadContact(keyValStore) {
    var udJson = keyValStore.getItem("_ud");
    var contact =JSON.parse(udJson) || {};

    if(contact.currentLevelStudying===undefined){
        console.log("No current level found");
        return {};
    }

    return {
        ...contact,
        ...getUrls(contact)
    }
}
