let menu = document.getElementById('menu');
let ourDesign = document.getElementById('designBody');
let oldRecord = document.getElementById('oldRecord');
let newRecord = document.getElementById('newRecord');
let recordBody = document.getElementById('recordBody');
let myCut = document.getElementById('ourDesign');
let addDesign = document.getElementById('addDesign');
let clk=0;
let name, info;



let myData = [

    {
        design: [
            "./IMAG/one.jpg",
            "./IMAG/two.jpg",
            "./IMAG/three.jpg",
            "./IMAG/four.jpg",
            "./IMAG/five.jpg",
            "./IMAG/six.jpg",
            "./IMAG/seven.jpg",
            "./IMAG/eight.jpg",
            "./IMAG/nine.jpg",
            "./IMAG/ten.jpg",
            "./IMAG/eleven.jpg",
            "./IMAG/twelve.jpg",
            "./IMAG/thirteen.jpg",
            "./IMAG/fourteen.jpg",
            "./IMAG/fifteen.jpg",
            "./IMAG/seventh.jpg",
            "./IMAG/eighth.jpg",
            "./IMAG/nineth.jpg",
            "./IMAG/twenth.jpg",

        ],
        record:
        [
           {name:"MRS GORGE", info: "BACK:8.5, BURST:44, HALF LENGTH:17.5, WAIST:39, UB:15.5, UBW:36, BLOUSE LENGTH:11, NIPPLES:8, ROUND S:13.5, SLEEVE LENGTH:(LONG:18, SHORT:12), SKIRT LENGHT:(LONG:42, SHORT:32), HIP: 52. SKIRT WAIST:40+ELASTIC, SKIRT KNEE:20, GOWN LENGTH(LONG:60, SHORT:43), KNEE:36.5"}
        ]
    }

]
if (localStorage.getItem('FASHION')) {
    myData=JSON.parse(localStorage.getItem('FASHION'))
}
else{
    localStorage.setItem('FASHION', JSON.stringify(myData))
}


handleToggle = () => {
    menu.hidden = false;
}

handleClick = () => {
    menu.hidden = true;
}
handleDesign = () => {
    menu.hidden = true;
    myCut.hidden = false;
}
handleCloseD = () => {
    myCut.hidden = true;
    addDesign.hidden = true;
    oldRecord.hidden = true;
    newRecord.hidden = true;
}
handleaddDesign = () => {
    menu.hidden = true;
    addDesign.hidden = false;
}
handleOdRecord = () => {
    menu.hidden = true;
    oldRecord.hidden = false;
}
handlenewRecord = () => {
    menu.hidden = true;
    newRecord.hidden = false;
}
handleSource = (params) => {
   if (params.id=="custoname") {
       name=params.value;
   }
   else{
       info=params.innerHTML;
   }
}

handleSaveDetail = () => {
    newRecord.hidden = true;
    myData[0].record.push({name:name, info:info});
    localStorage.setItem('FASHION', JSON.stringify(myData))
    handleOldRecord();
}


handleFile = () => {
    document.getElementById('file').click();
}
handleChange=()=>{
    let file = document.getElementById("file").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
    myData[0].design.push(reader.result);
    localStorage.setItem('FASHION', JSON.stringify(myData))
    addDesign.hidden = true;
    handleDispD();
    }.bind(this);
}

handleDispD = () => {
    ourDesign.innerHTML="";
    for (let i = 0; i < myData[0].design.length; i++) {
        ourDesign.innerHTML += `
        <div class="pics">
        <img src=${myData[0].design[i]} alt="">
         </div>
         `
    }
}
handleOldRecord = () => {
    recordBody.innerHTML="";
    for (let i = 0; i < myData[0].record.length; i++) {
        recordBody.innerHTML += `
        <div class="pics">
        <div>${myData[0].record[i].name}</div>
         <p id="picss" contenteditable="false">${myData[0].record[i].info}</p>
         <button class="btn btn-primary" id="save"  onclick="handleEdit(${i})">EDIT</button>
         </div>
         `
    }
}

handleEdit=(params)=>{
    console.log(params);
  clk++
  let picss=document.querySelectorAll('#picss');
  let bts=document.querySelectorAll('#save');
  if (clk==1) {
    picss[params].setAttribute('contenteditable', 'true');
    bts[params].innerHTML="SAVE"
  }
  else{
    picss[params].setAttribute('contenteditable', 'false');
    bts[params].innerHTML="EDIT" 
    myData[0].record[params].info= picss[params].innerHTML;
    localStorage.setItem('FASHION', JSON.stringify(myData))
    oldRecord.hidden = true;
    setTimeout(() => {
        clk=0;
    }, 10);
  }
//   for (let j = 0; j < picss.length; j++) {
//       picss[i] 
//   }
}

handleDispD();
handleOldRecord();