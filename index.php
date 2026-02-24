<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Speed Test</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-blue-500">
    <div class="font-serif text-center mt-20">
        <div class="text-3xl mb-20">
           <h2>Internet Speed Test</h2>
        </div>
        <div class="text-2xl">
            <div class="mb-20"> 
                <button onClick="startTest()" class=" border border-black bg-gray rounded-lg">Start Test</button><br/>
            </div>
            <div>
                <p>Ping: <span id="ping">-</span> ms</p>
                <p>Download: <span id="download">-</span> Mbps</p>
                <p>Upload: <span id="upload">-</span> Mbps</p>

                <script src="app.js"></script></div>
            </div>
        </div>
    </div>
</body>
</html>
