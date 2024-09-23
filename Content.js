let Moana_images= [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKXUDxAuPHWQ9J2ul8FXXGDvWYYdt4Tu1mA&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtmH4OzVMGQ3xzRwrECNR_JjW1Dx0Qmwq-g&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50NTM08sYMGZTO_Y1T6lvyyyojZmqXFXzVA&s",
];

const images=document.getElementByTagName("img")

for (let i=0; i<images.length; i++){
    const random=Math.floor(Math.random()*Moana_images.length);
    images[i].src=Moana_images[random];
}

const h1=document.getElementByTagName("h1")
for (let i=0;i<h1.length;i++){
    h1[i].innerText="Moonpie is Awesome!"
}

const h2=document.getElementByTagName("h2")
for (let i=0;i<h2.length;i++){
    h2[i].innerText="Moonpie is Awesome!"
}

const h3=document.getElementByTagName("h3")
for (let i=0;i<h3.length;i++){
    h3[i].innerText="Moonpie is Awesome!"
}
