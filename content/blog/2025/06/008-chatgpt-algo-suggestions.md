---
title: Algorithm Improvement Suggestions
link: https://chatgpt.com/share/684e228c-554c-8004-92cd-cdcb0eccb3a2
date: 2025-06-18
---

So [last week's post](/2025/06/sittin-on-the-docket-at-va/) was not so subtly a provocation for the "just add AI" approach to government. But hey, now that I've already done the work of sussing out what's going on and writing it out in detail, let's add AI and see what happens.

I asked ChatGPT to read the post and suggest a few ways the algorithm could be improved.

> Thanks for sharing the post. It’s a rich and thoughtful deep dive into a real-world government algorithm with significant care and attention to fairness, complexity, and transparency. Still, even great systems can be improved. Here are several ways the algorithm might be enhanced or revisited, based on what the blog described.

Oh god, the sycophancy.

> 1. Reduce Reliance on Heuristics in Proportional Allocation
>
> - **Current approach:** The AMA algorithm uses fixed parameters like the `INTERPOLATED_DIRECT_REVIEW_PROPORTION_ADJUSTMENT` (e.g., 67%) and a `MAXIMUM_DIRECT_REVIEW_PROPORTION` cap (e.g., 80%).
> - **Suggested improvement:** Replace static interpolation factors and hardcoded caps with dynamic, **data-driven optimization**. Techniques like Bayesian updating or reinforcement learning could help the system adapt in real time based on backlog levels, processing rates, and success in meeting deadlines.

Right off the bat, I think this provokes an interesting question. ChatGPT suggests a system that requires less human intervention because it optimizes itself toward a defined set of goals.

In the algorithm as I designed it, there are certainly examples of exactly this. You could imagine a version of the algorithm that preserved the concept of "docket month," and allowed a human operator to specify how deep on the docket the machine was allowed to look, historically a policy decision that humans at the Board had been making. In this case, I opted to completely replace this process. Given the pace at which humans can orient and act upon new information, a process with a human in the loop would necessarily require a greater margin of error, and it was better for the algorithm to determine the most efficient possible parameter at any given time.

The same could be said for the parameters ChatGPT has called out above. Except that I think those items differ from the docket month example in terms of the pros and cons that must be weighed to change them. There is no right answer to whether the Board should prioritize Direct Reviews over legacy appeals.

These are policy questions in a complex decision space without an optimal answer. As I explained the algorithm to different audiences, one thing that I would always emphasize was that it provided "levers" that decision makers could pull. It wasn't my place to decide those questions as the algorithm's designer, as I would if I had obfuscated my opinions via an optimization function specified in a black box algorithm.

> 2. Implement Feedback Loops for Goal Reassessment
>
> - **Current approach:** The system assumes the 365-day goal for Direct Review decisions remains static, even when it becomes unrealistic.
> - **Suggested improvement:** Introduce a **feedback mechanism** that automatically flags when a policy goal (like the 365-day target) is routinely being missed, and prompts a reassessment. This could be both internal (staff dashboards, alerts) and external (public transparency reports).

This is right on, and actually prompted me to go back and add a note about the dashboard we built for this very purpose. (ChatGPT read an early draft; I was paranoid it might find some egregious error past me had made and thus undermine current me's whole reason for writing.) But I like the suggestion that the data should be public.

> 3. Address Race Conditions in FIFO Distribution
>
> - **Current approach:** Race conditions can occur when two judges request cases simultaneously and might skip over the true “oldest” FIFO case.
> - **Suggested improvement:** Introduce **record-level locking** or **atomic fetch-and-assign** mechanisms at the database level, even for legacy VACOLS records, possibly via a transactional wrapper layer or a temporary in-memory locking system.

My post flagged this as a theoretical problem, and yeah, it's totally fixable. Caseflow already was using Redis; it wouldn't have been hard to implement a locking mechanism. Heck, I added locking in Redis to my [Slackbot to look up acronyms](https://github.com/cmgiven/wtf-bot/blob/master/src/dictionary.rb#L145), which was nowhere near as mission critical. But the cost is adding complexity to the system, adding one more thing that could break. Given the negligible potential impact, I think I can defend letting that one go.

> 4. Use Better Predictive Models for Case Inflow and Processing Time
>
> - **Current approach:** Direct Review pacesetting proportions and legacy NOD adjustments are based on historical averages (e.g., 40% of NODs becoming Form 9s).
> - **Suggested improvement:** Use **predictive analytics** or machine learning to estimate case inflow and judge workload more precisely. For example:
>   - Train models on NOD metadata to predict Form 9 likelihood.
>   - Use survival analysis to forecast case readiness timelines.
>   - Update predictions continuously based on actual outcomes.

This one's amusing to me. Once I finally got a VA computer (six weeks after I started work at VA), one of the first things I did was use survival analysis to model the appeals process end-to-end. Those models ended up having a ton of uses, both internal (workforce planning) and external (time estimates for Veterans checking their appeal's status on VA.gov). ChatGPT would be proud. As for whether I should have plugged those models into the algorithm instead of the hardcoded 40% heuristic, nah, not worth the extra complexity.

> 5. More Granular Customization of Batch Sizes

The feature it turned out nobody needed? Yeah, not adding that. I guess I did call it a "disadvantage," though, so that one's on me.

> 6. Improve Fairness Monitoring Across Judges
> 7. Add Resilience for Sudden Capacity Shifts

These are nice sounding words that mean nothing.

> 8. Publish Algorithm Documentation and Code
>
> - **Current approach:** The algorithm used to be public but was removed from GitHub.
> - **Suggested improvement:** Restore the **public repository**, redacting any sensitive implementation details, to meet modern expectations for algorithmic transparency in government decision-making. This helps build trust and allows outside experts to contribute improvements.

I agree completely.
