const PortCodes = [
  {
    code: '0101',
    name: 'Portland, ME',
  },
  {
    code: '0102',
    name: 'Brewer, ME',
  },
  {
    code: '0103',
    name: 'Lubec, ME',
  },
  {
    code: '0104',
    name: 'Jackman, ME',
  },
  {
    code: '0105',
    name: 'Vanceboro, ME',
  },
  {
    code: '0106',
    name: 'Houlton, ME',
  },
  {
    code: '0107',
    name: 'Fort Fairfield, ME',
  },
  {
    code: '0108',
    name: 'Van Buren, ME',
  },
  {
    code: '0109',
    name: 'Madawaska, ME',
  },
  {
    code: '0110',
    name: 'Fort Kent, ME',
  },
  {
    code: '0111',
    name: 'Bath, ME',
  },
  {
    code: '0112',
    name: 'Bar Harbor, ME',
  },
  {
    code: '0115',
    name: 'Robbinston, ME',
  },
  {
    code: '0118',
    name: 'Limestone, ME',
  },
  {
    code: '0121',
    name: 'Rockland, ME',
  },
  {
    code: '0122',
    name: 'Jonesport, ME',
  },
  {
    code: '0127',
    name: 'Bridgewater, ME',
  },
  {
    code: '0131',
    name: 'Portsmouth, NH',
  },
  {
    code: '0132',
    name: 'Winterport, ME',
  },
  {
    code: '0152',
    name: 'Searsport, ME',
  },
  {
    code: '0181',
    name: 'Lebanon Municipal Airport, NH',
  },
  {
    code: '0201',
    name: 'St. Albans, VT',
  },
  {
    code: '0203',
    name: 'Richford, VT',
  },
  {
    code: '0206',
    name: 'Beecher Falls, VT',
  },
  {
    code: '0207',
    name: 'Burlington, VT',
  },
  {
    code: '0209',
    name: 'Derby Line, VT',
  },
  {
    code: '0211',
    name: 'Norton, VT',
  },
  {
    code: '0212',
    name: 'Highgate Springs/Alburg, VT',
  },
  {
    code: '0401',
    name: 'Weymouth, MA',
  },
  {
    code: '0402',
    name: 'Springfield, MA',
  },
  {
    code: '0403',
    name: 'Worcester, MA',
  },
  {
    code: '0404',
    name: 'Gloucester, MA',
  },
  {
    code: '0405',
    name: 'New Bedford, MA',
  },
  {
    code: '0406',
    name: 'Plymouth, MA',
  },
  {
    code: '0407',
    name: 'Fall River, MA',
  },
  {
    code: '0408',
    name: 'Salem, MA',
  },
  {
    code: '0409',
    name: 'Provincetown, MA',
  },
  {
    code: '0410',
    name: 'Bridgeport, CT',
  },
  {
    code: '0411',
    name: 'Hartford, CT',
  },
  {
    code: '0412',
    name: 'New Haven, CT',
  },
  {
    code: '0413',
    name: 'New London, CT',
  },
  {
    code: '0416',
    name: 'Lawrence, MA',
  },
  {
    code: '0417',
    name: 'Logan Airport, Boston, MA',
  },
  {
    code: '0501',
    name: 'Newport, RI',
  },
  {
    code: '0502',
    name: 'Providence, RI',
  },
  {
    code: '0503',
    name: 'Portsmouth, RI',
  },
  {
    code: '0701',
    name: 'Waddington, NY',
  },
  {
    code: '0704',
    name: 'Massena, NY',
  },
  {
    code: '0705',
    name: 'Fort Covington,NY',
  },
  {
    code: '0706',
    name: 'Cape Vincent, NY',
  },
  {
    code: '0708',
    name: 'Alexandria Bay, NY',
  },
  {
    code: '0711',
    name: 'Chateaugay, NY',
  },
  {
    code: '0712',
    name: 'Rouses Point, NY',
  },
  {
    code: '0714',
    name: 'Clayton, NY',
  },
  {
    code: '0715',
    name: 'Trout River, NY',
  },
  {
    code: '0901',
    name: 'Niagara Falls, NY',
  },
  {
    code: '0903',
    name: 'Rochester, NY',
  },
  {
    code: '0904',
    name: 'Oswego, NY',
  },
  {
    code: '0905',
    name: 'Sodus Point, NY',
  },
  {
    code: '0906',
    name: 'Syracuse, NY',
  },
  {
    code: '0907',
    name: 'Utica, NY',
  },
  {
    code: '0971',
    name: 'TNT Skypak, Buffalo, NY',
  },
  {
    code: '0972',
    name: 'Swift Sure Courier Services',
  },
  {
    code: '1001',
    name: 'New York, NY',
  },
  {
    code: '1002',
    name: 'Albany, NY',
  },
  {
    code: '1003',
    name: 'Newark, NJ',
  },
  {
    code: '1004',
    name: 'Perth Amboy, NJ',
  },
  {
    code: '1012',
    name: "John F. Kennedy Int'l Airport, NY",
  },
  {
    code: '1069',
    name: 'UPS, Newark, NJ',
  },
  {
    code: '1070',
    name: 'Federal Express, Jamaica, NY',
  },
  {
    code: '1071',
    name: 'NYACC, Jamaica, NY',
  },
  {
    code: '1072',
    name: 'DHL, Jamaica, NY',
  },
  {
    code: '1073',
    name: 'Emery Worldwide',
  },
  {
    code: '1074',
    name: 'Air France (Mach Plus)',
  },
  {
    code: '1075',
    name: 'Dworkin/Cosell Courier',
  },
  {
    code: '1076',
    name: 'Swiss Air (Skyracer)',
  },
  {
    code: '1077',
    name: 'Alitalia (Aliexpress)',
  },
  {
    code: '1078',
    name: 'Tnt Skypak',
  },
  {
    code: '1081',
    name: 'Morristown Airport, Newark, NJ',
  },
  {
    code: '1101',
    name: 'Philadelphia, PA',
  },
  {
    code: '1102',
    name: 'Chester, PA',
  },
  {
    code: '1103',
    name: 'Wilmington, DE',
  },
  {
    code: '1104',
    name: 'Pittsburgh, PA',
  },
  {
    code: '1105',
    name: 'Westville, NJ',
  },
  {
    code: '1106',
    name: 'Wilkes-Barre/Scranton, PA',
  },
  {
    code: '1107',
    name: 'Petty Island, NJ',
  },
  {
    code: '1108',
    name: "Philadelphia Int'l Airport, PA",
  },
  {
    code: '1109',
    name: 'Harrisburg, PA',
  },
  {
    code: '1113',
    name: 'Gloucester City, NJ',
  },
  {
    code: '1118',
    name: 'Marcus Hook, PA',
  },
  {
    code: '1119',
    name: 'Lehigh Valley Port Of Entry, Lehigh',
  },
  {
    code: '1301',
    name: 'Annapolis, MD',
  },
  {
    code: '1302',
    name: 'Cambridge, MD',
  },
  {
    code: '1303',
    name: 'Baltimore, MD',
  },
  {
    code: '1304',
    name: 'Crisfield, MD',
  },
  {
    code: '1305',
    name: 'Baltimore-Washington Intl Airport, MD',
  },
  {
    code: '1401',
    name: 'Portsmouth, VA',
  },
  {
    code: '1402',
    name: 'York River, VA',
  },
  {
    code: '1404',
    name: 'Richmond-Petersburg, VA',
  },
  {
    code: '1408',
    name: 'Hopewell, VA',
  },
  {
    code: '1409',
    name: 'Charleston, WV',
  },
  {
    code: '1410',
    name: 'Front Royal, VA',
  },
  {
    code: '1501',
    name: 'Wilmington, NC',
  },
  {
    code: '1502',
    name: 'Greensboro, NC',
  },
  {
    code: '1503',
    name: 'Durham, NC',
  },
  {
    code: '1506',
    name: 'Reidsville, NC',
  },
  {
    code: '1511',
    name: 'Morehead City, NC',
  },
  {
    code: '1512',
    name: 'Charlotte, NC',
  },
  {
    code: '1601',
    name: 'Charleston, SC',
  },
  {
    code: '1602',
    name: 'Georgetown, SC',
  },
  {
    code: '1603',
    name: 'Spartanburg, SC',
  },
  {
    code: '1604',
    name: 'Columbia, SC',
  },
  {
    code: '1701',
    name: 'Brunswick, GA',
  },
  {
    code: '1703',
    name: 'Savannah, GA',
  },
  {
    code: '1704',
    name: 'Atlanta, GA',
  },
  {
    code: '1801',
    name: 'Tampa, FL',
  },
  {
    code: '1803',
    name: 'Jacksonville, FL',
  },
  {
    code: '1805',
    name: 'Fernandina Beach, FL',
  },
  {
    code: '1807',
    name: 'Boca Grande, FL',
  },
  {
    code: '1808',
    name: 'Orlando, FL',
  },
  {
    code: '1814',
    name: 'St. Petersburg, FL',
  },
  {
    code: '1816',
    name: 'Port Canaveral, FL',
  },
  {
    code: '1818',
    name: 'Panama City, FL',
  },
  {
    code: '1819',
    name: 'Pensacola, FL',
  },
  {
    code: '1821',
    name: 'Port Manatee, FL',
  },
  {
    code: '1881',
    name: 'Southwest Florida Regional Airport',
  },
  {
    code: '1882',
    name: 'Sanford Regional Airport, FL',
  },
  {
    code: '1883',
    name: 'Sarasota-Bradenton Airport, FL',
  },
  {
    code: '1884',
    name: 'Daytona Beach Airport, FL',
  },
  {
    code: '1885',
    name: 'Melbourne Regional Airport',
  },
  {
    code: '1901',
    name: 'Theodore, AL',
  },
  {
    code: '1902',
    name: 'Gulfport, MS',
  },
  {
    code: '1903',
    name: 'Pascagoula, MS',
  },
  {
    code: '1904',
    name: 'Birmingham, AL',
  },
  {
    code: '1910',
    name: 'Huntsville, AL',
  },
  {
    code: '2001',
    name: 'Morgan City, LA',
  },
  {
    code: '2002',
    name: 'Westwego, LA',
  },
  {
    code: '2003',
    name: 'Little Rock, AR',
  },
  {
    code: '2004',
    name: 'Baton Rouge, LA',
  },
  {
    code: '2005',
    name: 'Port Sulphur, LA',
  },
  {
    code: '2006',
    name: 'Memphis, TN',
  },
  {
    code: '2007',
    name: 'Nashville, TN',
  },
  {
    code: '2008',
    name: 'Chattanooga, TN',
  },
  {
    code: '2009',
    name: 'Luling, LA',
  },
  {
    code: '2010',
    name: 'Gramercy, LA',
  },
  {
    code: '2011',
    name: 'Greenville, MS',
  },
  {
    code: '2012',
    name: 'Avondale, LA',
  },
  {
    code: '2013',
    name: 'St. Rose, LA',
  },
  {
    code: '2014',
    name: 'Good Hope, LA',
  },
  {
    code: '2015',
    name: 'Vicksburg, Incl Jackson Municipal, MS',
  },
  {
    code: '2016',
    name: 'Knoxville, TN',
  },
  {
    code: '2017',
    name: 'Lake Charles, LA',
  },
  {
    code: '2018',
    name: 'Shreveport-Bossier City, LA',
  },
  {
    code: '2082',
    name: 'Tri-City User Fee Airport, Bountville',
  },
  {
    code: '2095',
    name: 'Federal Express, Memphis, TN',
  },
  {
    code: '2101',
    name: 'Port Arthur, TX',
  },
  {
    code: '2102',
    name: 'Sabine, TX',
  },
  {
    code: '2103',
    name: 'Orange, TX',
  },
  {
    code: '2104',
    name: 'Port Neches, TX',
  },
  {
    code: '2301',
    name: 'Port Isabel, TX',
  },
  {
    code: '2302',
    name: 'Del Rio, TX',
  },
  {
    code: '2303',
    name: 'Eagle Pass,TX',
  },
  {
    code: '2304',
    name: 'Laredo, TX',
  },
  {
    code: '2305',
    name: 'Hidalgo, TX',
  },
  {
    code: '2307',
    name: 'Rio Grande City, TX',
  },
  {
    code: '2309',
    name: 'Progresso, TX',
  },
  {
    code: '2310',
    name: 'Roma, TX',
  },
  {
    code: '2402',
    name: 'Ysleta, TX',
  },
  {
    code: '2403',
    name: 'Presidio, TX',
  },
  {
    code: '2404',
    name: 'Fabens, TX',
  },
  {
    code: '2406',
    name: 'Columbus, NM',
  },
  {
    code: '2407',
    name: 'Albuquerque, NM',
  },
  {
    code: '2408',
    name: 'Santa Teresa, NM',
  },
  {
    code: '2481',
    name: 'Santa Teresa Airport, Dona Ana Count',
  },
  {
    code: '2501',
    name: 'San Diego, CA',
  },
  {
    code: '2502',
    name: 'Andrade, CA',
  },
  {
    code: '2503',
    name: 'Calexico, CA',
  },
  {
    code: '2504',
    name: 'San Ysidro, CA',
  },
  {
    code: '2505',
    name: 'Tecate, CA',
  },
  {
    code: '2506',
    name: 'Otay Mesa Station, CA',
  },
  {
    code: '2507',
    name: 'Calexico-East, CA',
  },
  {
    code: '2601',
    name: 'Douglas, AZ',
  },
  {
    code: '2602',
    name: 'Lukeville, AZ',
  },
  {
    code: '2603',
    name: 'Naco, AZ',
  },
  {
    code: '2604',
    name: 'Nogales, AZ',
  },
  {
    code: '2605',
    name: 'Phoenix, AZ',
  },
  {
    code: '2606',
    name: 'Sasabe, AZ',
  },
  {
    code: '2608',
    name: 'San Luis, AZ',
  },
  {
    code: '2609',
    name: 'Tucson, AZ',
  },
  {
    code: '2704',
    name: 'Los Angeles, CA',
  },
  {
    code: '2707',
    name: 'San Luis Obispo, CA',
  },
  {
    code: '2709',
    name: 'San Pedro, CA',
  },
  {
    code: '2711',
    name: 'El Segundo, CA',
  },
  {
    code: '2712',
    name: 'Ventura, CA',
  },
  {
    code: '2713',
    name: 'Port Hueneme, CA',
  },
  {
    code: '2715',
    name: 'Capitan, CA',
  },
  {
    code: '2719',
    name: 'Morro, CA',
  },
  {
    code: '2720',
    name: "Los Angeles Int'l Airport, CA",
  },
  {
    code: '2721',
    name: "Ontario Int'l Airport, CA",
  },
  {
    code: '2722',
    name: 'Las Vegas, NV',
  },
  {
    code: '2770',
    name: 'DHL, Los Angeles, CA',
  },
  {
    code: '2772',
    name: 'Gateway Freight Services, LAX',
  },
  {
    code: '2773',
    name: 'Air Cargo Handling Services',
  },
  {
    code: '2774',
    name: 'Virgin Atlantic Cargo, Lax, CA',
  },
  {
    code: '2795',
    name: 'UPS, Ontario, CA',
  },
  {
    code: '2801',
    name: "San Francisco Int'l Airport, CA",
  },
  {
    code: '2802',
    name: 'Eureka, CA',
  },
  {
    code: '2803',
    name: 'Fresno, CA',
  },
  {
    code: '2805',
    name: 'Monterey, CA',
  },
  {
    code: '2809',
    name: 'San Francisco, CA',
  },
  {
    code: '2810',
    name: 'Stockton, CA',
  },
  {
    code: '2811',
    name: 'Oakland, CA',
  },
  {
    code: '2812',
    name: 'Richmond, CA',
  },
  {
    code: '2813',
    name: 'Alameda, CA',
  },
  {
    code: '2815',
    name: 'Crockett, CA',
  },
  {
    code: '2816',
    name: 'Sacramento, CA',
  },
  {
    code: '2820',
    name: 'Martinez, CA',
  },
  {
    code: '2821',
    name: 'Redwood City, CA',
  },
  {
    code: '2827',
    name: 'Selby, CA',
  },
  {
    code: '2828',
    name: 'San Joaquin River, CA',
  },
  {
    code: '2829',
    name: 'Vallejo, CA',
  },
  {
    code: '2830',
    name: 'Port Costa, CA',
  },
  {
    code: '2831',
    name: 'Suisun Slough, CA',
  },
  {
    code: '2833',
    name: 'Reno, NV',
  },
  {
    code: '2834',
    name: "San Jose Int'l Airport, San Francisco, CA",
  },
  {
    code: '2870',
    name: 'DHL Worldwide Express, San Francisco, CA',
  },
  {
    code: '2871',
    name: 'Air Cargo Handling Services, San Francisco, CA',
  },
  {
    code: '2872',
    name: 'TNT Skypak, San Francisco, CA',
  },
  {
    code: '2895',
    name: 'Fedex Courier Fac., Oakland, CA',
  },
  {
    code: '2901',
    name: 'Astoria, OR',
  },
  {
    code: '2902',
    name: 'Toledo, OR',
  },
  {
    code: '2903',
    name: 'North Bend, OR',
  },
  {
    code: '2904',
    name: 'Portland, OR',
  },
  {
    code: '2905',
    name: 'Longview, WA',
  },
  {
    code: '2907',
    name: 'Boise, ID',
  },
  {
    code: '2908',
    name: 'Vancouver, WA',
  },
  {
    code: '2909',
    name: 'Kalama, WA',
  },
  {
    code: '2910',
    name: 'Portland Intl Airport, OR',
  },
  {
    code: '2981',
    name: 'Kingsley Field, Klamath Falls, OR',
  },
  {
    code: '2982',
    name: 'Medford/Jackson County Airport, MedF',
  },
  {
    code: '2991',
    name: 'Federal Express Hub, Portland, OR',
  },
  {
    code: '3001',
    name: 'Seattle, WA',
  },
  {
    code: '3002',
    name: 'Tacoma, WA',
  },
  {
    code: '3003',
    name: 'Hoquiam,WA',
  },
  {
    code: '3004',
    name: 'Blaine, WA',
  },
  {
    code: '3005',
    name: 'Bellingham, WA',
  },
  {
    code: '3006',
    name: 'Everett, WA',
  },
  {
    code: '3007',
    name: 'Port Angeles, WA',
  },
  {
    code: '3008',
    name: 'Port Townsend, WA',
  },
  {
    code: '3009',
    name: 'Sumas, WA',
  },
  {
    code: '3010',
    name: 'Anacortes, WA',
  },
  {
    code: '3011',
    name: 'Nighthawk, WA',
  },
  {
    code: '3012',
    name: 'Danville, WA',
  },
  {
    code: '3013',
    name: 'Ferry, WA',
  },
  {
    code: '3014',
    name: 'Friday Harbor, WA',
  },
  {
    code: '3015',
    name: 'Boundary, WA',
  },
  {
    code: '3016',
    name: 'Laurier, WA',
  },
  {
    code: '3017',
    name: 'Point Roberts, WA',
  },
  {
    code: '3018',
    name: 'Kenmore Air Harbor, WA',
  },
  {
    code: '3019',
    name: 'Oroville, WA',
  },
  {
    code: '3020',
    name: 'Frontier, WA',
  },
  {
    code: '3022',
    name: 'Spokane, WA',
  },
  {
    code: '3023',
    name: 'Lynden, WA',
  },
  {
    code: '3025',
    name: 'Metaline Falls, WA',
  },
  {
    code: '3026',
    name: 'Olympia, WA',
  },
  {
    code: '3027',
    name: 'Neah Bay, WA',
  },
  {
    code: '3029',
    name: "Seattle-Tacoma Int'l Airport, WA",
  },
  {
    code: '3071',
    name: 'UPS, Seattle, WA',
  },
  {
    code: '3072',
    name: 'Avion Brokers, Seattle, WA',
  },
  {
    code: '3073',
    name: 'DHL Worldwide Express, Seattle, WA',
  },
  {
    code: '3074',
    name: 'Airborne Express, Seattle, WA',
  },
  {
    code: '3081',
    name: 'Yakima Air Terminal, Yakima, WA',
  },
  {
    code: '3082',
    name: 'Grant County-User Fee Airport, Moses',
  },
  {
    code: '3095',
    name: 'UPS Courier Hub, Seattle, WA',
  },
  {
    code: '3101',
    name: 'Juneau, AK',
  },
  {
    code: '3102',
    name: 'Ward Cove, AK',
  },
  {
    code: '3103',
    name: 'Skagway, AK',
  },
  {
    code: '3104',
    name: 'Alcan, AK',
  },
  {
    code: '3105',
    name: 'Wrangell, AK',
  },
  {
    code: '3106',
    name: 'Dalton Cache, AK',
  },
  {
    code: '3107',
    name: 'Valdez, AK',
  },
  {
    code: '3111',
    name: 'Fairbanks, AK',
  },
  {
    code: '3112',
    name: 'Petersburg, AK',
  },
  {
    code: '3115',
    name: 'Sitka, AK',
  },
  {
    code: '3124',
    name: 'Pelican, AK',
  },
  {
    code: '3125',
    name: 'Sand Point, AK',
  },
  {
    code: '3126',
    name: 'Anchorage, AK',
  },
  {
    code: '3127',
    name: 'Kodiak, AK',
  },
  {
    code: '3181',
    name: 'St. Paul Airport, Anchorage, AK',
  },
  {
    code: '3195',
    name: 'Federal Express, Anchorage, AK',
  },
  {
    code: '3196',
    name: 'UPS, Anchorage, AK',
  },
  {
    code: '3201',
    name: 'Pearl Harbor, HI',
  },
  {
    code: '3202',
    name: 'Hilo, HI',
  },
  {
    code: '3203',
    name: 'Kahului, HI',
  },
  {
    code: '3204',
    name: 'Port Allen, HI',
  },
  {
    code: '3205',
    name: 'Honolulu International Airport, HI',
  },
  {
    code: '3295',
    name: 'UPS, Honolulu, HI',
  },
  {
    code: '3301',
    name: 'Raymond, MT',
  },
  {
    code: '3302',
    name: 'Eastport, ID',
  },
  {
    code: '3303',
    name: 'Salt Lake City, UT',
  },
  {
    code: '3304',
    name: 'Great Falls, MT',
  },
  {
    code: '3305',
    name: 'Butte, MT',
  },
  {
    code: '3306',
    name: 'Turner, MT',
  },
  {
    code: '3307',
    name: 'Denver, CO',
  },
  {
    code: '3308',
    name: 'Porthill, ID',
  },
  {
    code: '3309',
    name: 'Scobey, MT',
  },
  {
    code: '3310',
    name: 'Sweetgrass, MT',
  },
  {
    code: '3312',
    name: 'Whitetail, MT',
  },
  {
    code: '3316',
    name: 'Piegan, MT',
  },
  {
    code: '3317',
    name: 'Opheim, MT',
  },
  {
    code: '3318',
    name: 'Roosville, MT',
  },
  {
    code: '3319',
    name: 'Morgan, MT',
  },
  {
    code: '3321',
    name: 'Whitlash, MT',
  },
  {
    code: '3322',
    name: 'Del Bonita, MT',
  },
  {
    code: '3382',
    name: "Natrona County Int'l Airport",
  },
  {
    code: '3401',
    name: 'Pembina, ND',
  },
  {
    code: '3402',
    name: 'Noyes, MN',
  },
  {
    code: '3403',
    name: 'Portal, ND',
  },
  {
    code: '3404',
    name: 'Neche, ND',
  },
  {
    code: '3405',
    name: 'St. John, ND',
  },
  {
    code: '3406',
    name: 'Northgate, ND',
  },
  {
    code: '3407',
    name: 'Walhalla, ND',
  },
  {
    code: '3408',
    name: 'Hannah, ND',
  },
  {
    code: '3409',
    name: 'Sarles, ND',
  },
  {
    code: '3410',
    name: 'Ambrose, ND',
  },
  {
    code: '3413',
    name: 'Antler, ND',
  },
  {
    code: '3414',
    name: 'Sherwood, ND',
  },
  {
    code: '3415',
    name: 'Hansboro, ND',
  },
  {
    code: '3416',
    name: 'Maida, ND',
  },
  {
    code: '3417',
    name: 'Fortuna, ND',
  },
  {
    code: '3419',
    name: 'Westhope, ND',
  },
  {
    code: '3420',
    name: 'Noonan, ND',
  },
  {
    code: '3421',
    name: 'Carbury,ND',
  },
  {
    code: '3422',
    name: 'Dunseith, ND',
  },
  {
    code: '3423',
    name: 'Warroad, MN',
  },
  {
    code: '3424',
    name: 'Baudette, MN',
  },
  {
    code: '3425',
    name: 'Pinecreek, MN',
  },
  {
    code: '3426',
    name: 'Roseau, MN',
  },
  {
    code: '3481',
    name: "Hector Int'l Airport, Fargo, ND",
  },
  {
    code: '3501',
    name: 'St. Paul, MN',
  },
  {
    code: '3601',
    name: 'Duluth, MN',
  },
  {
    code: '3602',
    name: 'Ashland, WI',
  },
  {
    code: '3604',
    name: 'Ranier, MN',
  },
  {
    code: '3608',
    name: 'Superior, WI',
  },
  {
    code: '3613',
    name: 'Grand Portage, MN',
  },
  {
    code: '3614',
    name: 'Taconite, MN',
  },
  {
    code: '3701',
    name: 'Milwaukee, WI',
  },
  {
    code: '3702',
    name: 'Menominee, MI',
  },
  {
    code: '3703',
    name: 'Green Bay, WI',
  },
  {
    code: '3706',
    name: 'Manitowoc, WI',
  },
  {
    code: '3707',
    name: 'Sheboygan, WI',
  },
  {
    code: '3708',
    name: 'Racine, WI',
  },
  {
    code: '3801',
    name: 'Wyandotte, MI',
  },
  {
    code: '3802',
    name: 'St. Clair, MI',
  },
  {
    code: '3803',
    name: 'Sault Ste. Marie, MI',
  },
  {
    code: '3804',
    name: 'Saginaw-Bay City-Flint, MI',
  },
  {
    code: '3805',
    name: 'Battle Creek, MI',
  },
  {
    code: '3806',
    name: 'Grand Rapids, MI',
  },
  {
    code: '3808',
    name: 'Escanaba, MI',
  },
  {
    code: '3809',
    name: 'Marquette, MI',
  },
  {
    code: '3814',
    name: 'Roberts Landing, MI',
  },
  {
    code: '3815',
    name: 'Muskegon, MI',
  },
  {
    code: '3816',
    name: 'Grand Haven, MI',
  },
  {
    code: '3818',
    name: 'Rogers City, MI',
  },
  {
    code: '3819',
    name: 'Detour, MI',
  },
  {
    code: '3820',
    name: 'Mackinac Island, MI',
  },
  {
    code: '3842',
    name: 'Presque Isle, MI',
  },
  {
    code: '3843',
    name: 'Stoneport, MI',
  },
  {
    code: '3844',
    name: 'Ferrysburg, MI',
  },
  {
    code: '3881',
    name: 'Oakland/Pontiac Airport, Detroit, MI',
  },
  {
    code: '3882',
    name: 'Willow Run Airport, Ypsilanti, MI',
  },
  {
    code: '3901',
    name: 'Waukegan Harbor, IL',
  },
  {
    code: '3902',
    name: 'Peoria, IL',
  },
  {
    code: '3903',
    name: 'Omaha, NE',
  },
  {
    code: '3904',
    name: 'East Chicago, IN',
  },
  {
    code: '3905',
    name: 'Michigan City Harbor, IN',
  },
  {
    code: '3907',
    name: 'Des Moines, IA',
  },
  {
    code: '3908',
    name: 'Rock Island, IL',
  },
  {
    code: '3981',
    name: 'Waukegan Airport, Chicago, IL',
  },
  {
    code: '3982',
    name: 'Greater Rockford Airport, IL',
  },
  {
    code: '3983',
    name: 'Pal-Waukee User Fee Airport, Wheeling, WV',
  },
  {
    code: '3991',
    name: 'Nippon Courier Hub, Chicago, IL',
  },
  {
    code: '4101',
    name: 'Cleveland, OH',
  },
  {
    code: '4102',
    name: 'Lawrenceburg, IN',
  },
  {
    code: '4103',
    name: 'Columbus, OH',
  },
  {
    code: '4104',
    name: 'Dayton, OH',
  },
  {
    code: '4105',
    name: 'Toledo, OH',
  },
  {
    code: '4106',
    name: 'Erie, PA',
  },
  {
    code: '4108',
    name: 'Ashtabula, OH',
  },
  {
    code: '4109',
    name: 'Conneaut, OH',
  },
  {
    code: '4110',
    name: 'Indianapolis, IN',
  },
  {
    code: '4111',
    name: 'Fairport, OH',
  },
  {
    code: '4112',
    name: 'Akron, OH',
  },
  {
    code: '4115',
    name: 'Louisville, KY',
  },
  {
    code: '4116',
    name: 'Owensboro, KY',
  },
  {
    code: '4117',
    name: 'Huron,OH',
  },
  {
    code: '4121',
    name: 'Lorain, OH',
  },
  {
    code: '4181',
    name: 'Airborne Air Park, Wilmington, OH',
  },
  {
    code: '4182',
    name: 'Rickenbacker Airport, Columbus, OH',
  },
  {
    code: '4183',
    name: 'Fort Wayne Airport, IN',
  },
  {
    code: '4184',
    name: 'Bluegrass Airport, Lexington, KY',
  },
  {
    code: '4195',
    name: 'Emery World-Wide, Dayton, OH',
  },
  {
    code: '4196',
    name: 'UPS, Louisville, KY',
  },
  {
    code: '4197',
    name: 'DHL, Cincinnati, OH',
  },
  {
    code: '4501',
    name: 'Kansas City, MO',
  },
  {
    code: '4502',
    name: 'St. Joseph, MO',
  },
  {
    code: '4503',
    name: 'St. Louis, MO',
  },
  {
    code: '4504',
    name: 'Wichita, KS',
  },
  {
    code: '4505',
    name: 'Springfield, MO',
  },
  {
    code: '4601',
    name: 'Newark, NJ',
  },
  {
    code: '4602',
    name: 'Perth Amboy, NJ',
  },
  {
    code: '4670',
    name: 'UPS, Newark, NJ',
  },
  {
    code: '4681',
    name: 'Morristown Airport, Newark, NJ',
  },
  {
    code: '4701',
    name: 'JFK',
  },
  {
    code: '4770',
    name: 'Federal Express, Jamaica, NY',
  },
  {
    code: '4771',
    name: 'NYACC, Jamaica, NY',
  },
  {
    code: '4772',
    name: 'DHL, Jamaica, NY',
  },
  {
    code: '4773',
    name: 'Emery Worldwide',
  },
  {
    code: '4774',
    name: 'Air France (Mach Plus)',
  },
  {
    code: '4775',
    name: 'Dworkin/Cosell Courier',
  },
  {
    code: '4776',
    name: 'Swiss Air (Skyracer)',
  },
  {
    code: '4777',
    name: 'Alitalia (Aliexpress)',
  },
  {
    code: '4778',
    name: 'TNT Skypak',
  },
  {
    code: '4901',
    name: 'Aguadilla, PR',
  },
  {
    code: '4904',
    name: 'Fajardo, PR',
  },
  {
    code: '4905',
    name: 'Guanica, PR',
  },
  {
    code: '4906',
    name: 'Humacao, PR',
  },
  {
    code: '4907',
    name: 'Mayaguez, PR',
  },
  {
    code: '4908',
    name: 'Ponce, PR',
  },
  {
    code: '4909',
    name: 'San Juan, PR',
  },
  {
    code: '4911',
    name: 'Jobos, PR',
  },
  {
    code: '4912',
    name: 'Guayanilla, PR',
  },
  {
    code: '4913',
    name: 'San Juan International Airport, PR',
  },
  {
    code: '5101',
    name: 'Charlotte Amalie, VI',
  },
  {
    code: '5102',
    name: 'Cruz Bay, VI',
  },
  {
    code: '5103',
    name: 'Coral Bay, VI',
  },
  {
    code: '5104',
    name: 'Christiansted, VI',
  },
  {
    code: '5105',
    name: 'Frederiksted, VI',
  },
  {
    code: '5201',
    name: 'Miami, FL',
  },
  {
    code: '5202',
    name: 'Key West, FL',
  },
  {
    code: '5203',
    name: 'Port Everglades, FL',
  },
  {
    code: '5204',
    name: 'West Palm Beach, FL',
  },
  {
    code: '5205',
    name: 'Fort Pierce, FL',
  },
  {
    code: '5206',
    name: 'Miami International Airport, FL',
  },
  {
    code: '5270',
    name: 'International Courier Association',
  },
  {
    code: '5271',
    name: 'DHL, Miami, FL',
  },
  {
    code: '5273',
    name: 'UPS Miami International Airport, FL',
  },
  {
    code: '5301',
    name: 'Houston, TX',
  },
  {
    code: '5306',
    name: 'Texas City, TX',
  },
  {
    code: '5309',
    name: 'Houston Intercontinental Airport, TX',
  },
  {
    code: '5310',
    name: 'Galveston, TX',
  },
  {
    code: '5311',
    name: 'Freeport, TX',
  },
  {
    code: '5312',
    name: 'Port Aransas, TX',
  },
  {
    code: '5313',
    name: 'Port Lavaca, TX',
  },
  {
    code: '5401',
    name: 'Washington, DC',
  },
  {
    code: '5402',
    name: 'Alexandria, VA',
  },
  {
    code: '5501',
    name: 'Fort Worth, TX',
  },
  {
    code: '5502',
    name: 'Amarillo, TX',
  },
  {
    code: '5503',
    name: 'Lubbock, TX',
  },
  {
    code: '5504',
    name: 'Oklahoma City, OK',
  },
  {
    code: '5505',
    name: 'Tulsa, OK',
  },
  {
    code: '5506',
    name: 'Austin, TX',
  },
  {
    code: '5507',
    name: 'San Antonio, TX',
  },
  {
    code: '5582',
    name: 'Midland International Airport, TX',
  },
  {
    code: '5583',
    name: 'Fort Worth Alliance Airport, TX',
  },
  {
    code: '5584',
    name: 'Addison User Fee Airport, Dallas, TX',
  },
  {
    code: '6000',
    name: 'Vessels Under Their Own Power',
  },
  {
    code: '8000',
    name: 'Mail Shipments',
  },
  {
    code: '8888',
    name: 'Test District Port',
  },
  {
    code: '9900',
    name: 'National Permit Holder',
  },
];
export default PortCodes;