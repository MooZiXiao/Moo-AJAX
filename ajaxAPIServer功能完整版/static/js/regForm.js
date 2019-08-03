/**
 * @description 用于验证表单填写是否符合标准
 */

//用对象存储不同的规则的验证
let regMethods = {
    //空
    regEmpty: function (val, msg) {
        if (val.trim().length === 0) {
            return msg;
        }
    },
    //长度
    regLength: function (val, len, msg) {
        if (val.trim().length < len) {
            return msg;
        }
    },
    //手机
    regPhone: function (val, msg) {
        if (! /(^1[3|5|8|9][0-9]{9}$)/.test(val)) {
            return msg;
        }
    }
}

function regFun() {
    this.regArr = [];
}
//添加的函数 参数：验证对应输入框的元素 不同的规则
regFun.prototype.add = function (dom, rules) {
    for (let i = 0; i < rules.length; i++) {
        let rule = rules[i];
        let fn = function () {
            let splitArr = rule.regFunName.split(':');
            let funName = splitArr.shift();
            splitArr.unshift(dom.value);
            splitArr.push(rule.msg);
            return regMethods[funName].apply(dom, splitArr);
        }
        this.regArr.push(fn);
    }
}
//数组函数的验证
regFun.prototype.start = function () {
    for (let i = 0; i < this.regArr.length; i++) {
        let msg = this.regArr[i]();
        if (msg) {
            return msg;
        }
    }
}