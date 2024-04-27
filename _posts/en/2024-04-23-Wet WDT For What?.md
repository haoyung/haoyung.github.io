---
layout: post
title: "Wet WDT For What?"
description: ""
tag: [experiment, pourover]
category: articles
imgfolder: WWDT
image: 
image_orientation: 
image_caption: ""
language_reference: wwdt
usemathjax: true
draft: true
sitemap: false
---

### What is Wet WDT (WWDT)?

Before delving into wet WDT, let's first understand WDT, or Weiss Distribution Technique. Introduced by John Weiss in 2005, WDT has become a widely adopted method for distributing coffee grounds.

WDT involves using a needle-like tool to stir the coffee grounds, breaking up clumps and ensuring an even distribution. It's commonly used in preparing espresso pucks but has also gained popularity in recent years for leveling the initial bed of coffee in pour-over brewing, aiding in the bloom phase.

As WDT gained traction, there was a natural curiosity to adapt it to more scenarios. Wet WDT, as the name implies, is a variation where the WDT tool is used during the pour-over process, typically during the bloom, although it can be applied later in the brewing process as well (care must be taken as it can lead to clogging the filter!).

### Barista Hustle's Blog Post

The recent spike in interest for wet WDT can largely be attributed to this [Blog Post](https://www.baristahustle.com/blog/wet-weiss-distribution/) by Barista Hustle. In their experiment, they brewed ten cups of coffee using a Tricolate, with five as a control group using standard methods, and five undergoing wet WDT during the bloom.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/BH_result.webp" alt="" class="img-fluid">
        <span class="image-span">Experimental data from Barista Hustle</span>
    </div>
</div>

They observed that wet WDT increased the average drawdown time (or total brew time, TBT) from 266 seconds to 334 seconds, and remarkably, the average extraction yield from 21.66% to 23.33%—an impressive increase of 1.67%.

This raises the question: **how much of this increase in extraction yield is actually due to the extended TBT?** After all, any method that increases agitation is likely to increase both TBT and yield, as agitation promotes fine migration, leading to filter clogging and a slower flow rate, which naturally increases TBT and yield.

Barista Hustle concluded (for a detailed argument, see the original article):

1. The increase in extraction yield from wet WDT is not solely due to extended TBT.
2. WDT is less likely to cause clogging compared to other agitation methods.

From these conclusions, wet WDT appears almost magical. It is not just a gentler agitation method that's less likely to cause clogging, but it also significantly boosts extraction yield. After reading this article, like many coffee enthusiasts globally, I felt compelled to try stirring a few times with a WDT tool during the bloom.

But are these conclusions truly that remarkable? Is wet WDT genuinely that miraculous? Subsequent experiences led me to question this, prompting the motivation for this article. I aim to explore: 

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">How much of the extraction yield increase from wet WDT is actually related to the extended TBT? And how much is due to its many 'magical' effects, such as increased extraction uniformity and improved mixing of coffee grounds and water?</p>

### WWDT and Extraction Yield

Barista Hustle suggests that wet WDT, compared to other agitation methods, is less likely to cause filter clogging, indicating a fundamental difference between wet WDT and other methods. However, my skepticism was piqued by [Rohan (PocketScienceCoffee)](https://www.instagram.com/pocketsciencecoffee/)'s article [Wet-WDT (WWDT) for Coarse-grind Percolation](https://pocketsciencecoffee.com/2022/11/10/wet-wdt-wwdt-for-coarse-grind-percolation/). Rohan enjoys the flavor separation produced by very coarse grinds, but such grinds lead to a too fast flow rate and too short TBT, resulting in low extraction yields. To increase the yield, Rohan uses wet WDT to induce fine migration and clog the filter, significantly extending the TBT.

Initially, I was very skeptical because I perceived wet WDT as a very "gentle" agitation method. It seemed unsuitable for triggering fine migration and clogging.

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">However, after trying it myself, I found I was completely wrong.</p>

With an extremely coarse grind, where total brew time wouldn't exceed 2 minutes, using wet WDT during the bloom easily completely clogged the filter, pushing TBT close to 10 minutes. This means that wet WDT, contrary to my initial perception of being "gentle," actually involves intense agitation. Therefore, while it increases extraction yield, it also accelerates fine migration—a side effect (though in Rohan's parameters, this isn't a side effect but an intended outcome). In this regard, it's no different from other agitation-increasing methods.

This led me to reconsider the conclusions of the Barista Hustle article. Since I've confirmed that wet WDT significantly accelerates fine migration, could it be that wet WDT isn't so "magical" after all? Perhaps, compared to stirring or other agitation methods, the proportion of extraction yield increase due to extended TBT might be similar.

### Experiment Conception

I aim to determine: how much of the extraction yield increase caused by wet WDT during the bloom is actually due to the extended TBT?

Suppose I have two brews where all parameters, including TBT, are the same, with the only difference being that one undergoes wet WDT during the bloom and the other does not. Then the answer to this question would be straightforward—I would simply measure the extraction yields of these two brews.

Unfortunately, such an assumption is unreasonable because, as in the experiment conducted in the Barista Hustle article, the brew undergoing wet WDT would have a longer brewing time. To increase the brewing time for the control group, I would have to grind finer, but a finer grind would also lead to increased extraction yield, preventing me from discerning the true impact of wet WDT.

In other words, I need to change the flow rate without altering any other factors, and suddenly, it hit me—don't I have just the right equipment for that?

Yes, I'm talking about the Pulsar.

### Experiment

In essence, I just need to use the Pulsar's valve to control the flow rate, reducing the flow rate of the control group (which does not undergo wet WDT) to match that of the experimental group (which does).

This idea is quite straightforward but not very practical because it's too difficult to adjust to exactly the same TBT. Therefore, I opted for a compromise: I would conduct multiple extractions for each group with different valve settings and then use linear approximation to predict the extraction yields at various TBT for each group.

#### Experimental Steps

##### Grouping

First, the experiment is divided into two groups:

1. Experimental group (wet WDT, WWDT): Performs wet WDT during the bloom.
2. Control group (Control, CTL): Only performs a Rao spin during the bloom to ensure even mixing of water and coffee.

Each group will brew with three different valve settings on the Pulsar: (i) valve fully open, (ii) valve open to the 1 o'clock position, (iii) valve open to the 2 o'clock position. Each setting will be brewed three times, resulting in a total of 2 (groups) x 3 (valve settings) x 3 (brews) = 18 brews.

##### Brewing Parameters

The parameters used here are modified from PocketScienceCoffee's article [How to brew with Pulsar (coming from V60)](https://pocketsciencecoffee.com/2023/10/01/how-to-brew-on-pulsar-coming-from-v60/).

- Coffee to water ratio: 20g:360g (1:18)
- Water temperature: 100°C
- Water quality: distilled water
- Grind size: Burr gap set to 500 µm from lock (Lagom P100 #4.7)

##### Detailed Brewing Steps

1.   Separate the Pulsar's wall and base.
2.   Close the valve, pour a small amount of hot water into the base, just enough to submerge the ribs at the bottom.
3.   Place the filter paper inside; it will float on the water.
4.   Open the valve; the filter paper will adhere neatly to the bottom.
     -   This ensures no air bubbles are trapped between the valve and filter paper, allowing for smoother water flow.
5.   Install the wall onto the base and close the valve.
6.   Measure 20 g of coffee, grind, and pour into the filter, leveling the grounds (a WDT tool is recommended).
7.   (With the valve closed) Place the disperser on top, pour in 60g of water.
8.   Each group uses a different method during the bloom:
     -   Wet WDT: Use a WDT tool (I used Barista Hustle Tools' the Comb) for deep wet WDT, stirring deep into the coffee bed, as demonstrated in the video.
     -   Control: Perform two swirls and make sure that all grounds contact with water.
9.   At 1:00, pour water to 230g at about 10 ml/s, then perform a swirl.
10.  Open the valve to the set direction.
11.  When the water level reaches the 100 ml mark on the side of the Pulsar, close the valve and pour water to 360 g at about 10 ml/s, then perform another swirl.
12.  Open the valve to the set direction, wait for the water to fully drain, record the TBT, and take a sample for measuring the TDS and extraction yield.

#### Experimental Results

#### Discussion

### Conclusion
