# 🧩 安装客户端

你完成所有准备步骤！接下来安装客户端.

## 前置环境

客户端安装部分使用到的压缩软件为**Bandizip**，推荐使用.

### 检测配置是否达标（PC平台）

|             | 最低配置                                     | 推荐配置                                 | 畅玩配置                             |
| :---------- | :------------------------------------------- | :--------------------------------------- | :----------------------------------- |
| CPU         | i5-2500K/E3-1220v3、R5-1600或同等性能CPU     | i3-10代、R5-5000系或同等/更高性能CPU     | i5-12代、R9-5000系或同等/更高性能CPU |
| 内存/RAM    | DDR3 2333Mhz 6G                              | DDR4 3600Mhz 16G                         | DDR5 4800Mhz 24G                     |
| GPU         | GTX960/AMD Radeon HD 7000S或同等性能GPU      | GTX1060Ti/AMD RX6500XT或同等/更高性能CPU | RTX20系/AMD RX 6600                  |
| 操作系统/OS | Windows10及以上/Linux任意发行版 64位操作系统 | Windows11 x64/Fedora42/Ubuntu24          | Windows11 x64                        |

**macOS与32位操作系统暂不支持**

### 检测配置是否达标（Android/iPhone/iPad）

|             | 最低配置                                | 推荐配置                                | 畅玩配置                                |
| :---------- | :-------------------------------------- | :-------------------------------------- | :-------------------------------------- |
| SoC         | 骁龙7Gen2/天玑8200/A13或同等性能CPU     | 骁龙8+/天玑9000/A16或同等/更高性能CPU   | 骁龙8Gen3/天玑9300/M1或同等/更高性能CPU |
| 内存/RAM    | 12G                                     | 16G                                     | 24G                                     |
| 启动器      | FCL/Zaith(Android)、Pojav(iPhone、iPad) | FCL/Zaith(Android)、Pojav(iPhone、iPad) | FCL/Zaith(Android)、Pojav(iPhone、iPad) |
| 操作系统/OS | Android 12、iOS/iPadOS 14               | Android 13、iOS/iPadOS 16               | Android 15、iOS/iPadOS 18               |

**移动端客户端制作中 2025.1.19**

### 检测配置是否达标（小米/Windows on ARM）

|      | 最低配置           | 推荐配置             | 畅玩配置 |
| :--- | :----------------- | :------------------- | :------- |
| 机型 | 小米8 [dipper] 845 | 小米平板5 [nabu] 860 | /        |

