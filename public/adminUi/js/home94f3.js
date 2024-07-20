    var gameSettingJSON;
    var gameStatusJSON;

    var webTitleInp;
    
    var dateTimeInp;
    var totalTicketInp;
    var ticketPriceInp;
    var agentCommissionInp;
    var currencyInp;
    var websiteStatusInp;
    var bookingStatusInp;
    var saveGameBtn;

    var adminNameInp;
    var adminEmailInp;
    var adminPhoneInp;
    var adminWpLinkInp;
    var adminPassInp;
    var saveAdminInfoBtn;

    var secondHousefull;
    var thirdHousefull;

    var showTicketBtn;
    var showAgentBtn;

    var firstHousefull;
    var secondHousefull;
    var thirdHousefull;

    var editDataTable;

    var agentTicketTable;
    var ticketBlockDiv;

    var bookingWindowDiv;
    var booktBtn;

    var popWin1;

    var countDownBtn;
    var callStatusInp;
    var callIntervalInp;
    var gameDiv;

    var numBlockDiv;

    var hostNameInp;
    var createdDateInp;
    var renewDateInp;
    var renewBtn;
    

    var dividentType=["Full Sheet Bonus","Half Sheet Bonus","Bottom Line","Middle Line","Top Line","Box Bonus","Corner","Star","Early 5","Quick6","Quick7"];

    var totalHousefull=1;
    
    var popWin1Status="ticket";//there are two mode of popWin1 display->ticketDetails and agentDetails
    var edtTktMode=false;//its contain current displayed tno or agent id
    var activeTNO=null;
    var activeAgentId=null;
    var gameDateTime=null;
    var callInterrval=12000;

    var runGameBtn;

    var totalTicketInp2;
    var soldTicketInp;
    var haftsheetTicketInp;
    var fullsheetTicketInp;
    var leftTicketInp;
    var ticketPriceInp2;
    var agentCommissionInp2;
    var totalRevenueInp;
    var totalProfitInp;

    var dividentListDiv;

    var playerLinkInp;
    var adminLink2Inp;
    var agentLinkInp;

    var announceTa;
    var saveAnounceBtnInp;
    var searchKeyInp;

    var renderTitleBtn;
    var resetCallBtn;
    var resetTicketBtn;
    var resetAgentBtn;
    var loadBackupTicketBtn;
    var showCurrentTktBtn;
    var showCurrentWinnerBtn;
    var showLastTicketBtn;
    var showLastWinnerBtn;
    var showLastNumBtn;
    var showLastBusinessBtn;
    var showLastPayBtn;

    var renderGridDiv;
    var renderDiv;
    var downloadBtn;

    var printType;

    var payDiv;
    var payInfoBtn;
    var payStatusBtn;
    var completePayBtn;

    var payInfoJson;

    var FirstHousefullPrizeInp;
    var SecondHousefullPrizeInp;
    var ThirdHousefullPrizeInp;
    var FullSheetBonusPrizeInp;
    var HalfSheetBonusPrizeInp;
    var TopLinePrizeInp;
    var MiddleLinePrizeInp;
    var BottomLinePrizeInp;
    var BoxBonusPrizeInp;
    var CornerPrizeInp;
    var StarPrizeInp;
    var Early5PrizeInp;
    var Quick6PrizeInp;
    var Quick7PrizeInp;


    //--------------audio announcement
    var audioTitleTxt;
    var recordBtn;
    var announceBtn;

    var lastAudioAnnouncementId;


    var h,m,s;

    

    var currentSelectedTnoList=Array();

window.onload=()=>{
    //declare
    webTitleInp=document.getElementById("webTitleInp");

    dateTimeInp=document.getElementById("dateTimeInp");
    totalTicketInp=document.getElementById("totalTicketInp");
    ticketPriceInp=document.getElementById("ticketPriceInp");
    agentCommissionInp=document.getElementById("agentCommissionInp");
    currencyInp=document.getElementById("currencyInp");
    websiteStatusInp=document.getElementById("websiteStatusInp");
    bookingStatusInp=document.getElementById("bookingStatusInp");
    saveGameBtn=document.getElementById("saveGameBtn");

    adminNameInp=document.getElementById("adminNameInp");
    adminPassInp=document.getElementById("adminPassInp");
    adminEmailInp=document.getElementById("adminEmailInp");
    adminPhoneInp=document.getElementById("adminPhoneInp");
    adminWpLinkInp=document.getElementById("adminWpLinkInp");
    saveAdminInfoBtn=document.getElementById("saveAdminInfoBtn");

    secondHousefull=document.getElementById("Second Housefull");
    thirdHousefull=document.getElementById("Third Housefull");

    showTicketBtn=document.getElementById("showTicketBtn");
    showAgentBtn=document.getElementById("showAgentBtn");

    firstHousefull=document.getElementById("First Housefull");
    secondHousefull=document.getElementById("Second Housefull");
    thirdHousefull=document.getElementById("Third Housefull");

    bookingWindowDiv=document.getElementById("bookingWindowDiv");
    booktBtn=document.getElementById("booktBtn");

    ticketBlockDiv=document.getElementById("ticketBlockDiv");

    popWin1=document.getElementById("popWin1");

    editDataTable=document.getElementById("editDataTable");

    agentTicketTable=document.getElementById("agentTicketTable");

    $dataBtn=document.getElementById("$dataBtn");

    countDownBtn=document.getElementById("countDownBtn");
    callStatusInp=document.getElementById("callStatusInp");
    callIntervalInp=document.getElementById("callIntervalInp");
    gameDiv=document.getElementById("gameDiv");

    numBlockDiv=document.getElementById("numBlockDiv");

    hostNameInp=document.getElementById("hostNameInp");
    createdDateInp=document.getElementById("createdDateInp");
    renewDateInp=document.getElementById("renewDateInp");
    renewBtn=document.getElementById("renewBtn");

    runGameBtn=document.getElementById("runGameBtn");


    totalTicketInp2=document.getElementById("totalTicketInp2");
    soldTicketInp=document.getElementById("soldTicketInp");
    haftsheetTicketInp=document.getElementById("haftsheetTicketInp");
    fullsheetTicketInp=document.getElementById("fullsheetTicketInp");
    leftTicketInp=document.getElementById("leftTicketInp");
    ticketPriceInp2=document.getElementById("ticketPriceInp2");
    agentCommissionInp2=document.getElementById("agentCommissionInp2");
    totalRevenueInp=document.getElementById("totalRevenueInp");
    totalProfitInp=document.getElementById("totalProfitInp");

    dividentListDiv=document.getElementById("dividentListDiv");

    playerLinkInp=document.getElementById("playerLinkInp");
    adminLink2Inp=document.getElementById("adminLink2Inp");
    agentLinkInp=document.getElementById("agentLinkInp");

    announceTa=document.getElementById("announceTa");
    saveAnounceBtnInp=document.getElementById("saveAnounceBtnInp");
    searchKeyInp=document.getElementById("searchKeyInp");

    renderTitleBtn=document.getElementById("renderTitleBtn");
    resetCallBtn=document.getElementById("resetCallBtn");
    resetTicketBtn=document.getElementById("resetTicketBtn");
    resetAgentBtn=document.getElementById("resetAgentBtn");
    loadBackupTicketBtn=document.getElementById("loadBackupTicketBtn");
    showCurrentTktBtn=document.getElementById("showCurrentTktBtn");
    showCurrentWinnerBtn=document.getElementById("showCurrentWinnerBtn");
    showLastTicketBtn=document.getElementById("showLastTicketBtn");
    showLastWinnerBtn=document.getElementById("showLastWinnerBtn");
    showLastNumBtn=document.getElementById("showLastNumBtn");
    showLastBusinessBtn=document.getElementById("showLastBusinessBtn");
    showLastPayBtn=document.getElementById("showLastPayBtn");
    
    renderGridDiv=document.getElementById("renderGridDiv");
    renderDiv=document.getElementById("renderDiv");
    downloadBtn=document.getElementById("downloadBtn");

    payDiv=document.getElementById("payDiv");
    payInfoBtn=document.getElementById("payInfoBtn");
    payStatusBtn=document.getElementById("payStatusBtn");
    completePayBtn=document.getElementById("completePayBtn");

FirstHousefullPrizeInp=document.getElementById("First Housefull PrizeInp");
SecondHousefullPrizeInp=document.getElementById("Second Housefull PrizeInp");
ThirdHousefullPrizeInp=document.getElementById("Third Housefull PrizeInp");
FullSheetBonusPrizeInp=document.getElementById("Full Sheet Bonus PrizeInp");
HalfSheetBonusPrizeInp=document.getElementById("Half Sheet Bonus PrizeInp");
TopLinePrizeInp=document.getElementById("Top Line PrizeInp");
MiddleLinePrizeInp=document.getElementById("Middle Line PrizeInp");
BottomLinePrizeInp=document.getElementById("Bottom Line PrizeInp");
BoxBonusPrizeInp=document.getElementById("Box Bonus PrizeInp");
CornerPrizeInp=document.getElementById("Corner PrizeInp");
StarPrizeInp=document.getElementById("Star PrizeInp");
Early5PrizeInp=document.getElementById("Early 5 PrizeInp");
Quick6PrizeInp=document.getElementById("Quick6 PrizeInp");
Quick7PrizeInp=document.getElementById("Quick7 PrizeInp");


//audio announcement
audioTitleTxt=document.getElementById("audioTitleTxt");
recordBtn=document.getElementById("recordBtn");
announceBtn=document.getElementById("announceBtn");



    //---------------init
    getGameStatus();
    getTheme();
    filledNum();
    getGameSetting();
    getSoldTicket("all","gameSettingTable");
    getAdminInfo();
    getDivident();
    getAllTicket();
    autoLogin();
    getRenewJson();
    getBusinessInfo();
    loadLinkType();
    getAnouncement();

    checkLastPay();

}


