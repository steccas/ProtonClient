#!/bin/bash

version=$(jq -r .version ../../package.json)

echo "Creating Debian package for version $version"

# Build .deb package
chmod -R 755 ./proton-client
dpkg-deb --build proton-client
mv proton-client.deb proton-client-$version-amd64.deb

echo "Successfully created: proton-client-$version-amd64.deb"
echo ""
echo "Note: For other distro formats (RPM, Arch), use native packaging tools:"
echo "  - RPM: Use rpmbuild with a .spec file"
echo "  - Arch: Use makepkg with a PKGBUILD"
echo "  - AppImage: Use appimagetool"

exit 0