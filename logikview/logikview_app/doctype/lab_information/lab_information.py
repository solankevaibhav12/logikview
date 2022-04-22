# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt


from curses import ALL_MOUSE_EVENTS
from io import BufferedReader
from numpy import append
import pandas as pd
from pandas import *
import xlrd
import openpyxl
import frappe
from frappe.model.document import Document

class LabInformation(Document):
	
	def before_save(self):
		# naming series
		self.system_reference_number = self.name

		# validation
		if self.date_sample_received < self.sampling_date:
			frappe.throw("Date Sample Received cannot be less than Sampling Date")

	def on_submit(self):
		# creating new document from child table
		for i in self.samples:
			a = frappe.new_doc('Sample Information')

			a.system_reference_number = i.system_reference_number
			a.number_of_sub_samples = i.number_of_sub_samples
			a.sample_description =  i.sample_description
			a.section = i.section
			a.name_of_tests = i.name_of_tests
			a.ear_tag_no = i.ear_tag_no
			a.sample_collection_point_scp = i.sample_collection_point_scp
			a.kill_no =i.kill_no
			a.kill_date=i.kill_date
			a.sample_location =i.sample_location
			a.storage = i.storage
			a.house_number =i.house_number
			a.batch_no=i.batch_no
			a.vrd_unit=i.vrd_unit
			a.species=i.species
			a.breed=i.breed
			a.matrix=i.matrix
			a.amount=a.amount
			a.age=i.age
			a.sex=i.sex
			a.weight=i.weight
			a.sample_condition=i.sample_condition
			a.sample_status=i.sample_status
			a.info_registered_by_initials=i.info_registered_by_initials
			a.date_info_registered_ddmmyy=i.date_info_registered_ddmmyy
			a.date_sample_discarded=i.date_sample_discarded
			a.discarded_by=i.discarded_by
			a.date_lo_inserting_discard_info=i.date_lo_inserting_discard_info
			a.date_sent_to_subcontracted_lab_where_applicable=i.date_sent_to_subcontracted_lab_where_applicable
			a.lo_inserting_subcontacting_information=i.lo_inserting_subcontacting_information
			a.save()
			a.submit()

	
			




			

