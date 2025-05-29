import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
	});

	eleventyConfig.addFilter("urlMonth", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat('yyyy/MM');
	});

	eleventyConfig.addFilter("dateFromISO", (str) => {
		return DateTime.fromISO(str, { zone: "utc" }).toJSDate();
	});

	eleventyConfig.addFilter("selectAttrEquals", (array, attr, test) => {
		return array.filter((obj) => obj[attr] === test);
	});

	eleventyConfig.addFilter("isEssay", (tags) => {
		return tags.includes("essays");
	});

	eleventyConfig.addFilter("getEssay", (array) => {
		return array.find((post) => post.data.tags.includes("essays"));
	});

	eleventyConfig.addFilter("getEssays", (array) => {
		return array.filter((post) => post.data.tags.includes("essays"));
	});

	eleventyConfig.addFilter("getShorts", (array) => {
		return array.filter((post) => !post.data.tags.includes("essays"));
	});

	eleventyConfig.addFilter("uniqueDates", (array) => {
        return [...new Set(array.map(post => post.date.toISOString().slice(0, 10)))];
	});

	eleventyConfig.addFilter("selectDateEquals", (array, date) => {
		return array.filter((obj) => obj.date.toISOString().slice(0, 10) === date);
	});

	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});
};
