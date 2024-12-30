# Daily caloric supply derived from carbohydrates, protein and fat - Data package

This data package contains the data that powers the chart ["Daily caloric supply derived from carbohydrates, protein and fat"](https://ourworldindata.org/grapher/daily-caloric-supply-derived-from-carbohydrates-protein-and-fat?v=1&csvType=full&useColumnShortNames=false) on the Our World in Data website.

## CSV Structure

The high level structure of the CSV file is that each row is an observation for an entity (usually a country or region) and a timepoint (usually a year).

The first two columns in the CSV file are "Entity" and "Code". "Entity" is the name of the entity (e.g. "United States"). "Code" is the OWID internal entity code that we use if the entity is a country or region. For normal countries, this is the same as the [iso alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code of the entity (e.g. "USA") - for non-standard countries like historical countries these are custom codes.

The third column is either "Year" or "Day". If the data is annual, this is "Year" and contains only the year as an integer. If the column is "Day", the column contains a date string in the form "YYYY-MM-DD".

The remaining columns are the data columns, each of which is a time series. If the CSV data is downloaded using the "full data" option, then each column corresponds to one time series below. If the CSV data is downloaded using the "only selected data visible in the chart" option then the data columns are transformed depending on the chart type and thus the association with the time series might not be as straightforward.

## Metadata.json structure

The .metadata.json file contains metadata about the data package. The "charts" key contains information to recreate the chart, like the title, subtitle etc.. The "columns" key contains information about each of the columns in the csv, like the unit, timespan covered, citation for the data etc..

## About the data

Our World in Data is almost never the original producer of the data - almost all of the data we use has been compiled by others. If you want to re-use data, it is your responsibility to ensure that you adhere to the sources' license and to credit them correctly. Please note that a single time series may have more than one source - e.g. when we stich together data from different time periods by different producers or when we calculate per capita metrics using population data from a second source.

### How we process data at Our World In Data
All data and visualizations on Our World in Data rely on data sourced from one or several original data providers. Preparing this original data involves several processing steps. Depending on the data, this can include standardizing country names and world region definitions, converting units, calculating derived indicators such as per capita measures, as well as adding or adapting metadata such as the name or the description given to an indicator.
[Read about our data pipeline](https://docs.owid.io/projects/etl/)

## Detailed information about each time series


## Animal protein
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Animal protein – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World In Data

### What you should know about this data

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  

#### Notes on our processing step for this indicator
- The FAO provide annual figures from 1961 by country on daily caloric supply, fat supply (in grams), and protein supply (in grams). To calculate the daily per capita supply of carbohydrates, we assume an energy density by macronutrient of 4 kcal per gram of both protein and carbohydrate and 9 kcal per gram of fat (based on established nutritional guidelines reported by the FAO). The daily supply of carbohydrates is therefore calculated as:

((Daily supply of kcal)-(Daily supply of protein * 4 + Daily supply of fat * 9)) / 4

- The quantity of calories from each macronutrient is then calculated based on the energy density figures given above (e.g. calories from protein is calculated by multiplying the daily supply of protein in grams by 4).

- For an explanation of these conversion factors, see "Chapter 3: Calculation Of The Energy Content Of Foods - Energy Conversion Factors", available at: http://www.fao.org/docrep/006/Y5022E/y5022e04.htm

- The share of calories derived from each macronutrient is then calculated by dividing the number of calories derived from a given macronutrient by the total daily caloric supply.

- Protein of animal origin includes protein supplied in the form of all meat commodities, eggs and dairy products, and fish & seafood.



## Plant protein
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Plant protein – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World In Data

### What you should know about this data

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  

#### Notes on our processing step for this indicator
- The FAO provide annual figures from 1961 by country on daily caloric supply, fat supply (in grams), and protein supply (in grams). To calculate the daily per capita supply of carbohydrates, we assume an energy density by macronutrient of 4 kcal per gram of both protein and carbohydrate and 9 kcal per gram of fat (based on established nutritional guidelines reported by the FAO). The daily supply of carbohydrates is therefore calculated as:

((Daily supply of kcal)-(Daily supply of protein * 4 + Daily supply of fat * 9)) / 4

- The quantity of calories from each macronutrient is then calculated based on the energy density figures given above (e.g. calories from protein is calculated by multiplying the daily supply of protein in grams by 4).

- For an explanation of these conversion factors, see "Chapter 3: Calculation Of The Energy Content Of Foods - Energy Conversion Factors", available at: http://www.fao.org/docrep/006/Y5022E/y5022e04.htm

- The share of calories derived from each macronutrient is then calculated by dividing the number of calories derived from a given macronutrient by the total daily caloric supply.

- Protein of animal origin includes protein supplied in the form of all meat commodities, eggs and dairy products, and fish & seafood.



## Fat
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Fat – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World In Data

### What you should know about this data

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  

#### Notes on our processing step for this indicator
- The FAO provide annual figures from 1961 by country on daily caloric supply, fat supply (in grams), and protein supply (in grams). To calculate the daily per capita supply of carbohydrates, we assume an energy density by macronutrient of 4 kcal per gram of both protein and carbohydrate and 9 kcal per gram of fat (based on established nutritional guidelines reported by the FAO). The daily supply of carbohydrates is therefore calculated as:

((Daily supply of kcal)-(Daily supply of protein * 4 + Daily supply of fat * 9)) / 4

- The quantity of calories from each macronutrient is then calculated based on the energy density figures given above (e.g. calories from protein is calculated by multiplying the daily supply of protein in grams by 4).

- For an explanation of these conversion factors, see "Chapter 3: Calculation Of The Energy Content Of Foods - Energy Conversion Factors", available at: http://www.fao.org/docrep/006/Y5022E/y5022e04.htm

- The share of calories derived from each macronutrient is then calculated by dividing the number of calories derived from a given macronutrient by the total daily caloric supply.

- Protein of animal origin includes protein supplied in the form of all meat commodities, eggs and dairy products, and fish & seafood.



## Carbohydrates
Last updated: March 14, 2024  
Next update: March 2025  
Date range: 1961–2021  
Unit: kilocalories per day per capita  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data

#### Full citation
Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Carbohydrates – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (-2013, old methodology and population)”; Food and Agriculture Organization of the United Nations, “Food Balances: Food Balances (2010-)” [original data].
Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World In Data

### What you should know about this data

### Sources

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (-2013, old methodology and population)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBSH  

#### Food and Agriculture Organization of the United Nations – Food Balances: Food Balances (2010-)
Retrieved on: 2024-03-14  
Retrieved from: http://www.fao.org/faostat/en/#data/FBS  

#### Notes on our processing step for this indicator
- The FAO provide annual figures from 1961 by country on daily caloric supply, fat supply (in grams), and protein supply (in grams). To calculate the daily per capita supply of carbohydrates, we assume an energy density by macronutrient of 4 kcal per gram of both protein and carbohydrate and 9 kcal per gram of fat (based on established nutritional guidelines reported by the FAO). The daily supply of carbohydrates is therefore calculated as:

((Daily supply of kcal)-(Daily supply of protein * 4 + Daily supply of fat * 9)) / 4

- The quantity of calories from each macronutrient is then calculated based on the energy density figures given above (e.g. calories from protein is calculated by multiplying the daily supply of protein in grams by 4).

- For an explanation of these conversion factors, see "Chapter 3: Calculation Of The Energy Content Of Foods - Energy Conversion Factors", available at: http://www.fao.org/docrep/006/Y5022E/y5022e04.htm

- The share of calories derived from each macronutrient is then calculated by dividing the number of calories derived from a given macronutrient by the total daily caloric supply.

- Protein of animal origin includes protein supplied in the form of all meat commodities, eggs and dairy products, and fish & seafood.



    