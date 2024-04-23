---
layout: post
title: "Precisely Measuring TDS"
description: "Exploring the challenges and frustrations of precise TDS measurement—my detailed refractometer workflow, extensive experiments on evaporation's impact, along with comparisons and validations of popular refractometer models."
tag: [experiment, review, tutorial]
category: articles
imgfolder: TDS
image: /assets/img/TDS/refractometers.webp
image_orientation: horizontal
image_caption: "The refractometers that are used to measure TDS in this article and a sample that is being cooled"
language_reference: measuring_tds
usemathjax: true
---

### Introduction

>   Warning: This article is a bit lengthy, so please make good use of the table of contents!

Flavor preferences are highly subjective, and this is especially true for coffee. However, objective data remains crucial for communication among enthusiasts and for fine-tuning brewing parameters to improve a subpar cup.

In the extraction theory course I teach each semester at NTU Coffee Club, I always begin with the *objective* data of coffee: TDS (total dissolved solids, a measure of concentration) and EY (extraction yield).

Since extraction yield is calculated from TDS, accurate TDS measurement is vital for obtaining meaningful *objective* coffee data. However, precisely measuring TDS is extremely challenging. Even minor flaws in the process can lead to significant errors, rendering the supposedly *objective* data meaningless.

Currently, there is a scarcity of Chinese language resources on proper TDS measurement. This article aims to help fill that gap and stimulate further discussion. I will explain my detailed TDS measurement workflow, experimentally assess the impact of evaporation on TDS, and compare the performance of several popular refractometer models including [VST LAB Coffee III](https://store.vstapps.com/products/vst-lab-coffee-iii-refractometer-2022), [ATAGO PAL-COFFEE](https://www.atago.net/product/?l=en&k=CCF59218), and [DiFluid R2 Extract](https://digitizefluid.com/products/r2-extract).

All experimental data is [open source](https://docs.google.com/spreadsheets/d/1BQ1JWJI15t-FinSL4U_aB_1EJ0OXRj5Qxc3zgRUO_Ps/edit?usp=sharing). Please feel free to use it and share any new insights you glean from the data!

### What is TDS?

TDS indicates the strength or concentration of coffee. It is defined as the mass of coffee compounds that made it into your beverage $(M_{bev})$ divided by the total beverage weight $(B)$.

$$ \mathrm{TDS} = \frac{M_{bev}}{B} $$

For example, if a 100g cup of coffee contains 1.4g of coffee compounds (assuming we dry the coffee in an oven and end up with 1.4g of coffee solids), then the TDS is 1.4%.

The vertical axis of SCA's commonly seen Brewing Control Chart represents TDS.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brewing_control_chart.webp" alt="" class="img-fluid responsive-image-vertical">
        <span class="image-span">SCA's old version of the Brewing Control Chart (source: SCA)</span>
    </div>
</div>

### Why Measure TDS?

With TDS and the beverage weight, we can first calculate the mass of extracted coffee compounds and then the extraction yield. Extraction yield is one of the most important objective indicators of coffee flavor.

Jonathan Gagné wrote a very detailed article back in 2019 explaining how to calculate the extraction yield, so I won't reinvent the wheel here. Please refer to his masterpiece [Measuring and Reporting Extraction Yield](https://coffeeadastra.com/2019/02/17/measuring-and-reporting-extraction-yields/).


In short, for percolation brewing methods (e.g. pour-over and espresso), extraction yield (EY) is typically estimated using this formula, where $B$ is the beverage weight and $D$ is the coffee dose:

$$ \mathrm{EY} = \displaystyle\frac{\mathrm{TDS} * B}{D} $$

For example, if we brew a cup of coffee weighing 150g with 1.4% TDS using 10g of beans, the extraction yield is:

$$ \mathrm{EY} = \displaystyle\frac{1.4\%*150g}{10g} = 21\%$$

### How to Measure TDS?

To calculate extraction yield, we need to know the weight of the coffee compounds in the beverage. This could be done by drying the coffee in an oven as mentioned earlier, but obviously, this is not very practical. Instead, we use an optical refractometer to measure the TDS of liquid coffee. The principle is not complicated, and many excellent articles already explain it, such as [Quantitative Café's Instagram post](https://www.instagram.com/p/Co2cgyOJS8V).

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/refractometer.webp" alt="" class="img-fluid responsive-image-vertical">
        <span class="image-span">How a refractometer works (source: IG, @quantitativecafe)</span>
    </div>
</div>

### Common Issues When Using a Refractometer

Anyone who has used a refractometer would agree that measuring TDS with a refractometer can be extremely frustrating. Without careful measurement, readings often fluctuate significantly, making it difficult to obtain stable results.

#### Sample and Zeroing Temperature

Temperature differences between the zeroing liquid (distilled water) and the coffee sample are a common cause of unstable readings. The temperature during zeroing must match the sample temperature as closely as possible. Otherwise, repeated measurements will likely show a continuous increase or decrease in the readings (the direction seems to depend on the device model) without converging on a consistent value.

Typically, the device, distilled water for zeroing, and coffee sample are all cooled to room temperature before measuring. However, ensuring they are at exactly the same temperature is surprisingly difficult, even when kept together indoors. The next section details how I carefully control sample temperature.

#### Evaporation

Due to the strict sample temperature requirements, most people take a small amount of cooled coffee liquid, such as pouring some into a cup, before measuring with the refractometer. However, this is where significant errors often occur.

With a smaller sample volume, the surface area to volume ratio increases, making evaporation non-negligible. If the sample is unsealed while cooling, evaporation can significantly increase the TDS. This common oversight leads many coffee enthusiasts to frequently report implausibly high extraction yields online (e.g. 28% for pour-over). I will experimentally confirm the impact of evaporation in a later section.

### My TDS Measurement Workflow

Here is my complete TDS measurement workflow. Most of the effort focuses on controlling the temperature difference between the sample and zeroing liquid to within 0.1°C, which I have found enables more stable readings.

The goal is to minimize evaporation while keeping the zeroing and sample temperatures within 0.1°C.

**I will refer to this as the *standard method* in the following text.**

#### Required Equipment

-   Refractometer
    -   Common choices: [VST LAB Coffee III](https://store.vstapps.com/products/vst-lab-coffee-iii-refractometer-2022), [ATAGO PAL-COFFEE](https://www.atago.net/product/?l=en&k=CCF59218), [DiFluid R2 Extract](https://digitizefluid.com/products/r2-extract). I will abbreviate them as VST, ATAGO, and DiFluid.
    -   VST is the most expensive and considered the standard, while ATAGO and DiFluid are more affordable alternatives.
    -   I have three DiFluids and one ATAGO. I also borrowed a VST for this article (thanks to my reader Henry!).
-   Sample bottles or centrifuge tubes in the size of about 5ml
    -   must be airtight with a lid.
-   Plastic pipette
-   Lint-free microfiber cloth or lens cleaning paper like KIMTECH
    - microfiber cloth is recommended by [PocketScienceCoffee](https://www.instagram.com/pocketsciencecoffee/) as it can be less abrasive than lens cleaning paper during heavy use.
-   Tissue or cloth to roughly dry liquid on the device
-   Distilled water for zeroing
-   Small flat-bottomed water tank for cooling the sample bottle
-   Insulated gloves if available, otherwise use cloth

#### Sampling and Cooling

1.   After brewing, thoroughly stir the coffee to homogenize it.
2.   Use a pipette to transfer about 5ml of coffee into a sample bottle. Fill the bottle as much as possible to minimize air space. Immediately close the lid.
3.   Fill the small water tank with room temperature distilled water and place the sealed sample bottle in it for a water bath to cool.
4.   Place the refractometer next to the water tank (for temperature equilibration) and let everything sit for 15-30 minutes.
5.   After cooling, wear insulated gloves or use a cloth to handle the sample bottle to prevent heating it up. Shake it to homogenize, open the lid, and place it back in the water tank to maintain the same temperature as the distilled water.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/cooling_sample.webp" alt="" class="img-fluid responsive-image-horizontal">
        <span class="image-span">A sample that is being cooled in my beloved Orea Porcelain Sense Cup (proudly made in Taiwan!)</span>
    </div>
</div>

#### Measurement

After the above steps, the sample, distilled water for zeroing, and refractometer should all be at roughly the same temperature. Now we can begin measuring.

I will demonstrate using the DiFluid, which I use most frequently.

1.   Ensure the refractometer lens is clean. If dirty, spray a little Isopropyl alcohol on lens paper to clean it.
2.   Place a few drops of distilled water on the lens, wait about 10 seconds, then zero the device.
     -   I don't know the reason for waiting, but DiFluid's manual specifies this, likely to further stabilize the temperature.
3.   Use a tissue or cloth to gently dry the lens, being careful not to apply pressure and scratch it.
4.   Wipe the lens clean with Kimwipes.
5.   Place a few drops of sample on the lens and observe the temperature. The difference between zeroing and sample temperatures should not exceed 0.1°C.
     -   If it does, repeat steps 1-5 until the difference is within 0.1°C.
6.   Under the condition that the temperature difference is within 0.1°C, continue measuring until you get three identical consecutive readings. This is your measurement result.

### Other TDS Measurement Workflows Worth Considering

#### Jonathan Gagné's Method

For details, see Jonathan Gagné's famous article [Measuring Coffee Concentration with a 0.01% Precision](https://coffeeadastra.com/2019/09/21/measuring-coffee-concentration-with-a-0-01-precision/).

Jonathan thoroughly measured and explained various factors that could cause measurement errors. However, his method is quite cumbersome and not very suitable for measuring many samples in a short period of time. If I remember correctly, Jonathan mentioned he currently uses the two-spoon method regularly, so I won't spend time introducing his full method here. Please read his fascinating and detailed article if you're interested!

#### Two-Spoon Method

Speaking of TDS measurement workflows, the two-spoon method, which also comes from Jonathan Gagné, is definitely worth mentioning. As the name suggests, it involves using two spoons to measure. I will briefly explain the procedure and why I did not use it for the experiments in this article. For a more detailed introduction, please read [My Current Refractometry Workflow](https://pocketsciencecoffee.com/2022/12/07/my-current-refractometry-workflow/) by PocketScienceCoffee.

##### Procedure

First, prepare two room-temperature spoons (cupping spoons work well) and room-temperature distilled water for zeroing.

After thoroughly stirring the brewed coffee, use one spoon to scoop a small sample (no more than 2 ml). Wait a moment, then pour about 1 ml from the first spoon into the second spoon. Wait again, then pour the sample from the second spoon directly onto the refractometer lens for measurement. The spoons' high thermal conductivity and enough heat capacity will rapidly cool this small volume of coffee to near room temperature.

As with my method, the goal is to keep the sample and zeroing temperature difference within 0.1°C. If the difference is too large, use an even smaller sample volume.

##### Why I Didn't Use This Method Here

The two-spoon method is obviously not suitable for measuring many samples quickly (I don't have that many cupping spoons!). Additionally, to enable rapid cooling, the sample volume must be very small, making it impossible to measure the same sample with multiple refractometers, which I needed to do in these experiments.

##### Precautions

The phrase "sample volume must be very small" may have raised red flags. When the sample is tiny, the reading is very susceptible to evaporation effects. Although PocketScienceCoffee's article states that the impact should not be too significant if the measurement is completed within three minutes<sup class="footnote-sup">[B]</sup>, I would still recommend keeping it under one minute (or even 30 seconds) to be safe.

<div class="footnote">
  <div class="footnote-label">[B]</div>
  <div class="footnote-content">PocketScienceCoffee mentioned in his Instagram comment that he tested a sample size of about 0.5 ml at starting temperatures of 80°C, 90°C, and 100°C, and found no evaporation loss in weight at 1, 2, and 3 minutes after sampling, indicating that we can use this method with less concern.</div>
</div>

### Pre-Experiment: Data Collection

Next, we move on to the experiments. When handling many samples, the refractometer temperature will inevitably rise with continuous use, making it difficult to consistently meet the 0.1°C temperature difference limit. With larger temperature differences, getting three stable consecutive readings also becomes less likely.

To obtain readings within a reasonable time during the experiments, I adopted this rule: keep the zeroing temperature difference within 1°C, and continuously measure until the range (maximum minus minimum) of three consecutive readings is within 0.01%, then take the most frequent value.

For example, if the readings are [1.35%, 1.35%, 1.36%], I take 1.35%. If they are [1.35%, 1.36%, 1.37%, 1.36%], I take 1.36% (because the first three readings have a 0.02% range, exceeding 0.01%, so a fourth measurement is needed).

In most cases, this method allows me to obtain a definite measurement within the first three readings (i.e. their range does not exceed 0.01%), indicating that although the temperature difference is larger, the readings are still roughly stable, increasing my confidence in the results.

### Experiment I: A Common Mistake – The Impact of Evaporation on TDS

I often see implausibly high extraction yields reported in the coffee community. In my experience, yields over 27% for non-pressurized brewing (e.g. pour-over) and over 28% for pressurized brewing (e.g. espresso) are extremely rare. When such values are reported, it is usually due to measurement flaws. Besides temperature instability, a common oversight is forgetting the impact of evaporation on TDS.

As mentioned, many people's TDS measurement workflows involve unsealed cooling of a small sample volume, such as in [Matt Perger](https://www.baristahustle.com/matt-perger/)'s video [Coffee Refraction 101](https://www.youtube.com/watch?v=fL7vNbEcsxk).

The impact of evaporation depends on sample volume and cooling time. Obviously, longer cooling means greater evaporation. However, the effect of sample volume may be less intuitive. With a smaller volume, the surface area to volume ratio sharply increases, causing the sample to concentrate more rapidly as it cools. In TDS measurement, sample volume often impacts the result more than cooling time, which can be counterintuitive.

For example, when coffee is freshly brewed in a carafe, I don't worry about evaporation because the exposed surface area is tiny compared to the full pot, so the effect on TDS is negligible. However, once I take a small sample, I must be very careful about exposing it to circulating air, or the TDS will likely increase.

In Matt Perger's video, the entire cooling process lasts only about 15 seconds, so evaporation may not have a huge impact. However, it is still very risky with such a small sample volume (visually, it appears to be only about 0.5 ml or even less). If unsealed cooling of a tiny sample is absolutely necessary, I recommend not exceeding 1 minute.

In the following experiment, I will compare TDS measurements of sealed and unsealed cooling. I chose two combinations of sample volume and cooling time for unsealed cooling: 1 ml cooled for 5 minutes, and 5 ml cooled for 30 minutes.

#### Procedure

1.   Brew coffee and measure the beverage weight, so we can later calculate extraction yield.

     <div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp1-4.webp" alt="" class="img-fluid responsive-image-vertical">
             <span class="image-span">Coffee and brewing parameters used in Experiment I<br>Using the tricolate, which I haven't introduced on this blog yet<br>Brewing <a href="https://www.seycoffee.com/products/2024-enrique-merino-lugmapata-l1-ecuador">SEY's Lugmapata Washed L1</a> (truly an impressive coffee)</span>
         </div>
     </div>

2.   After thorough stirring, take samples. All samples are divided into three groups:

     -   Control (CTL):  
     5 samples of 5 ml each, using the standard sealed cooling method introduced earlier (in centrifuge tubes immersed in distilled water).
     -   Experimental Group I (E5, Evaporation 5 min):  
     5 samples of 1ml each, cooled in uncovered cupping bowls for 5 minutes. 
     -   Experimental Group II (E30, Evaporation 30 min):  
     5 samples of 5ml each, cooled in uncovered cupping bowls for 30 minutes.

     <div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp1.webp" alt="" class="img-fluid responsive-image-vertical">
             <span class="image-span">Experimental groups (E5 & E30) in uncovered cupping bowls and the control group (Control) in sealed centrifuge tubes</span>
         </div>
     </div>

1.   I used one VST, the most representative refractometer, and one DiFluid, the model I use most, to measure each sample using the standard method.

#### Results

Table 1 shows the TDS measurements for all 15 samples, with VST in the top half and DiFluid in the bottom half.

<table class="table-i">
<thead>
  <tr style="border-bottom: 1px solid var(--main-text-color);">
    <th></th>
    <th>E5</th>
    <th>E30</th>
    <th>CTL</th>
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
    <td rowspan="5" style="font-weight: bold">DiFluid</td>
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
<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 1: TDS measurements for the unsealed experimental groups (E5 & E30) and sealed control group (Control)</span>
    </div>
</div>

<style>
  .table-i th:nth-child(1), .table-i th:nth-child(2), .table-i th:nth-child(3), .table-i td:nth-child(1), .table-i td:nth-child(2) {
    border-right: 1px solid var(--main-text-color);
  }
</style>

Tables 2 and 3 show the average and standard deviation<sup class="footnote-sup">[C]</sup> of TDS and extraction yield for each group.

<div class="footnote">
  <div class="footnote-label">[C]</div>
  <div class="footnote-content">In this article, data are presented as $\mu \pm \sigma$, where $\mu$ is the average and $\sigma$ is the standard deviation.</div>
</div>

| TDS    | E5         | E30        | CTL         |
| ------- | --------------- | --------------- | --------------- |
| VST     | 1.44 ± 0.00 (%) | 1.45 ± 0.00 (%) | 1.39 ± 0.00 (%) |
| DiFluid | 1.41 ± 0.01 (%) | 1.41 ± 0.00 (%) | 1.35 ± 0.00 (%) |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 2: The average and standard deviation of the measured TDS</span>
    </div>
</div>

| EY     | E5          | E30         | CTL          |
| ------- | ---------------- | ---------------- | ---------------- |
| VST     | 25.87 ± 0.07 (%) | 26.01 ± 0.09 (%) | 24.93 ± 0.09 (%) |
| DiFluid | 25.33 ± 0.13 (%) | 25.44 ± 0.09 (%) | 24.29 ± 0.00 (%) |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 3: The average and standard deviation of the calculated extraction yield</span>
    </div>
</div>

Figure 1 visualizes Tables 2 and 3, with VST on the left and DiFluid on the right. Error bars represent a 95% confidence interval (roughly two standard deviations).

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig1.webp" alt="" class="img-fluid">
        <span class="image-span">Figure 1: Average TDS and extraction yield for the experimental groups (E5 & E30) and control</span>
    </div>
</div>

The unsealed experimental groups have higher TDS than the sealed control. A t-test confirmed this difference is statistically significant. We can also see that the control group has a smaller confidence interval than the experimental groups when measured with the more affordable DiFluid, indicating higher precision.<sup class="footnote-sup">[D]</sup>

<div class="footnote">
  <div class="footnote-label">[D]</div>
  <div class="footnote-content">When using VST, the differences between the groups are not significant.</div>
</div>

#### Discussion

Tables 4 and 5 show the differences in average TDS and extraction yield between the experimental groups (E5 & E30) and the control.

| ΔTDS    | E5 | E30 |
| ------- | ------- | -------- |
| VST     | +0.05%  | +0.06%   |
| DiFluid | +0.06%  | +0.06%   |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 4: Average TDS differences between the experimental groups (E5 & E30) and control</span>
    </div>
</div>

| ΔEY     | E5 | E30 |
| ------- | ------- | -------- |
| VST     | +0.94%  | +1.08%   |
| DiFluid | +1.04%  | +1.15%   |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 5: Average extraction yield differences between the experimental groups (E5 & E30) and control</span>
    </div>
</div>

With both VST and DiFluid, evaporation increased the average extraction yield by about 1% for both experimental groups. Anyone who regularly measures TDS would agree that a 1% extraction yield difference is quite significant. While this might not be too surprising for a 30-minute cooling time, the fact that just 5 minutes of unsealed cooling can have such an impact might be counterintuitive, highlighting the need for extra care with small sample volumes.

Evaporation is so difficult to avoid because it increases with both cooling time and exposed surface area. To improve accuracy, we need sufficient sample cooling, which also depends on both cooling time and surface area. However, this typically leads to greater evaporation. A straightforward way to mitigate this issue is by storing the sample in a sealed container, which reduces its exposure to circulating air.

This experiment illustrates the importance of preventing evaporation during TDS measurement. The standard sampling and cooling method I introduced effectively mitigates evaporation and enables more stable measurements.

### Experiment II: Testing Different Refractometer Models

Compared to the expensive VST, ATAGO and DiFluid are much more affordable, but are they significantly less accurate?

In this experiment, I used a VST, an ATAGO, and three DiFluids to measure 20 samples from the same coffee to assess each device's accuracy and stability. Additionally, I conducted a measurement using the two-spoon method with VST immediately after brewing, which served as a reference point.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/setup_exp2.webp" alt="" class="img-fluid responsive-image-horizontal">
        <span class="image-span">Measuring with five refractometers simultaneously<br>From left to right: three DiFluids, ATAGO, and VST</span>
    </div>
</div>

#### Procedure

1.   Brew coffee and measure the beverage weight.

     <div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
         <div class="col-md-12">
             <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brew_exp2-3.webp" alt="" class="responsive-image-vertical img-fluid">
             <span class="image-span">Coffee and brewing parameters used in Experiment II<br>Using the parameters from <a href="{%- post_url en/2023-11-01-Achieving High Extraction with Low Agitation %}">"Achieving High Extraction with Low Agitation"</a><br>Brewing a <a href="https://www.seycoffee.com/products/2024-mayor-domo-la-granada-colombia">Colombia Washed Pink Bourbon from SEY</a></span>
         </div>
     </div>

2.   Measure the coffee using the two-spoon method with VST, recording the results as a preliminary reference.

3.   After thorough stirring, use the standard method to take 20 samples of 5ml each.

4.   Measure each sample in order with all five refractometers using the standard method.

#### Results

Figure 2 plots the TDS measurements for all 20 samples with each refractometer.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig2.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 2: Line chart of TDS measurements for 20 samples with three DiFluids, ATAGO, and VST</span>
    </div>
</div>

Table 6 shows the average measurement and standard deviation for each device.

| DiFluid #1      | DiFluid #2      | DiFluid #3      | ATAGO           | VST             |
| --------------- | --------------- | --------------- | --------------- | --------------- |
| 1.36 ± 0.01 (%) | 1.35 ± 0.01 (%) | 1.33 ± 0.01 (%) | 1.41 ± 0.01 (%) | 1.38 ± 0.00 (%) |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 6: Average measurements and standard deviations for five refractometers</span>
    </div>
</div>

Figure 2 and Table 6 show a generally stable relationship between the five devices' measurements: ATAGO > VST > DiFluid #1 > DiFluid #2 > DiFluid #3. This will be discussed further in Experiment III.

I also plotted the measurements as [violin plots](https://en.wikipedia.org/wiki/Violin_plot). The three horizontal lines from top to bottom represent the maximum, average, and minimum values. The shaded area represents the probability distribution of the measurements. Additionally, I marked the measurement obtained from the two-spoon method using VST, which shows little difference compared to the average measurement.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig3.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 3: Violin plots of measurements for five refractometers</span>
    </div>
</div>

VST has a noticeably narrower measurement range, indicating higher precision. ATAGO and DiFluids are slightly less precise but still significantly exceed their advertised precision (DiFluid 0.03%, ATAGO 0.15%) with standard deviations only about 0.01%.

#### Discussion

I did not expect such precise data. Even DiFluid #2, with the largest measurement range, had a full range (maximum minus minimum) of only 0.04%, which is surprisingly small. This demonstrates that the standard sampling, cooling, and measurement process introduced in this article can help obtain very precise measurements.

Most interesting to me is the stable relationship between the refractometers. I repeated the experiment and plotted the data in Figures 4 and 5, and we can still observe a similar trend: ATAGO > VST > DiFluid #1 > DiFluid #2 > DiFluid #3.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig4.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-4">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig5.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 5 and 6: Line chart and violin plot from a repeat experiment showing similar trends</span>
</div>

However, after some research, I found that this trend of certain devices consistently measuring higher or lower differs from others' conclusions, such as in [@espressofun](https://www.instagram.com/espressofun/)'s article [DiFluid R2 Coffee Refractometer Device Variation](https://rmckeon.medium.com/difluid-r2-coffee-refractometer-device-variation-20cf1a663d99), which may require further verification.

### Experiment III: Testing DiFluid R2 Extract Accuracy with Sucrose Solution

In Experiment II, I noticed that all three DiFluids measured lower than the widely accepted standard VST, and there was a consistent high-to-low relationship among the DiFluids. This made me wonder if there was a "standard solution" that could verify this relationship and determine which device was closest to the theoretical value.

DiFluid is the only one of these refractometers that displays the refractive index, the raw value the device measures. Different devices may use different algorithms to convert refractive index to TDS. For more on refractive index, I highly recommend [Quantitative Café](https://quantitativecafe.com/)'s enlightening article [Estimating TDS from Refractive Index](https://quantitativecafe.com/2023/02/27/estimating-tds-from-refractive-index/).

Since the refractive indices of many common solutions have been measured by others, we can use these values to check if DiFluid matches previous experiments. After some research, I found that a 10% sucrose solution could test DiFluid's accuracy. Below are the preparation and calculation steps I used.

>   Special thanks to [Quantitative Café](https://quantitativecafe.com/) for providing data and detailed methods!

#### Procedure

For clarity, I will use my own data as an example.

1.   Zero the scale, preferably one with 0.01g precision.

2.   Measure the container weight (I used a lightweight plastic cup), which was 7.98g.

3.   Add about 10g of fine white sugar. Total weight became 17.99g, so 17.99 - 7.98 = 10.01 (g) of sugar was added.

4.   Add about 90g of 60°C distilled water. Total weight became 108.02g (this weight is not important and will be re-measured after cooling to exclude evaporation effects).

5.   After thorough mixing, seal with plastic wrap and cool at room temperature for about 1 hour.

6.   Re-measure the total weight, which was 107.77g, meaning there was 107.77 - 7.98 = 99.79 (g) of solution containing 10.01g of sugar, indicating a concentration of:

     $$ \displaystyle\frac{10.01}{99.79} \approx 10.03\%$$

7.   Use the following table (thanks again to [Quantitative Café](https://github.com/quantitativecafe/blog/blob/main/refractive-index/refractive-index.xlsx) and [Weber State University](https://faculty.weber.edu/ewalker/Chem2990/Chem%202990%20Refractive%20Index%20Readings.pdf) for the data) and [interpolation](https://en.wikipedia.org/wiki/Interpolation) to calculate the theoretical refractive index (which DiFluid measures and displays in the top left corner of the screen).

     | Sucrose Solution Concentration | 9%     | 10%    | 11%    |
     | ------------------------------ | ------ | ------ | ------ |
     | Refractive Index               | 1.3463 | 1.3478 | 1.3494 |

     <div class="row mb-md-5 mb-4 justify-content-center text-center">
         <div class="col-md-12">
             <span class="image-span">Refractive index corresponding to different sucrose solution concentrations</span>
         </div>
     </div>

     The theoretical refractive index is:

     $$ 1.3463 + (1.3494-1.3478)*\displaystyle\frac{10.031-10}{11-10}\approx1.34785 $$

8.   Sample using the standard method, taking 10 samples of 5ml each, and cool for 15 minutes.

9.   Measure using the standard method and record the data.

##### Refractive Index Calculator

The concentration we calculated earlier assumes the sugar is 100% pure with no water, which seems slightly unrealistic. Using the 99.7% purity on the sugar packaging and estimating about 1% water content (according to [this data](https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/documents/884/936/s5391pis.pdf)), we can calculate a slightly lower concentration:

$$ 10.03\% \times 99.7\% \times (1-1\%) \approx 9.90\%$$

Here, we treat the initial concentration as the upper bound and this concentration as the lower bound, i.e., we assume the actual concentration is in the [9.90%, 10.03%] range.

Similarly, we can calculate the refractive index lower bound.

I created a calculator that can calculate the concentration and refractive index bounds. Go to this [google sheet](https://docs.google.com/spreadsheets/d/1w87A-c4GNcAff21fg4g3mESp85NV0uIajSgKQFZD5Vg/edit?usp=sharing) and enter the three weights measured during the experiment to get the concentration and interpolated refractive index bounds.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <video width="100%" controls playsinline autoplay muted loop>
    		<source src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/RI_calculater_en.mov" type="video/mp4">
		</video>
        <span class="image-span">A video of me using this concentration and refractive index calculator</span>
    </div>
</div>

#### Results

During the first run of this experiment, I obtained lower-than-expected data, making me suspect an issue with the solution preparation, so I repeated the experiment. I will present data from both, referred to as Experiments 3.1 and 3.2.

Table 7 shows the sucrose solution concentration range prepared in Experiments 3.1 and 3.2 and the calculated refractive index range based on the concentration.

|          | Concentration Range | Refractive Index Range |
| -------- | ------------------- | ---------------------- |
| Experiment 3.1 | [9.90%, 10.03%] | [1.34765, 1.34785]    |
| Experiment 3.2 | [9.80%, 9.93%]  | [1.34750, 1.34769]    |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Table 7: Sucrose solution concentration and refractive index ranges in experiments 3.1 and 3.2</span>
    </div>
</div>

Figures 6 and 7 plot the measurements of 10 samples taken in Experiments 3.1 and 3.2. The calculated theoretical refractive index interval (which I marked as ground truth) is depicted as the red region.

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig6.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-4">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig7.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 6 and 7: Line charts of measurements in Experiments 3.1 and 3.2 and the theoretical refractive index range</span>
</div>

Most measurements are below the calculated theoretical values. Tables 8 and 9 show the average measured values, standard deviations, and percentage differences from the theoretical value<sup class="footnote-sup">[E]</sup> for each device.

<div class="footnote">
  <div class="footnote-label">[E]</div>
  <div class="footnote-content">Here, I take the middle value of the calculated theoretical refractive index range as the theoretical value.</div>
</div>

| Experiment III.1     | DiFluid #1        | DiFluid #2        | DiFluid #3        |
| ------------ | ----------------- | ----------------- | ----------------- |
| Measurement       | 1.34757 ± 0.00001 | 1.34755 ± 0.00002 | 1.34750 ± 0.00001 |
| Difference from Theoretical | -1.24%            | -1.37%            | -1.65%            |

| Experiment III.2     | DiFluid #1        | DiFluid #2        | DiFluid #3        |
| ------------ | ----------------- | ----------------- | ----------------- |
| Measurement       | 1.34749 ± 0.00001 | 1.34747 ± 0.00002 | 1.34741 ± 0.00001 |
| Difference from Theoretical | -0.71%            | -0.82%            | -1.23%            |

<div class="row mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <span class="image-span">Tables 8 and 9: Average Measured Refractive Index and Standard Deviations in Experiments 3.1 and 3.2</span>
    </div>
</div>

All three DiFluids measured lower than the theoretical value, and the order of measurements is #1 > #2 > #3, roughly consistent with the trend in Experiment II. This suggests that the DiFluids may indeed exhibit a "measurement tendency," where some consistently measure lower and others higher. It might also indicate that the measurements by VST or ATAGO in Experiment II are more accurate, but this requires further verification.

I also plotted the three DiFluids' measurements as violin plots:

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-6">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig8.webp" alt="" class="img-fluid">
    </div>
    <div class="col-md-6 mt-md-0 mt-4">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig9.webp" alt="" class="img-fluid">
    </div>
    <span class="image-span">Figures 9 and 10: Violin plots of measurements from Experiments 3.1 and 3.2 and the theoretical refractive index range</span>
</div>

The measurement range for all three DiFluids is very small (except for #2, which is slightly larger), once again demonstrating their excellent precision. Although there are slight differences between the three units, they are still fairly close.

However, while their precision is excellent, their accuracy is not as ideal, as most measurements are still somewhat distant from the calculated theoretical refractive index range. This result does not rule out the possibility of issues with the solution preparation. In Quantitative Café's article [Estimating TDS from Refractive Index](https://quantitativecafe.com/2023/02/11/validating-the-difluid-r2-extract/), he successfully obtained measurements very close to the theoretical value, but unfortunately, I was unable to replicate his results here.

Some possible reasons for the lower measurement values, besides measurement errors of DiFluid, include:

1.   Some sugar may not have fully dissolved.
2.   The sugar concentration may be lower than the indicated 99.7%.
3.   The sugar's water content may be higher than our 1% estimate.

#### Discussion

What I find most interesting is the similarity between Figures 8 and 9. Even though the sucrose solution concentrations were different in the two experiments, the three machines still showed highly consistent measurement tendencies.

Let's further extract the DiFluid data from the two datasets in Experiment II (Figures 3 and 5) and compare them with Figures 8 and 9:

<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/fig10.webp" alt="" class="img-fluid responsive-plot">
        <span class="image-span">Figure 10: Parts of the violin chart for three DiFluid units, extracted and arranged from top left to bottom right, corresponding to Figures 3, 5, 8, and 9, respectively</span>
    </div>
</div>

These four plots are very similar! This seems to confirm my speculation that DiFluid R2 Extract units have different measurement tendencies. However, in [@espressofun](https://www.instagram.com/espressofun/)'s article [DiFluid R2 Coffee Refractometer Device Variation](https://rmckeon.medium.com/difluid-r2-coffee-refractometer-device-variation-20cf1a663d99), he did not observe such obvious differences, so I have not yet reached a conclusion on this matter.

Unfortunately, DiFluid currently does not have a calibration function, so this method of validating with sucrose solution can only be used for testing and cannot actually improve the machines' accuracy. Otherwise, we might be able to use calibration to make the performance of various DiFluid units more consistent.

### TL;DR and Conclusion

In this article, I first introduced my usual TDS measurement workflow. To ensure accuracy, I put a lot of effort into controlling evaporation and temperature differences, making the process quite cumbersome, but this is essential for obtaining precise and stable measurements.

In the subsequent three experiments, we concluded:

-   Experiment I: The Impact of Evaporation on TDS
    -   In our setup, if samples are not stored in sealed containers to prevent evaporation, evaporation can increase the calculated extraction yield by up to 1%, showing that evaporation's impact is very significant and must be carefully managed during measurement.
    -   The standard sampling and cooling method I introduced effectively prevents evaporation from affecting TDS measurements and makes the measurements more stable.
-   Experiment II: Testing Different Refractometer Models (VST, ATAGO, DiFluid)
    -   In terms of stability, VST readings fluctuate the least, while DiFluid and ATAGO show little difference in performance.
    -   DiFluid readings are generally lower than VST, while ATAGO readings are generally higher.
    -   The three DiFluids also show a consistent high-to-low relationship in their readings. Although not large, this relationship has appeared repeatedly in multiple experiments, suggesting it is not due to chance or experimental error.
-   Experiment III: Testing DiFluid R2 Extract Accuracy with Sucrose Solution
    -   The refractive index of the sucrose solution measured by all three DiFluids is lower than the theoretical value.
    -   The three DiFluids also show a consistent high-to-low relationship when measuring the refractive index of the sucrose solution, very similar to what was observed in Experiment II.
    -   Compared with the violin charts in Experiment II showed highly consistent measurement inertia for the DiFluids.

The results of Experiments II and III lead me to speculate that perhaps each DiFluid unit has different "measurement tendencies," meaning some consistently measure higher and others lower. This is an interesting finding, but probably still requires more time for further verification.

I will also provide the experimental data to DiFluid for reference. Perhaps in the future, there will be calibration methods to reduce these measurement differences.

### Acknowledgments

-   Thanks to NTU Coffee Club, Li-Wei, and Henry for lending me their refractometers, allowing this article to have more data.

-   Thanks to [Quantitative Café](https://www.instagram.com/quantitativecafe/) for providing detailed methods for Experiment III. His articles [about validating the DiFluid R2 Extract](https://quantitativecafe.com/2023/02/11/validating-the-difluid-r2-extract/) and post about [how evaporation affects TDS](https://www.instagram.com/p/CiKsmE6Pz2r) are much more detailed than mine and highly recommended!

-   Thanks to Zinc from NTU Coffee Club for discussing and establishing the TDS measurement workflow in this article with me.