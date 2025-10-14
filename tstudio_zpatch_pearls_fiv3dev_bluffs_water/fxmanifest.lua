fx_version 'cerulean'
lua54 'yes'
game "gta5"

author 'tstudio - compatible patches'
description 'Pearls Resort by TStudio'
version '1.0.0'

data_file 'WATER_FILE' 'water.xml'


files {
    'water.xml'
}

client_scripts {
  'client/*.lua',
}

escrow_ignore {
  'water.xml'
}