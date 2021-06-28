# Data access to analytics via Reports 


- Objective create a reports for summary data and raw data export .


We proposed to create a new Reports as per data need for analysis by clinician. The Data managers will create SQL querries or querries in any other lanagues as per requirement (output table) suggested to single table per report, so it can be exported as CSV. 

List of reports in BHAMNI (https://emr.dphcp.org/bahmni/reports/#/dashboard/reports)[https://emr.dphcp.org/bahmni/reports/#/dashboard/reports] is controlled by JSON file. JSON file need to be modified so the created report will avaliable in GUI. 
## Reports JSON file path (path to JSON file) 
/opt/bahmni-web/etc/nepalehr-config/openmrs/apps/reports 

Start Date, End Date and Output type are dynamic please consider that while creating SQl queries (Convert if querries are provided in other language). The created SQL queries must be stored in provided folder. 

## Reports SQL (Path to folder)
/opt/bahmni-web/etc/nepalehr-config/openmrs/reports/hmis 

 
### Sub-Task 
- create SQL queries for raw data exports
- create SQLs for summary reports by indicators. 


## Examples 

NepalEHR 
