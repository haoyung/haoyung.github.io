---
layout: post
title: "Precisely Measuring TDS"
description: "A plethora of experimental data and a rigorous TDS measurement workflow: measuring TDS remains challenging and frustrating, but at least we finally obtain some accurate measurements."
tag: [review, tutorial]
category: articles
imgfolder: TDS
language_reference: measuring_tds
usemathjax: true
draft: true
sitemap: false
---

### Introduction

>   Warning: This article is a bit lengthy, please make good use of the directory!

Flavor is subjective, and similarly, coffee preferences vary widely.

However, we often need objective data for communication among enthusiasts and to help us adjust brewing parameters to improve a poor cup of coffee.

Over the past three years, while teaching the extraction theory course at NTU Coffee Club each semester, I've started with the "objective" data of coffee, specifically TDS (total dissolved solids, a measure of concentration) and extraction yield.

Since the extraction yield is derived from TDS, measuring TDS has become the crucial step in obtaining "objective" data about coffee. Accurately measuring TDS is extremely challenging, as even minor flaws in the process can lead to significant errors. On platforms like Instagram and YouTube, it's common to see videos of measurements being done incorrectly, causing these "objective data" to lose their original meaning.

Currently, articles and resources about TDS measurement in Taiwan (or the Chinese-speaking world) are scarce. Therefore, I wrote this article to spark further discussion. I explain my TDS measurement workflow in detail, conduct an experiment to measure the impact of evaporation on TDS, and test several commonly used refractometer models on the market.

