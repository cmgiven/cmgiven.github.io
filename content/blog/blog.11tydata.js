export default {
	tags: ["posts"],
	"layout": "layouts/post.njk",
	"permalink": "/{{ page.date | urlMonth }}/{{ title | slugify }}/index.html",
	"eleventyComputed": {
		"docId": "{{ title | slugify }}"
	}
};