setInterval(()=>{
    checkLastPay();
},20000);

function searchKey(key){

    var url;
    if(popWin1Status=="ticket"){
   url='php/searchTicket.html';
    }else{
    url='php/searchAgent.html'; 
    }
 
    $.get(url,
    {"key":key},
    function(data){
  //console.log("search result===>"+data);
   gameSettingTable.innerHTML=data;
    });
  
}

function getAnouncement(){
    $.get('php/getAnouncement.html',
    {},
    function(data){
console.log("anouncement==>"+data);
announceTa.value=data;
localStorage.setItem("announcement",data);
    });
}

function sendAnnouncement(){
  if(announceTa.value!=localStorage.getItem("announcement")){
    if(announceTa.value.length>0){
        saveAnounceBtnInp.value="saving...";
        $.get('php/saveAnnouncement.html',
        {"announcement":announceTa.value},
        function(data){
        console.log("save anouncement==>"+data);
        if(data=="success"){
        saveAnounceBtnInp.value="SAVE DONE";
        }else{
        saveAnounceBtnInp.value="FAILED";
        }
        setTimeout(()=>{
            saveAnounceBtnInp.value="SEND NEW ANNOUNCEMENT";
        },2000);
        });
            }else{
                alert("Anouncement is empty! Please write something");
            }
  }else{
      alert("Please write different announcement from previous one");
  }
}

function loadLinkType(){
    var domain=window.location.href.split("../../index.html")[2];
    playerLinkInp.value=domain;
    adminLink2Inp.value=domain+"/admin";
    agentLinkInp.value=domain+"/agent";
}

function copy(linkType){
    var domain=window.location.href.split("../../index.html")[2];
    var btn= document.getElementById("copy"+linkType+"btn");
if(linkType==1){
    navigator.clipboard.writeText(domain);
    btn.innerHTML="COPIED";
}else if(linkType==2){
    navigator.clipboard.writeText(domain+"/admin");
    btn.innerHTML="COPIED";
}else if(linkType==3){
    navigator.clipboard.writeText(domain+"/agent");
    btn.innerHTML="COPIED";
}
setTimeout(()=>{
    btn.innerHTML="COPY LINK";
},3000);
}


function shareLink(linkType){
    var domain=window.location.href.split("../../index.html")[2];
    var btn= document.getElementById("copy"+linkType+"btn");
if(linkType==1){
    window.location="whatsapp://send?text=Player link is "+domain;
}else if(linkType==2){
    window.location="whatsapp://send?text=Admin link is "+domain+"/admin";
}else if(linkType==3){
    window.location="whatsapp://send?text=Agent link is "+domain+"/agent";
}
}


function autoLogin(){
    //alert(localStorage.getItem("name"));
     if(localStorage.getItem("adminPass")==null || localStorage.getItem("adminPass")==""){
 loginOverlayDiv.style.display="block";
     }else{
 $.get('php/login.html',
 {"pass":localStorage.getItem("adminPass")},
 function(data){
// //console.log(data);
 if(data!="success"){
     logout();
 }else{
   // loginOverlayDiv.style.display="block";  
 }
 });
     }
 }
 
 function logout(){
     localStorage.setItem("name","");
     localStorage.setItem("adminPass","");
     window.location="home.html";
 }
 function login(){
         if(agentPassInp.value.length>0){
             loginBtnInp.value="...";
             $.get('php/login.html',
             {"pass":agentPassInp.value},
             function(data){
           //  //console.log(data);
             if(data=="success"){
                 localStorage.setItem("adminPass",agentPassInp.value);
 
 loginBtnInp.value="DONE";
 setTimeout(()=>{
     loginBtnInp.value="SIGN IN";
     loginOverlayDiv.style.display="none";
     window.location="home.html";
 },3000);
             }else{
                 loginBtnInp.value="WRONG INFO";
                 setTimeout(()=>{
                    loginBtnInp.value="SIGN IN";
                },3000);
             }
 
             });
         }else{
             alert("password is empty!");
         }
    
 }




