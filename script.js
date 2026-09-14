// ============================================================
// ASTRO BABAA - EASY SETTINGS
// Change ONLY these values before going live.
// WhatsApp/phone: country code + number, without + or spaces.
// UPI: your real UPI ID.
// Social links: paste your real Instagram/Facebook profile links.
// ============================================================
const WHATSAPP_NUMBER_1 = "917355488003"; // PRIMARY - replace with your real WhatsApp number
const WHATSAPP_NUMBER_2 = "918128261488"; // ALTERNATE - replace with your second real WhatsApp number
const CONTACT_NUMBER_1 = "917355488003";  // PRIMARY CALL - replace with your real number
const CONTACT_NUMBER_2 = "918128261488";  // ALTERNATE CALL - replace with your second real number
// Backward-compatible aliases used by the existing site:
const WHATSAPP_NUMBER = WHATSAPP_NUMBER_1;
const CONTACT_NUMBER = CONTACT_NUMBER_1;
const UPI_ID = "rt8365768@okicici";
const UPI_PAYEE_NAME = "Astro Babaa";
const INSTAGRAM_URL = "https:instagram.com/astro_babaa_";
const FACEBOOK_URL = "https://www.facebook.com/share/1aDLXjdPSZ/";
const KUNDALI_PRICE = 11;
const REGULAR_CHAT_PRICE_15MIN = 99;
const LAUNCH_OFFER_LIMIT = 100;
const LAUNCH_OFFER_FREE_MINUTES = 5;

const astrologers = [
  {photo:"assets/pandit-kunal.jpg",name:"Pandit Kunal",gender:"Male",skill:"Vedic Astrology • Face Reading",exp:"4 Years",rating:"4.9",chat:[10,99],call:20},
  {photo:"assets/acharya-shiv.jpg",name:"Acharya Shiv",gender:"Male",skill:"Vedic Astrology • Kundali",exp:"7 Years",rating:"4.8",chat:[11,99],call:18},
  {photo:"assets/pandit-arjun.jpg",name:"Pandit Arjun",gender:"Male",skill:"Numerology • Vedic Astrology",exp:"6 Years",rating:"4.8",chat:[13,99],call:20},
  {photo:"assets/acharya-mohan.jpg",name:"Acharya Mohan",gender:"Male",skill:"Face Reading • Vastu",exp:"8 Years",rating:"4.9",chat:[10,99],call:22},
  {photo:"assets/pandit-dev.jpg",name:"Pandit Dev",gender:"Male",skill:"Vedic Astrology • Remedies",exp:"10 Years",rating:"4.9",chat:[11,99],call:25},
  {photo:"assets/ananya.jpg",name:"Ananya",gender:"Female",skill:"Tarot • Numerology",exp:"5 Years",rating:"4.8",chat:[13,99],call:20},
  {photo:"assets/priya.jpg",name:"Priya",gender:"Female",skill:"Vedic Astrology • Tarot",exp:"6 Years",rating:"4.9",chat:[10,99],call:24},
  {photo:"assets/meera.jpg",name:"Meera",gender:"Female",skill:"Numerology • Face Reading",exp:"4 Years",rating:"4.7",chat:[11,99],call:18}
];

const premium = [
  {photo:"assets/pandit-raj.jpeg",name:"Pandit Raj",gender:"Male",skill:"Vedic Astrology • Face Reading • Kundali",exp:"10+ Years",rating:"5.0",chat:99,call:120},
  {photo:"assets/premium-om.jpg",name:"Premium Pandit Om",gender:"Male",skill:"Vedic Astrology • Remedies",exp:"18 Years",rating:"4.9",chat:129,call:150},
  {photo:"assets/premium-maya.jpg",name:"Premium Tarot Maya",gender:"Female",skill:"Tarot • Numerology",exp:"12 Years",rating:"4.9",chat:149,call:180},
  {photo:"assets/premium-ravi.jpg",name:"Premium Acharya Ravi",gender:"Male",skill:"Face Reading • Vastu",exp:"16 Years",rating:"4.9",chat:199,call:220},
  {photo:"assets/premium-guru.jpg",name:"Premium Guru Dev",gender:"Male",skill:"Vedic Astrology • Spiritual Guidance",exp:"20 Years",rating:"5.0",chat:249,call:299}
];

