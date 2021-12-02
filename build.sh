#!/bin/bash

if [ -z "$1" ]
  then
    echo "Please specify destination platform"
    echo "You can choose --win, --linux, --mac, --unix (linux & mac) or --all"
    echo "i.e.: ./build.sh linux"
    exit 1
fi

platform=$1

function buildWin {
    node ./proton_client_win.js
}

function buildLinux {
    node ./proton_client_linux.js
    while true; do
        read -p "Do you wish to create Linux dist packages?" yn
        case $yn in
            [Yy]* ) distLinux | exit 2;;
            [Nn]* ) exit 0;;
            * ) echo "Please answer yes or no.";;
        esac
    done
}

function buildMac {
    node ./proton_client_mac.js
}

function buildUnix {
    buildLinux
    buildMac
}

function buildAll {
    buildWin
    buildLinux
    buildMac
}

function distLinux {
    cd ./dist/linux/
    ./build_dists_linux.sh
}

if [ $platform == --win ]
    then
        echo "Building for Windows"
        buildWin

elif [ $platform == --linux ]
    then
        echo "Building for linux"
        buildLinux

elif [ $platform == --mac ]
    then
        echo "Building for Mac"
        buildMac

elif [ $platform == --unix ]
    then
        echo "Building for Linux & Mac"
        buildUnix

elif [ $platform == --all ]
then
    echo "Building for all platforms"
    buildAll

else
    echo "You didn't specify a valid platform"
    exit 2

fi

exit 0
