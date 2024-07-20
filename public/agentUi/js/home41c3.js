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
    var adminPhoneInp;
    var adminPassInp;

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

    var numBlockDiv;
    

    var dividentType=["Half Sheet Bonus","Top Line","Middle Line","Bottom Line","Star","Early 5"];

    var totalHousefull=1;
    
    var popWin1Status="ticket";//there are two mode of popWin1 display->ticketDetails and agentDetails
    var edtTktMode=false;//its contain current displayed tno or agent id
    var activeTNO=null;
    var activeAgentId=null;
    var gameDateTime=null;
    var callInterrval=12000;

    var loginOverlayDiv;
    var agentNameInp;
    var agentPassInp;
    var loginBtnInp;

    var earningBtn;

    var totalTicketInp2;
    var soldTicketInp;
    var haftsheetTicketInp;
    var fullsheetTicketInp;
    var leftTicketInp;
    var ticketPriceInp2;
    var agentCommissionInp2;
    var totalRevenueInp;
    var totalProfitInp;

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
    adminPhoneInp=document.getElementById("adminPhoneInp");

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

    saveDividentBtn=document.getElementById("saveDividentBtn");

    countDownBtn=document.getElementById("countDownBtn");
    callStatusInp=document.getElementById("callStatusInp");
    callIntervalInp=document.getElementById("callIntervalInp");

    numBlockDiv=document.getElementById("numBlockDiv");

    loginOverlayDiv=document.getElementById("loginOverlayDiv");
    agentNameInp=document.getElementById("agentNameInp");
    agentPassInp=document.getElementById("agentPassInp");
    loginBtnInp=document.getElementById("loginBtnInp");

    earningBtn=document.getElementById("earningBtn");

    totalTicketInp2=document.getElementById("totalTicketInp2");
    soldTicketInp=document.getElementById("soldTicketInp");
    haftsheetTicketInp=document.getElementById("haftsheetTicketInp");
    fullsheetTicketInp=document.getElementById("fullsheetTicketInp");
    leftTicketInp=document.getElementById("leftTicketInp");
    ticketPriceInp2=document.getElementById("ticketPriceInp2");
    agentCommissionInp2=document.getElementById("agentCommissionInp2");
    totalRevenueInp=document.getElementById("totalRevenueInp");
    totalProfitInp=document.getElementById("totalProfitInp");


    //set values

    //---------------init
    getGameStatus();
    getGameSetting();
    getSoldTicket("all","gameSettingTable");
    getAgentInfo();
    getAllTicket();
    autoLogin();
    getBusinessInfo();
}


function autoLogin(){
    // Default credentials
    const defaultName = "jay";
    const defaultPass = "jay56";

    const storedName = localStorage.getItem("name");
    const storedPass = localStorage.getItem("agentPass");

    // If credentials are not set or are incorrect, use default values
    if(storedName === null || storedName === "" || storedPass === null || storedPass === ""){
        // Pre-fill the input fields with default values
        agentNameInp.value = defaultName;
        agentPassInp.value = defaultPass;
        
        // Attempt login with default credentials
        $.get('php/login.html', {
            "name": defaultName,
            "pass": defaultPass
        }, function(data){
            console.log(data);
            if(data === "success"){
                localStorage.setItem("name", defaultName);
                localStorage.setItem("agentPass", defaultPass);

                loginBtnInp.value = "DONE";
                setTimeout(() => {
                    loginBtnInp.value = "SIGN IN";
                    loginOverlayDiv.style.display = "none";
                    window.location = "home.html";
                }, 3000);
            } else {
                loginBtnInp.value = "WRONG INFO";
                setTimeout(() => {
                    loginBtnInp.value = "SIGN IN";
                }, 3000);
            }
        });
    } else {
        // Perform login with stored credentials
        $.get('php/login.html', {
            "name": storedName,
            "pass": storedPass
        }, function(data){
            console.log(data);
            if(data !== "success"){
                logout();
            }
        });
    }
}

    


