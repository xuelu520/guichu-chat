$(function () {
var content = $('#content');
var status = $('#status');
var input = $('#input');
var myName = false;

//建立websocket连接
socket = io.connect('http://www.housepig.cn:3000');
//收到server的连接确认
socket.on('open',function(){
  console.log('connet server success');
});

socket.on('message',function(json){
  msg_show(json.text);
  console.log(json.text);
});

//通过“回车”提交聊天信息
input.keydown(function(e) {
  if (e.keyCode === 13) {
    var msg = input.val();
    if (!msg) return;
    socket.send(msg);
    $(this).val('');
  }
});
});
