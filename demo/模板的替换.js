'use strict'
var str = 'My Name is ${name}, i like ${hobby}'
var obj = {
    name: 'Tom',
    hobby: 'Coding'
}
const strES6 = `My Name is ${obj.name}, i like ${obj.hobby}`
// console.log(strES6);

function replaceReg(str, obj) {
    for (var key in obj) {
        var re = new RegExp('\\${' + key + '}', 'g')
        str = str.replace(re, obj[key])
    }
    return str
}

function templateFunction(str, obj) {
    let newStr = str.replace(/\${(\w+)}/g, (match, key) => obj[key])
    return newStr
}

console.log(replaceReg(str, obj));
console.log(templateFunction(str, obj));





memberList.forEach((v,index) => {
    v.user_name = v.name
    v.dept_name = deptNameList[index]
})

getMemberFromDeptList (deptList) {
    const deptNameList = deptList.map(v => v.dept_name)
    let promiseList = deptList.map(dept => getDeptDescendantsMemberList(dept.dept_id))
    return Promise.all(promiseList).then(dataList => {
      return dataList.map(data => {
        if (data.status === 200) {
          let memberList = data.result.data
          memberList.forEach((item,index) => {
              item.user_name = item.name
              v.dept_name = deptNameList[index]
            })
          return memberList
        } else {
          console.log('获取部门成员失败')
          return []
        }
      })
    }).catch(e => {
      console.log(e)
    })
  }