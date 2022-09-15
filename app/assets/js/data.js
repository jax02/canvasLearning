console.log('data start');
const lessons=[
    {
        title:"lesson 1",
        description: 'draw a rectangle',
        code2Learn:`\nvar canvas = document.getElementById('pane');
        \nvar ctx = canvas.getContext('2d');
        \nctx.clearRect(0,0,canvas.width,canvas.height);
        \nctx.fillRect(10, 10, 50, 50);
        `,
        instruction:`//  top left corner (10,10) width 50 
        `,
        signature:{imageDiff: 0, totalPixels:2500},

        
    },
    {
        title:"lesson 2",
        description: 'draw a circle',
        code2Learn:`\nvar canvas = document.getElementById('pane');
        \n var ctx = canvas.getContext('2d');
        \n ctx.clearRect(0,0,canvas.width,canvas.height);
        \n ctx.beginPath();
        \n ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        \n ctx.strokeStyle="rgb(255,0,0)";
        \n ctx.lineWidth=4
        \n ctx.stroke();
        `,
        instruction:`//   CENTER AT (100,75) with radius 50
        `,
        signature:{imageDiff: 823, totalPixels:3164},
    
    },
    
    {
        title:"lesson 3",
        description: 'fill a circle',
        code2Learn:`\nvar canvas = document.getElementById('pane');
        \n var ctx = canvas.getContext('2d');
        \n ctx.clearRect(0,0,canvas.width,canvas.height);
        \n ctx.beginPath();
        \n ctx.arc(250, 200, 50, 0, 2 * Math.PI)
        \n ctx.fillStyle='green'
        \n ctx.fill();
        `,
        instruction:`// circle  at  (250,200) with radius 50
                        `,
        signature:{imageDiff: 519, totalPixels:16000},
        
    },{
        title:"lesson 4",
        description: 'draw a line',
        code2Learn:`\nvar canvas = document.getElementById('pane');
        \n var ctx = canvas.getContext('2d');
        \n ctx.clearRect(0,0,canvas.width,canvas.height);
        \n ctx.beginPath();
        \n ctx.moveTo(100,100);
        \n ctx.lineTo(300,300);
        \n ctx.lineWidth=10;
        \n ctx.stroke();
        `,
        instruction:`// draw a line : move to (100,100) and line to (300,300)
                        // using ctx as graphics context `,
        signature:{imageDiff: 410, totalPixels:3008},
        
    }
];
console.log(lessons);
console.log('data end');