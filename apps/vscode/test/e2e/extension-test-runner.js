const assert = require('assert');
const vscode = require('vscode');

describe('Extension Activation', function () {
	this.timeout(120000);

	it('activates extension and opens sidebar', async () => {
		const ext = vscode.extensions.getExtension('phoenixyun.clinecode') || vscode.extensions.all.find(e => e.packageJSON && e.packageJSON.name === 'clinecode');
		if (!ext) throw new Error('Extension not found in test host');
		await ext.activate();
		assert.ok(ext.isActive, 'Extension failed to activate');

		// Try to open the sidebar view by its container ID
		try {
			await vscode.commands.executeCommand('workbench.view.extension.claude-dev-ActivityBar');
		} catch (e) {
			// Non-fatal: some test hosts may not support showing activity bar programmatically
		}
	});
});
