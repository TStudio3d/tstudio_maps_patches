# TStudio Maps Patches

A collection of map patches specifically designed for **TStudio Maps**, providing various location fixes and enhancements for FiveM servers using TStudio's mapping system.

## Overview

This repository contains **41+ map patches** that work exclusively with **TStudio Maps** and require the `tstudio_zmapdata` resource. Each patch is designed to fix collision issues, improve gameplay areas, and enhance the overall server experience. These patches are automatically managed by the TStudio system and should not be manually started.

### 📊 **Patch Categories**
- **🏛️ MRPD Patches**: 12 police department variations
- **🍕 Kebab+MRPD Combos**: 8 food service + police combinations
- **🏠 MrPark Area**: 10 location-specific patches  
- **🏥 Medical/Hospital**: 4 Pillbox Hospital variants
- **🏭 General Locations**: 4 miscellaneous area fixes
- **🏁 Opium Area**: 3 racing and investigation patches

## 📋 Requirements

- **TStudio Maps** system installed
- **tstudio_zmapdata** resource (mandatory dependency)
- **tstudio_audioocclusion** resource (recommended)

## 📁 Installation Steps

### Prepare Resource Folders
Create the following folder structure in your resources directory:
```
resources/
├── [tstudio_maps]/
└── [tstudio_maps_patches]/
```

### Install Resources
1. Drag and drop all `tstudio_*` resources into `[tstudio_maps]/`
2. Drag and drop all `tstudio_zpatch_*` resources into `[tstudio_maps_patches]/`

### Configure server.cfg
Add the following line to your `server.cfg`:
```cfg
ensure [tstudio_maps]
```

### Finalize Installation
1. Clear your server cache after installation
2. Restart your server

⚠️ **Important**: Do not manually start the `[tstudio_maps_patches]` folder – our system handles this automatically.

## Available Patches

### General Location Patches

| Patch Name | Description | Area |
|------------|-------------|------|
| `tstudio_zpatch_aldentes_vhotel` | Aldente's V Hotel area fixes | Vinewood |
| `tstudio_zpatch_bw_cardealer_taxi` | Car dealer and taxi area | Business District |
| `tstudio_zpatch_garage_kebab` | Garage and kebab shop area | Downtown |
| `tstudio_zpatch_impound_carrent` | Impound and car rental fixes | Industrial |

### MrPark Area Patches

| Patch Name | Description | Features |
|------------|-------------|----------|
| `tstudio_zpatch_mrpark_impound` | MrPark impound area | Collision fixes |
| `tstudio_zpatch_mrpark_jj` | MrPark JJ area | Enhanced geometry |
| `tstudio_zpatch_mrpark_kebab` | MrPark kebab area | Food service location |
| `tstudio_zpatch_mrpark_kebab_ls` | MrPark kebab (LS variant) | Los Santos specific |
| `tstudio_zpatch_mrpark_kebab_th` | MrPark kebab (TH variant) | Enhanced lighting |
| `tstudio_zpatch_mrpark_kebab_th_ls` | MrPark kebab (TH LS variant) | Combined features |
| `tstudio_zpatch_mrpark_ls` | MrPark Los Santos area | General fixes |
| `tstudio_zpatch_mrpark_reds` | MrPark reds area | Battle IPL integration |
| `tstudio_zpatch_mrpark_th` | MrPark TH area | Enhanced features |
| `tstudio_zpatch_mrpark_th_ls` | MrPark TH LS area | Combined variant |

### MRPD (Mission Row Police Department) Patches

| Patch Name | Description | Features |
|------------|-------------|----------|
| `tstudio_zpatch_ls_fm_mrpd` | Los Santos FM MRPD | LS FM police station |
| `tstudio_zpatch_ls_kiiya_mrpd` | Los Santos Kiiya MRPD | Enhanced police station |
| `tstudio_zpatch_ls_th_kiiya_mrpd` | Los Santos TH Kiiya MRPD | TH enhanced LS police |
| `tstudio_zpatch_mrpark_fm_mrpd` | MrPark FM MRPD | Police department integration |
| `tstudio_zpatch_mrpark_kiiya_mrpd` | MrPark Kiiya MRPD | Combined police features |
| `tstudio_zpatch_mrpark_ls_fm_mrpd` | MrPark LS FM MRPD | Los Santos police integration |
| `tstudio_zpatch_mrpark_ls_kiiya_mrpd` | MrPark LS Kiiya MRPD | Advanced police features |
| `tstudio_zpatch_mrpark_ls_th_fm_mrpd` | MrPark LS TH FM MRPD | Multi-variant police patch |
| `tstudio_zpatch_mrpark_ls_th_kiiya_mrpd` | MrPark LS TH Kiiya MRPD | Ultimate police combination |
| `tstudio_zpatch_mrpark_th_fm_mrpd` | MrPark TH FM MRPD | TH police department |
| `tstudio_zpatch_mrpark_th_kiiya_mrpd` | MrPark TH Kiiya MRPD | TH enhanced police |
| `tstudio_zpatch_th_kiiya_mrpd` | TH Kiiya MRPD | Basic TH police variant |

