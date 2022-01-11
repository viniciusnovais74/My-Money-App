export function selectTab(tabID) {
    console.log(tabID)
    return {
        type: 'TAB_SELECTED',
        payload: tabID
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}