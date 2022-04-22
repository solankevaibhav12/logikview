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


// 	section: function(frm) {
// 		if (frm.doc.section == "Chemical Analysis"){

// 			set_field_options("method_used", ["AAS","CALUX - bioassay","ELISA","FCIA","GC","GC-ECD","GC-HRMS",
// 			"GC-MS/MS","GC-MS/NCI","HPLC-Diode Array Detector","HPLC-Fluorescence","HPLC-MS/MS","HPTLC","ICP","ICP-MS",
// 			"ICP-MS and AAS","Ion Selective Electrode","LC-Fluorescence & LC-MS/MS","LC-MS/MS","LC-ToF","Microbial Multi Plate Screening (Microbiological Inhibition Test) ",
// 			"Microbiological Screening System (Microbiological Inhibition Test)","Plate Screening (Microbiological Inhibition Test)","RIA (CHARM II system)",
// 			"Tetrasensor","TM001- Detection and Identification of Eight Sulphonamides in Animal Tissue using Thin Layer Chromatography*",
// 			"TM002 - Detection and Identification of Eight Sulphonamides in Eggs using Thin Layer Chromatography*",
// 			"TM003 - Detection and Identification of Eight Sulphonamides in Milk using Thin Layer Chromatography*",
// 			"U-HPLC-HRMS & GC-MS/MS","UHPLC-MS/MS","UPLC-MS/MS","Volumetric Method"])
// 		}
// 		if (frm.doc.section == "Diagnostics (Serology and Immunology)"){

// 			set_field_options("method_used", ["Complement Fixation Test","ELISA","i-ELISA","c-ELISA","Enzyme Immunoassay",
// 			"Haemagglutination Inhibition Test ","Milk Ring Test","Reverse Transcriptase Qualitative RT-PCR","Rose Bengal Test","Serum Neutralisation"])
// 		}

// 		if (frm.doc.section == "Microbiology"){

// 			set_field_options("method_used", ["EN ISO 6579-1:2017/A1:2020"])
// 		}
// 		if (frm.doc.section == "Parasitology"){

// 			set_field_options("method_used", ["EN ISO 18743:2015"])
// 		}
// 		if (frm.doc.section == "Antimicrobial Resistance"){

// 			set_field_options("method_used", ["in house method SM008 + CID(EU)2020/1729 + ISO20776-1:2020"])
// 		}

// // testing lab

// 		if (frm.doc.section == "Chemical Analysis"){

// 			set_field_options("testing_lab", ["ISCVBM - Ustav pro Statni Kontrolu Veterinarich a Leciv, Czech Republic",
// 			"National Veterinary Laboratory","SVIJ - State Veterinary Institute Jihlava, Czech Republic","WFSR- Wageningen Food Safety Research, Netherlands"])
// 		}

// 		if (frm.doc.section == "Diagnostics (Serology and Immunology)"){

// 			set_field_options("testing_lab", ["National Veterinary Laboratory","Istituto Zooprofilattico Sperimentale dell'Abruzzo e del Molise 'G. Caporale' - Italy",
// 			"Istituto Zooprofilattico Sperimentale delle Venezie - Italy","Istituto Zooprofilattico Sperimentale dell' Umbria e delle Marche ' Togo Rosati' - Italy"])
// 		}

// 		if (frm.doc.section == "Microbiology"){

// 			set_field_options("testing_lab", ["National Veterinary Laboratory","Istituto Zooprofilattico Sperimentale delle Venezie - Italy"] )
// 		}
// 		if (frm.doc.section == "Parasitology"){

// 			set_field_options("testing_lab", ["National Veterinary Laboratory"] )
// 		}

// 		if (frm.doc.section == "Antimicrobial Resistance"){

// 			set_field_options("testing_lab", ["National Veterinary Laboratory"] )
// 		}

// // testing scheme
// 		if (frm.doc.section == "Chemical Analysis"){

// 			set_field_options("testing_scheme", ["Imports","National Plan","Proficiency Test ","Survey","Suspect"] )
// 		}

// 		if (frm.doc.section == "Diagnostics (Serology and Immunology)"){

