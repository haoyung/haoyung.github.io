---
layout: post
title: "Precisely Measuring TDS"
description: "A plethora of experimental data and a rigorous TDS measurement process: Measuring TDS remains challenging and frustrating, but at least we can now obtain some accurate measurements."
tag: [review, tutorial]
category: articles
imgfolder: TDS
language_reference: measuring_tds
usemathjax: true
draft: true
sitemap: false
---

### Introduction

>   Warning: This article is rather lengthy, please make use of the table of contents!

Flavor is subjective, and naturally, so are coffee preferences.

However, often we still need some objective data, not only for effective communication among enthusiasts but also to help us adjust parameters and improve a cup of subpar coffee.

Over the past three years, during each semester's brewing theory course at NTU Coffee Club, I always start with the 'objective' data of coffee, more specifically, TDS (Total Dissolved Solids) and extraction yields.

Since the extraction yield is calculated from TDS, measuring TDS has become the most crucial part of obtaining 'objective' coffee data. However, accurately measuring TDS is exceedingly difficult; any minor flaw in the process can lead to significant errors. Online, it's common to see videos measuring in completely erroneous ways, which means these 'objective data' measurements are no longer 'objective' and lose their intended meaning.

Currently, articles and resources on TDS measurement in Taiwan (or the Chinese-speaking world) are quite scarce. Therefore, I wrote this article hoping to inspire further discussion and exploration. In this article, I detail my TDS measurement process, conduct an experiment to measure the impact of evaporation on TDS, and test several mainstream TDS meters available on the market.

