OPENBSD
TL;DR
Randomized kernel links and libraries
Attempt to remove all ROP gadgets from vanilla distribution
No zero-day vulnerabilities in vanilla for a long time
Runs nicely on my laptop with Chrome using "unveil"
Randomized kernel and library at boot
If you know a bit about exploitation, you know that stack overflow vulnerabilities without Address Space Layout Randomization (ASLR) are outdated. You also probably know that these days you cannot do anything without some memory leak or knowledge of the binary, especially with x64 and its Data Execution Prevention bit.

To put it briefly, the less you know about the state of guards patrolling around, the more likely you can get caught. Randomizing the position of functions inside a program, as well as the kernel, takes the exercise of exploiting to an entirely new level of magic.

Removing ROP Gadgets
OpenBSD is a small community that is really stubborn. Therefore, they can easily stick to their principles. Why am I mentioning this? Well, I have to first let you know about ROP Gadgets and Weird Machines...

[...]

So, you flood the stack with a bunch of known jump addresses that, before returning, manipulate some memory or register in a wanted manner to run a meta program that uses available executable memory.

[...]

Well, since big communities have lots of contributors, it's hard to track those down to the point of removing them...

No Zero-day Vulnerabilities Found in Vanilla
Who is looking anyway? (The paranoid users of this OS?)

Runs Nicely on My Laptop
I booted up a USB key using secure boot, installed it following the instructions, and everything worked out of the box (my laptop is an Intel SOC).

Manifest Kernel Rules
When you compile a program, you can add a kernel library that declares to the kernel the program's capabilities (like access to files, screen, sound, network...) so it can catch unsolicited accesses. For example, Chrome with the option --enable-unveil will be restricted by the kernel to only access the folder "Downloads," which is nice :)

What Else?
Well, you have a nice, secure, zero-day-free operating system that supports Rust, Chrome, and Vim. What else do you need? Okay, okay... I'll make some tutorials :)