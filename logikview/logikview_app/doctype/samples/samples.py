# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.document import Document
from frappe.utils import today
from frappe.utils.data import getdate

class Samples(Document):
	def validate(self):
		if self.date_info_registered_ddmmyy:
			if self.date_info_registered_ddmmyy > today():
				frappe.throw("Registration Date cannot be future date.")

		else:
			pass


	def before_save(self):
		self.lab_number = self.name
		
	def on_submit(self):
		if self.name_of_test:
			self.new_analysis()

		if self.name_of_tests:
			self.new_analysis1()

		
		# new chain of custody
		c = frappe.new_doc('Chain of Custody')
		c.location_of_sample = self.sample_location
		c.lab_number_reference = self.lab_number
		c.system_reference_number = self.system_reference_number
		c.start_date = self.date_info_registered_ddmmyy
		# c.save()
		c.insert(ignore_mandatory=True)

		# updating and creating new record in chain of custody
		if self.amended_from:
			b = frappe.get_doc('Samples',{'lab_number':self.amended_from})
			if b.sample_location != self.sample_location:
				ls = frappe.get_all('Chain of Custody',{},['lab_number_reference'])
				for i in ls:
					if i.get('lab_number_reference') == self.amended_from:
						a = frappe.get_doc('Chain of Custody',{'lab_number_reference':self.amended_from})
						if a.location_of_sample != self.sample_location:
								a.location_of_sample = self.sample_location
								a.save()

	
		

	def new_analysis(self):
			samp=[]
			# for i in self.name_of_test:
			a = frappe.db.sql("select name_of_test from `tabMS Sample Table` where parent='{0}'".format(self.name),as_dict=1)
			print('***********************',a)
			# for j in a:
			# 	samp.append(j)
			# print(samp)

			for k in a:
				print('777777777777777',k)
				# new analysis information
				an = frappe.new_doc("Analysis")
				an.lab_number_reference = self.name
				an.system_reference = self.system_reference_number
				an.name_of_test = k.get("name_of_test")
				an.section=self.section
				an.status=self.sample_status
				an.insert(ignore_mandatory=True)

	def new_analysis1(self):
		an = frappe.new_doc("Analysis")
		an.lab_number_reference = self.name
		an.system_reference = self.system_reference_number
		an.name_of_test = self.name_of_tests
		an.section=self.section
		an.status=self.sample_status
		an.insert(ignore_mandatory=True)



	@frappe.whitelist()
	def get_section_vrd(self):
		if self.system_reference_number != "":
			a = frappe.get_doc("Submissions",{"system_reference_number":self.system_reference_number})
			return [a.section,a.vrd_unit,a.sample_state_on_receipt,a.batch_code]
		else:
			pass

	@frappe.whitelist()
	def reg_date(self):
		if self.date_info_registered_ddmmyy > today():
			frappe.msgprint("Registration Date cannot be future date.")
		else:
			pass

	@frappe.whitelist()
	def dis_date(self):
		if self.date_sample_discarded > today():
			frappe.msgprint("Date Sample Discarded cannot be future date.")
		else:
			pass


