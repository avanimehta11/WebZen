function generateSTYLE() {
  return `
    <style>
    @import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono|Montserrat:700");
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        color: inherit;
    }
    
    body {
        background-image: linear-gradient(120deg, #A5C9CA 0%, #395B64 100%);
        height: 100vh;
    }
    
    h1 {
        font-size: 45vw;
        text-align: center;
        position: fixed;
        width: 100vw;
        z-index: 1;
        color: #A5C9CA;
        text-shadow: 0 0 50px rgba(0, 0, 0, 0.07);
        top: 50%;
        transform: translateY(-50%);
        font-family: "Montserrat", monospace;
    }
    
    div {
        background: rgba(255, 10, 10, 0.5);
        width: 70vw;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 auto;
        padding: 30px 30px 10px;
        box-shadow: 0 0 150px -20px rgba(0, 0, 0, 0.5);
        z-index: 3;
        border-radius: 5px;
    }
    
    P {
        font-family: "Share Tech Mono", monospace;
        color: #f5f5f5;
        margin: 0 0 20px;
        font-size: 17px;
        line-height: 1.2;
        font-weight: 900;
    }
    
    span {
        color: #f5f5f5;
    }
    
    i {
        color: #2C3333;
        font-weight: bolder;
    }
    
    b {
        color: #2C3333;
    }
    
    @keyframes slide {
        from {
            right: -100px;
            transform: rotate(360deg);
            opacity: 0;
        }
        to {
            right: 15px;
            transform: rotate(0deg);
            opacity: 1;
        }
    }    
    </style>`;
}

window.generateSTYLE = generateSTYLE;
