function _0x3f8a(){const _0x4e0485=['format','red','282zYEmnN','info','1205732poYHUt','padEnd','custom','green','reset','1305zzEBYg','14096SFEYjQ','17184pApWuW','68730YhocDF','Console','createLogger','cyan','addColors','transports','13607MHwfJv','levels','\x20|\x20','error','3773344iAlLOO','warning','3465798EcOfFI','exports','printf','2736880EATfdp','2tHkskR','6AedPDm','combine','timestamp','dim','toUpperCase'];_0x3f8a=function(){return _0x4e0485;};return _0x3f8a();}function _0x5059(_0x56c651,_0x48d044){const _0x3f8af7=_0x3f8a();return _0x5059=function(_0x505943,_0x53e5bf){_0x505943=_0x505943-0x1f0;let _0x4ddfb7=_0x3f8af7[_0x505943];return _0x4ddfb7;},_0x5059(_0x56c651,_0x48d044);}const _0x1797e8=_0x5059;(function(_0x1659e1,_0x5bfa46){const _0x485edf=_0x5059,_0x3a9806=_0x1659e1();while(!![]){try{const _0x351780=parseInt(_0x485edf(0x1f0))/0x1*(parseInt(_0x485edf(0x1fa))/0x2)+parseInt(_0x485edf(0x1f8))/0x3*(-parseInt(_0x485edf(0x200))/0x4)+-parseInt(_0x485edf(0x211))/0x5*(-parseInt(_0x485edf(0x1f1))/0x6)+parseInt(_0x485edf(0x20e))/0x7+-parseInt(_0x485edf(0x20c))/0x8+parseInt(_0x485edf(0x1ff))/0x9*(parseInt(_0x485edf(0x202))/0xa)+parseInt(_0x485edf(0x208))/0xb*(-parseInt(_0x485edf(0x201))/0xc);if(_0x351780===_0x5bfa46)break;else _0x3a9806['push'](_0x3a9806['shift']());}catch(_0x249cc7){_0x3a9806['push'](_0x3a9806['shift']());}}}(_0x3f8a,0xa3b23));const winston=require('winston'),colors=require('./colors'),customLevels={'levels':{'error':0x0,'warn':0x1,'info':0x2,'success':0x3,'custom':0x4},'colors':{'error':_0x1797e8(0x1f7),'warn':'yellow','info':_0x1797e8(0x205),'success':_0x1797e8(0x1fd),'custom':'magenta'}},padLevel=_0x5e0656=>{const _0x2aeb0b=_0x1797e8,_0x4bf79c=0x7;return _0x5e0656[_0x2aeb0b(0x1f5)]()[_0x2aeb0b(0x1fb)](_0x4bf79c);},customFormat=winston[_0x1797e8(0x1f6)][_0x1797e8(0x1f2)](winston[_0x1797e8(0x1f6)][_0x1797e8(0x1f3)]({'format':'YYYY-MM-DD\x20HH:mm:ss'}),winston['format'][_0x1797e8(0x210)](({timestamp:_0x6dce74,level:_0x7a3064,message:_0x307e40})=>{const _0x181baa=_0x1797e8,_0x1367e8={'error':colors[_0x181baa(0x20b)],'warn':colors[_0x181baa(0x20d)],'info':colors[_0x181baa(0x1f9)],'success':colors['success'],'custom':colors[_0x181baa(0x1fc)]};return''+colors[_0x181baa(0x1f4)]+_0x6dce74+colors[_0x181baa(0x1fe)]+_0x181baa(0x20a)+_0x1367e8[_0x7a3064]+padLevel(_0x7a3064)+colors[_0x181baa(0x1fe)]+_0x181baa(0x20a)+_0x307e40;})),logger=winston[_0x1797e8(0x204)]({'levels':customLevels[_0x1797e8(0x209)],'level':_0x1797e8(0x1fc),'format':customFormat,'transports':[new winston[(_0x1797e8(0x207))][(_0x1797e8(0x203))]()]});winston[_0x1797e8(0x206)](customLevels['colors']),module[_0x1797e8(0x20f)]=logger;