// Copyright (c) 2022, Dexciss Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Lab Information', {

	// Validation

	before_save: async(frm) => {

		if (frm.is_dirty() && (!frm.is_new())){
			let promise = new Promise((resolve,reject)=>
			frappe.confirm(
				'The document has been modified. Are you sure you want to proceed?',
				() => resolve(),
				() => reject()
			))
			
			await promise.catch(() => frappe.throw());
		}
		
	},
	


	section: function(frm) {
		// vrd unit
		if (frm.doc.section == "Chemical Analysis"){

			set_field_options("vrd_unit", ["Trade Unit","Animal Health Unit","Safety of the Food Chain Unit","Other"])
		}
		if(frm.doc.section == "Diagnostics (Serology and Immunology)"){

			set_field_options("vrd_unit", ["Animal Health Unit","Other"])
		}
		if (frm.doc.section == "Microbiology"){

			set_field_options("vrd_unit", ["Animal Health Unit","Other"])
		}
		if (frm.doc.section == "Parasitology"){

			set_field_options("vrd_unit", ["Safety of the Food Chain Unit","Other"])
		}

		// Multiselect Microbiology
		if (frm.doc.section=="Microbiology"){
			frm.set_query("name_of_tests", function(){
				return{
					"filters": [
						["Name of Tests", "section", "=", "Microbiology"],
					]
				}
			})
			}
	
			// Multiselect Chemical Analysis
			if (frm.doc.section=="Chemical Analysis"){
				frm.set_query("name_of_tests", function(){
					return{
						"filters": [
							["Name of Tests", "section", "=", "Chemical Analysis"],
						]
					}
				})
				}
	
			// Multiselect Diagnostics (Serology and Immunology)
			if (frm.doc.section=="Diagnostics (Serology and Immunology)"){
				frm.set_query("name_of_tests", function(){
					return{
						"filters": [
							["Name of Tests", "section", "=", "Diagnostics (Serology and Immunology)"],
						]
					}
				})
				}
	
			// Multiselect others
	
			if (frm.doc.section=="Parasitology"){
				frm.set_query("name_of_tests", function(){
					return{
						"filters": [
							["Name of Tests", "section", "=", "Parasitology"],
						]
					}
				})
				}
	
			if (frm.doc.section=="Antimicrobial Resistance"){
				frm.set_query("name_of_tests", function(){
					return{
						"filters": [
							["Name of Tests", "section", "=", "Antimicrobial Resistance"],
						]
					}
				})
				}
	
	},
	received_by_lab_officer: function(frm){
		frm.doc.recorded_by_lab_officer = frappe.session.logged_in_user
		refresh_field('recorded_by_lab_officer')
	},
	submission_form_status: function(frm){
		if (frm.doc.submission_form_status=='Rejected'){
			frm.doc.rejected_by = frappe.session.logged_in_user
		}
		refresh_field('rejected_by')
	},

// Date sample recd validation
	// time_sample_received: function(frm){
	// 	if (frm.doc.time_sample_received != null){
	// 	frappe.call({
	// 		method:'get_date',
	// 		doc:cur_frm.doc,
	// 		callback: function(r){
	// 			console.log(r.message)
				
	// 	}
	// 	})
	// }
	// if (frm.doc.time_sample_received == null){
	// 	console.log("yessssssssssssssss")
	// }
		
	// },

	// Sampling date validation
	// sampling_time: function(frm){
	// 	if (frm.doc.sampling_time != null){
	// 	frappe.call({
	// 		method:'get_sam_date',
	// 		doc:cur_frm.doc,
	// 		callback: function(r){
	// 		console.log(r.message)
	// 	}
	// 	})}

	// 	else{
	// 		console.log("yeahhhhhhhhhhhhhhhhh")
	// 	}
	// },

	// setting options
	sample_state_on_receipt: function(frm){
		if (frm.doc.sample_state_on_receipt == "Satisfactory"){
			set_field_options("submission_form_status",["","Accepted"])
			frm.refresh_field("submission_form_status")
			
		}
		else if(frm.doc.sample_state_on_receipt == "Not Satisfactory")
		{
			set_field_options("submission_form_status",["","Rejected"])
			frm.refresh_field("submission_form_status")
		}
		else{
			set_field_options("submission_form_status",["","Accepted","Rejected"])
		}
		
	}



});