// Seven launch-ready remedies. Each remedy uses the two photos you supplied:
// 1) Pooja ritual photo + 2) Samagri photo.
const remedies = [
 {name:"Maha Rudrabhishek Pooja",price:8999,offer:1999,icon:"🔱",photos:["assets/remedies/maha-rudrabhishek-pooja.jpeg","assets/remedies/maha-rudrabhishek-samagri.jpeg"],duration:"2–3 Hours",intro:"भगवान शिव को समर्पित विशेष Rudrabhishek, जिसमें मंत्रोच्चार, अभिषेक और शिव पूजन विधि शामिल है।",benefits:["शिव आराधना और मानसिक शांति के लिए आध्यात्मिक साधना","संकल्प के अनुसार विशेष मंत्र एवं अभिषेक","परिवार के लिए शुभता और सकारात्मक वातावरण की प्रार्थना"],samagri:["दूध, दही, घी, शहद एवं गंगाजल","बेलपत्र, पुष्प, धूप और दीप","फल, नैवेद्य एवं पूजन सामग्री"]},
 {name:"Navgraha Shanti Pooja",price:7499,offer:1499,icon:"🪐",photos:["assets/remedies/navgraha-shanti-pooja.jpeg","assets/remedies/navgraha-shanti-samagri.jpeg"],duration:"2–3 Hours",intro:"नवग्रहों की शांति के लिए मंत्र, हवन और ग्रह-संबंधित पूजन सामग्री के साथ विशेष पूजा।",benefits:["नवग्रहों के प्रति पारंपरिक शांति प्रार्थना","जन्मकुंडली के अनुसार संकल्प एवं मंत्र जाप","जीवन में संतुलन और सकारात्मकता के लिए आध्यात्मिक साधना"],samagri:["नवग्रह अनाज एवं हवन सामग्री","तिल, जौ, चावल और पुष्प","घी, धूप, दीप एवं कलश सामग्री"]},
 {name:"Shani Sade Sati Peeda Shanti Pooja",price:6999,offer:1499,icon:"🌑",photos:["assets/remedies/shani-sade-sati-pooja.jpeg","assets/remedies/shani-sade-sati-samagri.jpeg"],duration:"2 Hours",intro:"शनि देव की आराधना, मंत्र जाप, तैलाभिषेक और हवन के माध्यम से पारंपरिक शनि शांति पूजा।",benefits:["शनि देव के प्रति श्रद्धापूर्वक शांति प्रार्थना","संकल्प के अनुसार शनि मंत्र एवं पूजन","आध्यात्मिक अनुशासन और सकारात्मक सोच को बढ़ावा"],samagri:["काले तिल और उड़द","सरसों का तेल एवं दीप सामग्री","काला वस्त्र, धूप और हवन सामग्री"]},
 {name:"Mangal Dosh Nivaran Pooja",price:6499,offer:999,icon:"🔥",photos:["assets/remedies/mangal-dosh-pooja.jpeg","assets/remedies/mangal-dosh-samagri.jpeg"],duration:"2–3 Hours",intro:"मंगल ग्रह से संबंधित पारंपरिक पूजा, मंत्र जाप और हवन के साथ Mangal Dosh Nivaran संकल्प।",benefits:["मंगल ग्रह की शांति के लिए पारंपरिक मंत्र एवं पूजा","जन्मकुंडली के आधार पर संकल्प","विवाह एवं पारिवारिक विषयों के लिए आध्यात्मिक प्रार्थना"],samagri:["लाल मसूर, लाल पुष्प और रोली","घी, चावल, गुड़ एवं हवन सामग्री","कलश, दीप और पूजन सामग्री"]},
 {name:"Vivah Badha Nivaran Pooja",price:5999,offer:999,icon:"💍",photos:["assets/remedies/vivah-badha-pooja.jpeg","assets/remedies/vivah-badha-samagri.jpeg"],duration:"2 Hours",intro:"विवाह में आने वाली बाधाओं के लिए पारंपरिक मंत्र, हवन और गौरी-शंकर पूजन के साथ विशेष अनुष्ठान।",benefits:["विवाह संबंधी सकारात्मक संकल्प और प्रार्थना","गौरी-शंकर एवं इष्ट देव की आराधना","परिवार में शुभ और सकारात्मक वातावरण के लिए पूजा"],samagri:["गौरी-शंकर पूजन सामग्री","लाल/पीले पुष्प, रोली और अक्षत","फल, मिठाई, घी एवं हवन सामग्री"]},
 {name:"Maa Baglamukhi Pooja",price:9999,offer:1999,icon:"🌼",photos:["assets/remedies/baglamukhi-pooja.jpeg","assets/remedies/baglamukhi-samagri.jpeg"],duration:"3 Hours",intro:"माँ बगलामुखी की पारंपरिक आराधना, मंत्र जाप और हवन के साथ विशेष पूजा।",benefits:["माँ बगलामुखी के प्रति श्रद्धापूर्वक साधना","संकल्प के अनुसार मंत्र जाप और हवन","आंतरिक स्थिरता एवं सकारात्मकता के लिए आध्यात्मिक प्रार्थना"],samagri:["पीले पुष्प और पीले वस्त्र","हल्दी, चना दाल एवं नैवेद्य","घी, धूप, दीप और हवन सामग्री"]},
 {name:"Dhan Akarshan Lakshmi Pooja",price:4999,offer:999,icon:"💰",photos:["assets/remedies/dhan-akarshan-lakshmi-pooja.jpeg","assets/remedies/dhan-akarshan-lakshmi-samagri.jpeg"],duration:"2 Hours",intro:"माँ लक्ष्मी की आराधना, दीप पूजन और पारंपरिक मंत्रों के साथ समृद्धि के लिए विशेष पूजा।",benefits:["माँ लक्ष्मी के प्रति श्रद्धापूर्वक धन-समृद्धि प्रार्थना","व्यापार एवं परिवार में सकारात्मक वातावरण के लिए संकल्प","दीप, कमल और लक्ष्मी पूजन की पारंपरिक विधि"],samagri:["कमल पुष्प, चावल और रोली","कलश, नारियल एवं आम्रपत्र","दीप, घी, मिठाई और लक्ष्मी पूजन सामग्री"]},
 {name:"Rahu-Ketu Graha Shanti Pooja",price:7999,offer:1499,icon:"☊",photos:["assets/remedies/rahu-ketu-graha-shanti-pooja.jpeg","assets/remedies/rahu-ketu-graha-shanti-samagri.jpeg"],duration:"2–3 Hours",intro:"राहु-केतु से संबंधित पारंपरिक शांति मंत्र, हवन और ग्रह पूजन के साथ विशेष अनुष्ठान।",benefits:["राहु-केतु के लिए पारंपरिक शांति संकल्प","हवन और मंत्र जाप के माध्यम से आध्यात्मिक साधना","जन्मकुंडली में ग्रह संबंधी चिंताओं पर मार्गदर्शन"],samagri:["काले तिल, उड़द और जौ","नारियल, पुष्प, धूप और दीप","हवन सामग्री, घी एवं कलश सामग्री"]},
 {name:"Kaal Bhairav Rog Mukti Pooja",price:6999,offer:1499,icon:"🕉️",photos:["assets/remedies/kaal-bhairav-rog-mukti-pooja.jpeg","assets/remedies/kaal-bhairav-rog-mukti-samagri.jpeg"],duration:"2 Hours",intro:"काल भैरव आराधना, दीप, मंत्र जाप और हवन के साथ आध्यात्मिक शांति एवं आरोग्य की प्रार्थना।",benefits:["काल भैरव की श्रद्धापूर्वक आराधना","स्वास्थ्य और मानसिक शांति के लिए आध्यात्मिक संकल्प","परंपरागत मंत्र जाप और हवन"],samagri:["काले तिल और सरसों का तेल","फूल, दीप, धूप और नैवेद्य","हवन सामग्री एवं पूजन पात्र"]},
 {name:"Vish Dosh / Kaal Sarp Dosh Shanti",price:8999,offer:1999,icon:"🐍",photos:["assets/remedies/vish-dosh-kaal-sarp-shanti-pooja.jpeg","assets/remedies/vish-dosh-kaal-sarp-samagri.jpeg"],duration:"3 Hours",intro:"नाग देवता एवं शिव आराधना के साथ विष दोष / काल सर्प दोष शांति के लिए पारंपरिक पूजा-विधि।",benefits:["राहु-केतु एवं नाग देवता की पारंपरिक शांति प्रार्थना","शिव अभिषेक, मंत्र जाप और हवन","कुंडली संकेतों के अनुसार शांति-संकल्प"],samagri:["नाग प्रतिमा/नाग पूजन सामग्री","दूध, जल, बेलपत्र एवं पुष्प","काले तिल, घी और हवन सामग्री"]},
 {name:"Sarv Grah Shanti Pooja",price:8499,offer:1499,icon:"✨",photos:["assets/remedies/sarv-grah-shanti-pooja.jpeg","assets/remedies/sarv-grah-shanti-samagri.jpeg"],duration:"3 Hours",intro:"सभी प्रमुख ग्रहों के लिए मंत्र, हवन और नवग्रह पूजन के साथ व्यापक ग्रह शांति अनुष्ठान।",benefits:["नवग्रहों के लिए सामूहिक शांति संकल्प","ग्रह मंत्र, हवन और पूजन की पारंपरिक विधि","जीवन में संतुलन और सकारात्मकता के लिए प्रार्थना"],samagri:["नवग्रह धान्य और पूजन सामग्री","घी, जौ, तिल, चावल एवं पुष्प","कलश, दीप, धूप और हवन सामग्री"]},
 {name:"Shani Kavach Path Pooja",price:5499,offer:999,icon:"🪔",photos:["assets/remedies/shani-kavach-path-pooja.jpeg","assets/remedies/shani-kavach-path-samagri.jpeg"],duration:"2 Hours",intro:"शनि कवच पाठ, शनि देव पूजन, दीपदान और मंत्र जाप के साथ पारंपरिक शनि शांति अनुष्ठान।",benefits:["शनि कवच का श्रद्धापूर्वक पाठ","शनि देव की पूजा और तैल दीपदान","अनुशासन, धैर्य और सकारात्मकता के लिए आध्यात्मिक संकल्प"],samagri:["शनि कवच/पाठ सामग्री","काले तिल, सरसों का तेल और काला वस्त्र","दीप, धूप, पुष्प एवं हवन सामग्री"]}
];

const rashis = [
 {id:"mesha",name:"Mesha (Aries)",emoji:"♈",period:"21 Mar – 19 Apr",planet:"Mars",color:"Red",number:9,text:"Courage and fresh starts are highlighted. Take initiative, but avoid rushing important decisions."},
 {id:"vrishabha",name:"Vrishabha (Taurus)",emoji:"♉",period:"20 Apr – 20 May",planet:"Venus",color:"Green",number:6,text:"Stay patient and practical. Financial planning and relationship stability are favoured."},
 {id:"mithuna",name:"Mithuna (Gemini)",emoji:"♊",period:"21 May – 20 Jun",planet:"Mercury",color:"Yellow",number:5,text:"Communication is your strength. Finish pending conversations and avoid overthinking."},
 {id:"karka",name:"Karka (Cancer)",emoji:"♋",period:"21 Jun – 22 Jul",planet:"Moon",color:"White",number:2,text:"Trust your intuition while keeping emotions balanced. Family matters can bring warmth."},
 {id:"simha",name:"Simha (Leo)",emoji:"♌",period:"23 Jul – 22 Aug",planet:"Sun",color:"Gold",number:1,text:"Confidence can attract opportunities. Lead calmly and give others space to contribute."},
 {id:"kanya",name:"Kanya (Virgo)",emoji:"♍",period:"23 Aug – 22 Sep",planet:"Mercury",color:"Green",number:5,text:"Organise priorities. Small practical improvements can create strong results."},
 {id:"tula",name:"Tula (Libra)",emoji:"♎",period:"23 Sep – 22 Oct",planet:"Venus",color:"Blue",number:6,text:"Balance and harmony are highlighted. Resolve misunderstandings and plan finances carefully."},
 {id:"vrishchika",name:"Vrishchika (Scorpio)",emoji:"♏",period:"23 Oct – 21 Nov",planet:"Mars",color:"Maroon",number:9,text:"Stay focused and avoid unnecessary arguments. A private plan may move forward steadily."},
 {id:"dhanu",name:"Dhanu (Sagittarius)",emoji:"♐",period:"22 Nov – 21 Dec",planet:"Jupiter",color:"Yellow",number:3,text:"Learning and travel themes are strong. Keep optimism grounded in a clear plan."},
 {id:"makara",name:"Makara (Capricorn)",emoji:"♑",period:"22 Dec – 19 Jan",planet:"Saturn",color:"Navy",number:8,text:"Discipline pays off. Focus on one important goal and avoid distractions."},
 {id:"kumbha",name:"Kumbha (Aquarius)",emoji:"♒",period:"20 Jan – 18 Feb",planet:"Saturn",color:"Blue",number:8,text:"New ideas can open a useful path. Share your plans with people you trust."},
 {id:"meena",name:"Meena (Pisces)",emoji:"♓",period:"19 Feb – 20 Mar",planet:"Jupiter",color:"Yellow",number:3,text:"Use creativity and intuition together. Rest and reflection can improve decisions."}
];

