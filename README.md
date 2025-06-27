# TStudio Maps Patches

A collection of map patches specifically designed for **TStudio Maps**, providing various location fixes and enhancements for FiveM servers using TStudio's mapping system.

## Overview

This repository contains multiple map patches that work exclusively with **TStudio Maps** and require the `tstudio_zmapdata` resource. Each patch is designed to fix collision issues, improve gameplay areas, and enhance the overall server experience. These patches are automatically managed by the TStudio system and should not be manually started.

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

### Location Patches

| Patch Name | Description | Area |
|------------|-------------|------|
| `tstudio_zpatch_aldentes_vhotel` | Aldente's V Hotel area fixes | Vinewood |
| `tstudio_zpatch_bw_cardealer_taxi` | Car dealer and taxi area | Business District |
| `tstudio_zpatch_garage_kebab` | Garage and kebab shop area | Downtown |
| `tstudio_zpatch_impound_carrent` | Impound and car rental fixes | Industrial |
| `tstudio_zpatch_pillbox_garage` | Pillbox Hospital garage area | Medical District |
| `tstudio_zpatch_pillbox_kebab` | Pillbox kebab shop area | Medical District |

### MrPark Area Patches

| Patch Name | Description | Features |
|------------|-------------|----------|
| `tstudio_zpatch_mrpark_impound` | MrPark impound area | Collision fixes |
| `tstudio_zpatch_mrpark_jj` | MrPark JJ area | Enhanced geometry |
| `tstudio_zpatch_mrpark_kebab` | MrPark kebab area | Food service location |
| `tstudio_zpatch_mrpark_kebab_ls` | MrPark kebab (LS variant) | Los Santos specific |
| `tstudio_zpatch_mrpark_kebab_th` | MrPark kebab (TH variant) | Enhanced lighting |
| `tstudio_zpatch_mrpark_ls` | MrPark Los Santos area | General fixes |
| `tstudio_zpatch_mrpark_reds` | MrPark reds area | Battle IPL integration |
| `tstudio_zpatch_mrpark_th` | MrPark TH area | Enhanced features |

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

*Last updated: June 2025*
