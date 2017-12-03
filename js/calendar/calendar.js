function Calendar(){

    this.date = new Date();
    this.currentDate = this.date.getDate();
    this.currentMonth = this.date.getMonth();
    this.currentYear = this.date.getFullYear();
    this.getFirstDay = function(year, date, day = 1){
        return new Date(year, date, day);
    },
    this.monthLimit = 30;
    
    
    this.getMonthLimit = function(){
        var month = this.currentMonth + 1;
        if(month <= 7 && month != 2){
            if (month % 2 == 1) {
                this.monthLimit = 31;
            }else{
                this.monthLimit = 30;
            }
        }else if(month == 2){
            if((this.currentYear % 4 == 0) && (this.currentYear % 100 != 0) || (this.currentYear % 400 == 0)){
                this.monthLimit = 29;
            }else{
                this.monthLimit = 28;
            }
        }else if(month > 7){
            if (month % 2 == 0) {
                this.monthLimit = 31;
            } else {
                this.monthLimit = 30;
            }
        }
    },

    this.statusBar = function(){
        var html = "<div class='bar'>";
        html += "<div class='status' id='prev'>";
        html += "<span class='glyphicon glyphicon-menu-left'></span></div>";
        html += "<div class='status' id='mid'>";
        html += "<span>"+this.toMonth(this.currentMonth) + ' ' + this.currentYear+"</span></div>";
        html += "<div class='status' id='next'>";
        html += "<span class='glyphicon glyphicon-menu-right'></span></div>";
        html += "</div>";
        $('#status').html(html);
    },
    
    this.nextMonth = function(){
        var next = this.currentMonth + 1;
        this.currentMonth = next;
        if(next > 11){
            this.currentYear += 1;
            return 0;
        }else
            return next;
    }
    this.prevMonth = function () {
        var prev = this.currentMonth - 1;
        this.currentMonth = prev;
        if (prev < 0) {
            this.currentYear -= 1;
            return 11;
        } else
            return prev;
    }

    this.toNextMonth = function(){
        this.currentMonth = this.nextMonth();
	this.statusBar();
        this.init();
    }
    this.toPrevMonth = function () {
        this.currentMonth = this.prevMonth();
	this.statusBar();
        this.init();
    }
    this.init = function(){
        var table = $('#calendar');
        var thisMonthDay = this.getFirstDay(this.currentYear, this.currentMonth).getDay();
        var html = "<table class='table'>";
        var monthDate = 1;
        this.getMonthLimit();
        console.log(this.currentMonth);

        html += "<tr><td><b>Sun</b></td>";
        html += "<td><b>Mon</b></td>";
        html += "<td><b>Tue</b></th>";
        html += "<td><b>Wed</b></td>";
        html += "<td><b>Thu</b></td>";
        html += "<td><b>Fri</b></td>";
        html += "<td><b>Sat</b></td></tr>";

        for (var i = 0; i < 7; i++) {
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
                return "Mon";
                break;
            case 1:
                return "Sun";
                break;
            case 2:
                return "Tue";
                break;
            case 3:
                return "Wed";
                break;
            case 4:
                return "Thu";
                break;
            case 5:
                return "Fri";
                break;
            default:
                return "Sat";
                break;
        }
    }

    this.toMonth = function(month){
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
    }
}
