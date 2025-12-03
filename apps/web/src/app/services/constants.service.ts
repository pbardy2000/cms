import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  readonly yesNoOptions: Option<boolean>[] = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  readonly yesNoNAOptions: Option<boolean | null>[] = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
    { label: 'N/A', value: null },
  ];

  readonly yesNoMaybeOptions: Option<boolean | null>[] = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
    { label: 'I do not know', value: null },
  ];

  readonly exemptNotExemptOptions: Option<boolean | null>[] = [
    { label: 'Exempt', value: true },
    { label: 'Not exempt', value: false },
  ];

  readonly vehicleTypeOptions: Option<VehicleType>[] = [
    { label: 'Heavy Goods Vehicle (HGV)', value: 'hgv' },
    { label: 'Trailer (TRL)', value: 'trl' },
    { label: 'Public Service Vehicle (PSV)', value: 'psv' },
    { label: 'Light Goods Vehicle (LGV)', value: 'lgv' },
    { label: 'Car', value: 'car' },
    { label: 'Motorcycle', value: 'motorcycle' },
  ];

  readonly vehicleStatusOptions: Option<VehicleStatus>[] = [
    { label: 'Current', value: 'CURRENT' },
    { label: 'Provisional', value: 'PROVISIONAL' },
  ];

  readonly recordStatusOptions: Option<RecordStatus>[] = [
    { label: 'Provisional', value: 'PROVISIONAL' },
    { label: 'Current', value: 'CURRENT' },
    { label: 'Archived', value: 'ARCHIVED' },
  ];

  readonly vehicleSubclassOptions: Option<string>[] = [
    { label: 'Standard', value: 'STANDARD' },
    { label: 'Extended', value: 'EXTENDED' },
    { label: 'High', value: 'HIGH' },
    { label: 'Low', value: 'LOW' },
    { label: 'Special', value: 'SPECIAL' },
  ];

  readonly vehicleConfigurationOptions: Record<VehicleType, Option<string>[]> = {
    car: [
      { label: 'Standard', value: 'STANDARD' },
      { label: 'Extended', value: 'EXTENDED' },
      { label: 'High', value: 'HIGH' },
      { label: 'Low', value: 'LOW' },
      { label: 'Special', value: 'SPECIAL' },
    ],
    motorcycle: [
      { label: 'Standard', value: 'STANDARD' },
      { label: 'Extended', value: 'EXTENDED' },
      { label: 'High', value: 'HIGH' },
      { label: 'Low', value: 'LOW' },
      { label: 'Special', value: 'SPECIAL' },
    ],
    hgv: [
      { label: 'Standard', value: 'STANDARD' },
      { label: 'Extended', value: 'EXTENDED' },
      { label: 'High', value: 'HIGH' },
      { label: 'Low', value: 'LOW' },
      { label: 'Special', value: 'SPECIAL' },
    ],
    psv: [
      { label: 'Standard', value: 'STANDARD' },
      { label: 'Extended', value: 'EXTENDED' },
      { label: 'High', value: 'HIGH' },
      { label: 'Low', value: 'LOW' },
      { label: 'Special', value: 'SPECIAL' },
    ],
    trl: [
      { label: 'Standard', value: 'STANDARD' },
      { label: 'Extended', value: 'EXTENDED' },
      { label: 'High', value: 'HIGH' },
      { label: 'Low', value: 'LOW' },
      { label: 'Special', value: 'SPECIAL' },
    ],
    lgv: [
      { label: 'Standard', value: 'STANDARD' },
      { label: 'Extended', value: 'EXTENDED' },
      { label: 'High', value: 'HIGH' },
      { label: 'Low', value: 'LOW' },
      { label: 'Special', value: 'SPECIAL' },
      { label: '2.5 tonnes', value: '2.5 TONNES' },
      { label: '5 tonnes', value: '5 TONNES' },
      { label: '7.5 tonnes', value: '7.5 TONNES' },
      { label: '10 tonnes', value: '10 TONNES' },
      { label: '12.5 tonnes', value: '12.5 TONNES' },
      { label: '15 tonnes', value: '15 TONNES' },
      { label: '17.5 tonnes', value: '17.5 TONNES' },
      { label: '20 tonnes', value: '20 TONNES' },
    ],
  };

  readonly euVehicleCategoryOptions: Record<VehicleType, Option<EUVehicleCategory>[]> = {
    hgv: [
      { label: 'N1', value: 'N1' },
      { label: 'N2', value: 'N2' },
      { label: 'N3', value: 'N3' },
    ],
    psv: [
      { label: 'M1', value: 'M1' },
      { label: 'M2', value: 'M2' },
      { label: 'M3', value: 'M3' },
    ],
    lgv: [{ label: 'N1', value: 'N1' }],
    car: [{ label: 'M1', value: 'M1' }],
    trl: [
      { label: 'O1', value: 'O1' },
      { label: 'O2', value: 'O2' },
      { label: 'O3', value: 'O3' },
      { label: 'O4', value: 'O4' },
    ],
    motorcycle: [
      { label: 'L1', value: 'L1' },
      { label: 'L2', value: 'L2' },
      { label: 'L3', value: 'L3' },
      { label: 'L4', value: 'L4' },
      { label: 'L5', value: 'L5' },
      { label: 'L6', value: 'L6' },
      { label: 'L7', value: 'L7' },
    ],
  };

  readonly monthOptions: Option<string>[] = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];

  readonly frameDescriptionOptions: Option<string>[] = [
    { label: 'Standard', value: 'STANDARD' },
    { label: 'Extended', value: 'EXTENDED' },
    { label: 'High', value: 'HIGH' },
    { label: 'Low', value: 'LOW' },
    { label: 'Special', value: 'SPECIAL' },
  ];

  readonly fuelSystemOptions: Record<VehicleType, Option<string>[]> = {
    hgv: [
      { label: 'Diesel', value: 'DIESEL' },
      { label: 'Petrol', value: 'PETROL' },
      { label: 'Hybrid', value: 'HYBRID' },
      { label: 'Electric', value: 'ELECTRIC' },
      { label: 'CNG', value: 'CNG' },
      { label: 'Fuel cell', value: 'FUEL_CELL' },
      { label: 'LNG', value: 'LNG' },
      { label: 'Other', value: 'OTHER' },
    ],
    psv: [
      // TODO: correct values
      { label: 'Diesel', value: 'DIESEL' },
      { label: 'Petrol', value: 'PETROL' },
      { label: 'Hybrid', value: 'HYBRID' },
      { label: 'Electric', value: 'ELECTRIC' },
      { label: 'CNG', value: 'CNG' },
      { label: 'Fuel cell', value: 'FUEL_CELL' },
      { label: 'LNG', value: 'LNG' },
      { label: 'Other', value: 'OTHER' },
    ],
    lgv: [
      // TODO: correct values
      { label: 'Diesel', value: 'DIESEL' },
      { label: 'Petrol', value: 'PETROL' },
      { label: 'Hybrid', value: 'HYBRID' },
      { label: 'Electric', value: 'ELECTRIC' },
      { label: 'CNG', value: 'CNG' },
      { label: 'Fuel cell', value: 'FUEL_CELL' },
      { label: 'LNG', value: 'LNG' },
      { label: 'Other', value: 'OTHER' },
    ],
    car: [
      // TODO: correct values
      { label: 'Diesel', value: 'DIESEL' },
      { label: 'Petrol', value: 'PETROL' },
      { label: 'Hybrid', value: 'HYBRID' },
      { label: 'Electric', value: 'ELECTRIC' },
      { label: 'CNG', value: 'CNG' },
      { label: 'Fuel cell', value: 'FUEL_CELL' },
      { label: 'LNG', value: 'LNG' },
      { label: 'Other', value: 'OTHER' },
    ],
    trl: [
      // TODO: correct values
      { label: 'Diesel', value: 'DIESEL' },
      { label: 'Petrol', value: 'PETROL' },
      { label: 'Hybrid', value: 'HYBRID' },
      { label: 'Electric', value: 'ELECTRIC' },
      { label: 'CNG', value: 'CNG' },
      { label: 'Fuel cell', value: 'FUEL_CELL' },
      { label: 'LNG', value: 'LNG' },
      { label: 'Other', value: 'OTHER' },
    ],
    motorcycle: [
      // TODO: correct values
      { label: 'Diesel', value: 'DIESEL' },
      { label: 'Petrol', value: 'PETROL' },
      { label: 'Hybrid', value: 'HYBRID' },
      { label: 'Electric', value: 'ELECTRIC' },
      { label: 'CNG', value: 'CNG' },
      { label: 'Fuel cell', value: 'FUEL_CELL' },
      { label: 'LNG', value: 'LNG' },
      { label: 'Other', value: 'OTHER' },
    ],
  };

  readonly tyreUseCodeOptions: Record<VehicleType, Option<string>[]> = {
    hgv: [
      { label: '2R', value: '2R' },
      { label: '2B', value: '2B' },
      { label: '2J', value: '2J' },
      { label: '2M', value: '2M' },
    ],
    psv: [
      // TODO: correct values
      { label: '2R', value: '2R' },
      { label: '2B', value: '2B' },
      { label: '2J', value: '2J' },
      { label: '2M', value: '2M' },
    ],
    lgv: [
      // TODO: correct values
      { label: '2R', value: '2R' },
      { label: '2B', value: '2B' },
      { label: '2J', value: '2J' },
      { label: '2M', value: '2M' },
    ],
    car: [
      // TODO: correct values
      { label: '2R', value: '2R' },
      { label: '2B', value: '2B' },
      { label: '2J', value: '2J' },
      { label: '2M', value: '2M' },
    ],
    trl: [
      { label: '2R', value: '2R' },
      { label: '2B', value: '2B' },
      { label: '2J', value: '2J' },
      { label: '2M', value: '2M' },
    ],
    motorcycle: [
      // TODO: correct values
      { label: '2R', value: '2R' },
      { label: '2B', value: '2B' },
      { label: '2J', value: '2J' },
      { label: '2M', value: '2M' },
    ],
  };

  readonly fitmentCodeOptions: Option<string>[] = [
    { label: 'S', value: 'S' },
    { label: 'D', value: 'D' },
  ];

  readonly euroStandardOptions: Record<VehicleType, Option<string>[]> = {
    hgv: [
      { label: '0.10 g/kWh Euro III PM', value: 'EUROIII' },
      { label: '0.03 g/kWh Euro IV PM', value: 'EUROIV' },
      { label: 'Euro 3', value: 'EURO3' },
      { label: 'Euro 4', value: 'EURO4' },
      { label: 'Euro 5', value: 'EURO5' },
      { label: 'Euro 6', value: 'EURO6' },
      { label: 'Euro V', value: 'EUROV' },
      { label: 'Euro VI', value: 'EUROVI' },
      { label: 'Full electric', value: 'FULL_ELECTRIC' },
    ],
    psv: [
      // TODO: correct values
      { label: '0.10 g/kWh Euro III PM', value: 'EUROIII' },
      { label: '0.03 g/kWh Euro IV PM', value: 'EUROIV' },
      { label: 'Euro 3', value: 'EURO3' },
      { label: 'Euro 4', value: 'EURO4' },
      { label: 'Euro 5', value: 'EURO5' },
      { label: 'Euro 6', value: 'EURO6' },
      { label: 'Euro V', value: 'EUROV' },
      { label: 'Euro VI', value: 'EUROVI' },
      { label: 'Full electric', value: 'FULL_ELECTRIC' },
    ],
    lgv: [],
    car: [],
    trl: [],
    motorcycle: [
      // TODO: correct values
      { label: '0.10 g/kWh Euro III PM', value: 'EUROIII' },
      { label: '0.03 g/kWh Euro IV PM', value: 'EUROIV' },
      { label: 'Euro 3', value: 'EURO3' },
      { label: 'Euro 4', value: 'EURO4' },
      { label: 'Euro 5', value: 'EURO5' },
      { label: 'Euro 6', value: 'EURO6' },
      { label: 'Euro V', value: 'EUROV' },
      { label: 'Euro VI', value: 'EUROVI' },
    ],
  };

  readonly speedLimiterExemptOptions: Option<boolean>[] = [
    { label: 'Exempt', value: true },
    { label: 'Not exempt', value: false },
  ];

  readonly tachExemptOptions: Option<boolean>[] = [
    { label: 'Exempt', value: true },
    { label: 'Not exempt', value: false },
  ];

  readonly vehicleClassOptions: Option<string>[] = [
    {
      label: 'Small psv',
      value: 'SMALL_psv',
      hint: 'Less than or equal to 22 passengers',
    },
    {
      label: 'Large psv',
      value: 'LARGE_psv',
      hint: 'Greater than or equal to 23 passengers',
    },
  ];

  readonly vehicleSizeOptions: Option<string>[] = [
    { label: 'Small', value: 'SMALL' },
    { label: 'Large', value: 'LARGE' },
  ];

  readonly retarderOptions: Option<string>[] = [
    { label: 'Electric', value: 'ELECTRIC' },
    { label: 'Exhaust', value: 'EXHAUST' },
    { label: 'Friction', value: 'FRICTION' },
    { label: 'Hydraulic', value: 'HYDRAULIC' },
    { label: 'Other', value: 'OTHER' },
    { label: 'None', value: 'NONE' },
  ];

  readonly brakeCodeOptions: Option<string | null>[] = [{ label: 'Enter brake code', value: null }];

  readonly adrBodyTypeOptions: Option<string>[] = [
    { label: 'Artic tractor', value: 'ARTIC_TRACTOR' },
    { label: 'Rigid box body', value: 'RIGID_BOX_BODY' },
    { label: 'Rigid sheeted load', value: 'RIGID_SHEETED_LOAD' },
    { label: 'Rigid tank', value: 'RIGID_TANK' },
    { label: 'Rigid skeletal', value: 'RIGID_SKELETAL' },
    { label: 'Rigid battery', value: 'RIGID_BATTERY' },
    { label: 'Full drawbar box body', value: 'FULL_DRAWBAR_BOX_BODY' },
    { label: 'Full drawbar sheeted load', value: 'FULL_DRAWBAR_SHEETED_LOAD' },
    { label: 'Full drawbar tank', value: 'FULL_DRAWBAR_TANK' },
    { label: 'Full drawbar skeletal', value: 'FULL_DRAWBAR_SKELETAL' },
    { label: 'Full drawbar battery', value: 'FULL_DRAWBAR_BATTERY' },
    { label: 'Centre axle box body', value: 'CENTRE_AXLE_BOX_BODY' },
    { label: 'Centre axle sheeted load', value: 'CENTRE_AXLE_SHEETED_LOAD' },
    { label: 'Centre axle tank', value: 'CENTRE_AXLE_TANK' },
    { label: 'Centre axle skeletal', value: 'CENTRE_AXLE_SKELETAL' },
    { label: 'Centre axle battery', value: 'CENTRE_AXLE_BATTERY' },
    { label: 'Semi trl box body', value: 'SEMI_trl_BOX_BODY' },
    { label: 'Semi trl sheeted load', value: 'SEMI_trl_SHEETED_LOAD' },
    { label: 'Semi trl tank', value: 'SEMI_trl_TANK' },
    { label: 'Semi trl skeletal', value: 'SEMI_trl_SKELETAL' },
    { label: 'Semi trl battery', value: 'SEMI_trl_BATTERY' },
  ];

  readonly permittedDangerousGoodsOptions: Option<string>[] = [
    { label: 'FP <61 (FL)', value: 'FP <61 (FL)' },
    { label: 'AT', value: 'AT' },
    { label: 'MEMU', value: 'MEMU' },
    { label: 'carbon Disulphide', value: 'carbon Disulphide' },
    { label: 'Hydrogen', value: 'Hydrogen' },
    { label: 'Explosives (type 2)', value: 'Explosives (type 2)' },
    { label: 'Explosives (type 3)', value: 'Explosives (type 3)' },
  ];

  readonly guidanceNotesOptions: Option<string>[] = [
    { label: '1', value: '1' },
    { label: '1A', value: '1A' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: 'V1B', value: 'V1B' },
    { label: 'T1B', value: 'T1B' },
  ];

  readonly tankStatementSelectOptions: Option<string>[] = [
    { label: 'Statement', value: 'Statement' },
    { label: 'Product list', value: 'Product list' },
  ];

  readonly tankStatementSubstancesPermittedOptions: Option<string>[] = [
    {
      label:
        'Substances permitted under the tank code and any special provisions specified in 9 may be carried',
      value:
        'Substances permitted under the tank code and any special provisions specified in 9 may be carried',
    },
    {
      label:
        'Substances (Class UN number and if necessary packing group and proper shipping name) may be carried',
      value:
        'Substances (Class UN number and if necessary packing group and proper shipping name) may be carried',
    },
  ];

  readonly approvalTypeOptions: Record<VehicleType, Option<string>[]> = {
    hgv: [
      { label: 'NTA', value: 'NTA' },
      { label: 'ECTA', value: 'ECTA' },
      { label: 'IVA', value: 'IVA' },
      { label: 'NSSTA', value: 'NSSTA' },
      { label: 'ECSSTA', value: 'ECSSTA' },
      { label: 'GB WVTA', value: 'GB_WVTA' },
      { label: 'UKNI WVTA', value: 'UKNI_WVTA' },
      { label: 'EU WVTA Pre 23', value: 'EU_WVTA_PRE_23' },
      { label: 'EU WVTA 23 on', value: 'EU_WVTA_23_ON' },
      { label: 'QNIG', value: 'QNIG' },
      { label: 'Prov.GB WVTA', value: 'PROV_GB_WVTA' },
      { label: 'Small series NKSXX', value: 'SMALL_SERIES_NKSXX' },
      { label: 'Small series NKS', value: 'SMALL_SERIES_NKS' },
      { label: 'IVA - VCA', value: 'IVA_VCA' },
      { label: 'IVA - DVSA/NI', value: 'IVA_DVSA_NI' },
    ],
    psv: [],
    lgv: [],
    car: [],
    trl: [],
    motorcycle: [],
  };

  readonly tags = {
    PLATES: { color: 'purple', label: 'Plates' } as Tag,
    REQUIRED: { color: 'red', label: 'Required' } as Tag,
  };

  readonly odometerReadingUnitsOptions = [
    { label: 'Kilometres', value: 'KM' },
    { label: 'Miles', value: 'MI' },
  ];

  readonly testResultOptions = [
    { label: 'Pass', value: 'PASS' },
    { label: 'Fail', value: 'FAIL' },
    { label: 'PRS', value: 'PRS' },
  ];

  readonly emissionsFuelTypeOptions = [
    { label: 'Diesel', value: 'DIESEL' },
    { label: 'Gas-CNG', value: 'GAS_CNG' },
    { label: 'Gas-LNG', value: 'GAS_LNG' },
    { label: 'Gas-LPG', value: 'GAS_LPG' },
    { label: 'Fuel cell', value: 'FUEL_CELL' },
    { label: 'Petrol', value: 'PETROL' },
    { label: 'Full electric', value: 'FULL_ELECTRIC' },
  ];

  readonly modificationCodeOptions = [
    { label: 'P', value: 'P' },
    { label: 'M', value: 'M' },
    { label: 'G', value: 'G' },
  ];

  readonly modificationDescriptionOptions = [
    { label: 'Particulate trap', value: 'Particulate trap' },
    {
      label: 'Modification or change of engine',
      value: 'Modification or change of engine',
    },
    { label: 'Gas engine', value: 'Gas engine' },
  ];

  readonly searchFilterOptions: Option<string>[] = [
    { label: 'Code', value: 'CODE' },
    { label: 'Size', value: 'SIZE' },
    { label: 'Ply', value: 'PLY' },
    { label: 'Load index', value: 'LOAD_INDEX' },
    { label: 'Fitment code', value: 'FITMENT_CODE' },
  ];

  readonly referenceDataGroups: Record<VehicleType, string[]> = {
    hgv: [
      'HGV_FUNCTION_CODE',
      'HGV_VEHICLE_CONFIGURATION',
      'HGV_MAKE',
      'MICROFILM_DOCUMENT_TYPE',
      'TYRES',
      'TYRE_LOAD_INDEX',
    ],
    psv: [
      'PSV_SUBCLASS',
      'DTP_NUMBER',
      'PSV_MAKE',
      'MICROFILM_DOCUMENT_TYPE',
      'BRAKES',
      'TYRES',
      'TYRE_LOAD_INDEX',
    ],
    lgv: ['LGV_SUBCLASS'],
    car: ['CAR_SUBCLASS'],
    trl: [
      'TRL_SUBCLASS',
      'TRL_FUNCTION_CODE',
      'TRL_VEHICLE_CONFIGURATION',
      'TRL_MAKE',
      'TYRES',
      'TYRE_LOAD_INDEX',
    ],
    motorcycle: ['MOTORCYCLE_SUBCLASS'],
  };

  readonly microfilmDocumentTypes: Option<string>[] = [
    {
      value: 'AAV - HGV Annual Test',
      label: 'AAV - HGV Annual Test',
    },
    {
      value: 'COIF Master',
      label: 'COIF Master',
    },
    {
      value: 'Tempo 100 Sp Ord',
      label: 'Tempo 100 Sp Ord',
    },
    {
      value: 'Deleted',
      label: 'Deleted',
    },
    {
      value: 'XPT - Tr Plating Cert paid',
      label: 'XPT - Tr Plating Cert paid',
    },

    {
      value: 'FFV - HGV First Test',
      label: 'FFV - HGV First Test',
    },
    {
      value: 'Repl Vitesse 100',
      label: 'Repl Vitesse 100',
    },
    {
      value: 'TCV - HGV Test Cert',
      label: 'TCV - HGV Test Cert',
    },
    {
      value: 'ZZZ - Miscellaneous',
      label: 'ZZZ - Miscellaneous',
    },
    {
      value: 'Test Certificate',
      label: 'Test Certificate',
    },
    {
      value: 'XCT - Trailer Test Cert free',
      label: 'XCT - Trailer Test Cert free',
    },
    {
      value: 'C52 - COC and VTG52A',
      label: 'C52 - COC and VTG52A',
    },
    {
      value: 'Tempo 100 Report',
      label: 'Tempo 100 Report',
    },
    {
      value: 'Main File Amendment',
      label: 'Main File Amendment',
    },
    {
      value: 'PSV Doc',
      label: 'PSV Doc',
    },
    {
      value: 'PSV Repl COC',
      label: 'PSV Repl COC',
    },
    {
      value: 'TAV - COC',
      label: 'TAV - COC',
    },
    {
      value: 'NPT - Trailer Alteration',
      label: 'NPT - Trailer Alteration',
    },
    {
      value: 'OMO Certificate',
      label: 'OMO Certificate',
    },
    {
      value: 'PSV Repl COIF',
      label: 'PSV Repl COIF',
    },
    {
      value: 'COIF Application',
      label: 'COIF Application',
    },
    {
      value: 'XPV - HGV Plating Cert Free',
      label: 'XPV - HGV Plating Cert Free',
    },
    {
      value: 'TCT - Trailer Test Cert',
      label: 'TCT - Trailer Test Cert',
    },
    {
      value: 'Tempo 100 App',
      label: 'Tempo 100 App',
    },
    {
      value: 'PSV Decision on N/ALT',
      label: 'PSV Decision on N/ALT',
    },
    {
      value: 'Special Order PSV',
      label: 'Special Order PSV',
    },
    {
      value: 'NPV - HGV Alteration',
      label: 'NPV - HGV Alteration',
    },
    {
      value: 'No Description Found',
      label: 'No Description Found',
    },
    {
      value: 'Vitesse 100 Sp Ord',
      label: 'Vitesse 100 Sp Ord',
    },
    {
      value: 'Brake Test Details',
      label: 'Brake Test Details',
    },
    {
      value: 'COIF Productional',
      label: 'COIF Productional',
    },
    {
      value: 'RDT - Test Disc Paid',
      label: 'RDT - Test Disc Paid',
    },
    {
      value: 'RCV - HGV Test Cert',
      label: 'RCV - HGV Test Cert',
    },
    {
      value: 'FFT - Trailer First Test',
      label: 'FFT - Trailer First Test',
    },
    {
      value: 'IPT - Trailer EEC Plate/Cert',
      label: 'IPT - Trailer EEC Plate/Cert',
    },
    {
      value: 'XDT - Test Disc Free',
      label: 'XDT - Test Disc Free',
    },
    {
      value: 'PRV - HGV Plating Cert paid',
      label: 'PRV - HGV Plating Cert paid',
    },
    {
      value: 'COF Cert',
      label: 'COF Cert',
    },
    {
      value: 'PRT - Tr Plating Cert paid',
      label: 'PRT - Tr Plating Cert paid',
    },
    {
      value: 'Tempo 100 Permit',
      label: 'Tempo 100 Permit',
    },
  ];
}

