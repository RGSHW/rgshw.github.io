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
function toggleFullScreen(event) {
    var element = document.body;

    if (event instanceof HTMLElement) {
        element = event;
    }

    var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

    element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () {
        return false;
    };
    document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () {
        return false;
    };

    if (isFullscreen) {
        document.cancelFullScreen();
    } else {
        element.requestFullScreen();
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
