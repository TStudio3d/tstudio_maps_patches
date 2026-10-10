-- Safety net: this LOD light set is for game builds below 3717. tstudio_zmapdata never starts it on a newer
-- build, but `ensure [tstudio_maps_patches]` in server.cfg would - and there its vw_* files load as EXTRA ymaps.
local NEWER = { mp2025_02 = 3751, mp2026_01 = 3889 }
local raw = GetConvar('sv_enforceGameBuild', '')
local build = tonumber(raw) or NEWER[raw:lower()] or 0
if build >= 3717 then
    print(('^3[%s] is for game builds below 3717, this server runs %s - stopping. Do not ensure LOD light sets in server.cfg, tstudio_zmapdata starts the right ones.^7'):format(GetCurrentResourceName(), raw))
    CreateThread(function()
        Wait(0)
        StopResource(GetCurrentResourceName())
    end)
end
