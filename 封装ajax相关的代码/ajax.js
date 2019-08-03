/**
 * 自己封装的ajax函数
 * @param {object} options 
 * @example {
 *  type : 请求方式 ，可以是get或者post
 *  url : 请求的地址
 *  data : 携带回服务器的数据
 *  callback : 请求成功的回调函数
 * }
 */
function ajax(options){
  //设置对象
  options = options || {};
  options.type = options.type || 'get';
  options.url = options.url || '';
  options.data = options.data || {};
  options.callback = options.callback || function(res){
      console.log(res);
      console.log('不建议不使用回调函数');
  }

  //异步对象
  let http = new XMLHttpRequest();
  //请求类型及请求的地址
  //由于get及post open传入的地址不同，所以需要来判断
  if(options.type === 'get'){
      options.url += '?' + options.data;
  }
  http.open(options.type, options.url);
  //发送请求
  //由于post与get发送请求要求不同，所以需要判断
  if(options.type === 'post'){
      //需要请求头
      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      //发送对应格式的请求
      http.send(options.data);
  }else{
      //get类型的发送请求
      http.send();
  }

  //监听
  http.onreadystatechange = function(){
      if(http.readyState === 4 && http.status === 200){
          //成功的操作
          options.callback(http.responseText);
      }
  }
}
function ajax(options){
  //设置对象
  options = options || {};
  options.type = options.type || 'get';
  options.url = options.url || '';
  options.callback = options.callback || function(res){
      console.log(res);
      console.log('不建议不使用回调函数');
  }

  //异步对象
  let http = new XMLHttpRequest();
  //请求类型及请求的地址
  //由于get及post open传入的地址不同，所以需要来判断
  if(options.type === 'get'){
      options.url += '?' + options.data;
  }
  http.open(options.type, options.url);
  //发送请求
  //由于post与get发送请求要求不同，所以需要判断
  if(options.type === 'post'){
      //需要请求头
      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      //发送对应格式的请求
      http.send(options.data);
  }else{
      //get类型的发送请求
      http.send();
  }

  //监听
  http.onreadystatechange = function(){
      if(http.readyState === 4 && http.status === 200){
          //成功的操作
          options.callback(http.responseText);
      }
  }
}
