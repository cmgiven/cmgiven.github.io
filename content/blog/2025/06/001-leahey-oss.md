---
title: Peeking Behind the Code
link: https://www.forbes.com/sites/andrewleahey/2025/05/30/peeking-behind-the-code-irs-just-open-sourced-direct-file/
date: 2025-06-02
---

Andrew Leahey, for Forbes:

> It isn’t every day that the IRS drops something that reads like a blend of legal code, logic theory, and open government idealism. But that is exactly what it did, laying Direct File bare—and releasing it into the [public domain](https://github.com/IRS-Public/direct-file?tab=License-1-ov-file#readme)—for the world to scrutinize, fork, or admire in stunned silence.
>
> At the heart of this code disclosure is something called the Fact Graph, a dry name for a tool that is quietly revolutionary: a logic engine that parses ambiguous tax scenarios and infers relationships while consistently applying tax rules.

The first line of code for Direct File, written February 8, 2022, was for an experiment to explore the concepts that would become the Fact Graph. Even from that first experiment, the work was motivated by the need to establish trust with taxpayers. Direct File can ask hundreds of questions about your tax situation, but most users will see only a small fraction of that. The Fact Graph provides us with a means of proving that none of the unasked questions would have changed the bottom line of your tax return and that you're getting every tax benefit to which you're entitled.

The IRS has been working for years to develop a relatively simpler model of taxes, its "Tax Calculator" effort, which would model the relationships between the lines of the various tax forms. But Direct File and its Fact Graph go further by also tackling the [last mile](<https://en.wikipedia.org/wiki/Last_mile_(telecommunications)>) problem of taxes, the often fuzzy relationship between what gets entered on tax forms and the assorted facts about your life that inform what you're eligible to claim, a relationship that's variously described via statutes, regulations, court decisions, instructions, publications, and other guidance. This wasn't trivial, as our team would often be teeing up novel questions for the IRS Office of Chief Counsel to consider as we sought to bring that ambiguity into sharp focus.

There's ample prior art of knowledge graphs for taxes, but for me personally, the lineage of my thinking traces to a conversation with [Ben Klemens](https://ben.klemens.org) at [Open Data Day 2016](https://medium.com/civic-tech-thoughts-from-joshdata/what-happened-at-open-data-day-dc-2016-26fdbf9e40c2), discussing his [python script for doing his own taxes](https://github.com/b-k/py1040).

> This all matters in an age when public trust in institutions is frayed and when algorithms, or artificial intelligence (AI), increasingly mediates our rights and obligations. If the tax code is going to be enforced by machines, and the preparation calculated and handled by the same, the rules those machines follow should be legible and contestable. The open-sourcing of Direct File hints at a future where regulatory logic and automated decision-making isn’t hidden, but published like case law—reviewable, revisable, and maybe even improved by the very public it serves.

Bingo.