//----------------------------------------------------------------------save function--------------------------------

function updateTheme(){

    $.get('php/saveJsonFile.html',
{"jsonName":"theme","json":'{"title":"'+webTitleInp.value+'"}'},
function(data){
//console.log(data);


});
}

function saveGameSetting(){
    var settingType=saveGameBtn.value;
var settingsType=saveGameBtn.value;

    saveGameBtn.value="SAVING...";

    if(totalTicketInp.value>0 || ticketPriceInp.value>0 || agentCommissionInp.value>0){
$.get('php/saveJsonFile.html',
{"jsonName":"gameSettingJSON","settingType":settingType,"json":'{"dateTime":"'+dateTimeInp.value+'","totalTicket":"'+totalTicketInp.value+'","ticketPrice":"'+ticketPriceInp.value+'","agentCommission":"'+agentCommissionInp.value+'","currency":"'+currencyInp.value+'","websiteStatus":"'+websiteStatusInp.value+'","bookingStatus":"'+bookingStatusInp.value+'"}'},
function(data){
console.log(data);

if(data=="success"){
    saveGameBtn.value="DONE";
    
    
        window.location="home.html";
    
}else{
    saveGameBtn.value="FAILED!";
}

setTimeout(()=>{
    saveGameBtn.value="SAVE GAME SETTINGS";
},3000);
});
    }else{
        alert("Some fields are empty! Please fill all the value");
    }
}



function saveAdminInfo(){
    

    saveGameBtn.value="SAVING...";

    if(adminNameInp.value>0 || adminEmailInp.value>0 || adminPassInp.value>0 || adminPhoneInp.value>0 || adminWpLinkInp.value.length>0){

        saveAdminInfoBtn.value="SAVING...";
$.get('php/saveJsonFile.html',
{"jsonName":"adminInfoJSON","json":'{"adminName":"'+adminNameInp.value+'","adminPass":"'+adminPassInp.value+'","adminEmail":"'+adminEmailInp.value+'","adminPhone":"'+adminPhoneInp.value+'","adminWpLink":"'+adminWpLinkInp.value+'"}'},
function(data){
//console.log(data);

if(data=="success"){
saveAdminInfoBtn.value="DONE";
}else{
saveAdminInfoBtn.value="FAILED!";
}
setTimeout(()=>{
    saveAdminInfoBtn.value="SAVE INFO";
},3000);
});

    }else{
        alert("Some field are empty!");
    }


}


function saveDivident(){
    
    //create divident array
    var dividentList=new Array();

    for(var i=0;i<dividentType.length;i++){
var inp=document.getElementById(dividentType[i]);
if(inp.checked){
dividentList[dividentList.length]=dividentType[i];
}
    }

    saveDividentBtn.value="SAVING...";

    //console.log(JSON.stringify(dividentList));

    var dividentPrz='[{"name":"First Housefull","amount":"'+FirstHousefullPrizeInp.value+'"},{"name":"Second Housefull","amount":"'+SecondHousefullPrizeInp.value+'"},{"name":"Third Housefull","amount":"'+ThirdHousefullPrizeInp.value+'"},{"name":"Full Sheet Bonus","amount":"'+FullSheetBonusPrizeInp.value+'"},{"name":"Half Sheet Bonus","amount":"'+HalfSheetBonusPrizeInp.value+'"},{"name":"Bottom Line","amount":"'+BottomLinePrizeInp.value+'"},{"name":"Middle Line","amount":"'+MiddleLinePrizeInp.value+'"},{"name":"Top Line","amount":"'+TopLinePrizeInp.value+'"},{"name":"Box Bonus","amount":"'+BoxBonusPrizeInp.value+'"},{"name":"Corner","amount":"'+CornerPrizeInp.value+'"},{"name":"Star","amount":"'+StarPrizeInp.value+'"},{"name":"Early 5","amount":"'+Early5PrizeInp.value+'"},{"name":"Quick6","amount":"'+Quick6PrizeInp.value+'"},{"name":"Quick7","amount":"'+Quick7PrizeInp.value+'"}]';

$.get('php/saveJsonFile.html',
{"jsonName":"dividentListARRAY","json":JSON.stringify(dividentList),"totalHousefull":totalHousefull},
function(data){
////console.log(data);

$.get('php/saveJsonFile.html',
{"jsonName":"dividentPrize","json":dividentPrz},
function(data){
////console.log(data);

if(data=="success"){
    saveDividentBtn.value="DONE";
}else{
    saveDividentBtn.value="FAILED";
}
setTimeout(()=>{
    saveDividentBtn.value="SAVE DIVIDENTS";
},3000);

});
   





    });

    }









//------------------------------------------------------------get function-----------------------------------

function getGameSetting(){

    
    $.get('php/getJsonFile.html',
{"jsonName":"gameSettingJSON"},
function(data){
///console.log(data);

var json=JSON.parse(data);

gameSettingJSON=json;
gameDateTime=gameSettingJSON.dateTime;

    dateTimeInp.value=json.dateTime;
    totalTicketInp.value=json.totalTicket;
    ticketPriceInp.value=json.ticketPrice;
    agentCommissionInp.value=json.agentCommission;
    currencyInp.value=json.currency;
    websiteStatusInp.value=json.websiteStatus;
    bookingStatusInp.value=json.bookingStatus;

});
}

setInterval(()=>{
    getGameStatus();
},3000);
function getGameStatus(){
    $.get('../../api/gameApi/getGameStatus.html',
{},
function(data){
////console.log(data);
var json=JSON.parse(data);

if(json.gameStatus=="GAME IS OVER"){
saveGameBtn.value="CREATE NEW GAME";
}else{
saveGameBtn.value="SAVE GAME SETTINGS";
}

//load divident
var dividentList=json.winners;

dividentListDiv.innerHTML="";
for(var i=0;i<dividentList.length;i++){
    var winnerTnoArray=new Array();
    for(var x=0;x<dividentList[i].winnerDetails.length;x++){
winnerTnoArray[winnerTnoArray.length]=dividentList[i].winnerDetails[x].TNO;
    }
    var displayBtn='<button class="dividentBtn">'+dividentList[i].type+' '+JSON.stringify(winnerTnoArray)+'</button>';
    dividentListDiv.innerHTML=dividentListDiv.innerHTML+displayBtn;
}

});
}


setInterval(()=>{
    getBusinessInfo();
},5000);
function getBusinessInfo(){
    $.get('php/getBusinessInfo.html',
    {},
    function(data){
//console.log(data);
var json=JSON.parse(data);

//set value
totalTicketInp2.value=json.totalTicket;
soldTicketInp.value=json.soldTicket;
haftsheetTicketInp.value=json.totalHaftsheetBookedTkt;
fullsheetTicketInp.value=json.totalFullsheetBookedTkt;
leftTicketInp.value=json.ticketLeft;
ticketPriceInp2.value=json.ticketPrice+' INR';
agentCommissionInp2.value=json.agentCommission+' INR';
totalRevenueInp.value=json.totalRevenue+' INR';
totalProfitInp.value=json.totalProfit+' INR';

    });
}



