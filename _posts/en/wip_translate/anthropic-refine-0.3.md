---
layout: post
title: "Precisely Measuring TDS"
description: "A plethora of experimental data and a rigorous TDS measurement workflow: measuring TDS remains challenging and frustrating, but at least we finally obtain some precise measurements."
tag: [review, tutorial]
category: articles
imgfolder: TDS
language_reference: measuring_tds
usemathjax: true
draft: true
sitemap: false
---

### Introduction

>   Warning: This article is a bit lengthy, so please make good use of the table of contents!

Flavor preferences in coffee are subjective, but objective data is still crucial for communication among enthusiasts and for adjusting parameters to improve a subpar cup.

In my extraction theory course at NTU Coffee Club, I always start with the *objective* data of coffee, specifically TDS (total dissolved solids, a measure of concentration) and extraction yield.

Since extraction yield is calculated from TDS, accurately measuring TDS is critical for obtaining meaningful *objective* data. However, even slight flaws in the measurement process can lead to significant errors, and incorrect methods are commonly seen in online videos, undermining the objectivity of the data.

Resources on TDS measurement are still scarce in Taiwan and the Chinese-speaking world. In this article, I explain my detailed TDS measurement workflow, experiment with the impact of evaporation on TDS, and test several common refractometer models. I hope this initiates further discussion.