All the experimental data in this article are [open source](https://docs.google.com/spreadsheets/d/1BQ1JWJI15t-FinSL4U_aB_1EJ0OXRj5Qxc3zgRUO_Ps/edit?usp=sharing), please feel free to use them, and if you have any insights or new findings, please let me know!

### What is TDS?

We typically use TDS to indicate the strength of coffee. By definition, TDS is the weight of the coffee material $(M_{bev})$ divided by the weight of the beverage $(B)$.

$$ \mathrm{TDS} = \frac{M_{bev}}{B} $$

For example, if we know that a 100g cup of coffee contains 1.4g of coffee solids (assuming we dry the coffee in an oven, and it leaves behind 1.4g of solid), then the TDS is 1.4%.

In the commonly seen SCA Golden Cup charts, the vertical axis represents TDS.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brewing_control_chart.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">SCA's old version Brewing Control Chart (source: SCA)</span>
    </div>
</div>

### Why Measure TDS?

With TDS, we can retroactively calculate the amount of coffee material in the brew, and from there, compute the extraction yield, which is highly correlated with the flavor profile of coffee and is one of the most critical (and objective) indicators.

Jonathan Gagné already wrote a very detailed article in 2019 on how to calculate extraction yield, so I won't reinvent the wheel here. Please refer to his excellent work [Measuring and Reporting Extraction Yield](https://coffeeadastra.com/2019/02/17/measuring-and-reporting-extraction-yields/).

Simply put, in filter brewing (like pour-over), we generally use the following formula to estimate the extraction yield (EY), where $B$ represents the weight of the beverage, and $D$ represents the weight of the grounds used.

$$ \mathrm{EY} = \displaystyle\frac{\mathrm{TDS} * B}{D} $$

For example, if we brew a cup of coffee with 10g of beans that weighs 170g and has a TDS of 1.4%, then the extraction yield is:

$$ \mathrm{EY} = \displaystyle\frac{1.4\%*170g}{10g} = 23.8\%$$

### How to Measure TDS?

To know the extraction yield, we need to know the weight of coffee material in the brew. While this could theoretically be achieved by drying the coffee in an oven, that's obviously not practical. Therefore, how to measure the concentration of coffee while it is still liquid becomes a critical issue.

We generally use a refractometer (an optical device) to measure TDS. The principle isn't complicated, but since there are already many excellent articles on this topic, I'll refer you to [Quantitative Café's IG post](https://www.instagram.com/p/Co2cgyOJS8V) for a detailed explanation.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/refractometer.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">How a refractometer works (source: IG, @quantitativecafe)</span>
    </div>
</div>

### Some Problems Encountered When Using a Refractometer

Anyone who has used a refractometer would agree that measuring TDS can be extremely frustrating. This is because, if not measured carefully, the readings from the refractometer can fluctuate significantly, making it difficult to obtain consistent results.

#### Sample and Zeroing Temperature

The most common reason for unstable readings is probably the inconsistency in the sample and zeroing temperatures. During measurement, we usually zero the device with pure water first, dry it off, and then drop on the coffee liquid for testing. At this point, we need to ensure that the temperature measured by the device when zeroing with water is exactly the same as when measuring coffee liquid (or as close as possible). Otherwise, as measurements are repeated, it's likely that the readings will start to increase or decrease (whether it increases or decreases seems to be more related to the model of the device) instead of converging, and we won't be able to determine the correct reading.

Generally, we cool down the device, the water for zeroing, and the coffee liquid all to room temperature before measuring, but this is much harder than it sounds because even if we place all three in the same indoor location for a while, it's still challenging to ensure their temperatures are exactly the same. In the next section's measurement process, I will also detail how to cool the samples.

#### Evaporation

Because of the strict requirements of the refractometer regarding sample temperature, most people will take out some coffee liquid before measuring, such as pouring some coffee into a small cup and waiting for the sample to cool down before measuring. However, this is exactly where errors are most likely to occur.

In cases where the sample volume is small, due to the increased surface area to volume ratio, the amount of evaporation becomes significant. If the sample is uncovered during cooling, the evaporation can significantly increase the TDS. This oversight often leads many online coffee enthusiasts to measure noticeably high extraction yields (e.g., 28% for pour-over), which will be experimentally confirmed in subsequent sections.

### My TDS Measurement Process

Here is the complete TDS measurement process that I usually use, where most of the effort is spent controlling the temperature difference between the sample and the zeroing water. From experience, if the temperature difference can be successfully controlled within 0.1°C, more stable readings can be obtained.

So, in short, the goal of this process is to minimize evaporation while keeping the temperature difference between zeroing and measurement within 0.1°C.

**In the following text, this technique will be referred to as the 'standard method'.**

#### Required Equipment

-   TDS Meter (Refractometer)
    -   Common options include: [VST LAB Coffee III Refractometer](https://store.vstapps.com/products/vst-lab-coffee-iii-refractometer-2022), [Atago PAL-COFFEE](https://www.atago.net/product/?l=en&k=CCF59218), [Difluid R2 Extract](https://digitizefluid.com/products/r2-extract). The rest of this article will abbreviate them as VST, Atago, and Difluid, respectively. Generally, VST, being the earliest used for coffee measurement and the most expensive, is considered the standard, while Atago and Difluid are more affordable alternatives.
    -   I have three Difluid units and one Atago at hand, and I also borrowed a VST for this article (thanks to reader Henry for lending his equipment!).
-   Small sample vials or centrifuge tubes, about 5ml
    -   Should be airtight with a lid, like [these](https://dgs.com.tw/product/G13570-12331/G13570-15450).
-   Plastic pipette
-   Lens cleaning paper
    -   Available at chemical supply stores, I use the commonly available [KIMTECH](https://dgs.com.tw/product/headCode/D4EK-34155?gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppLfi6upKbFThMP-3fdZV0rOvTJRKJSDgiNxXNzMFcjkdnUVoZQnVrBoCA3wQAvD_BwE).
-   Tissue or cloth
    -   Used to roughly dry the liquid on the device.
-   Pure water
    -   Used for zeroing.
-   Small water tank for cooling
    -   A flat bottom is best (as it needs to stand the sample vial), you can use the water basin typically used for hand-brewing.
-   Thermal gloves
    -   Preferable if available, otherwise use a cloth instead.

#### Sampling and Preliminary Work

1.   After brewing the coffee, thoroughly stir it first to avoid concentration gradients between the top and bottom layers.
2.   Use a plastic pipette to draw about 5ml of coffee liquid into the sample vial, try to fill the vial to avoid too much air space inside, then immediately cap it.
3.   Fill the small water tank with room temperature pure water and place the sample vial in it for cooling.
4.   Place the TDS meter next to the small water tank (to ensure their temperatures are close) and let them sit for about 15–30 minutes to cool.
5.   After cooling, wearing thermal gloves (or using a cloth), shake the sample vial, open the lid, and stand it in the small water tank to keep the sample and pure water temperatures consistent.

#### Measurement

After the preliminary work, the temperatures of the sample, the pure water for zeroing, and the TDS meter should be roughly the same. You can then begin the measurement process, which will be demonstrated here using the Difluid I commonly use.

1.   First, make sure the sample well of the TDS meter is clean. If there are impurities, you can spray some alcohol or acetone on the lens cleaning paper to clean it.
2.   Drop a little pure water into the sample well, wait for about 10 seconds, then perform zeroing.
     -   Honestly, I'm not sure why we need to wait, but the Difluid manual specifically mentions this, perhaps to allow the temperature to stabilize a bit more.
3.   Use a tissue or cloth to dry the liquid; do not apply pressure at this point to avoid scratching the sample well.
4.   Wipe the sample well dry with lens cleaning paper.
5.   Next, drop a little sample in, measure, and observe the temperature change. The temperature difference between zeroing and measuring the sample should not exceed 0.1°C.
     -   If the temperature difference is still greater than 0.1°C, repeat steps 1 to 5 until the temperature difference can be controlled within 0.1°C.
6.   Under the condition that the temperature difference is kept within 0.1°C, continue measuring until three consecutive identical values appear; this value is the measurement result.

### Other TDS Measurement Processes Worth Considering

#### Jonathan Gagné's Method

For more detailed information, please refer to one of Jonathan Gagné's most famous articles [Measuring Coffee Concentration with a 0.01% Precision](https://coffeeadastra.com/2019/09/21/measuring-coffee-concentration-with-a-0-01-precision/).

Jonathan thoroughly measured and explained various factors that could cause measurement errors. However, the entire method is quite cumbersome and not so suitable for measuring a large number of samples in a short time. If I remember correctly, Jonathan mentioned that he has already switched to using the Two Spoon Method regularly, so we won't spend time introducing it here. If you're interested, please be sure to read his article (it's very interesting and includes many details to be aware of during measurement!).

#### Two Spoon Method

Speaking of TDS measurement processes, one that definitely deserves mention is the Two Spoon Method, also from Jonathan Gagné. As the name implies, it involves using two cupping spoons for the measurement. Below, I will briefly explain the operation process and why I did not use this method in this experiment. For a more detailed introduction to the Two Spoon Method, please see [pocketsciencecoffee](https://www.instagram.com/pocketsciencecoffee/)'s article [My Current Refractometry Workflow](https://pocketsciencecoffee.com/2022/12/07/my-current-refractometry-workflow/).

##### Operation Process

First, prepare two room-temperature spoons (I like to use cupping spoons) and room-temperature pure water for zeroing.

After stirring the brewed coffee thoroughly, use one spoon to scoop up a small sample (no more than 2 ml), wait a moment, then pour about 1 ml of the sample onto the other spoon, wait again, and then pour directly into the sample well for measurement. Because the sample volume is very small, the large heat capacity of the spoon will quickly bring the coffee down to near room temperature.

As with my measurement process, the goal here is to keep the temperature difference between the sample and the zeroing temperature within 0.1°C. If the temperature difference is too large, reduce the sample volume.

##### Reason for Not Using This Method in This Experiment

Firstly, the Two Spoon Method is obviously not suitable for measuring a large number of samples in a short time (I don't have that many cupping spoons...). Moreover, to allow the sample to cool quickly, the sample volume must not be too large, which prevents the subsequent experiment of measuring the same sample with multiple refractometers from proceeding.

#### Precautions

I'm not sure if the phrase "the sample volume must not be too large" rings any alarm bells, but when the sample volume is very small, the readings are very susceptible to the effects of evaporation. Although pocketsciencecoffee mentioned in the article that keeping the measurement time within three minutes should not be too affected, just to be safe, I would still recommend that you try to keep the measurement time within one minute (or even half a minute) when using this method.

### Before the Experiments: Data Measurement Techniques

Next, we will move on to the experimental part. During the experiments involving a large number of samples, the temperature of the refractometer will inevitably rise with continued use, making it difficult to meet the 0.1°C temperature difference restriction. When the temperature difference is larger, it's also less likely to get three consecutive readings.

To ensure that we can obtain readings within a reasonable amount of time during the experiments, I will adopt the following rule for taking values: keep the temperature difference with zeroing within 1°C, continuously measure until the range of three consecutive readings (the difference between the maximum and minimum values) is within 0.01%, and then select the value that appears most frequently.

For example: if the readings in sequence are [1.35%, 1.35%, 1.36%], then take 1.35%; however, if they are [1.35%, 1.36%, 1.37%, 1.36%], then take 1.36% (because the range of the first three readings is 0.02%, which exceeds 0.01%, so a fourth measurement is necessary).

In most cases, this method of interpretation allows me to get a definite measurement value within the first three readings (i.e., the range of the first three readings does not exceed 0.01%), indicating that although the temperature difference is larger, the readings are still roughly stable, which increases my confidence in this interpretation method.

### Experiment One: A Common Mistake—The Impact of Evaporation on TDS

I often see noticeably high extraction yields in coffee communities online. In my experience, extraction yields exceeding 27% in brewing methods that do not involve pressure (such as pour-over) and exceeding 28% in methods that do involve pressure (such as espresso) are extremely rare. In most cases when such readings are obtained, it is due to flaws in the measurement method. Besides unstable temperatures, a common oversight is forgetting the impact of evaporation on TDS.

In earlier sections, I mentioned that many people's TDS measurement processes involve cooling the sample in an uncovered small cup, such as [Matt Perger](https://www.baristahustle.com/matt-perger/)'s measurement process video [Coffee Refraction 101](https://www.youtube.com/watch?v=fL7vNbEcsxk).

The impact of evaporation is closely related to the sample volume and cooling time. Obviously, the longer the cooling time, the greater the impact of evaporation. However, the impact of the sample volume may not be so intuitive. When the sample volume is small, its surface area to volume ratio dramatically increases, causing the concentration of the sample to increase rapidly with the cooling time. The impact of the sample volume on TDS measurements during cooling is much greater than that of cooling time, which may be somewhat counterintuitive.

For example: when the coffee is just brewed and in the lower pot, I'm not worried about evaporation at all because the opening of the lower pot (i.e., the area of the coffee exposed to air) is too small relative to the entire pot of coffee to affect the results. But once I start sampling, because the sample volume is very small at this point, I need to be very careful about whether there is any flowing air contacting the sample, otherwise the measurement value is very likely to rise.

In Matt Perger's video, since the entire cooling process only lasts about 15 seconds, the impact of evaporation may not be too great. However, when the sample volume is very small (visually estimated in the video to be only about 0.5 ml), this approach is still very risky. If you really need to cool an extremely small volume of sample in an unsealed environment, I would recommend not exceeding 1 minute.

In the following experiment, I will compare the TDS measurement results of samples cooled in sealed versus unsealed environments. I selected two combinations of sample volume and cooling time as the experimental group for cooling in an unsealed environment, namely 1 ml of sample volume cooled for 5 minutes, and 5 ml of sample volume cooled for 30 minutes.

#### Experimental Steps

1.   Brew a pot of coffee and measure the weight of the liquid, so we can later convert the TDS to extraction yield.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp1-4.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Coffee and brewing parameters used in Experiment One<br>Using the tricolate brewing method<br>Brewing <a href="https://www.seycoffee.com/products/2024-enrique-merino-lugmapata-l1-ecuador">SEY's Lugmapata Washed L1</a> (a truly stunning coffee)</span>
         </div>
     </div>

2.   After stirring thoroughly, take samples, dividing them into three groups as follows:

     - Control Group (Control): Take 5 samples of 5 ml each, using the standard sampling and pre-treatment method described in the previous chapter (place in centrifuge tubes and immerse in pure water for cooling).

     -   Experimental Group One (NL-5min, No Lid 5min): Take 5 samples of 1ml each, placed in an uncovered cupping bowl to cool for 5 minutes.
     -   Experimental Group Two (NL-30min, No Lid 30min): Take 5 samples of 5ml each, placed in an uncovered cupping bowl to cool for 30 minutes.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp1.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Experimental groups (NL-5min & NL-30min) placed in cupping bowls and the control group (Control) placed in sealed centrifuge tubes</span>
         </div>
     </div>

3.   For this experiment, I chose the most representative VST and the Difluid I usually use, each to measure according to the standard method.


#### Experimental Results

Table one shows the TDS measurement results for all 15 samples in the three groups of Experiment One, where the upper half shows the values measured by VST, and the lower half shows the values measured by Difluid.

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
        <span class="image-span">Table One: TDS measurement results for the experimental groups (NL-5min & NL-30min) and the control group (Control) in Experiment One</span>
    </div>
</div>



<style>
  .table-i th:nth-child(1), .table-i th:nth-child(2), .table-i th:nth-child(3), .table-i td:nth-child(1), .table-i td:nth-child(2) {
    border-right: 1px solid var(--main-text-color);
  }
</style>


Tables Two and Three respectively record the average TDS and extraction yield for each group, along with the standard deviation<sup class="footnote-sup">[B]</sup>.

<div class="footnote">
  <div class="footnote-label">[B]</div>
  <div class="footnote-content">In this article, data are presented as $\mu \pm \sigma$, where $\mu$ represents the average value, and $\sigma$ is the standard deviation.</div>
</div>

| ΔTDS    | NL-5min         | NL-30min        | Control         |
| ------- | --------------- | --------------- | --------------- |
| VST     | 1.44 ± 0.00 (%) | 1.45 ± 0.00 (%) | 1.39 ± 0.00 (%) |
| Difluid | 1.41 ± 0.01 (%) | 1.41 ± 0.00 (%) | 1.35 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table Two: Average TDS and Standard Deviation</span>
    </div>
</div>


| ΔEY     | NL-5min          | NL-30min         | Control          |
| ------- | ---------------- | ---------------- | ---------------- |
| VST     | 25.87 ± 0.07 (%) | 26.01 ± 0.09 (%) | 24.93 ± 0.09 (%) |
| Difluid | 25.33 ± 0.13 (%) | 25.44 ± 0.09 (%) | 24.29 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table Three: Average Extraction Yield and Standard Deviation</span>
    </div>
</div>


Figure One then visualizes the data from Tables Two and Three, where the left half shows the values measured by VST and the right half shows those measured by Difluid. The error bar represents a 95% confidence interval (about two standard deviations).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1-4.webp" alt="" class="img-fluid">
        <span class="image-span">Figure One: Average TDS and Extraction Yield for the experimental groups (NL-5min & NL-30min) and the control group</span>
    </div>
</div>


It can be observed that the TDS measurements from the two experimental groups, which were cooled in cupping bowls without preventing evaporation, are higher than the control group. This difference was confirmed to be statistically significant after a t-test. Also, it was observed that using the more affordable Difluid resulted in a smaller standard deviation in the control group's measurements, indicating higher measurement stability.<sup class="footnote-sup">[C]</sup>

<div class="footnote">
  <div class="footnote-label">[C]</div>
  <div class="footnote-content">The differences were not as significant when using VST.</div>
</div>

#### Discussion

Tables Four and Five respectively record the average differences in TDS and extraction yields between the two experimental groups (NL-5min & NL-30min) and the control group.

| TDS     | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.05%  | +0.06%   |
| Difluid | +0.06%  | +0.06%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table Four: Average TDS Differences Relative to the Control Group</span>
    </div>
</div>



| EY      | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.94%  | +1.08%   |
| Difluid | +1.04%  | +1.15%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table Five: Average Extraction Yield Differences Relative to the Control Group</span>
    </div>
</div>


Regardless of whether VST or Difluid was used for measurement, the impact of evaporation led to an increase of about 1% in the average extraction yields for both experimental groups. Any reader experienced in measuring TDS would agree that a 1% difference in extraction yield is quite significant. The results at a 30-minute cooling time are perhaps not so surprising, but the significant impact from just 3 minutes of cooling might be a bit counterintuitive, emphasizing why we need to be extra cautious with very small sample volumes.

Ultimately, the difficulty in avoiding the impact of evaporation is precisely because it is related to the degree of cooling—both are positively correlated with time and negatively correlated with sample volume. To achieve more precise measurements, we need to allow the sample to cool sufficiently, but evaporation tends to increase with the degree of cooling, thereby affecting the readings. Thus, the simplest solution I recommend is to store the sample in a sealed container to prevent contact with circulating air.

The above experiment demonstrates the importance of preventing evaporation when measuring and shows that the standard sampling and pre-treatment method introduced in the previous chapter helps us achieve stable and accurate values.

### Experiment Two: Testing Different Brands of Refractometers

Compared to the expensive VST, Atago and Difluid are much more affordable, but does this mean that their measurement accuracy is significantly inferior to VST?

In this experiment, I will use one VST, one Atago, and three Difluid units to measure 20 samples taken from the same pot of coffee to assess the accuracy and stability of each device.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp2.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">Measuring simultaneously with five refractometers<br>From left to right: three Difluid, Atago, and VST</span>
    </div>
</div>

#### Experimental Steps

1.   Brew a pot of coffee and measure the weight of the liquid.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp2-3.webp" alt="" class="responsive-image img-fluid">
             <span class="image-span">Coffee and brewing parameters used in Experiment Two<br>Using the parameters introduced in<a href="{%- post_url en/2023-11-01-Achieving High Extraction with Low Agitation %}">〈Achieving High Extraction Yields with Low Agitation〉
     </a><br>Brewing <a href="https://www.seycoffee.com/products/2024-mayor-domo-la-granada-colombia">SEY's Colombian Washed Pink Bourbon</a></span>
         </div>
     </div>

2.   After stirring thoroughly, use the standard sampling method to take 20 samples of 5ml each.

3.   Measure each sample in sequence with the five refractometers using the standard method.

#### Experimental Results

Figure Three plots the data obtained by measuring 20 samples with the five refractometers, where the x-axis represents the sample number (from 1 to 20), and the y-axis represents the TDS (in %).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2-3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure Three: TDS measurement values from three Difluid, Atago, and VST for 20 samples</span>
    </div>
</div>

Table Six presents the average measurement values and standard deviations for each device.

| Difluid #1      | Difluid #2      | Difluid #3      | Atago           | VST             |
| --------------- | --------------- | --------------- | --------------- | --------------- |
| 1.36 ± 0.01 (%) | 1.35 ± 0.01 (%) | 1.33 ± 0.01 (%) | 1.41 ± 0.01 (%) | 1.38 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table Six: Average Measurement Values and Standard Deviations for the Five Refractometers</span>
    </div>
</div>

From Figure Three and Table Six, it can be observed that the measurement values from the five machines generally show a consistent order of magnitude, namely Atago > VST > Difluid #1 > Difluid #2 > Difluid #3. This will be discussed further in Experiment Three.

I also plotted the measurement values from the five refractometers into the violin plot shown in Figure Four (a [violin plot](https://en.wikipedia.org/wiki/Violin_plot) visually represents the distribution of the measurement values). The three horizontal lines from top to bottom represent the maximum, average, and minimum values, respectively, and the lighter shaded area represents the probability distribution of the measurement values.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3-3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure Four: Violin plot of measurement values from the five refractometers</span>
    </div>
</div>

Through the violin plot, we can see that the range of values measured by VST is noticeably narrower, indicating that its precision (stability of readings) is higher, while Atago and Difluid are slightly less consistent. However, even so, the standard deviations of the three Difluid units and Atago are still about 0.01%, significantly exceeding their advertised precision (Difluid claims 0.03% and Atago claims 0.15%).

#### Discussion

Honestly, I did not expect such precise data. Even for Difluid #2, which had the largest range of measurement values, the total range (the difference between the maximum and minimum values) was only 0.04%, which is surprisingly small. I think this proves that the standard sampling, pre-treatment, and measurement process introduced in this article can help us achieve very precise measurement values.

In this experiment, I find the consistent order of magnitude between different refractometers particularly interesting. I conducted the experiment again and plotted the data into Figures Five and Six, and a similar trend can still be observed, namely Atago > VST > Difluid #1 > Difluid #2 > Difluid #3.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2-2.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3-2.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures Five and Six: Results from repeating the experiment once</span>
</div>

However, after some surveys, I found that this order of magnitude trend differs from the conclusions reached by others, such as [@espressofun](https://www.instagram.com/espressofun/)'s article [DiFluid R2 Coffee Refractometer Device Variation](https://rmckeon.medium.com/difluid-r2-coffee-refractometer-device-variation-20cf1a663d99), suggesting that further validation may be necessary.

### Experiment Three: Testing the Accuracy of Difluid R2 Extract Using Sugar Solution

In Experiment Two, I noticed that the readings from the three Difluid units were consistently lower than those from the widely regarded standard, VST, and there was also a consistent pattern among the Difluid units themselves. This piqued my curiosity about whether there is a 'standard solution' that could help verify whether this consistent pattern is real and which machine is closest to the theoretical value.

Difluid is the only one among these refractometers that displays the refractive index, which is the raw value measured by the device. Different machines may use slightly different algorithms to convert refractive index to TDS. For a detailed discussion on refractive index, I highly recommend [Quantitative Café](https://quantitativecafe.com/)'s article [Estimating TDS from Refractive Index](https://quantitativecafe.com/2023/02/27/estimating-tds-from-refractive-index/), which was very enlightening.

Since the refractive index of many common solutions has been measured and recorded by others, we have the opportunity to use this data to verify whether the readings from Difluid match those from prior experiments. After some research, I discovered that a 10% sucrose (table sugar) solution could be used to test the accuracy of Difluid. Here are the steps and calculations I used, which might be helpful for reference.

>   Special thanks to [Quantitative Café](https://quantitativecafe.com/) for providing data and operational details!

#### Experimental Procedure

To facilitate explanation, I will use the data from my operations as an example.

1.   Zero the scale, preferably using one with a minimum unit of 0.01g (like a gem scale).
2.   Measure the weight of the container (I used a lightweight plastic cup), which was 7.98g.
3.   Add about 10g of table sugar, making the total weight 17.99g. This means 17.99 - 7.98 = 10.01g of sugar was added.
4.   Add about 90g of 60°C pure water, making the total weight 108.02g (though this weight isn’t crucial as it will be re-measured after cooling to account for evaporation).
5.   Stir thoroughly, seal with plastic wrap, and allow to cool at room temperature for about 1 hour.
6.   Re-measure the total weight, which is now 107.77g. This indicates a total solution weight of 107.77 - 7.98 = 99.79g, containing 10.01g of sugar, implying a solution concentration of:

     $$ \displaystyle\frac{10.01}{99.79} \approx 10.03\%$$

7.   Using the table below (thanks again to [Quantitative Café](https://github.com/quantitativecafe/blog/blob/main/refractive-index/refractive-index.xlsx) and [Weber State University](https://faculty.weber.edu/ewalker/Chem2990/Chem%202990%20Refractive%20Index%20Readings.pdf)), and interpolation, calculate the theoretical refractive index (which Difluid measures as the raw value and displays in the top left corner of its screen).

     | Sucrose Solution Concentration | 9%     | 10%    | 11%    |
     | ------------------------------ | ------ | ------ | ------ |
     | Refractive Index               | 1.3463 | 1.3478 | 1.3494 |

     <div class="row mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <span class="image-span">Table showing the refractive index for various sucrose solution concentrations</span>
         </div>
     </div>

     The theoretical refractive index would be:

     $$ 1.3463 + (1.3494-1.3478)*\displaystyle\frac{10.03-10}{11-10}\approx1.34785 $$

8.   Sample using the standard method, taking 10 samples of 5ml each, and allow for a further 15 minutes of cooling.
9.   Measure using the standard method and record the data.

##### Refractive Index Calculator

The concentration calculation we just performed assumes 100% purity of the sugar and no moisture content, which is slightly off from reality. We can account for the 99.7% purity and approximately 1% moisture content listed on sugar packaging and some data sources to calculate a slightly lower concentration:

$$ 10.03\% \times 99.7\% \times (1 - 1\%) \approx 9.90\%$$

Here, we consider the initial concentration calculation as the upper limit, and this new calculation as the lower limit, meaning we assume the actual concentration falls between 9.90% and 10.03%.

Similarly, we can calculate the lower limit for the refractive index using these lower concentration values.

I've also created a calculator that can compute the upper and lower limits for concentration and refrative index. Please visit this [google sheet](https://docs.google.com/spreadsheets/d/1w87A-c4GNcAff21fg4g3mESp85NV0uIajSgKQFZD5Vg/edit?usp=sharing) and enter the three weights measured during the experimental steps to obtain the interpolated concentration and refractive index limits.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <video width="100%" controls playsinline autoplay muted loop>
            <source src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/RI_calculater.mov" type="video/mp4">
        </video>
        <span class="image-span">Using the concentration and refractive index calculator</span>
    </div>
</div>

#### Experimental Results

In the first trial of this experiment, I obtained lower than expected data, leading me to suspect an issue with how the solution was prepared, so I conducted a second trial. Below, I will present the data from both trials, referred to as Experiment 3.1 and 3.2.

Table Seven shows the concentration ranges for the sucrose solutions prepared in Experiments 3.1 and 3.2, along with the calculated refractive index ranges based on those concentrations.

|          | Concentration Range | Refractive Index Range |
| -------- | ------------------- | ---------------------- |
| Experiment 3.1 | [9.90%, 10.03%]  | [1.34765, 1.34785]     |
| Experiment 3.2 | [9.80%, 9.93%]   | [1.34750, 1.34769]     |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table Seven: Concentration and refractive index ranges for the sucrose solutions prepared in Experiments 3.1 and 3.2</span>
    </div>
</div>

Figures Seven and Eight plot the refractive index data measured by the three Difluid units in Experiments 3.1 and 3.2. The x-axis shows the sample number (from 1 to 10), and the y-axis shows the refractive index. The calculated theoretical refractive index range (ground truth) is marked with red dashed lines.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig4.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig6.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures Seven and Eight: Refractive index measurement plots and theoretical value ranges for Experiments 3.1 and 3.2</span>
</div>

It is apparent that most measurements are lower than the previously measured theoretical values. Tables Eight and Nine show the average measured refractive index values and standard deviations for each Difluid unit, along with the percentage difference relative to the theoretical value<sup class="footnote-sup">[D]</sup>.

<div class="footnote">
  <div class="footnote-label">[D]</div>
  <div class="footnote-content">Here, I've taken the midpoint of the calculated refractive index range as the theoretical value.</div>
</div>

| Experiment 3.1 | Difluid #1        | Difluid #2        | Difluid #3        |
| --------------- | ----------------- | ----------------- | ----------------- |
| Measurement     | 1.34757 ± 0.00001 | 1.34755 ± 0.00002 | 1.34750 ± 0.00001 |
| Difference      | -1.24%            | -1.37%            | -1.65%            |

| Experiment 3.2 | Difluid #1        | Difluid #2        | Difluid #3        |
| --------------- | ----------------- | ----------------- | ----------------- |
| Measurement     | 1.34749 ± 0.00001 | 1.34747 ± 0.00002 | 1.34741 ± 0.00001 |
| Difference      | -0.71%            | -0.82%            | -1.23%            |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Tables Eight and Nine: Average measured refractive index values and standard deviations for the three Difluid units in Experiments 3.1 and 3.2</span>
    </div>
</div>

All three Difluid units measured refractive indices that were consistently lower than the theoretical values, and the order from highest to lowest was #1 > #2 > #3, aligning closely with the trends observed in Experiment Two. This suggests that individual Difluid units may indeed have 'personalities'—certain machines consistently measure higher or lower values. This might also mean that the higher readings from VST or Atago observed in Experiment Two could be more accurate, but further verification is needed.

I also created violin plots of the measurement data from the three Difluid units:

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig5.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig7.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures Nine and Ten: Violin plots of the measurement data and theoretical refractive index ranges for Experiments 3.1 and 3.2</span>
</div>

These plots show that all three Difluid units had very small fluctuations in their measurement values (except for a slightly larger range in #2), once again demonstrating impressive precision. However, even with such precision, the accuracy was not as ideal since most measurements were below the ranges we calculated based on the theoretical values. Unfortunately, Difluid currently does not have a calibration feature, so this method can only detect, not actually improve, the accuracy of the machines.

#### Discussion

What I find most intriguing is the similarity between Figures Seven and Eight—the consistency in measurement tendencies across different trials, even with different sucrose solution concentrations, seems to confirm my hypothesis that individual Difluid R2 Extract units have distinct 'personalities.'

Let's take a closer look by extracting the Difluid data from Figures Four and Six (from Experiment Two) and comparing them alongside Figures Seven and Eight:

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig8.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">From left to right, top to bottom: Extracts from Figures Four, Six, Seven, and Eight showing data from the three Difluid units</span>
    </div>
</div>

The remarkable similarity across these plots seems to validate the notion that Difluid R2 Extract units exhibit consistent measurement 'personalities.' However, as mentioned earlier, the article by [@espressofun](https://www.instagram.com/espressofun/) titled [DiFluid R2 Coffee Refractometer Device Variation](https://rmckeon.medium.com/difluid-r2-coffee-refractometer-device-variation-20cf1a663d99) did not observe such clear differences, leaving some room for further investigation.

### TL;DR and Conclusion

In this article, I first introduced my usual process for measuring TDS. To ensure accuracy, I took great care in controlling evaporation and temperature differences, making the process quite elaborate but necessary for obtaining precise and stable measurement values.

In the subsequent three experiments, we arrived at the following conclusions:

-   **Experiment One: The Impact of Evaporation on TDS**
    -   Under our experimental conditions, if evaporation is not prevented by sealing the sample container, it can lead to an increase in calculated extraction yields of up to 1%. This demonstrates the significant impact of evaporation, which must be carefully managed during measurement.
    -   The standard sampling and pre-treatment method I introduced helps us achieve stable and accurate TDS values.
-   **Experiment Two: Testing Different Brands of Refractometers (VST, Atago, and Difluid)**
    -   In terms of stability, VST showed the least fluctuation in readings, while Difluid and Atago were slightly less consistent.
    -   Difluid generally measured lower TDS values than VST, whereas Atago generally measured higher.
    -   The three Difluid units also showed a consistent order among themselves, suggesting that individual units might have inherent tendencies to measure higher or lower values.
-   **Experiment Three: Testing the Accuracy of Difluid R2 Extract Using a Sugar Solution**
    -   All three Difluid units measured refractive indices that were consistently lower than theoretical values.
    -   The order of measurements among the Difluid units was consistent with the observations from Experiment Two, suggesting that individual units may indeed have 'personalities' that affect their measurements. This might also indicate that the higher readings from VST or Atago in Experiment Two could be more accurate, though further verification is needed.

The results from Experiments Two and Three suggest that individual Difluid units may indeed exhibit consistent measurement 'personalities'—certain machines consistently measure higher or lower values. These findings are intriguing, but further investigation is needed to confirm them fully.

I will also share the experimental data with Difluid's official team for reference, which might lead to future improvements in calibration methods to minimize these 'personality' differences among units.

### Acknowledgments

-   Thanks to NTU Coffee Society, Liwei, and Henry for lending me their refractometers, allowing this article to include a broader range of data.

-   Thanks to [Quantitative Café](https://www.instagram.com/quantitativecafe/) for providing detailed procedures for Experiment Three and for their article on verifying Difluid readings using a sugar solution, which is much more detailed than what I covered here. I highly recommend reading it!

-   Thanks to the advisor of NTU Coffee Society, Yuxin, for discussing and helping establish the TDS measurement process presented in this article.
</coffee_blogpost>