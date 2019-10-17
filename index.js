const fs = require('fs');

function all(){
    var ch = '';
    var text;
    var sertID = ['auto','break','case','char','const','continue','default','do','double','else','enum','exrtern','float','for','goto','if','include','int','long','register','return','short','signed','sized','sizeof','static','stract','switch','typeof','stdio','union','unsigned','void','volatile','while'];
    var dotID = ['+','-','*','/','=','\\','|','`','~','!','@','#','$','%','^','&','(',')','_','[',']','{','}',':',';','"','\'','<','>',',','.','?','!=','&&','*=','-=','||','<<','>>','/=','==','++','--','/n'];
    var sertConst = [];
    fs.readFile('input.js', 'UTF-8', (err, data) => {
        text = data.toString().split('');
        for(var i = 0; i < text.length;){
            var strToken = '';
            ch = text[i];
            if((ch >= 'a' && ch <= 'z')||(ch >= 'A' && ch <= 'Z')) {
                while((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                    strToken += ch;
                    i += 1;
                    ch = text[i];
                }
                var tag = false;
                for(var j = 0; j < sertID.length; j++){
                    if(sertID[j] === strToken){
                        console.log('('+ (j+1) + ', ' + strToken + ')');
                        tag = true;
                        break;
                    }
                }
                if(!tag){
                    console.log('('+ 80 + ', ' + strToken + ')');
                   
                }
            }
            else if(ch >= '0' && ch <= '9') {
                while(ch >= '0' && ch <= '9') {
                    strToken += ch;
                    i += 1;
                    ch = text[i];
                }
                console.log('(81, ' + strToken + ')');
            }
            else{
                strToken += ch;
                i += 1;
                var tag_1 = false;
                for(var k = 0; k < dotID.length; k ++){
                    if( strToken === dotID[k] ){
                        var flag = '';
                        tag_1 = true;
                        flag = text[i];
                        if(flag && flag == '=' && strToken == '!'){
                            console.log('('+ 66 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '&' && strToken == '&'){
                            console.log('('+ 67 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '=' && strToken == '*'){
                            console.log('('+ 68 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '=' && strToken == '-'){
                            console.log('('+ 69 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '|' && strToken == '|'){
                            console.log('('+ 70 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '<' && strToken == '<'){
                            console.log('('+ 71 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '>' && strToken == '>'){
                            console.log('('+ 72 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '=' && strToken == '/'){
                            console.log('('+ 73 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '=' && strToken == '='){
                            console.log('('+ 74 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '+' && strToken == '+'){
                            console.log('('+ 75 + ', ' + strToken + flag + ')');
                            
                        }else if(flag && flag == '-' && strToken == '-'){
                            console.log('('+ 76 + ', ' + strToken + flag + ')');
                            
                        }
                        else if(flag && flag == '/' && strToken == '/'){
                            console.log('('+ 77 + ', ' + strToken + flag + ')');
                            
                        }
                        else if(flag && flag == '/' && strToken == 'r'){
                            console.log('('+ 78 + ', ' + strToken + flag + ')');
                            
                        }
                        else{
                             console.log('('+ (k+34) + ', ' + strToken + ')');
                             
                
                        }
                    }
                }
                if(!tag_1 && strToken != ' '){
                    if( strToken == '\n' ){
                        console.log('(78, ' + '\\' + 'n' + ')');
                        
                    }else if( strToken === '\r' ){
                        console.log('(79, ' + '\\' + 'r' + ')');
            
                    }else{
                        console.log(
                            new Error(`[Error] stray '${strToken}' in program`)
                        );
                    }
                }
            }
        }

    });
}

all();