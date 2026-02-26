async function startTest(){
    const car = document.getElementById("car");

    document.getElementById("ping").innerText = "-";
    document.getElementById("download").innerText = "-";
    document.getElementById("upload").innerText = "-";
    
    car.classList.remove("move-car");
    car.style.left = "-100px";

    await new Promise(resolve => setTimeout(resolve, 50));

    car.classList.add("move-car");

    await testPing();
    await testDownload();
    await testUpload();

    car.style.left = "calc(100% - 0px)";
}

async function testPing(){
    const start = performance.now();
    await fetch("ping.php");
    const end = performance.now();

    const ping = Math.round(end - start);
    document.getElementById("ping").innerText = ping;
}

async function testDownload(){
    const start = performance.now();

    const response = await fetch("download.php");
    const blob = await response.blob();

    const end = performance.now();

    const duration = (end- start) / 1000; //seconds
    const sizeInBits = blob.size * 8;
    const speedMbps = (sizeInBits / duration) / (1024 * 1024);

    document.getElementById("download").innerText = speedMbps.toFixed(2);
}

async function testUpload(){
    const size = 5 * 1024 * 1024; //5mb
    const data = new Uint8Array(size);

    const start = performance.now();

    await fetch("upload.php", {
        method: "POST",
        body: data
    });

    const end = performance.now();

    const duration = (end - start) / 1000;
    const sizeInBits = size * 8;
    const speedMbps = (sizeInBits / duration) / (1024 * 1024);

    document.getElementById("upload").innerText = speedMbps.toFixed(2);

}
