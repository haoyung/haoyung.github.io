---
layout: post
title: "Precisely Measuring TDS"
description: "A plethora of experimental data and a rigorous TDS measurement process: measuring TDS remains challenging and frustrating, but at least we can finally obtain some accurate measurements."
tag: [review, tutorial]
category: articles
imgfolder: TDS
language_reference: measuring_tds
usemathjax: true
draft: true
sitemap: false
---

### Introduction

>   Warning: This article is quite long, please make good use of the table of contents!

Flavor is subjective, and naturally, so are preferences for coffee.

However, many times we still need some objective data, not only for communication and exchange among enthusiasts but also to help us adjust parameters and improve a cup of unsatisfactory coffee.

Over the past three years, when teaching the brewing theory course at NTU Coffee Club each semester, I always start with the 'objective' data of coffee, more precisely, TDS (a measure of concentration) and extraction rate.

Since the extraction rate is calculated from TDS, measuring TDS becomes the most critical link in obtaining 'objective' data about coffee. However, measuring TDS accurately is extremely difficult; even minor flaws in the process can lead to significant errors in results. Videos on the internet often show measurements being taken in absolutely incorrect ways, causing these 'objective data' measurements to no longer be 'objective,' losing their original significance.

Currently, articles and resources about TDS measurement in Taiwan (or the Chinese-speaking world) are quite scarce, so I wrote this article in hopes of sparking further discussion. In this article, I explain my TDS measurement process in detail, conduct an experiment to measure the impact of evaporation on TDS, and compare several mainstream TDS meters on the market.