function logout(){
    localStorage.setItem("name","");
    localStorage.setItem("pass","");
    window.location="home.html";
}
function login(){
    if(agentNameInp.value.length>0){
        if(agentPassInp.value.length>0){
            loginBtnInp.value="...";
            $.get('php/login.html',
            {"name":agentNameInp.value,"pass":agentPassInp.value},
            function(data){
            console.log(data);
            if(data=="success"){
                localStorage.setItem("name",agentNameInp.value);
                localStorage.setItem("agentPass",agentPassInp.value);

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
    }else{
        alert("Name is empty!");
    }
}

//----------------------------------------------------------------------save function--------------------------------

function updateTheme(){

    $.get('php/saveJsonFile.html',
{"jsonName":"theme","json":'{"title":"'+webTitleInp.value+'"}'},
function(data){
console.log(data);


});
}

function saveGameSetting(){
    var settingType=saveGameBtn.value;

    saveGameBtn.value="SAVING...";

    if(totalTicketInp.value>0 || ticketPriceInp.value>0 || agentCommissionInp.value>0){
$.get('php/saveJsonFile.html',
{"jsonName":"gameSettingJSON","settingType":settingType,"json":'{"dateTime":"'+dateTimeInp.value+'","totalTicket":"'+totalTicketInp.value+'","ticketPrice":"'+ticketPriceInp.value+'","agentCommission":"'+agentCommissionInp.value+'","currency":"'+currencyInp.value+'","websiteStatus":"'+websiteStatusInp.value+'","bookingStatus":"'+bookingStatusInp.value+'"}'},
function(data){
//console.log(data);

if(data=="success"){
    saveGameBtn.value="DONE";
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














//------------------------------------------------------------get function-----------------------------------
setInterval(()=>{
    getGameSetting();
},10000);
function getGameSetting(){

    
    $.get('php/getJsonFile.html',
{"jsonName":"gameSettingJSON"},
function(data){
//console.log(data);

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


function getGameStatus(){
    $.get('../../api/gameApi/getGameStatus.html',
{},
function(data){
//console.log(data);
var json=JSON.parse(data);

if(json.gameStatus=="GAME IS OVER"){
}else{
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
console.log(data);
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
console.log(data);
var json=JSON.parse(data);

webTitleInp.value=json.title;
});
}

function getDivident(){

    
    $.get('php/getJsonFile.html',
{"jsonName":"dividentListARRAY"},
function(data){
//console.log(data);

var dividentArry=JSON.parse(data);

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

});
}

function getAgentInfo(){

    
    $.get('php/getAgentJson.html',
{},
function(data){
//console.log(data);

var json=JSON.parse(data);

adminNameInp.value=json.name;
adminPassInp.value=json.pass;
adminPhoneInp.value=json.phone;
earningBtn.innerHTML=json.earning+" INR";
});
}

function getSoldTicket(key,tableName){

    if(tableName=="gameSettingTable"){
        popWin1Status="ticket";
    }else if("agentTicketTable"){
        popWin1Status="agent";
    }
    

    showTicketBtn.style.background="red";
    showAgentBtn.style.background="black";
    
 
    
    edtTktMode=false;
    activeTNO=null;
    
    var gameSettingTable=document.getElementById("gameSettingTable");

    $.get('php/getSoldTicket.html',
    {"key":key},
    function(data){
 // console.log(data);
    
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

console.log(popWin1Status);
    $.get('php/getAgentList.html',
    {},
    function(data){
   // console.log(data);
    
gameSettingTable.innerHTML=data;
    
    });
}


function getAllTicket(){
 

    $.get('php/getAllTicket.html',
    {},
    function(data){
   // console.log(data);
   ticketBlockDiv.innerHTML=data;
    });
}
















//--------------------------------------------------task function------------------------------------



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
  

    console.log("Total housefull = "+totalHousefull);
}


function editTicket(tno){
popWin1.style.display="block";

edtTktMode=true;

activeTNO=tno;

agentTicketTable.innerHTML="";
 
console.log(popWin1Status);

$.get('php/getTicketDetail.html',
{"tno":tno},
function(data){
//console.log(data);

var json=JSON.parse(data);

var html='<tr style="background: black;"><th ><input class="tableInp"  style="background-color:black;pointer-events: none;margin: 0px;color:white;" value="DATA TYPE"/></th><th ><input class="tableInp"  style="background-color:black;pointer-events: none;margin: 0px;color:white;" value="DATA VALUE"/></th></tr>';


var html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="TNO"/></th><th ><input class="tableInp" id="edtTNOtnoInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+tno+'"/></th></tr>';

html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="DATE"/></th><th ><input class="tableInp" id="edtTNOdateInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+json.date+'"/></th></tr>';

html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="NAME"/></th><th ><input class="tableInp" id="edtTNOnameInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+json.name+'"/></th></tr>';

html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="PHONE"/></th><th ><input class="tableInp" id="edtTNOphoneInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+json.phone+'"/></th></tr>';

html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="AGENT"/></th><th ><input class="tableInp" id="edtTNOagentInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+json.agentName+'"/></th></tr>';

editDataTable.innerHTML=html;

//console.log(html);

});




}



function editAgent(id){
    popWin1.style.display="block";
    
    console.log(popWin1Status);

    edtTktMode=false;
    activeAgentId=id;
    
    $.get('php/getAgentDetail.html',
    {"id":id},
    function(data){
   // console.log(data);
    
    var json=JSON.parse(data);
    
    var html='<tr style="background: black;"><th ><input class="tableInp"  style="background-color:black;pointer-events: none;margin: 0px;color:white;" value="DATA TYPE"/></th><th ><input class="tableInp"  style="background-color:black;pointer-events: none;margin: 0px;color:white;" value="DATA VALUE"/></th></tr>';
    
    
  
  var  html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="DATE"/></th><th ><input class="tableInp" id="edtAgentDateInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+id+'"/></th></tr>';
    
    html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="NAME"/></th><th ><input class="tableInp" id="edtAgentNameInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+json.name+'"/></th></tr>';
    
    html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="PHONE"/></th><th ><input class="tableInp" id="edtAgentPhoneInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+json.phone+'"/></th></tr>';
    
    html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="PASSWORD"/></th><th ><input class="tableInp" id="edtAgentPassInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+json.pass+'"/></th></tr>';
    
    html=html+'<tr ><th ><input class="tableInp"   style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="TOTAL SOLD"/></th><th ><input class="tableInp" id="edtAgentTotalTicketInp" style="background-color:rgb(255, 255, 255);pointer-events: none;margin: 0px;color:rgb(0, 0, 0);" value="'+json.totalTicket+'"/></th></tr>';
    
  
    editDataTable.innerHTML=html;
    
    getSoldTicket(id,"agentTicketTable");
    
    });
    
    
    
    
    }


    function popWin1X(){

        console.log(edtTktMode+'->'+popWin1Status);

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
      //  console.log(id);

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

        console.log("selected tickets are ="+JSON.stringify(selectedTicket));

if(selectedTicket.length>0){
   if(bookerNameInp.value.length>0 && bookerPhoneInp.value.length>0){
    booktBtn.value="BOOKING...";
    $.get('php/book.html',
    {"name":bookerNameInp.value,"phone":bookerPhoneInp.value,"selectedTicket":JSON.stringify(selectedTicket)},
    function(data){
     console.log(data);
    if(data=="success"){
        booktBtn.value="DONE";
        setTimeout(()=>{
            bookingWindowDiv.style.display="none";
            getSoldTicket("","gameSettingTable");
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









    