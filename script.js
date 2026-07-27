const text = {

en:{
 correct:"Correct!",
 wrong:"Oops!",
 next:"Next Question",
 retry:"Retry Quiz"
},

zh:{
 correct:"正确！",
 wrong:"错误！",
 next:"下一题",
 retry:"重新测验"
},

ms:{
 correct:"Betul!",
 wrong:"Salah!",
 next:"Soalan Seterusnya",
 retry:"Cuba Lagi"
},

th:{
 correct:"ถูกต้อง!",
 wrong:"ไม่ถูกต้อง!",
 next:"ข้อถัดไป",
 retry:"ทำแบบทดสอบอีกครั้ง"
},

id:{
 correct:"Benar!",
 wrong:"Salah!",
 next:"Pertanyaan Berikutnya",
 retry:"Ulangi Kuis"
},

hi:{
 correct:"सही!",
 wrong:"गलत!",
 next:"अगला प्रश्न",
 retry:"क्विज़ फिर से करें"
},

ar:{
 correct:"صحيح!",
  wrong:"خطأ!",
  next:"السؤال التالي",
  retry:"إعادة الاختبار"
},

tl:{
 correct:"Tama!",
 wrong:"Mali!",
 next:"Susunod na Tanong",
 retry:"Subukang Muli"
},

tw: {
 correct: "正確！",
 wrong: "錯誤！",
 next: "下一題",
 retry: "重新挑戰"
},

vi:{
 correct:"Chính xác!",
 wrong:"Rất tiếc!",
 next:"Câu hỏi tiếp theo",
 retry:"Làm lại bài kiểm tra"
}

};