All experimental data in this article are [open source](https://docs.google.com/spreadsheets/d/1BQ1JWJI15t-FinSL4U_aB_1EJ0OXRj5Qxc3zgRUO_Ps/edit?usp=sharing), please feel free to use them, and if you have any insights or new findings about the data, please let me know!

### What is TDS?

We generally use TDS, or total dissolved solids, to indicate the concentration of coffee. By definition, TDS is the weight of coffee substances $(M_{bev})$ divided by the weight of the coffee liquid $(B)$.

$$ TDS = \frac{M_{bev}}{B} $$

For example, if a 100g cup of coffee contains 1.4g of coffee substances (for instance, if we were to dry the coffee in an oven and ended up with 1.4g of coffee solids), then the TDS is 1.4%.

The vertical axis in the commonly seen Gold Cup Chart represents TDS.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brewing_control_chart.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">SCA's old version Brewing Control Chart (source: SCA)</span>
    </div>
</div>

### Why Measure TDS?

With TDS, we can infer the content of coffee substances in the coffee liquid through the weight of the coffee liquid, thereby calculating the extraction rate. The extraction rate is highly correlated with the flavor of coffee and is one of the most important (and objective) indicators of coffee quality.

Jonathan Gagné wrote a very detailed article back in 2019 telling us how to calculate the extraction rate, so I won't reinvent the wheel here, please refer to his masterpiece [Measuring and Reporting Extraction Yield](https://coffeeadastra.com/2019/02/17/measuring-and-reporting-extraction-yields/).

Simply put, in filter coffee extraction (such as hand brewing), we generally estimate the extraction rate $(EY)$ using the following formula, where $B$ represents the weight of the coffee liquid, and $D$ represents the weight of the coffee used.

$$ EY = \displaystyle\frac{TDS * B}{D} $$

For example, if we brew a cup of coffee weighing 170g with a TDS of 1.4% using 10g of coffee beans, the extraction rate is:

$$ \displaystyle\frac{1.4\%*170g}{10g} = 23.8\%$$

### How to Measure TDS?

If we want to know the extraction rate, we must know the weight of coffee substances in the coffee liquid. This could theoretically be done by drying the coffee as mentioned earlier, but obviously, this isn't very practical. Therefore, how to measure the concentration of coffee while it is still liquid becomes an important issue.

We generally use a refractometer, an optical device, to measure TDS. The detailed principle isn't complicated, but since there are already many excellent articles on this, I won't repeat it here. You can refer to [this IG post by quantitativecafe](https://www.instagram.com/p/Co2cgyOJS8V).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/refractometer.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">How a refractometer works (source: quantitativecafe)</span>
    </div>
</div>

### Some Issues Encountered with Refractometers

Everyone who has used a refractometer would agree that measuring TDS with a refractometer is extremely frustrating. This is because the readings often fluctuate significantly when not measured carefully, making it difficult to obtain stable results.

#### Sample and Zeroing Temperature

The biggest and most important reason for unstable readings during measurement is probably the temperature of the sample and the zeroing process. When measuring, we usually zero the device with pure water, dry it, and then drop the coffee liquid for measurement. At this time, we need to ensure that the temperature of the device and the pure water on its mirror surface during zeroing is completely consistent with the temperature during the coffee liquid measurement (or the closer, the better). Otherwise, as measurements are repeated, there's a high probability that the readings will start to increase or decrease (whether it increases or decreases seems to be more related to the model of the device), and we won't be able to determine the correct readings.

Generally, we cool the device, the pure water for zeroing, and the coffee liquid all to room temperature before measuring. However, this is much more difficult than it sounds because even if we place all three in the same indoor location for a while, it's still hard to ensure their temperatures are exactly the same. In the next section on the measurement process, I'll also detail how to cool the samples.

#### Evaporation Quantity

Because refractometers are so sensitive to sample temperature, most people will take out some coffee liquid before measuring, such as pouring some coffee into a small cup and waiting for the sample to cool before measuring. However, this is where the most mistakes are made.

With a very small amount of sample, the amount of evaporation becomes significant. If the sample is left uncovered during cooling, it's basically guaranteed that the TDS will be significantly higher. This blind spot causes many coffee enthusiasts online to often measure noticeably high extraction rates (for example, 28% hand brewing). We will also conduct experiments to confirm this in the following sections.

### My TDS Measurement Process

Below is the complete TDS measurement process, where most of the effort is spent on controlling the temperature difference between the sample and the pure water used for zeroing. In my experience, if the temperature difference can be controlled within 0.1°C, more stable readings can be obtained.

In short, the goal of this process is to minimize evaporation while controlling the temperature difference between zeroing and measurement within 0.1°C.

**In the following text, this method will be referred to as the 'standard method'.**

#### Required Equipment

-   TDS Meter (Refractometer)
    -   Common choices on the market include: [VST LAB Coffee III Refractometer](https://store.vstapps.com/products/vst-lab-coffee-iii-refractometer-2022), [Atago PAL-COFFEE](https://www.atago.net/product/?l=en&k=CCF59218), [Difluid R2](https://digitizefluid.com/products/r2-extract). In the following text, these will be abbreviated as VST, Atago, and Difluid respectively. Generally, the VST, being the earliest used for coffee measurement and also the most expensive, is considered the standard, while Atago and Difluid are more affordable alternatives.
    -   I have three Difluids and one Atago at hand, and I also borrowed a VST for this article (thanks a lot to Henry!). Here, I will demonstrate using the Difluid R2, which I use more often.
-   Sample bottle or centrifuge tube, about 5ml
    -   Must be airtight with a lid. The sample bottles I usually use are [this type](https://dgs.com.tw/product/G13570-12331/G13570-15450), and the centrifuge tubes are [these](https://www.sciket.com/product/group/1290879).
-   Plastic pipette
-   Lens cleaning paper
    -   Available at chemical material stores, etc. I use the commonly found [KIMTECH](https://dgs.com.tw/product/headCode/D4EK-34155?gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppLfi6upKbFThMP-3fdZV0rOvTJRKJSDgiNxXNzMFcjkdnUVoZQnVrBoCA3wQAvD_BwE).
-   Tissue or cloth
    -   Used to roughly dry the liquid on top of the device.
-   Pure water
    -   Used for zeroing.
-   Small water tank for cooling
    -   Flat-bottomed is best (because the sample bottle needs to be placed in it), a common hand-brew bottom basin will do.
-   Insulated gloves
    -   Best if available, otherwise use a cloth instead.

#### Sampling and Preliminary Work

1.   After brewing the coffee, first stir thoroughly with a spoon to avoid different concentrations in the upper and lower layers.
2.   Use a plastic pipette to draw about 5ml of coffee liquid into the sample bottle, try to fill the sample bottle to avoid too much space inside, and then immediately cap it.
3.   Fill the small water tank with room temperature pure water and place the sample bottle in it to cool.
4.   Place the TDS meter next to the small water tank (to ensure their temperatures are similar) and wait for about 15–30 minutes.
5.   After cooling, wearing insulated gloves (or through a cloth), shake the sample bottle, open the lid, and stand it in the small water tank to keep the sample and pure water at the same temperature.

#### Measurement

After the preliminary work, the temperature of the sample, the pure water for zeroing, and the TDS meter should be roughly the same, and then you can start measuring.

1.   First, ensure the sample slot on the TDS meter is clean. If there are impurities, clean with a little alcohol or acetone and dry with lens cleaning paper.
2.   Drop a little pure water into the sample slot, wait about 10 seconds, then perform zeroing.
     -   Honestly, I'm not sure why we need to wait, but the official manual specifically mentions this point, possibly to further stabilize the temperature.
3.   Dry the sample slot, then drop a little sample in, measure and observe the temperature change. The temperature during zeroing and sample measurement should not exceed 0.1°C.
     -   If the temperature difference is still greater than 0.1°C, repeat steps 2-3 until the temperature difference can be controlled within 0.1°C.
4.   Keep measuring until three consecutive identical values appear; this value is the measurement result.

### Other TDS Measurement Processes Worth Considering

#### Jonathan Gagné's Method

For details, please see one of Jonathan Gagné's most famous articles, [Measuring Coffee Concentration with a 0.01% Precision](https://coffeeadastra.com/2019/09/21/measuring-coffee-concentration-with-a-0-01-precision/).

Jonathan thoroughly measured and explained various factors that could cause measurement errors in the article, but the whole method is quite cumbersome and not so suitable for measuring large numbers of samples in a short time. If I remember correctly, Jonathan mentioned that he has also switched to using the Two Spoon Method for routine measurements, so we won't spend time on it here. If you're interested, please be sure to read his article (it's very interesting and contains many precautions for measurement!).

#### Two Spoon Method

Speaking of TDS measurement processes, one that must be mentioned is the Two Spoon Method. As the name suggests, it is a method that uses two spoons to perform the measurement. Below, I will briefly explain its operation process and why I did not use this method in this experiment. For a more detailed introduction to the Two Spoon Method, please see the article by pocketsciencecoffee [here](https://pocketsciencecoffee.com/2022/12/07/my-current-refractometry-workflow/).

##### Operation Process

First, prepare two room-temperature spoons (I like to use cupping spoons) and room-temperature pure water for zeroing.

After stirring the brewed coffee thoroughly, use one of the spoons to scoop a small sample (no more than 2 ml), wait a moment, then pour about 1 ml of the sample onto the other spoon, wait again, and then measure directly. Because the sample volume is very small, the large heat capacity of the spoon will immediately cool the coffee to near room temperature. As with my measurement process, the goal here is to keep the temperature difference between the sample and the zeroing temperature within 0.1°C. If the temperature difference is too large, reduce the sample volume.

##### Reasons for Not Using This Method in This Experiment

Firstly, the Two Spoon Method is obviously not suitable for measuring a large number of samples in a short time (I don't have that many cupping spoons...). And to allow the sample to cool quickly, the sample volume must not be too large, which prevents conducting experiments to measure the same sample with multiple refractometers.

##### Precautions

I don't know if the phrase 'the sample volume must not be too large' has set off alarm bells for everyone, but when the sample volume is very small, the readings are very susceptible to the impact of evaporation. Although pocketsciencecoffee stated in the article that keeping the measurement time within three minutes should not cause too much impact, to be safe, I would still recommend keeping the measurement time within one minute (or even half a minute) when using this method.

### Before the Experiment: Data Measurement Method

Next, we will move on to the experimental part. When handling a large number of samples during the experiment, the temperature of the refractometer will inevitably rise with continuous use, making it difficult to meet the limit of a 0.1°C temperature difference. And when the temperature difference is larger, it is also less likely to produce three consecutive readings.

To obtain readings within a reasonable time during the experiment, I will adopt the following rule for taking values: keep the temperature difference with zeroing within 0.5°C, continuously measure until the range (maximum value minus minimum value) of three consecutive readings is within 0.01%, and then take the value that appears more frequently.

For example: if the readings are [1.35%, 1.35%, 1.36%], take 1.35%; but if they are [1.35%, 1.36%, 1.37%, 1.36%], then take 1.36% (because the range of the first three readings is 0.02%, exceeding 0.01%, so a fourth measurement is needed).

In most cases, this method of interpretation allows me to obtain a definite measurement value from the first three readings (i.e., the range of the first three readings does not exceed 0.01%).

### Experiment One: A Common Mistake Most People Make—The Impact of Evaporation on TDS

I often see many obviously high extraction rates in the coffee community. In my experience, extraction rates over 27% in brewing without pressure involvement (such as hand brewing) and over 28% in brewing with pressure involvement (such as espresso) are extremely rare. When such readings are obtained, they are mostly due to flaws in the measurement method. Besides unstable temperatures, a common blind spot is forgetting the impact of evaporation on TDS.

In previous sections, I mentioned that many people's TDS measurement processes involve cooling the sample in an uncovered small cup, such as the measurement process video [Coffee Refraction 101](https://www.youtube.com/watch?v=fL7vNbEcsxk) by the highly respected Matt Perger. The impact of evaporation is closely related to the sample volume and cooling time. Obviously, the longer the cooling time, the greater the impact of evaporation, but the impact of the sample volume may not be so intuitive. When the sample volume is smaller, the ratio of surface area to volume increases drastically, causing the rate at which the sample concentration increases with cooling time to also increase sharply. When measuring TDS, the impact of the sample volume is far greater than that of the cooling time, which may be somewhat counterintuitive.

In Matt Perger's video, since the entire cooling process only lasts about 15 seconds, the impact of evaporation may not be too great. However, when the sample volume is very small (visually, the sample volume in the video may be only about 0.5 ml), this is still very risky. If you really need to cool a very small amount of sample in an unsealed environment, I would recommend not exceeding 30 seconds.

In the following experiment, I will compare the TDS measurement results of samples cooled in sealed and unsealed environments. In addition to the control group cooled in a sealed environment, I chose two combinations of sample volume and cooling time: 1 ml of sample volume cooled for 5 minutes, and 5ml of sample volume cooled for 30 minutes.

#### Experimental Steps

1.   Brew a pot of coffee and measure the weight of the coffee liquid.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp1-4.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Coffee and brewing parameters used in Experiment One<br|||Using the tricolate, not yet introduced on this blog<br>Brewed with <a href="https://www.seycoffee.com/products/2024-enrique-merino-lugmapata-l1-ecuador">SEY's Lugmapata Washed L1</a> (truly a stunning coffee)</span>
         </div>
     </div>

2.   After thorough stirring, take samples. All samples are divided into three groups as follows:

     - Control Group (Control): Take 5 samples of 5 ml each, using the standard sampling and preprocessing method introduced in the previous chapter (put into a sample bottle and cooled in pure water).

     -   Experimental Group One (NL-5min, No Lid 5min): Take 5 samples of 1ml each, placed in a cupping bowl without a lid and cooled for 5 minutes.
     -   Experimental Group Two (NL-30min, No Lid 30min): Take 5 samples of 5ml each, placed in a cupping bowl without a lid and cooled for 30 minutes.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp1.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Experimental groups (NL-5min & NL-30min) in cupping bowls and the control group (Control) in sealed centrifuge tubes</span>
         </div>
     </div>

3.   In this experiment, I used the most representative VST and my commonly used Difluid, one each, to measure using the standard method.


#### Experimental Results

Table one shows the TDS measurement results for all 15 samples in the three groups of Experiment One, where the upper half shows the values measured by VST, and the lower half shows the values measured using Difluid.

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
        <span class="image-span">Table One: TDS measurement results for the unsealed experimental groups (NL-5min & NL-30min) and the control group (Control)</span>
    </div>
</div>

<style>
  .table-i th:nth-child(1), .table-i th:nth-child(2), .table-i th:nth-child(3), .table-i td:nth-child(1), .table-i td:nth-child(2) {
    border-right: 1px solid var(--main-text-color);
  }
</style>

Tables two and three respectively record the average TDS and extraction rate, along with the standard deviation<sup class="footnote-sup">[B]</sup>, for the two groups in Experiment 1.1.

<div class="footnote">
  <div class="footnote-label">[B]</div>
  <div class="footnote-content">In this article, data are presented as $\mu \pm \sigma$, where $\mu$ represents the mean of the data, and $\sigma$ represents the standard deviation.</div>
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
        <span class="image-span">Table Three: Average Extraction Rate and Standard Deviation</span>
    </div>
</div>

Figure one visualizes the data from Tables Two and Three, with the left half showing the values measured by VST and the right half showing the values measured using Difluid. The error bars represent the size of one standard deviation.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1-4.webp" alt="" class="img-fluid">
        <span class="image-span">Figure One: Average TDS and Extraction Rate for the Experimental Groups (NL-5min & NL-30min) and the Control Group</span>
    </div>
</div>

It can be observed that the TDS measurements for the two experimental groups, which were cooled in cupping bowls without preventing evaporation, were higher than those of the control group. This difference was confirmed to be statistically significant through a t-test. Additionally, the control group's measurements showed a smaller standard deviation, indicating higher measurement stability.

#### Discussion

Tables four and five respectively record the average TDS and extraction rate differences between the two experimental groups compared to the control group.

| ΔTDS    | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.05%  | +0.06%   |
| Difluid | +0.06%  | +0.06%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table Four: Average TDS Difference Between the Experimental Groups (NL-5min & NL-30min) and the Control Group</span>
    </div>
</div>

| ΔEY     | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.94%  | +1.08%   |
| Difluid | +1.04%  | +1.15%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table Five: Average Extraction Rate Difference Between the Experimental Groups (NL-5min & NL-30min) and the Control Group</span>
    </div>
</div>

It can be seen that the impact of evaporation led to an average increase of about 1% in the extraction rate for both experimental groups. Any reader who has measured TDS would agree that a 1% difference in extraction rate is quite significant. While such a result might not be so surprising for a 30-minute cooling time, the substantial impact from just 3 minutes of cooling might be somewhat counterintuitive, and this is why we need to be extra cautious when the sample volume is very small.

The above experiment demonstrates the importance of avoiding the impact of evaporation when measuring, and the standard sampling and preprocessing method introduced in the previous chapter helps us obtain stable and accurate values.