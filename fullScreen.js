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

// Full screen toggle
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        alert("You have entered full screen. Click anywhere on the website to exit full screen mode.");
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        alert("You have exited full screen. Click anywhere on the website to enter full screen mode.");
    }
}

// Create full screen elm
var a = document.createElement("a");
a.onclick = toggleFullScreen;
a.style.zIndex = "9999";
a.style.position = "absolute";
a.style.width = "100%";
a.style.height = "100%";
a.style.top = "0px";
a.style.left = "0px";
document.body.insertBefore(a, document.body.firstChild);
alert('Click anywhere on the website to enter full screen mode. Click again to exit.');