const quiz = [

{
no:1,

question:{
 en:"If you feel drowsy during operation, which action is correct?",
 zh:"如果操作过程中感到困倦，正确的做法是什么？",
 ms:"Jika anda berasa mengantuk semasa operasi, tindakan yang manakah betul?",
 th:"หากรู้สึกง่วงระหว่างปฏิบัติงาน ควรปฏิบัติอย่างไรจึงจะถูกต้อง?",
 id:"Jika Anda merasa mengantuk saat bekerja, tindakan manakah yang benar?",
 hi:"यदि संचालन के दौरान आपको नींद आने लगे, तो सही कार्रवाई क्या है?",
 ar:"إذا شعرت بالنعاس أثناء العمل، فما الإجراء الصحيح؟",
  tl:"Kung inaantok ka habang nagtatrabaho, alin ang tamang gawin?",
 tw:"如果作業時感到困倦，正確的做法是什麼？",
 vi:"Nếu bạn cảm thấy buồn ngủ trong lúc làm việc, hành động nào sau đây là đúng?"
},

choices:{
 en:["Still driving","Inform your supervisor"],
 zh:["继续驾驶","立即报告"],
 ms:["Terus memandu","Laporkan segera"],
 th:["ขับต่อไป","แจ้งทันที"],
 id:["Tetap mengemudi","Segera laporkan"],
 hi:["चलाते रहें","तुरंत सूचित करें"],
 ar:["استمر في القيادة","أبلغ فورًا"],
 tl:["Magpatuloy sa pagmamaneho","Iulat agad"],
 tw:["繼續駕駛","立即通報"],
 vi:["Tiếp tục lái xe","Báo cáo với người giám sát"]
},

explanation:{
 en:"Driving while drowsy may cause a serious accident. Stop the operation and report to your supervisor immediately.",
 zh:"疲劳驾驶可能导致严重事故。请立即停止操作并向主管报告。",
 ms:"Memandu ketika mengantuk boleh menyebabkan kemalangan serius. Hentikan operasi dan laporkan kepada penyelia anda.",
 th:"การขับขี่ขณะง่วงอาจทำให้เกิดอุบัติเหตุร้ายแรง ควรหยุดปฏิบัติงานและแจ้งหัวหน้างานทันที",
 id:"Mengemudi saat mengantuk dapat menyebabkan kecelakaan serius. Hentikan pekerjaan dan segera laporkan kepada atasan.",
 hi:"नींद की स्थिति में वाहन चलाना गंभीर दुर्घटना का कारण बन सकता है। तुरंत कार्य रोकें और अपने पर्यवेक्षक को सूचित करें।",
 ar:"قد يؤدي العمل أثناء الشعور بالنعاس إلى حادث خطير. أوقف العمل وأبلغ مشرفك فورًا.",
  tl:"Ang pagmamaneho habang inaantok ay maaaring magdulot ng malubhang aksidente. Itigil ang trabaho at ipaalam agad sa iyong superbisor.",
 tw: "疲勞駕駛可能導致嚴重事故。請立即停止操作並向主管報告。",
 vi:"Lái xe khi buồn ngủ có thể gây ra tai nạn nghiêm trọng. Hãy dừng công việc và báo cáo ngay cho người giám sát của bạn."
},

answer:1
},

{
no:2,

question:{
 en:"Regarding the driving speed limit inside the vessel, please select the correct answer.",
 zh:"关于船内行驶速度限制，请选择正确答案。",
 ms:"Mengenai had laju kenderaan di dalam kapal, sila pilih jawapan yang betul.",
 th:"เกี่ยวกับจำกัดความเร็วในการขับขี่ภายในเรือ โปรดเลือกคำตอบที่ถูกต้อง",
 id:"Mengenai batas kecepatan kendaraan di dalam kapal, silakan pilih jawaban yang benar.",
 hi:"जहाज के अंदर वाहन चलाने की गति सीमा के बारे में सही उत्तर चुनें।",
 ar:"فيما يتعلق بحد السرعة المسموح بها للقيادة داخل السفينة، يرجى اختيار الإجابة الصحيحة.",
 tl:"Tungkol sa limitasyon ng bilis ng pagmamaneho sa loob ng barko, piliin ang tamang sagot.",
 tw:"關於船內行駛速度限制，請選擇正確答案。",
 vi:"Về giới hạn tốc độ lái xe bên trong tàu, vui lòng chọn câu trả lời đúng."
},

choices:{
 en:["20 km/h","30 km/h"],
 zh:["20公里/小时","30公里/小时"],
 ms:["20 km/j","30 km/j"],
 th:["20 กม./ชม.","30 กม./ชม."],
 id:["20 km/jam","30 km/jam"],
 hi:["20 किमी/घंटा","30 किमी/घंटा"],
 ar:["20 كم/ساعة","30 كم/ساعة"],
 tl:["20 km/h","30 km/h"],
 tw:["時速20公里","時速30公里"],
  vi:["20 km/h","30 km/h"]
},

explanation:{
 en:"The maximum driving speed inside the vessel is 20 km/h. Always obey the speed limit to ensure safe cargo operations.",
 zh:"船内最高行驶速度为20公里/小时。请务必遵守限速，以确保车辆操作安全。",
 ms:"Had laju maksimum di dalam kapal ialah 20 km/j. Sentiasa patuhi had laju untuk memastikan operasi kargo yang selamat.",
 th:"ความเร็วสูงสุดในการขับขี่ภายในเรือคือ 20 กม./ชม. โปรดปฏิบัติตามจำกัดความเร็วเพื่อความปลอดภัยในการปฏิบัติงานขนถ่ายสินค้า",
 id:"Batas kecepatan maksimum di dalam kapal adalah 20 km/jam. Selalu patuhi batas kecepatan demi keselamatan operasi kargo.",
 hi:"जहाज के अंदर अधिकतम गति सीमा 20 किमी/घंटा है। सुरक्षित कार्ゴ संचालन के लिए हमेशा गति सीमा का पालन करें।",
 ar:"الحد الأقصى للسرعة داخل السفينة هو 20 كم/ساعة. التزم دائمًا بحد السرعة لضمان سلامة عمليات مناولة البضائع.",
 tl:"Ang pinakamataas na bilis sa loob ng barko ay 20 km/h. Laging sundin ang speed limit upang matiyak ang ligtas na cargo operations.",
 tw:"船內最高行駛速度為時速20公里。請務必遵守限速，以確保車輛操作安全。",
 vi:"Tốc độ lái xe tối đa bên trong tàu là 20 km/h. Luôn tuân thủ giới hạn tốc độ để đảm bảo an toàn cho hoạt động hàng hóa."
},

answer:0
},

{
no:3,

question:{
 en:"Should drivers wear gloves during cargo operations?",
 zh:"驾驶员在车辆操作時需要戴手套吗？",
 ms:"Adakah pemandu perlu memakai sarung tangan semasa operasi kargo?",
 th:"ผู้ขับขี่ควรสวมถุงมือระหว่างการปฏิบัติงานขนถ่ายสินค้าหรือไม่?",
 id:"Apakah pengemudi harus memakai sarung tangan selama operasi kargo?",
 hi:"क्या कार्गो संचालन के दौरान चालक को दस्ताने पहनने चाहिए?",
 ar:"هل يجب على السائق ارتداء القفازات أثناء عمليات مناولة البضائع؟",
 tl:"Dapat bang magsuot ng guwantes ang drayber habang nagsasagawa ng cargo operations?",
 tw:"駕駛員在車輛操作時需要戴手套嗎？",
 vi:"Tài xế có nên đeo găng tay trong quá trình thao tác hàng hóa không?"
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"Drivers must wear gloves during cargo operations to prevent damage to cargo caused by fingernails or rings.",
 zh:"驾驶员在车辆操作时必须佩戴手套，以防止指甲或戒指划伤货物。",
 ms:"Pemandu mesti memakai sarung tangan semasa operasi kargo untuk mengelakkan kerosakan pada kargo akibat kuku atau cincin.",
 th:"ผู้ขับขี่ต้องสวมถุงมือระหว่างการปฏิบัติงานขนถ่ายสินค้า เพื่อป้องกันความเสียหายต่อสินค้าที่อาจเกิดจากเล็บหรือแหวน",
 id:"Pengemudi harus memakai sarung tangan selama operasi kargo untuk mencegah kerusakan pada muatan akibat kuku atau cincin.",
 hi:"कार्गो संचालन के दौरान चालक को दस्ताने पहनने चाहिए ताकि नाखून या अंगूठी से माल को नुकसान न पहुंचे।",
 ar:"يجب على السائق ارتداء القفازات أثناء عمليات مناولة البضائع لمنع تلف الشحنة بسبب الأظافر أو الخواتم.",
 tl:"Dapat magsuot ng guwantes ang drayber sa cargo operations upang maiwasan ang pagkasira ng kargamento na dulot ng kuko o singsing.",
 tw:"駕駛員在車輛操作時必須佩戴手套，以防止指甲或戒指劃傷貨物。",
 vi:"Tài xế phải đeo găng tay trong quá trình thao tác hàng hóa để tránh làm hư hỏng hàng hóa do móng tay hoặc nhẫn gây ra.",
},

answer:0
},

{
no:4,

question:{
 en:"Regarding the safe driving distance, please select the correct answer.",
 zh:"关于安全跟车距离，请选择正确答案。",
 ms:"Mengenai jarak pemanduan yang selamat, sila pilih jawapan yang betul.",
 th:"เกี่ยวกับระยะห่างที่ปลอดภัยในการขับขี่ โปรดเลือกคำตอบที่ถูกต้อง",
 id:"Mengenai jarak aman saat mengemudi, silakan pilih jawaban yang benar.",
 hi:"सुरक्षित ड्राइविंग दूरी के संबंध में सही उत्तर चुनें।",
 ar:"فيما يتعلق بمسافة القيادة الآمنة، يرجى اختيار الإجابة الصحيحة.",
  tl:"Tungkol sa ligtas na distansya sa pagmamaneho, piliin ang tamang sagot.",
 tw:"關於安全跟車距離，請選擇正確答案。",
 vi:"Về khoảng cách lái xe an toàn, vui lòng chọn câu trả lời đúng."
},

choices:{
 en:["More than 10 m","More than 15 m"],
 zh:["10米以上","15米以上"],
 ms:["Lebih daripada 10 m","Lebih daripada 15 m"],
 th:["มากกว่า 10 เมตร","มากกว่า 15 เมตร"],
 id:["Lebih dari 10 m","Lebih dari 15 m"],
 hi:["10 मीटर से अधिक","15 मीटर से अधिक"],
 ar:["أكثر من 10 أمتار","أكثر من 15 مترًا"],
 tl:["Higit sa 10 m","Higit sa 15 m"],
 tw:["10公尺以上","15公尺以上"],
 vi:["Trên 10 m","Trên 15 m"]
},

explanation:{
 en:"Always keep a minimum driving distance of 15 meters from the vehicle ahead to ensure enough time to stop safely and avoid collisions.",
 zh:"必须与前车保持至少15米的安全跟车距离，以确保有足够的安全停止時間並防止发生碰撞。",
 ms:"Sentiasa kekalkan jarak sekurang-kurangnya 15 meter dari kenderaan di hadapan bagi memastikan masa yang mencukupi untuk berhenti dengan selamat dan mengelakkan pelanggaran.",
 th:"ควรรักษาระยะห่างจากรถคันหน้าอย่างน้อย 15 เมตร เพื่อให้มีระยะเบรกเพียงพอและป้องกันการชน",
 id:"Selalu jaga jarak minimal 15 meter dari kendaraan di depan agar memiliki waktu yang cukup untuk berhenti dengan aman dan menghindari tabrakan.",
 hi:"सुरक्षित रूप से रुकने और टक्कर से बचने के लिए आगे वाले वाहन से हमेशा कम से कम 15 मीटर की दूरी बनाए रखें।",
 ar:"حافظ دائمًا على مسافة لا تقل عن 15 مترًا من المركبة التي أمامك لضمان وجود مسافة كافية للتوقف بأمان وتجنب الاصطدام.",
 tl:"Palaging panatilihin ang hindi bababa sa 15 metrong distansya mula sa sasakyan sa unahan upang magkaroon ng sapat na distansya sa paghinto at maiwasan ang banggaan.",
 tw:"必須與前車保持至少15公尺的安全跟車距離，以確保有足夠的安全停止時間並防止發生碰撞。",
 vi:"Luôn giữ khoảng cách tối thiểu 15 mét với xe phía trước để đảm bảo có đủ thời gian dừng xe an toàn và tránh va chạm."
},

answer:1
},

{
no:5,

question:{
 en:"Regarding reverse driving, is this operation correct?",
 zh:"关于倒车操作，此操作是否正确？",
 ms:"Mengenai pemanduan mengundur, adakah operasi ini betul?",
 th:"เกี่ยวกับการขับถอยหลัง การปฏิบัตินี้ถูกต้องหรือไม่?",
 id:"Mengenai pengoperasian mundur, apakah cara ini sudah benar?",
 hi:"रिवर्स driving के संबंध में, क्या यह तरीका सही है?",
 ar:"فيما يتعلق بالقيادة للخلف، هل هذه العملية صحيحة؟",
  tl:"Tungkol sa pagmamanehong paatras, tama ba ang paraang ito?",
 tw:"關於倒車操作，此操作是否正確？",
 vi:"Về việc lái xe lùi, thao tác này có đúng không?"
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"Reverse driving without a signalman is strictly prohibited. Always ensure a signalman is present to guide the vehicle and prevent accidents.",
 zh:"严禁在没有指挥员（Signalman）的情况下进行倒车操作。必须确保有指挥员引导车辆，以防止事故发生。",
 ms:"Pemanduan mengundur tanpa signalman adalah dilarang sama sekali. Sentiasa pastikan signalman hadir untuk membimbing kenderaan dan mencegah kemalangan.",
 th:"ห้ามขับรถถอยหลังโดยไม่มีผู้ให้สัญญาณ (Signalman) อย่างเด็ดขาด ต้องมีผู้ให้สัญญาณคอยนำทางทุกครั้งเพื่อป้องกันอุบัติเหตุ",
 id:"Mengemudi mundur tanpa signalman dilarang keras. Pastikan selalu ada signalman yang memandu arah kendaraan untuk mencegah kecelakaan.",
 hi:"सिग्नलमैन के बिना रिवर्स ड्राइविंग करना सख्त मना है। दुर्घटनाओं से बचने के लिए वाहन को मार्गदर्शन देने हेतु हमेशा सिग्नलमैन मौजूद होना चाहिए।",
 ar:"يُمنع منعًا باتًا القيادة للخلف بدون مُوجِّه (Signalman). يجب دائمًا وجود مُوجِّه لتوجيه المركبة ومنع وقوع الحوادث.",
  tl:"Mahigpit na ipinagbabawal ang pagmamaneho nang paatras nang walang signalman. Laging tiyaking may signalman na gumagabay sa sasakyan upang maiwasan ang aksidente.",
 tw:"嚴禁在沒有指揮員（Signalman）的情況下進行倒車操作。必須確保有指揮員引導車輛，以防止事故發生。",
 vi:"Nghiêm cấm lái xe lùi mà không có người ra tín hiệu (signalman). Luôn đảm bảo có người ra tín hiệu để hướng dẫn xe và phòng tránh tai nạn."
},

answer:0
},

];

