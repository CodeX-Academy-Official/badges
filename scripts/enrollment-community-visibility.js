function showHideElements(keyValStore){
    var udJson = keyValStore.getItem("_ud");
    var contact =JSON.parse(udJson) || {};
    const type = contact.student_type;
    function isEnrolled(c){
        return c.student_type==="Standard" ||
        c.enrollment_type==="Part-Time" || 
        c.enrollment_type==="Full-time" ||
        c.enrollment_type==="Unlimited";
    }

    function showElements(elementClass, show, hideParent){
        var toHide = document.querySelectorAll(elementClass); 
        toHide.forEach(e => {
        let element = e;
        if(hideParent){
            element = e.parentNode;
        }
        element.style.display = show ? "block" : "none"
        });
    }

    showElements(".enrolled", false);

    if(isEnrolled(contact)) {
        showElements(".enrolled", true);
        showElements(".community", false);
    }
}
showHideElements(localStorage);