function getTheme(){
     
    $.get('php/getJsonFile.html',
{"jsonName":"theme"},
function(data){
//console.log(data);
var json=JSON.parse(data);

webTitleInp.value=json.title;
});
}

function getDivident(){

    
    $.get('php/getDividentList.html',
{"jsonName":"dividentListARRAY"},
function(data){
////console.log(data);

var dividentArry=JSON.parse(data).dividentList;
var dividentPrize=JSON.parse(data).dividentPrize;

for(var i=0;i<dividentArry.length;i++){
    if(i==(dividentArry.length-1)){//last data inarray is total housefull
totalHousefull=parseInt(dividentArry[i]);

if(dividentArry[i]=="1"){
firstHousefull.checked=true;
secondHousefull.checked=false;
thirdHousefull.checked=false;
}else if(dividentArry[i]=="2"){
    firstHousefull.checked=true;
    secondHousefull.checked=true;
    thirdHousefull.checked=false;
}else if(dividentArry[i]=="3"){
    firstHousefull.checked=true;
    secondHousefull.checked=true;
    thirdHousefull.checked=true;
}
    }else{

        document.getElementById(dividentArry[i]).checked=true;
    }
}


for(i=0;i<dividentPrize.length;i++){
var el=document.getElementById(dividentPrize[i].name+" PrizeInp");
el.value=dividentPrize[i].amount;
}

});
}

function getAdminInfo(){

    
    $.get('php/getJsonFile.html',
{"jsonName":"adminInfoJSON"},
function(data){
////console.log(data);

var json=JSON.parse(data);

adminNameInp.value=json.adminName;
adminPassInp.value=json.adminPass;
adminEmailInp.value=json.adminEmail;
adminPhoneInp.value=json.adminPhone;
adminWpLinkInp.value=json.adminWpLink;

});
}

function getSoldTicket(key,tableName){

    if(tableName=="gameSettingTable"){
        popWin1Status="ticket";
        showTicketBtn.style.background="red";
        showAgentBtn.style.background="black";
        searchKeyInp.value="";
    }else if(tableName=="agentTicketTable"){
        popWin1Status="agent";
        showTicketBtn.style.background="black";
        showAgentBtn.style.background="red";
        searchKeyInp.value="";
    }
    
 
    
    edtTktMode=false;
    activeTNO=null;
    
    var gameSettingTable=document.getElementById("gameSettingTable");

    $.get('php/getSoldTicket.html',
    {"key":key},
    function(data){
 // //console.log(data);
    
document.getElementById(tableName).innerHTML= data;//return rendered html table
    
    });
}



function getAgentList(){
    showTicketBtn.style.background="black";
    showAgentBtn.style.background="red";
    var gameSettingTable=document.getElementById("gameSettingTable");

    popWin1Status="agent";
    edtTktMode=false;
    activeId=null;

//console.log(popWin1Status);
    $.get('php/getAgentList.html',
    {},
    function(data){
   // //console.log(data);
    
gameSettingTable.innerHTML=data;
    
    });
}


function getAllTicket(){
 

    $.get('php/getAllTicket.html',
    {},
    function(data){
   // //console.log(data);
   ticketBlockDiv.innerHTML=data;
    });
}


setInterval(()=>{
    getRenewJson();
},60000);

function getRenewJson(){
    $.get('php/getRenewJson.html',
    {},
    function(data){
   console.log("renew data:"+data);

   try{

    var json=JSON.parse(data);

    var host=window.location.href.split("../../index.html")[2];
    hostNameInp.value=host;
    createdDateInp.value=json.createdDate;
    renewDateInp.value=json.renewDate;
    
    if(json.expired!="no"){
        runGameBtn.style.display="none";
    
       setTimeout(()=>{
        renew();
       },5000);
    }

   }catch (error){
    alert("CONNECTION WITH STARTTAMBOLA.COM SERVER FAILED");
    renew();
   }

    }); 
}











//--------------------------------------------------task function------------------------------------

function filledNum(){
    for(var i=1;i<=90;i++){
numBlockDiv.innerHTML=numBlockDiv.innerHTML+'<button class="numBtn" id="block_num_'+i+'">'+i+'</button>';
    }
}


function updateTotalHouseFull(val){

    if(val==2 && secondHousefull.checked){
        secondHousefull.checked=true;
        thirdHousefull.checked=false;

        totalHousefull=2;
    }else if(val==2 && !secondHousefull.checked){
        secondHousefull.checked=false;
        thirdHousefull.checked=false;

        totalHousefull=1;

    }else if(val==3 && thirdHousefull.checked){
        secondHousefull.checked=true;
        thirdHousefull.checked=true;

        totalHousefull=3;
    }else if(val==3 && !thirdHousefull.checked){
        secondHousefull.checked=true;
        thirdHousefull.checked=false;

        totalHousefull=2;
    }
  

    //console.log("Total housefull = "+totalHousefull);
}


function editTicket(tno){
popWin1.style.display="block";

edtTktMode=true;

activeTNO=tno;

agentTicketTable.innerHTML="";
 
//console.log(popWin1Status);

$.get('php/getTicketDetail.html',
{"tno":tno},
function(data){
////console.log(data);

var json=JSON.parse(data);

var html='<tr style="background: black;"><th ><input class="tableInp"  style="background-color:black;pointer-events: none;margin: 0px;color:white;" value="DATA TYPE"/></th><th ><input class="tableInp"  style="background-color:black;pointer-events: none;margin: 0px;color:white;" value="DATA VALUE"/></th></tr>';


var html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="TNO"/></th><th ><input class="tableInp" id="edtTNOtnoInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+tno+'"/></th></tr>';

html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="DATE"/></th><th ><input class="tableInp" id="edtTNOdateInp" style="background-color:rgb(255, 255, 255);pointer-events: all;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+json.date+'"/></th></tr>';

html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="NAME"/></th><th ><input class="tableInp" id="edtTNOnameInp" style="background-color:rgb(255, 255, 255);pointer-events: all;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+json.name+'"/></th></tr>';

html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="PHONE"/></th><th ><input class="tableInp" id="edtTNOphoneInp" style="background-color:rgb(255, 255, 255);pointer-events: all;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+json.phone+'"/></th></tr>';

html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="AGENT"/></th><th ><input class="tableInp" id="edtTNOagentInp" style="background-color:rgb(255, 255, 255);pointer-events: all;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+json.agentName+'"/></th></tr>';

html=html+'<tr ><th ><input class="tableInp" type="button"  style="background-color:gray;pointer-events: all;margin: 0px;color:rgb(255, 255, 255);text-align:center;" onclick="resetTNO()" id="resetTNObtn" value="REMOVE"/></th><th ><input class="tableInp"  style="background-color:red;pointer-events: all;margin: 0px;color:rgb(255, 255, 255);text-align:center;" onclick="saveTNO()" type="button" id="saveTNObtn" value="SAVE"/></th></tr>';

editDataTable.innerHTML=html;

////console.log(html);

});




}



