---
layout: post
title: "No More Wet WDT (Perhaps)"
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

### Introduction

In this article, I conducted experiments to explore the effects of Wet WDT on brewing and reached some rather counterintuitive conclusions: under the specific conditions of this experiment, we might want to avoid using Wet WDT. As always, the experimental data is [open-source](https://docs.google.com/spreadsheets/d/1mynPFElhgOCA7uGLETg_qh0JQ5UOTXj3xD7DsgH5ZcE/edit?usp=sharing), feel free to use it, and please share any findings with me!

### What is Wet WDT (WWDT)?

Before delving into Wet WDT, let's first discuss WDT. WDT stands for Weiss Distribution Technique, proposed by John Weiss in 2005. It has become a common method for distributing coffee grounds evenly.

WDT involves using needle-like tools to stir the coffee grounds, breaking up clumps and ensuring an even distribution. While it originated for use with espresso pucks, it has recently been applied to leveling coffee grounds in a pour-over filter, making the coffee bed fluffier and aiding in pre-infusion.

As WDT gained popularity, it was naturally adapted for more scenarios. Wet WDT, as the name suggests, is a "wet" version of WDT. This involves using WDT tools to stir the coffee grounds halfway through the pour-over process, typically during the bloom phase. However, it can be done at any point in the brewing process (though be cautious, as it can easily clog the filter paper!).

### Barista Hustle's Blog Post

Wet WDT gained traction in the second half of 2022, largely due to this [blog post](https://www.baristahustle.com/blog/Wet-weiss-distribution/) by Barista Hustle. In their experiment, they brewed ten cups of coffee using a Tricolate, five with the usual method and five with Wet WDT during the bloom phase.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/BH_result.webp" alt="" class="img-fluid">
        <span class="image-span">Barista Hustle's experimental data</span>
    </div>
</div>

They found that Wet WDT increased the average extraction time from 266 seconds to 334 seconds, and the average extraction yield from 21.66% to 23.33%—a notable increase of 1.67%.

You might wonder, as I did, **how much of this increase in extraction yield is related to the extended extraction time?** Any agitation technique, including Wet WDT, is likely to increase both the extraction time and yield. This is because agitation speeds up fines migration (the settling of fine particles), causing filter clogging, which slows down the flow rate and naturally leads to a higher extraction yield.

Barista Hustle concluded (for detailed reasoning, please refer to the original article):

1. The increase in extraction yield from Wet WDT is not solely due to the extended extraction time.
2. Compared to other agitation techniques (such as stirring), Wet WDT is less likely to clog the filter paper.

From these conclusions, Wet WDT seems almost magical. It is not only a gentler agitation technique that is less likely to cause clogging but also dramatically increases the extraction yield. After reading this article, like millions of coffee enthusiasts worldwide, I couldn't help but feel uneasy if I didn't stir with a WDT tool during the bloom phase.

But are these conclusions really that wonderful? Is Wet WDT really that magical? Some subsequent events made me start to doubt, and this doubt is the motivation behind writing this article. I wanted to conduct an experiment to explore the question I had when I first read Barista Hustle's article:

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">How much of the increase in extraction yield from Wet WDT is directly related to it, and how much is simply due to the extended total brew time?</p>

### Wet WDT and Extraction Yield

Barista Hustle claims that Wet WDT, compared to other agitation techniques, is less likely to clog the filter paper. This led me to believe that Wet WDT is fundamentally different from other agitation techniques. But is this really the case?

The first thing that made me doubt was [Rohan (PocketScienceCoffee)](https://www.instagram.com/pocketsciencecoffee/)'s article [Wet-WDT (WWDT) for Coarse-grind Percolation](https://pocketsciencecoffee.com/2022/11/10/Wet-wdt-wwdt-for-coarse-grind-percolation/). In short, Rohan likes the flavor of extremely coarse grinds, but overly coarse grinds result in too fast a flow rate and too short an extraction time, leading to a low extraction yield. To increase the extraction yield, Rohan uses Wet WDT to deliberately induce fines migration, clogging the filter paper and significantly extending the extraction time.

When I first read this article, I was very skeptical because I thought Wet WDT was a very "gentle" agitation technique. I didn't believe Wet WDT was capable of causing fines migration and clogging.

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">However, after trying it myself, I realized I was completely wrong.</p>

Using a very coarse grind, where the extraction time wouldn't exceed 2 minutes, performing Wet WDT during the bloom phase can easily clog the filter paper, extending the extraction time to nearly 10 minutes. This shows that Wet WDT is actually the opposite of the "gentle" technique I had imagined. It causes very intense agitation, and while it increases extraction yield, it also accelerates fines migration as a side effect (although in Rohan's parameters, this is an expected outcome, not a side effect). In this respect, it is no different from other agitation techniques.

This made me reconsider the conclusions of the Barista Hustle article. Since I confirmed that Wet WDT significantly accelerates fines migration and is far from the "gentle" method claimed in the original article, could it be that Wet WDT is not as "magical" as it seems? The way Wet WDT increases both brew time and extraction yield may not be fundamentally different from other agitation techniques.

### Experimental Concept

What I want to find out is: How much of the increase in extraction yield from Wet WDT during the bloom phase is directly due to it, and how much is just a result of the extended total brew time?

Let's say I have two brews with all parameters, including total brew time, being the same, except that one uses Wet WDT during the bloom phase and the other does not. The answer would be clear; I would just need to measure the extraction yield of both brews.

Unfortunately, this assumption is unrealistic because, as seen in the Barista Hustle experiment, brews with Wet WDT will have longer brew times. To extend the brew time of the control group, I would have to grind finer, and finer grinds would lead to higher extraction yields. Therefore, I wouldn't be able to determine the true impact of Wet WDT on extraction yield.

In other words, I need to change the flow rate without altering any other factors, and then it hit me—I have just the right equipment for this!

Yes, I'm talking about the Pulsar brewer.

### Experimental Procedure

In other words, I just need to use the Pulsar's valve to control the flow rate, reducing the flow rate of the control group without Wet WDT to match that of the experimental group with Wet WDT.

This idea is quite simple but not very practical because adjusting to exactly the same total brew time is too difficult. Therefore, I decided to have both the experimental and control groups undergo multiple extractions with different valve openings and then use curve fitting to predict the extraction yield for each group at various total brew times.

#### Grouping

Due to the complexity of this experiment, I first conducted a simple preliminary experiment to ensure that the chosen parameters were sufficiently stable and representative. The main differences between the preliminary and main experiments are the grouping methods and the number of groups.

##### Preliminary Experiment

Three brews were conducted as follows:

1. Experimental group (Wet WDT, WWDT): Wet WDT during the bloom phase.
2. Control group-fast (Control-fast, CTL-fast): Only shaking (Rao spin) during the bloom phase to evenly mix water and coffee, with the valve fully open.
3. Control group-slow (Control-slow, CTL-slow): Only shaking (Rao spin) during the bloom phase to evenly mix water and coffee, with the valve opened to about the 1 o'clock position.

##### Main Experiment

The main experiment was divided into two major groups, further subdivided into six smaller groups:

1. Experimental group (Wet WDT, WWDT): Wet WDT during the bloom phase.
   - Experimental group-fast (WWDT-fast): Valve fully open.
   - Experimental group-mid (WWDT-mid): Valve opened to about 22.5 degrees.
   - Experimental group-slow (WWDT-slow): Valve opened to about 45 degrees.
2. Control group (Control, CTL): Only shaking (Rao spin) during the bloom phase to evenly mix water and coffee.
   - Control group-fast (CTL-fast): Valve fully open.
   - Control group-mid (CTL-mid): Valve opened to about 22.5 degrees.
   - Control group-slow (CTL-slow): Valve opened to about 45 degrees.

Each group was brewed twice to ensure consistency.

#### Brewing Parameters

The parameters used here are adapted from PocketScienceCoffee's article [How to brew with Pulsar (coming from V60)].
- Coffee-to-water ratio: 20g of coffee to 360g of water (1:18)
- Water temperature: 100°C
- Water quality: pure water
  - After brewing, re-mineralize the water to approximately 30GH and 15KH, with equal parts of Ca<sup>2+</sup> and Mg<sup>2+</sup>.
- Grind size: burr gap set to 500 µm from lock (equivalent to #6.4 on my Lagom P100, which has a chirp to lock distance of about 20 µm)

#### Detailed Brewing Steps

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
10.  At 1:00, quickly pour up to 230g at about 8–10 ml/s, then perform a swirl.
11.  Open the valve to the set direction.
12.  When the water level reaches the 100 ml mark on the side of the Pulsar, close the valve and pour water to 360 g at about 8–10 ml/s, then perform another swirl.
13.  Open the valve to the set direction, wait for the water to fully drain, record the TBT, and take a sample for measuring the TDS and extraction yield.

### Preliminary Experiment

#### Experimental Results

I recorded the total brewing time and extraction yield of the three brews in the preliminary experiment in Table 1 and plotted them in Figure 1.

| Preliminary Experiment Results  | WWDT   | CTL-fast | CTL-slow |
| ------------ | ----------------- | ----------------- | ----------------- |
| Total Brewing Time (TBT) (s) | 263    | 187      | 269      |
| Extraction Yield (EY) (%) | 21.30% | 20.65%   | 21.52%   |
| Notes | noticeably more astringent |  |  |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 1: Total brewing time and extraction yield of the three brews in the preliminary experiment</span>
    </div>
</div>

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 1: Scatter plot of total brewing time and extraction yield in the preliminary experiment</span>
    </div>
</div>

Observing Table 1 and Figure 1, we can see:

1. Both WWDT and CTL-fast had the valve fully open during brewing, but WWDT had a significantly longer total brewing time, confirming the earlier statement that WWDT accelerates fines migration.
2. WWDT and CTL-slow had similar total brewing times and extraction yields.

#### Discussion

The extraction yields of WWDT and CTL-slow are what we aim to compare in this experiment. It can be seen that after eliminating the influence of total brewing time, the extraction yields are similar, indicating that Wet WDT does not improve extraction yield.

For such seemingly counterintuitive results, I propose the following two hypotheses:

- **Hypothesis 1:** Perhaps the effect of Wet WDT on improving extraction yield is purely due to the extended total brewing time and has nothing to do with stirring or helping the coffee and water mix.
- **Hypothesis 2:** Perhaps the stirring and mixing effect of Wet WDT still has the ability to improve extraction yield, but the accelerated fines migration effect of Wet WDT results in poor subsequent extraction conditions, such as channeling in the coffee bed, which reduces the extraction yield. This back-and-forth effect cancels out, resulting in similar extraction yields.

Hypothesis 1 is more intuitive, while Hypothesis 2 is proposed because the brew with Wet WDT had a noticeably more astringent taste compared to the other two cups. I believe this might be due to the reduced filtering capacity of the coffee bed after channeling, allowing larger molecules that cause astringency to pass through the coffee bed and into the coffee liquid.

I will look for more clues to confirm or refute these two hypotheses in the main experiment.

### Main Experiment

#### Experimental Results

I recorded the total brewing time and extraction yield of the 12 brews in the main experiment and plotted them in Figure 2. The raw data can be found [here](https://docs.google.com/spreadsheets/d/1mynPFElhgOCA7uGLETg_qh0JQ5UOTXj3xD7DsgH5ZcE/edit?usp=sharing).

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 2: Scatter plot of total brewing time and extraction yield in the main experiment</span>
    </div>
</div>

From Figure 2, we can see that as the brewing time increases, the extraction yield also tends to rise. Flavor-wise, I noticed that the groups with Wet WDT generally had higher astringency. Whether or not Wet WDT was used, the sweetness and mouthfeel of the coffee improved with longer brewing times. Of all the brews, I found the flavor of CTL-slow to be the best. (Note: The above flavor descriptions were not blind-tested and are for reference only.)

Additionally, except for the fast group, the other four groups showed very similar total brewing times and extraction yields in their repeated brews, indicating stable brewing.

When the valve is smaller, the flow rate becomes more sensitive to the valve angle. However, since the Pulsar valve lacks a scale, I suspect the instability in the fast group is due to not controlling the valve at exactly the same angle during operation.

With these data, we can begin analyzing the question we posed before the experiment: "What proportion of the extraction yield increase from Wet WDT is directly related to it, and how much is just the effect of the extended total brewing time (TBT)?" We will discuss this in detail in the next section.

#### Discussion

After completing the main experiment, we obtained the relationship between total brewing time (TBT) and extraction yield (EY) for six brews each with and without Wet WDT. Let's hypothesize what the theoretical relationship between TBT and EY might be.

First, let's make the following assumptions:

1. The maximum extraction yield is $$ {\text{EY}}_{\text{max}} $$, which varies with different coffees, grind sizes, and methods, but we generally believe it to be less than 30%.
2. At any given time, the water extracting the coffee is completely clean (concentration of 0), which is not realistic since the water in the dripper during brewing is usually not clear, meaning we are extracting coffee with coffee. However, for simplicity, we will assume this here.
3. At any given time $t$, the extraction yield $r(t)$ is proportional to the concentration difference between the coffee and water. Since we assume the water concentration is 0 in assumption 2, the concentration difference is the proportion of extractable substances remaining in the coffee, which is $$ (\text{EY}_{\text{max}} - \text{EY}(t)) $$, meaning $$ r(t) \propto (\text{EY}_{\text{max}} - \text{EYt)) $$.

Based on assumption 3, we can assume $$ r(t) = k(\text{EY}_{\text{max}} - \text{EY}(t)) $$, and by definition $$ \text{EY}(t) = \int_0^t r(\tau) \, d\tau $$, we can solve for:

$$ \text{EY}(t) = \text{EY}_{\text{max}}\left(1 - e^{-kt}\right) $$

Therefore, we will use this theoretical model of TBT and EY to fit the data for both the Wet WDT and non-Wet WDT groups and calculate their respective $$ \text{EY}_{\text{max}} $$ and $k$ values.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 3: Scatter plot of data and fitted theoretical curves for the experimental and control groups in the main experiment</span>
    </div>
</div>

It can be observed that the two curves are very similar. In Table 2, I have listed the constants $$ \text{EY}_{\text{max}} $$ and $k$ for the fitted theoretical curves of both groups, along with the $$ p \text{-value} $$ obtained from the Student's t-test.

| Constants of Fitted Curves  | WWDT   | CTL | $$ p \text{-value} $$ |
| ------------ | ----------------- | ----------------- | ----------------- |
| $k$ | 0.0116    | 0.0118      | 0.481      |
| $$ \text{EY}_{\text{max}} $$ | 23.08% | 23.06%   | 0.807   |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 2: Constants of the fitted theoretical curves and their $p \text{-value}$ for the experimental and control groups in the main experiment</span>
    </div>
</div>

It can be seen that if we use the conventional standard of $$ p \text{-value} < 0.05 $$ to determine significance, there is no significant difference between the fitted theoretical curves for both $$ \text{EY}_{\text{max}} $$ and $k$. This indicates that the presence or absence of Wet WDT does not significantly affect the relationship between TBT and EY. In other words, considering only the extraction yield, performing Wet WDT and simply closing the valve slightly to achieve a longer total brewing time does not make a significant difference.

In both the preliminary and main experiments, I consistently observed that Wet WDT resulted in a more pronounced astringency. If this observation holds true (which requires more blind tests to confirm), then perhaps we should avoid using Wet WDT when the filter cup allows for adjustable flow rates.

Overall, the main experiment and the preliminary experiment produced similar results:

1. Data-wise, whether Wet WDT is performed or not does not affect the relationship between extraction yield and total brewing time. In other words, when the total brewing time is the same, performing Wet WDT does not affect the extraction yield.
2. Flavor-wise, the groups that performed Wet WDT generally had a more astringent taste.

The two hypotheses I proposed in the preliminary experiment were not refuted:

- **Hypothesis 1:** Perhaps the effect of Wet WDT on increasing the extraction yield is purely due to the extended total brewing time and has nothing to do with stirring or aiding the mixing of coffee and water.
- **Hypothesis 2:** Perhaps the stirring and mixing effect of Wet WDT still has the potential to increase the extraction yield, but the accelerated fines migration caused by Wet WDT results in poor extraction conditions later on, such as the formation of channels in the coffee bed, which in turn decreases the extraction yield. This effect might just cancel out.

These experimental results clearly indicate that Wet WDT is not "magical" and might even be considered unimpressive. However, whether this conclusion applies universally requires further investigation. For example, in this experiment, we used an immersion method with three times the weight of the coffee grounds for pre-infusion, ensuring there was plenty of water. But when using less water, would simple shaking be insufficient to fully mix the grounds and water? In such cases, would Wet WDT be more effective? This is quite possible.

### Conclusion

After Barista Hustle published an article claiming that Wet WDT could significantly increase the extraction yield of brewing, Wet WDT gained popularity. However, its increase in extraction yield also extends the total brewing time, leading me to suspect that the increased extraction yield might not be directly related to Wet WDT itself, but rather a result of the extended total brewing time due to the increased agitation accelerating fines migration.

This article uses the Pulsar's ability to control flow rate via a valve to try to answer the question: "How much of the increased extraction yield from Wet WDT is directly related to it, and how much is merely a result of the extended total brewing time?" According to the experimental results, we found that Wet WDT does not significantly alter the relationship between total brewing time and extraction yield. In other words, when the total brewing time is the same, performing Wet WDT does not significantly affect the extraction yield.

Moreover, Wet WDT generally resulted in higher astringency when used with the Pulsar, leading me to believe that when the flow rate of the filter cup is controllable, we should avoid using Wet WDT and instead achieve the desired extraction yield by simply adjusting the valve size.