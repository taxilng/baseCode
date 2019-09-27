var obj = {
    1: {
        text: '领取',
        isActive: ''
    },
    2: {
        text: '已领取',
        isActive: 'send-text-green'
    },
    3: {
        text: '发货中',
        isActive: 'send-text-blue'
    },
    5: {
        text: '已发货',
        isActive: 'send-text-green'
    },
}
this.list[index] = obj[value.send_status]