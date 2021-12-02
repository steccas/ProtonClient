#!/bin/bash

$version = jq .version package.json

echo "Creating packages for version $version"

chmod -R 755 ./proton-client
dpkg-deb --build proton-client
mv proton-client.deb proton-client-$version-amd64.deb
sudo debtap -u
debtap ./proton-client-$version-amd64.deb
sudo alien -r ./proton-client-$version-amd64.deb --scripts
zip -rv proton-client-$version-1-x86_64.arch.zip .INSTALL .MTREE .PKGINFO proton-client-$version-1-x86_64.pkg.tar.zst

exit 0