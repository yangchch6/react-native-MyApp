##react-native-IMApp
react native环境搭建，基于win系统

软件安装
==========

1、安装Java
-----------
> 这里需要注意对环境变量的设置，可以根据java -version来检测一下。最好安装JDK1.8以上版本，低版本安装应用时会有Bug。

2、安装SDK
-----------
> 这里需要注意设置环境变量ANDROID\_HOME：Android SDK Manager的位置 例如：（ANDROID\_HOME=&gt; E:\\Android\\sdk）设置环境变量PATH：例如：（PATH=&gt; %ANDROID\_HOME%\\tools;%ANDROID\_HOME%\\platform-tools）

####Android SDK环境变量配置

>https://blog.csdn.net/qq_39284848/article/details/79770142

3、安装Node
-------------

> 基于js的，node.js轻量级的Web服务器，想要使React Native跑起来需要安装node， 如果没有安装node.js，先去官网安装node.js,最好是4.1以上版本
>
> 下载地址：https://nodejs.org/en/
>
> 下载node.js，找好对应的版本，然后去安装就可以了。
>
> 大家可以通过node -v的命令来测试NodeJS是否安装成功
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/node.png?raw=true"/>

4、安装Git
-----------
> 安装react-native需要用到git，如果没有配置git，需要先下载对应的客户端，然后将git加入path环境变量即可
>
> 下载地址：https://git-for-windows.github.io/
>
> 安装：
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/git.png?raw=true" width="380" height="272"/>
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/git2.png?raw=true" width="380" height="272"/>

5、安装react-native命令行工具react-native-cli
------------------------------------------

> git配置完成后可以clone React-native-cli了，建议大家到将react-native-cli克隆到某个盘，不要在c盘直接clone

1.  ### 在命令行中进入你希望RN安装的目录

2.  ### 输入git clone

> https://github.com/facebook/react-native.git，等待下载
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture1.png?raw=true" />
>
> clone成功后：
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture2.png?raw=true" width="553" height="320"/>

3.  ### 进入刚刚目录下的react-native目录下的react-native-cli目录

> 输入npm install –g
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture3.png?raw=true" width="553" height="320"/>
>
> 安装好之后，命令行下就有react-native命令了

运行项目
==========

1、创建RN项目
------------
>进入你希望创建项目的目录后，输入react-native init MyApp，等待一段时间（较慢）
>
>当前RN版本（0.54.2）
>
>生成项目的目录结构如下，用init命令生成的项目目录只有一个index.js，而之前的版本（0.49以下）是有index.android.js和index.ios.js
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture5.png?raw=true"/>
>
>现在的版本运行react-native start可能会报错
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture4.png?raw=true"/>
>
>可以换用其它版本初始化项目
>
>进入你希望创建项目的目录后，输入react-native init MyApp --version 0.44.2，等待一段时间
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture6.png?raw=true"/>
>
>成功后：
>
><img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture7.png?raw=true" />
>
>目录结构：
>
><img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture8.png?raw=true" />

2、运行package
-----------

> 在命令行中进入项目目录，输入react-native start，等待一段时间：
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture9.png?raw=true"/>
>
> 这时候可以用浏览器访问>http://localhost:8081/index.android.bundle?platform=android
>如果可以访问表示服务器端已经可以了。
>
><img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/image18.png?raw=true" width="553" height="400" />

3、运行项目
------------

> 此时一定要记着把android手机用USB连接到电脑上，而且手机需要调成开发者模式，并打开USB调试
>
> 可以运行adb devices确认设备是否成功连接
>
><img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture20.png?raw=true" width="579" height="130"/>
>
> 刚刚运行package的命令行不要关闭，重新启动一个新的命令行
>
> 进入项目目录，输入react-native run-android
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture10.png?raw=true"/>
>
>等待运行(如果是第一次运行，首先会下载gradle，时间较长)
>
>如果安装错误:Gradle的编译版本过高,不兼容部分Android 5.0+手机,需要降低版本为1.2
>
>  <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture11.png?raw=true"/>
>
>解决方法：降低gradle的build版本。
>
>打开项目,修改最外层的build.gradle配置，将'com.android.tools.build:gradle'的版本改为1.2.0 ，重新运行react-native run-android命令。
>
><img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture12.png?raw=true" width="560" height="155"/>
>
>如果还是会报错，需要重新设置Gradle的Wrapper,修改为2.2版本
>
><img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture18.png?raw=true" width="553" height="250"/>
>
>解决方法：修改Gradle的Wrapper版本，需要修改android/gradle/wrapper/gradle-wrapper.properties文件，
>
>distributionUrl=https\://services.gradle.org/distributions/gradle-2.2-all.zip
><img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture19.png?raw=true" width="573" height="155"/>
>
>重新运行react-native run-android
>
>运行成功后如下图所示，至此MyApp就已成功安装到手机上。
>
><img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture13.png?raw=true"/>

4、第一次打开手机肯定报错
---------------
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture14.png?raw=true" width="309" height="547" />
>
> 这时候我们摇一摇手机，点击Dev Settings后，点击Debug server host & port for device,设置IP和端口
>
> “摇一摇”这个动作在模拟器可以用ctrl+M (Menu)来调出Dev setting菜单。
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture15.png?raw=true" width="309" height="547" />
>
> 这里的IP是电脑的IP，不知道的可以在命令行中输入ipconfig进行查询，端口号固定8081
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture16.png?raw=true" width="222" height="394" />
>
> 设置完成后，回到空白页面，再次摇一摇手机，选择Reload JS，程序就运行起来，出现Welcome to React Native！
>
> <img src="https://github.com/yangchch6/react-native-MyApp/blob/master/screenshots/picture17.png?raw=true" width="358" height="553" />
>
> **到此Andorid开发环境已经搭建完毕**