const money=n=>"₹"+Number(n).toLocaleString("en-IN");
const waUrl=message=>`https://wa.me/${String(WHATSAPP_NUMBER_1).replace(/\D/g,"")}?text=${encodeURIComponent(message)}`;
const waUrl2=message=>`https://wa.me/${String(WHATSAPP_NUMBER_2).replace(/\D/g,"")}?text=${encodeURIComponent(message)}`;
const callUrl=number=>`tel:+${String(number).replace(/\D/g,"")}`;
const loginData=()=>{try{return JSON.parse(localStorage.getItem("astroBabaaClient")||"null")}catch(e){return null}};
function requireLogin(action){
 const u=loginData();
 if(u) return true;
 openLoginModal(action);
 return false;
}
function openLoginModal(afterAction="consult"){
 openModal(`<div class="login-panel">
   <div class="login-icon">🔮</div><span class="eyebrow">CLIENT LOGIN</span>
   <h2>Welcome to Astro Babaa</h2>
   <p>Chat, call, appointments aur paid services continue karne ke liye apna naam aur Gmail ID enter karein.</p>
   <label>Full Name</label><input id="loginName" class="modal-input" placeholder="Enter your full name" autocomplete="name">
   <label>Gmail ID</label><input id="loginGmail" class="modal-input" type="email" placeholder="example@gmail.com" autocomplete="email">
   <button class="btn primary full" onclick="saveClientLogin('${afterAction}')">Continue →</button>
   <small class="muted">Your login is stored in this browser. This static version does not send your details to a server.</small>
 </div>`);
}
function saveClientLogin(afterAction){
 const name=document.getElementById("loginName")?.value.trim();
 const gmail=document.getElementById("loginGmail")?.value.trim().toLowerCase();
 if(!name || !/^[^\s@]+@gmail\.com$/i.test(gmail)){alert("Please enter your name and a valid Gmail ID (example@gmail.com).");return;}
 localStorage.setItem("astroBabaaClient",JSON.stringify({name,gmail,loggedInAt:new Date().toISOString()}));
 closeModal();
 updateLoginUI();
 if(afterAction==="appointment"){scrollToId("appointment");}
}
function logoutClient(){localStorage.removeItem("astroBabaaClient");updateLoginUI();alert("You have been logged out.");}
function updateLoginUI(){
 const u=loginData(), el=document.getElementById("clientLoginBtn");
 if(!el)return;
 if(u){el.textContent=`👤 ${u.name.split(" ")[0]}`;el.classList.add("logged-in");el.onclick=()=>openModal(`<div class="login-panel"><div class="login-icon">👤</div><span class="eyebrow">CLIENT ACCOUNT</span><h2>${u.name}</h2><p>${u.gmail}</p><button class="btn outline full" onclick="logoutClient();closeModal()">Logout</button></div>`);}
 else {el.textContent="Client Login";el.classList.remove("logged-in");el.onclick=()=>openLoginModal();}
}
function contactButtons(message, callMessage=""){
 const msg=callMessage||message;
 return `<div class="contact-fallback"><div class="contact-title">📲 WhatsApp / Call Options</div>
 <div class="contact-number-row"><span>Number 1</span><a class="btn outline" target="_blank" href="${waUrl(message)}">💬 WhatsApp 1</a><a class="btn outline" href="${callUrl(CONTACT_NUMBER_1)}">📞 Call 1</a></div>
 <div class="contact-number-row"><span>Number 2 (Alternate)</span><a class="btn outline" target="_blank" href="${waUrl2(message)}">💬 WhatsApp 2</a><a class="btn outline" href="${callUrl(CONTACT_NUMBER_2)}">📞 Call 2</a></div>
 <small class="muted">If Number 1 is busy or unavailable, use Number 2.</small></div>`;
}
const directWa=(number,message)=>`https://wa.me/${String(number).replace(/\D/g,"")}?text=${encodeURIComponent(message)}`;
function upiLink(amount,note){return `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_PAYEE_NAME)}&am=${Number(amount).toFixed(2)}&cu=INR&tn=${encodeURIComponent(note)}`;}
function qrUrl(amount,note){return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(upiLink(amount,note))}`;}

function openModal(html){
 const modal=document.getElementById("modal");
 document.getElementById("modalContent").innerHTML=html;
 modal.classList.add("show"); modal.setAttribute("aria-hidden","false"); document.body.classList.add("modal-open");
}
function closeModal(){document.getElementById("modal").classList.remove("show");document.getElementById("modal").setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");}

function card(a,premiumCard=false){
 const chat=premiumCard?a.chat:a.chat[1]; const perMinute=premiumCard?null:a.chat[0];
 return `<article class="${premiumCard?'premium-card':'astro-card'}">
  <div class="astro-img"><img src="${a.photo}" alt="${a.name} profile"></div>
  <div class="card-body">
   <div class="card-top"><span class="badge">${premiumCard?'👑 Premium':'🟢 Online'}</span><span class="badge">${a.gender||'Expert'}</span></div>
   <h3>${a.name}</h3><div class="rating">★★★★★ ${a.rating}</div>
   <p><b>${a.skill}</b><br>Experience: ${a.exp}</p>
   <div class="price">${premiumCard ? `Chat ${money(chat)}+ <span>•</span> Call ${money(a.call)}+` : `<span class="launch-mini">🎉 GRAND LAUNCH • FIRST 100 CLIENTS: 5 MIN FREE*</span><span class="price-pill"><span>⚡ Regular Chat</span><b>₹${perMinute} / min</b></span><span class="price-pill launch"><span>🔥 Launch Special</span><b>₹${chat} / 15 min</b></span><span class="price-pill"><span>📞 Call</span><b>${money(a.call)}+</b></span>`}</div>
   <div class="actions"><button class="btn primary" onclick="consult('${a.name}','chat',${chat},${premiumCard})">💬 Chat</button><button class="btn outline" onclick="consult('${a.name}','call',${a.call},${premiumCard})">📞 Call</button></div>
  </div></article>`;
}

function render(){
 document.getElementById("astrologerGrid").innerHTML=astrologers.map(a=>card(a)).join("");
 document.getElementById("premiumGrid").innerHTML=premium.map(a=>card(a,true)).join("");
 document.getElementById("remedyGrid").innerHTML=remedies.map((r,i)=>`<article class="remedy-card"><div class="remedy-photos"><button class="remedy-photo" onclick="openRemedyDetails(${i})" aria-label="View ${r.name} details"><img src="${r.photos[0]}" alt="${r.name} pooja ritual"><span>POOJA RITUAL</span></button><button class="remedy-photo" onclick="openRemedyDetails(${i})" aria-label="View ${r.name} details"><img src="${r.photos[1]}" alt="${r.name} samagri"><span>SAMAGRI</span></button></div><div class="remedy-content"><div class="remedy-icon">${r.icon}</div><h3>${r.name}</h3><p>${r.intro}</p><div class="remedy-meta"><span>⏱ ${r.duration}</span><div class="remedy-price"><del>${money(r.price)}</del><b>${money(r.offer)}</b><em>LAUNCH OFFER</em></div></div><button class="btn primary" onclick="openRemedyDetails(${i})">View Details & Book</button></div></article>`).join("");
 document.getElementById("appAstrologer").innerHTML=premium.map(a=>`<option value="${a.name}">${a.name}</option>`).join("");
 updateAppointmentPrice();
}

function consult(name,type,amount,isPremium){
 if(!requireLogin("consult")) return;
 const a=(isPremium?premium:astrologers).find(x=>x.name===name);
 const phone=a?.phone||WHATSAPP_NUMBER;
 const label=type==='chat'?'WhatsApp Chat':'Call';
 if(isPremium){
  openModal(`<h2>👑 Premium ${label}</h2><p><b>${name}</b> — ${money(amount)} onwards.</p><div class="notice">Premium consultation ke liye appointment booking required hai.</div><div class="payment-box"><p>Appointment ke liye payment:</p><img class="upi-qr" src="${qrUrl(amount,name+' premium '+type)}" alt="UPI QR"><div class="amount">${money(amount)}</div><p class="upi"><b>Payee:</b> Astro Babaa<br><b>UPI ID:</b> ${UPI_ID}</p><a class="btn primary" href="${upiLink(amount,name+' premium '+type)}">Pay ${money(amount)} via UPI App</a></div><a class="btn outline full" href="#appointment" onclick="closeModal();scrollToId('appointment')">📅 Book Appointment</a>`);
  return;
 }
 openModal(`<h2>${label} with ${name}</h2><div class="launch-offer-box"><b>🎉 GRAND LAUNCH OFFER</b><span>First 100 clients get <strong>5 MINUTES FREE</strong>*</span><small>After the free offer: 15-minute chat ₹99.</small></div><p>Regular 15-minute chat: <b>${money(amount)}</b>.</p><a class="btn primary full" target="_blank" href="${directWa(phone,`Hello Astro Babaa, I want to claim the 5-minute FREE launch chat. Astrologer: ${name}. Please confirm whether I am within the first 100 customers.`)}">🎁 Claim 5 Min FREE Chat (First 100)</a><p class="muted" style="text-align:center;font-size:11px">*Offer is limited to the first 100 verified customers and is subject to admin confirmation.</p><div class="payment-box"><p>QR scan karke payment karein:</p><img class="upi-qr" src="${qrUrl(amount,name+' '+type)}" alt="UPI QR"><div class="amount">${money(amount)}</div><p class="upi"><b>Payee:</b> Astro Babaa<br><b>UPI ID:</b> ${UPI_ID}</p><a class="btn primary" href="${upiLink(amount,name+' '+type)}">Pay ${money(amount)} via UPI App</a></div>${contactButtons(`Hello Astro Babaa, I have paid for ${label} with ${name}. Please start my consultation. Amount: ₹${amount}.`) }`);
}

function openRemedyDetails(index){
 const r=remedies[index];
 openModal(`<div class="remedy-detail-modal"><div class="gallery-head"><div><span class="eyebrow">POOJA DETAILS</span><h2>${r.icon} ${r.name}</h2></div><span class="gallery-price"><del>${money(r.price)}</del> <b>${money(r.offer)}</b><small>Launch Offer</small></span></div><div class="gallery-grid"><figure><img src="${r.photos[0]}" alt="${r.name} pooja ritual"><figcaption>1. Pooja Ritual</figcaption></figure><figure><img src="${r.photos[1]}" alt="${r.name} pooja samagri"><figcaption>2. Pooja Samagri</figcaption></figure></div><div class="remedy-detail-grid"><section><h3>🙏 Pooja ke baare mein</h3><p>${r.intro}</p><p><b>Approx. Duration:</b> ${r.duration}</p></section><section><h3>✨ Paramparik uddeshya</h3><ul>${r.benefits.map(x=>`<li>${x}</li>`).join('')}</ul></section><section><h3>🪔 Samagri</h3><ul>${r.samagri.map(x=>`<li>${x}</li>`).join('')}</ul></section></div><div class="notice">Photos, pooja vidhi aur samagri details payment se pehle dekh sakte hain. Booking confirm karne ke liye niche <b>Proceed to Payment</b> par click karein.</div><button class="btn primary full" onclick="buyRemedy(${index})">Proceed to Payment — ${money(r.offer)}</button></div>`);
}
function openRemedyPhotos(index){ openRemedyDetails(index); }
function buyRemedy(index){
 const r=remedies[index];
 openModal(`<div class="remedy-payment-modal"><div class="gallery-head"><div><span class="eyebrow">SECURE BOOKING</span><h2>${r.icon} ${r.name}</h2></div><span class="gallery-price"><del>${money(r.price)}</del> <b>${money(r.offer)}</b><small>Launch Offer</small></span></div><div class="gallery-mini"><img src="${r.photos[0]}" alt="Pooja ritual"><img src="${r.photos[1]}" alt="Samagri"></div><div class="payment-box"><p><b>Step 1:</b> QR scan karke payment karein.</p><img class="upi-qr" src="${qrUrl(r.offer,r.name)}" alt="UPI QR"><div class="amount">${money(r.offer)}</div><p class="upi"><b>Payee:</b> Astro Babaa<br><b>UPI ID:</b> ${UPI_ID}</p><a class="btn primary" href="${upiLink(r.offer,r.name)}">Pay ${money(r.offer)} via UPI App</a></div><div class="notice"><b>Step 2:</b> Payment ke baad apna booking confirmation WhatsApp par bhejein. UTR/transaction number bhi message mein add karein.</div><a class="btn outline full" target="_blank" href="${waUrl(`Hello Astro Babaa, I want to book ${r.name}. Amount: ₹${r.offer}. I have completed payment. My UTR/Transaction No.: `)}">💬 Confirm Booking on WhatsApp</a><button class="btn text-btn full" onclick="openRemedyDetails(${index})">← Back to Pooja Details</button></div>`);
}

function updateAppointmentPrice(){
 const a=premium.find(x=>x.name===document.getElementById("appAstrologer")?.value)||premium[0];
 const type=document.getElementById("appType")?.value||"chat";
 const price=type==='call'?a.call:a.chat;
 const box=document.getElementById("premiumPriceInfo"); if(box) box.innerHTML=`<b>Selected price:</b> ${money(price)} &nbsp; • &nbsp; QR will be generated for this exact amount.`;
}

function submitAppointment(e){
 if(!requireLogin("appointment")) return;
 e.preventDefault();
 const a=premium.find(x=>x.name===document.getElementById("appAstrologer").value)||premium[0];
 const type=document.getElementById("appType").value;
 const isCall=type==='call'; const amount=isCall?a.call:a.chat;
 const msg=`Hello Astro Babaa, I want to book a PREMIUM ${isCall?'CALL':'CHAT'} appointment.\nName: ${document.getElementById("appName").value}\nWhatsApp: ${document.getElementById("appPhone").value}\nAstrologer: ${a.name}\nDate: ${document.getElementById("appDate").value}\nTime: ${document.getElementById("appTime").value}\nAmount: ₹${amount}`;
 openModal(`<h2>📅 ${a.name} Appointment</h2><p>Selected: <b>${isCall?'Premium Call':'Premium Chat'}</b> — <b>${money(amount)}</b></p><div class="payment-box"><p>Appointment payment ke liye QR scan karein:</p><img class="upi-qr" src="${qrUrl(amount,a.name+' appointment '+type)}" alt="Appointment UPI QR"><div class="amount">${money(amount)}</div><p class="upi"><b>Payee:</b> Astro Babaa<br><b>UPI ID:</b> ${UPI_ID}</p><a class="btn primary" href="${upiLink(amount,a.name+' appointment '+type)}">Pay ${money(amount)} via UPI App</a></div>${contactButtons(msg)}`);
}

function showKundaliPayment(){
 const name=document.getElementById("kname").value.trim();
 const gender=document.getElementById("kgender").value;
 const dob=document.getElementById("kdob").value;
 const time=document.getElementById("ktime").value;
 const place=document.getElementById("kplace").value.trim();
 if(!name||!gender||!dob||!time||!place){alert("Please fill Full Name, Gender, Date of Birth, Time of Birth and Place of Birth.");return;}
 sessionStorage.setItem("kundaliInput",JSON.stringify({name,gender,dob,time,place}));
 openModal(`<h2>🪐 Paid Kundali — ₹11</h2>
 <p><b>${name}</b><br>${gender} • ${dob} • ${time} • ${place}</p>
 <div class="payment-box"><p><b>Step 1:</b> Pay exactly ₹11 using the QR/UPI below.</p>
 <img class="upi-qr" src="${qrUrl(11,'Astro Babaa Kundali')}" alt="UPI QR"><div class="amount">₹11</div>
 <p class="upi"><b>Payee:</b> Astro Babaa<br><b>UPI ID:</b> ${UPI_ID}</p>
 <a class="btn primary" href="${upiLink(11,'Astro Babaa Kundali')}">Pay ₹11 via UPI App</a></div>
 <div class="notice warning"><b>Step 2:</b> Payment ke baad UTR / Transaction ID yahan submit karein. <b>Sirf UTR likhne se Kundali unlock nahi hogi.</b> Payment ko admin verify karega.</div>
 <label>Transaction / UTR Number</label>
 <input id="txnId" class="modal-input" placeholder="Enter your real UTR / transaction ID" autocomplete="off">
 <button class="btn primary full" onclick="submitKundaliVerification()">Submit for Payment Verification</button>
 <small class="muted">Your report will remain locked until payment is verified. This prevents fake UTR entries from generating a paid Kundali.</small>`);
}

function submitKundaliVerification(){
 const txn=document.getElementById("txnId")?.value.trim();
 const data=JSON.parse(sessionStorage.getItem("kundaliInput")||"null");
 if(!data){alert("Please enter your birth details again.");return;}
 if(!txn || !/^[A-Za-z0-9][A-Za-z0-9._-]{7,63}$/.test(txn)){
   alert("Please enter a valid-looking UTR / Transaction ID (minimum 8 characters).");
   return;
 }
 sessionStorage.setItem("kundaliPendingTxn",txn);
 const msg=`Hello Astro Babaa, I have paid ₹11 for my Kundali and request payment verification.
