---
layout: post
title: "Precisely Measuring TDS"
description: "A ton of experimental data and a rigorous TDS measurement procedure: measuring TDS remains difficult and frustrating, but at least we can finally obtain some precise measurements."
tag: [review, tutorial]
category: articles
imgfolder: TDS
language_reference: measuring_tds
usemathjax: true
draft: true
sitemap: false
---

### Preface

>   Warning: This article is a bit long, please make good use of the table of contents!

Flavor is subjective, and naturally, coffee preferences are also subjective.

However, we often still need some objective data, not only to facilitate communication and exchange among enthusiasts but also to help us adjust parameters and improve a bad-tasting cup of coffee.

Over the past three years, when teaching the brewing theory course at NTU Coffee Club each semester, I always start by discussing the "objective" data of coffee, more precisely, TDS (an indicator of concentration) and extraction yield.

Since extraction yield is calculated from TDS, measuring TDS becomes the most critical step in obtaining "objective" coffee data. However, accurately measuring TDS is extremely difficult. Even a slight flaw in the process can lead to very large errors in the results. Videos using absolutely incorrect measurement methods can also be seen frequently online, causing the measured values of these "objective data" to no longer be "objective," losing their original meaning.

Currently, articles and resources on TDS measurement are still quite scarce in Taiwan (or the Chinese-speaking world). Therefore, I wrote this article, hoping to inspire more discussion. In this article, I explain my TDS measurement process in detail, conduct an experiment to measure the effect of evaporation on TDS, and compare several mainstream TDS meters on the market.

