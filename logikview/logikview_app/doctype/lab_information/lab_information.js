// Copyright (c) 2022, Dexciss Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Lab Information', {
	section: function(frm) {
		if (frm.doc.section == "Chemical Analysis"){

			set_field_options("vrd_unit", ["Trade Unit","Animal Health Unit","Safety of the Food Chain Unit"])
		}
		if(frm.doc.section == "Diagnostics (Serology and Immunology)"){

			set_field_options("vrd_unit", ["Animal Health Unit"])
		}
		if (frm.doc.section == "Microbiology"){

			set_field_options("vrd_unit", ["Animal Health Unit"])
		}
		if (frm.doc.section == "Parasitology"){

			set_field_options("vrd_unit", ["Safety of the Food Chain Unit"])
		}
	},
	received_by_lab_officer: function(frm){
		frm.doc.recorded_by_lab_officer = frappe.session.logged_in_user
	}
});