All experimental data are [open source](https://docs.google.com/spreadsheets/d/1BQ1JWJI15t-FinSL4U_aB_1EJ0OXRj5Qxc3zgRUO_Ps/edit?usp=sharing), so please use them and share any new insights!

### What is TDS?

TDS indicates the concentration of coffee and is defined as the amount of coffee mass in the beverage $(M_{bev})$ divided by the beverage weight $(B)$.

$$ \mathrm{TDS} = \frac{M_{bev}}{B} $$

For example, if a 100g cup of coffee contains 1.4g of coffee solids (after drying), the TDS is 1.4%.

The vertical axis in SCA's Brewing Control Chart represents TDS or concentration.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brewing_control_chart.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">SCA's old version of the Brewing Control Chart (source: SCA)</span>
    </div>
</div>

### Why Measure TDS?

With TDS, we can calculate the amount of coffee compounds based on beverage weight and then calculate extraction yield, which is highly correlated with flavor and is one of the most important objective indicators.

Jonathan Gagné's article [Measuring and Reporting Extraction Yield](https://coffeeadastra.com/2019/02/17/measuring-and-reporting-extraction-yields/) explains how to calculate extraction yield in detail.

In simple terms, for filter coffee like pour-over, we generally estimate extraction yield (EY) using this formula, where $B$ is beverage weight and $D$ is coffee dose:

$$ \mathrm{EY} = \displaystyle\frac{\mathrm{TDS} * B}{D} $$

For example, if we brew 170g of coffee with 1.4% TDS using 10g of beans, the extraction yield is:

$$ \mathrm{EY} = \displaystyle\frac{1.4\%*170g}{10g} = 23.8\%$$

### How to Measure TDS?

Drying coffee in an oven to determine TDS is impractical, so we use a refractometer to optically measure the concentration of liquid coffee. Many articles explain the principle, such as [Quantitative Café's IG post](https://www.instagram.com/p/Co2cgyOJS8V).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/refractometer.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">How a refractometer works (source: IG, @quantitativecafe)</span>
    </div>
</div>

### Common Issues When Using a Refractometer

Measuring TDS with a refractometer is extremely frustrating because without careful technique, readings often vary significantly, making it difficult to obtain stable results.

#### Sample and Zeroing Temperature 

The most common reason for unstable readings is inconsistency between the sample temperature and the zeroing temperature. We usually zero the device with distilled water, dry it, then measure the coffee sample. The temperature when zeroing must match the sample temperature as closely as possible. Otherwise, readings will likely drift up or down (depending on the device model) without converging.

Generally, we cool the device, zeroing water, and coffee sample to room temperature before measuring. However, ensuring identical temperatures is more challenging than it seems. The next section details how to properly cool the samples.

#### Evaporation

Most people take out some coffee liquid to cool in a small cup before measuring, but this is error-prone.

With a smaller sample, the surface area to volume ratio increases, making evaporation non-negligible. If the sample is unsealed while cooling, evaporation can significantly increase the TDS. This blind spot has led many online enthusiasts to frequently measure implausibly high extraction yields (e.g. 28% for pour-over), which we will experimentally confirm.

### My TDS Measurement Process

Here is my complete TDS measurement workflow, focused on controlling the temperature difference between the sample and zeroing water within 0.1°C to obtain stable readings.

The goal is to minimize evaporation while controlling the zeroing and measurement temperature difference within 0.1°C.

**This method will be referred to as the *standard method*.**

#### Required Equipment

-   Refractometer
    -   Common choices: [VST LAB Coffee III](https://store.vstapps.com/products/vst-lab-coffee-iii-refractometer-2022), [Atago PAL-COFFEE](https://www.atago.net/product/?l=en&k=CCF59218), [Difluid R2 Extract](https://digitizefluid.com/products/r2-extract). Abbreviated as VST, Atago, and Difluid. VST is considered the standard.
    -   I have three Difluids, one Atago, and borrowed a VST (thanks Henry!).
-   Sample bottles or centrifuge tubes, about 5ml
    -   Must be airtight, like [these](https://dgs.com.tw/product/G13570-12331/G13570-15450).
-   Plastic pipette
-   Lens cleaning paper
    -   I use [KIMTECH](https://dgs.com.tw/product/headCode/D4EK-34155?gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppLfi6upKbFThMP-3fdZV0rOvTJRKJSDgiNxXNzMFcjkdnUVoZQnVrBoCA3wQAvD_BwE).
-   Tissue or cloth
    -   To roughly dry liquid on the device.
-   Distilled water
    -   For zeroing.
-   Small flat-bottomed water tank 
    -   For cooling the sample bottle.
-   Insulated gloves (or cloth)

#### Sampling and Cooling

1.   After brewing, stir the coffee thoroughly to homogenize.
2.   Use a pipette to take about 5ml of coffee and put it into a sample bottle, filling it to minimize air space. Immediately close the lid.
3.   Fill a small water tank with room temperature distilled water and place the sample bottle in it to cool.
4.   Place the refractometer next to the water tank (for temperature equilibration) and let sit for 15–30 minutes to cool.
5.   After cooling, wear gloves to shake the sample bottle evenly. Open the lid and place it in the water tank to maintain the same temperature as the distilled water.

#### Measurement

After the preliminary steps, the sample, zeroing water, and refractometer should be roughly the same temperature. Then measurement can begin.

I will demonstrate using the Difluid.

1.   Ensure the refractometer lens is clean. If dirty, spray alcohol or acetone on lens paper to clean it.
2.   Pour a few drops of distilled water on the lens, wait 10 seconds, then zero.
     -   Waiting likely allows temperature to further stabilize.
3.   Use a tissue to gently dry the liquid, avoiding pressure that could scratch the lens.
4.   Wipe the lens clean with Kimwipes.
5.   Pour a few drops of sample and observe the temperature change. The zeroing and sample temperature difference should not exceed 0.1°C.
     -   If the difference is >0.1°C, repeat steps 1-5 until it is ≤0.1°C.
6.   When the temperature difference is ≤0.1°C, continue measuring until three consecutive identical values appear. This is the measurement result.

### Other TDS Measurement Processes

#### Jonathan Gagné's Method

For details, see Jonathan Gagné's article [Measuring Coffee Concentration with a 0.01% Precision](https://coffeeadastra.com/2019/09/21/measuring-coffee-concentration-with-a-0-01-precision/).

Jonathan thoroughly measured various error-causing factors, but the method is cumbersome and unsuitable for measuring many samples quickly. He usually uses the Two Spoon Method, so we won't introduce his full method here. Please read his interesting and detailed article if interested.

#### Two Spoon Method

The Two Spoon Method, also from Jonathan Gagné, involves measuring with two spoons as the name suggests. I will briefly explain the process and why I did not use it in this article's experiments. For more details, read [My Current Refractometry Workflow](https://pocketsciencecoffee.com/2022/12/07/my-current-refractometry-workflow/) by [pocketsciencecoffee](https://www.instagram.com/pocketsciencecoffee/).

##### Operational Process

Prepare two room-temperature spoons (cupping spoons work well) and room-temperature distilled water for zeroing.

After thoroughly stirring the brewed coffee, use one spoon to scoop a small sample (≤2ml), wait a moment, then pour about 1ml onto the other spoon, wait again, then pour directly onto the refractometer lens for measurement. The spoon's large heat capacity will immediately cool the small sample to near room temperature.

As with my process, the goal is to keep the sample and zeroing temperature difference within 0.1°C. If the difference is too large, reduce the sample amount.

##### Reasons for Not Using This Method 

First, the Two Spoon Method is not suitable for measuring many samples quickly (I don't have enough spoons), and the sample amount must be small to cool quickly, making it impossible to measure the same sample with multiple refractometers.

#### Precautions

The phrase "sample amount must not be too large" should raise alarms. When the sample is very small, readings are very susceptible to evaporation. Although pocketsciencecoffee stated that the impact should not be too significant if measurement time is kept within three minutes, I recommend keeping it within one minute (or even 30 seconds) to be safe.

### Pre-Experiment: Data Measurement Method

Next, we move to the experiments. When handling many samples, the refractometer temperature will inevitably rise with continuous use, making it difficult to meet the 0.1°C temperature difference limit. With larger differences, it is also less likely to get three constant consecutive readings.

To obtain readings within a reasonable time, I will adopt this rule: keep the zeroing temperature difference within 1°C, measure until the range (max minus min) of three consecutive readings is ≤0.01%, then take the most frequent value.

For example: if the readings are [1.35%, 1.35%, 1.36%], take 1.35%; if they are [1.35%, 1.36%, 1.37%, 1.36%], take 1.36% (because the first three readings' range is 0.02%, >0.01%, so a fourth measurement is needed).

In most cases, this allows me to obtain a definite value within the first three readings (i.e. the first three readings' range is ≤0.01%), indicating that although the temperature difference is larger, the readings are still roughly stable, increasing my confidence in the rule.

### Experiment I: A Common Mistake—The Impact of Evaporation on TDS

I often see obviously high extraction yields in the coffee community. In my experience, yields >27% in brewing without pressure (e.g. pour-over) and >28% in brewing with pressure (e.g. espresso) are extremely rare. Such readings are mostly due to measurement flaws. Besides unstable temperatures, a common oversight is forgetting evaporation's impact on TDS.

As mentioned, many people's TDS workflows involve cooling the sample in an uncovered small cup, such as [Matt Perger](https://www.baristahustle.com/matt-perger/)'s video [Coffee Refraction 101](https://www.youtube.com/watch?v=fL7vNbEcsxk).

Evaporation's impact is closely related to sample amount and cooling time. Obviously, longer cooling means greater evaporation. However, sample amount's impact may be less intuitive. When the amount is smaller, the surface area to volume ratio sharply increases, causing concentration to increase more rapidly as cooling time increases. Sample amount's impact is far greater than cooling time's, which may be counterintuitive.

For example: When coffee is freshly brewed in the carafe, I don't worry about evaporation because the carafe opening (the exposed area) is too small relative to the pot's volume to affect results. But when sampling, the small amount means I must be very careful about circulating air contacting the sample, otherwise TDS will likely increase.

In Matt Perger's video, since cooling lasts only about 15 seconds, evaporation's impact may not be too significant. However, it is still very risky with such a small sample amount (visually only about 0.5ml). If cooling such a small unsealed sample is necessary, I recommend not exceeding 1 minute.

In the following experiment, I will compare TDS results of samples cooled in sealed and unsealed environments. I have chosen two combinations of sample amount and cooling time for the unsealed cooling experimental group: 1ml cooled for 5 minutes, and 5ml cooled for 30 minutes.

#### Experimental Steps

1.   Brew coffee and measure beverage weight to later convert TDS to extraction yield.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp1-4.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Coffee and brewing parameters used in Experiment I<br>Using the tricolate, which seems not yet introduced in this blog<br>Brewing <a href="https://www.seycoffee.com/products/2024-enrique-merino-lugmapata-l1-ecuador">SEY's Lugmapata Washed L1</a> (truly an impressive coffee)</span>
         </div>
     </div>

2.   After thorough stirring, take samples divided into three groups:

     -   Control Group (Control): Take 5 samples of 5ml each, using the standard sampling and cooling method (put in centrifuge tube and immerse in distilled water).
     -   Experimental Group I (NL-5min, No Lid 5min): Take 5 samples of 1ml each, placed in uncovered cupping bowl to cool for 5 minutes.
     -   Experimental Group II (NL-30min, No Lid 30min): Take 5 samples of 5ml each, placed in uncovered cupping bowl to cool for 30 minutes.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp1.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Experimental groups (NL-5min & NL-30min) in uncovered cupping bowls and control group (Control) in sealed centrifuge tubes</span>
         </div>
     </div>

3.   I chose to use the representative VST and my commonly used Difluid, one each, to measure using the standard method.

#### Experimental Results

Table 1 shows the TDS results of the 15 samples in Experiment I, with VST measurements in the upper half and Difluid in the lower half.

<table class="table-i">
<thead>
  <tr style="border-bottom: 1px solid var(--main-text-color);">
    <th></th>
    <th>NL-5min</th>
    <th>NL-30min</th>
    <th>Control</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="5" style="font-weight: bold">VST</td>
    <td>1.43%</td>
    <td style="border-right: 1px solid var(--main-text-color);">1.44%</td>
    <td>1.38%</td>
  </tr>
  <tr>
    <td>1.44%</td>
    <td>1.44%</td>
    <td>1.39%</td>
  </tr>
  <tr>
    <td>1.44%</td>
    <td>1.45%</td>
    <td>1.38%</td>
  </tr>
  <tr>
    <td>1.44%</td>
    <td>1.45%</td>
    <td>1.39%</td>
  </tr>
  <tr>
    <td>1.44%</td>
    <td>1.45%</td>
    <td>1.39%</td>
  </tr>
  <tr style="border-top: 1px solid var(--main-text-color);">
    <td rowspan="5" style="font-weight: bold">Difluid</td>
    <td>1.40%</td>
    <td style="border-right: 1px solid var(--main-text-color);">1.41%</td>
    <td>1.35%</td>
  </tr>
  <tr>
    <td>1.41%</td>
    <td>1.41%</td>
    <td>1.35%</td>
  </tr>
  <tr>
    <td>1.42%</td>
    <td>1.42%</td>
    <td>1.35%</td>
  </tr>
  <tr>
    <td>1.40%</td>
    <td>1.42%</td>
    <td>1.35%</td>
  </tr>
  <tr>
    <td>1.41%</td>
    <td>1.41%</td>
    <td>1.35%</td>
  </tr>
</tbody>
</table>
<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 1: TDS results of unsealed experimental groups (NL-5min & NL-30min) and control group (Control)</span>
    </div>
</div>

<style>
  .table-i th:nth-child(1), .table-i th:nth-child(2), .table-i th:nth-child(3), .table-i td:nth-child(1), .table-i td:nth-child(2) {
    border-right: 1px solid var(--main-text-color);
  }
</style>

Tables 2 and 3 show the average values and standard deviations<sup class="footnote-sup">[B]</sup> of TDS and extraction yield for each group.

<div class="footnote">
  <div class="footnote-label">[B]</div>
  <div class="footnote-content">In this article, data are presented as $\mu \pm \sigma$, where $\mu$ is the average and $\sigma$ is the standard deviation.</div>
</div>

| TDS    | NL-5min         | NL-30min        | Control         |
| ------- | --------------- | --------------- | --------------- |
| VST     | 1.44 ± 0.00 (%) | 1.45 ± 0.00 (%) | 1.39 ± 0.00 (%) |
| Difluid | 1.41 ± 0.01 (%) | 1.41 ± 0.00 (%) | 1.35 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 2: Average TDS and Standard Deviation</span>
    </div>
</div>

| EY     | NL-5min          | NL-30min         | Control          |
| ------- | ---------------- | ---------------- | ---------------- |
| VST     | 25.87 ± 0.07 (%) | 26.01 ± 0.09 (%) | 24.93 ± 0.09 (%) |
| Difluid | 25.33 ± 0.13 (%) | 25.44 ± 0.09 (%) | 24.29 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 3: Average Extraction Yield and Standard Deviation</span>
    </div>
</div>

Figure 1 visualizes the data from Tables 2 and 3, with VST on the left and Difluid on the right. Error bars represent a 95% confidence interval (approximately ±2 standard deviations).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1-4.webp" alt="" class="img-fluid">
        <span class="image-span">Figure 1: Average TDS and Extraction Yield of experimental groups (NL-5min & NL-30min) and control group</span>
    </div>
</div>

The TDS of the two experimental groups cooled in uncovered bowls is higher than the control group, confirmed to be statistically significant by a t-test. We can also see that with the more affordable Difluid, the control group has a smaller confidence interval than the experimental groups, indicating higher precision.<sup class="footnote-sup">[C]</sup>

<div class="footnote">
  <div class="footnote-label">[C]</div>
  <div class="footnote-content">With VST, the differences between the three groups are not significant.</div>
</div>

#### Discussion

Tables 4 and 5 show the differences in average TDS and extraction yield between the experimental groups (NL-5min & NL-30min) and control group.

| ΔTDS    | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.05%  | +0.06%   |
| Difluid | +0.06%  | +0.06%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 4: Average TDS Differences Between Experimental Groups and Control</span>
    </div>
</div>

| ΔEY     | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.94%  | +1.08%   |
| Difluid | +1.04%  | +1.15%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 5: Average Extraction Yield Differences Between Experimental Groups and Control</span>
    </div>
</div>

With both VST and Difluid, evaporation led to an average increase of about 1% in extraction yield for both experimental groups. Any reader who regularly measures TDS would agree that a 1% difference in extraction yield is quite significant. While such results might not be surprising with 30 minutes of cooling, the significant impact of just 5 minutes might be counterintuitive, highlighting the need for extra care with very small samples.

Evaporation's impact is difficult to avoid because it is positively correlated with cooling time and negatively correlated with sample amount. To improve accuracy, we need sufficient cooling, but evaporation tends to increase with cooling, affecting readings. The simplest solution is to store the sample in a sealed container to avoid contact with circulating air.

This experiment illustrates the importance of avoiding evaporation when measuring, and the standard sampling and cooling method I introduced effectively prevents evaporation from affecting TDS while making measurements more stable.

### Experiment II: Testing Different Refractometer Models

Compared to the expensive VST, Atago and Difluid are much more affordable, but are their measurements significantly less accurate?

In this experiment, I will use a VST, an Atago, and three Difluids to measure 20 samples from the same pot of coffee to assess each device's accuracy and stability.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp2.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">Measuring with five refractometers simultaneously<br>From left to right: three Difluids, Atago, and VST</span>
    </div>
</div>

#### Experimental Steps

1.   Brew coffee and measure beverage weight.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp2-3.webp" alt="" class="responsive-image img-fluid">
             <span class="image-span">Coffee and brewing parameters used in Experiment II<br>Using parameters from <a href="{%- post_url 2023-11-01-achieving-high-extraction-with-low-agitation %}">"Achieving High Extraction with Low Agitation"</a><br>Brewing a <a href="https://www.seycoffee.com/products/2024-mayor-domo-la-granada-colombia">Colombia Washed Pink Bourbon from SEY</a></span>
         </div>
     </div>

2.   After thorough stirring, use the standard sampling method to take 20 samples of 5ml each.

3.   Measure each sample in order with the five refractometers using the standard method.

#### Experimental Results

Figure 3 plots the data from measuring 20 samples with the five refractometers. The horizontal axis is the sample index (1 to 20) and the vertical axis is TDS (%).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2-3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 3: Line chart of TDS for 20 samples measured by three Difluids, Atago, and VST</span>
    </div>
</div>

Table 6 shows the average measurements and standard deviations for each device.

| Difluid #1      | Difluid #2      | Difluid #3      | Atago           | VST             |
| --------------- | --------------- | --------------- | --------------- | --------------- |
| 1.36 ± 0.01 (%) | 1.35 ± 0.01 (%) | 1.33 ± 0.01 (%) | 1.41 ± 0.01 (%) | 1.38 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 6: Average Measurements and Standard Deviations for Five Refractometers</span>
    </div>
</div>

From Figure 3 and Table 6, we can see a generally stable relationship in the measurements of the five devices: Atago > VST > Difluid #1 > Difluid #2 > Difluid #3. This will be discussed further in Experiment III.

I also plotted the measurements as violin plots (see [violin plot](https://en.wikipedia.org/wiki/Violin_plot)). The three horizontal lines from top to bottom are the maximum, average, and minimum values, and the lighter area represents the probability distribution of the measurements.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3-3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 4: Violin plots of measurements for five refractometers</span>
    </div>
</div>

The violin plots show that VST has a noticeably narrower range of measurements, indicating higher precision. Atago and Difluid are slightly less precise but not very different. Even so, the standard deviations of the three Difluids and Atago are only about 0.01%, significantly exceeding their advertised precision (0.03% for Difluid and 0.15% for Atago).

#### Discussion

Honestly, I did not expect such precise data. Even with Difluid #2, which had the largest measurement range, the full range (max minus min) was only 0.04%, surprisingly small. I think this proves that the standard sampling, cooling, and measurement process introduced in this article can help us obtain very precise measurements.

What I found most interesting is the stable relationship between the refractometers. I repeated the experiment and plotted the data in Figures 5 and 6, and we can still see a similar trend: Atago > VST > Difluid #1 > Difluid #2 > Difluid #3.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2-2.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3-2.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 5 and 6: Line chart and violin plot from repeat experiment showing similar trends</span>
</div>

However, after conducting some surveys, I found that this trend of certain devices consistently measuring higher or lower differs from others' conclusions, such as in [@espressofun](https://www.instagram.com/espressofun/)'s article [DiFluid R2 Coffee Refractometer Device Variation](https://rmckeon.medium.com/difluid-r2-coffee-refractometer-device-variation-20cf1a663d99), which may require further verification.

### Experiment III: Testing Difluid R2 Extract Accuracy with Sucrose Solution

In Experiment II, I noticed all three Difluids measured lower than the widely accepted standard VST, and there was a consistent high-to-low relationship among the Difluids. This made me curious if there was a "standard solution" that could verify if this relationship really exists and examine which machine is closest to the theoretical value.

Difluid is the only one of these refractometers that displays the refractive index, the raw value measured by the device. Different devices may use different algorithms to convert refractive index to TDS. For more on refractive index, I highly recommend Quantitative Café's enlightening article [Estimating TDS from Refractive Index](https://quantitativecafe.com/2023/02/27/estimating-tds-from-refractive-index/).

Since many common solutions have their refractive index measured by predecessors, we can use this to check if Difluid matches previous experiments. After some research, I found that using refined table sugar to prepare a 10% sucrose solution could test Difluid's accuracy. Below are the preparation and calculation steps I used.

>   Special thanks to [Quantitative Café](https://quantitativecafe.com/) for providing data and detailed methods!

#### Experimental Steps

For clarity, I will use my operation data as an example.

1.   Zero the balance, preferably using a 0.01g precision scale.

2.   Measure the container weight (I used a lightweight plastic cup), which was 7.98g.

3.   Add about 10g of white sugar, total weight became 17.99g, meaning 17.99 - 7.98 = 10.01 (g) of sugar was added.

4.   Add about 90g of 60°C distilled water, total weight became 108.02g (this weight is not important, it will be re-measured after cooling to exclude evaporation).

5.   After thorough mixing, seal with plastic wrap and leave to cool at room temperature for about 1 hour.

6.   Re-measure the total weight, which was 107.77g, meaning there was 107.77 - 7.98 = 99.79 (g) of solution containing 10.01g of sugar, indicating a solution concentration of:

     $$ \displaystyle\frac{10.01}{99.79} \approx 10.03\%$$

7.   Use the following table (thanks again to [Quantitative Café](https://github.com/quantitativecafe/blog/blob/main/refractive-index/refractive-index.xlsx) and [Weber State University](https://faculty.weber.edu/ewalker/Chem2990/Chem%202990%20Refractive%20Index%20Readings.pdf) for the data) and [interpolation](https://en.wikipedia.org/wiki/Interpolation) to calculate the theoretical refractive index (which Difluid measures and displays).

     | Sucrose Solution Concentration | 9%     | 10%    | 11%    |
     | ------------------------------ | ------ | ------ | ------ |
     | refractive index               | 1.3463 | 1.3478 | 1.3494 |

     <div class="row mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <span class="image-span">Refractive index corresponding to different sucrose solution concentrations</span>
         </div>
     </div>

     The theoretical refractive index is:

     $$ 1.3463 + (1.3494-1.3478)*\displaystyle\frac{10.031-10}{11-10}\approx1.34785 $$

8.   Sample using the standard method, taking 10 samples of 5ml each, then cool for 15 minutes.

9.   Measure using the standard method and record the data.

##### Refractive Index Calculator

The concentration we calculated earlier implicitly assumes the sugar purity is 100% and contains no water, which seems slightly unrealistic. Therefore, we can use the 99.7% purity marked on the sugar packaging and estimate about 1% water content (according to [this data](https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/documents/884/936/s5391pis.pdf)) to calculate a slightly lower concentration:

$$ 10.03\% \times 99.7\% \times (1-1\%) \approx 9.90\%$$

Here, we treat the initially calculated concentration as the upper bound and this concentration as the lower bound, i.e., we assume the actual concentration falls within [10.03%, 9.90%].

Similarly, we can also calculate the refractive index's lower bound.

I created a calculator that can calculate the concentration and refractive index bounds. Please go to this [google sheet](https://docs.google.com/spreadsheets/d/1w87A-c4GNcAff21fg4g3mESp85NV0uIajSgKQFZD5Vg/edit?usp=sharing) and enter the three weights measured during the experiment to get the concentration and interpolated refractive index bounds.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <video width="100%" controls playsinline autoplay muted loop>
    		<source src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/RI_calculater.mov" type="video/mp4">
		</video>
        <span class="image-span">A video of me using this concentration and refractive index calculator</span>
    </div>
</div>

#### Experimental Results

During the first execution, I obtained lower-than-expected data, making me suspect an issue with the solution preparation, so I conducted a second experiment. Below, I present the data from both experiments, referred to as Experiment 3.1 and 3.2.

Table 7 shows the concentration range of the sucrose solution prepared in Experiments 3.1 and 3.2 and the calculated refractive index range based on the concentration.

|          | Concentration Range | Refractive Index Range |
| -------- | ------------------- | ---------------------- |
| Experiment 3.1 | [9.90%, 10.03%] | [1.34765, 1.34785]    |
| Experiment 3.2 | [9.80%, 9.93%]  | [1.34750, 1.34769]    |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 7: Concentration and Refractive Index Ranges of Sucrose Solutions in Experiments 3.1 and 3.2</span>
    </div>
</div>

Figures 7 and 8 plot the measurements of 10 samples taken in Experiments 3.1 and 3.2, with the horizontal axis representing the sample index (1 to 10) and the vertical axis representing the refractive index. The calculated theoretical refractive index bounds (which I marked as ground truth) are marked with red dashed lines.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig4.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig6.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 7 and 8: Line charts of measurements in Experiments 3.1 and 3.2 and the theoretical refractive index range</span>
</div>

Most of the measurements are below the previously calculated theoretical values. Tables 8 and 9 present the average measured values and standard deviations for each device, as well as the percentage difference from the theoretical value<sup class="footnote-sup">[D]</sup>.

<div class="footnote">
  <div class="footnote-label">[D]</div>
  <div class="footnote-content">Here, I take the middle value of the calculated refractive index theoretical range as the theoretical value.</div>
</div>

| Experiment III.1     | Difluid #1        | Difluid #2        | Difluid #3        |
| ------------ | ----------------- | ----------------- | ----------------- |
| Measurement       | 1.34757 ± 0.00001 | 1.34755 ± 0.00002 | 1.34750 ± 0.00001 |
| Difference from Theoretical Value | -1.24%            | -1.37%            | -1.65%            |

| Experiment III.2     | Difluid #1        | Difluid #2        | Difluid #3        |
| ------------ | ----------------- | ----------------- | ----------------- |
| Measurement       | 1.34749 ± 0.00001 | 1.34747 ± 0.00002 | 1.34741 ± 0.00001 |
| Difference from Theoretical Value | -0.71%            | -0.82%            | -1.23%            |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Tables 8 and 9: Average Measured Refractive Index and Standard Deviations in Experiments 3.1 and 3.2</span>
    </div>
</div>

All three Difluids measured lower than the theoretical value, and the order of measurements is #1 > #2 > #3, roughly consistent with the trend in Experiment II. This suggests Difluid units may indeed have a sort of "constitution," where some consistently measure lower and others higher. This might also indicate that the higher VST or Atago measurements in Experiment II are more accurate, but this still requires further verification.

I also plotted the three Difluids' measurement data as violin plots:

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig5.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig7.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 9 and 10: Violin plots of measurements from Experiments 3.1 and 3.2 and the theoretical refractive index range</span>
</div>

The range of measurement fluctuations for all three Difluids is very small (except for #2, which is slightly larger), once again impressing me with their precision. Although there are slight differences among the three units, they are still fairly close.

However, although their precision is excellent, their accuracy is not as ideal, as most measurements are still some distance from the calculated theoretical refractive index range. However, this does not rule out the possibility of issues with the solution preparation, as in Quantitative Café's article [Estimating TDS from Refractive Index](https://quantitativecafe.com/2023/02/11/validating-the-difluid-r2-extract/), where he successfully obtained measurements very close to the theoretical value. Unfortunately, I was unable to replicate his results.

Below are some possible reasons for the lower measurement values:

1.   Some sugar may not have fully dissolved.
2.   The sugar concentration may be lower than the indicated 99.7%.
3.   The sugar's water content may be higher than our 1% estimate.

#### Discussion

What I find most interesting is the similarity between Figures 7 and 8. Even though the sucrose solutions' concentrations in the two experiments were different, the three machines still showed highly consistent measurement inertia.

Let's further extract the Difluid data from the two sets of data in Experiment II (Figures 4 and 6) and compare them with Figures 7 and 8:

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig8.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">From left to right, top to bottom: parts of three Difluid units extracted from four violin plots in Figures 4, 6, 7, and 8</span>
    </div>
</div>

These four plots are very similar! This seems to confirm my speculation that Difluid R2 Extract has different "constitutions," but in [@espressofun](https://www.instagram.com/espressofun/)'s article [DiFluid R2 Coffee Refractometer Device Variation](https://rmckeon.medium.com/difluid-r2-coffee-refractometer-device-variation-20cf1a663d99), he did not observe such obvious differences, so I have not yet concluded on this matter.

Unfortunately, Difluid currently does not have a calibration function, so this method can only be used for testing and cannot actually improve the machines' accuracy. Otherwise, we might be able to use calibration to make various Difluid units' performance more consistent.

### TL;DR and Conclusion

In this article, I first introduced my usual TDS measurement workflow. To ensure accuracy, I put a lot of effort into controlling evaporation and temperature differences, making the process quite cumbersome, but this is essential for obtaining precise and stable measurements.

In the subsequent three experiments, we concluded:

-   Experiment I: The Impact of Evaporation on TDS
    -   In our setup, if samples are not stored in sealed containers to prevent evaporation, evaporation can lead to an increase of up to 1% in calculated extraction yield, showing that evaporation's impact is very significant and must be carefully managed during measurement.
    -   The standard sampling and cooling method I introduced effectively prevents evaporation from affecting TDS measurements and also makes the measurements more stable.
-   Experiment II: Testing Different Refractometer Models (VST & Atago & Difluid)
    -   In terms of stability, VST readings fluctuate the least, while Difluid and Atago show little difference in performance.
    -   Difluid readings are generally lower than VST, while Atago readings are generally higher.
    -   The three Difluids also show a consistent high-to-low relationship in their readings. Although not large, this relationship has appeared repeatedly in multiple experiments, suggesting it is not due to chance or experimental error.
-   Experiment III: Testing Difluid R2 Extract Accuracy with a Sucrose Solution
    -   The refractive index of the sucrose solution measured by all three Difluids is lower than the theoretical value.
    -   The three Difluids also show a consistent high-to-low relationship when measuring the sucrose solution's refractive index, very similar to the situation in Experiment II.

The results of Experiments II and III lead me to speculate that perhaps each Difluid unit has a different "constitution," meaning some consistently measure higher values and others lower. This is an interesting finding, but it probably still requires more time for further verification.

I will also provide the experimental data to Difluid officials for reference, and perhaps in the future, there will be calibration methods to reduce these "constitutional" differences.

### Acknowledgments

-   Thanks to NTU Coffee Club, Li-Wei, and Henry for lending me their refractometers, allowing this article to have more data.

-   Thanks to [Quantitative Café](https://www.instagram.com/quantitativecafe/) for providing detailed execution methods for Experiment III. His articles [Validating the Difluid R2 Extract Using Sugar Solutions](https://quantitativecafe.com/2023/02/11/validating-the-difluid-r2-extract/) and [How Evaporation Affects TDS](https://www.instagram.com/p/CiKsmE6Pz2r) are much more detailed than mine and highly recommended for everyone to read!
-   Thanks to Zinc for discussing and establishing the TDS measurement workflow in this article with me.