module.exports=function(grunt){
    
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        doPrint:{
            main:{
                pName:"Hello grunt : <%=pkg.name + ' v' + pkg.version %>"
            }
        },
        app:{
            create:{
                
            }
        },
        exec:{
            echo_forme:{
                command:'echo HELLO HARI'
            },
            echo_cpath:{
                command:'%CD%'
            },
            create:{
                command:'cordova create <%=pkg.name.toLowerCase()%> <%=pkg.base_id + "." + pkg.name%> <%=pkg.name.toLowerCase()%>',
            }
        }
        
    })

    grunt.loadNpmTasks('grunt-exec');
    
    grunt.registerTask('sayhello', ['exec:echo_forme']);
    grunt.registerTask('getpath', ['exec:echo_cpath']);
    grunt.registerTask('create', ['exec:create']);
    
}