import './index.css'
import '../../core/css/common.css'
import mui from  '../../core/src/index.esm'
import '@ele/mui-confirm-dialog/index'

import eruda from 'eruda'
eruda.init();

// 创建dialog
mui.createElement('confirm-dialog.html', {
    conf: {
        message: '这里是显示的message信息',
        cancel: '取消',
        confirm: '确定'
    }
});

var dialog = document.getElementById('my-dialog'),
    dialog2 = document.getElementById('my-dialog2'),
    showBtnEl = document.querySelector('#btn1'),
    showBtnEl2 = document.querySelector('#btn2');

showBtnEl.addEventListener('click', function() {
    dialog.show();
});

showBtnEl2.addEventListener('click', function() {
    dialog2.show();
});