All experimental data in this article are [open source](https://docs.google.com/spreadsheets/d/1BQ1JWJI15t-FinSL4U_aB_1EJ0OXRj5Qxc3zgRUO_Ps/edit?usp=sharing), please feel free to use them, and if you have any insights or new findings about the data, please let me know!

### What is TDS?

We generally use TDS to indicate the concentration of coffee. By definition, TDS is the amount of coffee mass that made it into your beverage $(M_{bev})$ divided by the beverage weight $(B)$.

$$ \mathrm{TDS} = \frac{M_{bev}}{B} $$

For example, if a 100g cup of coffee contains 1.4g of coffee mass (assuming we dry the coffee in an oven to end up with 1.4g of coffee solids), then the TDS is 1.4%.

The vertical axis in the commonly seen SCA's Brewing Control Chart represents the concentration (or the TDS).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brewing_control_chart.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">SCA's old version of the Brewing Control Chart (source: SCA)</span>
    </div>
</div>

### Why Measure TDS?

With TDS, we can calculate the amount of coffee compounds in the beverage based on its weight, and then calculate the extraction yield. The extraction yield is highly correlated with the flavor of coffee and is one of the most important (and objective) indicators.

Jonathan Gagné wrote a very detailed article in 2019 telling us how to calculate the extraction yield, so I won't reinvent the wheel here. Please refer to his masterpiece [Measuring and Reporting Extraction Yield](https://coffeeadastra.com/2019/02/17/measuring-and-reporting-extraction-yields/).

In simple terms, in filter coffee extraction (e.g., pour-over), we generally use the following formula to estimate the extraction yield (EY), where $B$ represents the beverage weight, and $D$ represents coffee dose.

$$ \mathrm{EY} = \displaystyle\frac{\mathrm{TDS} * B}{D} $$

For example, if we brew a cup of coffee weighing 170g with a TDS of 1.4% using 10g of coffee beans, the extraction yield is:

$$ \mathrm{EY} = \displaystyle\frac{1.4\%*170g}{10g} = 23.8\%$$

### How to Measure TDS?

If we want to know the extraction yield, we must know the weight of the coffee compounds in the beverage. This could, of course, be done by drying the coffee in an oven as mentioned earlier, but obviously, this is not very practical. Therefore, how to measure the concentration of coffee while it is still a liquid became an important issue.

We generally use a refractometer to measure TDS optically. The detailed principle is not complicated, but since there are already many excellent articles on this, I won't repeat it here. You can refer to [Quantitative Café's IG post](https://www.instagram.com/p/Co2cgyOJS8V).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/refractometer.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">How a refractometer works (source: IG, @quantitativecafe)</span>
    </div>
</div>

### Common Issues When Using a Refractometer

Anyone who has used a refractometer would agree that measuring TDS with a refractometer is extremely frustrating. The reason is that without careful measurement, the readings from the refractometer often vary significantly, making it difficult to obtain stable results.

#### Sample and Zeroing Temperature

The most common reason for unstable readings during measurement is probably inconsistency in the temperature of the sample and the zeroing temperature. During measurement, we usually zero the device with distilled water first, dry it, then drop the coffee sample for measurement. At this time, we need to ensure that the temperature measured by the device when zeroing with distilled water is completely consistent with the temperature when measuring the coffee sample (or at least as close as possible). Otherwise, as measurements are repeated, there is a high probability that the readings will start to increase or decrease continuously (whether they increase or decrease seems to be more related to the model of the device) and will not converge, preventing us from determining the correct readings.

Generally, we cool the device, the distilled water for zeroing, and the coffee sample to room temperature before measuring. However, this is much more difficult than imagined because even if we place all three in the same indoor location for a while, it is still difficult to ensure their temperatures are exactly the same. In the next section on the measurement process, I will detail how to cool the samples.

#### Evaporation

Because of the strict requirements of the refractometer on sample temperature, most people will take out some coffee liquid before measuring, such as pouring some coffee into a small cup and waiting for the sample to cool before measuring. But this is precisely the most error-prone part.

With a smaller sample amount, the ratio of surface area to volume increases, making the evaporation non-negligible. If the sample is unsealed during cooling, the evaporation could significantly increase the TDS. This blind spot has led many online coffee enthusiasts to frequently measure significantly high extraction yields (e.g., 28% EY for pour-over), which we will also experimentally confirm in subsequent sections.

### My TDS Measurement Process

Here is the complete TDS measurement workflow I usually use, where most of the effort is spent on controlling the temperature difference between the sample and the distilled water used for zeroing. From experience, if the temperature difference can be successfully controlled within 0.1°C, more stable readings can be obtained.

In short, the goal of this process is to minimize evaporation while controlling the temperature difference between zeroing and measurement within 0.1°C.

**In the following text, this method will be referred to as the *standard method*.**

#### Required Equipment

-   Refractometer
    -   Common choices include: [VST LAB Coffee III Refractometer](https://store.vstapps.com/products/vst-lab-coffee-iii-refractometer-2022), [Atago PAL-COFFEE](https://www.atago.net/product/?l=en&k=CCF59218), [Difluid R2 Extract](https://digitizefluid.com/products/r2-extract). In the following text, they will be abbreviated as VST, Atago, and Difluid, respectively. Generally, VST, being the earliest used for coffee measurement and the most expensive, is considered the standard, while Atago and Difluid are more affordable alternatives.
    -   I have three Difluid units and one Atago at hand, and I also borrowed a VST for this article (thanks to reader Henry for lending me his equipment!).
-   Sample bottles or centrifuge tubes, about 5ml
    -   Must have a lid and be airtight, such as [this one](https://dgs.com.tw/product/G13570-12331/G13570-15450).
-   Plastic pipette
-   Lens cleaning paper
    -   I use the commonly found [KIMTECH](https://dgs.com.tw/product/headCode/D4EK-34155?gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppLfi6upKbFThMP-3fdZV0rOvTJRKJSDgiNxXNzMFcjkdnUVoZQnVrBoCA3wQAvD_BwE).
-   Tissue or cloth
    -   Used to roughly dry the liquid on top of the device.
-   Distilled water
    -   Used for zeroing.
-   A small water tank for cooling
    -   Flat-bottomed is best (because the sample bottle needs to be placed in it).
-   Insulated gloves
    -   If available, otherwise use cloth as a substitute.

#### Sampling and Cooling

1.   After brewing the coffee, first stir thoroughly with a spoon to avoid different concentrations in the upper and lower layers.
2.   Use a plastic pipette to take about 5ml of coffee liquid and put it into a sample bottle, try to fill the sample bottle to avoid too much space inside, and then immediately close the lid.
3.   Fill the small water tank with room temperature distilled water and place the sample bottle in it to cool.
4.   Place the refractometer next to the small water tank (to ensure their temperatures are similar) and let it sit for about 15–30 minutes to cool.
5.   After cooling, wear insulated gloves (or use a cloth) to shake the sample bottle evenly, open the lid, and place it in the small water tank to maintain the same temperature as the distilled water.

#### Measurement

After the preliminary work, the temperature of the sample, the distilled water for zeroing, and the refractometer should be roughly the same, and then the measurement can begin.

Here, I will demonstrate using the Difluid, which I use most frequently.

1.   First, ensure the lens on the refractometer is clean. If there are impurities, spray a little alcohol or acetone on the lens cleaning paper to clean it.
2.   Pour a few drops of distilled water onto the refractometer lens, wait about 10 seconds, then zero.
     -   Honestly, I don't know why we need to wait, but Difluid's manual specifically mentions this, probably to allow the temperature to stabilize further.
3.   Use a tissue or cloth to dry the liquid, and do not apply pressure at this time to avoid scratching the lens.
4.   Wipe the refractometer lens clean with Kimwipes.
5.   Then pour a few drops of sample, measure and observe the temperature change. The temperature difference between zeroing and measuring the sample should not exceed 0.1°C.
     -   If the temperature difference is still greater than 0.1°C, repeat steps 1 to 5 until the temperature difference can be controlled within 0.1°C.
6.   Under the condition that the temperature difference is within 0.1°C, continue measuring until three consecutive identical values appear. This value is the measurement result.

### Other TDS Measurement Processes Worth Considering

#### Jonathan Gagné's Method

For detailed information, please refer to one of Jonathan Gagné's most famous articles, [Measuring Coffee Concentration with a 0.01% Precision](https://coffeeadastra.com/2019/09/21/measuring-coffee-concentration-with-a-0-01-precision/).

Jonathan thoroughly measured and explained various factors that could cause measurement errors in the article, but the entire method is quite cumbersome and not very suitable for measuring a large number of samples in a short time. If I remember correctly, Jonathan mentioned that he usually uses the Two Spoon Method as well, so we won't spend time introducing it here. If you are interested, please be sure to read his article (it's very interesting and includes many details to be aware of when measuring!).

#### Two Spoon Method

Speaking of TDS measurement workflows, the Two Spoon Method is definitely worth mentioning. This method also comes from Jonathan Gagné, and as the name suggests, it involves using two spoons to measure. Below, I will briefly explain the operational process and why I did not use this method in the experiments of this article. For a more detailed introduction to the Two Spoon Method, please read the article [My Current Refractometry Workflow](https://pocketsciencecoffee.com/2022/12/07/my-current-refractometry-workflow/) by [pocketsciencecoffee](https://www.instagram.com/pocketsciencecoffee/).

##### Operational Process

First, prepare two room-temperature spoons (I like to use cupping spoons) and room-temperature distilled water for zeroing.

After thoroughly stirring the brewed coffee, use one of the spoons to scoop a small amount of sample (no more than 2 ml), wait a moment, then pour about 1 ml of the sample onto the other spoon, wait again, then directly pour into the refractometer lens for measurement. Because the sample amount is very small, the large heat capacity of the spoon will immediately cool the coffee to near room temperature.

As with my measurement process, the goal here is to keep the temperature difference between the sample and the zeroing temperature within 0.1°C. If the temperature difference is too large, the sample amount needs to be reduced.

##### Reasons for Not Using This Method in This Experiment

First, the Two Spoon Method is obviously not suitable for measuring a large number of samples in a short time (I don't have that many cupping spoons...), and to allow the sample to cool quickly, the sample amount must not be too large, which makes it impossible to conduct subsequent experiments measuring the same sample with multiple refractometers.

#### Precautions

I don't know if the phrase "the sample amount must not be too large" has set off alarm bells for everyone. When the sample amount is very small, the reading is very susceptible to the impact of the evaporation. Although pocketsciencecoffee stated in the article that as long as the measurement time is kept within three minutes, the impact should not be too significant, to be safe, I would still recommend keeping the measurement time within one minute (or even half a minute) when using this method.

### Pre-Experiment: Data Measurement Method

Next, we will move on to the experimental part. When handling a large number of samples during the experiment, the temperature of the refractometer will inevitably rise with continuous use, making it difficult to meet the 0.1°C temperature difference limit. When the temperature difference is larger, it is also less likely to produce three consecutive readings constantly.

To obtain readings within a reasonable time during the experiment, I will adopt the following rule for taking values: keep the temperature difference with zeroing within 1°C, continuously measure until the range (maximum value minus minimum value) of three consecutive readings is within 0.01%, and then take the value that appears more frequently.

For example: if the readings in the order are [1.35%, 1.35%, 1.36%], then take 1.35%; if they are [1.35%, 1.36%, 1.37%, 1.36%], then take 1.36% (because the range of the first three readings is 0.02%, exceeding 0.01%, so a fourth measurement is needed).

In most cases, this method of reading allows me to obtain a definite measurement value within the first three readings (i.e., the range of the first three readings does not exceed 0.01%), indicating that although the temperature difference is larger, the readings are still roughly stable, which increases my confidence in reading rule.

### Experiment I: A Common Mistake Most People Make—The Impact of Evaporation on TDS

I often see many obviously high extraction yields in the coffee community. In my experience, extraction yields exceeding 27% in brewing methods without pressure involvement (such as pour-over) and exceeding 28% in brewing methods with pressure involvement (such as espresso) are extremely rare. When such readings are obtained, it is mostly due to flaws in the measurement method. Besides unstable temperatures, a common oversight is forgetting the impact of evaporation on TDS.

In previous sections, it was mentioned that many people's TDS measurement workflows involve cooling the sample in an uncovered small cup, such as [Matt Perger](https://www.baristahustle.com/matt-perger/)'s measurement workflow video [Coffee Refraction 101](https://www.youtube.com/watch?v=fL7vNbEcsxk).

The impact of evaporation is closely related to the sample amount and cooling time. Obviously, the longer the cooling time, the greater the impact of evaporation. However, the impact of the sample amount may not be as intuitive. When the sample amount is smaller, the ratio of surface area to volume sharply increases, causing the concentration of the sample to increase more rapidly as the cooling time increases. In TDS measurements, the impact of the sample amount is far greater than that of the cooling time, which may be somewhat counterintuitive.

For example: When the coffee is freshly brewed in the carafe, I am not worried about evaporation because the opening of the carafe (the area where the coffee is exposed to air) is too small relative to the entire pot of coffee to affect the results. But when I start taking samples, because the sample amount is very small at this point, I need to be very careful about whether there is circulating air contacting the sample, otherwise the TDS measurement is very likely to increase.

In Matt Perger's video, since the entire cooling process lasts only about 15 seconds, the impact of evaporation may not be too significant. However, it is still very risky to do this when the sample amount is very small (visually, the sample amount in the video appears to be only about 0.5 ml). If it is really necessary to cool such a small amount of sample in an unsealed environment, I would recommend not exceeding 1 minute.

In the following experiment, I will compare the TDS measurement results of samples cooled in sealed and unsealed environments. I have chosen two combinations of sample amount and cooling time as the experimental group for cooling in an unsealed environment, namely 1 ml of sample amount cooled for 5 minutes, and 5 ml of sample amount cooled for 30 minutes.

#### Experimental Steps

1.   Brew some coffee and measure the beverage weight, so that we can later convert the TDS into extraction yield.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp1-4.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Coffee and brewing parameters used in Experiment I<br>Using the tricolate, which seems not yet introduced in this blog<br>Brewing <a href="https://www.seycoffee.com/products/2024-enrique-merino-lugmapata-l1-ecuador">SEY's Lugmapata Washed L1</a> (truly an impressive coffee)</span>
         </div>
     </div>

2.   After thorough stirring, take samples. All samples are divided into three groups, as follows:

     -   Control Group (Control): Take 5 samples of 5 ml each, using the standard method introduced in the previous chapter for sampling and cooling (put in a centrifuge tube and immersed in distilled water for cooling).
     -   Experimental Group I (NL-5min, No Lid 5min): Take 5 samples of 1ml each, placed in an uncovered cupping bowl to cool for 5 minutes.
     -   Experimental Group II (NL-30min, No Lid 30min): Take 5 samples of 5ml each, placed in an uncovered cupping bowl to cool for 30 minutes.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp1.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Experimental groups (NL-5min & NL-30min) placed in uncovered cupping bowls and the control group (Control) placed in sealed centrifuge tubes</span>
         </div>
     </div>

3.   In this experiment, I chose to use the most representative VST and my commonly used Difluid, one each, to measure using the standard method.

#### Experimental Results

Table 1 shows the TDS measurement results of the three groups in Experiment I, totaling 15 samples, where the upper half shows the values measured by VST, and the lower half shows the values obtained using Difluid.

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
        <span class="image-span">Table 1: TDS measurement results of the unsealed experimental groups (NL-5min & NL-30min) and the control group (Control)</span>
    </div>
</div>

<style>
  .table-i th:nth-child(1), .table-i th:nth-child(2), .table-i th:nth-child(3), .table-i td:nth-child(1), .table-i td:nth-child(2) {
    border-right: 1px solid var(--main-text-color);
  }
</style>

Tables 2 and 3 respectively record the average values and standard deviations<sup class="footnote-sup">[B]</sup> of TDS and extraction yield for each group.

<div class="footnote">
  <div class="footnote-label">[B]</div>
  <div class="footnote-content">In this article, data are presented as $\mu \pm \sigma$, where $\mu$ represents the average value, and $\sigma$ is the standard deviation.</div>
</div>

| TDS    | NL-5min         | NL-30min        | Control         |
| ------- | --------------- | --------------- | --------------- |
| VST     | 1.44 ± 0.00 (%) | 1.45 ± 0.00 (%) | 1.39 ± 0.00 (%) |
| Difluid | 1.41 ± 0.01 (%) | 1.41 ± 0.00 (%) | 1.35 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 2: Average TDS and Its Standard Deviation</span>
    </div>
</div>

| EY     | NL-5min          | NL-30min         | Control          |
| ------- | ---------------- | ---------------- | ---------------- |
| VST     | 25.87 ± 0.07 (%) | 26.01 ± 0.09 (%) | 24.93 ± 0.09 (%) |
| Difluid | 25.33 ± 0.13 (%) | 25.44 ± 0.09 (%) | 24.29 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 3: Average Extraction Yield and Its Standard Deviation</span>
    </div>
</div>

Figure 1 visualizes the data from Tables 2 and 3, with the left half showing values measured by VST and the right half showing values obtained using Difluid. The error bars represent a 95% confidence interval (approximately plus or minus two standard deviations).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1-4.webp" alt="" class="img-fluid">
        <span class="image-span">Figure 1: Average TDS and Extraction Yield of the experimental groups (NL-5min & NL-30min) and the control group</span>
    </div>
</div>

It can be observed that the TDS measurements of the two experimental groups, which were cooled in cupping bowls without preventing evaporation, are higher than those of the control group. After a t-test, this difference was confirmed to be statistically significant. At the same time, we can also observe that when using the more affordable Difluid, the control group's measurements have a smaller confidence interval than the experimental groups, indicating higher measurement precision.<sup class="footnote-sup">[C]</sup>

<div class="footnote">
  <div class="footnote-label">[C]</div>
  <div class="footnote-content">When using VST, the differences between the three groups are not significant.</div>
</div>

#### Discussion

Tables 4 and 5 respectively record the differences in the average of TDS and extraction yield between the two experimental groups (NL-5min & NL-30min) and the control group.

| ΔTDS    | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.05%  | +0.06%   |
| Difluid | +0.06%  | +0.06%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 4: Average TDS Differences Between the Experimental Groups and the Control Group</span>
    </div>
</div>

| ΔEY     | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.94%  | +1.08%   |
| Difluid | +1.04%  | +1.15%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 5: Average Extraction Yield Differences Between the Experimental Groups and the Control Group</span>
    </div>
</div>

It can be observed that regardless of whether VST or Difluid was used for measurement, the impact of evaporation led to an average increase of about 1% in extraction yield for both experimental groups. Any reader who regularly measures TDS would agree that a 1% difference in extraction yield is quite significant. While such results might not be so surprising when the cooling time is 30 minutes, the fact that 3 minutes of cooling could have such a significant impact might be somewhat counterintuitive, which is why we need to be extra careful when the sample amount is very small.

Ultimately, the reason why the impact of evaporation is so difficult to avoid is because it is positively correlated with time, just like the cooling process, and negatively correlated with the sample amount. To make measurements more accurate, we need to allow the sample to cool sufficiently, but evaporation tends to increase along with the degree of cooling, thereby affecting the readings. Therefore, the simplest solution I recommend here is to store the sample in a sealed container to avoid contact with circulating air.

The above experiment illustrates the importance of avoiding the impact of evaporation when measuring, and the standard sampling and cooling method introduced in the previous chapter helps us obtain stable and accurate values.

### Experiment II: Testing Different Brands of Refractometers

Compared to the expensive VST, Atago and Difluid are much more affordable, but does this mean that their measurement accuracy is significantly inferior to VST?

In this experiment, I will use a VST, an Atago, and three Difluids to measure 20 samples from the same pot of coffee, to assess the accuracy and stability of each device.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp2.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">Measuring with five refractometers simultaneously<br>From left to right: three Difluids, Atago, and VST</span>
    </div>
</div>

#### Experimental Steps

1.   Brew a coffee and measure the beverage weight.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp2-3.webp" alt="" class="responsive-image img-fluid">
             <span class="image-span">Coffee and brewing parameters used in Experiment II<br>Using the parameters introduced in <a href="{%- post_url 2023-11-01-achieving-high-extraction-with-low-agitation %}">"Achieving High Extraction with Low Agitation"</a><br>Brewing a <a href="https://www.seycoffee.com/products/2024-mayor-domo-la-granada-colombia">Colombia Washed Pink Bourbon from SEY</a></span>
         </div>
     </div>

2.   After thorough stirring, use the standard sampling method to take 20 samples of 5ml each.

3.   Measure each sample in numerical order with the five refractometers using the standard method.

#### Experimental Results

Figure 3 plots the data obtained by measuring 20 samples with the five refractometers. The horizontal axis represents the sample index (from 1 to 20), and the vertical axis represents TDS (in %).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2-3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 3: Line chart of TDS measurements for 20 samples measured by three Difluids, Atago, and VST</span>
    </div>
</div>

Table 6 presents the average measurement values and standard deviations for each device.

| Difluid #1      | Difluid #2      | Difluid #3      | Atago           | VST             |
| --------------- | --------------- | --------------- | --------------- | --------------- |
| 1.36 ± 0.01 (%) | 1.35 ± 0.01 (%) | 1.33 ± 0.01 (%) | 1.41 ± 0.01 (%) | 1.38 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 6: Average Measurement Values and standard deviations for Five Refractometers</span>
    </div>
</div>

From Figure 3 and Table 6, we can observe a generally stable relationship in the measurement values of the five devices, namely Atago > VST > Difluid #1 > Difluid #2 > Difluid #3. This relationship will be discussed in more detail in Experiment III.

I also plotted the measurement values of the five refractometers as violin plots (see [violin plot](https://en.wikipedia.org/wiki/Violin_plot)). The three horizontal lines from top to bottom represent the maximum, average, and minimum values, respectively, and the lighter area represents the probability distribution of the measurement values.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3-3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 4: Violin plots of measurement values for five refractometers</span>
    </div>
</div>

Through the violin plots, we can see that VST has a noticeably narrower range of measurement values, indicating higher precision. Atago and Difluid are slightly less precise, but even so, the standard deviations of the three Difluid units and Atago are still only about 0.01%, significantly exceeding their advertised precision (Difluid is 0.03%, and Atago is 0.15%).

#### Discussion

Honestly, I did not expect to obtain such precise data. Even with Difluid #2, which had the largest range of measurement values, the full range (maximum value minus minimum value) was only 0.04%, which is surprisingly small. I think this proves that the standard sampling, cooling, and measurement process introduced in this article can help us obtain very precise measurement values.

What I found most interesting in this experiment is the stable relationship between the different refractometers. I repeated the experiment and plotted the data in Figures 5 and 6, and we can still observe a similar trend, namely Atago > VST > Difluid #1 > Difluid #2 > Difluid #3.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2-2.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3-2.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 5 and 6: Line chart and violin plot from a repeat experiment showing similar trends</span>
</div>

However, after conducting some surveys, I found that this trend of measurements being consistently higher or lower with certain devices differs from the conclusions reached by others, such as in the article by [@espressofun](https://www.instagram.com/espressofun/) titled [DiFluid R2 Coffee Refractometer Device Variation](https://rmckeon.medium.com/difluid-r2-coffee-refractometer-device-variation-20cf1a663d99), which may require further verification.

### Experiment III: Testing the Accuracy of Difluid R2 Extract with Sucrose Solution

In Experiment II, I noticed that all three Difluid units measured lower than the widely accepted standard VST, and there was also a consistent high-to-low relationship among the different Difluid units. This made me curious if there was a so-called "standard solution" that could help verify whether this high-to-low relationship really exists and examine which machine is closest to the theoretical value.

Difluid is the only one among these refractometers that displays the refractive index, which is the raw value measured by the device. Different devices may use different algorithms to convert the refractive index into the TDS measurement. For more about refractive index, I highly recommend the article [Estimating TDS from Refractive Index](https://quantitativecafe.com/2023/02/27/estimating-tds-from-refractive-index/) by Quantitative Café, which was very enlightening.

Since many common solutions have their refractive index measured and recorded by predecessors, we have the opportunity to use this value to check if the measurements by Difluid match those from previous experiments. After some research, I found that using refined table sugar to prepare a 10% sucrose solution could test the accuracy of Difluid. Below, I provide the steps I used for preparation and calculation.

>   Special thanks to [Quantitative Café](https://quantitativecafe.com/) for providing data and detailed operational methods!

#### Experimental Steps

For clarity, I will use the data from my operation as an example.

1.   Zero the balance, preferably using a scale with a minimum unit of 0.01g.

2.   Measure the weight of the container (I used a lightweight plastic cup), which was 7.98g.

3.   Add about 10g of white sugar, total weight became 17.99g, meaning 17.99 - 7.98 = 10.01 (g) of white sugar was added.

4.   Add about 90g of 60°C distilled water, total weight became 108.02g (this weight is not important, it will be measured again after cooling to exclude evaporation effects).

5.   After thorough mixing, seal with plastic wrap and leave to cool at room temperature for about 1 hour.

6.   Re-measure the total weight, which was 107.77g, meaning there was 107.77 - 7.98 = 99.79 (g) of solution containing 10.01g of sugar, indicating a solution concentration of:

     $$ \displaystyle\frac{10.01}{99.79} \approx 10.03\%$$

7.   Use the following table (thanks again to [Quantitative Café](https://github.com/quantitativecafe/blog/blob/main/refractive-index/refractive-index.xlsx) and [Weber State University](https://faculty.weber.edu/ewalker/Chem2990/Chem%202990%20Refractive%20Index%20Readings.pdf) for the data) and [interpolation](https://en.wikipedia.org/wiki/Interpolation) to calculate the theoretical refractive index (which is what Difluid measures and displays in the top left corner of the screen).

     | Sucrose Solution Concentration | 9%     | 10%    | 11%    |
     | ------------------------------ | ------ | ------ | ------ |
     | refractive index               | 1.3463 | 1.3478 | 1.3494 |

     <div class="row mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <span class="image-span">Refractive index corresponding to different concentrations of sucrose solution</span>
         </div>
     </div>

     The theoretical refractive index is:

     $$ 1.3463 + (1.3494-1.3478)*\displaystyle\frac{10.031-10}{11-10}\approx1.34785 $$

8.   Sample using the standard method, taking 10 samples of 5ml each, and then cool for 15 minutes.

9.   Measure using the standard method and record the data.

##### Refractive Index Calculator

The concentration we calculated earlier implicitly assumes that the purity of the sugar is 100% and that it contains no water, which seems slightly unrealistic. Therefore, we can use the 99.7% purity marked on the sugar packaging and estimating about 1% (according to [this data](https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/documents/884/936/s5391pis.pdf)) water content to calculate a slightly lower concentration:

$$ 10.03\% \times 99.7\% \times (1-1\%) \approx 9.90\%$$

Here, we treat the concentration initially calculated as the upper bound, and this concentration as the lower bound, i.e., we assume the actual concentration falls within the [10.03%, 9.90%] range.

Similarly, we can also calculate the lower bound of the refractive index.

I also created a calculator that can calculate the upper and lower bounds of the concentration and refractive index. Please go to this [google sheet](https://docs.google.com/spreadsheets/d/1w87A-c4GNcAff21fg4g3mESp85NV0uIajSgKQFZD5Vg/edit?usp=sharing) and enter the three weights measured during the experimental steps to get the bound of concentration and interpolated refractive index.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <video width="100%" controls playsinline autoplay muted loop>
    		<source src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/RI_calculater.mov" type="video/mp4">
		</video>
        <span class="image-span">A video of me using this concentration and refractive index calculator</span>
    </div>
</div>

#### Experimental Results

During the first execution of this experiment, I obtained lower-than-expected data, making me suspect there might have been an issue with the preparation of the solution, so I conducted a second experiment. Below, I will present the data from both experiments, referred to as Experiment 3.1 and 3.2, respectively.

Table 7 shows the concentration range of the sucrose solution prepared in Experiments 3.1 and 3.2 and the calculated range of refractive index based on the concentration.

|          | Concentration Range | Refractive Index Range |
| -------- | ------------------- | ---------------------- |
| Experiment 3.1 | [9.90%, 10.03%] | [1.34765, 1.34785]    |
| Experiment 3.2 | [9.80%, 9.93%]  | [1.34750, 1.34769]    |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 7: Concentration and Refractive Index Ranges of Sucrose Solutions in Experiments 3.1 and 3.2</span>
    </div>
</div>

Figures 7 and 8 plot the measurements of 10 samples taken in Experiments 3.1 and 3.2, with the horizontal axis representing the sample index (from 1 to 10), and the vertical axis representing the refractive index. The calculated theoretical refractive index bounds (which I marked as ground truth) are marked with red dashed lines.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig4.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig6.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 7 and 8: Line charts of measurements in Experiments 3.1 and 3.2 and the theoretical refractive index range</span>
</div>

It can be observed that most of the measurements are below the previously calculated theoretical values. Tables 8 and 9 present the average measured values and standard deviations for each device, as well as the percentage difference from the theoretical value<sup class="footnote-sup">[D]</sup>.

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
        <span class="image-span">Tables 8 and 9: Average Measured Refractive Index and standard deviations in Experiments 3.1 and 3.2</span>
    </div>
</div>

It can be observed that the measurements from all three Difluid units are lower than the theoretical value, and the order of measurements is #1 > #2 > #3, roughly consistent with the trend observed in Experiment II. This suggests that Difluid units may indeed have a sort of "constitution," where some machines consistently measure lower values, and others the opposite. This might also indicate that the higher measurements from VST or Atago observed in Experiment II are more accurate, but this still requires further verification.

I also plotted the measurement data from the three Difluid units into violin plots as shown below:

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig5.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig7.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 9 and 10: Violin plots of measurement from Experiments 3.1 and 3.2 and the theoretical refractive index range</span>
</div>

It can be seen that the range of measurement fluctuations for all three Difluid units is very small (except for #2, which is slightly larger), once again impressing me with their precision. Although there are slight differences in the measurements among the three units, they are still fairly close.

However, although their precision is excellent, their accuracy is not as ideal, as most of the measurements are still some distance from the calculated theoretical refractive index range. However, this result does not rule out the possibility of issues with the preparation of the solution, as in the article [Estimating TDS from Refractive Index](https://quantitativecafe.com/2023/02/11/validating-the-difluid-r2-extract/) by Quantitative Café, where he successfully obtained measurements very close to the theoretical value, unfortunately, I was unable to replicate his results in this experiment.

Below are some possible reasons for the lower measurement values:

1.   Some sugar may not have fully dissolved.
2.   The concentration of sugar may be lower than the 99.7% indicated.
3.   The water content in the sugar may be higher than our estimate of 1%.

#### Discussion

What I find most interesting is actually the similarity between Figures 7 and 8, even though the concentrations of the sucrose solutions in the two experiments were different, the three machines still showed highly consistent measurement inertia.

Let's further extract the Difluid data from the two sets of data in Experiment II (Figures 4 and 6) and compare them with Figures 7 and 8 as shown below:

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig8.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">From left to right, top to bottom: parts of three Difluid units extracted from four violin plots in Figures 4, 6, 7, and 8</span>
    </div>
</div>

It can be seen that these four plots are very similar! This seems to confirm my speculation that Difluid R2 Extract has different "constitutions," but in the article [DiFluid R2 Coffee Refractometer Device Variation](https://rmckeon.medium.com/difluid-r2-coffee-refractometer-device-variation-20cf1a663d99) by [@espressofun](https://www.instagram.com/espressofun/), he did not observe such obvious differences, so I have not yet concluded on this matter.

Unfortunately, Difluid currently does not have a calibration function, so this method can only be used for testing and cannot actually improve the accuracy of the machines. Otherwise, we might be able to use calibration to make the performance of various Difluid units more consistent.

### TL;DR and Conclusion

In this article, I first introduced my usual TDS measurement workflow. To ensure accuracy, I put a lot of effort into controlling evaporation and temperature differences, making the process quite cumbersome, but this is essential for obtaining precise and stable measurements.

In the subsequent three experiments, we concluded:

-   Experiment I: The Impact of Evaporation on TDS
    -   In our experimental setup, if samples are not stored in sealed containers to prevent evaporation, evaporation can lead to an increase of up to 1% in calculated extraction yield, showing that the impact of evaporation is very significant and must be carefully managed during measurement.
    -   The standard sampling and cooling method I introduced effectively prevents evaporation from affecting TDS measurements, also makes the measurements more stable.
-   Experiment II: Testing Different Refractometer Models (VST & Atago & Difluid)
    -   In terms of stability, VST readings fluctuate the least, while Difluid and Atago show little difference in performance.
    -   Difluid readings are generally lower than VST, while Atago readings are generally higher.
    -   The three Difluid units also show a consistent high-to-low relationship in their readings, although not large, this relationship has appeared repeatedly in multiple experiments, suggesting it is not due to chance or experimental error.
-   Experiment III: Testing the Accuracy of Difluid R2 Extract with a Sucrose Solution
    -   The refractive index of the sucrose solution measured by all three Difluid units is lower than the theoretical value.
    -   The three Difluid units also show a consistent high-to-low relationship when measuring the refractive index of the sucrose solution, and this is very similar to the situation observed in Experiment II.

The results of Experiments II and III lead me to speculate that perhaps each Difluid unit has a different "constitution," meaning some machines consistently measure higher values, and others the opposite. This is an interesting finding, but it probably still requires more time for further verification.

I will also provide the experimental data to Difluid officials for reference, and perhaps in the future, there will be calibration methods to reduce these "constitutional" differences.

### Acknowledgments

-   Thanks to NTU Coffee Club, Li-Wei, and Henry for lending me their refractometers, allowing this article to have more data.

-   Thanks to [Quantitative Café](https://www.instagram.com/quantitativecafe/) for providing detailed execution methods for Experiment III, his article [Validating the Difluid R2 Extract Using Sugar Solutions](https://quantitativecafe.com/2023/02/11/validating-the-difluid-r2-extract/) and the post [How Evaporation Affects TDS](https://www.instagram.com/p/CiKsmE6Pz2r) are much more detailed than mine and highly recommended for everyone to read!
-   Thanks to Zinc for discussing and establishing the TDS measurement workflow in this article with me.