### 🍕 Kebab + MRPD Combination Patches

| Patch Name | Description | Features |
|------------|-------------|----------|
| `tstudio_zpatch_kebab_kiiya_mrpd` | Kebab + Kiiya MRPD | Food service with police |
| `tstudio_zpatch_kebab_th_kiiya_mrpd` | Kebab + TH Kiiya MRPD | Enhanced food + police combo |
| `tstudio_zpatch_ls_kebab_kiiya_mrpd` | LS Kebab + Kiiya MRPD | Los Santos food + police |
| `tstudio_zpatch_ls_th_kebab_kiiya_mrpd` | LS TH Kebab + Kiiya MRPD | Ultimate LS food + police |
| `tstudio_zpatch_mrpark_kebab_kiiya_mrpd` | MrPark Kebab + Kiiya MRPD | MrPark food + police combo |
| `tstudio_zpatch_mrpark_kebab_th_kiiya_mrpd` | MrPark Kebab + TH Kiiya MRPD | Enhanced MrPark combo |
| `tstudio_zpatch_mrpark_ls_kebab_kiiya_mrpd` | MrPark LS Kebab + Kiiya MRPD | Full feature combination |
| `tstudio_zpatch_mrpark_ls_kebab_th_kiiya_mrpd` | MrPark LS Kebab + TH Kiiya MRPD | Ultimate feature combo |

### Medical & Hospital Patches

| Patch Name | Description | Features |
|------------|-------------|----------|
| `tstudio_zpatch_pillbox_garage` | Pillbox Hospital garage area | Medical District |
| `tstudio_zpatch_pillbox_garage_kebab` | Pillbox garage with kebab | Combined facilities |
| `tstudio_zpatch_pillbox_kebab` | Pillbox kebab shop area | Medical District food |
| `tstudio_zpatch_mrpark_ls_fiv3dev_pillbox` | MrPark LS Fiv3Dev Pillbox | Advanced medical facility |

### Opium Area Patches

| Patch Name | Description | Features |
|------------|-------------|----------|
| `tstudio_zpatch_opium_lsis` | Opium LSIS area | Investigation support |
| `tstudio_zpatch_opium_racetrack` | Opium racetrack | Racing venue |
| `tstudio_zpatch_opium_racetrack_lsis` | Opium racetrack (LSIS) | Combined features |

## File Types

- **`.ymap`** - Map data files containing object placements and world geometry
- **`.ybn`** - Collision mesh files for physics interactions
- **`.ydr`** - 3D model drawable files
- **`.ydd`** - Dictionary files containing model definitions
- **`fxmanifest.lua`** - FiveM resource manifest files

## 🔄 Update Process

Follow these steps to update your resources:

1. Delete old `tstudio_*` resources
2. Replace them with the new versions
3. Clear your server cache
4. Restart your server

## 🔧 Server Requirements

Before installation, ensure your server meets these requirements:

- FiveM server with latest artifacts
- TStudio Maps system compatibility
- Sufficient streaming budget for map assets

## 🚀 Performance Tips

### Load Order Priority
- Load `tstudio_zmapdata` and `tstudio_audioocclusion` first
- Maintain the original file structure
- Run tests on a development server before deploying live

### Best Practices
✅ Keep original filenames and folder structure  
✅ Clear cache after each update  
✅ Use txAdmin for easier management  
❌ Do not rename resources or files  
❌ Do not modify folder structure  
❌ Do not manually start patch resources  

## Usage Notes

1. **Automatic Management**: Patches are automatically loaded by the TStudio system - no manual configuration needed
2. **Performance**: Each patch adds to the streaming budget, so monitor server performance
3. **Compatibility**: These patches work exclusively with TStudio Maps and require tstudio_zmapdata
4. **Updates**: Check the repository regularly for updates and new patches

## Contributing

If you find issues or have improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For support or questions about these map patches:

- Create an issue in this repository
- Join our Discord: https://discord.gg/tstudio

## 🆘 Support & Community

Need help or want to connect with other users?  
Join our Discord: https://discord.gg/tstudio

## License

These map patches are provided as-is for TStudio Maps system use. Please respect the original game assets and follow Rockstar Games' terms of service.

## Credits

Created by **TStudio3d**

---

*Last updated: July 2025*