Name: ${data.name}
Gender: ${data.gender}
DOB: ${data.dob}
Time: ${data.time}
Place: ${data.place}
UTR / Transaction ID: ${txn}
Please verify my payment and unlock my Kundali report.`;
 openModal(`<div class="verification-pending"><div class="success-icon">✓</div>
 <h2>Payment Verification Requested</h2>
 <p>Your UTR <b>${txn}</b> has been submitted for verification.</p>
 <div class="notice warning"><b>Kundali is still locked.</b><br>Admin must verify the ₹11 payment before the report can be generated.</div>
 <a class="btn primary full" target="_blank" href="${waUrl(msg)}">💬 Send Verification Request on WhatsApp</a>
 <button class="btn outline full" onclick="closeModal()">Close</button>
 </div>`);
}

/* Paid report renderer.
   IMPORTANT: this function is intentionally NOT callable from the customer UTR form.
   A real launch deployment must call it only after server-side payment verification. */
async function unlockKundali(){
 alert("Payment verification is required before the Kundali can be generated. Please wait for admin approval.");
}

function kundaliReportField(label,value){return `<div><b>${label}</b><span>${value}</span></div>`;}

// Lightweight browser-side Vedic calculation engine. It calculates Sun/Moon/planets,
// Lahiri-style sidereal longitudes, Lagna, Nakshatra, Tithi, Yoga, Karana and house placements
// without requiring an API key. Location is resolved from a small India city map first,
// then OpenStreetMap when the site is online.
const KUNDALI_CITIES={
 "ahmedabad":[23.0225,72.5714],"mumbai":[19.076,72.8777],"delhi":[28.6139,77.209],"new delhi":[28.6139,77.209],
 "surat":[21.1702,72.8311],"vadodara":[22.3072,73.1812],"rajkot":[22.3039,70.8022],"jaipur":[26.9124,75.7873],
 "lucknow":[26.8467,80.9462],"varanasi":[25.3176,82.9739],"patna":[25.5941,85.1376],"kolkata":[22.5726,88.3639],
 "indore":[22.7196,75.8577],"bhopal":[23.2599,77.4126],"pune":[18.5204,73.8567],"nagpur":[21.1458,79.0882],
 "chennai":[13.0827,80.2707],"bengaluru":[12.9716,77.5946],"bangalore":[12.9716,77.5946],"hyderabad":[17.385,78.4867],
 "haridwar":[29.9457,78.1642],"rishikesh":[30.0869,78.2676],"ayodhya":[26.799,82.204],"mathura":[27.4924,77.6737],"prayagraj":[25.4358,81.8463]
};
const PLANET_NAMES={Sun:"Surya",Moon:"Chandra",Mars:"Mangal",Mercury:"Budh",Jupiter:"Guru",Venus:"Shukra",Saturn:"Shani",Rahu:"Rahu",Ketu:"Ketu"};
const RASHI_NAMES=["Mesha","Vrishabha","Mithuna","Karka","Simha","Kanya","Tula","Vrishchika","Dhanu","Makara","Kumbha","Meena"];
const RASHI_LORDS=["Mangal","Shukra","Budh","Chandra","Surya","Budh","Shukra","Mangal","Guru","Shani","Shani","Guru"];
const NAKSHATRAS=["Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra","Punarvasu","Pushya","Ashlesha","Magha","Purva Phalguni","Uttara Phalguni","Hasta","Chitra","Swati","Vishakha","Anuradha","Jyeshtha","Mula","Purva Ashadha","Uttara Ashadha","Shravana","Dhanishtha","Shatabhisha","Purva Bhadrapada","Uttara Bhadrapada","Revati"];
const NAK_LORDS=["Ketu","Venus","Sun","Moon","Mars","Rahu","Jupiter","Saturn","Mercury"];
function norm360(x){x%=360;return x<0?x+360:x;}
function rad(x){return x*Math.PI/180;}
function deg(x){return x*180/Math.PI;}
function sind(x){return Math.sin(rad(x));} function cosd(x){return Math.cos(rad(x));} function tand(x){return Math.tan(rad(x));}
function kepler(M,e){let E=rad(M);for(let i=0;i<8;i++)E-= (E-e*Math.sin(E)-rad(M))/(1-e*Math.cos(E));return E;}
function orbitalPosition(d,body){
 const E={
  Mercury:[48.3313,3.24587E-5,7.0047,5.00E-8,29.1241,1.01444E-5,0.387098,0,0.205635,5.59E-10,168.6562,4.0923344368],
  Venus:[76.6799,2.46590E-5,3.3946,2.75E-8,54.8910,1.38374E-5,0.72333,0,0.006773,-1.302E-9,48.0052,1.6021302244],
  Earth:[0,0,0,0,282.9404,4.70935E-5,1,0,0.016709,-1.151E-9,356.0470,0.9856002585],
  Mars:[49.5574,2.11081E-5,1.8497,-1.78E-8,286.5016,2.92961E-5,1.523688,0,0.093405,2.516E-9,18.6021,0.5240207766],
  Jupiter:[100.4542,2.76854E-5,1.3030,-1.557E-7,273.8777,1.64505E-5,5.20256,0,0.048498,4.469E-9,19.8950,0.0830853001],
  Saturn:[113.6634,2.38980E-5,2.4886,-1.081E-7,339.3939,2.97661E-5,9.55475,0,-0.055892,-9.499E-9,316.9670,0.0334442282]
 };
 const q=E[body]; const N=q[0]+q[1]*d,i=q[2]+q[3]*d,w=q[4]+q[5]*d,a=q[6]+q[7]*d,e=q[8]+q[9]*d,M=norm360(q[10]+q[11]*d);
 const EE=kepler(M,e), xv=a*(Math.cos(EE)-e), yv=a*(Math.sqrt(1-e*e)*Math.sin(EE)); const v=deg(Math.atan2(yv,xv)),r=Math.hypot(xv,yv);
 const xh=r*(cosd(N)*cosd(v+w)-sind(N)*sind(v+w)*cosd(i));
 const yh=r*(sind(N)*cosd(v+w)+cosd(N)*sind(v+w)*cosd(i));
 const zh=r*(sind(v+w)*sind(i));
 return [xh,yh,zh];
}
function moonPosition(d){
 const N=125.1228-0.0529538083*d,i=5.1454,w=318.0634+0.1643573223*d,a=60.2666,e=0.0549,M=115.3654+13.0649929509*d;
 const E=kepler(M,e),xv=a*(Math.cos(E)-e),yv=a*(Math.sqrt(1-e*e)*Math.sin(E));const v=deg(Math.atan2(yv,xv)),r=Math.hypot(xv,yv);
 const x=r*(cosd(N)*cosd(v+w)-sind(N)*sind(v+w)*cosd(i));const y=r*(sind(N)*cosd(v+w)+cosd(N)*sind(v+w)*cosd(i));const z=r*(sind(v+w)*sind(i));
 return norm360(deg(Math.atan2(y,x)));
}
function sunLongitude(d){
 const e=orbitalPosition(d,"Earth"); return norm360(deg(Math.atan2(-e[1],-e[0])));
}
function ayanamsa(d){const years=2000+(d/365.2425);return 23.85675+0.013968*(years-2000);}
function siderealSun(d){return norm360(sunLongitude(d)-ayanamsa(d));}
function siderealPlanetLongitudes(d){
 const earth=orbitalPosition(d,"Earth"); const out={};
 for(const body of ["Mercury","Venus","Mars","Jupiter","Saturn"]){const p=orbitalPosition(d,body);out[body]=norm360(deg(Math.atan2(p[1]-earth[1],p[0]-earth[0]))-ayanamsa(d));}
 out.Sun=siderealSun(d); out.Moon=norm360(moonPosition(d)-ayanamsa(d));
 const node=norm360(125.04452-0.0529538083*d-ayanamsa(d));out.Rahu=node;out.Ketu=norm360(node+180);return out;
}
function ascendant(d,lat,lon){
 const gmst=norm360((280.46061837+360.98564736629*d)+lon); const lst=norm360(gmst); const eps=23.4393-3.563E-7*d;
 let asc=deg(Math.atan2(-cosd(lst),sind(lst)*cosd(eps)+tand(lat)*sind(eps))); return norm360(asc);
}
function jdFromIST(date,time){
 const [Y,M,D]=date.split('-').map(Number),[h,m]=time.split(':').map(Number); return Date.UTC(Y,M-1,D,h-5,m-30,0)/86400000+2440587.5;
}
async function resolvePlace(place){
 const key=place.trim().toLowerCase(); if(KUNDALI_CITIES[key])return {lat:KUNDALI_CITIES[key][0],lon:KUNDALI_CITIES[key][1],label:place};
 try{const url=`https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in&q=${encodeURIComponent(place)}`;const res=await fetch(url,{headers:{Accept:"application/json"}});const arr=await res.json();if(arr[0])return {lat:Number(arr[0].lat),lon:Number(arr[0].lon),label:arr[0].display_name.split(',').slice(0,2).join(',')};}catch(e){}
 return {lat:23.0225,lon:72.5714,label:`${place} (location fallback: Ahmedabad)`};
}
function formatDeg(x){return `${norm360(x).toFixed(2)}°`; }
// Naam Rashi: traditional Vedic naming syllables are used when a matching sound is found.
const NAME_RASHI_SYLLABLES=[
 {rashi:"Mesha",lord:"Mangal",syllables:["chu","che","cho","la","li","lu","le","lo","a"]},
 {rashi:"Vrishabha",lord:"Shukra",syllables:["ee","i","u","oo","e","va","vi","vu","ve","vo"]},
 {rashi:"Mithuna",lord:"Budh",syllables:["ka","ki","ku","gh","ke","ko","ha"]},
 {rashi:"Karka",lord:"Chandra",syllables:["hi","hu","he","ho","da","di","du","de","do"]},
 {rashi:"Simha",lord:"Surya",syllables:["ma","mi","mu","me","mo","ta","ti","tu","te"]},
 {rashi:"Kanya",lord:"Budh",syllables:["to","pa","pi","pu","sha","shi","shu","she","sho","na","tha","the","pe","po"]},
 {rashi:"Tula",lord:"Shukra",syllables:["ra","ri","ru","re","ro"]},
 {rashi:"Vrishchika",lord:"Mangal",syllables:["to","na","ni","nu","ne","no","ya","yi","yu"]},
 {rashi:"Dhanu",lord:"Guru",syllables:["ye","yo","bha","bhi","bhu","dha","pha","bhe","bho"]},
 {rashi:"Makara",lord:"Shani",syllables:["bho","ja","ji","ju","je","jo","khi","khu","khe","kho","ga","gi"]},
 {rashi:"Kumbha",lord:"Shani",syllables:["gu","ge","go","sa","si","su","se","so","da"]},
 {rashi:"Meena",lord:"Guru",syllables:["di","du","tha","jha","de","do","cha","chi"]}
];
function getNameRashi(name){
 const clean=String(name||"").toLowerCase().replace(/[^a-z]/g,"");
 if(!clean)return null;
 for(const item of NAME_RASHI_SYLLABLES){
  if(item.syllables.some(x=>clean.startsWith(x)))return item;
 }
 const first=clean[0];
 // Website display follows the user's requested first-letter Naam Rashi mapping.
 // This keeps the Rashi shown at the top, chart legend and report identical.
 const fallback={a:"Mesha",b:"Vrishabha",c:"Mithuna",d:"Karka",e:"Mesha",f:"Vrishabha",g:"Mithuna",h:"Karka",i:"Mesha",j:"Dhanu",k:"Mithuna",l:"Mesha",m:"Simha",n:"Kanya",o:"Mesha",p:"Kanya",q:"Kanya",r:"Tula",s:"Kumbha",t:"Simha",u:"Vrishabha",v:"Vrishabha",w:"Vrishabha",x:"Kumbha",y:"Vrishchika",z:"Kumbha"};
 const r=fallback[first]||"Mesha"; return NAME_RASHI_SYLLABLES.find(x=>x.rashi===r)||NAME_RASHI_SYLLABLES[0];
}
function detectDoshas(result){
 const h=result.planets||{}; const marsHouse=h.Mars?.house;
 const manglik=[1,4,7,8,12].includes(marsHouse);
 const rahuHouse=h.Rahu?.house, ketuHouse=h.Ketu?.house;
 const onArc=(point,start,end)=>{let x=start;for(let i=0;i<12;i++){if(x===point)return true;if(x===end)return false;x=(x+1)%12;}return false;};
 const planetHouses=["Sun","Moon","Mars","Mercury","Jupiter","Venus","Saturn"].map(k=>h[k]?.house).filter(Boolean).map(x=>x-1);
 let kaalSarp=false;
 if(rahuHouse&&ketuHouse){
  const r=rahuHouse-1,k=ketuHouse-1;
  const sideA=planetHouses.every(ph=>onArc(ph,r,k));
  const sideB=planetHouses.every(ph=>onArc(ph,k,r));
  kaalSarp=sideA||sideB;
 }
 const sun=h.Sun?.house, ninthPlanets=result.housePlanets?.[8]||[];
 const pitra=(sun===9||h.Sun?.sign===h.Rahu?.sign||h.Sun?.sign===h.Ketu?.sign||ninthPlanets.includes("Rahu")||ninthPlanets.includes("Ketu"));
 const shaniSadeSati=[10,11,0].includes(result.moonR); // sign-based indication: Saturn near Moon sign band
 const notes=[];
 if(manglik)notes.push({name:"Mangal Dosh",remedy:"Mangal Dosh Nivaran Pooja",reason:"Mangal is placed in a traditional Manglik house from Lagna."});
 if(kaalSarp)notes.push({name:"Kaal Sarp Dosh (Indicative)",remedy:"Vish Dosh / Kaal Sarp Dosh Shanti",reason:"The seven classical planets fall on one side of the Rahu–Ketu axis in this simplified check."});
 if(pitra)notes.push({name:"Pitra Dosh (Indicative)",remedy:"Sarv Grah Shanti Pooja",reason:"Sun / 9th-house Rahu-Ketu indicators triggered in this simplified check."});
 if(shaniSadeSati)notes.push({name:"Shani Sade Sati — check required",remedy:"Shani Sade Sati Peeda Shanti Pooja",reason:"Moon sign is in the Capricorn/Aquarius/Pisces band; exact Sade Sati depends on Saturn's sidereal transit date."});
 if(!notes.length)notes.push({name:"No major dosha indicator in this quick check",remedy:"Maha Rudrabhishek Pooja",reason:"The quick browser calculation did not trigger the listed indicators. A full professional chart review can examine other yogas and afflictions."});
 return notes;
}

function calcKundali(data,loc){
 const jd=jdFromIST(data.dob,data.time),d=jd-2451543.5,ayan=ayanamsa(d),longs=siderealPlanetLongitudes(d),asc=ascendant(d,loc.lat,loc.lon);
 const moon=longs.Moon,sun=longs.Sun; const moonR=Math.floor(moon/30), nak=Math.floor(norm360(moon)/13.333333333333334);
 const tithiIndex=Math.floor(norm360(moon-sun)/12); const yogaIndex=Math.floor(norm360(moon+sun)/13.333333333333334);
 const karanaNames=["Bava","Balava","Kaulava","Taitila","Garaja","Vanija","Vishti","Shakuni","Chatushpada","Naga","Kimstughna"];
 const karanaIndex=(tithiIndex*2)%60; const karana=karanaIndex===0?"Kimstughna":karanaIndex===57?"Shakuni":karanaIndex===58?"Chatushpada":karanaIndex===59?"Naga":karanaNames[(karanaIndex-1)%7];
 const ascSign=Math.floor(asc/30), planets={}; for(const [k,v] of Object.entries(longs)){planets[k]={longitude:v,sign:Math.floor(v/30),degree:v%30,house:(Math.floor(v/30)-ascSign+12)%12+1};}
 const housePlanets=Array.from({length:12},()=>[]);for(const [k,v] of Object.entries(planets))housePlanets[v.house-1].push(PLANET_NAMES[k]);
 const nakName=NAKSHATRAS[nak],nakLord=NAK_LORDS[nak%9];
 const nameRashi=getNameRashi(data.name);
 const planetsForDosh=planets;
 return {jd,d,ayan,longs,asc,loc,moon:moon,moonR,nak,nakName,nakLord,tithi:tithiIndex+1,yoga:Math.min(yogaIndex,26)+1,karana,ascSign,housePlanets,planets:planetsForDosh,nameRashi,doshas:detectDoshas({moonR,housePlanets,planets:planetsForDosh}),
  // Website Rashi display follows the user's name-starting sound, as requested.
  rashi:nameRashi?.rashi||RASHI_NAMES[moonR],rashiLord:nameRashi?.lord||RASHI_LORDS[moonR],lagna:RASHI_NAMES[ascSign],lagnaLord:RASHI_LORDS[ascSign],
  varna:["Brahmin","Kshatriya","Vaishya","Shudra"][moonR%4],vashya:["Chatushpada","Manav","Jalachar","Vanchar","Keeta"][moonR%5],yoni:["Ashwa","Gaja","Mesha","Sarpa","Shwan","Marjar","Mushak","Gau","Mahish"][nak%9],gan:["Deva","Manushya","Rakshasa"][nak%3],nadi:["Adi","Madhya","Antya"][nak%3],tatva:["Agni","Prithvi","Vayu","Jal"][moonR%4],charan:(Math.floor((moon%13.333333333333334)/(13.333333333333334/4))+1),paya:["Swarna","Rajata","Tamra","Loha"][moonR%4]};
}
function kundaliChartHtml(result){
 const houses=result.housePlanets.map((ps,i)=>{const sign=RASHI_NAMES[(result.ascSign+i)%12];return `<div class="chart-house"><b>House ${i+1}</b><em>${sign}</em><span>${ps.length?ps.join(" • "):"—"}</span></div>`;}).join("");
 return `<div class="vedic-chart"><div class="chart-title">North Indian Lagna Chart</div><div class="north-chart-real">${houses}</div><div class="chart-legend"><span><b>Lagna:</b> ${result.lagna}</span><span><b>Naam Rashi:</b> ${result.rashi}</span><span><b>Nakshatra:</b> ${result.nakName}</span></div><p class="chart-note">हर house में Rashi + ग्रह placement दिखाया गया है। Rashi entered name ke starting sound/syllable ke traditional Naam-Rashi mapping se shown hai; Moon Rashi alag astronomical value ho sakti hai. Birth location: ${result.loc.label}.</p></div>`;
}

async function unlockKundali(){
 const txn=document.getElementById("txnId")?.value.trim(); const data=JSON.parse(sessionStorage.getItem("kundaliInput")||"null");
 if(!txn){alert("Please enter your transaction/UTR number.");return;} if(!data)return;
 openModal(`<div class="calculating"><div class="spinner"></div><h2>🪐 Calculating Kundali…</h2><p>Birth details se Lagna, Rashi, Nakshatra aur graha positions calculate ki ja rahi hain.</p></div>`);
 const loc=await resolvePlace(data.place), result=calcKundali(data,loc);
 const planetRows=Object.entries(result.longs).map(([k,v])=>kundaliReportField(PLANET_NAMES[k],`${RASHI_NAMES[Math.floor(v/30)]} ${formatDeg(v%30)}`)).join("");
 openModal(`<div class="kundali-report"><div class="report-head"><div><b>🪐 Janam Kundali</b><br><span>Astro Babaa • Calculated Birth Report</span></div><span>UTR: ${txn}</span></div><div class="report-grid kundali-main-grid">${kundaliReportField('Name',data.name)}${kundaliReportField('Gender',data.gender)}${kundaliReportField('Date of Birth',data.dob)}${kundaliReportField('Time of Birth',data.time)}${kundaliReportField('Place of Birth',data.place)}${kundaliReportField('Location',`${result.loc.lat.toFixed(4)}, ${result.loc.lon.toFixed(4)}`)}</div><div class="kundali-panel"><h3>Birth Details</h3><div class="detail-table">${kundaliReportField('Ascendant / Lagna',`${result.lagna} • ${formatDeg(result.asc%30)}`)}${kundaliReportField('Rashi / Naam Rashi',result.rashi)}${kundaliReportField('Rashi Lord',result.rashiLord)}${kundaliReportField('Moon Longitude',formatDeg(result.moon))}${kundaliReportField('Nakshatra',result.nakName)}${kundaliReportField('Nakshatra Lord',result.nakLord)}${kundaliReportField('Ayanamsa',`${result.ayan.toFixed(2)}°`)}</div></div><div class="kundali-panel"><h3>Panchang at Birth</h3><div class="detail-table">${kundaliReportField('Tithi',`Tithi ${result.tithi}`)}${kundaliReportField('Karana',result.karana)}${kundaliReportField('Yoga',`Yoga ${result.yoga}`)}${kundaliReportField('Nakshatra',result.nakName)}${kundaliReportField('Ascendant Lord',result.lagnaLord)}${kundaliReportField('Time Zone','IST • GMT +05:30')}</div></div><div class="kundali-panel"><h3>Avakhada Details</h3><div class="detail-table">${kundaliReportField('Varna',result.varna)}${kundaliReportField('Vashya',result.vashya)}${kundaliReportField('Yoni',result.yoni)}${kundaliReportField('Gan',result.gan)}${kundaliReportField('Nadi',result.nadi)}${kundaliReportField('Tatva',result.tatva)}${kundaliReportField('Rashi Lord',result.rashiLord)}${kundaliReportField('Charan',String(result.charan))}${kundaliReportField('Paya',result.paya)}</div></div><div class="kundali-panel"><h3>Graha Positions</h3><div class="detail-table planet-table">${planetRows}</div></div>${kundaliChartHtml(result)}<div class="kundali-panel"><h3>🔤 Naam Rashi & Kundali Dosha Check</h3><div class="detail-table">${kundaliReportField('Naam Rashi',result.nameRashi?.rashi||'—')}${kundaliReportField('Naam Rashi Lord',result.nameRashi?.lord||'—')}${kundaliReportField('Dosha Check',result.doshas.map(d=>d.name).join(' • '))}</div><div class="dosha-list">${result.doshas.map(d=>{const ri=remedies.findIndex(r=>r.name===d.remedy);return `<div class="dosha-item"><b>🧿 ${d.name}</b><span>${d.reason}</span><button class="btn outline" onclick="openRemedyDetails(${ri})">Pooja: ${d.remedy}</button></div>`}).join('')}</div></div><div class="notice">✓ Rashi shown in this website follows the entered name's first letter (Naam Rashi), as configured for this website. The same Naam Rashi is used consistently throughout the report; Moon Longitude is shown separately as an astronomical birth-chart value. Dosha results are quick indicators, not a substitute for a professional Vedic chart review.</div><a class="btn outline full" target="_blank" href="${waUrl(`Hello Astro Babaa, I paid ₹11 for Kundali. Name: ${data.name}. Gender: ${data.gender}. DOB: ${data.dob}. Time: ${data.time}. Place: ${data.place}. UTR: ${txn}. Please verify my payment and Kundali.`)}">💬 Send Kundali Details on WhatsApp</a></div>`);
}

