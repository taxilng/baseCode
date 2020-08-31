const axios = require('axios');
 
axios.get('https://hq.sinajs.cn/rn=$%7Bt%7Dlist=fx_susdcny')
 .then(response => {
  console.log(response.data);
  const data = response.data
//   eval(response.data)
  const reg = /"(.+)"/
//   console.log(hq_str_fx_susdcny);
try {
   const matchDate = data.match(reg)[0]
   console.log(matchDate);
} catch (error) {
    
}
 })
 .catch(error => {
  console.log(error);
 });

