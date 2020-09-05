function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var dia =today.getUTCDate();
    var ano = today.getFullYear();
    var mes = "SETEMBRO";
    dia=checkTime(dia);
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('hora').innerHTML=h+":"+m+":"+s+'<img class="hora" src="res/relogio.png">';
    document.getElementById('data').innerText=dia+"/"+mes+"/"+ano;
    t=setTimeout('startTime()');
}
function checkTime(i){
    if (i<10)
    {
    i="0" + i;
    }
    return i;
}