function showRashi(id){
 const r=rashis.find(x=>x.id===id); if(!r)return;
 document.getElementById("rashiResult").innerHTML=`<div class="rashi-detail"><div class="rashi-big">${r.emoji}</div><div><span class="eyebrow">${r.period}</span><h2>${r.name}</h2><p>${r.text}</p><div class="rashi-meta"><span>Lucky Number: <b>${r.number}</b></span><span>Lucky Colour: <b>${r.color}</b></span><span>Ruling Planet: <b>${r.planet}</b></span></div><a class="btn primary" href="#consult">Consult Astrologer</a></div></div>`;
}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});}

const pageContent={
 horoscope:{title:"Today's Horoscope",text:"Choose your Rashi below for a quick daily guidance summary covering love, career, money and relationships.",target:"rashi"},
 year2026:{title:"Year 2026 Astrology",text:"Explore 2026 themes, planning periods and practical guidance. For a personal forecast, share your birth details with an astrologer.",target:"consult"},
 panchang:{title:"Panchang",text:"Panchang traditionally includes Vara, Tithi, Nakshatra, Yoga and Karana. Exact timings depend on your location, so confirm local timings before planning rituals.",target:"consult"},
 kundali:{title:"Paid Kundali — ₹49",text:"Enter your full name, date of birth, time of birth and place of birth. Pay ₹49 by UPI QR and enter your transaction/UTR number to unlock the front-end report request.",target:"kundali"},
 numerology:{title:"Numerology",text:"Explore symbolic insights based on name and birth-date numbers, or connect with a numerology specialist.",target:"consult"},
 tarot:{title:"Tarot Reading",text:"Ask a focused question about relationships, career or decisions and connect with a tarot reader.",target:"consult"},
 prediction:{title:"Today's Astrology Prediction",text:"Select your Rashi to see today's basic prediction. Personal readings should be based on your birth details.",target:"rashi"}
};

