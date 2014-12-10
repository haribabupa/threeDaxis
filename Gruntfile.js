module.exports=function(grunt){
    
    grunt.initConfig({
        doPrint:{
            main:{
                pName:"Hello grunt"
            }
        }
    })
    
    grunt.registerMultiTask('doPrint', 'This is a sample before actual', function (){
        console.log(this.data.pName);
        
    });
}