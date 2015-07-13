
/*
	Memoizing function which caches previous return values
	of DOM elements searched by tag name
 */

function getElements(name) {
	if (!getElements.cache) getElements.cache = {};
	return getElements.cache[name] = getElements.cache[name] ||	document.getElementsByTagName(name);
}