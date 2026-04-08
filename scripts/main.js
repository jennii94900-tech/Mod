Events.on(UnitDestroyEvent, event => {
    let x = event.unit.x;
    let y = event.unit.y;
    let amount = Math.max(1, Math.floor(event.unit.maxHealth / 60)); 
    
    for(let i = 0; i < amount; i++){
        let offX = Mathf.range(12);
        let offY = Mathf.range(12);
        
        let item = Packages.mindustry.gen.ItemEntity.create();
        item.set(x + offX, y + offY);
        item.item(Items.ore);
        item.add();
        
        Fx.dropItem.at(x + offX, y + offY, 0, Items.ore);
    }
});
