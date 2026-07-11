const path = require('path');
const { runTests, downloadAndUnzipVSCode } = require('@vscode/test-electron');

async function main() {
	try {
		const vscodeExecutablePath = await downloadAndUnzipVSCode('stable');
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');
		// The test runner script that bootstraps Mocha and runs tests in the extension
		const extensionTestsPath = path.resolve(__dirname, 'extension-test-runner-runner.js');

		await runTests({
			vscodeExecutablePath,
			extensionDevelopmentPath,
			extensionTestsPath,
		});

		console.log('E2E tests completed successfully');
	} catch (err) {
		console.error('E2E tests failed:', err);
		process.exit(1);
	}
}

main();
