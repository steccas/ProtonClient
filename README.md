<p align="center">
    <a href="https://go.getproton.me/SHJN?file_id=968" target="_blank"><img src="https://media.go2speed.org/brand/files/proton/26/PM-728x90.png" width="728" height="90" border="0" /></a><img src="https://go.getproton.me/aff_i?offer_id=26&file_id=968&aff_id=2299&url_id=267&tiny_url=1" width="0" height="0" style="position:absolute;visibility:hidden;" border="0" />
</p>

# ProtonClient
An unofficial desktop client for ProtonMail done with electron nativefier.
I just did it because I didn't want to open the browser every time I wanted to check my protonmail, I don't like to use Proton Bridge which is buggy, and I prefer to access protonmail without an intermediary software while keeping desktop notifications and a dedicated app.

Go [here](https://go.getproton.me/SHJN) for further information about ProtonMail.

![GitHub repo size](https://img.shields.io/github/repo-size/Steccas/ProtonClient?style=plastic) ![GitHub language count](https://img.shields.io/github/languages/count/Steccas/ProtonClient?style=plastic) ![GitHub top language](https://img.shields.io/github/languages/top/Steccas/ProtonClient?style=plastic) ![GitHub last commit](https://img.shields.io/github/last-commit/Steccas/ProtonClient?color=red&style=plastic)

## Community and support
It is a very newborn and basic project, but it can grow and get way better, if you want to help please leave a star 🌟 and share it with your friends.
You can also start contributing now! If you wish to do so please feel free to fork the project and propose modifications that we can merge.
The more we are the better!

You can also consider a donation and remember to check [my links](https://linktr.ee/steccas).

A coffee is always a gesture of LOVE ❤️

<a href="https://www.buymeacoffee.com/steccas" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## About the app
The app is currently released for Windows, Linux, and Mac 64bit.
Unfortunately, I can't test the Mac version, so feel free to notify any problems.

The app will remain opened in the system tray and will prompt a notification when you will receive a new mail.

From the app you will be able to use Proton Calendar and Proton Contacts.

Most notably, the account login is persistent between app restart, including OS reboots. Of course, if you don't log off before closing it.

The client, unlike when using the bridge and so SMTP client, will not work with the mail locally; this means that it is like using Proton Mail from the browser.

![screenshot-Linux](https://github.com/Steccas/ProtonClient/blob/main/screens/screenshot-linux.jpg)

## About ProtonMail
What is ProtonMail?

ProtonMail is the first service that introduced email encryption to the public, it is a project born directly from CERN members that wanted to allow people like dissidents, journalists, independent reporter, or anyone subject to censorship to have access to a secure email service, potentially protecting democracy. ProtonMail has evolved then and has become one of the best e-mail providers for anyone, like me, that pays attention to his privacy and enjoys end-to-end encryption in his communications.

ProtonMail  uses  end-to-end  encryption  and  zero-access encryption to protect user data. If a server only contains encrypted messages, users  have  a  much  higher  level  of  security  in  the  event  of  a  data  breach.  The  use  of  encryption  also  prevents  ProtonMail  from  being  able  to  decrypt,  read,  or  share  user  emails with third parties. ProtonMail  does  not  receive  funding  through  advertising,  so  we  have  no  incentive  to  spy on users or build detailed user profiles. ProtonMail’s security extends beyond just strong encryption and includes features designed to mitigate human vulnerabilities, such as two-factor authentication and anti-phishing safeguards.

Furthermore, the Swiss Laws protects your data from anyone who will want to access your data, including governments, it just prohibits them to do so.

Most importantly, they don't use ads, so they aren't selling your data. They simply make money with their convenient paid plans, don't worry there is also a free plan for starters.

Recently they created a VPN service (ProtonVPN) which may be even more when useful paired with a secure mail provider.

Anyways if you need further information or need to subscribe (in fact you need to subscribe to use this client lol) go [here](https://go.getproton.me/SHJN).

## Security notice about this client
You can verify via the building process and source that I am using the legit ProtonMail link,
regarding any other security concern ProtonMail is one of the most trusted and secure mail providers;
furthermore, this client is just like having ProtonMail in a Chrome window. This means that you are not going to store any mail on your PC.
Like in browser, you're going to storage your login cookies anyways that's why I always recommend encrypting your disk because every software will leave some traces!
Unlike many others unofficial clients, it doesn't ask for your 2FA secrets which shouldn't be never gave away.

## Install
Please head to the [release section](https://github.com/Steccas/ProtonClient/releases) to find ready to use installers for Windows, Linux distros and Mac.

## Build
To build this client you need to set up and install [Node.js] and [Nativefier]. Once Node.js is installed, simply run the `npm install` command in the repository's root folder to install Nativefier. Once that's done, you will be able to run the build scripts below.

You can build it from Windows, Linux, or Mac, but you will need wine or Windows to build it for Windows. Please refer to Nativefier's documentation for more information.

[Node.js]: https://nodejs.org/
[Nativefier]: https://www.npmjs.com/package/nativefier

### Windows
When everything has been set up, run from PowerShell:
```
node .\proton_client_win.js
```
Once it finishes, you will have a build folder ready to use.

You can also build for Linux or Mac using:
```
node .\proton_client_linux.js
```
or
```
node .\proton_client_mac.js
```

### Linux
I created a small bash script for Linux to make the build faster.
Just run [build.sh](build.sh) from your shell with one of these arguments:
```
--win
```
To build for Windows
```
--linux
```
To build for Linux
```
--mac
```
To build for Mac
```
--all
```
To build for all the platforms.

### Mac
I don't own a Mac but using node via terminal you should be able to build exactly like in Windows or Linux.

## License
[MIT](LICENSE)

![Visits Badge](https://badges.pufler.dev/visits/Steccas/ProtonClient)