let current = 0;
let score = 0;
let playerName = "";
let language = "en";

function changeLanguage(lang, button){

    language = lang;

    let buttons = document.getElementsByClassName("langBtn");

    for(let i=0;i<buttons.length;i++){

        buttons[i].classList.remove("selected");

    }

    button.classList.add("selected");

}
function showQuestion(){

    document.getElementById("quizImage").src =
        "images/" + quiz[current].no + ".png";

    document.getElementById("question").innerText =
        quiz[current].question[language];

    document.getElementById("btn1").innerText =
        quiz[current].choices[language][0];

    document.getElementById("btn2").innerText =
        quiz[current].choices[language][1];

    document.getElementById("btn1").style.display = "inline";
    document.getElementById("btn2").style.display = "inline";

    if(quiz[current].choices[language].length == 3){

        document.getElementById("btn3").innerText =
            quiz[current].choices[language][2];

        document.getElementById("btn3").style.display = "inline";

    }else{

        document.getElementById("btn3").style.display = "none";

    }

    //
    document.getElementById("result").innerText = "";

    document.getElementById("nextBtn").style.display = "none";

    document.getElementById("nextBtn").innerText =
        text[language].next;
}

function judge(choice){

    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";

    document.getElementById("question").innerText = "";

if(choice == quiz[current].answer){

    score++;

    if(quiz[current].no == 10){

        document.getElementById("quizImage").src = "images/10-1.png";

    }else{

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-1.png";

    }

    document.getElementById("result").innerHTML =
        "<b style='color:green'>" +
        text[language].correct +
        "</b><br><br>" +
        quiz[current].explanation[language];

}else{

    if(quiz[current].no == 10){

        if(choice == 2){

            // Blue Direction
            document.getElementById("quizImage").src = "images/10-3.png";

        }else{

            // Red Direction
            document.getElementById("quizImage").src = "images/10-2.png";

        }

    }else{

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-2.png";

    }

    document.getElementById("result").innerHTML =
        "<b style='color:red'>" +
        text[language].wrong +
        "</b><br><br>" +
        quiz[current].explanation[language];

}

    document.getElementById("nextBtn").style.display = "inline";
}

