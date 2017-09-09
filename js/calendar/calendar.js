function Calendar(){

    this.date = new Date();
    this.currentDate = this.date.getDate();
    this.currentMonth = this.date.getMonth();
    this.currentYear = this.date.getFullYear();
    this.getFirstDay = new Date(this.currentYear, this.currentMonth, 1);
    this.monthLimit = 30;
    
    this.nextMonth = function(){
        var next = this.currentMonth + 1;
        this.currentMonth = next;
        if(next > 11){
            this.currentYear += 1;
            return 1;
        }else
            return next;
    }
    this.prevMonth = function () {
        var prev = this.currentMonth - 1;
        this.currentMonth = prev;
        if (prev < 2) {
            this.currentYear -= 1;
            return 12;
        } else
            return prev;
    }

    this.toNextMonth = function(){
        this.currentMonth = this.nextMonth();
        this.init();
    }
    this.toPrevMonth = function () {
        this.currentMonth = this.prevMonth();
        this.init();
    }
    this.init = function(){
        var table = $('#calendar');
        var thisMonthDay = this.getFirstDay.getDay();
        var html = "<table class='table'>";
        var monthDate = 1;
        console.log(this.currentYear);

        html += "<tr><td colspan='7' align='center'><b>" + this.toMonth(this.currentMonth) + ' ' + this.currentYear+ "</b></td></tr>";
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
                if (o < thisMonthDay && monthDate == 1 || monthDate > this.monthLimit) {
                    html += '<td>&nbsp;</td>';
                } else if (monthDate >= 1) {
                    if(this.currentDate == monthDate && this.date.getMonth() == this.currentMonth)
                        html += '<td align="center" style="background: #ccc">' + monthDate + '</td>';
                    else
                        html += '<td align="center">' + monthDate + '</td>';

                    monthDate++;
                }
            }
            html += "</tr>";
        }

        table.html(html);
    };

    this.toDay = function(day){
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
    }

    this.toMonth = function(month){
        switch (month) {
            case 1:
                return "January";
                break;
            case 2:
                return "February";
                break;
            case 3:
                return "March";
                break;
            case 4:
                return "April";
                break;
            case 5:
                return "May";
                break;
            case 6:
                return "June";
                break;
            case 7:
                return "July";
                break;
            case 8:
                return "August";
                break;
            case 9:
                return "September";
                break;
            case 10:
                return "October";
                break;
            case 11:
                return "November";
                break;
            default:
                return "December";
                break;
        }
    }
}