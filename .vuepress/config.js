const {
    description
} = require('../package')

module.exports = {
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    locales: {
        '/': {
            lang: 'zh-TW',
            title: 'OpenCore 安裝指南',
            description: '正體中文版 - 目前支援版本 0.8.8'
        },
    },

    base: '/OpenCore-Install-Guide/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,//上次更新
        smoothScroll: true,//页面滚动
        repo: 'https://github.com/eason329/OpenCore-Install-Guide',
        editLinks: true,
        editLinkText: '在 GitHub 上編輯此頁',
        logo: '/homepage.png',
        locales: {
            '/': {
                label: '正體中文',
                lastUpdated: '上次更新',
                nav: [
                    {
                        text: '指南選單',
                        items: [
                            {
                                text: 'OpenCore 安裝指南',
                                link: 'https://eason329.github.io/OpenCore-Install-Guide/'
                            },
                            {
                                text: 'OpenCore 安裝後完善指南',
                                link: 'https://eason329.github.io/OpenCore-Post-Install/'
                            },
                            {
                                text: 'OpenCore 多系統開機',
                                link: 'https://eason329.github.io/OpenCore-Multiboot/'
                            },
                            {
                                text: 'ACPI 入門教學',
                                link: 'https://eason329.github.io/Getting-Started-With-ACPI/'
                            },
                            {
                                text: '無線網卡購買指南',
                                link: 'https://eason329.github.io/Wireless-Buyers-Guide/'
                            },
                            {
                                text: '顯示卡購買指南',
                                link: 'https://eason329.github.io/GPU-Buyers-Guide/'
                            },
                            {
                                text: '避免購買指南',
                                link: 'https://eason329.github.io/Anti-Hackintosh-Buyers-Guide/'
                            },
                        ]
                    },
                    { text: 'English', link: 'https://dortania.github.io/OpenCore-Install-Guide/' },
                ],
                sidebar: [
                    {
                        title: '簡介',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            'prerequisites',
                            'macos-limits',
                            'find-hardware',
                            'terminology',
                            'why-oc',
                        ]
                    },
                    {
                        title: '製作開機隨身碟',
                        collapsable: false,
                        sidebarDepth: 2,
                        children: [{
                            title: '製作開機隨身碟',
                            collapsable: true,
                            path: '/installer-guide/',
                            sidebarDepth: 1,
                            children: [
                                '/installer-guide/mac-install',
                                '/installer-guide/windows-install',
                                '/installer-guide/linux-install',
                            ]
                        },
                            '/installer-guide/opencore-efi',
                            'ktext',
                        ['https://sumingyd.github.io/Getting-Started-With-ACPI/', 'ACPI 入門教學'],
                        ]
                    },
                    {
                        title: '建構 config.plist',
                        collapsable: false,
                        sidebarDepth: 2,
                        children: [{
                            title: '開始建構 config.plist',
                            collapsable: true,
                            path: '/config.plist/',
                            sidebarDepth: 1,
                            children: [
                                    '/config.plist/acpi',
                                    '/config.plist/booter',
                                    '/config.plist/device-properties',
                                    '/config.plist/kernel',
                                    '/config.plist/misc',
                                    '/config.plist/nvram',
                                    '/config.plist/platform-info',
                                    '/config.plist/uefi',
                                    '/config.plist/security',
                                    '/config.plist/bios-settings',
                            ]
                        },
                        ]
                    },
                    {
                        title: '安裝',
                        collapsable: false,
                        children: [
                            '/installation/installation-process',

                        ]
                    },
                    {
                        title: '故障診斷',
                        collapsable: false,
                        children: [
                            '/troubleshooting/troubleshooting',
                            {
                                title: '',
                                collapsable: false,
                                children: [
                                    '/troubleshooting/extended/opencore-issues',
                                    '/troubleshooting/extended/kernel-issues',
                                    '/troubleshooting/extended/userspace-issues',
                                    '/troubleshooting/extended/post-issues',
                                    '/troubleshooting/extended/misc-issues',

                                ]
                            },
                            '/troubleshooting/debug',
                            '/troubleshooting/boot',
                            '/troubleshooting/kernel-debugging',
                        ]
                    },
                    {
                        title: '安裝 OpenCore 以後',
                        collapsable: false,
                        children: [
                            ['https://sumingyd.github.io/OpenCore-Post-Install/', '安裝後完善指南'],
                            {
                                title: '通用',
                                collapsable: true,
                                sidebarDepth: 1,
                                children: [
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/universal/security', '安全與 FileVault'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/universal/audio', '修復音訊'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/universal/oc2hdd', '無 USB 開機'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/universal/update', '更新 OpenCore、kext 和 macOS'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/universal/drm', '修復 DRM'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/universal/iservices', '修復 iServices'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/universal/pm', '修復電源管理'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/universal/sleep', '修復睡眠'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/usb/', '修復 USB'],
                                ]
                            },
                            {
                                title: '筆記型電腦',
                                collapsable: true,
                                children: [
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/laptop-specific/battery', '修復電池讀數'],

                                ]
                            },
                            {
                                title: '美化',
                                collapsable: true,
                                children: [
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/cosmetic/verbose', '修復分辨率和囉嗦模式'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/cosmetic/gui', '增加 GUI 和開機鈴聲'],
                                ]
                            },
                            {
                                title: '多系統開機',
                                collapsable: true,
                                children: [
                                    ['https://sumingyd.github.io/OpenCore-Multiboot/', 'OpenCore 多系統開機'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/multiboot/bootstrap', '設定啟動選項'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/multiboot/bootcamp', '安裝 Boot Camp'],
                                ]
                            },
                            {
                                title: '其他',
                                collapsable: true,
                                children: [
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/misc/rtc', '修復 RTC'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/misc/msr-lock', '修復 CFG Lock'],
                                    ['https://sumingyd.github.io/OpenCore-Post-Install/misc/nvram', '模擬 NVRAM'],
                                ]
                            },
                        ]
                    },
                    {
                        title: '額外資訊',
                        collapsable: false,
                        sidebarDepth: 2,
                        children: [
                            '/extras/kaslr-fix',
                            '/extras/spoof',
                            '/extras/ventura',
                            ['https://github.com/eason329/OpenCore-Install-Guide/tree/master/clover-conversion', '從 Clover 轉換（建設中）'],
                            '/extras/smbios-support.md',
                        ]
                    },
                    {
                        title: '其他',
                        collapsable: false,
                        children: [
                            'CONTRIBUTING',
                            '/misc/credit',
                        ]
                    },
                ],
            },
        }

    },
    plugins: [
        ['@vuepress/back-to-top', true], //开启右下角返回顶层图标
        ['@vuepress/nprogress', true], //这个插件将会在你切换页面的时候，在顶部显示进度条。
        ['vuepress-plugin-smooth-scroll', true], //在你的 VuePress 站点中使用平滑滚动。
        ['vuepress-plugin-fulltext-search', true], //基于 Headers 的搜索插件
        ['@vuepress/medium-zoom', {
            selector: ".theme-succinct-content :not(a) > img",
            options: {
                background: 'var(--bodyBgColor)'
            }
        }
        ], //这个插件将会使你的图片支持点击缩放。
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }
        ], //页面滚动时自动激活侧边栏链接的插件
    ]
}