export type ErrorMessage = {
  href: string;
  label: string;
};

export type SearchTechRecords = {
  searchTerm: string;
  searchCriteria: string;
};

export type Option<T> = {
  value: T;
  label: string;
  hint?: string;
};

export type VehicleStatus = 'PROVISIONAL' | 'CURRENT';

export type RecordStatus = VehicleStatus | 'ARCHIVED';

export type VehicleType = 'car' | 'lgv' | 'hgv' | 'psv' | 'trl' | 'motorcycle';

export type EUVehicleCategory =
  | 'L1'
  | 'L2'
  | 'L3'
  | 'L4'
  | 'L5'
  | 'L6'
  | 'L7'
  | 'M1'
  | 'M2'
  | 'M3'
  | 'N1'
  | 'N2'
  | 'N3'
  | 'O1'
  | 'O2'
  | 'O3'
  | 'O4';

export type TechRecordCompleteness = 'SKELETON' | 'TESTABLE' | 'COMPLETE';

export type TechRecord = {
  id: number;
  createdAt: string;
  updatedAt: string;
  vin: string;
  vrm: string;
  trailerId: string;
  techRecord_statusCode: VehicleStatus;
  techRecord_vehicleType: VehicleType;
  techRecord_recordCompleteness: TechRecordCompleteness;

  // Identifiers
  systemNumber: string;
  partialVin: string | null;
  primaryVrm: string | null;
  secondaryVrms: string[] | null;
  techRecord_hiddenInVta: boolean | null;
  techRecord_updateType: string | null;

  // Approval type
  techRecord_approvalType: string | null;
  techRecord_approvalTypeNumber: string | null;
  techRecord_ntaNumber: string | null;
  techRecord_variantNumber: string | null;
  techRecord_variantVersionNumber: string | null;

  // Configuration
  techRecord_offRoad: boolean | null;
  techRecord_departmentalVehicleMarker: boolean | null;
  techRecord_alterationMarker: boolean | null;
  techRecord_fuelPropulsionSystem: string;
  techRecord_roadFriendly: boolean | null;

  // Dimensions
  techRecord_dimensions_axleSpacing?: AxleSpacing[];
  techRecord_frontAxleToRearAxle?: string | null;
  techRecord_dimensions_length?: string | null;
  techRecord_dimensions_width?: string | null;
  techRecord_dimensions_height?: string | null;
  techRecord_frontVehicleTo5thWheelCouplingMin?: string | null;
  techRecord_frontVehicleTo5thWheelCouplingMax?: string | null;
  techRecord_frontAxleTo5thWheelMin?: string | null;
  techRecord_frontAxleTo5thWheelMax?: string | null;
  techRecord_centreOfRearmostAxleToRearOfTrl?: string | null;
  techRecord_couplingCenterToRearAxleMax?: string | null;
  techRecord_couplingCenterToRearAxleMin?: string | null;
  techRecord_couplingCenterToRearTrlMax?: string | null;
  techRecord_couplingCenterToRearTrlMin?: string | null;
  techRecord_couplingType?: string | null;
  techRecord_maxLoadOnCoupling?: string | null;
  techRecord_rearAxleToRearTrl?: string | null;

  // Axles
  techRecord_axles?: Axle[];
  techRecord_grossDesignWeight?: number | null;
  techRecord_grossEecWeight?: number | null;
  techRecord_grossGbWeight?: number | null;
  techRecord_trainDesignWeight?: number | null;
  techRecord_grossKerbWeight?: number | null;
  techRecord_grossLadenWeight?: number | null;
  techRecord_unladenWeight?: number | null;
  techRecord_maxTrainGbWeight?: number | null;

  // Letters
  techRecord_letterOfAuth_letterType?: string | null;
  techRecord_letterOfAuth_letterDateRequested?: string | null;
  techRecord_letterOfAuth_paragraphId?: string | null;
  techRecord_letterOfAuth_letterIssuer?: string | null;

  // Plates
  techRecord_plates?: any[];

  // Documents
  techRecord_microfilm?: string | null;
  techRecord_microfilm_microfilmDocumentType?: string;
  techRecord_microfilm_microfilmRollNumber?: string;
  techRecord_microfilm_microfilmSerialNumber?: string;

  // Emissions and exemptions
  techRecord_drawbarCouplingFitted?: boolean;
  techRecord_euroStandard?: boolean | null;
  techRecord_emissionsLimit?: number | null;
  techRecord_speedLimiterMrk?: boolean | null;
  techRecord_tachoExemptMrk?: boolean | null;

  // General vehicle details
  techRecord_regnDate?: string | null;
  techRecord_manufactureYear?: string | null;
  techRecord_brakes_dtpNumber?: string;
  techRecord_vehicleConfiguration?: string;
  techRecord_make?: string;
  techRecord_model?: string;
  techRecord_bodyType_code?: string | null;
  techRecord_bodyType_description?: string | null;
  techRecord_functionCode?: string | null;
  techRecord_conversionRefNo?: string | null;
  techRecord_euVehicleCategory?: string | null;
  techRecord_noOfAxles?: number;
  techRecord_firstUseDate?: string | null;
  techRecord_frameDescription?: string | null;
  techRecord_suspensionType?: string | null;
  techRecord_tyreUseCode?: string | null;

  // Last applicant
  techRecord_applicantDetails_name?: string | null;
  techRecord_applicantDetails_address1?: string | null;
  techRecord_applicantDetails_address2?: string | null;
  techRecord_applicantDetails_postTown?: string | null;
  techRecord_applicantDetails_address3?: string | null;
  techRecord_applicantDetails_postCode?: string | null;
  techRecord_applicantDetails_telephoneNumber?: string | null;
  techRecord_applicantDetails_emailAddress?: string | null;

  // ADR
  techRecord_adrDetails_documentId?: string;
  techRecord_adrDetails_dangerousGoods?: boolean | null;
  techRecord_adrDetails_vehicleDetails_type?: string | null;
  techRecord_adrDetails_bodyDeclaration_type?: null | string;
  techRecord_adrDetails_vehicleDetails_usedOnInternationalJourneys?: null | string;
  techRecord_adrDetails_vehicleDetails_approvalDate?: string | null;
  techRecord_adrDetails_permittedDangerousGoods?: string[] | null;
  techRecord_adrDetails_compatibilityGroupJ?: null | string;
  techRecord_adrDetails_additionalExaminerNotes?: string[] | null;
  techRecord_adrDetails_applicantDetails_name?: string | null;
  techRecord_adrDetails_applicantDetails_street?: string | null;
  techRecord_adrDetails_applicantDetails_town?: string | null;
  techRecord_adrDetails_applicantDetails_city?: string | null;
  techRecord_adrDetails_applicantDetails_postcode?: string | null;
  techRecord_adrDetails_memosApply?: string[] | null;
  techRecord_adrDetails_documents?: string[] | null;
  techRecord_adrDetails_listStatementApplicable?: boolean | null;
  techRecord_adrDetails_batteryListNumber?: string | null;
  techRecord_adrDetails_brakeDeclarationsSeen?: boolean | null;
  techRecord_adrDetails_brakeDeclarationIssuer?: string | null;
  techRecord_adrDetails_brakeEndurance?: boolean | null;
  techRecord_adrDetails_weight?: number | null;
  techRecord_adrDetails_declarationsSeen?: boolean | null;
  techRecord_adrDetails_m145Statement?: boolean | null;
  techRecord_adrDetails_newCertificateRequested?: boolean | null;
  techRecord_adrDetails_additionalNotes_number?: string[] | null;
  techRecord_adrDetails_adrTypeApprovalNo?: string | null;
  techRecord_adrDetails_adrCertificateNotes?: string | null;
  techRecord_adrDetails_tank_tankDetails_tankManufacturer?: string | null;
  techRecord_adrDetails_tank_tankDetails_yearOfManufacture?: number | null;
  techRecord_adrDetails_tank_tankDetails_tankManufacturerSerialNo?: string | null;
  techRecord_adrDetails_tank_tankDetails_tankTypeAppNo?: string | null;
  techRecord_adrDetails_tank_tankDetails_tankCode?: string | null;
  techRecord_adrDetails_tank_tankDetails_specialProvisions?: string | null;
  techRecord_adrDetails_tank_tankDetails_tc2Details_tc2Type?: null | string;
  techRecord_adrDetails_tank_tankDetails_tc2Details_tc2IntermediateApprovalNo?: string | null;
  techRecord_adrDetails_tank_tankDetails_tc2Details_tc2IntermediateExpiryDate?: string | null;
  techRecord_adrDetails_tank_tankDetails_tc3Details?: string[] | null;
  techRecord_adrDetails_tank_tankDetails_tankStatement_substancesPermitted?: string | null;
  techRecord_adrDetails_tank_tankDetails_tankStatement_select?: null | string;
  techRecord_adrDetails_tank_tankDetails_tankStatement_statement?: string | null;
  techRecord_adrDetails_tank_tankDetails_tankStatement_productListRefNo?: string | null;
  techRecord_adrDetails_tank_tankDetails_tankStatement_productListUnNo?: string[] | null;
  techRecord_adrDetails_tank_tankDetails_tankStatement_productList?: string | null;

  // Brakes
  techRecord_brakes_brakeCode?: string | null;
  techRecord_brakes_brakeCodeOriginal?: string | null;
  techRecord_brakes_dataTrBrakeOne?: string | null;
  techRecord_brakes_dataTrBrakeTwo?: string | null;
  techRecord_brakes_dataTrBrakeThree?: string | null;
  techRecord_brakes_retarderBrakeOne?: string | null;
  techRecord_brakes_retarderBrakeTwo?: string | null;
  techRecord_brakes_antilockBrakingSystem?: boolean | null;
  techRecord_brakes_loadSensingValve?: boolean | null;
  techRecord_brakes_brakeForceWheelsNotLocked_parkingBrakeForceA?: number | null;
  techRecord_brakes_brakeForceWheelsNotLocked_secondaryBrakeForceA?: number | null;
  techRecord_brakes_brakeForceWheelsNotLocked_serviceBrakeForceA?: number | null;
  techRecord_brakes_brakeForceWheelsUpToHalfLocked_parkingBrakeForceB?: number | null;
  techRecord_brakes_brakeForceWheelsUpToHalfLocked_secondaryBrakeForceB?: number | null;
  techRecord_brakes_brakeForceWheelsUpToHalfLocked_serviceBrakeForceB?: number | null;

  // DDA
  techRecord_dda_certificateIssued?: boolean | null;
  techRecord_dda_wheelchairCapacity?: number | null;
  techRecord_dda_wheelchairFittings?: string | null;
  techRecord_dda_wheelchairRampPresent?: boolean | null;
  techRecord_dda_wheelchairRampInformation?: boolean | null;
  techRecord_dda_minEmergencyExits?: boolean | null;
  techRecord_dda_outswing?: string | null;
  techRecord_dda_ddaSchedules?: string | null;
  techRecord_dda_seatbeltsFitted?: number | null;
  techRecord_dda_ddaNotes?: string | null;

  // Seats and vehicle size
  techRecord_seatsUpperDeck?: number | null;
  techRecord_seatsLowerDeck?: number | null;
  techRecord_standingCapacity?: number | null;
  techRecord_vehicleClass_description?: string | null;
  techRecord_vehicleSize?: string | null;
  techRecord_seatbeltInstallationApprovalDate?: string | null;
  techRecord_numberOfWheelsDriven?: number | null;
  techRecord_numberOfSeatbelts?: number | null;
  techRecord_coifSerialNumber?: string | null;
  techRecord_coifCertifierName?: string | null;
  techRecord_coifDate?: string | null;
  techRecord_speedRestriction?: number | null;

  // Purchaser
  techRecord_purchaserDetails_address1?: string | null;
  techRecord_purchaserDetails_address2?: string | null;
  techRecord_purchaserDetails_address3?: string | null;
  techRecord_purchaserDetails_emailAddress?: string | null;
  techRecord_purchaserDetails_faxNumber?: string | null;
  techRecord_purchaserDetails_name?: string | null;
  techRecord_purchaserDetails_postCode?: string | null;
  techRecord_purchaserDetails_postTown?: string | null;
  techRecord_purchaserDetails_purchaserNotes?: string | null;
  techRecord_purchaserDetails_telephoneNumber?: string | null;

  // Manufacturer details
  techRecord_manufacturerDetails_address1?: string | null;
  techRecord_manufacturerDetails_address2?: string | null;
  techRecord_manufacturerDetails_address3?: string | null;
  techRecord_manufacturerDetails_emailAddress?: string | null;
  techRecord_manufacturerDetails_faxNumber?: string | null;
  techRecord_manufacturerDetails_name?: string | null;
  techRecord_manufacturerDetails_postCode?: string | null;
  techRecord_manufacturerDetails_postTown?: string | null;
  techRecord_manufacturerDetails_manufacturerNotes?: string | null;
  techRecord_manufacturerDetails_telephoneNumber?: string | null;

  // Authorisation into service (TRL)
  techRecord_authIntoService_cocIssueDate?: string | null;
  techRecord_authIntoService_dateReceived?: string | null;
  techRecord_authIntoService_datePending?: string | null;
  techRecord_authIntoService_dateAuthorised?: string | null;
  techRecord_authIntoService_dateRejected?: string | null;

  // Application ID (for batch create)
  techRecord_applicationId?: string | null;

  // Notes
  techRecord_notes?: string | null;
  techRecord_remarks?: string | null;
  techRecord_dispensations?: string | null;

  // Reason for creation
  techRecord_reasonForCreation?: string | null;
};

