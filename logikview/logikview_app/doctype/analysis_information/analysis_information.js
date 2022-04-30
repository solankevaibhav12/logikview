// Copyright (c) 2022, Dexciss Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Analysis Information', {

	lab_number_reference: function(frm){
		frappe.call({
			'method':'get_sys_ref',
			'doc':cur_frm.doc,
			callback: function(r){
				// console.log(r.message)
				frm.doc.system_reference = r.message
				refresh_field('system_reference')

			}
		})

		frappe.call({
			'method':'get_name_of_tests',
			'doc':cur_frm.doc,
			callback: function(r){
				console.log(r.message)
				set_field_options('name_of_test',r.message)
				
			}
		})
		
	},

	name_of_test: function(frm){
		
		frappe.call({
			'method':'get_section',
			'doc':frm.doc,
			callback: function(v){
				console.log(v.message)
				frm.doc.section = v.message
				refresh_field('section')
				
				// METHOD USED
				if (frm.doc.section == "Chemical Analysis"){

					set_field_options("method_used", ["AAS","CALUX - bioassay","ELISA","FCIA","GC","GC-ECD","GC-HRMS",
					"GC-MS/MS","GC-MS/NCI","HPLC-Diode Array Detector","HPLC-Fluorescence","HPLC-MS/MS","HPTLC","ICP","ICP-MS",
					"ICP-MS and AAS","Ion Selective Electrode","LC-Fluorescence & LC-MS/MS","LC-MS/MS","LC-ToF","Microbial Multi Plate Screening (Microbiological Inhibition Test) ",
					"Microbiological Screening System (Microbiological Inhibition Test)","Plate Screening (Microbiological Inhibition Test)","RIA (CHARM II system)",
					"Tetrasensor","TM001- Detection and Identification of Eight Sulphonamides in Animal Tissue using Thin Layer Chromatography*",
					"TM002 - Detection and Identification of Eight Sulphonamides in Eggs using Thin Layer Chromatography*",
					"TM003 - Detection and Identification of Eight Sulphonamides in Milk using Thin Layer Chromatography*",
					"U-HPLC-HRMS & GC-MS/MS","UHPLC-MS/MS","UPLC-MS/MS","Volumetric Method"])
				}
				if (frm.doc.section == "Diagnostics (Serology and Immunology)"){

					set_field_options("method_used", ["Complement Fixation Test","ELISA","i-ELISA","c-ELISA","Enzyme Immunoassay",
					"Haemagglutination Inhibition Test ","Milk Ring Test","Reverse Transcriptase Qualitative RT-PCR","Rose Bengal Test","Serum Neutralisation"])
				}
				if (frm.doc.section == "Microbiology"){

					set_field_options("method_used", ["EN ISO 6579-1:2017/A1:2020"])
				}
				if (frm.doc.section == "Parasitology"){

					set_field_options("method_used", ["EN ISO 18743:2015"])
				}
				if (frm.doc.section == "Antimicrobial Resistance"){

					set_field_options("method_used", ["in house method SM008 + CID(EU)2020/1729 + ISO20776-1:2020"])
				}

				// TESTING LAB
						
				if (frm.doc.section == "Chemical Analysis"){

					set_field_options("testing_lab", ["ISCVBM - Ustav pro Statni Kontrolu Veterinarich a Leciv, Czech Republic",
					"National Veterinary Laboratory","SVIJ - State Veterinary Institute Jihlava, Czech Republic","WFSR- Wageningen Food Safety Research, Netherlands"])
				}

				if (frm.doc.section == "Diagnostics (Serology and Immunology)"){

					set_field_options("testing_lab", ["National Veterinary Laboratory","Istituto Zooprofilattico Sperimentale dell'Abruzzo e del Molise 'G. Caporale' - Italy",
					"Istituto Zooprofilattico Sperimentale delle Venezie - Italy","Istituto Zooprofilattico Sperimentale dell' Umbria e delle Marche ' Togo Rosati' - Italy"])
				}

				if (frm.doc.section == "Microbiology"){

					set_field_options("testing_lab", ["National Veterinary Laboratory","Istituto Zooprofilattico Sperimentale delle Venezie - Italy"] )
				}
				if (frm.doc.section == "Parasitology"){

					set_field_options("testing_lab", ["National Veterinary Laboratory"] )
				}

				if (frm.doc.section == "Antimicrobial Resistance"){

					set_field_options("testing_lab", ["National Veterinary Laboratory"] )
				}

				// TESTING SCHEME
				if (frm.doc.section == "Chemical Analysis"){

					set_field_options("testing_scheme", ["Imports","National Plan","Proficiency Test ","Survey","Suspect"] )
				}
		
				if (frm.doc.section == "Diagnostics (Serology and Immunology)"){
		
					set_field_options("testing_scheme", ["Emergency","Proficiency Test","Retest","Routine","Surveillance"] )
				}
				if (frm.doc.section == "Microbiology"){
		
					set_field_options("testing_scheme", ["Feed National Control Programme","Hygiene on Slaughterhouse",
					"Monitoring","Proficiency Test","Salmonella National Control Programme","Suspect"] )
				}
		
				if (frm.doc.section == "Parasitology"){
		
					set_field_options("testing_scheme", ["Emergency","Proficiency Test","Routine"] )
				}
		
				if (frm.doc.section == "Antimicrobial Resistance"){
		
					set_field_options("testing_scheme", ["AMR Monitoring Programme "] )
				}

				// RESULT

				if (frm.doc.section == "Chemical Analysis"){

					set_field_options("result", ["Absence","Compliant","Detected","Non-compliant","Presence"] )
				}
		
				if (frm.doc.section == "Diagnostics (Serology and Immunology)"){
		
					set_field_options("result", ["Positive","Negative"] )
				}
		
				if (frm.doc.section == "Microbiology"){
		
					set_field_options("result", ["No Salmonella spp Isolated","Salmonella spp Isolated","Salmonella serovar listed down eg. Salmonella Kentucky, Salmonella Virchow etc",
					"Commensal E.coli isolated"," Presumptive ESBL-/AmpC-producing Escherichia coli isolated "," Presumptive OXA-48 like Carbapenamase -producing Escherichia coli isolated ",
					"Campylobacter spp. Isolated  (Name of species of Campylobacter to be included eg. Campyobacter coli, Campylobacter jejuni, ect)"] )
				}
		
				if (frm.doc.section == "Parasitology"){
		
					set_field_options("result", ["Absence","Presence"] )
				}
				if (frm.doc.section == "Antimicrobial Resistance"){
		
					set_field_options("result", ["Resistant","Susceptible"] )
				}
		
				// MEASUREMENT UNITS
			if (frm.doc.section == "Chemical Analysis"){
	
				set_field_options("units", ["µg/kg","µg/L","mg/kg","mg/L","ng/ml","ng/g"])
			}
			if (frm.doc.section == "Diagnostics (Serology and Immunology)"){
	
				set_field_options("units", ["IU/ml","Antibody Titre"])
			}
			if (frm.doc.section == "Antimicrobial Resistance"){
	
				set_field_options("units", ["µg/ml"])
			}
			if (frm.doc.section == "Microbiology"){
	
				set_field_options("units", [" "])
			}
			if (frm.doc.section == "Parasitology"){
	
				set_field_options("units", [" "])
			}
				
			}
		})
		
	},

	// Entering date when comments are entered
	comments_for_result: function(frm){
		if (frm.doc.comments_for_result !=""){
			frm.doc.date_comment_for_result_inserted=frappe.datetime.nowdate()
			refresh_field('date_comment_for_result_inserted')
		}
		else{
			frm.doc.date_comment_for_result_inserted = null
			refresh_field('date_comment_for_result_inserted')
		}
		if (frm.doc.comments_for_result !=""){
			frm.doc.comment_for_result_inserted_by = frappe.session.logged_in_user
			refresh_field('comment_for_result_inserted_by')
		}
		else{
			frm.doc.comment_for_result_inserted_by = null
			refresh_field('comment_for_result_inserted_by')
		}
		
	}


});
