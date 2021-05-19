#!/bin/bash

chmod -R 755 ./proton-client
dpkg-deb --build proton-client
mv proton-client.deb proton-client-1.2.0-amd64.deb
sudo debtap -u
debtap ./proton-client-1.2.0-amd64.deb
sudo alien -r ./proton-client-1.2.0-amd64.deb --scripts
zip -rv proton-client-1.2.0-1-x86_64.arch.zip .INSTALL .MTREE .PKGINFO proton-client-1.2.0-1-x86_64.pkg.tar.zst

exit 0