export type TestRecord = {
  id: number;
};

export type TechRecordStub = {
  vin: string;
  vrm?: string | undefined;
  trailerId?: string | undefined;
  techRecord_statusCode: VehicleStatus;
  techRecord_vehicleType: VehicleType;
};

export type Axle = {
  axleNumber: number | null;
  weights_gbWeight?: number | null;
  weights_eecWeight?: number | null;
  weights_designWeight?: number | null;
  weights_ladenWeight?: number | null;
  weights_kerbWeight?: number | null;
  tyres_tyreCode?: number | null;
  tyres_tyreSize?: string | null;
  tyres_plyRating?: string | null;
  tyres_dataTrAxles?: string | null;
  tyres_fitmentCode?: string | null;
  parkingBrakeMrk?: boolean | null;
  tyres_speedCategorySymbol?: string | null;
  brakes_brakeActuator?: number | null;
  brakes_leverLength?: number | null;
  brakes_springBrakeParking?: boolean | null;
};

export type AxleSpacing = {
  axleNumber: number | null;
  fromAxle: number | null;
  toAxle: number | null;
  value: number | null;
};

export type ReferenceDataSchema = {
  name: string;
  type: string; // @TODO: restrict to enum
  uuid: string;
  fields: ReferenceDataSchema[];
};

