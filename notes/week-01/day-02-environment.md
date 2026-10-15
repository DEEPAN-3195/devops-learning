# Day 2: Development Environment

Day 2 prepares a Linux-based development environment for DevOps practice.

## Tools

- WSL2 runs Linux inside Windows.
- Ubuntu provides the Linux command line.
- Git tracks project history.
- Node.js runs JavaScript applications.
- npm installs Node.js packages.
- NVM manages multiple Node.js versions.
- Node.js LTS is the stable version recommended for learning.

## Useful checks

    wsl --list --verbose
    git --version
    node --version
    npm --version
    nvm --version

## Package manager

    sudo apt update

This refreshes Ubuntu's software list. It does not upgrade installed applications.

## NVM setup

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
    source ~/.bashrc
    nvm install --lts
    nvm use --lts

## Summary

Windows -> WSL2 -> Ubuntu -> Git + Node.js LTS -> Ready for development
