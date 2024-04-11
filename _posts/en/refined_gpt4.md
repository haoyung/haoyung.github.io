***<coffee_blogpost>
---
layout: post
title: "Accurately Measuring TDS"
description: "A plethora of experimental data and a rigorous TDS measuring procedure: Measuring TDS remains challenging and frustrating, but at least we've managed to achieve some accurate measurements."
tag: [review, tutorial]
category: articles
imgfolder: TDS
language_reference: measuring_tds
usemathjax: true
draft: true
sitemap: false
---

### Introduction

>   Warning: This article is a bit lengthy, please make use of the index!

Flavor is subjective, and so are coffee preferences.

However, we often need some objective data, not just to facilitate communication among enthusiasts but also to help us adjust parameters and improve a cup of poor coffee.

Over the past three years, in each semester’s coffee brewing theory course at National Taiwan University, I always start with the "objective" data of coffee, more specifically, TDS (a measure of concentration) and extraction rate.

Since the extraction rate is calculated from TDS, accurately measuring TDS has become the most critical part of obtaining "objective" data about coffee. However, precision in measuring TDS is extremely challenging. Any slight flaw in the process can result in significant measurement errors. It's common to see videos online of people measuring TDS absolutely incorrectly, which means these "objective data" measurements are no longer "objective" and lose their intended meaning.

Currently, articles and resources on TDS measurement are still quite scarce in Taiwan and the Chinese-speaking world. Therefore, I wrote this article in hopes of sparking further interest and research. In it, I thoroughly explain my TDS measurement process, conduct an experiment to test the effects of evaporation on TDS, and review several mainstream TDS meters available on the market.

