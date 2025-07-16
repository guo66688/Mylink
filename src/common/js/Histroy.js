const showHistory = (category, historyId) => {
    return localStorage.getItem(`${category}-${historyId}`);
}

const loadHistory = (category) => {
    const historyItems = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(`${category}-`)) {
            historyItems.push(key.substring(category.length + 1));
        }
    }
    return historyItems;
}

// 暴露方法供外部使用
export {
    showHistory,
    loadHistory
};
    