All the experimental data in this article is [open-sourced](https://docs.google.com/spreadsheets/d/1BQ1JWJI15t-FinSL4U_aB_1EJ0OXRj5Qxc3zgRUO_Ps/edit?usp=sharing). Please feel free to use it. If you have any insights or new discoveries about the data, please let me know!

### What is TDS?

We generally use TDS, or total dissolved solids, to represent the concentration of coffee. By definition, TDS is the weight of coffee solids in the coffee liquid $(M_{bev})$ divided by the weight of the coffee liquid $(B)$.

$$ TDS = \frac{M_{bev}}{B} $$

For example, if a 100g cup of coffee contains 1.4g of coffee solids (for instance, if we assume the coffee is dried in an oven and 1.4g of coffee solids remain), then the TDS is 1.4%.

In the commonly seen coffee brewing control chart, the vertical axis represents TDS.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brewing_control_chart.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">SCA's old version of the Brewing Control Chart (source: SCA)</span>
    </div>
</div>

### Why Measure TDS?

With TDS, we can use the weight of the coffee liquid to calculate the coffee solids content in the liquid and further calculate the extraction yield. Extraction yield is highly correlated with coffee flavor and is one of the very important (and objective) indicators of coffee.

Jonathan Gagné wrote a very detailed article back in 2019 telling us how to calculate extraction yield, so I won't reinvent the wheel here. Please refer to his masterpiece [Measuring and Reporting Extraction Yield](https://coffeeadastra.com/2019/02/17/measuring-and-reporting-extraction-yields/).

In simple terms, for filter extraction (such as pour-over), we generally use the following formula to estimate the extraction yield $(EY)$, where $B$ represents the weight of the coffee liquid and $D$ represents the dose of coffee grounds used.

$$ EY = \displaystyle\frac{TDS * B}{D} $$

For example, if we brew a 170g cup of coffee with a TDS of 1.4% using 10g of coffee beans, the extraction yield is:

$$ \displaystyle\frac{1.4\%*170g}{10g} = 23.8\%$$

### How to Measure TDS?

If we want to know the extraction yield, we must know the weight of the coffee solids in the coffee liquid. This can certainly be done by methods such as drying the coffee in an oven, as mentioned earlier, but it's obviously not very practical. Therefore, how to measure the concentration of coffee while it's still liquid becomes an important issue.

We generally use a refractometer to measure TDS optically. The detailed principle is not complicated, but since there are already many excellent articles, I won't repeat the explanation here. You can refer to [this IG post by quantitativecafe](https://www.instagram.com/p/Co2cgyOJS8V).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/refractometer.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">The operating principle of a refractometer (source: quantitativecafe)</span>
    </div>
</div>

### Some Problems Encountered When Using a Refractometer

Anyone who has used a refractometer would agree that using a refractometer to measure TDS is extremely frustrating because when not measuring carefully, the refractometer readings often fluctuate considerably, making it impossible to obtain stable results.

#### Sample and Zero Temperature

The biggest and most important reason for unstable readings during measurement is probably the sample and zero temperature. When measuring, we usually use pure water to zero the instrument first, wipe it dry, and then drop the coffee liquid for measurement. At this point, we need to ensure that the temperature of the instrument and the pure water used for zeroing is exactly the same as the temperature when measuring the coffee liquid (or as close as possible). Otherwise, as the measurements are repeated, the readings are very likely to keep increasing or decreasing (whether they increase or decrease seems to be more related to the model of the instrument). We then have no way to determine the correct reading.

Generally, we cool the instrument, the pure water used for zeroing, and the coffee liquid to room temperature before measuring. However, this is far more difficult than one might imagine because even if we place all three in the same place indoors for a period of time, it's still difficult to ensure that their temperatures are exactly the same. In the measurement process introduced in the next section, I will also detail how to cool the samples.

#### Evaporation

Because of the strict temperature requirements of the refractometer for the sample, most people will take out a small amount of coffee liquid before measuring, such as pouring some coffee into a small cup and waiting for the sample to cool down before measuring. But this is precisely the part where it's easiest to make mistakes.

When the sample volume is extremely small, the amount of evaporation becomes non-negligible. If the sample is uncovered during cooling, the TDS is basically guaranteed to be much higher. This blind spot causes many coffee enthusiasts online to often measure excessively high extraction yields (e.g., 28% for pour-over). We will also conduct experiments to confirm this point in subsequent sections.

### My TDS Measurement Process

The following is the complete TDS measurement process. You can see that most of the effort is spent on controlling the temperature difference between the sample and the pure water used for zeroing. In my experience, if the temperature difference can be successfully controlled within 0.1°C, more stable readings can be obtained.

Therefore, in short, the goal of this process is to minimize evaporation while controlling the temperature difference between zeroing and measurement within 0.1°C.

**In the following text, this method will be referred to as the "standard method".**

#### Required Equipment

-   TDS meter (refractometer)
    -   Common choices on the market include: [VST LAB Coffee III Refractometer](https://store.vstapps.com/products/vst-lab-coffee-iii-refractometer-2022), [Atago PAL-COFFEE](https://www.atago.net/product/?l=en&k=CCF59218), [Difluid R2](https://digitizefluid.com/products/r2-extract). In the following text, they will be abbreviated as VST, Atago, and Difluid, respectively. Generally, the VST, which was the earliest to be used for coffee measurement and is also the most expensive, is considered the standard, while the Atago and Difluid are more affordable alternatives.
    -   I have three Difluids and one Atago, and I specially borrowed a VST for this article (many thanks to Henry!). Here, I will demonstrate using the Difluid R2 that I use more often.
-   Sample vials or centrifuge tubes of about 5ml
    -   Need to have a lid and be airtight. The sample vials I usually use are [this style](https://dgs.com.tw/product/G13570-12331/G13570-15450), and the centrifuge tubes are [this](https://www.sciket.com/product/group/1290879).
-   Plastic pipette
-   Lens cleaning tissue
    -   Should be available at chemical supply stores and other places. I use the common [KIMTECH](https://dgs.com.tw/product/headCode/D4EK-34155?gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppLfi6upKbFThMP-3fdZV0rOvTJRKJSDgiNxXNzMFcjkdnUVoZQnVrBoCA3wQAvD_BwE).
-   Paper towels or cotton cloth
    -   Can be used to roughly absorb the liquid on top of the instrument.
-   Distilled water
    -   Will be used for zeroing.
-   Small water bath for cooling
    -   Flat-bottomed is best (because the sample vials need to stand in it). You can use the drip tray from your regular pour-over setup.
-   Insulated gloves
    -   Best if you have them, otherwise use a cloth instead.

#### Sampling and Preparation

1.   After brewing the coffee, first stir thoroughly with a spoon to avoid concentration differences between the upper and lower layers.
2.   Use a plastic straw to draw about 5ml of coffee liquid into the sample vial, try to fill the sample vial as much as possible to avoid too much space inside, and immediately put on the lid.
3.   Fill the small water bath with room temperature distilled water and place the sample vial in it to cool.
4.   Place the TDS meter next to the small water bath (to ensure their temperatures are close) and wait about 15–30 minutes.
5.   After cooling is complete, wear insulated gloves (or through a cloth), shake the sample vial, then open the lid and stand it in the small water bath to keep the sample temperature consistent with the distilled water.

#### Measurement

After completing the preparation, the temperatures of the sample, the distilled water used for zeroing, and the TDS meter should be roughly the same. Then you can start measuring.

1.   First, make sure the sample well of the TDS meter is clean. If there is dirt, you can clean it with a small amount of alcohol or acetone and wipe it dry with lens cleaning tissue.
2.   Drop a small amount of distilled water into the sample well, wait about 10 seconds, and then zero the instrument.
     -   To be honest, I don't know why you need to wait, but the official instructions specifically mention this point. Maybe it's to let the temperature stabilize a bit more.
3.   Wipe the sample well dry, then drop in a small amount of sample, measure, and observe the temperature change. The temperature during zeroing and when measuring the sample should not differ by more than 0.1°C.
     -   If the temperature difference is still greater than 0.1°C, repeat steps 2–3 until the temperature difference can be controlled within 0.1°C.
4.   Keep measuring until three consecutive identical values appear. This value is the measurement result.

### Other TDS Measurement Processes Worth Referencing

#### Jonathan Gagné's Method

For details, see one of Jonathan Gagné's most well-known articles, [Measuring Coffee Concentration with a 0.01% Precision](https://coffeeadastra.com/2019/09/21/measuring-coffee-concentration-with-a-0-01-precision/).

In it, Jonathan measures and explains in detail the various factors that can cause measurement errors, but the whole method is actually quite cumbersome and not so suitable for measuring a large number of samples in a short time. If my memory serves me right, Jonathan mentioned that he has also switched to using the Two Spoon Method in his daily routine, so we won't spend more space introducing it here. If you're interested, be sure to read his article (it's very interesting and includes many things to pay attention to when measuring!).

#### Two Spoon Method

When it comes to TDS measurement processes, the Two Spoon Method must be mentioned. As the name suggests, it's a method of measuring using two spoons. Below, I will briefly explain its operating process and why I didn't use this method in this experiment. For a more detailed introduction to the Two Spoon Method, please see [this article by pocketsciencecoffee](https://pocketsciencecoffee.com/2022/12/07/my-current-refractometry-workflow/).

##### Operating Process

First, prepare two room temperature spoons (I like to use cupping spoons) and room temperature distilled water for zeroing.

After stirring the brewed coffee evenly, use one of the spoons to scoop a small amount of sample (no more than 2 ml), wait a bit, then pour about 1 ml of the sample onto the other spoon, wait a bit again, and then directly measure. Because the sample volume is very small, the large heat capacity of the spoon will immediately cool the coffee to near room temperature. Similar to my measurement process, the goal here is also to keep the temperature difference between the sample and the zeroing temperature within 0.1°C. If the temperature difference is too large, the sampling volume needs to be reduced.

##### Reasons for Not Using It in This Experiment

First, the Two Spoon Method is obviously not suitable for measuring a large number of samples in a short time (I don't have that many cupping spoons...). And in order to allow the sample to cool down quickly, the sample volume must not be too much. This leads to the inability to perform the subsequent experiment of measuring the same sample with multiple refractometers.

##### Precautions

Doesn't the phrase "the sample volume must not be too much" set off alarm bells in your mind? When the sample volume is extremely small, the readings are very easily affected by evaporation. Although pocketsciencecoffee states in the article that as long as the measurement time is kept within three minutes, it won't be too affected. But to be on the safe side, I would still recommend keeping the measurement time within one minute (or even half a minute) when using this method.

### Written Before the Experiment: Data Measurement Method

Next, we will enter the experimental part. When handling a large number of samples in the experiment, the temperature of the refractometer will inevitably rise with continuous use, so it will be a bit difficult to meet the 0.1°C temperature difference limit. And when the temperature difference is larger, it's also less easy to get three consecutive readings.

In order to obtain readings within a reasonable time during the experiment, I will adopt the following value-taking rules in the following experiments: keep the temperature difference from the zeroing temperature within 0.5°C, and keep measuring until the range of three consecutive readings (maximum value minus minimum value) is within 0.01%, then take the value that appears more frequently.

For example: If the readings are [1.35%, 1.35%, 1.36%] in sequence, take 1.35%, and if they are [1.35%, 1.36%, 1.37%, 1.36%], take 1.36% (because the range of the first three readings is 0.02%, exceeding 0.01%, so a fourth measurement is needed).

In the vast majority of cases, this interpretation method allows me to obtain a definite measured value in the first three values (that is, in the vast majority of cases, the range of the first three readings will not exceed 0.01%).

### Experiment 1: The Mistake Most People Make - The Effect of Evaporation on TDS

I often see many obviously high extraction yields in the coffee community. In my experience, extraction yields above 27% in brewing without pressure (e.g., pour-over) and above 28% in brewing with pressure (e.g., espresso) are extremely rare. When obtaining such readings, most of the time, it's because the measurement method is flawed. In addition to temperature instability, a very common blind spot is forgetting the effect of evaporation on TDS.

In the previous sections, it was mentioned that many people's TDS measurement process involves placing the sample in an uncovered small cup to cool, such as in the measurement process video [Coffee Refraction 101](https://www.youtube.com/watch?v=fL7vNbEcsxk) by Matt Perger, whom I greatly admire. The effect of evaporation is closely related to the sample volume and cooling time. Obviously, the longer the cooling time, the greater the effect of evaporation, but the effect brought by the sample volume may not be so intuitive. When the sample is less, the ratio of its surface area to volume increases dramatically, causing the rate at which the sample concentration increases with cooling time to also increase sharply. When measuring TDS, the effect of sample volume will far exceed that of cooling time, which may be somewhat counterintuitive.

In Matt Perger's video, because the entire cooling process is likely only about 15 seconds long, the effect of evaporation may not be too significant. But when the sample volume is extremely small (visually, the sample volume in the video may only be about 0.5 ml), doing so is still very risky. If you really want to cool an extremely small amount of sample in an unsealed environment, I would recommend not exceeding 30 seconds.

In the following experiment, I will compare the TDS measurement results of cooling samples in sealed and unsealed environments. In addition to the control group cooled in a sealed environment, I selected two combinations of sample volume and cooling time, namely 1 ml sample volume cooled for 5 minutes and 5ml sample volume cooled for 30 minutes.

#### Experimental Steps

1.   Brew a pot of coffee and measure the weight of the coffee liquid.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp1-4.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">The coffee and brewing parameters used in Experiment 1<br>Using the tricolate, which seems to have not been introduced on this blog yet<br>Brewing <a href="https://www.seycoffee.com/products/2024-enrique-merino-lugmapata-l1-ecuador">SEY's Lugmapata Washed L1</a> (truly an impressive coffee)</span>
         </div>
     </div>

2.   After thorough stirring, sample using the standard sampling method. All samples are divided into three groups, as follows:

     - Control group: Take 5 samples of 5 ml each, and perform sampling and pretreatment using the standard method introduced in the previous section (put into sample vials and immerse in distilled water to cool).

     -   Experimental group 1 (NL-5min, No Lid 5min): Take 5 samples of 1ml each, place in uncovered cupping bowls and cool for 5 minutes.
     -   Experimental group 2 (NL-30min, No Lid 30min): Take 5 samples of 5ml each, place in uncovered cupping bowls and cool for 30 minutes.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp1.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">The experimental groups (NL-5min & NL-30min) placed in cupping bowls and the control group (Control) placed in sealed centrifuge tubes</span>
         </div>
     </div>

3.   In this experiment, I selected the most representative VST and the Difluid I usually use, one of each, to measure using the standard method.


#### Experimental Results

Table 1 shows the TDS measurement results of the 15 samples in the three groups of Experiment 1, with the upper half being the values measured by VST and the lower half being the values obtained using Difluid.

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
        <span class="image-span">Table 1: TDS measurement results of the uncovered experimental groups (NL-5min & NL-30min) and the control group (Control) in Experiment 1</span>
    </div>
</div>



<style>
  .table-i th:nth-child(1), .table-i th:nth-child(2), .table-i th:nth-child(3), .table-i td:nth-child(1), .table-i td:nth-child(2) {
    border-right: 1px solid var(--main-text-color);
  }
</style>


Table 2 records the mean and standard deviation<sup class="footnote-sup">[B]</sup> of the TDS and extraction yield data of the two groups in Experiment 1.1.

<div class="footnote">
  <div class="footnote-label">[B]</div>
  <div class="footnote-content">In this article, data will be expressed as $\mu \pm \sigma$, where $\mu$ represents the mean of the data and $\sigma$ represents the standard deviation.</div>
</div>

| ΔTDS    | NL-5min         | NL-30min        | Control         |
| ------- | --------------- | --------------- | --------------- |
| VST     | 1.44 ± 0.00 (%) | 1.45 ± 0.00 (%) | 1.39 ± 0.00 (%) |
| Difluid | 1.41 ± 0.01 (%) | 1.41 ± 0.00 (%) | 1.35 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 2: Mean and standard deviation of TDS</span>
    </div>
</div>


| ΔEY     | NL-5min          | NL-30min         | Control          |
| ------- | ---------------- | ---------------- | ---------------- |
| VST     | 25.87 ± 0.07 (%) | 26.01 ± 0.09 (%) | 24.93 ± 0.09 (%) |
| Difluid | 25.33 ± 0.13 (%) | 25.44 ± 0.09 (%) | 24.29 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 3: Mean and standard deviation of extraction yield</span>
    </div>
</div>


Figure 1 is the result of visualizing the data in Tables 2 and 3, with the left half being the values measured by VST and the right half being the values obtained using Difluid. The error bars represent plus or minus one standard deviation.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1-4.webp" alt="" class="img-fluid">
        <span class="image-span">Figure 1: Mean TDS and extraction yield of the experimental groups (NL-5min & NL-30min) and the control group</span>
    </div>
</div>


It can be seen that the measured TDS of the two experimental groups cooled in the cupping bowls without preventing evaporation is higher than that of the control group. After a t-test, it was also confirmed that this gap is statistically significant. At the same time, we can also observe that the control group has a smaller standard deviation of measured values, indicating higher measurement stability.

#### Discussion

Tables 4 and 5 record the average TDS and extraction yield differences between the two experimental groups and the control group, respectively.

| ΔTDS    | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.05%  | +0.06%   |
| Difluid | +0.06%  | +0.06%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 4: Average TDS difference between the experimental groups (NL-5min & NL-30min) and the control group</span>
    </div>
</div>



| ΔEY     | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.94%  | +1.08%   |
| Difluid | +1.04%  | +1.15%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 5: Average extraction yield difference between the experimental groups (NL-5min & NL-30min) and the control group</span>
    </div>
</div>


It can be seen that the effect of evaporation causes an increase of about 1% in the average extraction yield of both experimental groups. Any reader who measures TDS would agree that a 1% difference in extraction yield is quite significant. When the cooling time is 30 minutes, this result may not be so surprising, but the impact of 3 minutes of cooling being so large may be a bit counterintuitive. This is precisely why we need to be more careful when the sample volume is extremely small.

The above experiment illustrates the importance of avoiding the effect of evaporation when measuring, and the standard sampling and pretreatment methods introduced in the previous section help us obtain stable and accurate values.

### Experiment 2: Testing Refractometers from Various Manufacturers

In this experiment, I will use one VST, one Atago, and three Difluids to measure 20 samples taken from the same pot of coffee to evaluate the accuracy and stability of each instrument.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp2.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">Measuring with five refractometers simultaneously<br>From left to right are three Difluids, Atago, and VST</span>
    </div>
</div>

#### Experimental Steps

1.   Brew a pot of coffee and measure the weight of the coffee liquid.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp2-3.webp" alt="" class="responsive-image img-fluid">
             <span class="image-span">The coffee and brewing parameters used in Experiment 2<br>Using the recipe introduced in <a href="{%- post_url en/2023-11-01-Achieving High Extraction with Low Agitation %}">〈Achieving High Extraction with Low Agitation〉
     </a><br>Brewing <a href="https://www.seycoffee.com/products/2024-mayor-domo-la-granada-colombia">SEY's Colombia Washed Pink Bourbon</a></span>
         </div>
     </div>

2.   After thorough stirring, use the standard sampling method to take samples, a total of 20 samples of 5ml each.

3.   Measure in the order of sample number using the four refractometers and the standard method.

#### Experimental Results

Figure 3 plots the data obtained by measuring 20 samples with three Difluid R2s and one Atago PAL-COFFEE, respectively, with the horizontal axis being the sample number (from 1 to 20) and the vertical axis being TDS (in %).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2-3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 3: TDS measurement values of 20 samples measured by three Difluid R2s, Atago PAL-COFFEE, and VST LAB Coffee III Refractometer, respectively</span>
    </div>
</div>

Table 6 shows the average measured values and standard deviations of each instrument.

| Difluid #1      | Difluid #2      | Difluid #3      | Atago           | VST             |
| --------------- | --------------- | --------------- | --------------- | --------------- |
| 1.36 ± 0.01 (%) | 1.35 ± 0.01 (%) | 1.33 ± 0.01 (%) | 1.41 ± 0.01 (%) | 1.38 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 6: Average measured values and standard deviations of the four refractometers</span>
    </div>
</div>


From Figure 3 and Table 6, it can be observed that the measured values of the five instruments generally show a stable size relationship, i.e., Atago > VST > Difluid #1 > Difluid #2 > Difluid #3. More detailed discussion on this point will be provided in the next chapter.

I also plotted the measured values of the five refractometers into violin plots, as shown in Figure 3, where the three horizontal lines from top to bottom represent the maximum, mean, and minimum values, respectively, and the light-colored part represents the probability distribution of the measured values.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3-3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 4: Violin plots of the measured values of the five refractometers</span>
    </div>
</div>


Through the violin plots, we can see that the range of measured values of the VST is significantly narrower, indicating its higher precision, while the Atago and Difluid are slightly inferior. However, even so, the standard deviation of the measured values of the three Difluids and Atago is still only about 0.01%, significantly surpassing their claimed precision (0.03% for Difluid and 0.15% for Atago).

#### Discussion

To be honest, I didn't expect to obtain such precise data. Even for Difluid #2, which has the largest data fluctuation range, the range of measured values (maximum value minus minimum value) is only 0.04%, which is surprisingly small. I think this proves that the standard sampling, pretreatment, and measurement processes introduced in this article can help us obtain very precise measured values.

What I find most interesting in this experiment is the stable size relationship between different refractometers. I subsequently repeated the experiment and plotted the data into Figures 5 and 6. It can be seen that similar trends can still be observed.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2-2.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3-2.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 5 and 6: Line chart and violin plots obtained after repeating the experiment once</span>
</div>


### Experiment 3: Using Sugar Solution to Test the Accuracy of Difluid R2

In Experiment 2, I found that the measured values of our three Difluids were all lower than the VST, which is widely regarded as the standard, and there was also a size relationship between different instruments, although not large. So I wondered if there is a so-called "standard solution" that can help me verify whether this size relationship really exists and examine which of these instruments is closest to the theoretical value.

The Difluid R2 is the only one among these refractometers that displays the refractive index, which is the original value measured by the instrument. Different instruments may use slightly different algorithms to obtain the TDS measured value from the refractive index.

Because the refractive indices of many common solutions have been measured and recorded by predecessors, we have the opportunity to use this value to test whether the measured value of the Difluid R2 is the same as the experiments of predecessors. After some searching, I found that a 10% standard solution prepared with white sugar or rock sugar can be used to test the accuracy of the R2. Below, I provide my operating and calculation steps for your reference.

>   Special thanks to [quantitativecafe](https://quantitativecafe.com/) for providing the data and operation details!

#### Experimental Steps

1.   Zero the scale, preferably using a scale with a minimum unit of 0.01g (e.g., a jewelry scale).

2.   Measure the weight of the container (I use a very light plastic cup), which weighs 7.98g.

3.   Add about 10g of white sugar, with a total weight of 17.99g, indicating that 17.99 - 7.98 = 10.01 (g) of white sugar was added.

4.   Add about 90g of 60°C distilled water, with a total weight of 108.02g (this weight is not important, it will be measured again after cooling to exclude the effect of evaporation).

5.   Stir thoroughly, seal with plastic wrap, and let cool at room temperature for about 1 hour.

6.   Re-measure the total weight, which is 107.77g, indicating that there is a total of 107.77 - 7.98 = 99.79 (g) of solution, containing 10.01g of sugar, which means the solution concentration is:

     $$ \displaystyle\frac{10.01}{99.79} \approx 10.03\%$$

7.   The following table (thanks again to [quantitativecafe](https://github.com/quantitativecafe/blog/blob/main/refractive-index/refractive-index.xlsx) and [Weber State University](https://faculty.weber.edu/ewalker/Chem2990/Chem%202990%20Refractive%20Index%20Readings.pdf) for the data) and [interpolation](https://en.wikipedia.org/wiki/Interpolation) can be used to calculate the theoretical refractive index (i.e., the original value measured by the R2, which will be displayed in the upper left corner of the screen).

     | Sugar Solution Concentration | 9%     | 10%    | 11%    |
     | ---------------------------- | ------ | ------ | ------ |
     | refractive index             | 1.3463 | 1.3478 | 1.3494 |

     <div class="row mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <span class="image-span">Refractive indices corresponding to various concentrations of sugar solution</span>
         </div>
     </div>

     The theoretical refractive index is:

     $$ 1.3463 + (1.3494-1.3478)*\displaystyle\frac{10.031-10}{11-10}\approx1.34785 $$

8.   Sample according to the standard method, taking a total of 10 samples of 5ml each, and cool for another 15 minutes.

9.   Measure according to the standard method and record the data.

##### Refractive Index Theoretical Value Calculator

The solution concentration we just calculated actually contains a very important assumption: the purity of the sugar is 100%, and it does not contain any moisture, but this seems to deviate slightly from reality. Therefore, we can use the 99.7% concentration indicated on the sugar packaging and the estimated moisture content of about 1% from [some data](https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/documents/884/936/s5391pis.pdf) to calculate another lower concentration:

$$ 10.03\% \times 99.7\% \times (1-1\%) \approx 9.90\%$$

Here, we treat the concentration calculated at the beginning as the upper bound and this concentration as the lower bound, that is, we assume that the actual concentration will fall within the interval [10.03%, 9.90%].

Similarly, we can also use this lower bound of concentration to calculate the lower bound of the refractive index.

I also made a calculator that can calculate the upper and lower bounds of concentration and refractive index. Please go to this [google sheet](https://docs.google.com/spreadsheets/d/1w87A-c4GNcAff21fg4g3mESp85NV0uIajSgKQFZD5Vg/edit?usp=sharing) and enter the three weights we measured in the experimental steps in the green-backed boxes to obtain the upper and lower bounds of the concentration and refractive index calculated by the interpolation method.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <video width="100%" controls playsinline autoplay muted loop>
    		<source src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/RI_calculater.mov" type="video/mp4">
		</video>
        <span class="image-span">Using this concentration and refractive index calculator</span>
    </div>
</div>

#### Experimental Results

In this experiment, I obtained lower data, which made me suspect whether there was a problem with the solution preparation. Therefore, I repeated this experiment twice. Below, I will present the data of the two experiments side by side. The two experiments are called Experiment 3.1 and 3.2, respectively.

Table 4 shows the concentration range of the sugar solution I prepared and the refractive index range calculated based on the concentration in Experiments 3.1 and 3.2.

|          | Concentration Range | refractive index Range |
| -------- | ------------------- | ---------------------- |
| Experiment 3.1 | [9.90%, 10.03%] | [1.34765, 1.34785]    |
| Experiment 3.2 | [9.80%, 9.93%]  | [1.34750, 1.34769]    |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 4: Concentration and refractive index ranges of the sugar solutions prepared in Experiments 3.1 and 3.2</span>
    </div>
</div>
Figures 7 and 8 plot the data obtained by measuring 10 samples with three Difluid R2s in Experiments 3.1 and 3.2, respectively, with the horizontal axis being the sample number (from 1 to 10) and the vertical axis being the refractive index. The upper and lower bounds of the theoretical value (Ground Truth) are marked with red dashed lines.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig4.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig6.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 7 and 8: Line charts of sample measured values and theoretical refractive index range in Experiments 3.1 and 3.2</span>
</div>

It can be seen that most of the measured values are lower than the theoretical values measured by predecessors. Tables 6 and 7 show the average measured values and standard deviations of each instrument, as well as the percentage difference from the theoretical values<sup class="footnote-sup">[C]</sup><sup class="footnote-sup">[D]</sup>.

<div class="footnote">
  <div class="footnote-label">[C]</div>
  <div class="footnote-content">Here, I treat the midpoint of the calculated refractive index range as the theoretical value.</div>
</div>

<div class="footnote">
  <div class="footnote-label">[D]</div>
  <div class="footnote-content">Here, the error relative to distilled water is presented. Since the refractive index of distilled water is 1.33299, assuming the average measured value of an instrument is $ \mu $ and the theoretical value is $ \theta $, then the error relative to distilled water is: $\displaystyle\frac{\mu-\theta}{\theta-1.33299}$.</div>
</div>


| Experiment 3.1     | Difluid #1        | Difluid #2        | Difluid #3        |
| ------------------ | ----------------- | ----------------- | ----------------- |
| Measured Value     | 1.34757 ± 0.00001 | 1.34755 ± 0.00002 | 1.34750 ± 0.00001 |
| Difference from Theoretical Value | -1.26%            | -1.40%            | -1.69%            |

| Experiment 3.2     | Difluid #1        | Difluid #2        | Difluid #3        |
| ------------------ | ----------------- | ----------------- | ----------------- |
| Measured Value     | 1.34749 ± 0.00001 | 1.34747 ± 0.00002 | 1.34741 ± 0.00001 |
| Difference from Theoretical Value | -0.72%            | -0.84%            | -1.26%            |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Tables 6 and 7: Average values and standard deviations of refractive indices measured by the three Difluid R2s in the two experiments</span>
    </div>
</div>
The measured values of the three R2s are all lower than the theoretical values, and the size relationship is #1 > #2 > #3, roughly the same as the trend in Experiment 2. This means that the R2 may have a so-called "constitution" difference, that is, some instruments will consistently measure lower values, while others will be the opposite. And this may also mean that the VST or Atago, which had higher measured values in Experiment 2, are more accurate, but this still needs further verification.

I also plotted the measurement data of the three R2s into the following violin plots:

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig5.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig7.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 7 and 8: Violin plots of sample measured values and theoretical refractive index range in Experiments 3.1 and 3.2</span>
</div>

It can be seen that the fluctuation range of the measured values of the three Difluids is very small (except for #2 being slightly larger), once again making me admire their precision. And although the three values have size differences, they differ by about the same amount.

However, although they perform very well in terms of precision, they are not so ideal in terms of accuracy. After all, most of the measured values are still some distance from the refractive index range we calculated. However, this result does not rule out the possibility of problems with the solution preparation, such as a small amount of sugar not being completely dissolved, the sugar concentration being lower than the indicated 99.7%, the sugar moisture content being higher than our estimated 1%, etc.

#### Discussion

What I find most interesting is actually the similarity between Figures 7 and 8. Even though the sugar solution concentrations are different in the two experiments, the three instruments still show highly consistent measurement tendencies, seemingly confirming my guess that the Difluid R2 has "constitution" differences.

[TODO] show more graphs

It's just a pity that the R2 currently doesn't have a calibration function, so this method can only be used for testing and can't actually improve the instrument's accuracy. Otherwise, we might be able to make the performance of R2s with different "constitutions" more consistent through calibration.

### TL;DR and Conclusion

In this article, I introduced the TDS measurement process I usually use. To ensure accuracy, I put a lot of effort into controlling evaporation and temperature differences, making the process quite cumbersome, but this is all indispensable for obtaining accurate and stable measured values.

In the three subsequent experiments, we obtained the following conclusions:

-   Experiment 1: The effect of evaporation on TDS
    -   In our experimental setup, if the sample is not contained in a sealed container to prevent evaporation, the evaporation will cause the calculated extraction yield to increase by as much as 1%, indicating that the effect of evaporation is very large and needs to be particularly careful when measuring.
    -   The standard sampling and pretreatment methods I introduced can effectively avoid the effect of evaporation on TDS measurement.
-   Experiment 2: Testing refractometers from various manufacturers
    -   In terms of stability, the VST readings are the least likely to fluctuate, while the Difluid and Atago perform similarly.
    -   The Difluid readings are generally lower than the VST, while the Atago readings are the opposite, generally higher than the VST.
    -   The readings of the three Difluids also have a size relationship with each other, although not large, but this size relationship appears repeatedly in multiple experiments and does not seem to be caused by chance or experimental error.
-   Experiment 3: Using sugar solution to test the accuracy of Difluid R2
    -   The refractive indices of the sugar solution measured by the three Difluids are all lower than the theoretical values, but this does not rule out the possibility that it is caused by the low purity of the sugar.
    -   The three Difluids also have a size relationship when measuring the refractive index of the sugar solution, which is very similar to the situation observed in Experiment 2.

The results of Experiments 2 and 3 make me speculate that perhaps each Difluid has "constitution" differences, that is, some instruments will habitually measure higher values, while some instruments will be the opposite. This is an interesting finding, but it probably still needs more time to further verify.

I will also provide the experimental data to Difluid officials for reference. Perhaps a calibration method will be available in the future to reduce such "constitution" differences.

### Acknowledgments

-   Thanks to NTU Coffee Club, consultant Li-Wei, and Henry for lending me their refractometers, allowing this article to have more data to use.

-   Thanks to [quantitativecafe](https://www.instagram.com/quantitativecafe/) for providing the detailed execution method of Experiment 3. Their [article on validating Difluid readings using sugar solutions](https://quantitativecafe.com/2023/02/11/validating-the-difluid-r2-extract/) and [post on how evaporation affects TDS](https://www.instagram.com/p/CiKsmE6Pz2r) are much more detailed than mine. I highly recommend everyone to read them!
-   Thanks to NTU Coffee Club consultant Yu-Zhen for discussing and establishing the TDS measurement process in this article with me.