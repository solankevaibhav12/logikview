from frappe import _

def get_data():
    return{
        'fieldname':'lab_number',
        'fieldname':'system_reference_number',

        'internal_links': {
			'Samples': 'lab_number_reference',
            'Submissions':'system_reference'
		},
        'transactions': [
			{
				'items': ['Samples']
			},
            {
				'items': ['Submissions']
			},
            ]
    }