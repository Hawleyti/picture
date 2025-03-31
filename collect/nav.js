// 计算 GitHub Pages 兼容路径
function getGithubFetchPath(file) {
    let basePath = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');
    return basePath + "/nav/" + file;
}
// 加载导航栏
document.addEventListener("DOMContentLoaded", function() {
    let navPath = "collect/nav.html"; // 直接访问 nav 目录下的 nav.html

    fetch(navPath)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.text();
        })
        .then(text => {
            let navContainer = document.querySelector("#replace_with_navbar");
            if (navContainer) {
                navContainer.innerHTML = text;
            } else {
                console.error("Error: #replace_with_navbar not found!");
            }
        })
        .catch(error => {
            console.error("Error loading nav.html:", error);
        });
});