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

To discuss wet WDT, we must first talk about WDT, which stands for Weiss Distribution Technique. Introduced by John Weiss in 2005, WDT has become a very common method for distributing coffee grounds.

WDT involves using a needle-like tool to stir the coffee grounds, eliminating clumps and ensuring an even distribution. It's commonly used in preparing espresso pucks but has also become popular in recent years for leveling the initial bed of coffee in pour-over brewing, aiding in the bloom phase.

As WDT gained popularity, naturally, there was interest in adapting it to more scenarios. Wet WDT, as the name suggests, is "wet" WDT, meaning it involves stirring with a WDT tool during the middle of a pour-over session, usually during the bloom, though there's no rule against doing it later in the brew (but be careful—it can easily clog the filter!).

### Barista Hustle's Blog Post

The sudden surge in popularity of wet WDT is undoubtedly linked to this [Blog Post](https://www.baristahustle.com/blog/wet-weiss-distribution/) by Barista Hustle. In their experiment, they brewed ten cups of coffee using a Tricolate, five as a control group using standard methods, and five undergoing wet WDT during the bloom.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/BH_result.webp" alt="" class="img-fluid">
        <span class="image-span">Experimental data from Barista Hustle</span>
    </div>
</div>

They found that wet WDT increased the average drawdown time (which is the so called TBT, total brew time) from 266 seconds to 334 seconds, and astonishingly, the average extraction yield from 21.66% to 23.33%—a substantial increase of 1.67%.

At this point, you might wonder, as I did, **how much of this increase in extraction yield is actually due to the extended TBT?** After all, including wet WDT, any method that increases agitation is likely to increase both TBT and yield. This is because agitation accelerates fine migration, leading to filter clogging, which slows down the flow rate, naturally increasing TBT and yield.

After some reasoning, Barista Hustle concluded (for a detailed argument, see the original article):

1. The increase in extraction yield from wet WDT is not solely due to extended TBT.
2. Compared to other agitation-increasing methods (like stirring), WDT is less likely to cause clogging.

From these conclusions, wet WDT seems almost magical. It's not just a gentler agitation method that's less likely to cause clogging, but it dramatically increases extraction yield. After reading this article, like many coffee enthusiasts around the world, I felt uncomfortable not stirring a few times with a WDT tool during the bloom.

But are the conclusions really that wonderful? Is wet WDT truly that miraculous? Subsequent events made me start to doubt, and that's the motivation for writing this article. I want to conduct an experiment to explore the question I had after first reading Barista Hustle's article:

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">How much of the extraction yield increase from wet WDT is actually related to the extended TBT? And how much is related to its many 'magical' effects, such as increased extraction uniformity and helped mixing the coffee ground and water better?</p>

### WWDT and Extraction Yield

Barista Hustle claims that wet WDT, compared to other agitation-increasing methods, is less likely to cause filter clogging, suggesting a fundamental difference between wet WDT and other methods. But is this really the case?

What first made me skeptical was [Rohan (PocketScienceCoffee)](https://www.instagram.com/pocketsciencecoffee/)'s article [Wet-WDT (WWDT) for Coarse-grind Percolation](https://pocketsciencecoffee.com/2022/11/10/wet-wdt-wwdt-for-coarse-grind-percolation/). In short, Rohan enjoys the flavors separation produced by very coarse grinds. However, overly coarse grinds lead to too fast a flow rate and too short TBT, resulting in low extraction yields. To increase the yield, Rohan uses wet WDT to intentionally induce fine migration and clog the filter, significantly extending the TBT.

I was initially very skeptical when I saw this article because my impression of wet WDT was that it was a very "gentle" agitation method. I didn't think it was suitable for triggering fine migration and clogging.

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">However, after trying it myself, I found I was completely wrong.</p>

With an extremely coarse grind, where total brew time wouldn't exceed 2 minutes, using wet WDT during the bloom easily completely clogged the filter, pushing TBT close to 10 minutes. This means that wet WDT, contrary to my perception of being "gentle," actually involves intense agitation. Therefore, while it increases extraction yield, it also accelerates fine migration—a side effect (though in Rohan's parameters, this isn't a side effect but an intended outcome). In this regard, it's no different from other agitation-increasing methods.

This led me to reconsider the conclusions of the Barista Hustle article. Since I've confirmed that wet WDT significantly accelerates fine migration, could it be that wet WDT isn't so "magical" after all? Perhaps, compared to stirring or other agitation methods, the proportion of extraction yield increase due to extended TBT might be similar.

### Experiment Conception

I want to know: how much of the extraction yield increase caused by wet WDT during the bloom is actually due to the extended TBT?

Suppose I have two brews where all parameters, including TBT, are the same, with the only difference being that one undergoes wet WDT during the bloom and the other does not. Then the answer to this question would be straightforward—I would simply measure the extraction yields of these two brews.

Unfortunately, such an assumption is unreasonable because, as in the experiment conducted in the Barista Hustle article, the brew undergoing wet WDT would have a longer brewing time. To increase the brewing time for the control group, I would have to grind finer, but a finer grind would also lead to increased extraction yield, preventing me from discerning the true impact of wet WDT.

In other words, I need to change the flow rate without altering any other factors, and suddenly, it hit me—don't I have just the right equipment for that?

Yes, I'm talking about the Pulsar.

### Experiment

In other words, I just need to use Pulsar's valve to control the flow rate, reducing the flow rate of the control group (which does not undergo wet WDT) to match that of the experimental group (which does).

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