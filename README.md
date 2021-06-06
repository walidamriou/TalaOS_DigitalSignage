# TalaOS Digital Signage
TalaOS Core For Digital Signage

### Project folders
* __/core__ The heart of TalaOS for Digital Signage
* __/config__ Contain the confige file and The data (images, video ..) that you want to display
* __/console__ Contain sourcecode of "TalaOS Digital Signage Console" server

### Version 
* 1.0.0
  * support Raspberry pi boards only.
  * Support config Digital Signage from SD card in Raspberry pi.
  * Support Images content only.
  * "TalaOS Digital Signage Console"  to upload and config the images from other devices. 
  * Documentation to help use it.
  
### Development 
#### Raspberry pi
1- download and flash raspbian lite   
2- use raspi-config to enable ssh  
3- use ssh from your host computer to control your target raspberry pi   
4- Update:  
```bash 
sudo apt-get update
sudo apt-get upgrade
```
5- Usually the graphical environment for GNU/Linux consists of four parts: X server (usually X.Org) , Window manager (Openbox, XFWM, …) , Desktop environment (PIXEL, LXDE, MATE, …), and Login manager (for example LightDM). However, we only want to run a single application build by ElectronJS in full screen, so __we don’t need a desktop environment__. And we already have autologin enabled because no other users will ever use the Pi), so __we don’t need a login manager__ either. The bare minimum we need are X server and window manager. Let’s install just that:  
```bash 
sudo apt-get install --no-install-recommends xserver-xorg x11-xserver-utils xinit openbox
```
6- We need to install Chromium because it has files that electronJS application will use it:  
```bash 
sudo apt-get install --no-install-recommends chromium-browser
```
7- we need to configure Openbox   
```bash 
sudo nano /etc/xdg/openbox/autostart 
```
and put inside it: 
```bash 
# Disable any form of screen saver / screen blanking / power management
xset s off
xset s noblank
xset -dpms

# Allow quitting the X server with CTRL-ATL-Backspace
setxkbmap -option terminate:ctrl_alt_bksp

# Start ElectronJS in kiosk mode
cd TalaOS_DigitalSignage/core
npm start
```
8- Start X automatically on boot and the -nocursor option tells X to not display any mouse cursor at all
```bash
[[ -z $DISPLAY && $XDG_VTNR -eq 1 ]] && startx -- -nocursor
```
9- Install NodeJs:
```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install -y nodejs
node -v
```
10- Install ElectronJS
```bash
sudo npm install -g electron --unsafe-perm=true --allow-root
```
11- Clone TalaOS_DigitalSignage to home
```bash
git clone https://github.com/walidamriou/TalaOS_DigitalSignage.git
```
12- reboot the board

### Website
https://talaos.walidamriou.com

### Copyright CC 2020 Walid Amriou

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

__You are free to:__
- __Share__ copy and redistribute the material in any medium or format

__Under the following terms:__
- __Attribution__ You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

- __NonCommercial__ You may not use the material for commercial purposes.

- __NoDerivatives__ If you remix, transform, or build upon the material, you may not distribute the modified material.

- __No additional restrictions__ You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.


the software or Code or Scripts or any files in this source is provided "as is" and the author disclaims all warranties with regard to this files including all implied warranties of merchantability and fitness. in no event shall the author be liable for any special, direct, indirect, or consequential damages or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use or performance of this software or code or scripts or any files in this source.

© The logo and the name of the project are owned by __Walid Amriou__, and do not fall under the open license for reconstruction, it must be preserved in full without modification. 