frappe.ui.form.on('Sample Information Child Table',{
	species: function(frm,cdt,cdn){
		var child = locals[cdt][cdn];
		if (child.species == "Poultry"){
			frm.refresh_field('category')
			frm.fields_dict.samples.grid.update_docfield_property(
				'category',
				'options',
				["Broiler","Layer","Pullet","Day-Old","Duck","Sea Gull"]
			);
		}

		else if(child.species == "Swine"){
			frm.fields_dict.samples.grid.update_docfield_property(
			"category",
			'options',
			["Fattener","Sow","Boar"]);
		}

		else{
			frm.refresh_field('category')
			frm.fields_dict.samples.grid.update_docfield_property(
				"category",
				'options'
				[""]);
		}
	},

		section: function(frm,cdt,cdn){
			var child = locals[cdt][cdn];
			if (child.section=="Chemical Analysis"){
				
				frm.refresh_field('name_of_tests')
			frm.fields_dict.samples.grid.update_docfield_property(
				'name_of_tests',
				'options',
				["17 beta-testosterone","17 β-Nortestosterone (nandrolone)","17-beta-estradiol","Acetyl Gestagens",
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
						
]
			);
			
		}
		else if(child.section=="Diagnostics (Serology and Immunology)"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'name_of_tests',
				'options',
				["African Horse Sickness","Avian Influenza (High Pathogenic)",
				"Avian Influenza (Low Pathogenic)","Bluetongue","Brucellosis","Classical Swine Fever ","Enzootic Bovine Leukosis",
				"Foot and Mouth Disease","Newcastle Disease","Transmissible Spongiform Encephalopathies (TSEs)"
			]
			);
		}
		else if(child.section=="Microbiology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'name_of_tests',
				'options',
				["Detection of Salmonella spp.","Total Bacterial Count","Enterobacterial Count",
			"E.coli Count","Detection of Campylobacter spp.","Detection of Commensal E.coli","Detection of Presumptive ESBL-/AmpC-producing Escherichia coli","Detection of Presumptive OXA-48 like Carbapenamase -producing Escherichia coli",
			"Determination of Antimicrobial Resistance of E.coli and Salmonella spp. "]
			);

		}
		else if(child.section=="Parasitology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'name_of_tests',
				'options',
				[" "]
			);

		}
		else if(child.section=="Antimicrobial Resistance"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'name_of_tests',
				'options',
				[" "]
			);

		}

		// sample collection point

		if(child.section=="Chemical Analysis"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'sample_collection_point_scp',
				'options',
				["Apiary","Border Inspection Post","Dairy (MDP)","Farm","Feed Business Operator","Packaging Centre","Processing Centre",
		"Slaughterhouse","Vessel"]
			);
		}

		else if(child.section=="Diagnostics (Serology and Immunology)"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'sample_collection_point_scp',
				'options',
				["Dairy","Farm","Slaughterhouse","Wild Bird Regulation Unit"]
			);
		}
		else if(child.section=="Microbiology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'sample_collection_point_scp',
				'options',
				["Border Inspection Post","Farm","MIA Cargo","Slaughterhouse"]
			);
		}
		else if(child.section=="Parasitology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'sample_collection_point_scp',
				'options',
				["Slaughterhouse"]
			);
		}
		else if(child.section=="Antimicrobial Resistance"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'sample_collection_point_scp',
				'options',
				["Slaughterhouse","Farm","Retail","Border Inspection Post"]
			);
		}

		// vrd unit
		if(child.section=="Chemical Analysis"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'vrd_unit',
				'options',
				["Trade Unit","Animal Health Unit","Safety of the Food Chain Unit"]
			);
		}

		else if(child.section=="Diagnostics (Serology and Immunology)"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'vrd_unit',
				'options',
				["Animal Health Unit"]			);
		}
		else if(child.section=="Microbiology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'vrd_unit',
				'options',
				["Animal Health Unit",]			);
		}
		else if(child.section=="Parasitology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'vrd_unit',
				'options',
				["Safety of the Food Chain Unit"]			);
		}
		else if(child.section=="Antimicrobial Resistance"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'vrd_unit',
				'options',
				[" "]			);
		}

		// species

		if(child.section=="Chemical Analysis"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'species',
				'options',
				["Bees","Bovine","Caprine",
				"Equine","Fish","Lagomorph","Multi Species","Ovine","Poultry","Swine"]			);
		}

		else if(child.section=="Diagnostics (Serology and Immunology)"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'species',
				'options',
				["Bovine","Caprine","Ovine","Poultry","Swine","Wild Birds"]);
		}
		else if(child.section=="Microbiology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'species',
				'options',
				["Bovine","Ovine","Swine","Turkey","Duck","Caprine"]			);
		}
		else if(child.section=="Parasitology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'species',
				'options',
				["Equine","Swine"]			);
		}
		else if(child.section=="Antimicrobial Resistance"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'species',
				'options',
				["Poultry","Swine"]		);
		}

		// sex

		if(child.section=="Chemical Analysis"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'sex',
				'options',
				["Male","Female","N/A"]			);
		}

		else{
			frm.fields_dict.samples.grid.update_docfield_property(
				'sex',
				'options',
				["N/A"]);
		}

		// matrix 

		if(child.section=="Chemical Analysis"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'matrix',
				'options',
				["Barley","Blood","Canned Pet Food","Canned Tuna","Corn ","Corned Beef",
			"Drinking Water","Eggs","Feed","Fish Meal","Hair","Honey","Injection Site","Kidney","Liver","Maize","Milk",
			"Muscle","Plasma","Renal Fat","Serum","Soyabean Meal","Urine"]			);
		}

		else if(child.section=="Diagnostics (Serology and Immunology)"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'matrix',
				'options',
				["Blood","Cloacal Swab","Milk","Tracheal Swab "]);
		}
		else if(child.section=="Microbiology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'matrix',
				'options',
				["Carcass Swab","Chick Liner/s","Cloacal Swab","Dead Chicks","Dust ","Dust Swab","Eggs","Environmental Swab (Cages)",
				"Environmental Swab (Door)","Environmental Swab (Drinkers)","Environmental Swab (Extractors)","Environmental Swab (Fans)",
				"Environmental Swab (Feeders)","Environmental Swab (Floor)","Environmental Swab (Wall)","Environmental Swab (Windows)","Environmental Swab (Incubator)",
				"Faeces","Neck Skins","Muscle","Liver","Rumen Content"]		);
		}
		else if(child.section=="Parasitology"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'matrix',
				'options',
				["Muscle (Diaphragm Pillar - Transition of the Sinewy Part)","Muscle (Masseter)"]			);
		}
		else if(child.section=="Antimicrobial Resistance"){
			frm.fields_dict.samples.grid.update_docfield_property(
				'matrix',
				'options',
				["Caecal content","Salmonella spp. culture ","E.coli (commensal) culture ","Presumptive ESBL-/AmpC-producing Escherichia coli culture",
			"Muscle"]		);
		}

		child.info_registered_by_initials = frappe.session.logged_in_user

		
	}
	
	

});