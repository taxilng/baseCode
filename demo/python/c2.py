#!/usr/bin/python
# coding:utf-8
# 实现一个简单的爬虫，爬取百度贴吧图片
import urllib.request
import re

# 根据url获取网页html内容
def getHtmlContent(url):
    page = urllib.request.urlopen(url)
    return page.read()

# 从html中解析出所有jpg图片的url
# 百度贴吧html中jpg图片的url格式为：<img ... src="XXX.jpg" width=...>
def getJPGs(html):
    # 解析jpg图片url的正则
    jpgReg = re.compile(r'<img.+?src="(.+?\.jpg)" width')  # 注：这里最后加一个'width'是为了提高匹配精确度
    # 解析出jpg的url列表
    html=html.decode('utf-8')#python3
    jpgs = re.findall(jpgReg, html)
    return jpgs

# 用图片url下载图片并保存成制定文件名
def downloadJPG(imgUrl, fileName):
    urllib.request.urlretrieve(imgUrl, fileName)

# 批量下载图片，保存到F盘zdl文件夹
def batchDownloadJPGs(imgUrls, path='F:/zdl/'):
    # 用于给图片命名
    count = 1
    for url in imgUrls:
        downloadJPG(url, ''.join([path, '{0}.jpg'.format(count)]))
        print ('正在下载第'+str(count)+'张')
        count = count + 1

# 封装：从百度贴吧网页下载图片
def download(url):
    html = getHtmlContent(url)
    jpgs = getJPGs(html)
    batchDownloadJPGs(jpgs)

def main():
    url = 'https://www.baidu.com'
    download(url)

if __name__ == '__main__':
    main()