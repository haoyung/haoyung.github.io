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

To discuss Wet WDT, we must first explain WDT. WDT stands for Weiss Distribution Technique, introduced by John Weiss in 2005. It has become a popular method for distributing coffee grounds evenly. 

WDT involves using a needle-like tool to stir the coffee grounds, breaking up clumps and ensuring uniform distribution. While it's primarily used for preparing espresso pucks, it has recently been adopted for pour-over methods to create a fluffier coffee bed and aid in the bloom.

As WDT gained popularity, enthusiasts began exploring its application in other scenarios, leading to the development of Wet WDT. As the name implies, Wet WDT involves using the WDT tool during the pour-over process, typically during the bloom. However, it can be done later in the brew, though this may risk clogging the filter paper.

### Barista Hustle's Blog Post

The rise in Wet WDT's popularity is largely due to a [blog post by Barista Hustle](https://www.baristahustle.com/blog/Wet-weiss-distribution/). In their experiment, they brewed ten cups of coffee using the Tricolate, with five cups using standard methods and the other five employing Wet WDT during the bloom.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/BH_result.webp" alt="" class="img-fluid">
        <span class="image-span">Barista Hustle's experimental data</span>
    </div>
</div>

They found that Wet WDT increased the average extraction time from 266 seconds to 334 seconds and raised the average extraction yield from 21.66% to 23.33%, a 1.67% increase.

This leads to the question: **How much of this increase in extraction yield is due to the extended extraction time?** Any agitation method, including Wet WDT, is likely to increase both extraction time and yield by accelerating fines migration (the sinking of fine particles), which can clog the filter, reduce the flow rate, and lengthen extraction time.

Barista Hustle concluded (details in the original post):

1. The increase in extraction yield from Wet WDT is not solely due to extended extraction time.
2. Compared to other agitation methods (like stirring), Wet WDT is less likely to cause filter clogging.

These conclusions suggest that Wet WDT is a gentle agitation method that doesn't easily cause clogging and significantly increases extraction yield. This led many coffee enthusiasts, including myself, to incorporate Wet WDT into our brewing routines.

However, is Wet WDT truly that effective? This motivated me to conduct my own experiment to explore this question further:

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">How much of the increase in extraction yield from Wet WDT is due to the extended extraction time?<br>And how much is due to its "magical" effects like improving extraction uniformity and coffee bed structure?</p>

### Wet WDT and Extraction Yield

Barista Hustle claims that Wet WDT is less likely to cause filter clogging than other agitation methods. But is it fundamentally different?

