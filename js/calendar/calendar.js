var Calendar = {
    init: function(){
        var thisDate = new Date();
        var date = new Date(thisDate.getFullYear(), thisDate.getMonth(), 1);
        var table = $('#calendar');
        var thisMonthDay = date.getDay();
        var html = "<table class='table'>";
        var monthDate = 1;
        var monthLimit = 30;

        html += "<tr><td colspan='7' align='center'>" + thisDate.getFullYear() + "</td></tr>";
        html += "<tr><td colspan='7' align='center'>" + this.monthName(thisDate.getMonth()) + "</td></tr>";
        html += "<tr><td><b>Minggu</b></td>";
        html += "<td><b>Senin</b></td>";
        html += "<td><b>Selasa</b></th>";
        html += "<td><b>Rabu</b></td>";
        html += "<td><b>Kamis</b></td>";
        html += "<td><b>Jumat</b></td>";
        html += "<td><b>Sabtu</b></td></tr>";

        for (var i = 0; i < 6; i++) {
            html += "<tr>";
            for (var o = 0; o < 7; o++) {
                if (o < thisMonthDay && monthDate == 1 || monthDate > monthLimit) {
                    html += '<td>&nbsp;</td>';
                } else if (monthDate >= 1) {
                    html += '<td>' + monthDate + '</td>';
                    monthDate++;
                }
            }
            html += "</tr>";
        }

        table.append(html);
    },
    dayName: function(day){
        switch (day) {
            case 0:
                return "Minggu";
                break;
            case 1:
                return "Senin";
                break;
            case 2:
                return "Selasa";
                break;
            case 3:
                return "Rabu";
                break;
            case 4:
                return "Kamis";
                break;
            case 5:
                return "Jumat";
                break;
            default:
                return "Sabtu";
                break;
        }
    },
    monthName: function(month){
        switch (month) {
            case 0:
                return "January";
                break;
            case 1:
                return "February";
                break;
            case 2:
                return "March";
                break;
            case 3:
                return "April";
                break;
            case 4:
                return "May";
                break;
            case 5:
                return "June";
                break;
            case 6:
                return "July";
                break;
            case 7:
                return "August";
                break;
            case 8:
                return "September";
                break;
            case 9:
                return "October";
                break;
            case 10:
                return "November";
                break;
            default:
                return "December";
                break;
        }
    }, 
};