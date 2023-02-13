product1Value= parseFloat(prompt('Write 1 product value)'))
product1Amount= parseFloat(prompt('Write amount of 1 product)'))
product2Value= parseFloat(prompt('Write 2 product value)'))
product2Amount= parseFloat(prompt('Write amount of 2 product)'))
product3Value= parseFloat(prompt('Write 3 product value)'))
product3Amount= parseFloat(prompt('Write amount of 3 product)'))
document.write(`    
<div class="div1">
    <h1>Чек</h1>
    <div class="div2">Product1 ${product1Value}*${product1Amount}</div>
    <div class="div3">${product1Value*product1Amount}</div>
    <div class= "div4"> Product2 ${product2Value}*${product2Amount}</div>
    <div class= "div5"> ${product2Value*product2Amount}</div>
    <div class= "div6"> Product3 ${product3Value}*${product3Amount}</div>
    <div class="div7"> ${product3Value*product3Amount}</div>
    <h2>ЗАГАЛЬНА СУМА: ${product1Value*product1Amount+product2Value*product2Amount+product3Value*product3Amount}</h2>
    <h3>Дякую за покупку</h3>
</div>
`)