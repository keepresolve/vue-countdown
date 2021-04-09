#use 

### template
```
     <countdown
        class="times"
        :startTime="startTime"
        :endTime="endTime"
        :format="format"
        @change="chountChange"
        @end="end"
    />
     内进行付款，若未进行支付则订单自动取消。

js
```
    this.format = "{yy}{mn}月{dd}天{hh}小时{mm}分钟{ss}秒";
    this.startTime =  new Date().getTime();
    this.endTime = this.startTime + 60*1000*60*24*3000
    
    chountChange({ dd, hh, mm, ss,ms,yy}) {
        let str = "{dd}天{hh}小时{mm}分钟{ss}秒";
        if (dd == 0) str = "{hh}小时{mm}分钟{ss}秒";
        if (hh == 0 && dd == 0) str = "{mm}分钟{ss}秒"
        if (mm == 0 && hh == 0 && dd == 0) str = "{ss}秒";
        if (str != this.format) this.format = str;
    }
    end(){
    
    }

| prop & event |                                            |                                                              |
| ------------ | ------------------------------------------ | ------------------------------------------------------------ |
| startTime    | 默认本地当前时间戳                         | 开始时间                                                     |
| endTime      | 毫秒                                       | 结束时间                                                     |
| format       | "{yy}年{mn}月{dd}天{hh}小时{mm}分钟{ss}秒" | 剩余时间 按照当前最高时间单位解析 1月10天10小时 == {mn}月{dd}天{hh}小时 和  (如果是6月份)40天10小时=={dd}天{hh}小时 是相同的 |
| change |                                            | 每次计算的回调 1000毫秒 通知一次  这个可以随时更改所有的属性 |
| end          |                                            | 倒计时结束                                                   |

​    