local resourceName = GetCurrentResourceName()

CreateThread(function()
    -- Set the global water type first (0 = default/Los Santos)
    LoadGlobalWaterType(0)

    -- Wait a frame to let the type change apply
    Wait(0)

    -- Load the custom water XML
    local success = LoadWaterFromPath(resourceName, 'water.xml')

    if success then
        print(('Water patch applied: %s'):format(resourceName))
    else
        print(('Water patch failed: %s - water.xml not found'):format(resourceName))
    end
end)