var leftNumber=[1,7,13,19,25,31,37,43,49,55,61,67,73,79,85,91,97,103,109,115,121,127,133,139,145,151,157,163,169,175,181,187,193,199,205,211,217,223,229,235,241,247,253,259,265,271,277,283,289,295,301,307,313,319,325,331,337,343,349,355,361,367,373,379,385,391,397,403,409,415,421,427,433,439,445,451,457,463,469,475,481,487,493,499,505,511,517,523,529,535,541,547,553,559,565,571,577,583,589,595];
var rightNumber=[6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198,204,210,216,222,228,234,240,246,252,258,264,270,276,282,288,294,300,306,312,318,324,330,336,342,348,354,360,366,372,378,384,390,396,402,408,414,420,426,432,438,444,450,456,462,468,474,480,486,492,498,504,510,516,522,528,534,540,546,552,558,564,570,576,582,588,594,600];
var p2=[2,8,14,20,26,32,38,44,50,56,62,68,74,80,86,92,98,104,110,116,122,128,134,140,146,152,158,164,170,176,182,188,194,200,206,212,218,224,230,236,242,248,254,260,266,272,278,284,290,296,302,308,314,320,326,332,338,344,350,356,362,368,374,380,386,392,398,404,410,416,422,428,434,440,446,452,458,464,470,476,482,488,494,500,506,512,518,524,530,536,542,548,554,560,566,572,578,584,590,596];
var p3=[3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99,105,111,117,123,129,135,141,147,153,159,165,171,177,183,189,195,201,207,213,219,225,231,237,243,249,255,261,267,273,279,285,291,297,303,309,315,321,327,333,339,345,351,357,363,369,375,381,387,393,399,405,411,417,423,429,435,441,447,453,459,465,471,477,483,489,495,501,507,513,519,525,531,537,543,549,555,561,567,573,579,585,591,597];
var p4=[4,10,16,22,28,34,40,46,52,58,64,70,76,82,88,94,100,106,112,118,124,130,136,142,148,154,160,166,172,178,184,190,196,202,208,214,220,226,232,238,244,250,256,262,268,274,280,286,292,298,304,310,316,322,328,334,340,346,352,358,364,370,376,382,388,394,400,406,412,418,424,430,436,442,448,454,460,466,472,478,484,490,496,502,508,514,520,526,532,538,544,550,556,562,568,574,580,586,592,598];
var p5=[5,11,17,23,29,35,41,47,53,59,65,71,77,83,89,95,101,107,113,119,125,131,137,143,149,155,161,167,173,179,185,191,197,203,209,215,221,227,233,239,245,251,257,263,269,275,281,287,293,299,305,311,317,323,329,335,341,347,353,359,365,371,377,383,389,395,401,407,413,419,425,431,437,443,449,455,461,467,473,479,485,491,497,503,509,515,521,527,533,539,545,551,557,563,569,575,581,587,593,599];


//splitTnoByType([1,2,3,7]);

