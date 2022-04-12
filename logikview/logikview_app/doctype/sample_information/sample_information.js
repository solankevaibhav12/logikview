// Copyright (c) 2022, Dexciss Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sample Information', {
	section: function(frm) {
		if (frm.doc.section == "Chemical Analysis"){

			set_field_options("vrd_unit", ["Trade Unit","Animal Health Unit","Safety of the Food Chain Unit"])
		}
		if(frm.doc.section == "Diagnostics (Serology and Immunology)"){

			set_field_options("vrd_unit", ["Animal Health Unit"])
		}
		if (frm.doc.section == "Microbiology"){

			set_field_options("vrd_unit", ["Animal Health Unit"])
		}
		if (frm.doc.section == "Parasitology"){

			set_field_options("vrd_unit", ["Safety of the Food Chain Unit"])
		}
		if (frm.doc.section == "Antimicrobial Resistance"){

			set_field_options("vrd_unit", ["	"])
		}
// species
		if (frm.doc.section == "Chemical Analysis"){

			set_field_options("species", ["Bees","Bovine","Caprine",
			"Equine","Fish","Lagomorph","Multi Species","Ovine","Poultry","Swine"
			
						])
		}
		if(frm.doc.section == "Diagnostics (Serology and Immunology)"){

			set_field_options("species", ["Bovine","Caprine","Ovine","Poultry","Poultry (Duck)","Poultry (Sea Gull)","Swine","Wild Birds"])
		}
		if (frm.doc.section == "Microbiology"){

			set_field_options("species", ["Bovine","Ovine","Poultry (Broiler, Layer)","Swine","Turkey","Duck","Caprine"])
		}
		if (frm.doc.section == "Parasitology"){

			set_field_options("species", ["Equine","Swine (Fattener, Sow , Boar)"])
		}
		if (frm.doc.section == "Antimicrobial Resistance"){

			set_field_options("species", ["Poultry (Broiler, Layer,Pullet, Day-old)","Swine"])
		}
		// sex
		if (frm.doc.section == "Chemical Analysis"){

			set_field_options("sex", ["Male","Female","N/A"])
		}
		else{
			set_field_options("sex", [" "])
		}

		// name of tests

		if (frm.doc.section == "Chemical Analysis"){

			set_field_options("name_of_tests", ["17 beta-testosterone","17 β-Nortestosterone (nandrolone)","17-beta-estradiol","Acetyl Gestagens",
			"Amitraz","Anthelminthics: Benzimidazoles / Phenolic Anthelminthics","Anthelmintics: Avermectins",
			"Anthelmintics: Benzimidazoles","Anthelmintics: Phenolic Anthelmintics","Antibacterial Subsatnaces: Beta-Lactams/Cephalosporins","Antibacterial Substances",
			"Antibacterial Substances: Aminoglycosides","Antibacterial Substances: Beta-Lactams","Antibacterial Substances: Beta-Lactams/Aminoglycosides/Cephalosporins","Antibacterial Substances: Beta-Lactams/Amoxicillin/Macrolides",
			"Antibacterial Substances: Beta-Lactams/Cephalosporins/Macrolides","Antibacterial Substances: Beta-Lactams/Macrolides","Antibacterial SUbstances: Cefalexin",
			"Antibacterial Substances: Sulphonamides","Anticoccidials","Beta Agonists","Beta-Blockers/ Sedatives/ Tranquilizers","Biogenic Amines (Histamine)",
			"Boldenone","Carbadox/ Olaquindox","Carbamates","Chloramphenicol","Chlortestosterone","Clavulanic Acid","Cocciddiostats / Trimethoprim / Nitroimidazoles",
			"Coccidiostats","Coccidiostats / Antibacterial Substances / Nitroimdazoles","Coccidiostats / Sulphonamides / Chloramphenicol",
			"Coccidiostats / Sulphonamides / Nitrofurans","Dapsone","Dioxins (PCCDs), Furans (PCDFs) and Dioxin-like PCBs","Dioxins (PCDDs), Furans (PCDFs)",
			"Dyes","Ethinylestradiol","Florfenicol","Formamidine (Amitraz)","Fuminosins","Glucocorticoids","Heavy Metals (Fluorine)","Heavy Metals (Lead, Cadmium)",
			"Heavy Metals (Lead, Cadmium, Mercury, Arsenic, Nickel)","Heavy Metals (Lead, Cadmium, Mercury, Arsenic, Nickel, Tin)","Heavy Metals (Lead, Cadmium, Mercury, Total Arsenic)",
			"Heavy Metals (Lead, Cadmium, Nickel, Total Arsenic, Copper)","Heavy Metals: Arsenic","Heavy Metals: Cadmium","Ionophores","Methylboldenone","Methyltestosterone","Mycotoxins (Aflatoxin M1)",
			"Mycotoxins (Aflatoxins B1, B2, G1, G2)","Mycotoxins (Deoxynivalenol)","Mycotoxins (Fumonisins)","Mycotoxins (Ochratoxin A)","Nandrolone (17 beta-19 nortestosterone)","Nitrofuran metabolites","Nitrofurans ","Nitrofurans and metabolites",
			"Nitroimidazoles","Nitroimidazoles / Nitrofurans / Chloramphenicol / Dapsone","Nitroimidazoles and Metabolites","Novobiocin","NSAIDs","NSAIDs / Antibacterial Substances / Benzimidazoles / Phenolic Anthelminthics",
			"NSAIDs / Antibacterial Substances / Nitroimidazoles / Nitrofurans / Chloramphenicol / Dapsone","Organochlorine Compounds ","Organophosphorus Pesticides","PCBs (Non-Dioxin like)","PCBs (Non-Dioxin like)/Organochlorine Compounds","Phenolic Anthelminthics ",
			"Polymyxin-Colistin","Praziquantel","Pyrethroids","Resorcyclic acid lactones","Rifaximin","Stanozolol (17beta-hydroxystanozolol)",
			"Stilbenes","Sulphur dioxide","Thyrostats (Anti thyroid agents)","Tiamulin","Trenbolone","Trimethoprim","Zinc Bacitracin","Zinc oxide"				
						
])
		}

		if (frm.doc.section == "Diagnostics (Serology and Immunology)"){

			set_field_options("name_of_tests", ["African Horse Sickness","Avian Influenza (High Pathogenic)",
			"Avian Influenza (Low Pathogenic)","Bluetongue","Brucellosis","Classical Swine Fever ","Enzootic Bovine Leukosis",
			"Foot and Mouth Disease","Newcastle Disease","Transmissible Spongiform Encephalopathies (TSEs)"
		])
		}

		if (frm.doc.section == "Microbiology"){

			set_field_options("name_of_tests", ["Detection of Salmonella spp.","Total Bacterial Count","Enterobacterial Count",
			"E.coli Count","Detection of Campylobacter spp.","Detection of Commensal E.coli","Detection of Presumptive ESBL-/AmpC-producing Escherichia coli","Detection of Presumptive OXA-48 like Carbapenamase -producing Escherichia coli",
			"Determination of Antimicrobial Resistance of E.coli and Salmonella spp. "])
		}

		if (frm.doc.section == "Parasitology"){

			set_field_options("name_of_tests", [" "])
		}
		if (frm.doc.section == "Antimicrobial Resistance"){

			set_field_options("name_of_tests", [" "])
		}
		


		// matrix
		if (frm.doc.section == "Chemical Analysis"){

			set_field_options("matrix", ["Barley","Blood","Canned Pet Food","Canned Tuna","Corn ","Corned Beef",
			"Drinking Water","Eggs","Feed","Fish Meal","Hair","Honey","Injection Site","Kidney","Liver","Maize","Milk",
			"Muscle","Plasma","Renal Fat","Serum","Soyabean Meal","Urine"])
		}

		if (frm.doc.section == "Diagnostics (Serology and Immunology)"){

			set_field_options("matrix", ["Blood","Cloacal Swab","Milk","Tracheal Swab "])
		}

		if (frm.doc.section == "Microbiology"){

			set_field_options("matrix", ["Carcass Swab","Chick Liner/s","Cloacal Swab","Dead Chicks","Dust ","Dust Swab","Eggs","Environmental Swab (Cages)",
			"Environmental Swab (Door)","Environmental Swab (Drinkers)","Environmental Swab (Extractors)","Environmental Swab (Fans)",
			"Environmental Swab (Feeders)","Environmental Swab (Floor)","Environmental Swab (Wall)","Environmental Swab (Windows)","Environmental Swab (Incubator)",
			"Faeces","Neck Skins","Muscle","Liver","Rumen Content"])
		}

		if (frm.doc.section == "Parasitology"){

			set_field_options("matrix", ["Muscle (Diaphragm Pillar - Transition of the Sinewy Part)","Muscle (Masseter)"])
		}
		if (frm.doc.section == "Antimicrobial Resistance"){

			set_field_options("matrix", ["Caecal content","Salmonella spp. culture ","E.coli (commensal) culture ","Presumptive ESBL-/AmpC-producing Escherichia coli culture",
			"Muscle"])
		}
		// sample collection point
		if (frm.doc.section == "Chemical Analysis"){

			set_field_options("sample_collection_point_scp", ["Apiary","Border Inspection Post","Dairy (MDP)","Farm","Feed Business Operator","Packaging Centre","Processing Centre",
		"Slaughterhouse","Vessel"])
		}

		if (frm.doc.section == "Diagnostics (Serology and Immunology)"){

			set_field_options("sample_collection_point_scp", ["Dairy","Farm","Slaughterhouse","Wild Bird Regulation Unit"])
		}

		if (frm.doc.section == "Microbiology"){

			set_field_options("sample_collection_point_scp", ["Border Inspection Post","Farm","MIA Cargo","Slaughterhouse"])
		}
		if (frm.doc.section == "Parasitology"){

			set_field_options("sample_collection_point_scp", ["Slaughterhouse"])
		}
		if (frm.doc.section == "Antimicrobial Resistance"){

			set_field_options("sample_collection_point_scp", ["Slaughterhouse","Farm","Retail","Border Inspection Post"])
		}



	},
	refresh: function(frm){
		frm.doc.info_registered_by_initials = frappe.session.logged_in_user
	}
});