export type ReferenceDataList = {
  id: number;
  name: string;
  fields: ReferenceDataSchema[];
  createdAt?: string;
  updatedAt?: string;
};

export type ReferenceDataItem = {
  id: number;
  type: string;
  data: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
};

export type ReferenceDataItemGroup = {
  type: string;
  items: ReferenceDataItem[];
};

export type TestCode = {
  forVehicleSize: string;
  forVehicleType: string;
  linkedTestCode: string | null;
  defaultTestCode: string;
  forVehicleAxles: string | null;
  forVehicleClass: string | null;
  forVehicleWheels: string | null;
  forVehicleSubclass: string | null;
  forEuVehicleCategory: string | null;
  forVehicleConfiguration: string[] | string | null;
};

export type TestType = {
  id: string;
  sortId: string;
  linkedIds: string[];
  name: string;
  forVehicleType: string[];
  forVehicleSize: string[];
  forVehicleConfiguration: string[];
  forVehicleAxles: string[] | null;
  forEuVehicleCategory: string[] | null;
  forVehicleClass: string[] | null;
  forVehicleSubclass: string[] | null;
  forVehicleWheels: string[] | null;
  nextTestTypesOrCategories: TestType[] | null;
  testCodes?: TestCode[];
};

export type TestResult = {
  result: 'PASS' | 'PRS' | 'FAIL' | 'ABANDONED';
  modeType?: {
    code?: 'p' | 'm' | 'g';
  };
  seatbeltInstallationCheckDate?: boolean | null;
  seatbeltsFitted?: number | null;
  lastSeatbeltInstallationCheckDate?: string | null;
};