参考[设备支持状态](https://www.kdocs.cn/l/cjI6xbkJFxs2?f=201)
**使用刷机方法刷至Windows on ARM并运行MC客户端应该是最后才考虑的方法，否则我们并不推荐你这样做！**

### 安装JDK17环境

![img](https://lfs.k.topthink.com/lfs/9dd2b6768611900f8ef42ad4c0768ed18f52d5395b4d89309d64f5f85a1ac129.dat)

下载`ZuluJDK-17.msi`并双击启动安装程序.

![img](https://lfs.k.topthink.com/lfs/85afe803a1960a072661c71732d9813a5a36229deecaf2ceef0d530154b27426.dat)

一直点击`Next`,到最后点击`Finish` 即可完成安装。

### 下载/安装客户端

![img](https://lfs.k.topthink.com/lfs/b45cac993ed0388df36be2e11afd7e1a22e293d9a6891b100e10b9676320c2cf.dat)

下载`枫叶源AutumnCraft x.x.x.mrpack`并右键

![img](https://lfs.k.topthink.com/lfs/5e5458caf4fd99597bc13148c3937128611c23dcf66fbbb95e7ad751c0978907.dat) 点击`打开所在文件夹`备用.

随后打开HMCL或者PCL启动器

### HMCL

为惯用HMCL启动器者所写.

#### 安装客户端

![img](https://lfs.k.topthink.com/lfs/e15f8411cea3e6d1d80bd6484d5fcc2ca22e81268225165f6a6f5c3ffc7a83d4.dat)

将`枫叶源AutumnCraft x.x.x.mrpack`拖到HMCL启动器的空白处.

![img](https://lfs.k.topthink.com/lfs/5377228a7f4fe95c861e4496ebd620e3350e9af743c8bfa3e9f6fc9f2346883b.dat)

点击`安装` 等待安装完成.

#### 使用LittleSkin登录

![img](https://lfs.k.topthink.com/lfs/725a0b8a79383e1300bba3af39eb66e8d7d3bd91284229abfd9fb448f3012aba.dat)

![img](https://lfs.k.topthink.com/lfs/b49dfcefe8a214d13cfb58793fe7f10cf237abe5d1b6ca165a99cc1f8101a0b4.dat)

填写你在LittleSkin的账户和密码，点击`登录`即可.

#### 添加JVM参数

![img](https://lfs.k.topthink.com/lfs/c40ace1178cb9362e8953820fc9e384a72f7453a5bc2c87a394d6a5dbb8debf7.dat)

![img](https://lfs.k.topthink.com/lfs/5e13ba6b1288d0db00de028f3faff4f0ea402cfb390a7b4a70a83bc27a7c3395.dat)

![img](https://lfs.k.topthink.com/lfs/891362aa94953c7856dc46521f3e126ca72801fcab4927b2fa27a3ca1e7e08ba.dat)

在“Java 虚拟机参数”中 填入 `-javaagent:mcpatch-c/mcpatch-loader-v2.jar -javaagent:dac-agent-7.1.90.jar`

#### 完成！

返回主页，点击`启动游戏`！

### PCL

为惯用PCL启动器者所写.

#### 安装客户端

![img](https://lfs.k.topthink.com/lfs/77115d9d4308112d90094ce36a9e16eaafa4ba8ed3b3ed1734003524143795c9.dat)

将`枫叶源AutumnCraft x.x.x.mrpack`拖到PCL启动器的空白处.

随后PCL会开始安装.

#### 使用LittleSkin登录

单击 版本选择，找到枫叶源AutumnCraft客户端

![img](https://lfs.k.topthink.com/lfs/1818df3aad8afd03714b02540b4f126f4627dc5e84dfc700c9be7ff3381e7701.dat)

如图所示，单击 设置

![img](https://lfs.k.topthink.com/lfs/3c9267f9c87327eb56ad471b4fda65e1aac140420f4c090ccf0c358550274a2b.dat)

如图所示，单击 设置

![img](https://lfs.k.topthink.com/lfs/0f1fcdd84d58782db3f0834534828818edbe91d51f4a1a799555bfb580ff4a01.dat)

滑倒最底下 如图所示 依次单击1️⃣2️⃣3️⃣

![img](https://lfs.k.topthink.com/lfs/0d4bad1dd10e01c00ab4d0bba03ff64bd20e292f419db35fa3bed220fce267bb.dat)
回到界面后输入你在LittleSkin注册的邮箱和密码.

#### 添加JVM参数

![img](https://lfs.k.topthink.com/lfs/699345dcaede48228bf1a86483aab2ce0a74e3eb1b66279b2f55f37eee9ab5c7.dat)

![img](https://lfs.k.topthink.com/lfs/d1d96a2ae4bf284cb8b2965bd213f3d7ba00300bbaa9dad47c3c35daea6c514e.dat)

![img](https://lfs.k.topthink.com/lfs/c6fcc98dc0e0d778f5bf24b9eb202467d56b200141bde31fd6752cbcc20482b4.dat)

在“Java 虚拟机参数”中 填入 `-javaagent:mcpatch-c/mcpatch-loader-v2.jar -javaagent:dac-agent-7.1.90.jar`

#### 完成！

返回主页，点击`启动游戏`！

### 一些调整.

### 调整语言

如果你发现你的Minecraft语言为英文，点击左上角语言按钮调整.
![img](https://lfs.k.topthink.com/lfs/d2e372173aed66f3bf02a73443684b59ef5ae1093b461c148c60028da5b3030d.dat)

### 汉化

打开资源包界面

![img](https://lfs.k.topthink.com/lfs/4842b6433c554280c39281abc55fb6262547ae558c79527cc01c7fb95fda27e3.dat)

将汉化包应用，点击完成.