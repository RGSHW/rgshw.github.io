/**
 *  rgshw.github.io: The selector site for the projection tools used in the main hall.
 *  <https://github.com/rgshw/rgshw.github.io/>
 *  Copyright (C) 2018 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
 *
 *  This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published
 *   by the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *  This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *  You should have received a copy of the GNU Affero General Public License
 *   along with this program. If not, please see
 *   <https://github.com/rgshw/rgshw.github.io/blob/master/LICENSE> or <http://www.gnu.org/licenses/>.
 **/
/* https://jscompress.com/ */

// Render the modal
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
    modal.style.fontSize = "18px";
    modal.style.color = "#000";
    modal.style.fontFamily = "sans-serif";
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


// Render the modal toggle
function help(repo) {
    var button = document.createElement("a");
    button.style.position = "fixed";
    button.style.top = "5%";
    button.style.right = "2.5%";
    button.style.zIndex = "99998";
    button.textContent = "?";
    button.style.fontWeight = "900";
    button.style.fontSize = "24px";
    button.style.cursor = "pointer";
    button.style.textDecoration = "none";
    button.style.color = "#000";
    button.style.fontFamily = "monospace";
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

// Render the back/home button
function home() {
    var button = document.createElement("a");
    button.style.position = "fixed";
    button.style.top = "5%";
    button.style.left = "2.5%";
    button.style.zIndex = "99998";
    button.innerHTML = "&#10140;";
    button.style.fontWeight = "900";
    button.style.fontSize = "24px";
    button.style.cursor = "pointer";
    button.style.textDecoration = "none";
    button.style.color = "#000";
    button.style.fontFamily = "monospace";
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

// Trigger control rendering
function controls(repo, showHome) {
    if (showHome) home();
    help(repo);
}
