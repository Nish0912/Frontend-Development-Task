function showContent(idName) {
    var sectionCount;
    var elementArray = document.querySelectorAll(".main-2");
    console.log(elementArray);
    
    for (var i = 1; i <= elementArray.length; i++) {
        var optElement = document.getElementById(`opt-${i}`);
        var sectionOptElement = document.querySelector(`.section-opt-${i}`);
        var pairElement = document.getElementById(`pair-${i}`);

        if (optElement.classList) {
            optElement.classList.remove("showContent");
        }
        if (sectionOptElement.classList) {
            sectionOptElement.classList.remove("changeSectionStyle");
        }
        pairElement.removeAttribute("checked");
        
        if (idName.includes(i)) {
            sectionCount = i;
        }
    }
    
    var targetElement = document.getElementById(idName);
    var targetSectionOptElement = document.querySelector(`.section-opt-${sectionCount}`);
    var targetPairElement = document.getElementById(`pair-${sectionCount}`);
    
    if (targetElement.classList) {
        targetElement.classList.add("showContent");
    }
    if (targetSectionOptElement.classList) {
        targetSectionOptElement.classList.add("changeSectionStyle");
    }
    targetPairElement.checked = true;
}
  