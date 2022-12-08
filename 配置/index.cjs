/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx570068cb0deb5174',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '36c4e7f4918e169a07dc71c03626656e',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [宝宝]
    {
      // 想要发送的人的名字
      name: '宝贝',
      
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '2004', date: '08-04',
        },
        {
          type: '节日', name: '偷熊1.0', year: '2021', date: '06-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-06-28' },
        // 重新相遇
        { keyword: 'miss_day', date: '2022-11-28' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '橙汁',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