function editAgent(id){
    popWin1.style.display="block";
    
    //console.log(popWin1Status);

    edtTktMode=false;
    activeAgentId=id;
    
    $.get('php/getAgentDetail.html',
    {"id":id},
    function(data){
   // //console.log(data);
    
    var json=JSON.parse(data);
    
    var html='<tr style="background: black;"><th ><input class="tableInp"  style="background-color:black;pointer-events: none;margin: 0px;color:white;" value="DATA TYPE"/></th><th ><input class="tableInp"  style="background-color:black;pointer-events: none;margin: 0px;color:white;" value="DATA VALUE"/></th></tr>';
    
    
  
  var  html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="DATE"/></th><th ><input class="tableInp" id="edtAgentDateInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+id+'"/></th></tr>';
    
    html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="NAME"/></th><th ><input class="tableInp" id="edtAgentNameInp" style="background-color:rgb(255, 255, 255);pointer-events: all;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+json.name+'"/></th></tr>';
    
    html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="PHONE"/></th><th ><input class="tableInp" id="edtAgentPhoneInp" style="background-color:rgb(255, 255, 255);pointer-events: all;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+json.phone+'"/></th></tr>';
    
    html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="PASSWORD"/></th><th ><input class="tableInp" id="edtAgentPassInp" style="background-color:rgb(255, 255, 255);pointer-events: all;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+json.pass+'"/></th></tr>';
    
    html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="TOTAL SOLD"/></th><th ><input class="tableInp" id="edtAgentTotalTicketInp" style="background-color:rgb(255, 255, 255);pointer-events: all;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+json.totalTicket+'"/></th></tr>';
    
    html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="TOTAL EARNING"/></th><th ><input class="tableInp" id="edtAgentEarningInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" onkeyup="filterChar(this.id)" value="'+json.earning+' INR"/></th></tr>';
    
    html=html+'<tr ><th><input class="tableInp" type="button" id="delAgentBtn"  style="background-color:gray;pointer-events: all;margin: 0px;color:rgb(255, 255, 255);" onclick="delAgent()" value="REMOVE"/></th><th ><input class="tableInp" type="button" id="saveAgentBtn"  style="background-color:red;pointer-events: all;margin: 0px;color:rgb(255, 255, 255);" onclick="saveAgent()" value="SAVE"/></th></tr>';
    

    editDataTable.innerHTML=html;
    
    getSoldTicket(id,"agentTicketTable");
    
    });
    
    
    
    
    }


    function popWin1X(){

        //console.log(edtTktMode+'->'+popWin1Status);

        if(popWin1Status=="ticket"){
            popWin1.style.display="none";
            activeId=null;

        }else if(popWin1Status=="agent"){
if(edtTktMode==true){
editAgent(activeAgentId);
edtTktMode=false;
popWin1Status=null;
}else{
popWin1.style.display="none";
activeId=null;
edtTktMode=false;
popWin1Status=null;
}
        }

       
    }


    function addAgent(){
        
    var agentNameInp=document.getElementById("agentNameInp");
   var agentPassInp=document.getElementById("agentPassInp");
   var agentAddBtn=document.getElementById("agentAddBtn");

if(agentNameInp.value.length>0){
    if(agentPassInp.value.length>0){

//------------now add to db
agentAddBtn.value="...";
$.get('php/addAgent.html',
{"name":agentNameInp.value,"pass":agentPassInp.value},
function(data){
// //console.log(data);
if(data=="success"){
    agentAddBtn.value="DONE";
    agentNameInp.value="";
    agentPassInp.value="";
    getAgentList("","gameSettingTable");
}else{
    alert(data);
}

setTimeout(()=>{
    agentAddBtn.value="ADD";
},3000);

});

    }else{
        alert("Agent password is empty!");
    }
}else{
    alert("Agent name is empty!");
}
    }


    function saveAgent(){

        var edtAgentDateInp=document.getElementById("edtAgentDateInp");
        var edtAgentNameInp=document.getElementById("edtAgentNameInp");
        var edtAgentPhoneInp=document.getElementById("edtAgentPhoneInp");
        var edtAgentPassInp=document.getElementById("edtAgentPassInp");
        var edtAgentTotalTicketInp=document.getElementById("edtAgentTotalTicketInp");
        var saveAgentBtn=document.getElementById("saveAgentBtn");

if(edtAgentDateInp.value.length>0 || edtAgentNameInp.value.length>0 || edtAgentPhoneInp.value.length>0 || edtAgentPassInp.value.length>0 || edtAgentTotalTicketInp.value.length>0){
    saveAgentBtn.value="SAVING...";
    var json={"id":activeAgentId,"name":edtAgentNameInp.value,"phone":edtAgentPhoneInp.value,"pass":edtAgentPassInp.value};
    $.get('php/saveAgent.html',
    {"json":JSON.stringify(json)},
    function(data){
    // //console.log(data);
    if(data=="success"){
        saveAgentBtn.value="DONE";
    }else{
        alert(data);
    }
    
    setTimeout(()=>{
        saveAgentBtn.value="SAVE";
    },3000);
    
    });
}else{
    alert("Some field are empty!");
}



    }


    function delAgent(){
        var delAgentBtn=document.getElementById("delAgentBtn");

delAgentBtn.value="REMOVING...";

$.get('php/delAgent.html',
{"id":activeAgentId},
function(data){
 //console.log(data);

if(data=="success"){
    delAgentBtn.value="DONE";

    setTimeout(()=>{
        delAgentBtn.value="REMOVE";
        popWin1.style.display="none";
        getAgentList("","gameSettingTable"); 
    },3000);
}else{
    alert(data);
    setTimeout(()=>{
        delAgentBtn.value="REMOVE";
    },3000);
}


});

    }


    
    function saveTNO(){
        var edtTNOdateInp=document.getElementById("edtTNOdateInp");
        var edtTNOnameInp=document.getElementById("edtTNOnameInp");
        var edtTNOphoneInp=document.getElementById("edtTNOphoneInp");
        var edtTNOagentInp=document.getElementById("edtTNOagentInp");
        var saveTNObtn=document.getElementById("saveTNObtn");

if(edtTNOdateInp.value.length>0 && edtTNOnameInp.value.length>0 && edtTNOphoneInp.value.length>0 && edtTNOagentInp.value.length>0){

    var json={"tno":activeTNO,"date":edtTNOdateInp.value,"name":edtTNOnameInp.value,"phone":edtTNOphoneInp.value,"agentName":edtTNOagentInp.value};

    saveTNObtn.value="SAVING...";
    $.get('php/saveTNO.html',
    {"json":JSON.stringify(json)},
    function(data){
    // //console.log(data);
    if(data=="success"){
        saveTNObtn.value="DONE";
    }else{
        alert(data);
    }
    
    setTimeout(()=>{
        saveTNObtn.value="SAVE";
    },3000);
    
    });
}else{
    alert("Some field are empty!");
}



    }



    function resetTNO(){
        var resetTNObtn=document.getElementById("resetTNObtn");

        resetTNObtn.value="RESETTING...";
        $.get('php/resetTNO.html',
        {"tno":activeTNO},
        function(data){
        // //console.log(data);
        if(data=="success"){
resetTNObtn.value="DONE";
setTimeout(()=>{
    resetTNObtn.value="REMOVE";
    popWin1.style.display="none";
    getSoldTicket("all","gameSettingTable");
},3000);
        }else{
alert(data);
setTimeout(()=>{
    resetTNObtn.value="REMOVE";
},3000);
        }

        

        });
    }

    function newBook(){
var bookerNameInp=document.getElementById("bookerNameInp");
var bookerPhoneInp=document.getElementById("bookerPhoneInp");

if(bookerNameInp.value.length>0 && bookerPhoneInp.value.length>0){
bookingWindowDiv.style.display="block";
}else{
    alert("Some field are empty!");
}
    }

    function selectTNO(id){
      //  //console.log(id);

        var ticketBtn=document.getElementById(id);
        
if(ticketBtn.style.background=="white"){
    ticketBtn.style.background="purple";
}else if(ticketBtn.style.background=="purple"){
    ticketBtn.style.background="white";
}

//count current selected ticket
var currentSelectedTnoList=Array();
for(var i=1;i<=gameSettingJSON.totalTicket;i++){
    var tnoBtn=document.getElementById("tno_"+i);
if(tnoBtn.style.background=="purple"){
if(currentSelectedTnoList.includes(i)==false){
    currentSelectedTnoList[currentSelectedTnoList.length]=i;
}
}
}

//categorised the currentSelectedTnoList
splitTnoByType(currentSelectedTnoList);

    }

    

    function book(){
        var selectedTicket=new Array();
var bookerNameInp=document.getElementById("bookerNameInp");
var bookerPhoneInp=document.getElementById("bookerPhoneInp");



        for(var i=1;i<=gameSettingJSON.totalTicket;i++){
            var tnoBtn=document.getElementById("tno_"+i);
if(tnoBtn.style.background=="purple"){
selectedTicket[selectedTicket.length]=i;
}
        }

        //console.log("selected tickets are ="+JSON.stringify(selectedTicket));

if(selectedTicket.length>0){
   if(bookerNameInp.value.length>0 && bookerPhoneInp.value.length>0){
    booktBtn.value="BOOKING...";
    $.get('php/book.html',
    {"name":bookerNameInp.value,"phone":bookerPhoneInp.value,"selectedTicket":JSON.stringify(selectedTicket)},
    function(data){
     //console.log(data);
    if(data=="success"){
        booktBtn.value="DONE";
        setTimeout(()=>{
            bookingWindowDiv.style.display="none";
            getSoldTicket("all","gameSettingTable");
            window.location="home.html";
        },3000);
                }else{
        alert(data);
        setTimeout(()=>{
            booktBtn.value="BOOK NOW";
        },3000);
    }
    
});
   }else{
       alert("Some field are empty!");
   }
}else{
alert("Please select atleast one ticket!");
}

    }





    setInterval(()=>{
        if(gameDateTime!=null && countDownBtn!=null){
            displayCountDown();
        }
        },1000);
    
    
        function displayCountDown(){

    var nowDateTime=new Date().getTime();
    setDateTime=Date.parse(gameDateTime);
    
  ////console.log(setDateTime-nowDateTime);
    
    
    if(nowDateTime>setDateTime){
        //donothing-----------------------------
        if(gameStatusJSON!=null){
            countDownBtn.innerHTML=gameStatusJSON.gameStatus;
 
        }
h=0;
m=0;
s=0;

    }else{
    
        var ms=Math.abs(setDateTime-nowDateTime);
    
        h=Math.floor(ms/(1000*60*60));
    
        var ms=ms-(h*60*60*1000);
    
        m=Math.floor(ms/(1000*60));
    
        var ms=ms-(m*60*1000);
    
        s=Math.floor(ms/(1000));
        
        countDownBtn.innerHTML=h+':'+m+':'+s;
    
    
    }
    
    
    
    }


    var callerInterF=    setInterval(()=>{
        if(callStatusInp.value=="on" && callIntervalInp!=null){
            numCaller();
        }
    },12000);


    function setCallInterval(val){
        //console.log("call interval is "+callInterrval);

    clearInterval(callerInterF);

    callerInterF=    setInterval(()=>{
        if(callStatusInp.value=="on" && callIntervalInp!=null){
            numCaller();
        }
    },val);
    }


    function numCaller(){
       if((h+m+s)==0){
        $.get('../../api/gameApi/generateWinTicket.html',
        {},
        function(data){
       // //console.log(data);

        });
       }
    }

    setInterval(()=>{
       
        updateCalledNum();
    },3000);
    function updateCalledNum(){
        $.get('../../api/gameApi/getGameStatus.html',
        {},
        function(data){
    //  //console.log(data);
var json=JSON.parse(data);
gameStatusJSON=json;


if(callStatusInp.value=="on" && callIntervalInp!=null){//------------------------task only if user interact
    
    if(gameStatusJSON.gameStatus!=localStorage.getItem("gameStatus") && gameStatusJSON.gameStatus!=""){
        localStorage.setItem("gameStatus",gameStatusJSON.gameStatus);
    /*
        var audio=new Audio("../../tambolaCallMp3/"+gameStatusJSON.gameStatus+".mp3");
        audio.play();
        */
        audio.onended=function(){
            if(gameStatusJSON.lastNum!=localStorage.getItem("lastNum") && gameStatusJSON.lastNum!=""){
                localStorage.setItem("lastNum",gameStatusJSON.lastNum);
                var audio=new Audio("../../tambolaCallMp3/"+gameStatusJSON.lastNum+".mp3");
                audio.play();
                
                audio.onended=function(){
                    if(gameStatusJSON.lastDivident!=localStorage.getItem("lastDivident") && gameStatusJSON.lastDivident!=""){
                        localStorage.setItem("lastDivident",gameStatusJSON.lastDivident);
                        /*
                        var audio=new Audio("../../tambolaCallMp3/"+gameStatusJSON.lastDivident+".mp3");
                        audio.play();
                        */
                      //  //console.log("Divident call");
                    }else{
                        localStorage.setItem("lastDivident",gameStatusJSON.lastDivident);
                    }
                }
                
                }else{
                    localStorage.setItem("lastNum",gameStatusJSON.lastNum);
                }
    
        }
    
    }else{
    
        if(gameStatusJSON.lastNum!=localStorage.getItem("lastNum") && gameStatusJSON.lastNum!=""){
            localStorage.setItem("lastNum",gameStatusJSON.lastNum);
            var audio=new Audio("../../tambolaCallMp3/"+gameStatusJSON.lastNum+".mp3");
            audio.play();
            
            audio.onended=function(){
                if(gameStatusJSON.lastDivident!=localStorage.getItem("lastDivident") && gameStatusJSON.lastDivident!=""){
                    localStorage.setItem("lastDivident",gameStatusJSON.lastDivident);
                    var audio=new Audio("../../tambolaCallMp3/"+gameStatusJSON.lastDivident+".mp3");
                    audio.play();
                  //  //console.log("Divident call 2");
                    
                }else{
                    localStorage.setItem("lastDivident",gameStatusJSON.lastDivident);
                }
            }
            
            }else{
                localStorage.setItem("lastNum",gameStatusJSON.lastNum);
            }
    
    
    
    }





}








for(var i=1;i<=90;i++){
    document.getElementById("block_num_"+i).style.background="white";
    }

var calledNumArry=json.calledNumArry;

for(var i=0;i<calledNumArry.length;i++){
document.getElementById("block_num_"+calledNumArry[i]).style.background="yellow";
}
        });
    }

    function resetCallNum(){
       if(confirm("Are you sure you want reset called numbers?")){
        resetCallBtn.innerHTML="RESETTING...";
        $.get('php/resetCall.html',
        {},
        function(data){
console.log(data);
if(data=="success"){
    resetCallBtn.innerHTML="RESET DONE";
    window.location="";
}else{
resetCallBtn.innerHTML="RESET FAILED";
setTimeout(function(){
    resetCallBtn.innerHTML="RESET CALL";
},3000);
}
        });
       }
    }


    function resetTicket(){
        if(confirm("Are you sure you want reset entire tickets?")){
         resetAgentBtn.innerHTML="RESETTING...";
         $.get('php/resetTicket.html',
         {},
         function(data){
 console.log(data);
 if(data=="success"){
     resetAgentBtn.innerHTML="RESET DONE";
     window.location="";
 }else{
 resetAgentBtn.innerHTML="RESET FAILED";
 setTimeout(function(){
     resetAgentBtn.innerHTML="RESET CALL";
 },3000);
 }
         });
        }
     }


     function resetAgent(){
        if(confirm("Are you sure you want reset entire agents?")){
         resetAgentBtn.innerHTML="RESETTING...";
         $.get('php/resetAgent.html',
         {},
         function(data){
 console.log(data);
 if(data=="success"){
     resetAgentBtn.innerHTML="RESET DONE";
     window.location="";
 }else{
 resetAgentBtn.innerHTML="RESET FAILED";
 setTimeout(function(){
     resetAgentBtn.innerHTML="RESET CALL";
 },3000);
 }
         });
        }
     }


     function loadBackupTicket(){
        if(confirm("Are you sure you want load backup ticket?")){
         loadBackupTicketBtn.innerHTML="LOADING...";
         $.get('php/addTicketBackup.html',
         {},
         function(data){
 console.log(data);
 if(data=="success"){
     loadBackupTicketBtn.innerHTML="LOADING DONE";
     window.location="";
 }else{
 loadBackupTicketBtn.innerHTML="LOADING FAILED";
 setTimeout(function(){
     loadBackupTicketBtn.innerHTML="LOAD BACKUP TICKET";
 },3000);
 }
         });
        }
     }

     function showLastTicket(){
        renderTitleBtn.innerHTML="LAST GAME TICKET";
        printType="lastTicket";
        showLastTicketBtn.innerHTML="LOADING...";
        $.get('../commonApi/getLastTicket.html',
        {},
        function(data){
//console.log(data);
var ticketListJson=JSON.parse(data);
renderGridDiv.style.gridTemplateColumns="auto auto auto auto";
renderGridDiv.innerHTML=' <button class="renderGridBtn" style="color:white;background:black;">tno</button><button class="renderGridBtn" style="color:white;background:black;">name</button><button class="renderGridBtn" style="color:white;background:black;">phone number</button><button class="renderGridBtn" style="color:white;background:black;">booker</button>';

for(i=0;i<ticketListJson.length;i++){
    renderGridDiv.innerHTML=renderGridDiv.innerHTML+' <button class="renderGridBtn">'+ticketListJson[i]["tno"]+'</button><button class="renderGridBtn">'+ticketListJson[i]["name"]+'</button><button class="renderGridBtn">'+ticketListJson[i]["phone"]+'</button><button class="renderGridBtn">'+ticketListJson[i]["booker"]+'</button>';
}
renderDiv.style.display="block";
downloadBtn.style.display="block";
showLastTicketBtn.innerHTML="SHOW PREVIOUS TICKET";


        });
     }


     function showLastWinner(){
        renderTitleBtn.innerHTML="LAST GAME WINNERS";
        printType="lastWinner";
        showLastWinnerBtn.innerHTML="LOADING...";
        $.get('../commonApi/getLastWinner.html',
        {},
        function(data){
//console.log(data);
var winnerList=JSON.parse(data);
renderGridDiv.style.gridTemplateColumns="auto auto auto auto auto";
renderGridDiv.innerHTML=' <button class="renderGridBtn" style="color:white;background:black;">type</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">tno</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">name</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">phone</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">booker</button>';

for(i=0;i<winnerList.length;i++){
    renderGridDiv.innerHTML=renderGridDiv.innerHTML+' <button class="renderGridBtn">'+winnerList[i]["type"]+'</button>'+
    '<button class="renderGridBtn">'+winnerList[i]["tno"]+'</button>'+
    '<button class="renderGridBtn">'+winnerList[i]["name"]+'</button>'+
    '<button class="renderGridBtn">'+winnerList[i]["phone"]+'</button>'+
    '<button class="renderGridBtn">'+winnerList[i]["booker"]+'</button>';
}

renderDiv.style.display="block";
downloadBtn.style.display="block";
showLastWinnerBtn.innerHTML="SHOW PREVIOUS WINNER";


        });

     }


     function showLastNum(){
        renderTitleBtn.innerHTML="LAST GAME NUMBER";
        printType="lastNum";
        showLastNumBtn.innerHTML="LOADING...";
        $.get('../commonApi/getLastNumber.html',
        {},
        function(data){
console.log(data);
var numList=JSON.parse(data);
renderGridDiv.innerHTML="";
renderGridDiv.style.gridTemplateColumns="auto auto auto auto auto auto auto auto auto auto";

for(i=0;i<numList.length;i++){
    renderGridDiv.innerHTML=renderGridDiv.innerHTML+' <button class="renderGridBtn" style="margin:5px;border-radius:5px;">'+numList[i]+'</button>';
}

renderDiv.style.display="block";
downloadBtn.style.display="block";
showLastNumBtn.innerHTML="SHOW PREVIOUS NUMBER";


        });
     }

     function showLastBusiness(){
        renderTitleBtn.innerHTML="LAST GAME BUSINESS";
        printType="lastBusiness";
        showLastBusinessBtn.innerHTML="LOADING...";
        $.get('../commonApi/getLastBusinessaa94.html?type=admin',
        {},
        function(data){
//console.log(data);
var businessList=JSON.parse(data);

renderGridDiv.style.gridTemplateColumns="auto auto";
renderGridDiv.innerHTML=' <button class="renderGridBtn" style="color:white;background:black;">type</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">value</button>';

for(i=0;i<businessList.length;i++){
    renderGridDiv.innerHTML=renderGridDiv.innerHTML+' <button class="renderGridBtn" >'+businessList[i].type+'</button>'+
    '<button class="renderGridBtn">'+businessList[i].value+'</button>';
}

renderDiv.style.display="block";
downloadBtn.style.display="block";
showLastBusinessBtn.innerHTML="SHOW PREVIOUS BUSINESS";

        });
     }