function addExtraSections(){
 const main=document.querySelector("main");
 main.insertAdjacentHTML("beforeend",`<section id="whyus" class="section feature-section"><div class="section-title"><span>WHY ASTRO BABAA</span><h2>Guidance that feels simple and personal</h2></div><div class="feature-grid"><article><b>⚡ Fast Connection</b><p>Choose an astrologer and move to WhatsApp for direct communication.</p></article><article><b>🔐 Safer Payments</b><p>UPI QR and UPI app payment options are shown before consultation.</p></article><article><b>🎯 Right Expert</b><p>Filter your choice by Vedic Astrology, Tarot, Numerology, Face Reading and Vastu.</p></article><article><b>📅 Premium Appointments</b><p>Premium experts use a scheduled appointment flow.</p></article></div></section>
 <section id="howitworks" class="section"><div class="section-title"><span>HOW IT WORKS</span><h2>3 simple steps</h2></div><div class="steps"><article><b>01</b><h3>Choose</h3><p>Select an astrologer, remedy or paid Kundali.</p></article><article><b>02</b><h3>Pay</h3><p>Scan the displayed QR or use your UPI app.</p></article><article><b>03</b><h3>Connect</h3><p>Use WhatsApp to confirm your consultation or booking.</p></article></div></section>
 <section id="reviews" class="section reviews-section"><div class="section-title"><span>TESTIMONIALS</span><h2>Real people. Real guidance.</h2><p>Review section inspired by the reference you shared, with original Astro Babaa presentation.</p></div><div class="review-layout"><div class="review-score"><strong>4.8</strong><span>★★★★★</span><small>Based on customer feedback</small></div><article class="review-card"><div class="stars">★★★★★</div><p>“The consultation was easy to arrange and the astrologer explained everything patiently. I liked being able to continue on WhatsApp.”</p><b>— Astro Babaa Customer</b></article></div></section>
 <section id="app247" class="section app-section"><div class="app-copy"><span class="eyebrow">THE ASTRO BABAA EXPERIENCE</span><h2>Astrology made simple, and available to you <em>24×7.</em></h2><p>Connect with astrologers, explore your Rashi, book remedies and request a Kundali from one place.</p><div class="app-points"><span>💬 Instant WhatsApp connection</span><span>🔐 UPI QR payment options</span><span>🪐 Astrology • Tarot • Numerology</span></div></div><div class="phone-mock"><div class="phone-head">🔮 Astro Babaa <small>online • guidance</small></div><div class="bubble user">When will I get married?</div><div class="bubble expert">Please share your date of birth & time first.</div><div class="bubble user">DOB • Time • Place</div><div class="typing">•••</div></div></section>
 <section id="faq" class="section"><div class="section-title"><span>FAQ</span><h2>Frequently Asked Questions</h2><p>Launch se pehle customers ke common questions ka simple answer.</p></div><div class="faq-grid"><details><summary>How do I chat with an astrologer?</summary><p>Astrologer choose karein, displayed payment complete karein aur WhatsApp button se direct conversation start karein.</p></details><details><summary>How does a premium appointment work?</summary><p>Premium expert select karein, Chat ya Call choose karein, date/time fill karein, payment karein aur WhatsApp par appointment confirm karein.</p></details><details><summary>How do I book a Pooja remedy?</summary><p>Remedies section mein pooja select karein. Pehle Pooja Details, Ritual photo, Samagri photo aur samagri list dekhein; uske baad hi Proceed to Payment se QR khulega.</p></details><details><summary>Are two photos available for every remedy?</summary><p>Haan. Har listed remedy mein pehla photo Pooja Ritual aur doosra photo Pooja Samagri ka hai.</p></details><details><summary>What is the price of the Kundali?</summary><p>Janam Kundali request ka launch price ₹11 hai. Payment ke baad UTR/Transaction ID submit karke admin verification request bhejni hoti hai.</p></details><details><summary>What details are required for Kundali?</summary><p>Full name, gender, date of birth, exact birth time aur place of birth required hai.</p></details><details><summary>Is the Kundali calculated automatically?</summary><p>Haan, updated version naam se Naam Rashi estimate karta hai aur birth date, time aur birth-place coordinates se Janma Rashi, Lagna, Nakshatra, Tithi, Yoga, Karana, graha positions aur quick dosha indicators calculate karta hai. Professional delivery se pehle result verify karna recommended hai.</p></details><details><summary>Can I contact Astro Babaa on WhatsApp?</summary><p>Haan. Consultation, remedy booking aur Kundali details ke liye WhatsApp buttons available hain.</p></details><details><summary>Can I pay using a UPI app?</summary><p>Haan. QR scan kar sakte hain ya displayed UPI payment button se compatible UPI app open kar sakte hain.</p></details><details><summary>Is my payment automatically verified?</summary><p>Is front-end version mein UTR entry customer report unlock karti hai, lekin bank-side automatic verification nahi hoti. Delivery se pehle payment verify karein.</p></details><details><summary>Can I choose a different astrologer later?</summary><p>Haan. Aap kisi bhi available astrologer ko select karke nayi consultation request start kar sakte hain.</p></details><details><summary>Can I use the website on my mobile?</summary><p>Haan. Website responsive hai aur mobile Chrome/other modern browsers ke liye optimized hai.</p></details></div></section>`);
}

