# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt

from curses import noraw
from re import I
import frappe
from frappe.model.document import Document
from frappe.utils.data import getdate
from frappe.utils import today
from frappe.utils import now



class LabInformation(Document):
	def validate(self):
		if self.date_sample_received != "":
			if getdate(self.date_sample_received) != getdate(self.time_sample_received[0:10]):
				frappe.throw(title="Different Dates Entered",msg="Date in the Time Sample Received cannot be different from Date Sample Received")

		if self.sampling_date != "":
			if getdate(self.sampling_date) != getdate(self.sampling_time[0:10]):
				frappe.throw(title="Different Dates Entered",msg="Date in the Sampling Time cannot be different from Sampling Date")

	
	def before_save(self):
		
		self.system_reference_number = self.name
	
	
		for i in self.samples:
			i.system_reference_number = self.name

		# validation
		if self.date_sample_received < self.sampling_date:
			frappe.throw("Date Sample Received cannot be less than Sampling Date")

	def on_submit(self):
		samp=[]
		for i in self.name_of_tests:
			b=str(i)
			a = frappe.db.sql("select name_of_test from `tabMS Sample Table` where name='{0}'".format(b[14:24]),as_dict=1)
			print('***********************',a)
			for j in a:
				samp.append(j)
		print(samp)
		
		for k in samp:
		
			sam = frappe.new_doc("Sample Information")
			sam.system_reference_number = self.system_reference_number
			sam.section=self.section
			sam.name_of_tests = k.get("name_of_test")
			sam.vrd_unit=self.vrd_unit
			sam.batch_no = self.batch_code
			sam.sample_condition= self.sample_state_on_receipt
			sam.date_info_registered_ddmmyy = today()
			sam.insert(ignore_mandatory = True)
			sam.submit()


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
			

	@frappe.whitelist()
	def get_date(self):
		if self.date_sample_received != "":
			if getdate(self.date_sample_received) != getdate(self.time_sample_received[0:10]):
				return frappe.throw(title="Different Dates Entered",msg="Date in the Time Sample Received cannot be different from Date Sample Received")
				# return [type(getdate(self.time_sample_received[0:10]),),getdate(self.time_sample_received[0:10]),self.time_sample_received[0:10]]
		else:
			pass
	
			
	@frappe.whitelist()
	def get_sam_date(self):
		if self.sampling_date != "":
			if getdate(self.sampling_date) != getdate(self.sampling_time[0:10]):
				return frappe.throw(title="Different Dates Entered",msg="Date in the Sampling Time cannot be different from Sampling Date")

		else:
			pass


		frappe.datetime.now_time()

			
	
