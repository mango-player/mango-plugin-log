Mango.install(mangoPluginControlbar);
Mango.install(mangoPluginLog);

const player = new Mango({
  // 业务标识
  business_id:'livecloud',

  // 播放地址
  src: 'http://cdn.toxicjohann.com/lostStar.mp4',
  // 直播:live 点播：vod
  isLive: false,
  // 编解码容器
  box: 'native',
  // dom容器
  wrapper: '#wrapper',
  plugin: [
    mangoPluginControlbar.name, 
    mangoPluginLog.name
  ],
  // video
  autoplay: true,
  controls: true
});

if(player.mangoLog){
  const btnsBoxEl = document.querySelector('#btns');
  const _opened = ()=>{
    btnsBoxEl.innerHTML = '<a href="###" onclick="player.mangoLog.open()">Open the log panel.</a>'
  };
  _opened();
  player.mangoLog.on('popupClose', _opened);
  player.mangoLog.on('popupOpen', ()=>{
    btnsBoxEl.innerHTML = '<a href="###" onclick="player.mangoLog.close()">Close the log panel.</a>'
  });
}