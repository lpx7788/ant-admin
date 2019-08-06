

class dateUtils {

    static formatDate(date,fmt){
        if(/(y+)/.test(fmt)){
            fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length));
        }
        let o = {
            'M+': date.getMonth()+1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for(let k in o){    
            let str = o[k]+'';
            if(new RegExp(`(${k})`).test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1)?str:padLeftZero(str));
            }
        }
        return fmt;
    };

    // 获取当前时间日期
    static getNowDate() {
        let nowDate = new Date();
        let year = nowDate.getFullYear();
        let month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
        let day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
        let hour = nowDate.getHours() < 10 ? '0' + nowDate.getHours() : nowDate.getHours(); 
        let minutes = nowDate.getMinutes() < 10 ? '0' + nowDate.getMinutes() : nowDate.getMinutes();
        let seconds = nowDate.getSeconds();
        let dateStr = year + "-" + month + "-" + day +" " + hour +":" +minutes; 
        return dateStr;
    }
    
}

export {
    dateUtils
}