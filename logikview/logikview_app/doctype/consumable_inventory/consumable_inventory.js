// Copyright (c) 2022, Dexciss Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Consumable Inventory', {
	// refresh: function(frm) {

	// }
	before_save: async(frm) => {

		if (frm.is_dirty() && (!frm.is_new())){
			let promise = new Promise((resolve,reject)=>
			frappe.confirm(
				'The document has been modified. Are you sure you want to proceed?',
				() => resolve(),
				() => reject()
			))
			
			await promise.catch(() => frappe.throw());
		}
		
	},
});
