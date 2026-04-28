Events.on(ClientLoadEvent, e => {
    const hooligan = Vars.content.getByName(ContentType.planet, "ochpoch-mob-hooligan");
    const norys = Vars.content.getByName(ContentType.planet, "ochpoch-mob-norys");
    const coreHope = Vars.content.getByName(ContentType.block, "ochpoch-mob-core");

    if(hooligan != null && norys != null && coreHope != null){
        norys.techTree = hooligan.techTree;
    }
});
