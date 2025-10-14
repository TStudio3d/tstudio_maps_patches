AddEventHandler('onClientResourceStart', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then return end
    print('Loading custom water.xml')
    local success = LoadWaterFromPath(GetCurrentResourceName(), 'water.xml')
    if success ~= 1 then
        print(
            'Failed to load water.xml, does the file exist within the resource?')
    end
end)