function addRashiSection(){
 const info=document.querySelector(".info-grid");
 info.insertAdjacentHTML("beforebegin",`<section class="section rashi-section" id="rashi"><div class="section-title"><span>HOROSCOPE BY RASHI</span><h2>All 12 Rashis</h2><p>Apni Rashi select karein aur basic daily guidance dekhein.</p></div><div class="rashi-grid">${rashis.map(r=>`<button class="rashi-card" onclick="showRashi('${r.id}')"><span>${r.emoji}</span><b>${r.name.split(' ')[0]}</b><small>${r.name.match(/\((.*?)\)/)?.[1]||''}</small></button>`).join('')}</div><div id="rashiResult" class="rashi-result"></div></section>`);
}

function init(){
 render(); updateLoginUI(); addRashiSection(); addExtraSections();
 document.getElementById("closeModal").addEventListener("click",closeModal);
 document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal();});
 document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
 document.getElementById("menuBtn").addEventListener("click",()=>document.querySelector(".header").classList.toggle("open"));
 document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",navClick));
 document.querySelectorAll("[data-open]").forEach(btn=>btn.addEventListener("click",()=>showInfo(btn.dataset.open)));
 document.getElementById("appointmentForm").addEventListener("submit",submitAppointment);
 document.getElementById("appAstrologer").addEventListener("change",updateAppointmentPrice);
 document.getElementById("appType").addEventListener("change",updateAppointmentPrice);
 document.getElementById("socialInstagram").href=INSTAGRAM_URL;
 document.getElementById("socialFacebook").href=FACEBOOK_URL;
 document.getElementById("socialWhatsApp").href=waUrl("Hello Astro Babaa, I want to know more about your services.");
 document.getElementById("contactNumber").href=`tel:+${CONTACT_NUMBER}`;
}
function navClick(e){
 const key=e.currentTarget.dataset.key;
 if(!key)return;
 e.preventDefault();
 document.querySelector(".header").classList.remove("open");
 if(document.getElementById(key)){scrollToId(key);return;}
 showInfo(key);
}
function showInfo(key){
 const c=pageContent[key]; if(!c)return;
 openModal(`<h2>${c.title}</h2><p>${c.text}</p><a class="btn primary" href="#${c.target}" onclick="closeModal();scrollToId('${c.target}')">Open ${c.target==='rashi'?'Rashi Predictions':'Section'}</a>`);
}

document.addEventListener("DOMContentLoaded",init);
