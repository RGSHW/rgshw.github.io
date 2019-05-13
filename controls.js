function showHelp(repo) {
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.width = "95%";
    modal.style.maxWidth = "95%";
    modal.style.height = "90%";
    modal.style.maxHeight = "90%";
    modal.style.top = "5%";
    modal.style.left = "2.5%";
    modal.style.padding = "15px 30px";
    modal.style.boxSizing = "border-box";
    modal.style.zIndex = "99999";
    modal.style.boxShadow = "0 0 60px 30px rgba(0,0,0,0.6)";
    modal.style.background = "rgba(255,255,255,0.97)";
    modal.style.overflowY = "scroll";

    var h1 = document.createElement("h1");
    h1.textContent = "Need help?";
    modal.appendChild(h1);

    var p1 = document.createElement("p");
    p1.innerHTML = "This website/tool is a project created by <a href='https://mattcowley.co.uk'>Matt Cowley</a> intended for use by the <a href='https://rgshw.com'>Royal Grammar School, High Wycombe</a>.";
    modal.appendChild(p1);

    var p2 = document.createElement("p");
    p2.innerHTML = "You can get support for this website if you are having an issue by emailing me directly: <a href='mailto:me@mattcowley.co.uk'>me@mattcowley.co.uk</a>.";
    modal.appendChild(p2);

    var p3 = document.createElement("p");
    var repo = "github.com/rgshw/" + repo;
    p3.innerHTML = "This website is also open source and available on GitHub, you are welcome to make changes and submit pull requests on the repository: <a href='https://" + repo + "'>" + repo + "</a>.";
    modal.appendChild(p3);

    var a = document.createElement("a");
    a.href = "javascript:null;";
    a.textContent = "Close.";
    a.onclick = function () {
        modal.parentElement.removeChild(modal);
    };
    modal.appendChild(a);

    document.body.appendChild(modal);
}

function help(repo) {
    var button = document.createElement("a");
    button.style.position = "fixed";
    button.style.top = "5%";
    button.style.right = "2.5%";
    button.textContent = "?";
    button.style.fontWeight = "900";
    button.style.cursor = "pointer";
    button.style.textDecoration = "none";
    button.style.color = "#000";
    button.onmouseenter = function () {
        button.style.color = "#f45";
    };
    button.onmouseleave = function () {
        button.style.color = "#000";
    };
    button.onclick = function () {
        showHelp(repo);
    };

    document.body.appendChild(button);
}

function home() {
    var button = document.createElement("a");
    button.style.position = "fixed";
    button.style.top = "5%";
    button.style.left = "2.5%";
    button.innerHTML = "&#10140;";
    button.style.fontWeight = "900";
    button.style.cursor = "pointer";
    button.style.textDecoration = "none";
    button.style.color = "#000";
    button.style.transform = "rotate(180deg)";
    button.onmouseenter = function () {
        button.style.color = "#f45";
    };
    button.onmouseleave = function () {
        button.style.color = "#000";
    };
    button.onclick = function () {
        window.location = "https://rgshw.github.io/";
    };

    document.body.appendChild(button);
}

function controls(repo) {
    home();
    help(repo);
}