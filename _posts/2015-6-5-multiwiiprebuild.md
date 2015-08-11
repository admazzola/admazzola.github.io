---
thumb: "/assets/multiwiiconfig.jpg"
title: Multiwii PreBuild Guide
layout: post
---

## Part Selection
When building a new multicopter, it is very important that you make sure that you will achieve flight before you purchase the parts.  I highly recommend using [this calculator tool](http://www.ecalc.ch/xcoptercalc.php?ecalc), but I will try to explain some of the important concepts that confused me.

### Propellers
 When choosing propellers, you may see sizes like '5 x 3' or '10 x 4.5'.  The first number is the diameter in inches of the propeller, the second number is the pitch.  The higher the pitch and/or diameter, the greater the thrust.  However, the more thrust, the more current will be drawn.  Overdrawing current from a battery will permanently destroy it (possibly violently) and overloading ESCs will fry them.  Larger propellers are more efficient but less agile since they have more inertia.  DO NOT try to cut down propellers with scissors.  You will ruin their shape and they will not push air downwards.  Furthermore, do not mount propellers upside down.  With a quadrotor, you will need 2 clockwise props and 2 counterclockwise props.

### Motors
 In regards to motors, kV does not stand for 'kilovolt'.  It is actually a ratio of RPMs that will be achieved per volt.  If you are using a 3S (three-cell) battery, the nominal voltage will be about 11 volts.  Therefore, a 1000kV motor will theoretically achieve 11,000 RPM at full throttle.  Keep in mind that attaching a propeller to the motor will reduce RPM due to the mechanical load created.

### ESCs
 Electronic speed controllers determine how much battery juice will be let through to each motor at any given time.  Their 'gate' is ultimately controlled by the pins on your main control board.  When selecting ESCs, your only real option is the current rating.  Make sure that you select ESCs with a high enough current rating to support the amount of energy you need to pump into your motors/props.  These units are usually the first to fail.  Interestingly, ESCs usually have a failsafe programmed into them that kills power to the motor when the battery voltage is detected to be too low.  This is great for saving the life of your battery, but if it happens in midair, your aircraft will become a brick.  That is why you should always have a [battery alarm/sensor](http://www.amazon.com/Integy-C23212-Voltage-Checker-Warning/dp/B003Y6E6IE) plugged into the 'balance connector' on your battery while flying.

### Battery
 The battery will normally be the biggest and heaviest item on your craft.  If cared for properly, they can last hundreds of recharges.  They are normally sold using three units.  Number of cells (2S/3S/4S), capacity (maH) and discharge rate (C).  Each cell will provide about 3.5V, and all of your parts have to be able to withstand that level of voltage.  A higher voltage can deliver more power with less current.  A higher capacity makes for a heavier battery, but with longer flight times.  Finally, a higher discharge rate means you can pump out more instantaneous power without risking damage to your battery.  To estimate how much instantaneous current your battery can provide, just multiply the capacity and the discharge values.  For example, a 2200 milliamp-hour (mah) battery with 30C discharge can provide 66000 milliamps, or 66 amps, of current at any given time.  This should exceed the amount of current your motors will use together at full throttle.  Don't forget that you will need a special charger for these batteries.  Consider the [Turnigy Accucell](http://www.hobbyking.com/hobbyking/store/__7028__Turnigy_Accucel_6_50W_6A_Balancer_Charger_w_Accessories.html) and a good [12VDC supply](https://www.adafruit.com/products/352).

### Frame
 Your choice of frame is not terribly important, but it is very handy to purchase one that already has power distribution built into it.  That way, you will not have to hack together a way to securely wire the battery power into your ESCs.  Obviously, you will want a frame that is large enough so that your propellers are not able to touch eachother.  

### Flight Control Board
