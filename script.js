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

// Check Chrome
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
    alert('Please be aware this site only officially supports Chrome on Desktop.\nFor best performance and reliability please use this site via Chrome.');
}
