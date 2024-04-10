---
layout: post
title: "Precisely Measuring TDS"
description: "A plethora of experimental data and a rigorous TDS measuring process: measuring TDS is still challenging and frustrating, but at least we can finally obtain some precise measurements."
tag: [review, tutorial]
category: articles
imgfolder: TDS
language_reference: measuring_tds
usemathjax: true
draft: true
sitemap: false
---

### Foreword

>   Warning: This article is quite long, please make good use of the table of contents!

Flavor is subjective, and naturally, so are coffee preferences.

However, many times we still need some objective data, not only for communication and exchange among enthusiasts but also to help us adjust parameters and improve a cup of unsatisfactory coffee.

Over the past three years, during each semester's coffee brewing theory class at NTU Coffee Club, I always start by discussing coffee's "objective" data—more precisely, TDS (a concentration indicator) and extraction rate.

Since extraction rate is calculated using TDS, measuring TDS has become the most crucial link in obtaining "objective" data about coffee. However, precisely measuring TDS is highly challenging. Any slight flaw in the process can lead to significant errors. Videos measuring TDS in absolutely incorrect ways are often seen online, causing these "objective data" measurements to become "no longer objective," losing their original meaning.

Currently, articles and resources about TDS measurements are still scarce in Taiwan (or the Chinese-speaking region). Therefore, I wrote this article hoping to inspire more discussions. In this article, I detail my own TDS measuring process, conduct an experiment to assess the impact of evaporation on TDS, and compare several mainstream TDS measuring devices available in the market.

All experimental data in this article are [open source](https://docs.google.com/spreadsheets/d/1BQ1JWJI15t-FinSL4U_aB_1EJ0OXRj5Qxc3zgRUO_Ps/edit?usp=sharing), feel free to use them, and if you have any insights or discoveries regarding the data, please let me know!

### What is TDS?

We generally use TDS, or total dissolved solids, to indicate the concentration of coffee. By definition, TDS is the weight of the coffee substances $(M_{bev})$ divided by the weight of the coffee liquid $(B)$.

$$ TDS = \frac{M_{bev}}{B} $$

For example, if a 100g cup of coffee contains 1.4g of coffee substances (for instance, if we dry the coffee in an oven and end up with 1.4g of coffee solids), then the TDS is 1.4%.

The vertical axis on the commonly seen Gold Cup Chart represents TDS.

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/brewing_control_chart.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">SCA's older version of the Brewing Control Chart (source: SCA)</span>
    </div>
</div>

### Why Measure TDS?

With TDS, we can deduce the content of coffee substances in the coffee liquid, which allows us to calculate the extraction rate. The extraction rate is highly correlated with coffee flavor and is one of the very important — and objective— indicators of coffee quality.

Jonathan Gagné wrote a very detailed article in 2019 on how to calculate the extraction rate, so I won't reinvent the wheel here; please refer to his brilliant piece [Measuring and Reporting Extraction Yield](https://coffeeadastra.com/2019/02/17/measuring-and-reporting-extraction-yields/).

In simple terms, in filter extractions (such as pour-over) we generally estimate the extraction rate $(EY)$ using the following formula, where $B$ represents the weight of the coffee liquid, and $D$ represents the weight of the coffee grounds used.

$$ EY = \displaystyle\frac{TDS * B}{D} $$

For example, if we brew a 170g cup of coffee from 10g of coffee beans with a TDS of 1.4%, then the extraction rate is:

$$ \displaystyle\frac{1.4\%*170g}{10g} = 23.8\%$$

### How to Measure TDS?

To determine the extraction rate, we need to know the weight of coffee substances in the coffee liquid. This could theoretically be achieved by methods like drying the coffee in an oven, but that's clearly impractical. Therefore, how to measure the concentration of coffee while it is still liquid becomes a crucial issue.

We typically use a refractometer (an optical device) to measure TDS. The details of the principle are not complex, but since there already are many excellent articles on this, I'll not repeat them here. You can check out [this IG post by quantitativecafe](https://www.instagram.com/p/Co2cgyOJS8V).

<div class="row mt-md-4 mt-3 mb-md-4 mb-3 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{ site.github.url }}/assets/img/{{ page.imgfolder }}/refractometer.webp" alt="" class="img-fluid responsive-image">
        <span class="image-span">How a refractometer works (source: quantitativecafe)</span>
    </div>
</div>

### Some Issues Encountered Using a Refractometer

Anyone who has used a refractometer would agree that measuring TDS with it can be extremely frustrating. The readings from the refractometer often fluctuate significantly if the measurement isn't handled carefully, making it difficult to obtain stable results.