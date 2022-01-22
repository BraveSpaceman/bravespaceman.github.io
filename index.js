//var screenshot = null;
//var likes_number = '';
//var email_address = '';

var buy_price = 0;
var buy_num = 1;
var max_num = 3;


function minusNum()
{
    if(buy_num == 1) {
        return;
    } else {
        buy_num -= 1;
        setNum(String(buy_num));
        setPrice(String(buy_num*buy_price));
    }
}

function plusNum()
{
    if(buy_num == max_num) {
        if(language=="ZH") {
            alert("每次最多只能购买三枚");
        } else {
            alert("can only buy 3 items evertime");
        }
        return;
    } else {
        buy_num += 1;
        setNum(String(buy_num));
        setPrice(String(buy_num*buy_price));
    }
}

function buy()
{
    /*#todo*/
}

//function screenshotSelected(files)
//{
//    if(files.length>0)
//    {
//        screenshot = files[0];
//    }
//}

//function uploadWelfare()
//{
//    if(screenshot!=null)
//    {
//        var reader = new FileReader();
//        reader.onload = upload;
//        reader.readAsArrayBuffer(screenshot);
//        //recreate input element to a choose the same file cann't upload problem
//        ejs.renderFile('ejs/upload.ejs', null, null, callback);
//    }
//
//    function upload(event)
//    {
//        var url     = '/uploadfile?filename='+screenshot.name;
//        var data    = event.target.result;
//        var options = {
//            success: success,
//            error: error,
//            content_type: 'application/octet-stream'
//        }
//        AJAX('POST', encodeURI(url), data, options);
//    }
//
//    function success(xhr)
//    {
//        var data = JSON.parse(xhr.responseText);
//        if(data.err)
//        {
//            alert('failed! it may be size exceed.');
//        }
//        else
//        {
//            alert('success! see it in server directory.');
//        }
//    }
//
//    function error(xhr)
//    {
//        alert('you may need start the server first!')
//    }
//}


function openLootBox()
{
    if(language=="ZH") {
        alert("即将发售，请关注官方推特，获取最新通知！");
    } else {
        alert("Coming soon, please follow us in twitter, to get the latest notice!");
    }
	//document.getElementById("lootTc").style.display = "block";
}

function closeLootBox()
{
	document.getElementById("lootTc").style.display = "none";
}

//function openWelfareBox()
//{
//	document.getElementById("welfareTc").style.display = "block";
//}
//
//function closeWelfareBox()
//{
//	document.getElementById("welfareTc").style.display = "none";
//}

function setNum(num) /*num is string*/
{
	document.getElementById("buynum").innerText = num;
}

function setPrice(price) /*num is string*/
{
	document.getElementById("buyprice").innerText = price;
}

//function setScreenshot(name) /*num is string*/
//{
//	document.getElementById("buyImg").innerText = name;
//}
//
//function getLikesNumber()
//{
//    return document.getElementById("likesval").innerText;
//}
//
//function getEmailAddress()
//{
//    return document.getElementById("emailVal").innerText;
//}
