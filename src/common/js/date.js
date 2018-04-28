export function formatDate(date,fmt) {
    if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1,(date,getFullYear()+'').substr(4-RegExp.$1.length))
        //RegExp.$1 捕获正则中括号中的部分
        //4-RegExp.$1.length  为了获得要展示的年的位数 如两个y的话，2014只返回14

        let 0 = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
        }
        for(let k in 0){
            if(new RegExp(`(${k})`).test(fmt)) {
                let str = 0[k] + '';
                fmt = fmt.replace((RegExp.$1.length === 1) ? str: )
            }
        }
    }
}

function padLeftZero(str) {
    return ("00" + str).substr(str.length)
}