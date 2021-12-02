# Changelog
- security patches
- updated dependencies

If you prefer there are also some build archives, which you can unpack and run where you prefer.

PLEASE NOTE:
If you want to use the client you need to create a protonMail account [here](https://go.getproton.me/SHJN).

# Install Instructions
## Windows
Uninstall previous version and install via the provided msi.

## Ubuntu & Debian based Linux distros
Better remove previous version for cleaner install
```
sudo apt remove proton-client
```
Install the deb package using
```
sudo apt install ./proton-client-1.2.3-amd64.deb
```
or
```
sudo dpkg -i ./proton-client-1.2.3-amd64.deb
```
## RHEL based distros
RPM is not tested because I converted it using alien, so please notify me if there are any problems.

Install using:
```
sudo rpm –i proton-client-1.2.3-2.x86_64.rpm
```

To uninstall:
```
sudo rpm –e proton-client-1.2.3-2.x86_64.rpm
```

## Arch based distros like Manjaro
Download **proton-client-1.2.3-1-x86_64.arch.zip**
```
unzip proton-client-1.2.3-1-x86_64.arch.zip
sudo pacman -U ./proton-client-1.2.3-1-x86_64.pkg.tar.zst
```

I have no time nor patience to publish the package to AUR so any help is welcome.

## Mac
Use one of the archives for Mac (proton-client-1.2.3-mac-x86_64.zip); inside, you will find an app bundle ready to be moved when makes sense to you (probably the app folder) and being run.