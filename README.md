<p align="center">
    <a href="https://go.getproton.me/SHJN?file_id=968" target="_blank"><img src="https://media.go2speed.org/brand/files/proton/26/PM-728x90.png" width="728" height="90" border="0" /></a><img src="https://go.getproton.me/aff_i?offer_id=26&file_id=968&aff_id=2299&url_id=267&tiny_url=1" width="0" height="0" style="position:absolute;visibility:hidden;" border="0" />
</p>

# ProtonClient
An unofficial desktop client for ProtonMail done with electron nativefier.
I just did it because I didn't want to open the browser every time I wanted to check my protonmail, I don't like to use Proton Bridge which is buggy and I prefer to access protonmail without intermediary software while keeping desktop notifications and a dedicated app.

![Visits Badge](https://badges.pufler.dev/visits/Steccas/ProtonClient) ![Created Badge](https://badges.pufler.dev/created/Steccas/ProtonClient) ![Updated Badge](https://badges.pufler.dev/updated/Steccas/ProtonClient) ![GitHub repo size](https://img.shields.io/github/repo-size/Steccas/ProtonClient?style=plastic) ![GitHub language count](https://img.shields.io/github/languages/count/Steccas/ProtonClient?style=plastic) ![GitHub top language](https://img.shields.io/github/languages/top/Steccas/ProtonClient?style=plastic) ![GitHub last commit](https://img.shields.io/github/last-commit/Steccas/ProtonClient?color=red&style=plastic)

## About the app
The app is currently released for Windows, Linux and Mac 64bit.
Unfortunately I can't test the Mac version, so feel free to notify any problems.
Deb and rpm packages are upcoming.

The app will remain opened in the system tray and will prompt a nofication when you will receive a new mail.

From the app you will be able to use ProtonCalendar and ProtonContacts.

Most notably, the account login is persistent between app restart, including OS reboots. Of course if you don't log off before closing it.

The client, unlike when using the bridge and so SMTP client, will not work with the mail locally; this means that it is like using Proton Mail from the browser.

## About protonmail
What is ProtonMail?

ProtonMail is the first service that introduced email encryption to the general public, it is a project born directly from CERN members that wanted to allow people like dissidents, journalists, indipendent reporter or anyone subject to censorship to have access to a secure email service, potentially protecting democracy. Protonmail has evolved then and has become one of the best e-mail providers for anyone, like me, that pays attention to his privacy and enjoys end-to-end encryption in his communications.

ProtonMail  uses  end-to-end  encryption  and  zero-access encryption to protect user data. If a server only contains encrypted messages, users  have  a  much  higher  level  of  security  in  the  event  of  a  data  breach.  The  use  of  encryption  also  prevents  ProtonMail  from  being  able  to  decrypt,  read,  or  share  user  emails with third parties.ProtonMail  does  not  receive  funding  through  advertising,  so  we  have  no  incentive  to  spy on users or build detailed user profiles. ProtonMail’s security extends beyond just strong encryption and also includes features designed to mitigate human vulnerabilities, such as two-factor authentication and anti-phishing safeguards.

Furhermore the Swiss Laws protects your data from anyone who will want to access your data, including governments, it just proibits them to do so.

Most importantly, they don't use ads, so they aren't selling your data. They simply make money with their convenient paid plans, don't worry there is also a free plan for starters.

Recently they creadet a VPN service (ProtonVPN) wich may be even more when useful paired with a secure mail provider.

Anyways if you need further informations or you just need to subscribe (in fact you need to subscribe to use this client lol) go [here](https://go.getproton.me/SHJN).

## Security notice about this client
You can verify via the building process and source that I am using the legit protonmail link,
regarding any other security concern protonmail is one of the most trusted and secure mail providers;
furthermore this client is just like having ProtonMail in a Chrome window. This means that you are not going to store any data on your PC.

## Build
To build this client you need to setup and install node and nativefier.
Please refer to [nativefier documentation](https://www.npmjs.com/package/nativefier) for further informations.

You can build it from Windows, Linux or Mac. But you will need wine or Windows to build it for Windows.

### Windows
When everything is setup run from powershell:
```
node .\proton_client_win.js
```
and then you will have the build folder ready to use.

You can also build for linux or mac using:
```
node .\proton_client_linux.js
```
or
```
node .\proton_client_mac.js
```

### Linux
For Linux I created a small bash script to make the build faster.
jsut run [build.sh](build.sh) from your shell giving as an argument:
```
--win
```
To buld for Windows
```
--linux
```
To buld for linux
```
--mac
```
To buld for Mac
```
--all
```
To build for all the platform.

### Mac
I don't own a Mac, but using node via terminal you should be able tu build exactly like in Windows or Linux.

## License
[MIT](LICENSE)