function showCurrentTicket(){
    renderTitleBtn.innerHTML="LAST CURRENT TICKET";
        printType="currentTkt";
        showCurrentTktBtn.innerHTML="LOADING...";
        $.get('php/getCurrentTicket.html',
        {},
        function(data){
//console.log(data);
var currentTktList=JSON.parse(data);

renderGridDiv.style.gridTemplateColumns="auto auto auto auto auto";
renderGridDiv.innerHTML=' <button class="renderGridBtn" style="color:white;background:black;">TNO</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">NAME</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">PHONE</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">BOOKER</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">WHATSAPP BOOKER</button>';

for(i=0;i<currentTktList.length;i++){
    renderGridDiv.innerHTML=renderGridDiv.innerHTML+' <button class="renderGridBtn" >'+currentTktList[i].tno+'</button>'+
    ' <button class="renderGridBtn" >'+currentTktList[i].name+'</button>'+
    ' <button class="renderGridBtn" >'+currentTktList[i].phone+'</button>'+
    ' <button class="renderGridBtn" >'+currentTktList[i].booker+'</button>'+
    ' <a class="renderGridBtn" href="whatsapp://send?phone=+91'+currentTktList[i].bookerPhone+'" style="background:green;color:white;border:2px solid white;text-decoration:none;text-align:center;">whatsapp</a>';
}

renderDiv.style.display="block";
downloadBtn.style.display="block";
showCurrentTktBtn.innerHTML="SHOW CURRENT TICKET";

        });





}


