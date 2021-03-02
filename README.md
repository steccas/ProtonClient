# ProtonClient
A small client for ProtonMail done with electron plugins.
I just did it because I didn't want to open the browser anytime I wanted to check my protonmail and I don't like to use Proton Bridge.

# About the app
The app is currently released for Windows10 64bit but I will make a build for Linux and Mac shortly.
It will be present in the system tray and will prompt a nofication when you will receive a new mail.

# Security notice
You can verify via the building process and source that I am using the legit protonmail link,
regarding any other security concern protonmail is one of the most trusted and secure mail providers;
furthermore this client is just like having ProtonMail in a Chrome window.

# Build
To build this client you need to have setup and install nativefier.
Please refer to [nativefier documentation](https://www.npmjs.com/package/nativefier) for further informations.

You can build it from Windows, Linux or Mac. But you will need wine or Windows to build it for Windows.

When everything is setup run from powershell:

```bash
nativefier -n ProtonMail -a x64 --tray --single-instance --internal-urls "(http(s)?:\/\/.)?(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)?(protonmail.com)" -i "C:\Users\lucas\Desktop\icon.ico" beta.protonmail.com
```

# License
You will find a MIT License in the repo.