// 			set_field_options("testing_scheme", ["Emergency","Proficiency Test","Retest","Routine","Surveillance"] )
// 		}
// 		if (frm.doc.section == "Microbiology"){

// 			set_field_options("testing_scheme", ["Feed National Control Programme","Hygiene on Slaughterhouse",
// 			"Monitoring","Proficiency Test","Salmonella National Control Programme","Suspect"] )
// 		}

// 		if (frm.doc.section == "Parasitology"){

// 			set_field_options("testing_scheme", ["Emergency","Proficiency Test","Routine"] )
// 		}

// 		if (frm.doc.section == "Antimicrobial Resistance"){

// 			set_field_options("testing_scheme", ["AMR Monitoring Programme "] )
// 		}

// 		// result
// 		if (frm.doc.section == "Chemical Analysis"){

// 			set_field_options("result", ["Absence","Compliant","Detected","Non-compliant","Presence"] )
// 		}

// 		if (frm.doc.section == "Diagnostics (Serology and Immunology)"){

// 			set_field_options("result", ["Positive","Negative"] )
// 		}

// 		if (frm.doc.section == "Microbiology"){

// 			set_field_options("result", ["No Salmonella spp Isolated","Salmonella spp Isolated","Salmonella serovar listed down eg. Salmonella Kentucky, Salmonella Virchow etc",
// 			"Commensal E.coli isolated"," Presumptive ESBL-/AmpC-producing Escherichia coli isolated "," Presumptive OXA-48 like Carbapenamase -producing Escherichia coli isolated ",
// 			"Campylobacter spp. Isolated  (Name of species of Campylobacter to be included eg. Campyobacter coli, Campylobacter jejuni, ect)"] )
// 		}

// 		if (frm.doc.section == "Parasitology"){

// 			set_field_options("result", ["Absence","Presence"] )
// 		}
// 		if (frm.doc.section == "Antimicrobial Resistance"){

// 			set_field_options("result", ["Resistant","Susceptible"] )
// 		}

// 		// measurements units
// 			if (frm.doc.section == "Chemical Analysis"){
	
// 				set_field_options("units", ["µg/kg","µg/L","mg/kg","mg/L","ng/ml","ng/g"])
// 			}
// 			if (frm.doc.section == "Diagnostics (Serology and Immunology)"){
	
// 				set_field_options("units", ["IU/ml","Antibody Titre"])
// 			}
// 			if (frm.doc.section == "Antimicrobial Resistance"){
	
// 				set_field_options("units", ["µg/ml"])
// 			}
// 			if (frm.doc.section == "Microbiology"){
	
// 				set_field_options("units", [" "])
// 			}
// 			if (frm.doc.section == "Parasitology"){
	
// 				set_field_options("units", [" "])
// 			}

// 			// name of tests

// 			if (frm.doc.section == "Chemical Analysis"){

