#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from pymongo import MongoClient
import xml.etree.ElementTree as ET
import os

def parseXML(directory, file):
    print(file)
    
    tree = ET.parse(os.path.join(directory, file))
    root = tree.getroot()
    
    data = dict()
    
    condition = []
    country = []
    
    for elem in root.iter():
        if(elem.tag in fields):
            if elem.tag == 'condition':
                condition.append({'cond_name':elem.text})
            elif elem.tag == 'location_countries':
                country.append({'country':elem[0].text})
            elif elem.tag == 'enrollment' and elem.attrib == 'Actual':
                data[elem.tag] = elem.text
            elif elem.tag == 'study_first_submitted':
                data[elem.tag] = elem.text
            else:
                data[elem.tag] = elem.text
                
    data['condition'] = condition
    data['country'] = country
    
    return data

fields = set(['nct_id','condition','location_countries', 'enrollment','study_first_submitted', 'last_update_submitted' ])

# Making Connection
myclient = MongoClient('localhost', 27017)
# database
db = myclient['ClinicalTrials_db']
collection = db['ClinicalTrialData']


directory = './ClinicalTrials_data'

for folder in os.listdir(directory):
    if folder.endswith(".txt"):
        continue
    for filename in os.listdir(os.path.join(directory, folder)):
        data = parseXML(directory+'/'+folder,filename)
        collection.insert_one(data)

#if pymongo >= 3.0 use insert_one() for inserting one document

myclient.close()