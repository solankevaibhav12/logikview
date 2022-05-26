// Copyright (c) 2022, Dexciss Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Test Information', {
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
	section: function(frm) {
		if (frm.doc.section == "Chemical Analysis"){

			set_field_options("uom", ["µg/kg","µg/L","mg/kg","mg/L","ng/ml","ng/g"])
		}
		if (frm.doc.section == "Diagnostics(Serology and Immunology)"){

			set_field_options("uom", ["IU/ml","Antibody Titre"])
		}
		if (frm.doc.section == "Antimicrobial Resistance"){

			set_field_options("uom", ["µg/ml"])
		}
		if (frm.doc.section == "Microbiology"){

			set_field_options("uom", [" "])
		}
		if (frm.doc.section == "Parasitology"){

			set_field_options("uom", [" "])
		}

	}
});
