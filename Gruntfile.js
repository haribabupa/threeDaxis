module.exports=function(grunt){
    
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        doPrint:{
            main:{
                pName:"Hello grunt : <%=pkg.name + ' v' + pkg.version %>"
            }
        },
        exec:{
            create:{
                command:'cordova create <%=pkg.name.toLowerCase()%> <%=pkg.base_id + "." + pkg.name%> <%=pkg.name.toLowerCase()%>',
            },
            addPlugins:{
                cwd:'<%=pkg.name.toLowerCase()%>',
                command:[
                    'cordova plugin add org.apache.cordova.device-motion',
                    'echo Plugins Added'
                ].join('&&')
            },            
            prepare:{
                cwd:'<%=pkg.name.toLowerCase()%>',
                command:'cordova prepare android'
            },
            build:{
                cwd:'<%=pkg.name.toLowerCase()%>',
                command:'cordova build android'
            },
            install:{
                cwd:'<%=pkg.name.toLowerCase()%>\\platforms\\android\\ant-build',
                command:'adb -d install CordovaApp-debug.apk'
            },
            destribute:{
                cwd:'<%=pkg.name.toLowerCase()%>\\platforms\\android\\ant-build',
                command:[
                    'echo <%=pkg.destribute%>theApp.apk',
                    'copy CordovaApp-debug.apk <%=pkg.destribute%>theApp.apk'
                ].join('&&')
            }
        }
        
    })

    grunt.loadNpmTasks('grunt-exec');
    
    grunt.registerTask('create', [
        'exec:create',
        'exec:addPlugins'
    ]);
    grunt.registerTask('deploy', [
        'exec:prepare',
        'exec:build',
        'exec:destribute'
    ]);
}