function displayCalender(){
    var htmlContent="";
    var febNumberOfDays="";
    var counter=1;
    var dateNow=new Date();
    var m=prompt("Input Month");
    var month=m-1;
    var nextMonth=month+1;
    var prevMonth=month-1;
    var day=dateNow.getDate();
    var year=dateNow.getFullYear();
    if(month==1){
        if((year%100!=0)&&(year%4==00)||(year%400==0)){
            febNumberOfDays=29;
        }
        else{
            febNumberOfDays=28;
        }
    }
    var monthName=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dayPermonth=["31",""+febNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"];
    var nextDate=new Date(nextMonth+'1,'+year);
    var weekdays=nextDate.getDay();
    var weekdays2=weekdays;
    var numofDays=dayPermonth[month];

    while(weekdays>0){
        htmlContent+="<td class='monthPre'></td>";
        weekdays--;
    }
    while(counter<=numofDays){
        if(weekdays2>6){
            console.log("Hello");
            weekdays2=0;
            htmlContent+="</tr><tr>";
        }
        if(counter==day){
            htmlContent+="<td class='dayNow' onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#ffffff\"'"+"onMouseOut='this.style.background=\"#fffff\";this.style.color=\"#00ff00\"'>"+counter+"</td>";
        }
        else{
            htmlContent+="<td class='monthNow' onMouseOver='this.style.background=\"#ff0000\"'"+"onMouseOut='this.style.background=\"#fffff\"'>"+counter+"</td>";
        }
        weekdays2++;
        counter++;
        console.log(weekdays2);
    }
    var calenderBody="<table class='calender'><tr class='monthNow'><th colspan='7'>"+monthName[month]+" "+year+" </th></tr>";
calenderBody+="<tr class='dayNames'><td>Sun</td><td>Mon</td><td>Tues</td><td>Wed</td><td>Thurs</td><td>Fri</td><td>Sat</td></tr>";
calenderBody+="<tr>";
calenderBody+=htmlContent;
calenderBody+="</tr></table>";

document.getElementById("calendar").innerHTML=calenderBody;
}

