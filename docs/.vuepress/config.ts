module.exports = {
    title: 'MirrorEdge Frp 镜缘映射文档',
    themeConfig: {
      nav: [
        { text: 'MirrorEdge Frp手册', link: '/' },
        { text: '莱云论坛', link: 'https://forum.laecloud.com' },
        { text: 'MirrorEdge 镜缘映射', link: 'https://www.mefrp.com' },
        { text: 'MirrorEdge Network', link: 'https://www.mcserverx.com' },
      ],
      sidebar:
      [ ['/manual/understand', '开始之前'],
          //目录1
          {
            title: '网站使用',
            children: [
              ['/manual/account', '账户相关'],
              ['/manual/tunnel', '隧道相关'],
            ]
          },
          {
            title: '客户端使用',
            children: [
              ['/manual/pascal', 'Pascal 启动器'],
              ['/manual/python', 'Python 启动器'],
              ['/manual/donet', '.NET 启动器'],
              ['/manual/donetupdate', '.NET 启动器-更新日志'],
              ['/manual/fatedier', '公版 启动器'],
            ]
          },
          //目录2
        ['/manual/error', '错误指引']
      ]
  }
}
