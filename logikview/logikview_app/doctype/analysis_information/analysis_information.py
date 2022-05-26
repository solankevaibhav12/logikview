# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import today
from frappe.utils.data import getdate

class AnalysisInformation(Document):

		
	def validate(self):

		if self.date_result_info_registered > today():
			frappe.throw("Date Result Info Registered cannot be a future date.")

		self.get_section()
		# validation for fields
		if self.section == "Chemical Analysis":
			if (self.ccbeta==None or self.ccbeta=='') and (self.ccalpha==None or self.ccalpha=='') and (self.lod==None or self.lod=='') and (self.loq==None or self.ccbeta==''):
				frappe.throw("At least one of the following fields needs to be filled: [ccbeta, ccalpha, lod, loq] if the section is 'Chemical Analysis'")

		s = frappe.get_doc("Sample Information",{'lab_number':self.lab_number_reference})
		if getdate(self.date_started) < s.date_info_registered_ddmmyy:
			frappe.throw("Date Started cannot be less than Date Info Registered from the Sample Information.")

		if getdate(self.date_finalised) < getdate(self.date_started):
			frappe.throw("Date Finalised cannot be less than Date Started.")

		if getdate(self.date_of_result_issue) < getdate(self.date_finalised):
			frappe.throw("Date of Result Issue cannot be less than Date Finalised")

	def before_save(self):
		
		# naming series field
		self.analysis_number = self.name

		# setting dates automatically when record is created
		self.date_result_info_registered = today()
		self.date_result_authorised_ddmmyy = today()



	@frappe.whitelist()
	def get_sys_ref(self):
		if self.lab_number_reference!='':
			a = frappe.get_doc('Sample Information',{'name':self.lab_number_reference})
			b = a.system_reference_number
			return b
		else :
			pass

	
	# @frappe.whitelist()
	# def get_section(self):
	# 	if self.lab_number_reference != '':
	# 		s = frappe.get_doc('Sample Information',{'name':self.lab_number_reference})
	# 		if s.name_of_tests == self.name_of_test:
	# 			return s.section
	# 		else:
	# 			return frappe.throw("Record for '{0}' test not found in Sample Information against Lab Number Reference {1}".format(self.name_of_test,self.lab_number_reference))
	# 	else:
	# 		return frappe.msgprint("Please enter Lab Number Reference")

	# @frappe.whitelist()
	# def get_name_of_tests(self):
	# 	g = frappe.get_all('Sample Information',{'docstatus':1},['name'])
	# 	t = ['']
	# 	for i in g:
	# 		r = frappe.get_doc('Sample Information',{'name':i.get('name')})
	# 		t.append(r.name_of_tests)
	# 	tests = list(set(t))
	# 	print(tests)
	# 	return tests

	
	@frappe.whitelist()
	def get_test(self):
		if self.lab_number_reference != "":
			a = frappe.get_doc("Sample Information",{"lab_number":self.lab_number_reference})
			return a.name_of_tests
	

	@frappe.whitelist()
	def res_date(self):
		if self.date_result_info_registered > today():
			frappe.msgprint("Date Result Info Registered cannot be a future date.")
		else:
			pass

	@frappe.whitelist()
	def get_section(self):
		if self.lab_number_reference != "":
			a = frappe.get_doc("Sample Information",{"lab_number":self.lab_number_reference})
			return a.section
		else:
			pass

	