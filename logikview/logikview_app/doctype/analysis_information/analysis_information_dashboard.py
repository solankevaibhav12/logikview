from frappe import _

def get_data():
    return{
        'fieldname':'lab_number',
        'fieldname':'system_reference_number',

        'internal_links': {
			'Sample Information': 'lab_number_reference',
            'Lab Information':'system_reference'
		},
        'transactions': [
			{
				'items': ['Sample Information']
			},
            {
				'items': ['Lab Information']
			},
            ]
    }