My curiosity was piqued by an article by [Rohan at PocketScienceCoffee](https://www.instagram.com/pocketsciencecoffee/) titled [Wet-WDT (WWDT) for Coarse-grind Percolation](https://pocketsciencecoffee.com/2022/11/10/Wet-wdt-wwdt-for-coarse-grind-percolation/). Rohan prefers very coarse grinds, but they often lead to fast flow rates and short extraction times, resulting in low extraction yields. To counter this, Rohan used Wet WDT to deliberately induce fines migration, clogging the filter and significantly extending the extraction time.

Initially, I was skeptical because I viewed Wet WDT as a gentle method, not suitable for triggering fines migration and clogging.

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">However, after trying it myself, I realized I was wrong, and very wrong.</p>

Using a very coarse grind that would typically extract in under 2 minutes, Wet WDT during the bloom easily clogged the filter, extending the extraction time to nearly 10 minutes. This demonstrated that Wet WDT is not as gentle as I had imagined but rather a very aggressive agitation method. While it increases extraction yield, it also accelerates fines migration, causing clogging, similar to other agitation methods.

This led me to reconsider Barista Hustle's conclusions. If Wet WDT significantly accelerates fines migration, perhaps the increase in extraction yield is due to the extended extraction time, similar to other agitation methods.

### Experimental Idea

I wanted to determine how much of the increase in extraction yield from Wet WDT during the bloom is due to the extended total extraction time.

If I could compare two brews with identical parameters and total extraction times, except that one uses Wet WDT and the other doesn't, the answer would be clear by measuring the extraction yields.

However, this assumption is unrealistic. Brews with Wet WDT will naturally have longer extraction times. To match the control group's extraction time, I would need to grind finer, which would also increase the yield. Thus, I couldn't isolate Wet WDT's true impact on extraction yield.

To address this, I needed a way to change the flow rate without altering other factors. The solution was the Pulsar, a tool with a valve to control flow rate, allowing me to slow down the control group's flow rate to match the Wet WDT group's.

### Experiment

Using the Pulsar's valve, I could control the flow rate, slowing down the control group to match the Wet WDT group's total extraction time. While adjusting to exactly the same total extraction time is challenging, I opted for multiple brews with different valve settings for each group and used linear approximation to predict the extraction yields at different total extraction times.

#### Experimental Steps

##### Grouping

Due to the experiment's complexity, I conducted a simple pre-experiment to ensure stable parameters. The main experiment involved more groups and brews.

###### Pre-experiment

Three brews were conducted:

1. Experimental group (Wet WDT, WWDT): Wet WDT during the bloom.
2. Control group - fast (Control-fast, CTL-fast): Only a spin (Rao spin) during the bloom, valve fully open.
3. Control group - slow (Control-slow, CTL-slow): Only a spin (Rao spin) during the bloom, valve opened to about the 1 o'clock position.

###### Main experiment

The main experiment was divided into two groups, each with three subgroups:

1. Experimental group (Wet WDT, WWDT): Wet WDT during the bloom.
   - Experimental group - fast (WWDT-fast): Valve fully open.
   - Experimental group - medium (WWDT-mid): Valve opened to about 22.5 degrees.
   - Experimental group - slow (WWDT-slow): Valve opened to about 45 degrees.
2. Control group (Control, CTL): Only a spin (Rao spin) during the bloom.
   - Control group - fast (CTL-fast): Valve fully open.
   - Control group - medium (CTL-mid): Valve opened to about 22.5 degrees.
   - Control group - slow (CTL-slow): Valve opened to about 45 degrees.

Each group was brewed twice for stability.

##### Brewing Parameters

These parameters are modified from PocketScienceCoffee's article [How to brew with Pulsar (coming from V60)](https://pocketsciencecoffee.com/2023/10/01/how-to-brew-on-pulsar-coming-from-v60/).

- Coffee to water ratio: 20g:360g (1:18)
- Water temperature: 100°C
- Brewing water: distilled water
- Grind size: Burr gap set to 500 µm from lock (Lagom P100 #6.4)

##### Detailed Brewing Steps

1.   Separate the Pulsar's wall and base.
2.   Close the valve, pour a small amount of hot water into the base, just enough to submerge the ribs at the bottom.
3.   Place the filter paper inside; it will float on the water.
4.   Open the valve; the filter paper will adhere neatly to the bottom.
     -   This ensures no air bubbles are trapped between the valve and filter paper, allowing for smoother water flow.
5.   Install the wall onto the base and close the valve.
6.   Measure 20g of coffee, grind, transfer to the filter, and level the grounds (a WDT tool is recommended).
7.   (With the valve closed) Place the disperser on top, pour in 60g of water quickly.
8.   The two groups use different methods for the bloom:
     -   Wet WDT: Use a WDT tool (I used the Comb from Barista Hustle Tools) for deep Wet WDT, stirring to the bottom of the coffee bed, as shown in the video.
     -   Control: Perform two clockwise and two counterclockwise Rao Spins.
9.   At 0:30, fully open the valve to let the water drain.
10.  At 1:00, quickly pour water at a rate of about 8–10 ml/s until reaching 230g, and perform another Rao Spin.
11.  Open the valve to the set position.
12.  When the water level reaches the 100 ml mark on the side of the Pulsar, close the valve and pour water at a rate of about 8–10 ml/s until reaching 360g, then perform another Rao Spin.
13.  Open the valve to the set position, wait for the water to drain completely, record the total extraction time, and take samples.

#### Experimental Results

##### Pre-experiment

| Pre-experiment  | WWDT   | CTL-fast | CTL-slow |
| ------------ | ----------------- | ----------------- | ----------------- |
| Total Brew Time (TBT) (s) | 263    | 187      | 269      |
| Extraction Yield (EY) (%) | 21.30% | 20.65%   | 21.52%   |
| Notes | Noticeably more astringent |  |  |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 1: Total brew time and extraction yield for the three pre-experiment brews</span>
    </div>
</div>

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 1: Scatter plot of total brew time and extraction yield for the three pre-experiment brews</span>
    </div>
</div>

From Table 1 and Figure 1, we can observe:

1. Both WWDT and CTL-fast had the valve fully open during brewing, but WWDT had a significantly longer total brew time, confirming that WWDT accelerates fines migration as mentioned earlier.
2. WWDT and CTL-slow had similar total brew times and extraction yields.

For these similar extraction yields, I propose two hypotheses:

- **Hypothesis 1:**
The increase in extraction yield from WWDT purely comes from the extended total brew time and has nothing to do with stirring or aiding in the mixing of coffee and water.
- **Hypothesis 2:**
The stirring and mixing of coffee and water from WWDT still have the ability to increase extraction yield, but the accelerated fines migration from WWDT leads to poor extraction conditions later on, such as channeling in the coffee bed, which reduces the extraction yield. These effects cancel each other out, resulting in similar extraction yields.

Hypothesis 1 is more intuitive, while Hypothesis 2 is proposed because the brew with WWDT had noticeably more astringency compared to the other two. I believe this might be due to channeling, resulting in poorer filtration by the coffee bed, allowing larger molecules that cause astringency to pass through into the carafe.

I will look for more clues to confirm or refute these hypotheses in the main experiment.

##### Main Experiment

I plotted the total brew time and extraction yield for the 12 brews in the main experiment in Figure 2.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 2: Scatter plot of total brew time and extraction yield in the main experiment</span>
    </div>
</div>

From Figure 2, we can observe a trend of increasing extraction yield with longer brew times. In terms of flavor, I found that brews with WWDT generally had higher astringency. Regardless of WWDT, longer total brew times resulted in sweeter and better mouthfeel. Among all the brews, I found CTL-slow to have the best flavor (these flavor descriptions were not blind-tested, so they are not considered reliable, just for reference).

Additionally, except for the fast group, the repeated brews in the other four groups had very similar total brew times and extraction yields, indicating stable brewing.

The flow rate is more sensitive to valve angle when the valve is more closed, but the Pulsar's valve lacks markings. I suspect the relative instability of the fast group is due to my inability to control the valve angle precisely.

With this data, we can begin to analyze the question we posed before the experiment: "How much of the increase in extraction yield from WWDT remains after accounting for the extended total brew time?" This will be discussed in detail in the next section.

#### Discussion

After completing the main experiment, we obtained the relationship between total brew time (TBT) and extraction yield (EY) for both the WWDT and control groups. Now, let's guess what the theoretical relationship between TBT and EY should be.

First, we make the following assumptions:

1. The maximum extraction yield is $$ \text{EY}_{\text{max}} $$. Different coffees, grind sizes, and methods will result in different values for $$ \text{EY}_{\text{max}} $$, but generally, we expect it to be less than 30%.
2. We assume that the water extracting the coffee is always perfectly clean (with a concentration of 0). In reality, this is not the case—for example, in pour-over brewing, the water in the dripper is usually not clear, meaning we are effectively extracting coffee with coffee. However, for simplicity, we will assume this here.
3. At any given time $t$, the extraction rate $r(t)$ is proportional to the concentration difference between the coffee and the water. Since we assume the water concentration is 0, the concentration difference is the proportion of extractable material remaining in the coffee, $$ (\text{EY}_{\text{max}} - \text{EY}(t)) $$. Thus, $$ r(t) \propto (\text{EY}_{\text{max}} - \text{EY}(t)) $$.

Based on assumption 3, we can assume $$ r(t) = k(\text{EY}_{\text{max}} - \text{EY}(t)) $$, and by definition $$ \text{EY}(t) = \int_0^t r(\tau) \, d\tau $$, we can solve:

$$ \text{EY}(t) = \text{EY}_{\text{max}}\left(1 - e^{-kt}\right) $$

Therefore, we will use this theoretical model of TBT and EY to fit the data from both the WWDT and control groups, calculating their respective $$ \text{EY}_{\text{max}} $$ and $k$.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 3: Scatter plot and fitted theoretical curves for the WWDT and control groups in the main experiment</span>
    </div>
</div>

We can see that the two curves are very similar. In Table 2, I list the constants $$ \text{EY}_{\text{max}} $$ and $k$ for the fitted theoretical curves of the WWDT and control groups, as well as the $$ p \text{-value} $$ obtained from the Student's t-test.

| Fitted Curve Constants  | WWDT   | CTL | $$ p \text{-value} $$ |
| ------------ | ----------------- | ----------------- | ----------------- |
| $k$ | 0.0116    | 0.0118      | 0.522      |
| $$ \text{EY}_{\text{max}} $$ | 23.08 | 23.07   | 0.881   |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 2: Constants for the fitted theoretical curves of the WWDT and control groups in the main experiment and their $p \text{-value}$</span>
    </div>
</div>

We can see that, using the conventional threshold of $$ p \text{-value} < 0.05 $$ for significance, there is no significant difference between the fitted theoretical curves for $$ \text{EY}_{\text{max}} $$ and $k$. This means that the presence of WWDT does not significantly affect the relationship between TBT and EY. In other words, in terms of extraction yield, WWDT is not significantly different from simply closing the valve more to achieve a longer TBT.

Additionally, I consistently observed more noticeable astringency in the WWDT group during both the pre-experiment and main experiment. If this observation holds true, it suggests that when using a dripper with adjustable flow rate, we should avoid using WWDT and instead rely solely on adjusting the valve to achieve the desired extraction yield.

### Conclusion

Since Barista Hustle published their article claiming that Wet WDT (WWDT) can significantly increase extraction yield, WWDT has become popular. However, it also increases the total brew time, leading me to suspect that the increase in extraction yield might not be directly related to WWDT itself but rather a result of the extended extraction time due to increased agitation and accelerated fines migration.

This article leverages the Pulsar's ability to control flow rate via a valve to address the question: "How much of the increase in extraction yield from WWDT is directly related to it, and how much is due to the extended total brew time?" Based on the experimental results, we found that WWDT does not significantly alter the relationship between total brew time and extraction yield. In other words, with the same total brew time, the presence of WWDT does not significantly impact the extraction yield.

Moreover, WWDT generally resulted in higher astringency when used with the Pulsar, leading me to believe that when the flow rate of a dripper is adjustable, we should avoid using WWDT and instead achieve the desired extraction yield by simply adjusting the valve size.

In summary, while Wet WDT has been touted as a revolutionary method for increasing extraction yield, my experiments indicate that its benefits may not be as unique as initially thought. The extended extraction time, rather than the Wet WDT itself, appears to be the primary factor contributing to higher yields. Therefore, for those using adjustable drippers like the Pulsar, focusing on flow rate control may be a more effective and consistent approach.