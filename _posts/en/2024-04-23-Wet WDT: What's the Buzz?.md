---
layout: post
title: "Wet WDT: What's the Buzz?"
description: ""
tag: [experiment, pourover]
category: articles
imgfolder: WWDT
image: 
image_orientation: 
image_caption: ""
language_reference: wwdt
usemathjax: true
redirect_from: 
  - /en/articles/Wet-WDT-What‘s-the-Buzz
  - /en/articles/Wet-WDT-What’s-the-Buzz
draft: true
sitemap: false
---

### What is Wet WDT (WWDT)?

Before diving into Wet WDT, let's first understand the Weiss Distribution Technique (WDT). Introduced by John Weiss in 2005, WDT has become a popular method for evenly distributing coffee grounds.

WDT involves using a needle-like tool to stir the coffee grounds, breaking up clumps, and ensuring even distribution. While it's commonly used for preparing espresso pucks, it has also gained popularity in pour-over brewing to level the initial coffee bed before adding water.

As WDT gained traction, curiosity naturally led to further adaptations. Wet WDT, as the name suggests, is a variation where the WDT tool is used during the brewing process of pour-over, typically during the bloom phase. However, it can also be applied later in the brewing process.

### Barista Hustle's Blog Post

The recent interest in Wet WDT can largely be attributed to this [Blog Post](https://www.baristahustle.com/blog/wet-weiss-distribution/) by Barista Hustle. In their experiment, they brewed ten cups of coffee using a Tricolate. Five were brewed using standard methods, and the other five underwent Wet WDT during the bloom phase.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/BH_result.webp" alt="" class="img-fluid">
        <span class="image-span">Experimental data from Barista Hustle</span>
    </div>
</div>

They observed that Wet WDT increased the average total brew time (TBT) from 266 seconds to 334 seconds. Remarkably, the average extraction yield (EY) increased from 21.66% to 23.33%—an impressive 1.67% boost.

This raises the question: **how much of this increase in extraction yield is actually the result of WWDT? And how much is simply due to the extended TBT?** Agitation tends to increase both TBT and yield. This is because agitation promotes fines migration, leading to filter clogging and a slower flow rate, which in turn increases TBT and yield since there's more contact time between coffee and water.

Barista Hustle concluded (for a detailed argument, see the original article):

1. The increase in extraction yield from Wet WDT is not solely due to extended TBT.
2. WDT is less likely to cause clogging compared to other agitation methods.

These conclusions make Wet WDT seem almost magical. It not only provides gentler agitation that's less likely to cause clogging but also significantly boosts extraction yield. Inspired by the article, like many coffee enthusiasts globally, I felt compelled to try stirring a few times with a WDT tool during the bloom.

But are these conclusions really true? Is Wet WDT genuinely that miraculous? Subsequent experiences led me to question this, prompting the motivation for this article. I aim to explore: 

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">How much of the extraction yield increase from Wet WDT is simply related to the extended TBT? And how much is due to its 'magical' effects, such as increased extraction uniformity and improved mixing of coffee grounds and water?</p>

### WWDT and Extraction Yield

Barista Hustle suggests that Wet WDT, compared to other agitation methods, is less likely to cause filter clogging, indicating a fundamental difference between Wet WDT and other agitation methods. However, my skepticism was piqued by [Rohan aka PocketScienceCoffee](https://www.instagram.com/pocketsciencecoffee/)'s article [Wet-WDT (WWDT) for Coarse-grind Percolation](https://pocketsciencecoffee.com/2022/11/10/wet-wdt-wwdt-for-coarse-grind-percolation/). Rohan enjoys the flavor separation produced by very coarse grinds, but such grinds lead to a fast flow rate and too short TBT, resulting in low extraction yields. To increase the yield, Rohan uses Wet WDT to induce fines migration and clog the filter, significantly extending the TBT.

Initially, I was skeptical because I followed Barista Hustle's post, perceiving Wet WDT as a very "gentle" agitation method, seemingly unsuitable for triggering fines migration and clogging.

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">However, after trying it myself, I found I was completely wrong.</p>

With an extremely coarse grind, where the TBT wouldn't exceed 2 minutes, using Wet WDT during the bloom easily clogged the filter, pushing TBT close to 10 minutes. This means that Wet WDT, contrary to my initial perception of being "gentle," actually involves intense agitation, which accelerates fines migration—a side effect (though in Rohan's recipe, this isn't a side effect but an intended outcome) that increases yield. In this regard, it's no different from other brewing methods that involve agitation.

This led me to reconsider the conclusions of the Barista Hustle article. Since I've confirmed that Wet WDT significantly accelerates fines migration, could it be that Wet WDT isn't so "magical" after all? Perhaps, compared to stirring or other agitation methods, the proportion of extraction yield increase due to extended TBT might be similar.

### Experiment Conception

I aim to determine: how much of the extraction yield increase caused by Wet WDT during the bloom is actually due to the extended TBT?

Suppose I have two brews where all parameters, including TBT, are the same, with the only difference being that one undergoes Wet WDT during the bloom and the other does not. Then the answer to this question would be straightforward—I would simply measure the extraction yields of these two brews.

Unfortunately, such an assumption is unreasonable because, as in the experiment conducted in the Barista Hustle article, the brew undergoing Wet WDT would have a longer brewing time probably due to the accelerated fines migration. To increase the brewing time for the brew without Wet WDT, I would have to grind finer, but a finer grind would also lead to increased extraction yield, preventing me from discerning the true impact of Wet WDT.

In other words, I need to change the flow rate without altering any other factors, and suddenly, it hit me—I have just the right equipment for that.

Yes, I'm talking about the Pulsar.

### Experiment

In essence, I just need to use the Pulsar's valve to control the flow rate, reducing the flow rate of the control group (which does not undergo Wet WDT) to match that of the experimental group (which does).

This idea is quite straightforward but not very practical because it's too difficult to adjust to exactly the same TBT. Therefore, I opted for a compromise: I would conduct multiple extractions for each group with different valve settings and then use linear approximation to predict the extraction yields at various TBT for each group.

#### Experimental Steps

##### Grouping

Due to the complexity of this experiment, I conducted a simple pre-experiment to ensure the chosen recipes were stable enough. The main differences between the pre-experiment and the main experiment are the grouping and the number of brews conducted.

###### Pre-experiment

Three brews were conducted:

1. Experimental group (Wet WDT, WWDT): Performed Wet WDT during the bloom.
2. Control-fast group (CTL-fast): Only performed a spin (Rao spin) during the bloom to mix water and coffee evenly, valve fully open.
3. Control-slow group (CTL-slow): Only performed a spin (Rao spin) during the bloom to mix water and coffee evenly, valve set to about 1 o'clock.

###### Main experiment

The experiment is divided into two groups:

1. Experimental group (Wet WDT, WWDT): Performs Wet WDT during the bloom.
2. Control group (Control, CTL): Only performs a Rao spin during the bloom to ensure even mixing of water and coffee.

Each group will brew with three different valve settings on the Pulsar: (i) valve fully open, (ii) valve open to the 1 o'clock position, (iii) valve open to the 2 o'clock position. Each setting will be brewed three times, resulting in a total of 2 (groups) x 3 (valve settings) x 3 (brews) = 18 brews.

##### Brewing Parameters

The parameters used here are modified from PocketScienceCoffee's article [How to brew with Pulsar (coming from V60)](https://pocketsciencecoffee.com/2023/10/01/how-to-brew-on-pulsar-coming-from-v60/).

- Coffee to water ratio: 20g:360g (1:18)
- Water temperature: 100°C
- Water quality: distilled water
- Grind size: Burr gap set to 500 µm from lock (Lagom P100 #6.4)

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
     -   Wet WDT: Use a WDT tool (I used Barista Hustle Tools' the Comb) for deep Wet WDT, stirring deep into the coffee bed, as demonstrated in the video.
     -   Control: Perform two swirls to ensure all grounds contact the water.
9.   At 0:30, fully open the valve to drain the water.
10.  At 1:00, quickly pour up to 230g at about 10 ml/s, then perform a swirl.
11.  Open the valve to the set direction.
12.  When the water level reaches the 100 ml mark on the side of the Pulsar, close the valve and pour water to 360 g at about 10 ml/s, then perform another swirl.
13.  Open the valve to the set direction, wait for the water to fully drain, record the TBT, and take a sample for measuring the TDS and extraction yield.

#### Experimental Results

##### Pre-experiment

| Pre-experiment  | WWDT   | CTL-fast | CTL-slow |
| ------------ | ----------------- | ----------------- | ----------------- |
| Total Brew Time (TBT) (s) | 263    | 187      | 269      |
| Extraction Yield (EY) (%) | 21.30% | 20.65%   | 21.52%   |
| Notes | Noticeably more astringent |  |  |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 1: Total brew time (TBT) and extraction yield (EY) for three pre-Experiment groups</span>
    </div>
</div>

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 1: Total brew time (TBT) and extraction yield (EY) for three pre-Experiment groups</span>
    </div>
</div>

From Table 1 and Figure 1, we can observe:

1. Both WWDT and CTL-fast had the valve fully open during brewing, but WWDT had a significantly longer TBT, confirming the earlier statement that WWDT accelerates fines migration. It also had a higher EY, confirming the result from Barista Hustle's experiment.
2. WWDT and CTL-slow, which had similar TBT, had similar EY.

Let's focus on the second point as it's what we aim to observe in this experiment. I expected to see a higher EY for WWDT; however, the result is almost identical, even slightly lower in EY. For this unexpected result, I propose two hypotheses to explain the similar EY between WWDT and CTL-slow.

- **Hypothesis 1:** The increase in EY from WWDT is purely due to the longer TBT, while the stirring and mixing coffee with water during the WWDT didn't affect EY.
- **Hypothesis 2:** The stirring and mixing effects of WWDT do increase EY, but the accelerated fines migration from WWDT results in suboptimal extraction conditions, such as channeling, which lowers EY. These effects cancel each other out, leading to similar EY.

Hypothesis 1 is more intuitive, but Hypothesis 2 arises because the WWDT brew had noticeably more astringency than the other two. I suspect this might be due to channeling, which may lower the strength of filtration of the coffee bed, causing larger molecules responsible for astringency to pass through the coffee bed and into the carafe more easily.

In the main experiment, I will look for more evidence to support or refute these hypotheses.

##### Main Experiment

(WIP)

#### Discussion

(WIP)

### Conclusion

(WIP)