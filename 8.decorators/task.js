//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];
	const maxCacheValuesCount = 5;
	return (...args) => {
		const hash = md5(args);
		let objectInCache = cache.find((item) => item.hash === hash);
		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.result);
			return "Из кеша: " + objectInCache.result;
		}

		let result = func(...args);
		cache.push({ hash, result });
		if (cache.length > maxCacheValuesCount) {
			cache.shift();
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	};
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	wrapper.count = 0;
	wrapper.allCount = 0;

	function wrapper(...args) {
		if (timeoutId === null) {
			func(...args);
			wrapper.count++;
		}
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			timeoutId = true;
			func(...args);
			wrapper.count++;
		}, delay);
		wrapper.allCount++;
	}
	return wrapper;
}