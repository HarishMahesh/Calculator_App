const displayBox = document.getElementById('display');
window.localStorage.setItem('localM',0)

const memIndicator = document.getElementById('memory-indicator') 
function textDisplay(char)
{
   displayBox.value = displayBox.value + char; 
}

function clearSingleChar()
{
    if (displayBox.value)
    {
        displayBox.value = displayBox.value.slice(0,displayBox.value.length - 1)
    }
}

function allClear()
{
    displayBox.value = '';
}

function DisplayKeyboarInput(event)
{
    let eventCode = event.keyCode;
    let char = event.key;
    if ((eventCode >= 45 && eventCode <= 57))
    {
        displayBox.value = displayBox.value + char;
    }
    else
    {
        window.alert('Only Number are Allowed')
    }
}

function displayOutput()
{
    let output;
    try {
        output = eval(displayBox.value);
    }catch(err)
    {
        alert('Invalid Operation');
        displayBox.value = ''
        
    }
   
    if (output == Infinity)
    { 
        displayBox.value = '';
        alert('Resulted output is Infinity')
    }else if (output != undefined)
    {
       displayBox.value = output;
    }
    return output;
}

function memoryPlus()
{
    let inputValue = +displayOutput();
    let storedValue = +window.localStorage.getItem('localM');
    if (!storedValue && inputValue)
    {
        memIndicator.style.background = 'teal'
    }

    if(inputValue)
    {
        storedValue = storedValue + inputValue;
        window.localStorage.setItem('localM',storedValue);
        displayBox.value = '';
    }

}

function memoryMinus()
{
    let inputValue = +displayOutput();
    let storedValue = +window.localStorage.getItem('localM');
    if (!storedValue && inputValue)
    {
        console.log('hi');
        memIndicator.style.background = 'teal'
    }

    if(inputValue)
    {
        storedValue = storedValue - inputValue;
        window.localStorage.setItem('localM',storedValue);
        displayBox.value = '';
    }

}

function memoryOutput()
{
    let storedValue = +window.localStorage.getItem('localM');
    if (storedValue)
    {
        displayBox.value = storedValue;
    }
}

function memoryReset()
{
    let storedValue = +window.localStorage.getItem('localM');
    console.log('inside',storedValue)
    if (storedValue)
    {
        console.log('mem');
        window.localStorage.setItem('localM',0);
        memIndicator.style.background = '#e8f1f0'
    }
}