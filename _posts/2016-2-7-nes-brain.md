---
thumb: "/assets/nesbrain.jpg"
title: Java NESBrain
layout: post
---


A fork of the BJNE Java NES Emulator that includes a Neural Network learning algorithm based on SethBling's MarI/O Lua script to enable the emulator to learn how to play itself. (Eclipse .project file already included, but you can use any IDE)

![Sample NES]({{ site.url }}/assets/nesbrain.jpg)

At this time, the only supported ROMs are 'Super Mario Bros' and 'Galaga' for the NES. Support for different ROMs can be added by altering the GameDataManager class and telling it which memory addresses to suck the 'tile map' inputs from.
