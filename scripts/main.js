Events.on(ClientLoadEvent, e => {
    const hooligan = Vars.content.getByName(ContentType.planet, "ochpoch-mob-hooligan");
    const norys = Vars.content.getByName(ContentType.planet, "ochpoch-mob-norys");

    if(hooligan != null && norys != null){
        norys.techTree = hooligan.techTree;
        norys.context = hooligan.context;
        
        Vars.content.blocks().each(b => {
            if(b.name.startsWith("ochpoch-mob-")){
                b.buildVisibility = BuildVisibility.shown;
            }
        });
    }
});