export type Tag = {
  color: string;
  label: string;
};

export type Form<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? Form<T[K]>
    : T[K] extends Array<infer U>
      ? U extends Record<string, unknown>
        ? Array<Form<U>>
        : never
      : FormControl<T[K] | null>;
};

export type TestStation = {
  name: string;
};

export type User = {
  name: string;
};

export type Defect = {
  id: number;
  imNumber: number;
  imDescription: string;
  imDescriptionWelsh: string;
  forVehicleType: string[];
  additionalInfo: Record<string, DefectInfo>;
  items: DefectItem[];
};

export type DefectInfo = {
  location: {
    vertical: boolean | null;
    horizontal: boolean | null;
    lateral: boolean | null;
    longitudinal: string[];
    rowNumber: number | null;
    seatNumber: number | null;
    axleNumber: number | null;
  };
  notes: boolean;
};

export type DefectItem = {
  itemNumber: number;
  itemDescription: string;
  itemDescriptionWelsh: string;
  forVehicleType: string[];
  deficiencies: DefectDeficiency[];
};

export type DefectDeficiency = {
  ref: string;
  deficiencyId: string;
  deficiencySubId: string | null;
  deficiencyCategory: string | null;
  deficiencyText: string;
  deficiencyTextWelsh: string;
  stdForProhibition: boolean | null;
  forVehicleType: string;
};

export type DefectContext = {
  techRecord: TechRecord;
  testType: TestType;
  defect: Defect;
};

export type DefectItemContext = {
  techRecord: TechRecord;
  testType: TestType;
  defect: Defect;
  defectItem: DefectItem;
};

export type DefectDeficiencyContext = {
  techRecord: TechRecord;
  testType: TestType;
  defect: Defect;
  defectItem: DefectItem;
  deficiency: DefectDeficiency;
};

export type RequiredStandardSection = {
  sectionNumber: string;
  euVehicleCategory: string;
  sectionDescription: string;
  requiredStandards: RequiredStandard[];
};

export type RequiredStandard = {
  rsNumber: string;
  additionalInfo: boolean;
  refCalculation: string;
  basicInspection: boolean;
  normalInspection: boolean;
  requiredStandard: string;
};

export type ReasonForAbandonment = {
  label: string;
  value: string;
};