function nextQuestion(){

    current++;

    if(current >= quiz.length){

        let percent = Math.round(score / quiz.length * 100);

        document.getElementById("question").innerHTML =
            "<h2>Finished!</h2>" +
            "<p><b>Name:</b> " + playerName + "</p>" +
            "<p><b>Score:</b> " + score + " / " + quiz.length + "</p>" +
            "<p><b>Accuracy:</b> " + percent + "%</p>";

        document.getElementById("quizImage").style.display = "none";
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("btn3").style.display = "none";
        document.getElementById("result").innerText = "";
        document.getElementById("nextBtn").style.display = "none";

        document.getElementById("certificate").style.display = "block";

if(percent == 100){

    let today = new Date();

    let date =
    today.getFullYear() + " / " +
    (today.getMonth()+1) + " / " +
    today.getDate();

document.getElementById("certificate").innerHTML =

"<img src='images/certificate_bg.png' id='certBg'>" +

"<div id='certText1'>This certifies that</div>" +

"<div id='certName'>" + playerName + "</div>" +

"<div id='certText2'>has successfully completed</div>" +

"<div id='certCourse'>K-Learning for Driver</div>" +

"<div id='certText3'>with a perfect score of 15/15</div>" +

"<div id='certScore'>100%</div>" +

"<div id='certDate'>Issue Date : " + date + "</div>" +

"<div id='certSign'><img src='images/signature.png'></div>";

}else{

document.getElementById("certificate").innerHTML =
    "<button onclick='retryQuiz()'>" +
    text[language].retry +
    "</button>";

}

        return;
    }

    showQuestion();
}

function startQuiz(){

    playerName = document.getElementById("playerName").value;

    if(playerName == ""){

        alert("Please enter your name.");
        return;

    }

    current = 0;
    score = 0;

    document.getElementById("certificate").style.display = "none";
    document.getElementById("quizImage").style.display = "block";
    document.getElementById("result").innerText = "";

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";

    showQuestion();
}

function retryQuiz(){

    current = 0;
    score = 0;

    document.getElementById("certificate").style.display = "none";

    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";

    document.getElementById("playerName").value = "";
    document.getElementById("question").innerHTML = "";

}