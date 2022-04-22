// Copyright (c) 2022, Dexciss Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Chain of Custody', {
	lab_number_reference: function(frm) {
		frappe.call({
			'method':'get_system_ref',
			'doc':cur_frm.doc,
			callback: function(r){
				// console.log(r.message)
				frm.doc.system_reference_number = r.message
				refresh_field('system_reference_number')
			} 

		})

	}
});
