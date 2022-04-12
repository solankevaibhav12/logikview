# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class EquipmentInventory(Document):
	def before_save(self):
		self.equipment_id = self.name
