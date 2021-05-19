#!/bin/bash

chmod -R 755 ./proton-client
dpkg-deb --build proton-client
mv proton-client.deb proton-client-1.2.0-amd64.deb

exit 0