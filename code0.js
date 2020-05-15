gdjs.MenuCode = {};
gdjs.MenuCode.GDPlayerObjects1= [];
gdjs.MenuCode.GDPlayerObjects2= [];
gdjs.MenuCode.GDMagicGemObjects1= [];
gdjs.MenuCode.GDMagicGemObjects2= [];
gdjs.MenuCode.GDCheckpointObjects1= [];
gdjs.MenuCode.GDCheckpointObjects2= [];
gdjs.MenuCode.GDLeftObjects1= [];
gdjs.MenuCode.GDLeftObjects2= [];
gdjs.MenuCode.GDSlimeObjects1= [];
gdjs.MenuCode.GDSlimeObjects2= [];
gdjs.MenuCode.GDRightObjects1= [];
gdjs.MenuCode.GDRightObjects2= [];
gdjs.MenuCode.GDFPSCounterObjects1= [];
gdjs.MenuCode.GDFPSCounterObjects2= [];
gdjs.MenuCode.GDLivesCounterObjects1= [];
gdjs.MenuCode.GDLivesCounterObjects2= [];
gdjs.MenuCode.GDGameOverPopupObjects1= [];
gdjs.MenuCode.GDGameOverPopupObjects2= [];
gdjs.MenuCode.GDBoundaryObjects1= [];
gdjs.MenuCode.GDBoundaryObjects2= [];
gdjs.MenuCode.GDCheckpointFireObjects1= [];
gdjs.MenuCode.GDCheckpointFireObjects2= [];
gdjs.MenuCode.GDGameOverTipObjects1= [];
gdjs.MenuCode.GDGameOverTipObjects2= [];
gdjs.MenuCode.GDImpObjects1= [];
gdjs.MenuCode.GDImpObjects2= [];
gdjs.MenuCode.GDDoorObjects1= [];
gdjs.MenuCode.GDDoorObjects2= [];
gdjs.MenuCode.GDKeyObjects1= [];
gdjs.MenuCode.GDKeyObjects2= [];
gdjs.MenuCode.GDKeyUIObjects1= [];
gdjs.MenuCode.GDKeyUIObjects2= [];
gdjs.MenuCode.GDGameTimerObjects1= [];
gdjs.MenuCode.GDGameTimerObjects2= [];
gdjs.MenuCode.GDKeyParticlesObjects1= [];
gdjs.MenuCode.GDKeyParticlesObjects2= [];
gdjs.MenuCode.GDMagicParticlesObjects1= [];
gdjs.MenuCode.GDMagicParticlesObjects2= [];
gdjs.MenuCode.GDEnemyBoundaryObjects1= [];
gdjs.MenuCode.GDEnemyBoundaryObjects2= [];
gdjs.MenuCode.GDDemonObjects1= [];
gdjs.MenuCode.GDDemonObjects2= [];
gdjs.MenuCode.GDButtonsTrackerObjects1= [];
gdjs.MenuCode.GDButtonsTrackerObjects2= [];
gdjs.MenuCode.GDMenuTextObjects1= [];
gdjs.MenuCode.GDMenuTextObjects2= [];
gdjs.MenuCode.GDPlatformObjects1= [];
gdjs.MenuCode.GDPlatformObjects2= [];
gdjs.MenuCode.GDControlsTextObjects1= [];
gdjs.MenuCode.GDControlsTextObjects2= [];
gdjs.MenuCode.GDGameTitleObjects1= [];
gdjs.MenuCode.GDGameTitleObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDCheckpointFireObjects1.createFrom(runtimeScene.getObjects("CheckpointFire"));
gdjs.MenuCode.GDGameOverPopupObjects1.createFrom(runtimeScene.getObjects("GameOverPopup"));
gdjs.MenuCode.GDGameOverTipObjects1.createFrom(runtimeScene.getObjects("GameOverTip"));
gdjs.MenuCode.GDGameTimerObjects1.createFrom(runtimeScene.getObjects("GameTimer"));
gdjs.MenuCode.GDKeyUIObjects1.createFrom(runtimeScene.getObjects("KeyUI"));
gdjs.MenuCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayerObjects1[i].setScale(2);
}
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "menu-music.wav", 0, true, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDGameTimerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGameTimerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDGameOverTipObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGameOverTipObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDCheckpointFireObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckpointFireObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDKeyUIObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDKeyUIObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDGameOverPopupObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGameOverPopupObjects1[i].hide();
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10095596);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", true);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(5);
}}

}


}; //End of gdjs.MenuCode.eventsList0x5b70b8


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayerObjects1.length = 0;
gdjs.MenuCode.GDPlayerObjects2.length = 0;
gdjs.MenuCode.GDMagicGemObjects1.length = 0;
gdjs.MenuCode.GDMagicGemObjects2.length = 0;
gdjs.MenuCode.GDCheckpointObjects1.length = 0;
gdjs.MenuCode.GDCheckpointObjects2.length = 0;
gdjs.MenuCode.GDLeftObjects1.length = 0;
gdjs.MenuCode.GDLeftObjects2.length = 0;
gdjs.MenuCode.GDSlimeObjects1.length = 0;
gdjs.MenuCode.GDSlimeObjects2.length = 0;
gdjs.MenuCode.GDRightObjects1.length = 0;
gdjs.MenuCode.GDRightObjects2.length = 0;
gdjs.MenuCode.GDFPSCounterObjects1.length = 0;
gdjs.MenuCode.GDFPSCounterObjects2.length = 0;
gdjs.MenuCode.GDLivesCounterObjects1.length = 0;
gdjs.MenuCode.GDLivesCounterObjects2.length = 0;
gdjs.MenuCode.GDGameOverPopupObjects1.length = 0;
gdjs.MenuCode.GDGameOverPopupObjects2.length = 0;
gdjs.MenuCode.GDBoundaryObjects1.length = 0;
gdjs.MenuCode.GDBoundaryObjects2.length = 0;
gdjs.MenuCode.GDCheckpointFireObjects1.length = 0;
gdjs.MenuCode.GDCheckpointFireObjects2.length = 0;
gdjs.MenuCode.GDGameOverTipObjects1.length = 0;
gdjs.MenuCode.GDGameOverTipObjects2.length = 0;
gdjs.MenuCode.GDImpObjects1.length = 0;
gdjs.MenuCode.GDImpObjects2.length = 0;
gdjs.MenuCode.GDDoorObjects1.length = 0;
gdjs.MenuCode.GDDoorObjects2.length = 0;
gdjs.MenuCode.GDKeyObjects1.length = 0;
gdjs.MenuCode.GDKeyObjects2.length = 0;
gdjs.MenuCode.GDKeyUIObjects1.length = 0;
gdjs.MenuCode.GDKeyUIObjects2.length = 0;
gdjs.MenuCode.GDGameTimerObjects1.length = 0;
gdjs.MenuCode.GDGameTimerObjects2.length = 0;
gdjs.MenuCode.GDKeyParticlesObjects1.length = 0;
gdjs.MenuCode.GDKeyParticlesObjects2.length = 0;
gdjs.MenuCode.GDMagicParticlesObjects1.length = 0;
gdjs.MenuCode.GDMagicParticlesObjects2.length = 0;
gdjs.MenuCode.GDEnemyBoundaryObjects1.length = 0;
gdjs.MenuCode.GDEnemyBoundaryObjects2.length = 0;
gdjs.MenuCode.GDDemonObjects1.length = 0;
gdjs.MenuCode.GDDemonObjects2.length = 0;
gdjs.MenuCode.GDButtonsTrackerObjects1.length = 0;
gdjs.MenuCode.GDButtonsTrackerObjects2.length = 0;
gdjs.MenuCode.GDMenuTextObjects1.length = 0;
gdjs.MenuCode.GDMenuTextObjects2.length = 0;
gdjs.MenuCode.GDPlatformObjects1.length = 0;
gdjs.MenuCode.GDPlatformObjects2.length = 0;
gdjs.MenuCode.GDControlsTextObjects1.length = 0;
gdjs.MenuCode.GDControlsTextObjects2.length = 0;
gdjs.MenuCode.GDGameTitleObjects1.length = 0;
gdjs.MenuCode.GDGameTitleObjects2.length = 0;

gdjs.MenuCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
