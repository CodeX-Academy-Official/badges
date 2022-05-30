//"https://api.logro.io/widget/appointment/service/badge-level-1?group=codex-evals"

function getUrls(contact) {

    return {
        evalCalUrl: "https://api.logro.io/widget/appointment/service/badge-level-1?group=codex-evals"
    }
}

function loadContact(keyValStore) {
    var udJson = keyValStore.getItem("_ud");
    var contact =JSON.parse(udJson) || {};

    return {
        ...contact,
        ...getUrls(contact)
    }
}
