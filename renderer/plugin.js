Plugin.extend({
    _type: 'com.github.steotia.peerplay.controls',
    _isContainer: false,
    _render: true,
    initPlugin: function(data) {
        console.log('com.github.steotia.peerplay.controls INIT: data'+JSON.stringify(data));
        var startBtn = EkstepRendererAPI.getPluginInstance('startBtn');
        var srchBtn = EkstepRendererAPI.getPluginInstance('srchBtn');
        var joinBtn = EkstepRendererAPI.getPluginInstance('joinBtn');
        var instance = this;
        joinBtn.hide();

        var core = this._theme.getParam('com.github.steotia.peerplay.core');
        if (_.isUndefined(core)) {
            core = EkstepRendererAPI.instantiatePlugin('com.github.steotia.peerplay.core',{},this._stage);
            this._theme.setParam('com.github.steotia.peerplay.core',core);
        }

        startBtn._self.on("click",function(){
            startBtn.hide();
            EkstepRendererAPI.dispatchEvent('com.github.steotia.peerplay.core.player.host');
        });

        joinBtn._self.on("click",function(){
            joinBtn.hide();
            EkstepRendererAPI.dispatchEvent('com.github.steotia.peerplay.core.player.join');
        });

        EkstepRendererAPI.dispatchEvent('com.github.steotia.peerplay.core.player.search');

        EkstepRendererAPI.addEventListener('com.github.steotia.peerplay.core.wsserver.undefined',function(){
            startBtn.show();
        });
        EkstepRendererAPI.addEventListener('com.github.steotia.peerplay.core.zeroconf.undefined',function(){
            srchBtn.show();
        });
        EkstepRendererAPI.addEventListener('com.github.steotia.peerplay.core.wsserver.start',function(){
            startBtn.hide();
        });
        EkstepRendererAPI.addEventListener('com.github.steotia.peerplay.core.self.connect',function(e,_data){
            console.debug('com.github.steotia.peerplay.controls CONNECT: '+JSON.stringify(_data));
            instance._theme.setParam('com.github.steotia.peerplay.player',_data);
            startBtn.hide();
            srchBtn.hide();
            joinBtn.show();
        });
        EkstepRendererAPI.addEventListener('com.github.steotia.peerplay.core.state.hello',function(e,_data){
            console.log('com.github.steotia.peerplay.scorer HELLO: '+JSON.stringify(_data));
            instance._theme.setParam('com.github.steotia.peerplay.scorer.uuid',_data.data.uuid);
        });



    }
});
//# sourceURL=com.github.steotia.peerplay.controls.js
