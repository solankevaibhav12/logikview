# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class LabInformation(Document):
	
	def before_save(self):
		self.system_reference_number = self.name

		if self.date_sample_received < self.sampling_date:
			frappe.throw("Date Sample Received cannot be less than Sampling Date")
		
