const path = require('path');
const fs = require('fs');
const Mocha = require('mocha');

function collectJsFiles(dir) {
	let results = [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			results = results.concat(collectJsFiles(full));
		} else if (entry.isFile() && full.endsWith('.js')) {
			results.push(full);
		}
	}
	return results;
}

function run() {
	const mocha = new Mocha({ ui: 'bdd', color: true, timeout: 120000 });
	const testsRoot = path.resolve(__dirname);
	const files = collectJsFiles(testsRoot);
	files.forEach((file) => mocha.addFile(file));
	return new Promise((resolve, reject) => {
		try {
			mocha.run((failures) => {
				if (failures > 0) return reject(new Error(`${failures} tests failed.`));
				resolve();
			});
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = run();
