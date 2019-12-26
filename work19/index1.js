document.getElementById('upload').onclick = function(){
    var form = document.getElementById('form');
    var fd = new FormData(form);
    var bar = document.getElementById('bar');
    var per = document.getElementById('per');
    var down = document.getElementById('download');
    var xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (e){
        var num  = Math.floor(e.loaded/e.total*100);
    }
}