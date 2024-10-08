---
date: 2018-09-25
title: A Post Mortem of The Burning Bug
tags: [dev, core, crypto, community]
author: dEBRUYNE
---

This blog sets out the burning bug. The goal of this blog post is to provide a detailed explanation of aforementioned bug, how it could be used to cause harm to services, merchants, and exchanges, and how it was handled by the Monero (dev) community.

The bug basically entails the wallet not providing a warning when it receives a burnt output. Therefore, a determined attacker could burn the funds of an organization's wallet whilst merely losing network transaction fees. They, however, do not accrue direct monetary gains. Nonetheless, there are probably means to indirectly benefit. The notion of burning funds by sending multiple transactions to the same stealth address has been documented for quite some time already, as, for example, can be seen from this [Monero SE Q&A](https://monero.stackexchange.com/questions/4163/can-a-one-time-public-key-be-used-for-more-than-one-payment/4169#4169). Unfortunately, however, the implications of an organization being involved had not been thoroughly thought through until a community member described a hypothetical attack on the Monero subreddit.  

Now, a stealth address in Monero is described by the following formula:

`P = Hs(rA||i)*G + B`

Where

`Hs` is a hash to scalar function (note that the scalar output is reduced modulo l);

`r` is the private transaction key, which is randomly generated by the sender;

`A` is the public view key (which is part of the public address) of the recipient;

`i` is the output index (each output has its own index number (e.g. the first output has index 0));

`G` is the standard Ed25519 basepoint;

`B` is the public spend key (which is part of the public address) of the recipient;

Whereas a key image in Monero is described by the following formula:

`I = xHp(P)`

Where

`x` is a private key / scalar (created by adding the recipient's private spend key and the hash to scalar output of the ECDH shared secret);

`Hp` is a hash to point function;

`P` is the stealth address;

As can be seen from aforementioned functions, sending Monero to the same stealth address will result in multiple duplicate key images. Note that the network will reject a key image if it's already present in the blockchain, because it will be seen as an attempt to double spend. Thus, one will only be able to spend from this stealth address once (the wallet will automatically select the largest denomination though) and the remainder of the outputs will be unspendable / burnt. In addition, the transactions to the same stealth address will be linkable. 

Practically speaking this bug is exploited as follows. An attacker first generates a random private transaction key. Thereafter, they modify the code to merely use this particular private transaction key, which ensures multiple transactions to the same public address (e.g. an exchange's hot wallet) are sent to the same stealth address. Subsequently, they send, say, a thousand transactions of 1 XMR to an exchange.  Because the exchange's wallet does not warn for this particular abnormality (i.e. funds being received on the same stealth address), the exchange will, as usual, credit the attacker with 1000 XMR. The attacker then sells his XMR for BTC and lastly withdraws this BTC. The result of the hacker's action(s) is that the exchange is left with 999 unspendable / burnt outputs of 1 XMR. 

The bug was discovered after a community member described a (hypothetical) attack on the [Monero subreddit](https://reddit.com/r/Monero/comments/9gbbm9/what_happens_if_i_spend_from_a_specific_stealth/e66ml11/). A private patch was promptly created and later included in the code via [this pull request](https://github.com/monero-project/monero/pull/4438). I (and others) privately notified as many exchanges, services, and merchants as possible with the (private) patch that had to be applied on top of the v0.12.3.0 release branch. To reiterate (from the previous post mortem blog), this is clearly not the preferred method, as it (i) invariably excludes organizations that I (and others) personally do not have contact with, but are an essential part of the Monero ecosystem and (ii) may invoke a view of preferential treatment. However, there had only been limited time to improve the vulnerability report process. Although, the bug being announced on the public mailing list can be perceived as an improvement. Lastly, I'd like to emphasize that, for any organization present in the Monero ecosystem, it's imperative to be subscribed to the public mailing list.  

In sum, a bug in the wallet software allowed a determined attacker to cause significant damage to organizations present in the Monero ecosystem with minimal cost. Fortunately, the bug did not affect the protocol and thus the coin supply was not affected. However, we, as the Monero community, should seek means to get more eyes on the code and especially new pull requests. If you are familiar with C and/or C++, please, if time permits it, try to review pull requests (even a partly review is beneficial). Lastly, this event is again an effective reminder that cryptocurrency and the corresponding software are still in its infancy and thus quite prone to (critical) bugs. 
