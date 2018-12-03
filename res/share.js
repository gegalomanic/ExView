function base64encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}
function base64decode(str) {
    return decodeURIComponent(escape(atob(str)));
}
function isWeiXin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/WeiBo/i) == "weibo") {
        return true;
    } else if (ua.indexOf('mqqbrowser') > -1) {
        return true;
    } else if (ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1) {
        if (ua.indexOf('qq') > -1) {
            return true;
        }
    }
    return false;
}
if(self!=top){
    if(isWeiXin()){
        alert('请在右上角点击选择用浏览器打开！');
    }else{
        // top.location.href=self.location.href;
    }
}

document.writeln(base64decode('PG1ldGEgY2hhcnNldD0iVVRGLTgiLz48bWV0YSBuYW1lPSJ2aWV3cG9ydCJjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xLCBtaW5pbXVtLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm8sIG1pbmltYWwtdWkiPjxkaXYgc3R5bGU9InRleHQtYWxpZ246IGNlbnRlcjsiPjxpbWcgY2xhc3M9InNoYXJlaW1nInN0eWxlPSJtYXgtd2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOiAzcHg7Ym94LXNoYWRvdzogMCA4cHggMTZweCAtNXB4IGJsYWNrOyJvbmVycm9yPSJ0aGlzLnNyYz0naWNvbi5wbmcnInNyYz0iaWNvbi5wbmciLz48aDEgY2xhc3M9InNoYXJlbmFtZSI+RXhWaWV3PC9oMT48YSBjbGFzcz0ib3BlbnNoYXJldXJsImhyZWY9ImV4djovL29wZW5BcHAic3R5bGU9ImJhY2tncm91bmQ6ICM1Mjg4ODg7cGFkZGluZzogOHB4IDE2cHg7Ym9yZGVyLXJhZGl1czogMzJweDt0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6IHdoaXRlOyI+5omT5byARXhWaWV3PC9hPjxhIGhyZWY9Imh0dHBzOi8vd3d3LmV4dmlldy5tbC8ic3R5bGU9ImJhY2tncm91bmQ6ICM1Mjg4ODg7cGFkZGluZzogOHB4IDE2cHg7Ym9yZGVyLXJhZGl1czogMzJweDt0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6IHdoaXRlOyI+5LiL6L29RXhWaWV3PC9hPjxociBzdHlsZT0ibWFyZ2luOiAxNnB4IDA7Ii8+PGg2IGNsYXNzPSJzaGFyZXVybHNob3cic3R5bGU9Im1hcmdpbjogMTZweDtkaXNwbGF5Om5vbmU7Ij7lpI3liLbku6XkuIvlhoXlrrnlubbliIbkuqvnvJblj7cs5ZyoIue8luWPt+i3s+i9rCLlip/og73ph4znspjotLQhPC9oNj48ZGl2IHN0eWxlPSJ0ZXh0LWFsaWduOiBjZW50ZXI7d2lkdGg6IDEwMCU7Ij48ZGl2IGNsYXNzPSJzaGFyZXVybCJzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrO3RleHQtYWxpZ246IGxlZnQ7d2hpdGUtc3BhY2U6IG5vcm1hbDt3b3JkLWJyZWFrOiBicmVhay1hbGw7ZGlzcGxheTogaW5saW5lLWJsb2NrO2JvcmRlcjogMXB4IGdhaW5zYm9ybyBzb2xpZDtwYWRkaW5nOiA4cHg7Ym9yZGVyLXJhZGl1czogM3B4OyI+PC9kaXY+PC9kaXY+PC9kaXY+'));


var shareurl=window.location.hash.substring(1);
if(shareurl){
    document.querySelector('.openshareurl').href=shareurl;
    var sharecode=decodeURIComponent(shareurl||'');
    sharecode=sharecode.replace('exv://openShareCode?data=','');
    document.querySelector('.shareurl').innerHTML=sharecode;
    document.querySelector('.shareurlshow').style.display='block';
    var sharearr=sharecode.split('::');
    var sharename=sharearr.pop();
    document.querySelector('.sharename').innerHTML=sharename;
    var shareimg=sharearr.pop()||'';
    if(shareimg.indexOf('exview://')==0){
        var shareimgarr=shareimg.split('?');
        shareimgarr.shift();
        shareimg=shareimgarr.join('?').split('&')[0];
        shareimg=base64decode(shareimg);
        shareimg=JSON.parse(shareimg);
        shareimg=shareimg.imgurl;
        document.querySelector('.shareimg').src=shareimg;
    }
    document.title=sharename+' - ExView分享';                
}