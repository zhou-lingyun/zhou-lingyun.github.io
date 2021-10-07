(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{474:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"购买一个云服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#购买一个云服务器"}},[s._v("#")]),s._v(" 购买一个云服务器")]),s._v(" "),a("p",[s._v("不多赘述，自行上各大供应商去购买。")]),s._v(" "),a("h2",{attrs:{id:"服务器系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器系统"}},[s._v("#")]),s._v(" 服务器系统")]),s._v(" "),a("p",[s._v("我是用的是"),a("code",[s._v("CentOS")]),s._v("，以下内容均是建立在此基础上的。")]),s._v(" "),a("h2",{attrs:{id:"安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[s._v("#")]),s._v(" 安装nginx")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove nginx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载 nginx")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 nginx 服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx stop "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止 nginx 服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx restart "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启 nginx 服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx reload "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载配置，一般是在修改过 nginx 配置文件时使用。")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"上传博客文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传博客文件"}},[s._v("#")]),s._v(" 上传博客文件")]),s._v(" "),a("p",[s._v("可以使用我的脚本文件"),a("code",[s._v("shanya.ps1")]),s._v("或者"),a("code",[s._v("shanya.sh")]),s._v("：")]),s._v(" "),a("h3",{attrs:{id:"修改脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改脚本"}},[s._v("#")]),s._v(" 修改脚本")]),s._v(" "),a("code-group",[a("code-block",{attrs:{title:"shanya.ps1",active:""}},[a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"push"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -v -r -C ./docs/.vuepress/dist/ root@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的服务器IP"')]),s._v(":/home/blog/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("code-block",{attrs:{title:"shanya.sh"}},[a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"push"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -v -r -C ./docs/.vuepress/dist/ root@你的服务器IP:/home/blog/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])],1),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("一定要将"),a("code",[s._v("git")]),s._v("的远程仓库切换成自己的。")]),s._v(" "),a("p",[s._v("方法：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("删除我的")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" origin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("添加你的")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("你的项目地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注:项目地址形式为:https://gitee.com/xxx/xxx.git或者 git@gitee.com:xxx/xxx.git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])])]),s._v(" "),a("h3",{attrs:{id:"使用脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本"}},[s._v("#")]),s._v(" 使用脚本")]),s._v(" "),a("ul",[a("li",[s._v("windows客户端可以使用"),a("code",[s._v("PowderShell")]),s._v("执行"),a("code",[s._v("shanya.ps1")]),s._v("或者使用"),a("code",[s._v("git bash")]),s._v("执行"),a("code",[s._v("shanya.sh")]),s._v(".")]),s._v(" "),a("li",[s._v("Linux客户端可以使用终端执行"),a("code",[s._v("shanya.sh")]),s._v(".")])]),s._v(" "),a("h2",{attrs:{id:"配置nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[s._v("#")]),s._v(" 配置nginx")]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("nginx")]),s._v("配置文件，登录云服务器，执行"),a("code",[s._v("nano /etc/nginx/nginx.conf")])]),s._v(" "),a("p",[s._v("我的文件内容如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# For more information on configuration, see:\n#   * Official English Documentation: http://nginx.org/en/docs/\n#   * Official Russian Documentation: http://nginx.org/ru/docs/\n\nuser nginx;\nworker_processes auto;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\n\n# Load dynamic modules. See /usr/share/nginx/README.dynamic.\ninclude /usr/share/nginx/modules/*.conf;\n\nevents {\n\t# 设置并发量\n    worker_connections 65535;\n}\n\nhttp {\n\t# 开启gzip压缩，提高性能\n    gzip  on;\n    gzip_min_length  2k;\n    gzip_comp_level  6;\n    gzip_http_version 1.1;\n    gzip_types text/plain text/css text/javascriptapplication/json application/javascript application/x-javascriptapplication/xml;\n    gzip_vary on;\n    gzip_proxied any;\n    \n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile            on;\n    tcp_nopush          on;\n    tcp_nodelay         on;\n    keepalive_timeout   65;\n    types_hash_max_size 2048;\n\n    include             /etc/nginx/mime.types;\n    default_type        application/octet-stream;\n\n    # Load modular configuration files from the /etc/nginx/conf.d directory.\n    # See http://nginx.org/en/docs/ngx_core_module.html#include\n    # for more information.\n    include /etc/nginx/conf.d/*.conf;\n\n    server {\n        listen       80 default_server;\n        listen       [::]:80 default_server;\n        # 设置你的域名，若域名正在备案可以设置为服务器IP（server_name  xxx.xxx.xxx.xxx;）。\n        server_name  shanya.world www.shanya.world;\n        root         /usr/share/nginx/html;\n\n        # Load configuration files for the default server block.\n        include /etc/nginx/default.d/*.conf;\n        \n        # 开启缓存\n        location ~ .*\\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$\n        {\n            expires      7d;\n        }\n        \n        location ~ .*\\.(?:js|css)$\n        {\n            expires      7d;\n        }\n        \n        location ~ .*\\.(?:htm|html)$\n        {\n            add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";\n        }\n\n\t\t# 配置html文件目录(若使用我的脚本上传,则此处不用修改,否则修改为你自己的路径即可)\n        location / {\n\t\t        root /home/blog/dist/;\n        }\n\n        error_page 404 /404.html;\n            location = /40x.html {\n        }\n\n        error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n        }\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br")])]),a("h2",{attrs:{id:"设置ssl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置ssl"}},[s._v("#")]),s._v(" 设置SSL")]),s._v(" "),a("p",[s._v("下述链接为华为云服务器配置方法，其他服务器请自行去查找。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://support.huaweicloud.com/usermanual-scm/scm_01_0082.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("在Nginx服务器上安装SSL证书"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("每一次修改"),a("code",[s._v("/etc/nginx/nginx.conf")]),s._v("后需要检查语法和重启服务：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nginx -t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查语法")]),s._v("\nnginx -s reload\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])],1)}),[],!1,null,null,null);n.default=e.exports}}]);