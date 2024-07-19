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

In this article, I conducted an experiment to delve into the effects of Wet WDT on brewing and reached a rather counterintuitive conclusion: under the specific conditions of this experiment, it might be better to avoid using Wet WDT. As always, the experimental data is [completely open-source](https://docs.google.com/spreadsheets/d/1mynPFElhgOCA7uGLETg_qh0JQ5UOTXj3xD7DsgH5ZcE/edit?usp=sharing), feel free to use it and share any findings with me!

### What is Wet WDT (WWDT)?

Before introducing Wet WDT, we first need to introduce WDT. WDT, which stands for Weiss Distribution Technique, was proposed by John Weiss in 2005 and has since become a very common method for distributing coffee grounds.

WDT involves using needle-like tools to stir the coffee grounds, removing clumps and making the distribution more uniform. WDT is commonly used in the preparation of espresso pucks, but in recent years it has also been frequently used to level the coffee grounds initially poured into the filter cup for pour-over, making the grounds layer fluffier, which aids in blooming.

As WDT became widely used, naturally, people wanted to extend its use to more scenarios. Wet WDT, as the name implies, is a "wet" version of WDT, meaning using WDT tools to stir during the middle of the pour-over process. Wet WDT is usually done during blooming, but of course, there's no rule against doing it later in the brewing process (be careful though, it can easily clog the filter paper!).

### Barista Hustle's Blog Post

The sudden popularity of Wet WDT in the latter half of 2022 is undoubtedly linked to Barista Hustle's [Blog Post](https://www.baristahustle.com/blog/Wet-weiss-distribution/). In their experiment, they brewed ten cups of coffee using a Tricolate brewer, five with the usual method and the other five with Wet WDT during blooming.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/BH_result.webp" alt="" class="img-fluid">
        <span class="image-span">Barista Hustle's experimental data</span>
    </div>
</div>They found that Wet WDT increased the average extraction time from 266 seconds to 334 seconds, while the average extraction yield rose from 21.66% to 23.33%! That's an increase of 1.67%.

At this point, you might be wondering the same thing I did: **How much of this increase in extraction yield is due to the extended extraction time?** After all, any agitation method, including Wet WDT, is likely to increase both extraction time and yield at the same time. This is because agitation speeds up fines migration (in layman's terms, the settling of fine particles), which clogs the filter paper, slows the flow rate, and naturally results in a higher extraction yield due to the longer extraction time.

After some analysis, Barista Hustle reached the following conclusions (for detailed reasoning, please refer to the original article):

1. The increase in extraction yield from Wet WDT is not solely due to the extended extraction time.
2. Compared to other agitation methods (such as stirring), WDT is less likely to clog the filter paper.

Based on these conclusions, Wet WDT seems almost magical. It is not only a gentler agitation method that is less likely to cause clogging, but it also dramatically boosts the extraction yield. This made me, like millions of coffee enthusiasts worldwide, feel uneasy if I didn't stir with a WDT tool during blooming.

But are these conclusions really that wonderful? Is Wet WDT really that magical? Some subsequent events made me start to doubt, and this doubt is precisely what motivated me to write this article. I wanted to conduct an experiment to explore the question that came to mind when I first read Barista Hustle's article:

<p class="mb-md-5 mb-4 mt-md-5 mt-4 quote">How much of the increase in extraction yield from Wet WDT is directly related to the method itself, and how much is simply due to the extended total brewing time?</p>

### Wet WDT and Extraction Yield

Barista Hustle claims that Wet WDT, compared to other agitation methods, is less likely to clog the filter paper. This led me to believe that Wet WDT fundamentally differs from other agitation methods. But is that really the case?The first thing that made me question this was [Rohan (PocketScienceCoffee)](https://www.instagram.com/pocketsciencecoffee/)'s article [Wet-WDT (WWDT) for Coarse-grind Percolation](https://pocketsciencecoffee.com/2022/11/10/Wet-wdt-wwdt-for-coarse-grind-percolation/). In short, Rohan enjoys the flavor of extremely coarse grinds, but such coarse grinds result in too fast a flow rate and too short an extraction time, leading to a low extraction yield. To increase the extraction yield, Rohan uses Wet WDT to deliberately induce fines migration, causing the filter paper to clog and significantly extending the extraction time.

When I first read this article, I was very skeptical because I had always thought of Wet WDT as a very "gentle" agitation method, and I didn't believe it was suitable for triggering fines migration and clogging.

However, after trying it myself, I realized I was wrong, very wrong.

With extremely coarse grinds that typically wouldn't extract for more than 2 minutes, performing Wet WDT during the bloom phase can easily clog the filter paper, extending the extraction time to nearly 10 minutes. This means that Wet WDT is the exact opposite of the "gentle" method I had imagined; it actually causes very intense agitation. Therefore, while it increases extraction yield, it also accelerates fines migration as a side effect (though in Rohan's parameters, this is an expected outcome), making it no different from other agitation methods.

This led me to reconsider the conclusions of the Barista Hustle article. Since I have confirmed that Wet WDT significantly accelerates fines migration and is far from the "gentle" method described in the original article, could it be that Wet WDT is not as "magical" as it seems? The fact that Wet WDT increases both brew time and extraction yield may not be fundamentally different from other agitation methods.

### Experiment Concept

What I want to find out is: How much of the extraction yield increase from performing Wet WDT during the bloom phase is directly related to it, and how much is simply due to the extended total brew time?Assuming I have two brews with all parameters, including total brew time, being identical, except that one brew uses Wet WDT during blooming while the other does not, then the answer to this question would be clear. I would simply measure the extraction rates of both brews.

Unfortunately, this assumption is unrealistic because, as seen in the experiment conducted in Barista Hustle's article, the brew with Wet WDT will have a longer brew time. To increase the brew time of the control group, I would need to adjust the grind size to be finer, which would also lead to a higher extraction rate, making it impossible to determine the true impact of Wet WDT on extraction rate.

In other words, I need to change the flow rate without altering any other variables. Suddenly, it struck me that I had just the right equipment for this.

That's right, I'm talking about the Pulsar.

### Experimental Procedure

In other words, I can use the Pulsar's valve to control the flow rate, reducing the flow rate of the control group without Wet WDT to match that of the experimental group with Wet WDT.

This idea is quite simple but not very practical, as adjusting to achieve exactly the same total brew time is too difficult. Therefore, I opted for a more feasible approach: conducting multiple extractions with different valve settings for both the experimental and control groups, then using curve fitting to predict the extraction rates for each group at various total brew times.

#### Grouping

Due to the complexity of this experiment, I first conducted a simple preliminary experiment to ensure that the chosen experimental parameters were sufficiently stable and representative. The main difference between the preliminary and main experiments lies in the grouping method and the number of groups conducted.

##### Preliminary Experiment

Three brews were conducted as follows:1. Experimental Group (Wet WDT, WWDT): Conduct Wet WDT during the blooming phase.
2. Control Group - Fast (Control-fast, CTL-fast): During blooming, perform only a Rao spin to mix water and coffee evenly, with the valve fully open.
2. Control Group - Slow (Control-slow, CTL-slow): During blooming, perform only a Rao spin to mix water and coffee evenly, with the valve open to approximately the 1 o'clock position.

##### Main Experiment

The experiment is divided into two main groups, which can be further subdivided into six subgroups:

1. Experimental Group (Wet WDT, WWDT): Conduct Wet WDT during the blooming phase.
   - Experimental Group - Fast (WWDT-fast): Valve fully open.
   - Experimental Group - Medium (WWDT-mid): Valve open to approximately 22.5 degrees.
   - Experimental Group - Slow (WWDT-slow): Valve open to approximately 45 degrees.
2. Control Group (Control, CTL): During blooming, perform only a Rao spin to mix water and coffee evenly.
   - Control Group - Fast (CTL-fast): Valve fully open.
   - Control Group - Medium (CTL-mid): Valve open to approximately 22.5 degrees.
   - Control Group - Slow (CTL-slow): Valve open to approximately 45 degrees.

Each group will undergo two brews to ensure stability.

#### Brewing Parameters

The parameters used here are adapted from the PocketScienceCoffee article [How to brew with Pulsar (coming from V60)](https://pocketsciencecoffee.com/2023/10/01/how-to-brew-on-pulsar-coming-from-v60/).

- Coffee-to-water ratio: 20g:360g (1:18)
- Water temperature: 100°C
- Water quality: Pure water
  - Re-mineralized to approximately 30GH and 15KH after brewing, with Ca<sup>2+</sup> and Mg<sup>2+</sup> in equal parts.
- Grind size: Burr gap set to 500 µm from lock (equivalent to #6.4 on my Lagom P100 with a chirp to lock distance of approximately 20 µm)

#### Detailed Brewing Procedure1. Disassemble the Pulsar's filter cup and base.
2. Close the valve and pour a small amount of hot water into the base, just enough to cover the bottom ribs.
3. Place the filter paper in; it will float on the water.
4. Open the valve so the filter paper adheres neatly to the bottom.
   - This ensures no air bubbles form between the valve and the filter paper, allowing for smoother water flow.
5. Attach the filter cup to the base and close the valve.
6. Weigh 20 g of coffee, grind it, pour it into the filter cup, and level the grounds (a WDT tool is recommended).
7. With the valve closed, place the water distributor and pour 60 g of water quickly.
8. Use different methods for blooming in each group:
   - Wet WDT: Use a WDT tool (I use the Comb from Barista Hustle Tools) to perform deep Wet WDT, stirring to the bottom of the grounds layer. Refer to the video.
   - Control: Perform two clockwise and two counterclockwise Rao Spins.
9. At 0:30, fully open the valve to let the water drain.
10. At 1:00, pour water quickly at a rate of about 8–10 ml/s until it reaches 230 g, then perform one clockwise and one counterclockwise Rao Spin.
11. Open the valve to the preset direction.
12. When the water level reaches the 100 ml mark on the Pulsar, close the valve and pour water at a rate of about 8–10 ml/s until it reaches 360 g, then perform one clockwise and one counterclockwise Rao Spin.
13. Open the valve to the preset direction, let it drain completely, record the total brewing time, and take a sample.

### Preliminary Experiment

#### Experimental Results

I recorded the total brewing time and extraction yield of the three brews in the preliminary experiment in Table 1 and plotted them in Figure 1.

| Preliminary Experiment  | WWDT   | CTL-fast | CTL-slow |
| ------------ | ----------------- | ----------------- | ----------------- |
| Total Brewing Time (TBT) (s) | 263    | 187      | 269      |
| Extraction Yield (EY) (%) | 21.30% | 20.65%   | 21.52%   |
| Notes | Noticeably more astringent |  |  |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 1: Total brewing time and extraction yield of the three brews in the preliminary experiment.</span>
    </div>
</div><div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 1: Scatter plot of total brewing time and extraction yield for the three groups in the preliminary test</span>
    </div>
</div>

Looking at Table 1 and Figure 1, we can see:

1. Both WWDT and CTL-fast had fully open valves during brewing, but WWDT's total brewing time was significantly longer, confirming the earlier statement that WWDT speeds up fines migration.
2. WWDT and CTL-slow had similar total brewing times, and their extraction yields were close too.

#### Discussion

In this experiment, we want to compare the extraction yields of WWDT and CTL-slow. It can be seen that after eliminating the influence of total brewing time, the extraction yields are similar, indicating that Wet WDT does not improve extraction yield.

For this seemingly counterintuitive result, I propose the following two hypotheses:

- **Hypothesis 1:** Maybe Wet WDT's effect on improving extraction yield is just due to the longer brewing time and has nothing to do with stirring or helping the coffee and water mix.
- **Hypothesis 2:** Maybe the stirring and mixing effect of Wet WDT does help improve extraction yield, but the faster fines migration caused by Wet WDT leads to poor extraction conditions later, like channeling in the coffee bed, which reduces the extraction yield. This back-and-forth effect ends up giving similar extraction yields.

Hypothesis 1 is more intuitive, while Hypothesis 2 comes from the fact that the brew with WWDT had more noticeable astringency compared to the other two cups. I think this might be due to the channeling effect reducing the coffee bed's filtering ability, letting larger molecules that cause astringency pass into the coffee.

I'll look for more clues to confirm or refute these two hypotheses in the main experiment.

### Main Test

#### Experimental ResultsI plotted the total brewing time and extraction yield for the 12 brews from the main experiment in Figure 2. For the raw data, please refer to [this link](https://docs.google.com/spreadsheets/d/1mynPFElhgOCA7uGLETg_qh0JQ5UOTXj3xD7DsgH5ZcE/edit?usp=sharing).

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 2: Scatter plot of total brewing time and extraction yield in the main experiment</span>
    </div>
</div>

From Figure 2, we can see that as brewing time increases, extraction yield also trends upward. In terms of flavor, I found that the groups using Wet WDT generally had higher astringency. Regardless of whether Wet WDT was used, as total brewing time increased, the sweetness and body of the coffee improved. Among all the brews, I found the flavor of the CTL-slow group to be the best. (These flavor descriptions have not been blind-tested and are for reference only.)

Additionally, except for the fast group, the repeated brews in the other four groups had very similar total brewing times and extraction yields, indicating consistent brewing.

When the valve is more closed, the flow rate is more sensitive to the valve angle, but the Pulsar valve lacks a scale. Therefore, I suspect the relative instability of the fast group is due to not controlling the valve at exactly the same angle during operation.

With these data, we can begin to analyze the question we posed before the experiment: "After accounting for the effect of increased TBT, what proportion of the extraction yield improvement is directly related to Wet WDT?" We will discuss this in detail in the next section.

#### Discussion

After completing the main experiment, we obtained the relationship between total brewing time (TBT) and extraction yield (EY) for both the Wet WDT and non-Wet WDT groups. Now, let's hypothesize what the theoretical relationship between TBT and EY might be.

First, let's make the following assumptions:1. The maximum extraction yield, $$ {\text{EY}}_{\text{max}} $$, varies depending on the type of coffee, grind size, and brewing methods, but generally, it is believed to be less than 30%.
2. At any given time, the water extracting the coffee is assumed to be completely clean (with a concentration of 0), which does not actually reflect reality. For example, during a pour-over, the water in the dripper is usually not clear, meaning we are essentially using coffee to extract coffee. However, for simplicity, we will make this assumption here.
3. At any given time $t$, the extraction rate $r(t)$ is proportional to the concentration difference between the coffee and the water. Since we assume the water concentration is 0 as stated in point 2, the concentration difference is the proportion of extractable substances remaining in the coffee, which is $$ (\text{EY}_{\text{max}} - \text{EY}(t)) $$, thus $$ r(t) \propto (\text{EY}_{\text{max}} - \text{EY}(t)) $$.

Based on point 3, we can assume $$ r(t) = k(\text{EY}_{\text{max}} - \text{EY}(t)) $$, and by definition $$ \text{EY}(t) = \int_0^t r(\tau) \, d\tau $$, we can solve for:

$$ \text{EY}(t) = \text{EY}_{\text{max}}\left(1 - e^{-kt}\right) $$

Therefore, we will use this theoretical model of TBT and EY to fit the data from both the Wet WDT and non-Wet WDT groups, and calculate their respective $$ \text{EY}_{\text{max}} $$ and $k$.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 3: Scatter plot of data from the main experiment for both the experimental and control groups, along with the fitted theoretical curves</span>
    </div>
</div>

It can be observed that the two curves are very similar. In Table 2, I have listed the constants $$ \text{EY}_{\text{max}} $$ and $k$ for these two fitted theoretical curves, along with the $$ p \text{-value} $$ obtained from the Student's t-test.

| Constants of the Fitted Curves  | WWDT   | CTL | $$ p \text{-value} $$ |
| ------------ | ----------------- | ----------------- | ----------------- |
| $k$ | 0.0116    | 0.0118      | 0.481      |
| $$ \text{EY}_{\text{max}} $$ | 23.08% | 23.06%   | 0.807   |<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 2: Constants of the fitted theoretical curves for the experimental and control groups in the main experiment and their $p$-values</span>
    </div>
</div>

It can be observed that using the conventional significance standard of $$ p \text{-value} < 0.05 $$, the fitted theoretical curves for both $$ \text{EY}_{\text{max}} $$ and $k$ show no significant differences. This indicates that whether Wet WDT is performed or not does not significantly affect the relationship between TBT and EY. In other words, when considering only the extraction yield, there are no significant differences between performing Wet WDT and simply reducing the valve size to achieve a longer total brewing time.

In both the preliminary and main experiments, I consistently observed that Wet WDT tends to result in more pronounced astringency. If this observation is accurate (which requires further blind testing to confirm), then perhaps Wet WDT should be avoided when the flow rate of the dripper is adjustable.

Overall, the main and preliminary experiments yielded similar results:

1. Data-wise, the presence or absence of Wet WDT does not affect the relationship between extraction yield and total brewing time. In other words, at the same total brewing time, the presence or absence of Wet WDT does not affect the extraction yield.
2. Flavor-wise, the groups that performed Wet WDT generally had a more astringent taste.

The two hypotheses I proposed in the preliminary experiment were not disproven:

- **Hypothesis 1:** Perhaps the increase in extraction yield with Wet WDT is purely due to the extended total brewing time and is unrelated to stirring or aiding the mixing of coffee and water.
- **Hypothesis 2:** Perhaps Wet WDT's stirring and mixing effects still have the potential to increase extraction yield, but the accelerated fines migration caused by Wet WDT results in poor subsequent extraction conditions, such as channel formation in the coffee bed, which in turn reduces the extraction yield. Thus, these effects cancel each other out.These experimental results clearly show that Wet WDT is not "magical" and may even be considered underwhelming. However, whether this conclusion applies universally requires further investigation. For instance, in this experiment, we used an immersion method with three times the usual amount of water for blooming, making water very abundant. But when using less water, might simple shaking be insufficient to fully mix the grounds and water? In such cases, could Wet WDT yield better results? It is quite possible.

### Conclusion

Since Barista Hustle published an article claiming that Wet WDT can significantly increase extraction yield, Wet WDT has gained popularity. However, it also increases the total brewing time, leading me to suspect that the increased extraction yield from Wet WDT might not be directly related to the technique itself but rather a result of the prolonged brewing time due to accelerated fines migration caused by increased agitation.

This article leverages the Pulsar's ability to control flow rate via a valve to explore the question: "How much of the increased extraction yield from Wet WDT is directly related to the technique, and how much is simply due to the extended brewing time?" According to the experimental results, we found that Wet WDT does not significantly change the relationship between total brewing time and extraction yield. In other words, with the same total brewing time, whether Wet WDT is performed or not does not significantly affect the extraction yield.

Furthermore, Wet WDT generally resulted in higher astringency when used with the Pulsar, leading me to believe that when the dripper's flow rate is controllable, we should avoid using Wet WDT and instead achieve the desired extraction yield by adjusting the valve size.