function splitTnoByType(tnoList){
  var  randomTnoType=new Array();//reset
  var  haftsheetTnoType=new Array();//reset
  var  fullsheetTnoType=new Array();//reset

    var randomTktDiv=document.getElementById("randomTktDiv");
    var haftsheetTktDiv=document.getElementById("haftsheetTktDiv");
    var fullsheetTktDiv=document.getElementById("fullsheetTktDiv");

   console.log("current ticket list-->"+tnoList);

   

    for(var i=0;i<tnoList.length;i++){
var tnoPos=checkTnoPos(tnoList[i]);
console.log(tnoList[i]+'-->pos:'+tnoPos)
var tnoType=null;

if(tnoPos=="left"){
if(tnoList.indexOf(tnoList[i]+1)!==-1 && tnoList.indexOf(tnoList[i]+2)!==-1){//------------------detect haftsheet bonus
tnoType="haftsheet";
console.log("detect "+tnoList[i]+" as ->haftsheet,tno pos=>"+tnoPos+" ,s1");
}
}else if(tnoPos=="right"){
    if(tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]-2)!==-1){
        tnoType="haftsheet";
        console.log("detect "+tnoList[i]+" as ->haftsheet,tno pos=>"+tnoPos+" ,s2");
        }
}else{
    

    if(tnoPos=="p2" && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]+0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1){//case where num is at front e.g [num,4,5]
        tnoType="haftsheet";
        console.log("detect "+tnoList[i]+" as ->haftsheet with "+(tnoList[i]-1)+":"+(tnoList[i]-0)+":"+(tnoList[i]+1)+",tno pos=>"+tnoPos+" ,s3");
        }else  if(tnoPos=="p2" && tnoList.indexOf(tnoList[i]-0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1 && tnoList.indexOf(tnoList[i]+2)!==-1){//case where num is at front e.g [num,4,5]
            tnoType="haftsheet";
            console.log("detect "+tnoList[i]+" as ->haftsheet with "+(tnoList[i]-0)+":"+(tnoList[i]+1)+":"+(tnoList[i]+2)+",tno pos=>"+tnoPos+" ,s4");
            }

            if(tnoPos=="p3" && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]+0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1){//case where num is at front e.g [num,4,5]
                tnoType="haftsheet";
                console.log(JSON.stringify(tnoList));
                console.log("detect "+tnoList[i]+" as ->haftsheet"+",tno pos=>"+tnoPos+" ,s5");
                }else  if(tnoPos=="p3" && tnoList.indexOf(tnoList[i]-0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1 && tnoList.indexOf(tnoList[i]+2)!==-1){//case where num is at front e.g [num,4,5]
                    tnoType="haftsheet";
                    console.log("detect "+tnoList[i]+" as ->haftsheet"+",tno pos=>"+tnoPos+" ,s6");
                    }else if(tnoPos=="p3" && tnoList.indexOf(tnoList[i]-2)!==-1 && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]+0)!==-1){//case where num is at front e.g [num,4,5]
                        tnoType="haftsheet";
                        console.log("detect "+tnoList[i]+" as ->haftsheet"+",tno pos=>"+tnoPos+" ,s7");
                        }

                        if(tnoPos=="p4" && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]+0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1){//case where num is at front e.g [num,4,5]
                            tnoType="haftsheet";
                            console.log(JSON.stringify(tnoList));
                            console.log("detect "+tnoList[i]+" as ->haftsheet"+",tno pos=>"+tnoPos+" ,s5");
                            }else  if(tnoPos=="p4" && tnoList.indexOf(tnoList[i]-0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1 && tnoList.indexOf(tnoList[i]+2)!==-1){//case where num is at front e.g [num,4,5]
                                tnoType="haftsheet";
                                console.log("detect "+tnoList[i]+" as ->haftsheet"+",tno pos=>"+tnoPos+" ,s6");
                                }else if(tnoPos=="p4" && tnoList.indexOf(tnoList[i]-2)!==-1 && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]+0)!==-1){//case where num is at front e.g [num,4,5]
                                    tnoType="haftsheet";
                                    console.log("detect "+tnoList[i]+" as ->haftsheet"+",tno pos=>"+tnoPos+" ,s7");
                                    }

                        if(tnoPos=="p5" && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]-0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1){//case where num is at front e.g [num,4,5]
                            tnoType="haftsheet";
                            }else  if(tnoPos=="p5" && tnoList.indexOf(tnoList[i]-2)!==-1 && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]+0)!==-1){//case where num is at front e.g [num,4,5]
                                tnoType="haftsheet";
                                }
        
        
      

}