// 				set_field_options("name_of_test", ["17 beta-testosterone","17 β-Nortestosterone (nandrolone)","17-beta-estradiol","Acetyl Gestagens",
// 				"Amitraz","Anthelminthics: Benzimidazoles / Phenolic Anthelminthics","Anthelmintics: Avermectins",
// 				"Anthelmintics: Benzimidazoles","Anthelmintics: Phenolic Anthelmintics","Antibacterial Subsatnaces: Beta-Lactams/Cephalosporins","Antibacterial Substances",
// 				"Antibacterial Substances: Aminoglycosides","Antibacterial Substances: Beta-Lactams","Antibacterial Substances: Beta-Lactams/Aminoglycosides/Cephalosporins","Antibacterial Substances: Beta-Lactams/Amoxicillin/Macrolides",
// 				"Antibacterial Substances: Beta-Lactams/Cephalosporins/Macrolides","Antibacterial Substances: Beta-Lactams/Macrolides","Antibacterial SUbstances: Cefalexin",
// 				"Antibacterial Substances: Sulphonamides","Anticoccidials","Beta Agonists","Beta-Blockers/ Sedatives/ Tranquilizers","Biogenic Amines (Histamine)",
// 				"Boldenone","Carbadox/ Olaquindox","Carbamates","Chloramphenicol","Chlortestosterone","Clavulanic Acid","Cocciddiostats / Trimethoprim / Nitroimidazoles",
// 				"Coccidiostats","Coccidiostats / Antibacterial Substances / Nitroimdazoles","Coccidiostats / Sulphonamides / Chloramphenicol",
// 				"Coccidiostats / Sulphonamides / Nitrofurans","Dapsone","Dioxins (PCCDs), Furans (PCDFs) and Dioxin-like PCBs","Dioxins (PCDDs), Furans (PCDFs)",
// 				"Dyes","Ethinylestradiol","Florfenicol","Formamidine (Amitraz)","Fuminosins","Glucocorticoids","Heavy Metals (Fluorine)","Heavy Metals (Lead, Cadmium)",
// 				"Heavy Metals (Lead, Cadmium, Mercury, Arsenic, Nickel)","Heavy Metals (Lead, Cadmium, Mercury, Arsenic, Nickel, Tin)","Heavy Metals (Lead, Cadmium, Mercury, Total Arsenic)",
// 				"Heavy Metals (Lead, Cadmium, Nickel, Total Arsenic, Copper)","Heavy Metals: Arsenic","Heavy Metals: Cadmium","Ionophores","Methylboldenone","Methyltestosterone","Mycotoxins (Aflatoxin M1)",
// 				"Mycotoxins (Aflatoxins B1, B2, G1, G2)","Mycotoxins (Deoxynivalenol)","Mycotoxins (Fumonisins)","Mycotoxins (Ochratoxin A)","Nandrolone (17 beta-19 nortestosterone)","Nitrofuran metabolites","Nitrofurans ","Nitrofurans and metabolites",
// 				"Nitroimidazoles","Nitroimidazoles / Nitrofurans / Chloramphenicol / Dapsone","Nitroimidazoles and Metabolites","Novobiocin","NSAIDs","NSAIDs / Antibacterial Substances / Benzimidazoles / Phenolic Anthelminthics",
// 				"NSAIDs / Antibacterial Substances / Nitroimidazoles / Nitrofurans / Chloramphenicol / Dapsone","Organochlorine Compounds ","Organophosphorus Pesticides","PCBs (Non-Dioxin like)","PCBs (Non-Dioxin like)/Organochlorine Compounds","Phenolic Anthelminthics ",
// 				"Polymyxin-Colistin","Praziquantel","Pyrethroids","Resorcyclic acid lactones","Rifaximin","Stanozolol (17beta-hydroxystanozolol)",
// 				"Stilbenes","Sulphur dioxide","Thyrostats (Anti thyroid agents)","Tiamulin","Trenbolone","Trimethoprim","Zinc Bacitracin","Zinc oxide"				
							
// 	])
// 			}
	
// 			if (frm.doc.section == "Diagnostics (Serology and Immunology)"){
	
// 				set_field_options("name_of_test", ["African Horse Sickness","Avian Influenza (High Pathogenic)",
// 				"Avian Influenza (Low Pathogenic)","Bluetongue","Brucellosis","Classical Swine Fever ","Enzootic Bovine Leukosis",
// 				"Foot and Mouth Disease","Newcastle Disease","Transmissible Spongiform Encephalopathies (TSEs)"
// 			])
// 			}
	
// 			if (frm.doc.section == "Microbiology"){
	
// 				set_field_options("name_of_test", ["Detection of Salmonella spp.","Total Bacterial Count","Enterobacterial Count",
// 				"E.coli Count","Detection of Campylobacter spp.","Detection of Commensal E.coli","Detection of Presumptive ESBL-/AmpC-producing Escherichia coli","Detection of Presumptive OXA-48 like Carbapenamase -producing Escherichia coli",
// 				"Determination of Antimicrobial Resistance of E.coli and Salmonella spp. "])
// 			}
	
// 			if (frm.doc.section == "Parasitology"){
	
// 				set_field_options("name_of_test", [" "])
// 			}
// 			if (frm.doc.section == "Antimicrobial Resistance"){
	
// 				set_field_options("name_of_test", [" "])
// 			}
	
		
// 	},

	
});
