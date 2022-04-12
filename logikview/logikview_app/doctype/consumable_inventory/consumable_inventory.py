# Copyright (c) 2022, Dexciss Technology and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ConsumableInventory(Document):
	def before_save(self):
		self.consumable_id =self.name
