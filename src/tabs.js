const tabs1 = document.querySelector('.tabs-2.tablet-hide.w-tabs');
const tabsMenu = tabs1.querySelectorAll('.tabs-menu-2.w-tab-menu > a');
const tabsContent = tabs1.querySelectorAll('.tab-2-links-w > a');

let checkCurrentTab
const tabsArr = [[0,3], [3,6], [6,9]]
function tabsContentEvents(){
    tabsContent.forEach(link => {
        link.addEventListener("mouseenter", () => {
            removeHoverAll(tabsContent, tabsArr[checkCurrentTab][0], tabsArr[checkCurrentTab][1])
            addHover(link)
        }, false);
    })
}

function addHover(el) {
    el.classList.add('hover')
}
function removeHoverAll(nodeList, start, end) {
    for(let i = start; i < end; i++){
        nodeList[i].classList.remove('hover')
    }
}
function tabsMenuEvents(){
    tabsMenu.forEach((tab, index) => {
        if(tab.classList.contains('w--current')) {
            checkCurrentTab = index
        }
        tab.addEventListener("click", () => {
                checkCurrentTab = index
        }, false);
    })
}

export default function initTabs() {
    tabsMenuEvents()
    tabsContentEvents()
}


