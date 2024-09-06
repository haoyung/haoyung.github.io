---
layout: post
title: "Wet WDT: A Re-Evaluation"
description: "Wet WDT—claimed to boost not only extraction but also flavor, really that magical?"
tag: [experiment, pourover]
category: articles
imgfolder: WWDT
image: /assets/img/WWDT/wwdt_cover.webp
image_orientation: horizontal
image_caption: "Performing Wet WDT when brewing Pulsar"
language_reference: wwdt
usemathjax: true
redirect_from:
  - /en/articles/Wet-WDT-What's-the-Buzz
  - /en/articles/Wet-WDT-What‘s-the-Buzz
  - /en/articles/Wet-WDT-What’s-the-Buzz
---

### Introduction

Wet WDT, popularized by the notable [Barista Hustle blog post](https://www.baristahustle.com/blog/Wet-weiss-distribution/) two years ago (though Lance Hedrick was experimenting with it even earlier), is said to enhance coffee brewing and increase extraction yield. However, I found the conclusions in Barista Hustle's post somewhat premature and occasionally contradictory to my own experiences. Thus, I decided to re-evaluate Wet WDT’s effects on brewing, leading to some surprising insights: we may want to avoid Wet WDT—at least under specific conditions.

As always, the experimental data is [open-source](https://docs.google.com/spreadsheets/d/1mynPFElhgOCA7uGLETg_qh0JQ5UOTXj3xD7DsgH5ZcE/edit?usp=sharing). Feel free to use it, and please share any findings with me!

### What is Wet WDT (WWDT)?

Before diving into Wet WDT, let's recap WDT. WDT stands for Weiss Distribution Technique, introduced by John Weiss in 2005. It has become a common method for evenly distributing coffee grounds.

WDT involves using needle-like tools to stir the coffee grounds, breaking up clumps and ensuring uniform distribution. Though it started for espresso, it's now used for leveling grounds in a pour-over dripper, making the coffee bed fluffier and aiding in the bloom phase.

As WDT gained popularity, it naturally adapted to more scenarios. Wet WDT, as the name suggests, is a "wet" variant of WDT. This involves using WDT tools to stir the coffee grounds halfway through the pour-over, typically during the bloom phase. However, be cautious—it can easily clog the filter paper!

### Barista Hustle's Blog Post

Wet WDT caught on in the latter half of 2022, mainly due to [this blog post](https://www.baristahustle.com/blog/Wet-weiss-distribution/) by Barista Hustle. They conducted an experiment using Tricolate, brewing ten cups of coffee—five with the usual method and five with Wet WDT during the bloom phase.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/BH_result.webp" alt="" class="img-fluid">
        <span class="image-span">Barista Hustle's experimental data</span>
    </div>
</div>

They found that Wet WDT increased the average total brew time (TBT) from 266 to 334 seconds and the average extraction yield (EY) from 21.66% to 23.33%—an increase of 1.67%.

You might wonder, as I did, **how much of this increase in extraction yield is related to the extended brew time?** Any agitation technique, including Wet WDT, is likely to increase both brew time and yield. That's because agitation speeds up fines migration, causing filter clogging, which slows down the flow rate and naturally leads to a higher extraction yield due to longer contact time between coffee and water.

Barista Hustle concluded (for details, please refer to the original article):

1. The increase in extraction yield from Wet WDT is not solely due to the extended brew time.
2. Compared to other agitation techniques like stirring, Wet WDT is less likely to cause clogging.

From these conclusions, Wet WDT seems almost magical. Not only does it gently agitate and increase extraction yield, but it also avoids clogging. After reading this article, like many coffee enthusiasts worldwide, I couldn't help but feel the urge to stir with a WDT tool during the bloom.

But is Wet WDT really that magical? Some subsequent events made me doubtful, motivating me to write this article. I aimed to answer the question I had when I first read Barista Hustle's article:

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">How much of the increase in extraction yield from Wet WDT is directly related to it, and how much is simply due to the extended brew time?</p>

### Wet WDT and Agitation

Barista Hustle claims that Wet WDT is less likely to cause clogging compared to other agitation techniques. This led me to believe that Wet WDT is fundamentally different. But is it?

The first thing that made me doubt was [Rohan (PocketScienceCoffee)](https://www.instagram.com/pocketsciencecoffee/)'s article [Wet-WDT (WWDT) for Coarse-grind Percolation](https://pocketsciencecoffee.com/2022/11/10/Wet-wdt-wwdt-for-coarse-grind-percolation/). In short, Rohan likes the flavor separation of extremely coarse grinds, but overly coarse grinds result in too fast a flow rate and too short a brew time, leading to low extraction yield. To increase the extraction yield, Rohan uses Wet WDT to induce fines migration, clogging the filter paper and significantly extending the brew time.

When I first read this article, I was skeptical because I thought Wet WDT was a "gentle" technique incapable of causing fines migration and clogging.

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">However, after trying it myself, I realized I was completely wrong.</p>

Using a very coarse grind where the total brew yield wouldn't exceed 2 minutes, performing Wet WDT during the bloom phase can easily clog the filter paper, extending the total brew yield to nearly 10 minutes. This shows that Wet WDT is actually the opposite of the "gentle" technique I had imagined. It causes very intense agitation, and while it increases extraction yield, it also accelerates fines migration as a side effect (although in Rohan's parameters, this is expected). In this respect, it is no different from other agitation techniques.

This made me reconsider the conclusions of Barista Hustle's article. Since I confirmed that Wet WDT significantly accelerates fines migration and is far from the "gentle" method claimed in the original article, could it be that Wet WDT is not as "magical" as it seems? The way Wet WDT increases both brew time and extraction yield may not be fundamentally different from other agitation techniques.

### Experimental Concept

My goal was to determine: How much of the increase in extraction yield from Wet WDT during the bloom phase is due to Wet WDT itself, and how much is just a result of the extended brew time?

Let's say I have two brews with all parameters being the same, including total brew time, except that one performed Wet WDT during the bloom phase and the other did not. The answer would be clear; I would just need to measure the extraction yield of both brews.

Unfortunately, this assumption is unrealistic because, as seen in Barista Hustle's experiment, brews with Wet WDT will have longer brew times. To extend the brew time of the brew without Wet WDT, I would have to grind finer, and finer grinds would lead to higher extraction yields. Therefore, I wouldn't be able to determine the true impact of Wet WDT on extraction yield.

In other words, I need to change the flow rate without altering any other factors, and then it hit me—I have just the right equipment for this!

Yes, I'm talking about the Pulsar.

### Experimental Procedure

By using the Pulsar's valve to control the flow rate, I could reduce the flow rate of the brew without Wet WDT to match that of the brew with Wet WDT.

This idea is quite simple but not very practical because adjusting to the exact same total brew time is difficult. Therefore, I decided to brew with and without Wet WDT using different valve settings and then use curve fitting to predict the extraction yield for each group at various total brew times.

#### Grouping

Due to the complexity of this experiment, I first conducted a simple preliminary experiment to ensure the chosen parameters were stable and representative. The main differences between the preliminary and main experiments were the grouping methods and the number of groups.

##### Preliminary Experiment

Three brews were conducted:

1. Experimental group (Wet WDT, WWDT): Wet WDT during the bloom phase.
2. Control group-fast (Control-fast, CTL-fast): Only swirling during the bloom phase to evenly mix water and coffee, with the valve fully open.
3. Control group-slow (Control-slow, CTL-slow): Only swirling during the bloom phase to evenly mix water and coffee, with the valve opened to about 22.5 degrees.

##### Main Experiment

The main experiment was divided into two major groups, each subdivided into three smaller groups:

1. Experimental group (Wet WDT, WWDT): Wet WDT during the bloom phase.
   - Experimental group-fast (WWDT-fast): Valve fully open.
   - Experimental group-mid (WWDT-mid): Valve opened to about 22.5 degrees.
   - Experimental group-slow (WWDT-slow): Valve opened to about 45 degrees.
2. Control group (Control, CTL): Only swirling during the bloom phase to evenly mix water and coffee.
   - Control group-fast (CTL-fast): Valve fully open.
   - Control group-mid (CTL-mid): Valve opened to about 22.5 degrees.
   - Control group-slow (CTL-slow): Valve opened to about 45 degrees.

Each group was brewed twice to ensure consistency.

#### Brewing Parameters

The parameters used here are adapted from PocketScienceCoffee's article [How to brew with Pulsar (coming from V60)](https://pocketsciencecoffee.com/2023/10/01/how-to-brew-on-pulsar-coming-from-v60/). The coffees brewed in the preliminary and main experiments are SEY's [Worka Chelbessa](https://www.seycoffee.com/products/2024-worka-chelbessa-lot-10-ethiopia) and [Heza](https://www.seycoffee.com/products/2024-heza-nkonge-hill-reserve-lot-2-burundi)—one of the best Burundi this season, respectively.

- Coffee-to-water ratio: 20g of coffee to 360g of water (1:18)
- Water temperature: 100°C
- Water quality: distilled water
  - After brewing, re-mineralize the water to approximately 30GH and 15KH, with equal concentration of Ca<sup>2+</sup> and Mg<sup>2+</sup>.
- Grind size: burr gap set to 500 µm from lock (equivalent to #6.4 on my Lagom P100, which has a chirp to lock distance of about 20 µm)

#### Detailed Brewing Steps

1. Separate the Pulsar's wall and base.
2. Close the valve, pour a small amount of hot water into the base, just enough to submerge the ribs at the bottom.
3. Place the filter paper inside; it will float on the water.
4. Open the valve; the filter paper will adhere neatly to the bottom.
   - This ensures no air bubbles are trapped between the valve and filter paper, allowing for smoother water flow.
5. Install the wall onto the base and close the valve.
6. Measure 20 g of coffee, grind, and pour into the filter, leveling the grounds (a WDT tool is recommended).
7. (With the valve closed) Place the disperser on top, pour in 60g of water.
8. Each group uses a different method during the bloom:
   - Wet WDT: Use a WDT tool (I used Barista Hustle Tools' [the Comb](https://baristahustletools.com/products/the-comb)) for a more aggressive deep Wet WDT, stirring deep into the coffee bed, as demonstrated in the video below.
   - Control: Perform two swirls for both clockwise and counterclockwise to ensure all grounds contact the water.
9. At 0:30, fully open the valve to drain the water.
10. At 0:50, close the valve.
11. At 1:00, quickly pour up to 230g at about 8–10 ml/s, then perform a swirl.
12. Open the valve to the set direction.
13. When the water level reaches the 100 ml mark on the side of the Pulsar, close the valve and pour water to 360 g at about 8–10 ml/s, then perform another swirl.
14. Open the valve to the set direction, wait for the water to fully drain, record the total brew time, and take a sample for measuring the TDS and extraction yield.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
            <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/T-HagoE0mbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <span class="image-span">Wet WDT Demonstration</span>
    </div>
</div>

### Preliminary Experiment

#### Experimental Results

I recorded the total brew time (TBT) and extraction yield (EY) for the three brews in the preliminary experiment, as shown in Table 1 and Figure 1.

| Preliminary Exp. | WWDT   | CTL-fast | CTL-slow |
| ------------ | ----------------- | ----------------- | ----------------- |
| TBT (s) | 263    | 187      | 269      |
| EY (%) | 21.30% | 20.65%   | 21.52%   |
| Notes | Noticeably more astringent |  |  |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 1: Total brew time and extraction yield of the three brews in the preliminary experiment</span>
    </div>
</div>

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 1: Scatter plot of total brew time and extraction yield in the preliminary experiment</span>
    </div>
</div>

Observing Table 1 and Figure 1, we can see:

1. Both WWDT and CTL-fast had the valve fully open during brewing, but WWDT had a significantly longer total brew time, confirming that Wet WDT accelerates fines migration.
2. WWDT and CTL-slow had similar total brew times and extraction yields.

#### Discussion

The extraction yields of WWDT and CTL-slow are what we aim to compare in this experiment. It can be seen that after eliminating the influence of total brew time, the extraction yields are similar, indicating that Wet WDT does not improve extraction yield.

For such seemingly counterintuitive results, I propose two hypotheses:

- **Hypothesis 1:** The effect of Wet WDT on improving extraction yield is purely due to the extended total brew time and has nothing to do with stirring or helping the coffee and water mix.
- **Hypothesis 2:** The stirring and mixing effect of Wet WDT still improves extraction yield, but the accelerated fines migration results in poor subsequent extraction conditions. For example, channels may form in the coffee bed, or a more clogged filter paper might increase the ratio of bypass water<sup class="footnote-sup">[A]</sup>, resulting in a decrease in extraction yields. This back-and-forth effect cancels out, resulting in similar extraction yields.

Hypothesis 1 is more intuitive, while Hypothesis 2 arises from the observation that the brew made with Wet WDT had a noticeably more astringent taste compared to the other two cups. I suspect this could be due to a reduced filtering capacity of the coffee bed after channeling, or possibly because some bypass water entered the cup without being filtered by the coffee bed, both of which might allow larger, astringency-causing molecules to pass through.

I will look for more clues to confirm or refute these hypotheses in the main experiment.

<div class="footnote">
  <div class="footnote-label">[A]</div>
  <div class="footnote-content">Theoretically, the cylindrical Pulsar is a filter cup without bypass, but could there still be some bypass at the edges of the coffee bed?</div>
</div>

### Main Experiment

#### Experimental Results

I recorded the total brew time and extraction yield of the 12 brews in the main experiment and plotted them in Figure 2. The raw data can be found [here](https://docs.google.com/spreadsheets/d/1mynPFElhgOCA7uGLETg_qh0JQ5UOTXj3xD7DsgH5ZcE/edit?usp=sharing).

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 2: Scatter plot of total brew time and extraction yield in the main experiment</span>
    </div>
</div>

From Figure 2, we can see that as brewing time increases, extraction yield also tends to rise. Flavor-wise, I noticed that the groups with Wet WDT generally had higher astringency. Additionally, whether or not Wet WDT was used, the sweetness and mouthfeel of the coffee improved with longer brewing times. Of all the brews, I found CTL-slow to have the best flavor. (Note: These flavor descriptions were not blind-tested and are for reference only.)

Except for the slow groups (WWDT-slow and CTL-slow), the other four groups showed very similar total brew times and extraction yields in their repeated brews, indicating stable brewing.

When the valve is smaller, the flow rate becomes more sensitive to the valve angle. However, since the Pulsar valve lacks a scale, I suspect the instability in the slow groups (WWDT-slow and CTL-slow) is due to not controlling the valve at exactly the same angle during operation.

With these data, we can begin addressing our question: "What proportion of the extraction yield increase from Wet WDT is directly related to it, and how much is simply due to the extended brew time?" We will discuss this in detail in the discussion section.

#### Discussion

After completing the main experiment, we obtained the relationship between total brew time (TBT) and extraction yield (EY) for six brews each with and without Wet WDT. Let's hypothesize what the theoretical relationship between TBT and EY might be.

First, let's make the following assumptions:

1. The maximum EY, the “asymptotic” value of EY the brew approaches if it's long enough, is $$ \text{EY}_{\text{max}} $$, which varies with different coffees, grind sizes, and methods, but we generally believe it to be less than 30%<sup class="footnote-sup">[B]</sup>.
    <div class="footnote">
    <div class="footnote-label">[B]</div>
    <div class="footnote-content">According to Rohan's <a href="https://docs.google.com/spreadsheets/d/1ACJnczVXw5qEg98v6UfmGlW94PU-SdXuaUCUCt9qf50/edit?gid=0#gid=0">experimental data</a>, this number is closer to 26% for light roasts with sufficiently fine grinds.</div>
    </div>
2. At any given time, the water extracting the coffee is completely clean (concentration of 0), which is not realistic since the water in the dripper during brewing is usually not clear, meaning we are essentially extracting coffee with coffee. However, for simplicity, we will assume this here.
3. At any given time $t$, the speed of extraction $r(t)$ is proportional to the concentration difference between the coffee and water. Since we assume the water concentration is 0 in assumption 2, the concentration difference is the proportion of extractable substances remaining in the coffee, which is $$ (\text{EY}_{\text{max}} - \text{EY}(t)) $$, meaning $$ r(t) \propto (\text{EY}_{\text{max}} - \text{EY}(t)) $$.

Based on assumption 3, we can assume $$ r(t) = k(\text{EY}_{\text{max}} - \text{EY}(t)) $$, and by definition $$ \text{EY}(t) = \int_0^t r(\tau) \, d\tau $$, we can solve for:

$$ \text{EY}(t) = \text{EY}_{\text{max}}\left(1 - e^{-kt}\right) $$

Therefore, we will use this theoretical model of TBT and EY to fit the data for both the Wet WDT and non-Wet WDT groups and calculate their respective values of $$ \text{EY}_{\text{max}} $$ and $k$.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 3: Scatter plot of data and fitted theoretical curves for the experimental and control groups in the main experiment</span>
    </div>
</div>

It can be observed that the two curves are very similar. In Table 2, I have listed the constants $$ \text{EY}_{\text{max}} $$ and $k$ for the fitted theoretical curves of both groups, along with their $$ p \text{-value} $$ obtained from the Student's t-test.

| Constants of Fitted Curves  | WWDT   | CTL | $$ p \text{-value} $$ |
| ------------ | ----------------- | ----------------- | ----------------- |
| $k$ | 0.0116    | 0.0118      | 0.481      |
| $$ \text{EY}_{\text{max}} $$ | 23.08% | 23.06%   | 0.807   |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 2: Constants of the fitted theoretical curves and their $p \text{-value}$ for the experimental and control groups in the main experiment</span>
    </div>
</div>

While searching for references, I found that Michael from [quantitativecafé](https://quantitativecafe.com/) used a very similar extraction model in his article, [A Simple Model of Extraction](https://quantitativecafe.com/2022/02/26/a-simple-model-of-extraction/). With his help, I used the Markov chain Monte Carlo method (MCMC)<sup class="footnote-sup">[C]</sup> he employed to calculate the 95% confidence intervals for the two fitted curves through sampling, which are plotted in Figure 4.

<div class="footnote">
  <div class="footnote-label">[C]</div>
  <div class="footnote-content">For more detailed methods, please refer to the <a href="https://quantitativecafe.com/2022/02/26/a-simple-model-of-extraction/">Error analysis chapter in the original article</a> and another article recommended by Michael, <a href="http://jakevdp.github.io/blog/2014/03/11/frequentism-and-bayesianism-a-practical-intro/">written by Jake VanderPlas</a>.</div>
</div>

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig4.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 4: Scatter plot of experimental and control group data, fitted theoretical curves, and their 95% confidence intervals</span>
    </div>
</div>

It can be observed that if we use the conventional criterion of $$ p \text{-value} < 0.05 $$ for significance, then there is no significant difference between the two fitted theoretical curves regarding $$ \text{EY}_{\text{max}} $$ and $k$. This indicates that whether Wet WDT is performed or not does not significantly affect the relationship between TBT and EY. In other words, considering only the extraction yield, performing Wet WDT and simply closing the valve slightly to achieve a longer total brewing time do not result in significant differences. Observing the 95% confidence intervals of the two curves reveals that these intervals almost completely overlap.

In both the preliminary and main experiments, I consistently observed that Wet WDT resulted in a more pronounced astringency. If this observation holds true (which requires more blind tests to confirm), then perhaps we should avoid using Wet WDT when the dripper allows for adjustable flow rates since we can simply turn down the valve for the longer total brew time and a higher extraction yield.

Overall, the main experiment and the preliminary experiment produced similar results:

1. Data-wise, whether Wet WDT is performed or not does not affect the relationship between extraction yield and total brew time. In other words, when the total brew time is the same, performing Wet WDT does not affect the extraction yield.
2. Flavor-wise, the groups that performed Wet WDT generally had a more astringent taste.

The two hypotheses I proposed in the preliminary experiment were not refuted in the main experiment:

- **Hypothesis 1:** The effect of Wet WDT on improving extraction yield is purely due to the extended total brew time and has nothing to do with stirring or helping the coffee and water mix.
- **Hypothesis 2:** The stirring and mixing effect of Wet WDT still have the potential to increase the extraction yield, but the accelerated fines migration caused by Wet WDT results in poor extraction conditions later on, such as the formation of channels in the coffee bed or an increased ratio of bypass water, which in turn decreases the extraction yield. These effects might just cancel each other out.

These experimental results clearly indicate that Wet WDT is not "magical" and might even be considered unimpressive. However, whether this conclusion applies universally requires further investigation. For example, in this experiment, we performed an immersion-style bloom with three times the weight of the coffee grounds, ensuring there was plenty of water. But when using less water, would simple swirling be insufficient to fully mix the grounds and water? In such cases, would Wet WDT be more effective? This is quite possible. Additionally, the Wet WDT in this experiment was similar to the method used by Barista Hustle, involving vigorous stirring. Perhaps a super gentler Wet WDT could effectively mix the coffee and water without significantly increasing fines migration, leading to a more even extraction.

### Conclusion

After Barista Hustle published an article claiming that Wet WDT could significantly increase the extraction yield of brewing, Wet WDT quickly gained popularity. However, it also extends the total brew time, leading me to suspect that the increased extraction yield might not be directly related to Wet WDT itself, but rather a result of the extended total brew time due to the increased agitation accelerating fines migration.

This article uses the Pulsar's ability to control flow rate via the valve to answer the question: "How much of the increased extraction yield from Wet WDT is directly related to it, and how much is merely a result of the extended total brew time?" According to the experimental results, we found that Wet WDT does not significantly alter the relationship between total brew time and extraction yield. In other words, when the total brew time is the same, performing Wet WDT does not significantly affect the extraction yield.

Moreover, Wet WDT generally resulted in higher astringency when used with the Pulsar, leading me to believe that when the flow rate of the dripper is controllable, we should avoid using Wet WDT and instead achieve the desired extraction yield by simply adjusting the valve<sup class="footnote-sup">[D]</sup>.

<div class="footnote">
  <div class="footnote-label">[D]</div>
  <div class="footnote-content">When shaking is insufficient to fully mix the coffee and water, it may still be necessary to perform Wet WDT to assist with mixing, but it should be done super gently.</div>
</div>

### Acknowledgments

- Thanks to Rohan ([@pocketsciencecoffee](https://www.instagram.com/pocketsciencecoffee/)) for providing very detailed feedback on this article, which greatly improved it.
- Thanks to Michael ([@quantitativecafe](https://www.instagram.com/quantitativecafe)) for offering extensive assistance with error analysis.