# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class SampleInformation(Document):



	def before_save(self):
		self.lab_number = self.name
		
	def on_submit(self):
		# new chain of custody
		c = frappe.new_doc('Chain of Custody')
		c.location_of_sample = self.sample_location
		c.lab_number_reference = self.lab_number
		c.system_reference_number = self.system_reference_number
		c.start_date = self.date_info_registered_ddmmyy
		c.save()

		# updating and creating new record in chain of custody
		if self.amended_from:
			b = frappe.get_doc('Sample Information',{'lab_number':self.amended_from})
			if b.sample_location != self.sample_location:
				ls = frappe.get_all('Chain of Custody',{},['lab_number_reference'])
				for i in ls:
					if i.get('lab_number_reference') == self.amended_from:
						a = frappe.get_doc('Chain of Custody',{'lab_number_reference':self.amended_from})
						if a.location_of_sample != self.sample_location:
								a.location_of_sample = self.sample_location
								a.save()		
		

	
	
	