function showCurrentWinner(){
    renderTitleBtn.innerHTML="CURRENT WINNER LIST";
    printType="currentWin";
    showCurrentWinnerBtn.innerHTML="LOADING...";
    $.get('php/getCurrentWinner.html',
    {},
    function(data){
//console.log(data);
var currentTktList=JSON.parse(data);

renderGridDiv.style.gridTemplateColumns="auto auto auto auto auto auto";
renderGridDiv.innerHTML=' <button class="renderGridBtn" style="color:white;background:black;">TNO</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">PRIZE</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">NAME</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">PHONE</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">BOOKER</button>'+
'<button class="renderGridBtn" style="color:white;background:black;">WHATSAPP BOOKER</button>';

for(i=0;i<currentTktList.length;i++){
renderGridDiv.innerHTML=renderGridDiv.innerHTML+' <button class="renderGridBtn" >'+currentTktList[i].tno+'</button>'+
' <button class="renderGridBtn" >'+currentTktList[i].type+'</button>'+
' <button class="renderGridBtn" >'+currentTktList[i].name+'</button>'+
' <button class="renderGridBtn" >'+currentTktList[i].phone+'</button>'+
' <button class="renderGridBtn" >'+currentTktList[i].booker+'</button>'+
' <a class="renderGridBtn" href="whatsapp://send?phone=+91'+currentTktList[i].bookerPhone+'" style="background:green;color:white;border:2px solid white;text-decoration:none;text-align:center;">whatsapp</a>';
}

renderDiv.style.display="block";
downloadBtn.style.display="block";
showCurrentWinnerBtn.innerHTML="SHOW CURRENT WINNER";

    });



}



     function checkLastPay(){
        showLastPayBtn.innerHTML="fetching data...";
        $.get('php/checkLastTransaction.html',
        {},
        function(data){
console.log("last pay data===>"+data);
showLastPayBtn.innerHTML="SHOW LAST PAYMENT";
payInfoJson=JSON.parse(data);
//payDiv.style.display="block";
if(payInfoJson.status=="none"){
    payInfoBtn.innerHTML="no data found";
payStatusBtn.innerHTML="NO PAYMENT FOUND";
completePayBtn.style.display="none";
}else if(payInfoJson.status=="created"){
    payInfoBtn.innerHTML="Payment created at "+payInfoJson.date+" for amount "+payInfoJson.amount;
    payStatusBtn.style.background="red";
    payStatusBtn.style.color="white";
    payStatusBtn.innerHTML="PAYMENT NOT COMPLETED";
    completePayBtn.style.display="block";
}else if(payInfoJson.status=="not done"){
    payInfoBtn.innerHTML="Payment created at "+payInfoJson.date+" for amount "+payInfoJson.amount;
    payStatusBtn.style.background="yellow";
    payStatusBtn.style.color="black";
    payStatusBtn.innerHTML="PROCESS NOT COMPLETED";
    completePayBtn.style.display="block";

    setTimeout(()=>{
        window.location="http://localhost/starttambola.com?razorpay_payment_link_id="+payInfoJson.payLinkId;
    },5000);
}else if(payInfoJson.status=="done"){
    payInfoBtn.innerHTML="Payment created at "+payInfoJson.date+" for amount "+payInfoJson.amount;
    payStatusBtn.style.background="green";
    payStatusBtn.style.color="white";
    payStatusBtn.innerHTML="RENEWED SUCCESSFULLY";
    completePayBtn.style.display="none";
}
        });
     }


     function payAction(){
        if(payInfoJson.status=="created"){
window.location=payInfoJson.payLink;
        }else if(payInfoJson.status=="not done"){
            window.location="http://starttambola.com/publish/paymentApi/callBack.php?razorpay_payment_link_id="+payInfoJson.payLinkId;
                    }
     }
function print(){
    
    window.location="../commonApi/20_07_2024%2009_35_13%20PM47d9.pdf?type="+printType+"&sender=admin";
}
  

    function renew(){
        var host=window.location.href.split("../../index.html")[2];
        window.location="https://starttambola.com/publish/renew.html?host="+host;
    }
    

    
    function themeStore(){
        var host=window.location.href.split("../../index.html")[2];
        window.location="http://starttambola.com/publish/themeStore/home.html?domain="+host+'&sKey='+adminPassInp.value;
    }