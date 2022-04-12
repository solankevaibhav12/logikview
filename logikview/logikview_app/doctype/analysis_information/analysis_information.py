# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class AnalysisInformation(Document):
	
	def before_save(self):
		if self.section == "Chemical Analysis":
			if self.ccbeta==None and self.ccalpha==None and self.lod==None and self.loq==None:
				frappe.throw("At least one of the following fields needs to be filled: [ccbeta, ccalpha, lod, loq] if the section is 'Chemical Analysis'")
		
		self.analysis_number = self.name