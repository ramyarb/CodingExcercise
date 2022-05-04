var length = data.length;

// you work goes here
// -----------------------
console.log('Length of data '+length);

    //loop through each ball in data
    let ballAtPos;
    for(let i=0;i<=length;i++)
    {
        ballAtPos=data[i];
        create(ballAtPos.x,ballAtPos.y,ballAtPos.color);
    }
    