if(tnoPos=="left"){//fullsheet check
    if( tnoList.indexOf(tnoList[i]+0)!==-1 && tnoList.indexOf(tnoList[i]+2)!==-1 && tnoList.indexOf(tnoList[i]+3)!==-1 && tnoList.indexOf(tnoList[i]+4)!==-1 && tnoList.indexOf(tnoList[i]+5)!==-1){//------------------detect haftsheet bonus
    tnoType="fullsheet";
    console.log("detect "+tnoList[i]+" as left pos->fullsheet");
    }
    }else if(tnoPos=="right"){
        if(tnoList.indexOf(tnoList[i]-0)!==-1 && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]-2)!==-1 && tnoList.indexOf(tnoList[i]-3)!==-1 && tnoList.indexOf(tnoList[i]-4)!==-1 && tnoList.indexOf(tnoList[i]-5)!==-1){
            tnoType="fullsheet";
            console.log("detect "+tnoList[i]+" as right pos->fullsheet");
            }
    }else{
        if(tnoPos=="p2" && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]-0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1 && tnoList.indexOf(tnoList[i]+2)!==-1 && tnoList.indexOf(tnoList[i]+3)!==-1 && tnoList.indexOf(tnoList[i]+4)!==-1){
            tnoType="fullsheet";
            console.log("detect "+tnoList[i]+" as -2nd pos>fullsheet");
            }
            if(tnoPos=="p3" && tnoList.indexOf(tnoList[i]-2)!==-1 && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]-0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1 && tnoList.indexOf(tnoList[i]+2)!==-1 && tnoList.indexOf(tnoList[i]+3)!==-1){
                tnoType="fullsheet";
                console.log("detect "+tnoList[i]+" as 3rd pos->fullsheet");
                }
                if(tnoPos=="p4" && tnoList.indexOf(tnoList[i]-3)!==-1 && tnoList.indexOf(tnoList[i]-2)!==-1 && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]+0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1 && tnoList.indexOf(tnoList[i]+2)!==-1){
                    tnoType="fullsheet";
                    console.log("detect "+tnoList[i]+" as 4rd pos->fullsheet");
                    }
                    if(tnoPos=="p5" && tnoList.indexOf(tnoList[i]-4)!==-1 && tnoList.indexOf(tnoList[i]-3)!==-1 && tnoList.indexOf(tnoList[i]-2)!==-1 && tnoList.indexOf(tnoList[i]-1)!==-1 && tnoList.indexOf(tnoList[i]+0)!==-1 && tnoList.indexOf(tnoList[i]+1)!==-1){
                        tnoType="fullsheet";
                        console.log("detect "+tnoList[i]+" as 5th pos with last item as "+(tnoList[i]+1)+"->fullsheet");
                        }
                    
    }

if(tnoType=="haftsheet"){//------------store according to category
    haftsheetTnoType[haftsheetTnoType.length]=tnoList[i];
}else if(tnoType=="fullsheet"){
    fullsheetTnoType[fullsheetTnoType.length]=tnoList[i];
}else{
randomTnoType[randomTnoType.length]=tnoList[i];
}
    }

console.log("Random tno ->"+JSON.stringify(randomTnoType));
console.log("Haftsheet tno->"+JSON.stringify(haftsheetTnoType));


//rendering the ticket
randomTktDiv.innerHTML="";
for(var i=0;i<randomTnoType.length;i++){
randomTktDiv.innerHTML=randomTktDiv.innerHTML+'<button class="roundBtn">'+randomTnoType[i]+'</button>';
}


haftsheetTktDiv.innerHTML="";
for(var i=0;i<haftsheetTnoType.length;i++){
haftsheetTktDiv.innerHTML=haftsheetTktDiv.innerHTML+'<button class="roundBtn">'+haftsheetTnoType[i]+'</button>';
}

fullsheetTktDiv.innerHTML="";
for(var i=0;i<fullsheetTnoType.length;i++){
fullsheetTktDiv.innerHTML=fullsheetTktDiv.innerHTML+'<button class="roundBtn">'+fullsheetTnoType[i]+'</button>';
}


}
    

function checkTnoPos(num){
   // console.log(num);
var pos;

if(leftNumber.includes(num)){
pos="left";
}else{
    if(rightNumber.includes(num)){
        pos="right";
        }else{
           //its middle
           if(p2.includes(num)){
pos="p2";
           }else if(p3.includes(num)){
            pos="p3";
           }else if(p4.includes(num)){
            pos="p4";
           }else if(p5.includes(num)){
            pos="p5";
           }
        }
}

return pos;

//console.log("pos of "+num+" ->"+pos);


}