All the experimental data from this article is [open source](https://docs.google.com/spreadsheets/d/1BQ1JWJI15t-FinSL4U_aB_1EJ0OXRj5Qxc3zgRUO_Ps/edit?usp=sharing), so please feel free to use it. If you have any insights or discoveries based on the data, please let me know!

### What is TDS?

We commonly use TDS, or total dissolved solids, to represent the concentration of coffee. By definition, TDS is the weight of coffee material $(M_{bev})$ in the coffee liquid divided by the weight of the coffee liquid $(B)$.

$$ \mathrm{TDS} = \frac{M_{bev}}{B} $$

For example, if we know that a 100g cup of coffee contains 1.4g of coffee material (assuming we've oven-dried the coffee and are left with 1.4g of solid), then the TDS is 1.4%.

In the commonly seen Golden Cup Chart, the vertical axis represents TDS.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brewing_control_chart.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">SCA's former version of the Brewing Control Chart (source: SCA)</span>
    </div>
</div>

### Why Measure TDS?

With TDS, we can back-calculate the content of coffee material in the coffee liquid, thereby determining the extraction rate, which is highly correlated with coffee flavor and is one of the most important (and objective) indicators of coffee quality.

Jonathan Gagné had already written a very detailed article in 2019 telling us how to calculate the extraction rate, so I won’t reinvent the wheel here - please refer to his superb piece [Measuring and Reporting Extraction Yield](https://coffeeadastra.com/2019/02/17/measuring-and-reporting-extraction-yields/).

Simply put, in filter-based extractions (like pour-over), we typically use the following formula to estimate the extraction yield (EY), where $B$ represents the weight of the coffee liquid, and $D$ represents the weight of the coffee used.

$$ \mathrm{EY} = \displaystyle\frac{\mathrm{TDS} * B}{D} $$

For instance, if we brew a cup of coffee using 10g of coffee beans to produce 170g of coffee with a TDS of 1.4%, then the extraction rate is:

$$ \mathrm{EY} = \displaystyle\frac{1.4\%*170g}{10g} = 23.8\%$$

### How to Measure TDS?

If you want to know the extraction rate, then you need to know the weight of the coffee material in the liquid, which can be done through the method described above, or many others. However, this obviously isn’t practical, so figuring out how to measure the concentration of coffee while it is still liquid becomes a crucial task.

We generally use a refractometer, an optical device, to measure TDS. The principle isn’t complex, but since many excellent articles already explain it well, I will not repeat it here. You can refer to [this IG post by Quantitative Café](https://www.instagram.com/p/Co2cgyOJS8V).

<div className="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div className="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/refractometer.webp" alt="" class="img-fluid responsive-image">
        <span className="image-span">Operating principle of a refractometer (source: IG, @quantitativecafe)</span>
    </div>
</div>

### Some Common Issues When Using a Refractometer

Anyone who has used a refractometer would agree that measuring TDS can be incredibly frustrating. The readings often fluctuate significantly if not measured carefully, making it hard to get consistent results.

#### Sample and Zeroing Temperature

The most common reason for unstable readings is probably inconsistent sample and zeroing temperatures. Usually, we start by zeroing the device with distilled water before measuring the coffee. Here, it’s crucial to make sure the temperature measured by the machine when zeroing with water is consistent with when measuring the coffee liquid (or as close as possible). Otherwise, as you repeat measurements, the readings may start to increase or decrease (depending on the model of the device) and will not converge, leaving us unable to ascertain the correct reading.

Typically, we cool the device, the zeroing water, and the coffee sample to room temperature before measuring. However, this is much harder than it sounds because even if we place all three in the same indoor location for a while, their temperatures might not be exactly the same. I will go into more detail about how to cool samples in the next section. 

#### Evaporation

Because refractometers are so sensitive to sample temperature, most people will remove a small amount of coffee liquid for testing, such as by pouring some coffee into a small cup and waiting for the sample to cool before measuring. However, this is where most mistakes are made.

With a smaller amount of liquid, the ratio of surface area to volume increases, making the amount of evaporation non-negligible. If the sample is left uncovered while cooling, evaporation could lead to a significant increase in TDS. This oversight results in many coffee enthusiasts often measuring significantly higher extraction rates (like 28% for pour-over) than what is typically possible under normal brewing conditions.

### My TDS Measuring Process

Here is the full procedure I use for measuring TDS, where much of the effort is dedicated to controlling the temperature difference between the sample and the zeroing water. If the temperature difference can be controlled within 0.1°C, more stable readings can be obtained.

Thus, the goal of this procedure is to minimize evaporation while keeping the temperature difference during zeroing and measurement within 0.1°C.

**The following technique will be referred to as the 'standard method'.**

#### Required Equipment

-   TDS Meter (Refractometer)
    -   Common choices include: [VST LAB Coffee III Refractometer](https://store.vstapps.com/products/vst-lab-coffee-iii-refractometer-2022), [Atago PAL-COFFEE](https://www.atago.net/product/?l=en&k=CCF59218), [Difluid R2 Extract](https://digitizefluid.com/products/r2-extract). Later in this article, these will be abbreviated as VST, Atago, and Difluid, respectively. Generally, the VST, being one of the earliest used for coffee measurement and the most expensive, is considered the standard, while Atago and Difluid are more affordable alternatives.
    -   I have three Difluid units and one Atago at hand, and for this article, I also borrowed a VST (thanks to reader Henry for lending his device!).
-   Small vials or centrifuge tubes, about 5ml
    -   Must be airtight, such as [this one](https://dgs.com.tw/product/G13570-12331/G13570-15450).
-   Plastic pipette
-   Lens paper
    -   Can be bought in places like chemical material stores. I use the widely available [KIMTECH](https://dgs.com.tw/product/headCode/D4EK-34155?gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppLfi6upKbFThMP-3fdZV0rOvTJRKJSDgiNxXNzMFcjkdnUVoZQnVrBoCA3wQAvD_BwE).
-   Tissue or cloth
    -   For absorbing the fluid from the device.
-   Distilled water
    -   For zeroing.
-   Small water bath
    -   Flat-bottomed are best (because the sample vial needs to stand inside); you can use a normal pour-over water tray.
-   Thermal gloves
    -   If available, otherwise use a cloth instead.

#### Sampling and Setup

1.   Once the coffee is brewed, stir thoroughly to avoid concentration gradients.
2.   Use a plastic pipette to draw about 5ml of coffee liquid and put it into a sample vial. Try to fill the vial as much as possible to minimize the headspace and then immediately cap it.
3.   Place the sample vial into a small basin filled with room temperature distilled water to cool.
4.   Place the TDS meter next to the small water bath (to ensure similar temperatures for both) and let them sit for about 15-30 minutes to cool down.
5.   Once cooled, wearing thermal gloves (or using a cloth), shake the sample vial, open the cap, and stand it in the water bath to keep the sample and water temperatures consistent.

#### Measurement

With the sample, zeroing water, and TDS meter now at similar temperatures, you can start measuring. I’ll demonstrate using my commonly used Difluid as an example.

1.   Ensure the TDS meter's sample chamber is clean. If it's dirty, you can spray some alcohol or acetone on lens paper to clean it.
2.   Drop a small amount of distilled water into the sample chamber, wait about 10 seconds, and then zero the device.
     -   Honestly, I’m not sure why we need to wait, but the Difluid manual specifically mentions this step, maybe to allow the temperature to stabilize further.
3.   Use a tissue or cloth to dry the liquid off. At this stage, do not apply pressure to avoid scratching the sample chamber.
4.   Wipe the sample chamber clean with lens paper.
5.   Then, drop a small amount of the sample and measure while observing temperature changes. The temperature during zeroing and when measuring the sample should not differ by more than 0.1°C.
     -   If the temperature difference is still greater than 0.1°C, repeat steps 1 to 5 until the temperature difference can be controlled within 0.1°C.
6.   Under the condition that the temperature difference is maintained within 0.1°C, keep measuring until the same value appears three times consecutively. This value is then taken as the measurement result.

### Other Worthwhile TDS Measurement Approaches

#### Jonathan Gagné's Method

For detailed information, please refer to one of Jonathan Gagné's most famous articles [Measuring Coffee Concentration with a 0.01% Precision](https://coffeeadastra.com/2019/09/21/measuring-coffee-concentration-with-a-0-01-precision/).

Jonathan thoroughly measures and explains various factors that could cause measurement errors, but the whole method is quite tedious and not so suitable for measuring a large number of samples in a short time. If I recall correctly, Jonathan mentioned that he has switched to the Two Spoon Method for routine measurements, therefore, we won’t take up space to discuss it here. If you’re interested, please be sure to read his article (it’s very interesting and includes a lot of important points to consider during measurement!).

#### Two Spoon Method

When speaking about TDS measurement procedures, we certainly can't forget about the Two Spoon Method, another technique proposed by Jonathan Gagné. As the name suggests, it involves using two tasting spoons for the measurement process. Below I will briefly explain how it is conducted and why I did not use this method in this experiment. For a more detailed introduction to the Two Spoon Method, please see [pocketsciencecoffee](https://www.instagram.com/pocketsciencecoffee/)'s article [My Current Refractometry Workflow](https://pocketsciencecoffee.com/2022/12/07/my-current-refractometry-workflow/).

##### Procedure

First, you'll need to prepare two room-temperature spoons (I prefer using cupping spoons) and room-temperature distilled water for zeroing.

After stirring the brewed coffee evenly, use one spoon to scoop a small sample (no more than 2 ml). Wait briefly, then pour about 1 ml of the sample onto the other spoon and wait again. Finally, pour directly into the sample chamber to measure. Because the sample volume is very small, the large heat capacity of the spoon will quickly bring the coffee to near room temperature.

As with my own measurement process, the goal here is to keep the temperature difference between the sample and zeroing within 0.1°C. If the difference is too great, reduce the sample volume.

##### Why This Method Was Not Used in This Experiment

Firstly, the Two Spoon Method is clearly not suitable for measuring a large number of samples in a short time (I don't have that many cupping spoons...). Also, to ensure rapid cooling of the sample, a small sample volume is necessary, which makes the following experiments measuring the same sample with multiple refractometers impossible.

#### Considerations

Perhaps the phrase "the sample volume must not be too large" has set off alarms for many of you. When the sample volume is very small, readings are extremely susceptible to the effects of evaporation. Although pocketsciencecoffee states in the article, that keeping the measurement time under three minutes largely mitigates significant impacts, to be safe I suggest keeping the measurement time to within a minute (or even half a minute).

### Pre-experiment: Data Measurement Methods

As we handle a large number of samples in the experiment, the temperature of the refractometer will inevitably rise with continuous use, making it hard to maintain a temperature difference of 0.1°C, which also makes it tough to obtain three consecutive consistent readings.

To ensure reasonable timing and accuracy in the experiment, I adopted the following rule for taking values: maintain a temperature difference with zeroing within 1°C, and keep measuring until the range (maximum minus minimum) of three consecutive readings is within 0.01%. Then, select the value that appears most frequently.

For instance, if the readings in order are [1.35%, 1.35%, 1.36%], then take 1.35%. If they are [1.35%, 1.36%, 1.37%, 1.36%], take 1.36% (because the range of the first three readings, 0.02%, exceeds 0.01%, necessitating a fourth measurement).

In most cases, this method of judgment allowed me to obtain a definite measurement value within the first three readings (meaning the range of the first three readings did not exceed 0.01%), indicating that although the temperature difference was larger, the readings were still relatively stable, which increased my confidence in this approach.

### Experiment 1: A Common Mistake—The Impact of Evaporation on TDS

I often see significantly high extraction rates on coffee forums, which are usually a result of flawed measurement techniques. Besides unstable temperatures, a common oversight is forgetting how evaporation impacts TDS readings.

In previous sections, I mentioned that many people’s TDS measurement processes involve cooling the sample in an uncovered small cup, like in [Matt Perger](https://www.baristahustle.com/matt-perger/)’s measurement flow video [Coffee Refraction 101](https://www.youtube.com/watch?v=fL7vNbEcsxk).

The impact of evaporation is closely linked to the sample volume and cooling duration. Obviously, the longer the cooling duration, the greater the impact of evaporation. However, the impact of sample volume is perhaps less intuitive. With smaller samples, the ratio of surface area to volume drastically increases, causing the increase rate of sample concentration due to evaporation to also sharply rise during cooling. The impact of sample volume on TDS during measurement is significantly greater than that of cooling duration and may be somewhat counterintuitive.

For example, when the coffee is just brewed and sitting in the pot, I’m not worried about evaporation because the surface area exposed to air (the opening of the pot) is too small relative to the total volume of coffee, so it doesn’t affect the results. But once I start sampling, because the volume is very small, I need to be very careful about whether circulating air can touch the sample; otherwise, the reading could increase dramatically.

In Matt Perger's video, since the whole cooling process only lasts about 15 seconds, the impact of evaporation might not be so substantial. However, given the extremely small sample volume (visually estimated to be only about 0.5 ml), this approach is still very risky. If you really need to cool such a small volume of sample in an unsealed environment, I recommend not exceeding one minute.

In this experiment, I will compare the TDS measurements of samples cooled in sealed and unsealed environments. I chose two combinations of sample volume and cooling duration as the experimental groups for cooling in unsealed environments: 1 ml of sample volume cooled for 5 minutes, and 5 ml of sample volume cooled for 30 minutes.

#### Experimental Procedures

1.   Brew a pot of coffee and measure the liquid weight so that later, we can convert TDS into extraction rate.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img***src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp1-4.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Coffee used in Experiment 1 and brewing parameters<br>Utilizing the tricolate, a device not yet introduced on this blog<br>Brewed with <a href="https://www.seycoffee.com/products/2024-enrique-merino-lugmapata-l1-ecuador">SEY's Lugmapata Washed L1</a> (a truly remarkable coffee)</span>
         </div>
     </div>

2.   Thoroughly stir after brewing, then divide the samples into three groups:

     - Control Group (Control): Take 5 samples of 5 ml each, using the standard method outlined previously (sampled in centrifuge tubes and cooled in distilled water).
     - Experimental Group One (NL-5min, No Lid 5min): Take 5 samples of 1ml each, allow to cool in an uncovered cupping bowl for 5 minutes.
     - Experimental Group Two (NL-30min, No Lid 30min): Take 5 samples of 5ml each, allow to cool in an uncovered cupping bowl for 30 minutes.

     <div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp1.webp" alt="" class="img-fluid responsive-image">
             <span class="image-span">Experimental groups (NL-5min & NL-30min) in cupping bowls and the control group (Control) in sealed centrifuge tubes</span>
         </div>
     </div>

3.   For this experiment, I used the most representative VST and my regular Difluid to measure using the standard method.


#### Experiment Results

Table I shows the TDS measurements for the 15 samples across three groups in Experiment 1, with the upper half being the readings from VST and the lower half from Difluid.

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
        <span class="image-span">Table I: TDS measurement results for the uncovered experimental groups (NL-5min & NL-30min) and the control group (Control) in Experiment 1</span>
    </div>
</div>

Tables II and III respectively record the average and standard deviation of TDS and extraction rate for each group. 

<div class="footnote">
  <div class="footnote-label">[B]</div>
  <div class="footnote-content">In this article, data are presented as $\mu \pm \sigma$, where $\mu$ represents the average and $\sigma$ represents the standard deviation.</div>
</div>

| ΔTDS    | NL-5min         | NL-30min        | Control         |
| ------- | --------------- | --------------- | --------------- |
| VST     | 1.44 ± 0.00 (%) | 1.45 ± 0.00 (%) | 1.39 ± 0.00 (%) |
| Difluid | 1.41 ± 0.01 (%) | 1.41 ± 0.00 (%) | 1.35 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table II: Average TDS and standard deviation</span>
    </div>
</div>


| ΔEY     | NL-5min          | NL-30min         | Control          |
| ------- | ---------------- | ---------------- | ---------------- |
| VST     | 25.87 ± 0.07 (%) | 26.01 ± 0.09 (%) | 24.93 ± 0.09 (%) |
| Difluid | 25.33 ± 0.13 (%) | 25.44 ± 0.09 (%) | 24.29 ± 0.00 (%) |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table III: Average extraction rate and standard deviation</span>
    </div>
</div>


Figure I graphically represents the data from Tables II and III, where the left half corresponds to values measured using VST and the right half to those from Difluid. The error bars represent a 95% confidence interval (approximately two standard deviations).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1-4.webp" alt="" class="img-fluid">
        <span class="image-span">Figure I: Average TDS and extraction rates for the experimental groups (NL-5min & NL-30min) and the control group</span>
    </div>
</div>


It's evident that the TDS measurements of the two experimental groups, which were cooled in cupping bowls without any cover to prevent evaporation, were higher than the control group. A t-test confirmed that this difference was statistically significant. Additionally, the measurements from the more affordable Difluid displayed smaller standard deviations for the Control group, suggesting higher measurement stability.<sup class="footnote-sup">[C]</sup>

<div class="footnote">
  <div class="footnote-label">[C]</div>
  <div class="footnote-content">The differences were not as pronounced when using the VST.</div>
</div>

#### Discussion

Tables IV and V record the differences in average TDS and extraction rate between the two experimental groups (NL-5min & NL-30min) and the control group.

| TDS     | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.05%  | +0.06%   |
| Difluid | +0.06%  | +0.06%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table IV: Difference in average TDS between the experimental groups and the control group</span>
    </div>
</div>


| EY      | NL-5min | NL-30min |
| ------- | ------- | -------- |
| VST     | +0.94%  | +1.08%   |
| Difluid | +1.04%  | +1.15%   |

<div class="row mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table V: Difference in average extraction rate between the experimental groups and the control group</span>
    </div>
</div>