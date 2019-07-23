/**
 * 构造函数来封装ajax
 * @param {object} options 
 * @example {
 *  type: 请求类型
 *  url: 请求地址
 *  data: 地址？后的数据 键=值&键=值
 *  callback: 请求成功及响应成功后的逻辑
 * }
 */
function ajax(options) {
    options = options || {};
    //请求类型，地址， 地址？后的数据， 请求成功及响应成功后的逻辑，可用回调函数
    options.type = options.type || 'get';
    options.url = options.url || '';
    options.data = options.data || {};
    options.callback = options.callback || function (res) {
        console.log(res);
        console.log('不建议没有使用回调函数');
    }

    //异步对象
    let xhr = new XMLHttpRequest();
    //选择请求类型，请求地址
    //由于get与post的请求地址是有所区别的
    if (options.type === 'get') {
        options.url += '?' + options.data;
    }
    xhr.open(options.type, options.url);
    //发送请求
    //由于post的发送请求需要请求头及send()的不同
    if (options.type === 'post') {
        //post类型
        //请求头
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        //发送请求
        xhr.send(options.data);
    } else {
        //get类型
        xhr.send();
    }

    //监听
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            options.callback(xhr.responseText);
        }
    }
}