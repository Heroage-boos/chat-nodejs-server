const axios = require('axios');
const cheerio = require('cheerio');
const app = require('express')();
const zhihuModel=require("@/src/models/zhihu/zhihu-content-orm")
const fs = require("fs");

async function zhihuCreateOrm(data) {
     await zhihuModel.sync();
    //遍历爬取到的数据
    console.log("data", data)
    data.titles.forEach(async(i, index) => {
        // 检查数据是否已存在
      const existingData = await zhihuModel.findOne({ where: { zhihu_content_title:i } });
      if (!existingData) {
        // 数据不存在，插入到数据库
        await zhihuModel.create({
            id: index,
            zhihu_content_title: i,
            zhihu_content_content: data.content[index]
        });
      } else {
        console.log(`Data already exists: ${i}`);
      }
    });
    return "数据同步成功!"
    // console.log("数据已同步至数据库！")
}

//爬取网页信息
async function crawlAndFilter(url) {
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        // console.log('html', html);
        // console.log('$  ', $);
        // 使用选择器语法筛选有效数据
        const titles = $('h2.ContentItem-title').map((i, el) => $(el).text()).get();
        const content = $('div.RichContent-inner > .css-376mun > span.RichText').map((i, el) => $(el).text()).get();
        // const links = $('div.RichContent-inner').map((i, el) => $(el).attr('href')).get();

        // 存储数据到对象或数组中
        const data = {
            titles,
            content
        };

        setTimeout(() => {
            //数据库创建
            return zhihuCreateOrm(data)
        }, 1000)

        //录入到当前文件夹下方便查看
        fs.writeFileSync("./zhihu.txt", JSON.stringify(data), "utf-8",)
        // zhiHuOrm.sync({ force: true });
        
    } catch (error) {
        console.error(error);
    }
}

app.get('/', function (req, res) {
    console.log('req, res', req, res);
    // 调用函数，并传入目标网页的 URL
    const result = crawlAndFilter('https://www.zhihu.com/topic/19550228/top-answers');
    console.log("result2", result)
    return res.API(result)
})

module.exports = app;
