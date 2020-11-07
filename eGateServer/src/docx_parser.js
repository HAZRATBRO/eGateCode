const StreamZip = require('node-stream-zip')
const c = require('cheerio') 
// const xml2js = require('xml2js')

    var  open= function(filePath) {
        return new Promise(
            function(resolve, reject) {
                const zip = new StreamZip({
                    file: filePath,
                    storeEntries: true
                })

                zip.on('ready', () => {
                    var chunks = []
                    var content = ''
                    zip.stream('word/document.xml', (err, stream) => {
                        if (err) {
                            reject(err)
                        }
                        stream.on('data', function(chunk) {
                            chunks.push(chunk)
                        })
                        stream.on('end', function() {
                            content = Buffer.concat(chunks)
                            zip.close()
                            resolve(content.toString())
                        })
                    })
                })
            }
        )
    }  
   var filter = function(arr){
       for(let i = 0 ; i < arr.length ; i++){
           if (arr[i].search(/pic:pic xmlns/)){
               console.log("Found an image");
               return "img";
           }
       }
   }
   var extract = function(filePath){
        return new Promise(
            function(resolve, reject) {
                 open(filePath).then(function (res, err) {
                    if (err) { 
                        reject(err) 
                    }
                    var arr = new Array()
                    var body = ''
                    var re = /<w:t|<pic:pic/
                    var imgNum = 0
                    var components = res.toString().split(re)
                    console.log(components.length)    
                    for(var i=0;i<components.length;i++) {
                        
                        var tags = components[i].split('>')
                        var content = tags[1].replace(/<.*$/,"")
                        // console.log(tags)
                        // console.log(content)
                        if(filter(content) === "img"){
                            arr.push("img"+imgNum);
                            imgNum++;
                            console.log(imgNum)
                        }
                        if(content.search(/\r\n/) == -1){
                            arr.push(content)
                        }
                    }
                     console.log(arr)
                    resolve(body)
                })
            }
        )
    }

  var xmlExtract = function(filePath){
      return new Promise(
          function(resolve , reject){
              open(filePath).then(function(res , err){
                  if(err){
                      reject(err)
                  }
                  var body = res.toString()
                   var $ = c.load(body , {
                       xmlMode:true,
                   })
                   var pics = $('pic\\:pic');
                   var texts = $('w\\:t');
                   var w_s = -1;
                   var response = new Object();
                   response.Solution = '';
                   var results = new Array();
                   var x = -1;
                   texts.each(function(){
                    // console.log(texts.text())
                    // Wait for tags
                if(x == -1){        
                    switch($(this).text()){
                        case "Subject":
                            w_s = 0;
                            x = 0;
                            break;
                        case "Topic":
                            w_s = 1;
                            x = 0;
                            break;
                        case "Correct Answer":
                             w_s = 2;
                             x = 0;
                             break;
                        case "Solution":
                            w_s = 3;
                            x = 0;
                            break;
                        case "Video Solution":
                            w_s = 4;
                            x = 0;
                            break;
                         
                    } 
                    //Change Question Code
                    // if(isNaN($(this).text()) == false){
                    //     console.log("Found Question");
                    //     w_s = 5;
                    // }
                }    
                 else{
                    //Check for tags data
                    switch(w_s){
                        case 0:
                            response.Subject = $(this).text();
                            w_s= -1;
                            x = -1;
                            break;
                        case 1:
                            response.Topic = $(this).text();
                            w_s= -1;
                            x = -1;
                            break;
                        case 2:
                            response.Answer = $(this).text();
                            w_s= -1;
                            x = -1;
                             break;
                        case 3:
                            //Check For Image in Solution
                            // if ($(this).)
                            if($(this).text() == "Video Solution"){
                                w_s = 4; //Set to video_solution
                                x = 0;
                                break;
                            }
                            response.Solution += $(this).text();
                            //not break untill Video solution row found
                            // breaking condition reached
                            
                            break;
                        case 4:
                            response.Video_Solution = $(this).text();
                            w_s= -1;
                            x = -1;
                            break;
                        case 5:
                            response.Question = $(this).text();
                            w_s= -1;
                            x = -1;
                            break;
             
                }   
            }
                //Reached the end now push back
                if(response.Video_Solution !== undefined ){
                    results.push(response);
                    response = {};
                    response.Solution = ''
                }
                
                       
                    //    console.log($(this).parent().html())
                    })
                console.log(response) 
                console.log(results)    
                //    console.log($('pic\\:pic').length)
                //    console.log($('w\\:t').text())

              })
          }
      )
  }


 

xmlExtract("C:\\Users\\a640506\\Desktop\\eGateServer\\Subject.docx")
