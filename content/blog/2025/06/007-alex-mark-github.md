---
title: Direct File is Open Source!
link: https://alexthemark.substack.com/p/direct-file-is-open-source
date: 2025-06-11
---

Alex Mark:

> The tax code contains some pretty crazy edge cases that required a good amount of effort to build and test. Two of my favorite tax rules are the different ways to calculate whether the taxpayer was 65 or older during the tax year — people over 65 receive a greater standard deduction, but they also phase out of eligibility for EITC if they don’t have qualifying children. Confusingly, these rules use different definitions of what it means to be 65 during the tax year[...]
>
> I wish that these edge cases were rare — but they’re all over the tax code ([children who are not children](https://github.com/IRS-Public/direct-file/blob/main/direct-file/backend/src/main/resources/tax/dependentsRelationship.xml#L986-L990), [married couples filing jointly who don’t meet the Joint Return Test](https://github.com/IRS-Public/direct-file/blob/main/direct-file/backend/src/main/resources/tax/familyAndHousehold.xml#L2098-L2118), [people who can be claimed as a dependent who aren’t](https://github.com/IRS-Public/direct-file/blob/main/direct-file/backend/src/main/resources/tax/familyAndHousehold.xml#L2532-L2547), etc.). I feel confident that we represented these cases and gave the taxpayer every possible shot to file an accurate, beneficial return.

When Alex joined USDS in 2023, I knew only one thing about him, which was that he volunteered in the [VITA](https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers) program. I immediately wanted to get him on Direct File. Here he gives a guided tour of some of Direct File's (and the tax code's) nooks and crannies, and I insisted he put in a photo of him dumping a bucket of ice water on his head.
