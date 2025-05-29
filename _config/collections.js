import { DateTime } from "luxon";

export default function(eleventyConfig) {
    eleventyConfig.addCollection("postsByMonth", (collection) => {
        const posts = collection.getFilteredByTag('posts').reverse();

        let currentYear;
        let currentMonth;

        return posts.reduce((months, post) => {
            const year = post.date.getFullYear()
            const month = post.date.getMonth() + 1

            if (year !== currentYear || month !== currentMonth) {
                const date = DateTime.fromObject({ year, month });

                months.push({
                    year: year,
                    month: date.toFormat("MM"),
                    str: date.toFormat("LLLL yyyy"),
                    posts: []
                });

                currentYear = year;
                currentMonth = month;
            }

            months[months.length - 1].posts.push(post);

            return months;
        }, []);
    });

    eleventyConfig.addCollection("years", (collection) => {
        const posts = collection.getFilteredByTag('posts');
        return [...new Set(posts.map(post => post.date.getFullYear()))];
    });

    eleventyConfig.addCollection("essays", (collection) => {
        return collection.getFilteredByTag('essays');
    });
};
