var cpuData = [
    ['', '', '', '', '', '', '', '', 'A13', '', ''],
    ['', '', '', '', '骁龙865', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '天玑1000', '', '', '', ''],
    ['', '', '', '', '', '', '', '麒麟990', '', '', ''],
    ['', '', '', '', '骁龙855 Plus', '', '', '', '', '', ''],
    ['', '', '', '', '骁龙855', 'Exynos 9820', '', '', 'A12', '', ''],
    ['', '', '', '', '', '', '', '麒麟980', '', '', ''],
    ['', '', '', '', '骁龙845', 'Exynos 9810', '', '', '', '', ''],
    [
        '',
        '',
        '',
        '骁龙765/765G',
        '',
        '',
        'Helio G90T',
        '麒麟810',
        'A11',
        '',
        ''
    ],
    [
        '',
        '',
        '',
        '骁龙730/730G',
        '骁龙835',
        'Exynos 8895',
        '',
        '麒麟970',
        '',
        '',
        ''
    ],
    ['', '', '', '', '', '', '', '', 'A10', '', ''],
    ['', '', '', '骁龙712', '', '', '', '', 'A9X', '', ''],
    ['', '', '', '骁龙710', '', '', '', '麒麟960', '', '', ''],
    ['', '', '', '骁龙675', '骁龙821', '', 'Helio X30', '', '', '', ''],
    ['', '', '', '骁龙670', '骁龙820', '', '', '', '', '', ''],
    ['', '', '', '', '骁龙820降频版', 'Exynos 8890', '', '', 'A9', '', ''],
    ['', '', '', '骁龙665', '', '', 'Helio P60', '麒麟710', '', '', ''],
    ['', '', '', '骁龙660', '', '', 'Helio X27', '麒麟955', '', '', ''],
    ['', '', '', '骁龙636', '', '', '', '麒麟950', '', '', ''],
    [
        '',
        '',
        '',
        '骁龙630',
        '骁龙810',
        'Exynos 7420',
        'Helio X25',
        '',
        'A8X',
        '',
        ''
    ],
    ['', '', '', '', '', '', 'Helio X23', '', '', '', ''],
    ['', '', '', '骁龙653', '', '', 'Helio X20', '', '', '', ''],
    ['', '', '', '', '', '', 'Helio P30', '', 'A8', '', ''],
    ['', '', '', '骁龙652', '', '', 'Helio P25', '', '', '', 'Tegra X1'],
    ['', '', '', '', '', '', 'Helio P23', '', '', '', ''],
    ['', '', '', '骁龙650', '', '', 'Helio P20', '', '', '', ''],
    ['', '', '', '', '骁龙808', '', 'Helio X10', '麒麟935', '', '', 'Tegra K1'],
    ['', '', '', '', '', '', 'Helio P15', '', '', '', ''],
    ['', '', '', '', '', 'Exynos 5433', 'Helio P10', '麒麟930', '', '', ''],
    ['', '', '', '', '', '', '', '麒麟659', '', '', ''],
    ['', '', '', '骁龙626', '骁龙805', '', '', '麒麟650', '', '', ''],
    [
        '',
        '',
        '',
        '骁龙625',
        '骁龙801<br/>(MSM8x74AC)',
        'Exynos 5430',
        '',
        '',
        '',
        'Z3590',
        ''
    ],
    [
        '',
        '',
        '',
        '',
        '骁龙801<br/>(MSM8x74AB)',
        'Exynos 7870',
        '',
        '',
        '',
        'Z3580',
        ''
    ],
    [
        '',
        '',
        '',
        '',
        '骁龙801<br/>(MSM8x74AA)',
        'Exynos 7580',
        'MT6752/M',
        '',
        '',
        'Z3570',
        ''
    ],
    ['', '', '', '', '', 'Exynos 5433', 'MT6753', '', '', 'Z3560', ''],
    ['', '', '', '', '', '', 'MT6750', '', '', '', ''],
    ['', '', '', '', '', '', 'MT6739', '', '', '', ''],
    ['', '', '骁龙450', '', '', '', 'MT6735', '', '', '', ''],
    ['', '', '骁龙439', '', '', 'Exynos 5800', '', '', '', '', ''],
    ['', '', '', '', '', 'Exynos 5430', '', '', '', 'Z3530', ''],
    ['', '', '', '', '', 'Exynos 5422', '', '麒麟620', '', '', ''],
    [
        '',
        '',
        '骁龙435',
        '骁龙617',
        '骁龙800',
        'Exynos 5420',
        'MT6595/T',
        '麒麟928',
        'A7',
        'Z3480',
        'Tegra 4'
    ],
    [
        '',
        '',
        '骁龙430',
        '骁龙616',
        '',
        'Exynos 5410',
        'MT6592',
        '麒麟925',
        '',
        'Z3460',
        ''
    ],
    ['', '', '骁龙427', '骁龙615', '', '', '', '麒麟920', '', '', 'Tegra 4i'],
    [
        'APQ8064',
        '',
        '骁龙425',
        '骁龙600',
        '',
        'Exynos 5260',
        'MT6582',
        'K3V2+<br/>(麒麟910)',
        '',
        '',
        ''
    ],
    ['', '', '', '', '', '', '', '', '', 'Z3580', ''],
    ['', '骁龙212', '', '骁龙610', '', '', '', '', '', '', ''],
    ['', '骁龙210', '骁龙412', '', '', 'Exynos 5250', '', '', 'A6X', '', ''],
    [
        'MSM8960T',
        '骁龙208',
        '骁龙410',
        '',
        '',
        'Exynos 4412',
        '',
        '',
        'A6',
        'Z3480',
        ''
    ],
    [
        'MSM8260A<br/>/8660A/8960',
        '骁龙200<br/>(MSM8x12)',
        '骁龙400',
        '',
        '',
        '',
        '',
        'K3V2E',
        '',
        'Z2580',
        ''
    ],
    [
        '',
        '骁龙200<br/>(MSM8x10)',
        '',
        '',
        '',
        '',
        '',
        'K3V2',
        '',
        '',
        'Tegra 3'
    ],
    ['', '', '', '', '', '', '', '', '', 'Z2480', ''],
    ['', '', '骁龙400', '', '', '', 'MT6589', '', 'A5X', 'Z2460', ''],
    ['', '骁龙200<br/>(MSM8x25Q)', '', '', '', '', '', '', 'A5', '', ''],
    [
        'MSM8260<br/>/8660',
        '',
        '',
        '',
        '',
        'Exynos 4210<br/>/4212',
        '',
        '',
        '',
        'Z2420',
        ''
    ],
    [
        'MSM8225<br/>/8625',
        '',
        '',
        '',
        '',
        '',
        'MT6577/6572',
        '',
        '',
        '',
        'Tegra 2'
    ],
    ['MSM8255T<br/>/8655T', '', '', '', '', '', '', '', '', '', ''],
    [
        'MSM8255<br/>/8655<br/>/APQ8055',
        '',
        '',
        '',
        '',
        'Exynos 3475',
        'MT6515/6175',
        '',
        '',
        '',
        ''
    ],
    ['MSM7230<br/>/7630', '', '', '', '', '', 'MT6515M', '', 'A4', '', ''],
    ['QSD8650<br/>/8250', '', '', '', '', 'Exynos 3110', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['MSM7627A<br/>/7227A', '', '', '', '', '', '', '', '', '', ''],
    ['MSM7627T<br/>/7227T', '', '', '', '', '', '', '', '', '', ''],
    ['MSM7627<br/>/7227', '', '', '', '', 'S5PC100', '', '', '', '', ''],
    ['', '', '', '', '', 'S5L8900', 'MT6573/13', '', '', '', 'Tegra'],
    ['', '', '', '', '', '', 'MT6516', '', '', '', '']
]
var newcpuData = cpuData
    .map((v) =>
        v.map((x, i, arr) => {
            var temp = ``
            if (i === 0) {
                temp = `<tr><td class="content">${x}</td>`
            } else if (i === arr.length - 1) {
                temp = `<td class="content">${x}</td></tr>`
            } else {
                temp = `<td class="content">${x}</td>`
            }
            return temp
        })
    )
    .flat()
    .join('')
// console.log(newcpuData);
var tbody = document.querySelector('#tbody')
// console.log(tbody);
tbody.insertAdjacentHTML('beforeend', newcpuData)
// 背景高亮
var content = document.querySelectorAll('td.content')
for (var key of content) {
    if (key.textContent.includes('骁龙439')) {
        console.log(key)
        key.classList.add('newCpu')
    }
}
