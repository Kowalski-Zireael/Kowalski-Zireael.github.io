function WeatherChoose()
{ 
    var D = new Date(); 
    var yy = D.getFullYear(); 
    var mm = D.getMonth()+1; 
    var dd = D.getDate(); 
    

    var D2019 = new Array(24);
    var D2020 = new Array(24);
    var D2021 = new Array(24);


    D2019 = [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,24,8,22,7,22];
    D2020 = [5,20,4,19,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,7,21];
    D2021 = [6,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21];

    var DD = new Array(24);
    var flag = 0;
    if (yy==2019) 
        for (var i = 0; i < 24; ++i) DD[i]=D2019[i]; 
    else if (yy==2020) 
        for (var i = 0; i < 24; ++i) DD[i]=D2020[i]; 
    else if (yy==2021)
        for (var i = 0; i < 24; ++i) DD[i]=D2021[i]; 

    if (dd < DD[mm*2-2]) 
        flag=mm*2-3;
    else 
    if (dd < DD[mm*2-1])
        flag=mm*2-2;
    else
        flag=mm*2-1;
    if (flag<0) flag=23;
    
    switch(flag) {
        case 0:
            document.getElementById("Weather").style.background = "url(Image/weather/小寒.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 1:
            document.getElementById("Weather").style.background = "url(Image/weather/大寒.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 2:
            document.getElementById("Weather").style.background = "url(Image/weather/立春.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 3:
            document.getElementById("Weather").style.background = "url(Image/weather/雨水.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 4:
            document.getElementById("Weather").style.background = "url(Image/weather/惊蛰.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 5:
            document.getElementById("Weather").style.background = "url(Image/weather/春分.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 6:
            document.getElementById("Weather").style.background = "url(Image/weather/清明.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 7:
            document.getElementById("Weather").style.background = "url(Image/weather/谷雨.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 8:
            document.getElementById("Weather").style.background = "url(Image/weather/立夏.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 9:
            document.getElementById("Weather").style.background = "url(Image/weather/小满.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 10:
            document.getElementById("Weather").style.background = "url(Image/weather/芒种.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 11:
            document.getElementById("Weather").style.background = "url(Image/weather/夏至.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 12:
            document.getElementById("Weather").style.background = "url(Image/weather/小暑.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 13:
            document.getElementById("Weather").style.background = "url(Image/weather/大暑.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 14:
            document.getElementById("Weather").style.background = "url(Image/weather/立秋.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 15:
            document.getElementById("Weather").style.background = "url(Image/weather/处暑.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 16:
            document.getElementById("Weather").style.background = "url(Image/weather/白露.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 17:
            document.getElementById("Weather").style.background = "url(Image/weather/秋分.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 18:
            document.getElementById("Weather").style.background = "url(Image/weather/寒露.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 19:
            document.getElementById("Weather").style.background = "url(Image/weather/霜降.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 20:
            document.getElementById("Weather").style.background = "url(Image/weather/立冬.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 21:
            document.getElementById("Weather").style.background = "url(Image/weather/小雪.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 22:
            document.getElementById("Weather").style.background = "url(Image/weather/大雪.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
        case 23:
            document.getElementById("Weather").style.background = "url(Image/weather/冬至.gif)";
            document.getElementById("Weather").style.backgroundSize = "cover";
            break;
   }
} 