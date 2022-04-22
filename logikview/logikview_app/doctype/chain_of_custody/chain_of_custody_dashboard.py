from frappe import _

def get_data():
    return{
        'fieldname':'lab_number',
        'internal_links': {
			'Sample Information': 'lab_number_reference',
		},
        'transactions': [
			{
				'items': ['Sample Information']
			},
            
            ]
    }