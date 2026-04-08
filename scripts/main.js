Events.on(UnitDestroyEvent, event => {
    let u = event.unit;
    let tile = Vars.world.tileWorld(u.x, u.y);
    
    if(tile != null){
        tile.setOverlayNet(Blocks.ore);
        Fx.pulverize.at(u.x, u.y);
    }
});
