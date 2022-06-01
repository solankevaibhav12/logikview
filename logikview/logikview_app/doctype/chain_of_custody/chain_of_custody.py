# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ChainofCustody(Document):
	def before_save(self):
		self.chain_of_custody_reference = self.name

		

	@frappe.whitelist()
	def get_system_ref(self):
		if self.lab_number_reference != '':
			a = frappe.get_doc('Samples',{'lab_number':self.lab_number_reference})
		
			return a.system_reference_number

